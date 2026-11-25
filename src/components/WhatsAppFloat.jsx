import { waLink } from '@/data/site';

export default function WhatsAppFloat() {
  return (
    <a className="wa-f" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">💬</a>
  );
}
