'use client';
import { useEffect, useRef, useState } from 'react';
import { aboutStats } from '@/data/site';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), D = 1600;
      const tick = (t) => {
        const p = Math.min((t - t0) / D, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <b ref={ref}>{n}{suffix}</b>;
}

// Animated counters (count up when scrolled into view). Edit the numbers in src/data/site.js.
export default function StatsBand() {
  return (
    <section className="sband">
      <div className="wrap">
        <div className="sgrid">
          {aboutStats.map((s) => (
            <div className="sc" key={s.label}>
              <i>{s.icon}</i>
              <Counter value={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
