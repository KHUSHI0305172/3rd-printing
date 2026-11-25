import SectionHead from './SectionHead';
import { expertise } from '@/data/site';

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="wrap">
        <SectionHead eyebrow="What we do" title="Our Expertise" sub="Industrial and retail 3D printing solutions, from a single prototype to multiple production parts." />
        <div className="grid g4">
          {expertise.map((e, i) => (
            <div className="card rv" key={e.title}>
              <div className="ic">{e.icon}</div>
              <h3>{i + 1}. {e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
