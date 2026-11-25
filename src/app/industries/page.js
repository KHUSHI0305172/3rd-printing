import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';
import SectionHead from '@/components/SectionHead';
import { industries } from '@/data/site';

export const metadata = { title: 'Industries' };

const STATS = [['20+', 'Industry segments'], ['2', 'Industrial & individual customers'], ['1 → many', 'Single piece to bulk orders'], ['Design → Part', 'Support till final printed part']];
const DELIVER = [['🧩', 'Rapid Prototyping', 'Turn a design into a physical part quickly.'], ['⚙️', 'Functional Components', 'Parts that work, not just look good.'], ['🎨', 'Customized Products', 'Made to your design and requirement.'], ['📦', 'Small-Batch Production', 'Multiple parts with consistent quality.']];

export default function Industries() {
  return (
    <>
      <PageHeader art="industries" eyebrow="Industries" title="20+ Industry Segments" text="We serve industrial and individual customers across a wide range of fields." />
      <section style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <div className="grid g4">
            {STATS.map(([b, s]) => <div className="card stat rv" key={s}><b>{b}</b><span>{s}</span></div>)}
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="Segments" title="Industries we work with" sub="Whatever your field, we can print the part you need." />
          <div className="ig">
            {industries.map((i, n) => (
              <div className="ic2 rv" key={i.title}>
                <span className="ic2-n">{String(n + 1).padStart(2, '0')}</span>
                <div className="ic2-i">{i.icon}</div>
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
                <Link href="/quote">Get a quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <SectionHead eyebrow="What we deliver" title="One service, every industry" sub="The same quality-focused 3D printing, whichever industry you are in." />
          <div className="grid g4">
            {DELIVER.map(([ic, t, d]) => <div className="card rv" key={t}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
