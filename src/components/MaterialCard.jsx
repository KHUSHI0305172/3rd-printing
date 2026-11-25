import Link from 'next/link';

const num = (s) => Math.max(...((s.match(/\d+(\.\d+)?/g) || ['0']).map(Number)));
const lvl = (v) => (/^(Excellent|Good)$/.test(v) ? 'ok' : /^(Moderate|Medium)$/.test(v) ? 'mid' : /^(Limited|Poor)$/.test(v) ? 'lo' : '');
const PF = ['Flexibility', 'Impact', 'Water', 'Chemical', 'UV'];

function Spool({ c }) {
  return (
    <svg viewBox="0 0 120 120" className="mx-art" aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="#f4f7f8" />
      <circle cx="60" cy="60" r="44" fill={c} />
      {[39, 34, 29, 24].map((r) => <circle key={r} cx="60" cy="60" r={r} fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1.5" />)}
      <circle cx="60" cy="60" r="20" fill="#f4f7f8" /><circle cx="60" cy="60" r="11" fill="#1b2a33" />
      <path d="M20 38 A44 44 0 0 1 46 18" stroke="#fff" strokeOpacity=".55" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Bottle({ c }) {
  return (
    <svg viewBox="0 0 120 120" className="mx-art" aria-hidden="true">
      <rect x="40" y="10" width="40" height="16" rx="4" fill="#2b3945" />
      <path d="M44 26h32v10q16 8 16 26v40q0 8-8 8H36q-8 0-8-8V62q0-18 16-26z" fill={c} />
      <rect x="28" y="62" width="64" height="30" fill="#fff" opacity=".88" />
      <text x="60" y="83" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0e6478" fontFamily="system-ui,sans-serif">AQUA 3D</text>
      <path d="M38 44 q-6 14 -4 34" stroke="#fff" strokeOpacity=".5" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Rows({ title, rows }) {
  return (
    <div>
      <h4>{title}</h4>
      {rows.map(([k, v]) => <div className="sp" key={k}><span>{k}</span><b>{v}</b></div>)}
    </div>
  );
}

// kind: 'fdm' | 'resin'. color: accent colour of the material.
export default function MaterialCard({ m, kind, color }) {
  const sc = kind === 'fdm' ? [100, 150, 160] : [90, 150, 160];
  const meters = [
    ['Tensile Strength', m.mech[0][1], num(m.mech[0][1]) / sc[0]],
    ['Flexural Strength', m.mech[1][1], num(m.mech[1][1]) / sc[1]],
    ['Heat Resistance (HDT)', m.therm[0][1], num(m.therm[0][1]) / sc[2]],
  ];
  const apps = m.apps.replace(/\.$/, '').split(/,\s*/);
  const all = kind === 'fdm' ? [['Mechanical Properties', m.mech], ['Thermal Properties', m.therm]] : [['Mechanical Properties', m.mech], ['Thermal Properties', m.therm], ['Performance Properties', m.perf]];
  return (
    <article className="mx">
      <div className="mx-top" style={{ background: `linear-gradient(135deg,${color},color-mix(in srgb,${color} 50%,#000))` }}>
        <div>
          <span className="mx-tag">{m.tag}</span>
          <h3>{m.name}{m.sub && <small>{m.sub}</small>}</h3>
        </div>
        {kind === 'fdm' ? <Spool c={color} /> : <Bottle c={color} />}
      </div>
      <div className="mx-body">
        <p className="tl">{m.line}</p>
        <div className="meters">
          {meters.map(([l, v, p]) => (
            <div className="mm" key={l}><div><span>{l}</span><b>{v}</b></div><i><u style={{ width: Math.min(p * 100, 100) + '%' }} /></i></div>
          ))}
        </div>
        {kind === 'fdm' && (
          <div className="pf2">{PF.map((l, i) => <span key={l} className={lvl(m.perf[i])}><em>{l}</em>{m.perf[i]}</span>)}</div>
        )}
        <div><h4>Best for</h4><div className="chips">{apps.map((a) => <span key={a}>{a}</span>)}</div></div>
        <details className="more">
          <summary>All properties</summary>
          <div className="allp">{all.map(([t, rows]) => <Rows key={t} title={t} rows={rows} />)}</div>
        </details>
        <div className="mx-foot">
          <div><small>Printing Price</small><b>{m.price}</b></div>
          <Link className="btn" href="/quote">Get quote</Link>
        </div>
      </div>
    </article>
  );
}
