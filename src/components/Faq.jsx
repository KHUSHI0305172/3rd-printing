import SectionHead from './SectionHead';
import { faqs } from '@/data/site';

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 800 }}>
        <SectionHead eyebrow="FAQ" title="Common questions" />
        {faqs.map((f) => (
          <details className="rv" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
      </div>
    </section>
  );
}
