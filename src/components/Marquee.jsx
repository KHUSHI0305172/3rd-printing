import { materials } from '@/data/site';

export default function Marquee() {
  const items = [...materials, ...materials, ...materials, ...materials];
  return (
    <div className="strip">
      <div>{items.map((m, i) => <span key={i}>{m}</span>)}</div>
    </div>
  );
}
