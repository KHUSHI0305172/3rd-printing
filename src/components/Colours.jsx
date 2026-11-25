const CHK = 'repeating-conic-gradient(#d9d9d9 0 25%,#fff 0 50%) 0 0/12px 12px';
const EXTRA = { Clear: CHK, Amber: '#e0a030', 'Dark Grey': '#4a4e57', Purple: '#6f3fc0' };

// Each colour is shown as a small "printed rook" in that colour, with a tinted name pill below.
export default function Colours({ data }) {
  const map = { ...EXTRA };
  data.groups.forEach((g) => g.items.forEach(([n, c]) => { map[n] = c; }));
  return (
    <>
      {data.groups.map((g) => (
        <div className="cg" key={g.title}>
          <div className="cg-t"><h3>{g.title}</h3><i /></div>
          <div className="swg">
            {g.items.map(([name, bg]) => (
              <div className="sw" key={name}>
                <span className="rkw"><span className="rk" style={{ background: bg }} /><span className="rk sh" /></span>
                <em style={bg.startsWith('#') ? { '--c': bg } : undefined}>{name}</em>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="avh"><span>🎨</span><h3>{data.availTitle}</h3></div>
      <div className="av2">
        {data.avail.map(([name, text, dots]) => (
          <div className="avc" key={name}>
            <h4>{name}</h4>
            <div className="dd">{dots.map((d) => <i key={d} title={d} style={{ background: map[d] || '#ccc' }} />)}</div>
            <p>{text}</p>
          </div>
        ))}
      </div>
      {data.note && <div className="nbar"><span>i</span>{data.note}</div>}
    </>
  );
}
