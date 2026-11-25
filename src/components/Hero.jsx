import Link from 'next/link';
import CarScene from './CarScene';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div>
          <span className="badge"><b>●</b> Professional 3D printing service</span>
          <h1>Turning ideas into <em>reality</em> with 3D printing</h1>
          <p className="lead">Customized, high-quality 3D printed products and solutions for industrial and individual customers.</p>
          <div className="cta-row">
            <Link className="btn" href="/quote">Get Instant Quote</Link>
            <Link className="btn ghost" href="/projects">See Our Work</Link>
          </div>
          <div className="stats">
            <div><b>Industrial</b><span>and retail solutions</span></div>
            <div><b>Prototype</b><span>to production parts</span></div>
            <div><b>Design</b><span>to final printed part</span></div>
          </div>
        </div>
        <CarScene />
      </div>
    </section>
  );
}
