// Validates and cleans a quotation sent from the browser before it is stored.
const str = (v, max) => String(v ?? '').slice(0, max);
const num = (v, min, max, d = 0) => { const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : d; };

export function cleanQuote(b) {
  if (!b || !Array.isArray(b.parts)) return { error: 'No parts to save.' };
  if (b.parts.length < 1 || b.parts.length > 50) return { error: 'A quotation needs 1 to 50 parts.' };
  const parts = b.parts.map((p, i) => {
    const s = p.spec || {}, a = p.a && typeof p.a === 'object' ? p.a : null;
    return {
      id: i + 1, name: str(p.name, 200), ext: str(p.ext, 6), bytes: num(p.bytes, 0, 1e10),
      spec: { tech: s.tech === 'Resin' ? 'Resin' : 'FDM', material: str(s.material, 40), colour: str(s.colour, 40), post: str(s.post, 40), infill: num(s.infill, 0, 100, 20), layer: num(s.layer, 1, 1000, 200) },
      qty: Math.round(num(p.qty, 1, 100000, 1)), notes: str(p.notes, 500),
      a: a ? {
        size: Array.isArray(a.size) ? a.size.slice(0, 3).map((x) => num(x, 0, 1e6)) : [0, 0, 0],
        volume: num(a.volume, 0, 1e9),
        watertight: a.watertight === true ? true : a.watertight === false ? false : null,
        thumb: typeof a.thumb === 'string' && a.thumb.startsWith('data:image/') && a.thumb.length <= 60000 ? a.thumb : null,
      } : null,
    };
  });
  const c = b.contact || {}, t = b.totals || {};
  return {
    name: str(b.name, 80), status: b.status === 'requested' ? 'requested' : 'saved',
    contact: { name: str(c.name, 80), phone: str(c.phone, 30), notes: str(c.notes, 1000) },
    parts, totals: { qty: Math.round(num(t.qty, 0, 1e7)), lo: num(t.lo, 0, 1e10), hi: num(t.hi, 0, 1e10) },
  };
}
