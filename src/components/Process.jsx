import SectionHead from './SectionHead';
import { steps } from '@/data/site';

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <SectionHead eyebrow="Process" title="Our Working Process" sub="Simple, transparent and quick." />
        <div className="grid g4 steps">
          {steps.map((s) => (
            <div className="card step rv" key={s.title}><h3>{s.title}</h3><p>{s.desc}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
