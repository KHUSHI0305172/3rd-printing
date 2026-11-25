export default function PrintCard({ p, cta }) {
  return (
    <div className="pc">
      <div className="pv" style={{ background: `linear-gradient(135deg,${p.bg})` }}>
        <span className="tm">⏱ {p.time}</span>
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: p.svg }} />
      </div>
      <div className="pi">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        {cta}
      </div>
    </div>
  );
}
