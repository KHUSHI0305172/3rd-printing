import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { saveQuote } from '@/lib/quotes';
import { cleanQuote } from '@/lib/quoteSchema';

export const runtime = 'nodejs';

export async function POST(req) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Please login first.' }, { status: 401 });
  const text = await req.text();
  if (text.length > 2_500_000) return NextResponse.json({ error: 'Quotation is too large.' }, { status: 413 });
  let body;
  try { body = JSON.parse(text); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const clean = cleanQuote(body);
  if (clean.error) return NextResponse.json({ error: clean.error }, { status: 400 });
  try {
    const q = await saveQuote(user.id, clean);
    return NextResponse.json({ quote: { id: q.id, ref: q.ref, status: q.status, updatedAt: q.updatedAt } });
  } catch (e) {
    console.error('save quote failed', e);
    return NextResponse.json({ error: 'Could not save the quotation.' }, { status: 500 });
  }
}
