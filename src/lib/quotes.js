// File-based quotation store (data/quotes.json). Replace these functions with your database in production.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const FILE = path.join(process.env.DATA_DIR || path.join(process.cwd(), 'data'), 'quotes.json');
let chain = Promise.resolve();

async function read() {
  try { return JSON.parse(await fs.readFile(FILE, 'utf8')); }
  catch (e) { if (e.code === 'ENOENT') return []; throw e; }
}
async function write(list) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = FILE + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(list));
  await fs.rename(tmp, FILE);
}
function makeRef(list) {
  const d = new Date(), day = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  let n = list.filter((q) => q.ref.startsWith(`AQ-${day}`)).length + 1, ref;
  do { ref = `AQ-${day}-${String(n++).padStart(4, '0')}`; } while (list.some((q) => q.ref === ref));
  return ref;
}

export async function listByUser(uid) {
  return (await read()).filter((q) => q.userId === uid).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}
export async function getQuote(uid, id) {
  return (await read()).find((q) => q.id === id && q.userId === uid) || null;
}
// id = null -> create, otherwise update that quotation (must belong to uid)
export function saveQuote(uid, data, id = null) {
  const run = chain.then(async () => {
    const list = await read();
    const now = new Date().toISOString();
    let q;
    if (id) {
      const i = list.findIndex((x) => x.id === id && x.userId === uid);
      if (i < 0) throw new Error('NOTFOUND');
      const old = list[i];
      q = { ...old, ...data, status: old.status === 'requested' ? 'requested' : data.status, updatedAt: now };
      if (q.status === 'requested' && !old.requestedAt) q.requestedAt = now;
      list[i] = q;
    } else {
      q = { id: crypto.randomUUID(), ref: makeRef(list), userId: uid, createdAt: now, updatedAt: now, ...data };
      if (q.status === 'requested') q.requestedAt = now;
      list.push(q);
    }
    await write(list);
    return q;
  });
  chain = run.catch(() => {});
  return run;
}
export function deleteQuote(uid, id) {
  const run = chain.then(async () => {
    const list = await read();
    const next = list.filter((q) => !(q.id === id && q.userId === uid));
    if (next.length === list.length) throw new Error('NOTFOUND');
    await write(next);
  });
  chain = run.catch(() => {});
  return run;
}
