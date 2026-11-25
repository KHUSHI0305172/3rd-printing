'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { waLink } from '@/data/site';
import { inr, summarise, buildQuoteMessage } from '@/lib/quoteUtils';

const when = (iso) => new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

export default function QuotesList({ quotes, user }) {
  const router = useRouter();
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');

  const del = async (q) => {
    if (!window.confirm(`Delete quotation ${q.ref}? This cannot be undone.`)) return;
    setBusy(q.id); setErr('');
    const res = await fetch(`/api/quotes/${q.id}`, { method: 'DELETE' });
    if (res.ok) router.refresh(); else setErr('Could not delete the quotation. Please try again.');
    setBusy('');
  };
  const again = (q) => {
    const parts = q.parts.map((p) => ({ ...p, state: 'ok' }));
    window.open(waLink(buildQuoteMessage(q.contact, user.email, parts, summarise(parts), q.ref)), '_blank');
  };

  return (
    <section className="alt" style={{ paddingTop: 50 }}>
      <div className="wrap">
        <div className="qtool" style={{ marginTop: 0 }}>
          <b>{quotes.length} quotation{quotes.length === 1 ? '' : 's'}</b>
          <Link className="btn" href="/quote">+ New quotation</Link>
        </div>
        {err && <div className="qerr" style={{ marginBottom: 14 }}>{err}</div>}

        {quotes.length === 0 ? (
          <div className="fcard" style={{ textAlign: 'center', padding: 50 }}>
            <h3>No quotations yet</h3>
            <p className="fsub" style={{ margin: '0 0 8px' }}>Upload your first 3D file and save the quotation here for later.</p>
            <div><Link className="btn" href="/quote">Create your first quotation</Link></div>
          </div>
        ) : quotes.map((q) => {
          const thumbs = q.parts.map((p) => p.a && p.a.thumb).filter(Boolean).slice(0, 4);
          return (
            <article className="qc" key={q.id}>
              <div className="qc-top">
                <div className="qc-th">{thumbs.length ? thumbs.map((t, i) => <img key={i} src={t} alt="" />) : <span>3D</span>}</div>
                <div className="qc-info">
                  <div className="qc-ref"><b>{q.ref}</b><span className={'pill2 ' + (q.status === 'requested' ? 'ok' : 'wait')}>{q.status === 'requested' ? 'Requested' : 'Saved'}</span></div>
                  <h3>{q.name || (q.parts[0].name + (q.parts.length > 1 ? ` + ${q.parts.length - 1} more` : ''))}</h3>
                  <small suppressHydrationWarning>Updated {when(q.updatedAt)}{q.requestedAt ? ` · Requested ${when(q.requestedAt)}` : ''}</small>
                </div>
                <div className="qc-tot">
                  <small>{q.parts.length} part{q.parts.length > 1 ? 's' : ''} · {q.totals.qty} pcs</small>
                  <b>{q.totals.hi ? `${inr(q.totals.lo)} – ${inr(q.totals.hi)}` : 'To be quoted'}</b>
                </div>
              </div>
              <details className="qc-d">
                <summary>View parts</summary>
                <div className="qc-parts">
                  {q.parts.map((p, i) => (
                    <div key={i}><b>{i + 1}. {p.name}</b>
                      <span>{p.spec.tech} · {p.spec.material} · {p.spec.colour}{p.spec.tech === 'FDM' ? ` · ${p.spec.infill}% infill` : ''} · {p.spec.layer} µm</span>
                      <span>Qty {p.qty}{p.a ? ` · ${p.a.size.map((v) => v.toFixed(1)).join(' × ')} mm · ${p.a.volume.toFixed(2)} cm³` : ''}</span>
                      {p.notes && <span>Note: {p.notes}</span>}
                    </div>
                  ))}
                </div>
              </details>
              <div className="qc-act">
                <Link className="btn sm" href={`/quote?edit=${q.id}`}>Open / Edit</Link>
                <button className="btn ghost sm" onClick={() => again(q)}>Send on WhatsApp</button>
                <button className="btn ghost sm del" onClick={() => del(q)} disabled={busy === q.id}>{busy === q.id ? 'Deleting…' : 'Delete'}</button>
              </div>
            </article>
          );
        })}
        <p className="fsub" style={{ marginTop: 18 }}>Your 3D files are not stored on the website. When you send a quotation again, attach the files in the WhatsApp chat.</p>
      </div>
    </section>
  );
}
