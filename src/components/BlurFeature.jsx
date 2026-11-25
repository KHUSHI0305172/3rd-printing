'use client';
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';

// Real printed parts (landscape photos fit the panel best). Each one is shown twice: blurred as the background, sharp in the front.
const PICK = [['statues-figurines', 0, 'Figurines & statues'], ['water-treatment-plant', 0, 'Water treatment plant model'], ['motor-blower', 0, 'Motor & blower model'], ['building-model', 0, 'Architectural building model'], ['water-treatment-plant', 2, 'Tank & pump assembly'], ['crawler-cranes', 3, 'Crawler crane model']];
const SLIDES = PICK.map(([slug, i, label]) => ({ label, src: projects.find((p) => p.slug === slug).photos[i].src }));

export default function BlurFeature() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, [i]);
  return (
    <div className="bf">
      {SLIDES.map((s, k) => <img key={'b' + s.src} className={'bg' + (k === i ? ' on' : '')} src={s.src} alt="" aria-hidden="true" loading={k === 0 ? 'eager' : 'lazy'} />)}
      <div className="bf-sh" />
      {SLIDES.map((s, k) => (
        <div key={'f' + s.src} className={'fgw' + (k === i ? ' on' : '')}>
          <img src={s.src} alt={s.label} loading={k === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="bf-cap">📷 {SLIDES[i].label}</div>
      <div className="bf-dots">{SLIDES.map((s, k) => <button key={s.src} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Show ${s.label}`} />)}</div>
    </div>
  );
}
