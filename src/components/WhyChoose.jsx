import SectionHead from './SectionHead';
import { whyChoose } from '@/data/site';

export default function WhyChoose() {
  return (
    <section className="alt">
      <div className="wrap">
        <SectionHead eyebrow="Why choose us" title="Why Choose Aqua 3D?" />
        <div className="grid g3">
          {whyChoose.map((w) => <div className="card tk rv" key={w}>{w}</div>)}
        </div>
      </div>
    </section>
  );
}
