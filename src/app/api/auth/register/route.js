import { NextResponse } from 'next/server';
import { createUser } from '@/lib/users';
import { hashPassword, sessionCookie, publicUser } from '@/lib/auth';

export const runtime = 'nodejs';
const bad = (error, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return bad('Invalid request'); }
  const name = String(b.name || '').trim();
  const email = String(b.email || '').trim().toLowerCase();
  const phone = String(b.phone || '').trim();
  const password = String(b.password || '');

  if (name.length < 2) return bad('Please enter your full name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad('Please enter a valid email address.');
  if (phone.replace(/\D/g, '').length < 10) return bad('Please enter a valid phone number.');
  if (password.length < 8) return bad('Password must be at least 8 characters.');

  try {
    const user = await createUser({ name, email, phone, passwordHash: hashPassword(password) });
    const res = NextResponse.json({ user: publicUser(user) });
    res.cookies.set(sessionCookie(user.id));
    return res;
  } catch (e) {
    if (e.message === 'EXISTS') return bad('An account with this email already exists. Please login.', 409);
    console.error('register failed', e);
    return bad('Could not create your account. Please try again.', 500);
  }
}
