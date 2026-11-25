'use client';
import { useEffect, useState } from 'react';
import SectionHead from './SectionHead';
import { reviews } from '@/data/site';

export default function Reviews() {
  const n = reviews.length;
  const [ix, setIx] = useState(0);
  const go = (i) => setIx((i + n) % n);

  useEffect(() => {
    const t = setInterval(() => setIx((i) => (i + 1) % n), 7000);
    return () => clearInterval(t);
  }, [ix, n]);

  return (
    <section className="alt">
      <div className="wrap">
        <SectionHead eyebrow="Reviews" title="What clients say" sub="Feedback from our clients on our 3D printing services." />
        <div className="rvw rv">
          <div className="rsum">
            <h3>Client feedback</h3>
            <p>Choose a service to read the feedback.</p>
            <div className="rtabs">
              {reviews.map((r, i) => (
                <button key={r.service} className={'rtab' + (i === ix ? ' on' : '')} onClick={() => go(i)}>
                  <span>{r.icon}</span>{r.service}
                </button>
              ))}
            </div>
          </div>
          <div className="car">
            <div className="trk" style={{ transform: `translateX(-${ix * 100}%)` }}>
              {reviews.map((r) => (
                <div className="sl" key={r.service}>
                  <div className="q">“</div>
                  <p>{r.text}</p>
                  <div className="who">
                    <span className="avt">{r.icon}</span>
                    <div><b>{r.service}</b><small>Client feedback</small></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ctl">
              <button onClick={() => go(ix - 1)} aria-label="Previous">←</button>
              <div className="dots">{reviews.map((r, i) => <i key={r.service} className={i === ix ? 'on' : ''} onClick={() => go(i)} />)}</div>
              <button onClick={() => go(ix + 1)} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
