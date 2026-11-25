'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { projects, projectCats } from '@/data/projects';

const CAT = Object.fromEntries(projectCats);
// [project slug, photo index] – landscape photos fit the cards best
const PICK = [['water-treatment-plant', 0], ['statues-figurines', 0], ['motor-blower', 0], ['building-model', 0], ['crawler-cranes', 3], ['charging-station', 1]];
const ITEMS = PICK.map(([slug, i]) => {
  const p = projects.find((x) => x.slug === slug);
  return { slug, title: p.title, desc: p.desc, cat: CAT[p.cat], count: p.photos.length, src: p.photos[i].src };
});

const Ico = ({ d, size = 26 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const CUBE = <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9" /></>;
const LAYERS = <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" /></>;
const CAM = <><rect x="3" y="7" width="18" height="13" rx="3" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></>;

export default function RecentPrints() {
  const n = ITEMS.length;
  const [a, setA] = useState(0);
  const [paused, setPaused] = useState(false);
  const [liked, setLiked] = useState([]);
  const sx = useRef(null);
  const go = (d) => setA((x) => (x + d + n) % n);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setA((x) => (x + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, a, n]);

  const pos = (k) => { let d = (k - a + n) % n; if (d > n / 2) d -= n; return d; };

  return (
    <section className="rp" id="work">
      <div className="wrap">
        <div className="rp-h">
          <div>
            <div className="rp-eb"><i />Our creations</div>
            <h2>Recent <em>Prints</em></h2>
            <p className="rp-sub">A few things we have made for clients.</p>
          </div>
          <div className="rp-badge"><Ico d={CUBE} size={28} />3D Printed Excellence</div>
        </div>

        <div className="cf"
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onPointerDown={(e) => { sx.current = e.clientX; }}
          onPointerUp={(e) => { if (sx.current !== null) { const dx = e.clientX - sx.current; if (dx > 60) go(-1); else if (dx < -60) go(1); } sx.current = null; }}>
          <button className="cf-arr l" onClick={() => go(-1)} aria-label="Previous project">‹</button>
          <button className="cf-arr r" onClick={() => go(1)} aria-label="Next project">›</button>

          {ITEMS.map((it, k) => {
            const d = pos(k);
            const cls = d === 0 ? 'p0' : d === 1 ? 'p1' : d === -1 ? 'pm1' : 'px';
            const on = liked.includes(it.slug);
            return (
              <article key={it.slug} className={'cf-card ' + cls} onClick={() => d !== 0 && setA(k)} aria-hidden={d !== 0}>
                <img src={it.src} alt={it.title} loading={k === 0 ? 'eager' : 'lazy'} draggable="false" />
                <div className="cf-shade" />
                <span className="cf-chip"><Ico d={CAM} size={18} />{it.count} photos</span>
                <button className={'cf-heart' + (on ? ' on' : '')} aria-label="Like"
                  onClick={(e) => { e.stopPropagation(); setLiked((l) => (on ? l.filter((s) => s !== it.slug) : [...l, it.slug])); }}>♥</button>
                <div className="cf-info">
                  <span className="cf-ico"><Ico d={CUBE} /></span>
                  <div className="cf-t"><h3>{it.title}</h3><p>{it.desc}</p></div>
                  <span className="cf-sep" />
                  <div className="cf-m"><Ico d={LAYERS} size={30} /><div><b>{it.cat}</b><small>{it.count} photos</small></div></div>
                  <Link href="/projects" className="cf-go" aria-label={`View ${it.title}`} tabIndex={d === 0 ? 0 : -1}>→</Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="cf-dots">
          <i className="ln" />
          {ITEMS.map((it, k) => <button key={it.slug} className={k === a ? 'on' : ''} onClick={() => setA(k)} aria-label={`Show ${it.title}`} />)}
          <i className="ln r" />
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}><Link className="btn ghost" href="/projects">View all projects</Link></div>
      </div>
    </section>
  );
}
