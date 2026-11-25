'use client';
import { useMemo, useRef, useState } from 'react';
import { fdm, resin, fdmColours, resinColours, waLink } from '@/data/site';
import { analyseStl } from '@/lib/stl';
import Link from 'next/link';
import { nums, avg, inr, fmtTime, estimate, summarise, buildQuoteMessage } from '@/lib/quoteUtils';

const uniq = (a) => [...new Set(a)];
const NAMES = { FDM: fdm.map((m) => m.name), Resin: resin.map((m) => m.name) };
const COLOURS = {
  FDM: uniq(fdmColours.groups.flatMap((g) => g.items.map((i) => i[0]))),
  Resin: uniq(resinColours.groups.flatMap((g) => g.items.map((i) => i[0]))),
};
const LAYERS = { FDM: [100, 150, 200, 300], Resin: [25, 50, 100] };
const INFILL = [10, 15, 20, 30, 40, 50, 75, 100];
const POST = ['None', 'Support removal', 'Sanding & smoothing', 'Painting'];
const defaults = (tech) => ({
  tech, material: NAMES[tech][0], colour: COLOURS[tech].includes('White') ? 'White' : COLOURS[tech][0],
  post: 'None', infill: 20, layer: tech === 'FDM' ? 200 : 50,
});

const fixSpec = (s) => {
  const tech = s.tech === 'Resin' ? 'Resin' : 'FDM', d = defaults(tech);
  return { ...d, ...s, tech, material: NAMES[tech].includes(s.material) ? s.material : d.material, colour: COLOURS[tech].includes(s.colour) ? s.colour : d.colour };
};
const fromSaved = (q) => q.parts.map((p, i) => ({
  id: i + 1, name: p.name, ext: p.ext, bytes: p.bytes, spec: fixSpec(p.spec), qty: p.qty,
  notes: p.notes || '', showNotes: !!p.notes, state: p.a ? 'ok' : 'na', saved: true, a: p.a,
}));

function Sel({ label, value, onChange, options, suffix = '' }) {
  return (
    <label className="qsel"><span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o} value={o}>{o}{suffix}</option>)}
      </select>
    </label>
  );
}

