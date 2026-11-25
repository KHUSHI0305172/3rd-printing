'use client';
import { useState } from 'react';
import { waLink } from '@/data/site';

const LABELS = ['Tap a star to rate', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

// Inline feedback form: star rating + text box. Sending opens WhatsApp with the message ready (no backend needed).
export default function Feedback() {
  const [r, setR] = useState(0);
  const [hv, setHv] = useState(0);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const stars = r ? '★'.repeat(r) + '☆'.repeat(5 - r) + ` (${r}/5)` : 'not given';
    window.open(waLink(`Feedback for Aqua 3D\nRating: ${stars}\nName: ${name || '-'}\nMessage: ${msg}`), '_blank');
    setDone(true); setMsg(''); setName(''); setR(0);
  };

  if (done) {
    return (
      <div className="fbf fb-ok">
        <b>🎉 Thank you for your feedback!</b>
        <p>Please press send in WhatsApp to share it with us.</p>
        <button type="button" className="btn ghost sm" onClick={() => setDone(false)}>Send another</button>
      </div>
    );
  }

  return (
    <form className="fbf" onSubmit={submit}>
      <div onMouseLeave={() => setHv(0)}>
        <div className="rate">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" aria-label={`${n} star`} className={n <= (hv || r) ? 'on' : ''}
              onMouseEnter={() => setHv(n)} onClick={() => setR(n)}>★</button>
          ))}
        </div>
        <small className="rl">{LABELS[hv || r]}</small>
      </div>
      <input placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea rows={3} required placeholder="Write your feedback here..." value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button className="btn sm" type="submit">Send feedback</button>
    </form>
  );
}
