import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { saveQuote, deleteQuote } from '@/lib/quotes';
import { cleanQuote } from '@/lib/quoteSchema';

export const runtime = 'nodejs';
const notFound = () => NextResponse.json({ error: 'Quotation not found.' }, { status: 404 });

export async function PUT(req, { params }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Please login first.' }, { status: 401 });
  const text = await req.text();
  if (text.length > 2_500_000) return NextResponse.json({ error: 'Quotation is too large.' }, { status: 413 });
  let body;
  try { body = JSON.parse(text); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const clean = cleanQuote(body);
  if (clean.error) return NextResponse.json({ error: clean.error }, { status: 400 });
  try {
    const q = await saveQuote(user.id, clean, params.id);
    return NextResponse.json({ quote: { id: q.id, ref: q.ref, status: q.status, updatedAt: q.updatedAt } });
  } catch (e) {
    if (e.message === 'NOTFOUND') return notFound();
    console.error('update quote failed', e);
    return NextResponse.json({ error: 'Could not save the quotation.' }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Please login first.' }, { status: 401 });
  try {
    await deleteQuote(user.id, params.id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e.message === 'NOTFOUND') return notFound();
    return NextResponse.json({ error: 'Could not delete.' }, { status: 500 });
  }
}
