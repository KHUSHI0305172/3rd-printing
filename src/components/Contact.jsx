'use client';
import { useState } from 'react';
import Link from 'next/link';
import { waLink, contactOptions, steps } from '@/data/site';

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', service: contactOptions[0], msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(`Hi, I am ${f.name} (${f.phone}). Regarding: ${f.service}. ${f.msg}`), '_blank');
  };
  return (
    <section className="alt">
      <div className="wrap">
        <div className="contact">
          <form className="fcard" onSubmit={submit}>
            <h3>Send us a message</h3>
            <p className="fsub">Fill in your details and it opens WhatsApp with your message ready to send.</p>
            <div className="frow">
              <input placeholder="Your name" required value={f.name} onChange={set('name')} />
              <input placeholder="Phone number" inputMode="tel" value={f.phone} onChange={set('phone')} />
            </div>
            <select value={f.service} onChange={set('service')}>{contactOptions.map((o) => <option key={o}>{o}</option>)}</select>
            <textarea rows={5} placeholder="How can we help you?" value={f.msg} onChange={set('msg')} />
            <button className="btn" type="submit">Send on WhatsApp</button>
          </form>
          <div className="fcard">
            <h3>What happens next</h3>
            <p className="fsub">Our simple working process, from your requirement to delivery.</p>
            <div className="tl2">
              {steps.map((s, i) => <div key={s.title}><span className="n">{i + 1}</span><b>{s.title}</b><p>{s.desc}</p></div>)}
            </div>
            <Link className="btn ghost" href="/quote" style={{ marginTop: 6 }}>Get Instant Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
