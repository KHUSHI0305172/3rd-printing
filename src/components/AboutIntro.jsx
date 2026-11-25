import { projects } from '@/data/projects';

const photo = (slug, i = 0) => projects.find((p) => p.slug === slug).photos[i].thumb;
const CHIPS = [['🏭', 'Industrial & individual customers'], ['🧩', 'Prototype to production parts'], ['✏️', 'Design to final printed part']];

export default function AboutIntro() {
  return (
    <section className="ai-sec">
      <div className="wrap ai">
        <div>
          <div className="eyebrow">Who we are</div>
          <h2 className="rv">Professional 3D printing, <span className="grad">customized for you</span></h2>
          <p className="lead2 rv">
            Aqua 3D is a professional 3D printing service provider focused on delivering customized, high-quality 3D printed products and solutions. We serve both industrial and individual customers with rapid prototyping, functional components, customized products and small-batch production.
          </p>
          <div className="goal rv">
            <b>Our goal</b>
            <p>To make 3D printing accessible, reliable and cost-effective — from a single prototype to multiple production parts.</p>
          </div>
          <div className="chips3 rv">{CHIPS.map(([ic, t]) => <span key={t}><em>{ic}</em>{t}</span>)}</div>
        </div>

        <div className="collage rv" aria-hidden="true">
          <i className="blob1" />
          <div className="ph a"><img src={photo('crawler-cranes')} alt="" loading="lazy" /></div>
          <div className="ph b"><img src={photo('statues-figurines')} alt="" loading="lazy" /></div>
          <div className="ph c"><img src={photo('water-treatment-plant')} alt="" loading="lazy" /></div>
          <div className="lbadge"><img src="/logo-full.png" alt="" /></div>
          <div className="fchip fl1">📷 Real projects</div>
          <div className="fchip fl2">✔ Quality focused</div>
        </div>
      </div>
    </section>
  );
}
