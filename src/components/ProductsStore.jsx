'use client';
import { useState } from 'react';
import Link from 'next/link';
import { prints, waLink, fdmColours, whyChoose } from '@/data/site';

const CATS = [['all', 'All Products'], ['gift', 'Gifts'], ['part', 'Spare parts'], ['prototype', 'Prototypes'], ['model', 'Models']];
const NAME = Object.fromEntries(CATS);
const DOTS = fdmColours.groups[0].items.slice(0, 7).map((x) => x[1]);
const FEATURES = [['🧍', 'Single-piece and bulk orders'], ['🧪', 'Multiple material options'], ['🛠️', 'Custom part manufacturing']];

export default function ProductsStore() {
  const [f, setF] = useState('all');
  const list = prints.filter((p) => f === 'all' || p.cat === f);
  return (
    <section style={{ paddingTop: 50 }}>
      <div className="wrap">
        <div className="fs">
          {FEATURES.map(([ic, t]) => <div key={t}><span>{ic}</span>{t}</div>)}
        </div>
        <div className="flt">
          {CATS.map(([k, l]) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{l}</button>)}
        </div>
        <div className="pgrid">
          {list.map((p) => (
            <article className="pd" key={p.title}>
              <div className="pd-img" style={{ background: `linear-gradient(135deg,${p.bg})` }}>
                <span className="pd-badge">Customizable</span>
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: p.svg }} />
              </div>
              <div className="pd-body">
                <span className="pd-cat">{NAME[p.cat]}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="cdots">{DOTS.map((c, i) => <i key={i} style={{ background: c }} />)}<small>+ more colours</small></div>
                <div className="pd-foot">
                  <div><small>Price</small><b>On request</b></div>
                  <div className="pd-btns">
                    <Link className="btn ghost sm" href="/quote">Customize</Link>
                    <a className="btn sm" href={waLink(`Hi, I want to order: ${p.title}`)} target="_blank" rel="noopener noreferrer">Enquire</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
