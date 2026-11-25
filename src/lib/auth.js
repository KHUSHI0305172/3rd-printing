import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { findById } from './users';

const COOKIE = 'aqua3d_session';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function secret() {
  const s = process.env.AUTH_SECRET;
  if (s) return s;
  if (process.env.NODE_ENV !== 'production') return 'dev-only-secret-change-me';
  throw new Error('AUTH_SECRET environment variable is not set');
}
const sign = (data) => crypto.createHmac('sha256', secret()).update(data).digest('base64url');

// ---- passwords (scrypt + random salt) ----
export function hashPassword(pw) {
  const salt = crypto.randomBytes(16);
  return salt.toString('hex') + ':' + crypto.scryptSync(pw, salt, 64).toString('hex');
}
export function verifyPassword(pw, stored) {
  const [salt, hash] = String(stored).split(':');
  if (!salt || !hash) return false;
  const h = crypto.scryptSync(pw, Buffer.from(salt, 'hex'), 64);
  const b = Buffer.from(hash, 'hex');
  return h.length === b.length && crypto.timingSafeEqual(h, b);
}

// ---- signed session cookie ----
function makeToken(uid) {
  const payload = Buffer.from(JSON.stringify({ uid, exp: Date.now() + MAX_AGE * 1000 })).toString('base64url');
  return payload + '.' + sign(payload);
}
function readToken(token) {
  if (!token || !token.includes('.')) return null;
  const [payload, sig] = token.split('.');
  const a = Buffer.from(sig), b = Buffer.from(sign(payload));
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const d = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return d.exp > Date.now() ? d : null;
  } catch { return null; }
}

const base = () => ({ name: COOKIE, httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
export const sessionCookie = (uid) => ({ ...base(), value: makeToken(uid), maxAge: MAX_AGE });
export const clearCookie = () => ({ ...base(), value: '', maxAge: 0 });

export const publicUser = (u) => ({ id: u.id, name: u.name, email: u.email, phone: u.phone });

// Current logged-in user (or null). Use in server components / route handlers.
export async function getSession() {
  const d = readToken(cookies().get(COOKIE)?.value);
  if (!d) return null;
  const u = await findById(d.uid);
  return u ? publicUser(u) : null;
}

// Only allow redirects to pages on this site.
export const safeNext = (n) => (typeof n === 'string' && n.startsWith('/') && !n.startsWith('//') ? n : '/quote');
