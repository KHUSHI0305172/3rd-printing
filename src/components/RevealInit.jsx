'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Adds the scroll-in animation to every element with the "rv" class (re-runs on each page change).
export default function RevealInit() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.rv:not(.on)').forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 100 + 'ms';
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
