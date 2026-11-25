import { NextResponse } from 'next/server';
import { findByEmail } from '@/lib/users';
import { verifyPassword, sessionCookie, publicUser } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const email = String(b.email || '').trim().toLowerCase();
  const password = String(b.password || '');
  const user = email ? await findByEmail(email) : null;

  if (!user || !verifyPassword(password, user.passwordHash)) {
    await new Promise((r) => setTimeout(r, 500)); // slows down password guessing
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }
  const res = NextResponse.json({ user: publicUser(user) });
  res.cookies.set(sessionCookie(user.id));
  return res;
}
