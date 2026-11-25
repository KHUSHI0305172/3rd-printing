import Link from 'next/link';
import { waLink } from '@/data/site';

export default function CtaBanner() {
  return (
    <section style={{ padding: '70px 0' }}>
      <div className="wrap">
        <div className="ctab rv">
          <h2>Have an idea? Let’s print it.</h2>
          <p>Share your requirement and get a quote. No design file? We support you from design to the final printed part.</p>
          <div className="row">
            <Link className="btn w" href="/quote">Get Instant Quote</Link>
            <a className="btn o" href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
