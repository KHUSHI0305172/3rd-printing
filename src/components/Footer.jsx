import Link from 'next/link';
import { site, navLinks } from '@/data/site';
import SocialLinks from './SocialLinks';
import Feedback from './Feedback';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <Link className="logo big" href="/" style={{ marginBottom: 12 }} aria-label="Aqua 3D">
              <img className="mk" src="/logo-mark.png" alt="" />
              <img className="wd" src="/logo-word.png" alt="Aqua 3D" />
            </Link>
            <p>Turning ideas into reality with 3D printing. Industrial and retail solutions, from a single prototype to bulk orders.</p>
            <h4 style={{ marginTop: 20 }}>Follow us</h4>
            <SocialLinks />
          </div>
          <div>
            <h4>Pages</h4>
            {navLinks.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
            <Link href="/quote">Get Instant Quote</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <p>{site.city}</p>
            <p>{site.phoneLabel}</p>
            <p>{site.hours}</p>
          </div>
          <div>
            <h4>Feedback</h4>
            <Feedback />
          </div>
        </div>
        <div className="copy">
          © {site.year} {site.studio}. All rights reserved. &nbsp;·&nbsp; Designed by <b style={{ color: 'var(--ac)' }}>{site.designer}</b>
        </div>
      </div>
    </footer>
  );
}
