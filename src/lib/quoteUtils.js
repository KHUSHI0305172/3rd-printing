import { fdm, resin } from '@/data/site';

export const nums = (s) => (String(s).match(/\d+(\.\d+)?/g) || []).map(Number);
export const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
export const inr = (x) => '₹' + Math.round(x).toLocaleString('en-IN');
export const fmtTime = (m) => (m < 60 ? `${Math.max(1, Math.round(m))} min` : `${Math.floor(m / 60)} h ${Math.round(m % 60)} min`);

export function matInfo(tech, name) {
  const m = (tech === 'FDM' ? fdm : resin).find((x) => x.name === name);
  if (!m) return { density: 1.2, lo: 0, hi: 0 };
  const dRow = tech === 'FDM' ? m.mech[4][1] : (m.perf.find((p) => p[0] === 'Density') || [0, '1.1'])[1];
  const pr = nums(m.price);
  return { density: avg(nums(dRow)) || 1.2, lo: pr[0], hi: pr[1] || pr[0] };
}

// Indicative estimate only – the final price is confirmed after our team reviews the file.
export function estimate(p) {
  const a = p.a;
  if (!a || !a.volume) return null;
  const s = p.spec, mi = matInfo(s.tech, s.material);
  const fill = s.tech === 'FDM' ? 0.25 + 0.75 * (s.infill / 100) : 1;
  const grams = a.volume * mi.density * fill;
  const minutes = s.tech === 'FDM'
    ? (a.volume / 22.9) * 60 * (0.2 / (s.layer / 1000)) * (0.8 + s.infill / 100)
    : Math.max(30, (a.size[2] / 10) * 45);
  return { grams, minutes, lo: grams * mi.lo * p.qty, hi: grams * mi.hi * p.qty };
}

export function summarise(parts) {
  let qty = 0, lo = 0, hi = 0, est = 0, waiting = 0;
  parts.forEach((p) => {
    qty += p.qty;
    const e = estimate(p);
    if (e) { lo += e.lo; hi += e.hi; est++; }
    if (p.state === 'wait') waiting++;
  });
  return { qty, lo, hi, est, waiting };
}

export function buildQuoteMessage(contact, email, parts, sum, ref) {
  const lines = parts.map((p, i) => {
    const s = p.spec, e = estimate(p), a = p.a;
    return `${i + 1}. ${p.name}\n   ${s.tech} · ${s.material} · ${s.colour}${s.tech === 'FDM' ? ` | Infill ${s.infill}%` : ''} | Layer ${s.layer} µm | Post: ${s.post}\n   Qty: ${p.qty}${a ? ` | Size: ${a.size.map((v) => v.toFixed(1)).join(' x ')} mm | Vol: ${a.volume.toFixed(2)} cm³` : ''}${e ? ` | Est: ${inr(e.lo)} - ${inr(e.hi)}` : ''}${p.notes ? `\n   Notes: ${p.notes.slice(0, 200)}` : ''}`;
  });
  return `Hi, I am ${contact.name} (${contact.phone}${email ? ', ' + email : ''}). Quote request from the Aqua 3D website${ref ? ` (Ref: ${ref})` : ''}:\n\n${lines.join('\n')}\n\nTotal quantity: ${sum.qty}${sum.est ? `\nIndicative estimate: ${inr(sum.lo)} - ${inr(sum.hi)}` : ''}${contact.notes ? `\nNotes: ${contact.notes}` : ''}\n\nI will attach my files in this chat.`;
}
