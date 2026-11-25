import Link from 'next/link';
import HeroArt from './HeroArt';

// Hero banner used at the top of every inner page.
export default function PageHeader({ eyebrow, title, text, art = 'about' }) {
  return (
    <section className="phero">
      <div className="wrap">
        <div className="phero-in">
          <div>
            <nav className="crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>{eyebrow}</span>
            </nav>
            <span className="pill">{eyebrow}</span>
            <h1>{title}</h1>
            {text && <p>{text}</p>}
          </div>
          <div className="pa" aria-hidden="true">
            <span className="ring" />
            <HeroArt name={art} />
          </div>
        </div>
      </div>
    </section>
  );
}
