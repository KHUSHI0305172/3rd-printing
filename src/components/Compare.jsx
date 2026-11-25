const Dots = ({ n }) => (
  <span className="dots" aria-label={`${n} out of 5`}>{[1, 2, 3, 4, 5].map((i) => <i key={i} className={i <= n ? 'f' : ''} />)}</span>
);

// Generic comparison table: cols = [{name, sub, color, v: [...], d: [...ratings 1-5], price}]
export default function Compare({ cols, valueLabels, dotLabels, guide, uses }) {
  return (
    <>
      <div className="cmp">
        <table>
          <thead>
            <tr>
              <th>Property<small>(Typical Values)</small></th>
              {cols.map((m) => <th key={m.name} className="cc" style={{ background: m.color }}>{m.name}<small>{m.sub || '\u00a0'}</small></th>)}
            </tr>
          </thead>
          <tbody>
            {valueLabels.map((label, i) => (
              <tr key={label}><th>{label}</th>{cols.map((m) => <td key={m.name}>{m.v[i]}</td>)}</tr>
            ))}
            {dotLabels.map((label, i) => (
              <tr key={label}><th>{label}</th>{cols.map((m) => <td key={m.name}><Dots n={m.d[i]} /></td>)}</tr>
            ))}
            <tr><th>Printing Price<small>(Indicative)</small></th>{cols.map((m) => <td key={m.name} className="pp">{m.price}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <div className="guide">
        <div className="gcard">
          <h3>Quick Selection Guide</h3>
          <div className="qs">{guide.map(([t, v]) => <div key={t}><b>{t}</b><span>{v}</span></div>)}</div>
        </div>
        <div className="gcard">
          <h3>Common Applications</h3>
          <ul className="uses">{uses.map(([k, v]) => <li key={k}><b>{k}</b> – {v}</li>)}</ul>
        </div>
      </div>
    </>
  );
}
