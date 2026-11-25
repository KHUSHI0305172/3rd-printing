// Simple file-based user store (data/users.json).
// Works for local use and any server with a writable disk. For production on serverless hosting
// (Vercel etc.) replace these 3 functions with your database (MySQL, MongoDB, Supabase, Firebase...).
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const FILE = path.join(process.env.DATA_DIR || path.join(process.cwd(), 'data'), 'users.json');
let chain = Promise.resolve(); // serialises writes

async function read() {
  try { return JSON.parse(await fs.readFile(FILE, 'utf8')); }
  catch (e) { if (e.code === 'ENOENT') return []; throw e; }
}
async function write(list) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = FILE + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(list, null, 2));
  await fs.rename(tmp, FILE);
}

export async function findByEmail(email) {
  return (await read()).find((u) => u.email === String(email).toLowerCase()) || null;
}
export async function findById(id) {
  return (await read()).find((u) => u.id === id) || null;
}
export function createUser(data) {
  const run = chain.then(async () => {
    const list = await read();
    if (list.some((u) => u.email === data.email)) throw new Error('EXISTS');
    const user = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...data };
    list.push(user);
    await write(list);
    return user;
  });
  chain = run.catch(() => {});
  return run;
}