export default function QuoteBuilder({ user, initial = null }) {
  const [pending, setPending] = useState([]);
  const [cfg, setCfg] = useState(defaults('FDM'));
  const [parts, setParts] = useState(initial ? fromSaved(initial) : []);
  const [sel, setSel] = useState([]);
  const [msg, setMsg] = useState('');
  const [drag, setDrag] = useState(false);
  const [c, setC] = useState({ name: initial?.contact?.name || user?.name || '', phone: initial?.contact?.phone || user?.phone || '', notes: initial?.contact?.notes || '' });
  const inp = useRef(null);
  const idc = useRef((initial ? initial.parts.length : 0) + 1);
  const [qname, setQname] = useState(initial?.name || '');
  const [quoteId, setQuoteId] = useState(initial?.id || null);
  const [ref, setRef] = useState(initial?.ref || '');
  const [busy, setBusy] = useState('');
  const [note, setNote] = useState(null);

  const patch = (id, o) => setParts((p) => p.map((x) => (x.id === id ? { ...x, ...o } : x)));
  const setSpec = (id, k, v) => setParts((p) => p.map((x) => {
    if (x.id !== id) return x;
    const spec = k === 'tech' ? { ...defaults(v), post: x.spec.post } : { ...x.spec, [k]: ['infill', 'layer'].includes(k) ? Number(v) : v };
    return { ...x, spec };
  }));

  const pick = (list) => {
    const ok = [], bad = [];
    [...list].forEach((f) => (/\.(stl|step|stp|zip)$/i.test(f.name) ? ok.push(f) : bad.push(f.name)));
    setMsg(bad.length ? `Skipped unsupported file: ${bad.join(', ')}. Please upload STL, STEP/STP or ZIP.` : '');
    if (ok.length) { setPending(ok); setCfg(defaults('FDM')); }
  };

  const add = () => {
    const files = pending;
    const items = files.map((f) => ({
      id: idc.current++, name: f.name, ext: f.name.split('.').pop().toLowerCase(), bytes: f.size,
      spec: { ...cfg }, qty: 1, notes: '', showNotes: false, state: /\.stl$/i.test(f.name) ? 'wait' : 'na', a: null,
    }));
    setParts((p) => [...p, ...items]);
    setPending([]);
    items.forEach((it, i) => {
      if (it.state === 'wait') analyseStl(files[i]).then((a) => patch(it.id, { a, state: 'ok' })).catch(() => patch(it.id, { state: 'err' }));
    });
  };

  const dup = (p) => setParts((all) => {
    const i = all.findIndex((x) => x.id === p.id);
    const copy = { ...p, id: idc.current++, spec: { ...p.spec } };
    return [...all.slice(0, i + 1), copy, ...all.slice(i + 1)];
  });
  const del = (id) => { setParts((p) => p.filter((x) => x.id !== id)); setSel((s) => s.filter((x) => x !== id)); };
  const toggle = (id) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const allSel = parts.length > 0 && sel.length === parts.length;

  const sum = useMemo(() => summarise(parts), [parts]);
  const canSend = parts.length > 0 && c.name.trim() && c.phone.trim() && !sum.waiting;

  const payload = (status) => ({
    name: qname.trim(), status, contact: c,
    parts: parts.map(({ id, name, ext, bytes, spec, qty, notes, a }) => ({ id, name, ext, bytes, spec, qty, notes, a })),
    totals: { qty: sum.qty, lo: Math.round(sum.lo), hi: Math.round(sum.hi) },
  });
  async function persist(status) {
    const res = await fetch(quoteId ? `/api/quotes/${quoteId}` : '/api/quotes', {
      method: quoteId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload(status)),
    });
    const d = await res.json();
    if (!res.ok) throw new Error(d.error || 'Could not save the quotation.');
    setQuoteId(d.quote.id); setRef(d.quote.ref);
    return d.quote;
  }
  const save = async () => {
    setBusy('save'); setNote(null);
    try { const q = await persist('saved'); setNote({ ok: true, text: `Quotation ${q.ref} saved.` }); }
    catch (e) { setNote({ ok: false, text: e.message }); }
    setBusy('');
  };
  const send = async () => {
    const w = window.open('', '_blank'); // opened inside the click so it is not blocked
    setBusy('send'); setNote(null);
    let r = ref;
    try { const q = await persist('requested'); r = q.ref; setNote({ ok: true, text: `Quotation ${q.ref} saved in My Quotes and sent to WhatsApp.` }); }
    catch (e) { setNote({ ok: false, text: `Could not save to My Quotes (${e.message}). Your request will still open in WhatsApp.` }); }
    const url = waLink(buildQuoteMessage(c, user?.email, parts, sum, r));
    if (w) w.location.href = url; else window.open(url, '_blank');
    setBusy('');
  };

  return (
    <section className="alt" style={{ paddingTop: 50 }}>
      <div className="wrap">
        {initial && (
          <div className="nbar" style={{ marginBottom: 18 }}><span>✎</span>You are editing saved quotation <b style={{ margin: '0 4px' }}>{initial.ref}</b>. Your files are not stored, so attach them again in WhatsApp when you request.
            <Link href="/quote" style={{ marginLeft: 'auto', color: 'var(--ac)', fontWeight: 700, whiteSpace: 'nowrap' }}>Start a new quotation</Link></div>
        )}
        <div className="qsteps">
          <div><span>1</span>Upload your file</div><div><span>2</span>Choose material &amp; options</div><div><span>3</span>Request your quote</div>
        </div>

        <div className="qlay">
          <div>
            {/* upload */}
            <div className="fcard">
              <h3>Upload your CAD file here</h3>
              <div className={'qdrop' + (drag ? ' on' : '')}
                onClick={() => inp.current.click()}
                onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files); }}>
                <input ref={inp} type="file" multiple accept=".stl,.step,.stp,.zip" hidden
                  onChange={(e) => { pick(e.target.files); e.target.value = ''; }} />
                <div className="qup">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></svg>
                </div>
                <p><b>Drag &amp; Drop</b> or <u>Browse Files</u></p>
                <small>File Types: STL, STEP/STP, ZIP</small>
              </div>
              {msg && <div className="qerr">{msg}</div>}
              <div className="nbar" style={{ marginTop: 14 }}><span>i</span>Your files stay on your device. After you request the quote, attach the same files in the WhatsApp chat.</div>
            </div>

            {/* parts */}
            {parts.length === 0 ? (
              <p className="qempty">Upload CAD files above to get started with your quotation.</p>
            ) : (
              <>
                <div className="qtool">
                  <label className="chk"><input type="checkbox" checked={allSel} onChange={() => setSel(allSel ? [] : parts.map((p) => p.id))} /> Select All</label>
                  {sel.length > 0 && (
                    <div className="qp-a">
                      <button onClick={() => parts.filter((p) => sel.includes(p.id)).forEach(dup)}>⧉ Duplicate selected</button>
                      <button className="del" onClick={() => { setParts((p) => p.filter((x) => !sel.includes(x.id))); setSel([]); }}>🗑 Delete selected</button>
                    </div>
                  )}
                </div>

                {parts.map((p, i) => {
                  const s = p.spec, a = p.a, e = estimate(p);
                  return (
                    <div className="qp" key={p.id}>
                      <div className="qp-h">
                        <label className="chk"><input type="checkbox" checked={sel.includes(p.id)} onChange={() => toggle(p.id)} /> <b>{i + 1}. {p.name}</b></label>
                        <div className="qp-a">
                          <button onClick={() => patch(p.id, { showNotes: !p.showNotes })}>📝 Add Notes</button>
                          <button onClick={() => dup(p)}>⧉ Duplicate</button>
                          <button className="del" onClick={() => del(p.id)}>🗑 Delete</button>
                        </div>
                      </div>
                      <div className="qp-b">
                        <div className="qp-th">{a && a.thumb ? <img src={a.thumb} alt="" /> : <span>{p.ext.toUpperCase()}</span>}</div>
                        <div className="qp-i">
                          <h4>Item parameter</h4>
                          <div className="kv"><span>Size:</span><b>{a ? `X ${a.size[0].toFixed(2)} · Y ${a.size[1].toFixed(2)} · Z ${a.size[2].toFixed(2)} mm` : '—'}</b></div>
                          <div className="kv"><span>Volume:</span><b>{a ? `${a.volume.toFixed(2)} cm³` : '—'}</b></div>
                          <div className="kv"><span>Print Time:</span><b>{e ? fmtTime(e.minutes) : '—'}</b></div>
                          <div className="kv"><span>File size:</span><b>{(p.bytes / 1024 / 1024).toFixed(2)} MB</b></div>
                        </div>
                        <div className="qp-s">
                          <h4>Manufacturing Specification</h4>
                          <div className="sg2">
                            <Sel label="Technology" value={s.tech} onChange={(v) => setSpec(p.id, 'tech', v)} options={['FDM', 'Resin']} />
                            <Sel label="Post Processing" value={s.post} onChange={(v) => setSpec(p.id, 'post', v)} options={POST} />
                            <Sel label="Material" value={s.material} onChange={(v) => setSpec(p.id, 'material', v)} options={NAMES[s.tech]} />
                            {s.tech === 'FDM'
                              ? <Sel label="Infill" value={s.infill} onChange={(v) => setSpec(p.id, 'infill', v)} options={INFILL} suffix="%" />
                              : <div className="qsel"><span>Infill</span><div className="qna">Not applicable</div></div>}
                            <Sel label="Colour" value={s.colour} onChange={(v) => setSpec(p.id, 'colour', v)} options={COLOURS[s.tech]} />
                            <Sel label="Layer Height" value={s.layer} onChange={(v) => setSpec(p.id, 'layer', v)} options={LAYERS[s.tech]} suffix=" µm" />
                          </div>
                        </div>
                      </div>

                      <div className="qp-st">
                        {p.state === 'wait' && <span className="pill2 wait"><i className="spin" /> Analysing…</span>}
                        {p.state === 'ok' && <><span className="pill2 ok">Analyzed ✓</span>
                          {a.watertight === true && <span className="stt good">✔ No repair required</span>}
                          {a.watertight === false && <span className="stt warn">⚠ Mesh issues found – our team will check and repair if needed</span>}
                          {a.watertight === null && <span className="stt">Large file – mesh check will be done by our team</span>}
                          {p.saved && <span className="stt">Saved analysis · attach the file again in WhatsApp</span>}</>}
                        {p.state === 'na' && <span className="stt">This file type will be analysed by our team after you send the request.</span>}
                        {p.state === 'err' && <span className="stt warn">Could not read this file here – our team will check it.</span>}
                      </div>

                      {p.showNotes && <textarea className="qnote" rows={2} placeholder="Notes for this part (tolerance, finish, use...)" value={p.notes} onChange={(e) => patch(p.id, { notes: e.target.value })} />}

                      <div className="qp-f">
                        <div className="qty">Quantity
                          <div>
                            <button onClick={() => patch(p.id, { qty: Math.max(1, p.qty - 1) })} aria-label="Decrease">−</button>
                            <input type="number" min="1" value={p.qty} onChange={(ev) => patch(p.id, { qty: Math.max(1, Number(ev.target.value) || 1) })} />
                            <button onClick={() => patch(p.id, { qty: p.qty + 1 })} aria-label="Increase">+</button>
                          </div>
                        </div>
                        <div className="tot"><small>Estimated total</small><b>{e ? `${inr(e.lo)} – ${inr(e.hi)}` : p.state === 'wait' ? '…' : 'To be quoted'}</b></div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* summary */}
          <aside className="fcard qsum">
            <h3>Order Summary</h3>
            <div className="qrow"><span>Parts</span><b>{parts.length}</b></div>
            <div className="qrow"><span>Total quantity</span><b>{sum.qty}</b></div>
            <div className="qrow big"><span>Indicative estimate</span><b>{sum.est ? `${inr(sum.lo)} – ${inr(sum.hi)}` : '—'}</b></div>
            <p className="fsub" style={{ margin: 0 }}>{sum.waiting ? 'Analysing your files…' : 'Estimate is based on part volume, material and infill. The final price is confirmed after our team reviews your files.'}</p>
            <input placeholder="Your name *" value={c.name} onChange={(e) => setC({ ...c, name: e.target.value })} />
            <input placeholder="Phone number *" inputMode="tel" value={c.phone} onChange={(e) => setC({ ...c, phone: e.target.value })} />
            <textarea rows={3} placeholder="Anything else we should know? (deadline, use, delivery city...)" value={c.notes} onChange={(e) => setC({ ...c, notes: e.target.value })} />
            <input placeholder="Quotation name (optional)" value={qname} onChange={(e) => setQname(e.target.value)} />
            {note && <div className={note.ok ? 'qok' : 'qerr'} role="status">{note.text} {note.ok && <Link href="/account/quotes">View My Quotes</Link>}</div>}
            <button className="btn ghost" disabled={parts.length === 0 || !!sum.waiting || !!busy} onClick={save}>{busy === 'save' ? 'Saving…' : quoteId ? 'Update saved quotation' : 'Save quotation'}</button>
            <button className="btn" disabled={!canSend || !!busy} onClick={send} style={!canSend ? { opacity: .55, cursor: 'not-allowed' } : undefined}>{busy === 'send' ? 'Please wait…' : 'Request Quote on WhatsApp'}</button>
            {!canSend && <small className="fsub">Add at least one part, your name and phone number.</small>}
          </aside>
        </div>
      </div>

      {pending.length > 0 && (
        <div className="mdl" onClick={() => setPending([])}>
          <div className="qm" onClick={(e) => e.stopPropagation()}>
            <div className="qm-h"><h3>Select Technology &amp; Material</h3><button className="qm-x" onClick={() => setPending([])} aria-label="Close">✕</button></div>
            <div className="qm-body">
              <div className="qm-file"><span>📄</span><b>{pending.length} file{pending.length > 1 ? 's' : ''} selected for import</b></div>
              <Sel label="Technology" value={cfg.tech} onChange={(v) => setCfg(defaults(v))} options={['FDM', 'Resin']} />
              <Sel label="Material" value={cfg.material} onChange={(v) => setCfg({ ...cfg, material: v })} options={NAMES[cfg.tech]} />
              <Sel label="Colour" value={cfg.colour} onChange={(v) => setCfg({ ...cfg, colour: v })} options={COLOURS[cfg.tech]} />
            </div>
            <div className="qm-b">
              <button className="btn ghost" onClick={() => setPending([])}>Cancel</button>
              <button className="btn" onClick={add}>+ Add Parts</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
