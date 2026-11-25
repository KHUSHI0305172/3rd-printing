import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import { site, waLink } from '@/data/site';

export const metadata = { title: 'Contact Us' };

export default function ContactPage() {
  const cards = [
    ['💬', 'WhatsApp', site.phoneLabel, 'Chat now', waLink()],
    ['📍', 'Studio', site.city, null, null],
    ['🕒', 'Working hours', site.hours, null, null],
  ];
  return (
    <>
      <PageHeader art="contact" eyebrow="Contact Us" title="Let’s talk about your project" text="Send your details and we will reply on WhatsApp." />
      <section className="cstrip">
        <div className="wrap">
          <div className="grid g3">
            {cards.map(([ic, t, v, a, href]) => (
              <div className="card cc3" key={t}>
                <span className="cc3-i">{ic}</span>
                <div><small>{t}</small><b>{v}</b>{a && <a href={href} target="_blank" rel="noopener noreferrer">{a} →</a>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Faq />
    </>
  );
}
