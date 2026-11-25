'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { projects, projectCats } from '@/data/projects';
import { waLink } from '@/data/site';

const CAT = Object.fromEntries(projectCats);

export default function Gallery() {
  const [f, setF] = useState('all');
  const [open, setOpen] = useState(null); // { p: project, i: photo index }
  const list = projects.filter((p) => f === 'all' || p.cat === f);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((o) => (o ? { ...o, i: (o.i + d + o.p.photos.length) % o.p.photos.length } : o)), []);

  useEffect(() => {
    if (!open) return;
    const key = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); };
    window.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [open, close, step]);

  return (
    <section style={{ paddingTop: 50 }}>
      <div className="wrap">
        <div className="flt">
          {projectCats.map(([k, l]) => (
            <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>
              {l} <em>{k === 'all' ? projects.length : projects.filter((p) => p.cat === k).length}</em>
            </button>
          ))}
        </div>

        <div className="pj">
          {list.map((p) => (
            <article key={p.slug} className="pjc" tabIndex={0} onClick={() => setOpen({ p, i: 0 })} onKeyDown={(e) => e.key === 'Enter' && setOpen({ p, i: 0 })}>
              <div className="pjc-img">
                <img src={p.photos[0].thumb} alt={p.title} loading="lazy" />
                <span className="pjc-n">📷 {p.photos.length}</span>
                <span className="pjc-v">View photos</span>
              </div>
              <div className="pjc-b">
                <span className="gt-cat dark">{CAT[p.cat]}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (() => {
        const { p, i } = open, n = p.photos.length;
        return (
          <div className="lb" onClick={close}>
            <div className="lb-in" onClick={(e) => e.stopPropagation()}>
              <button className="lb-x" onClick={close} aria-label="Close">✕</button>
              <div className="lb-main">
                <img src={p.photos[i].src} alt={`${p.title} photo ${i + 1}`} />
                {n > 1 && <button className="lb-n prev" onClick={() => step(-1)} aria-label="Previous photo">‹</button>}
                {n > 1 && <button className="lb-n next" onClick={() => step(1)} aria-label="Next photo">›</button>}
                <span className="lb-c">{i + 1} / {n}</span>
              </div>
              <div className="lb-side">
                <span className="gt-cat dark">{CAT[p.cat]}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="lb-th">
                  {p.photos.map((ph, k) => (
                    <button key={ph.thumb} className={k === i ? 'on' : ''} onClick={() => setOpen({ p, i: k })} aria-label={`Photo ${k + 1}`}><img src={ph.thumb} alt="" /></button>
                  ))}
                </div>
                <div className="cta-row">
                  <Link className="btn" href="/quote">Request a similar project</Link>
                  <a className="btn ghost" href={waLink(`Hi, I want a project similar to: ${p.title}`)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
