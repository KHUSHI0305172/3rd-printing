import { social, waLink } from '@/data/site';

const ICONS = {
  Instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" /></>),
  Facebook: <path fill="currentColor" d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.2-.6.6-.6z" />,
  LinkedIn: (<><rect x="4" y="9" width="3.6" height="11" fill="currentColor" /><circle cx="5.8" cy="5.5" r="2.1" fill="currentColor" /><path fill="currentColor" d="M10 9h3.4v1.6c.6-1 1.8-1.9 3.6-1.9 3.2 0 4 2 4 4.8V20h-3.5v-5.6c0-1.4-.2-2.6-1.8-2.6s-2.2 1.1-2.2 2.6V20H10z" /></>),
  YouTube: (<><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" /><path d="M10 9.3v5.4l4.8-2.7z" fill="#fff" /></>),
  WhatsApp: (<><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" fill="currentColor" /></>),
};

export default function SocialLinks() {
  const links = [...social, ['WhatsApp', waLink()]];
  return (
    <div className="soc">
      {links.map(([name, href]) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name} className={'soc-' + name.toLowerCase()}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{ICONS[name]}</svg>
        </a>
      ))}
    </div>
  );
}
