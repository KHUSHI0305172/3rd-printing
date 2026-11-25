'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HeroArt from './HeroArt';

const PERKS = [
  'Upload STL files and see size, volume and a 3D preview',
  'Choose technology, material and colour for every part',
  'Your name and phone are filled in automatically',
  'Request your quote on WhatsApp in one click',
];

export default function AuthForm({ mode, next }) {
  const reg = mode === 'register';
  const router = useRouter();
  const [f, setF] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const q = `?next=${encodeURIComponent(next || '/quote')}`;

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    if (reg && f.password !== f.confirm) return setErr('Passwords do not match.');
    setBusy(true);
    try {
      const res = await fetch(`/api/auth/${reg ? 'register' : 'login'}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reg ? f : { email: f.email, password: f.password }),
      });
      const d = await res.json();
      if (!res.ok) { setErr(d.error || 'Something went wrong.'); setBusy(false); return; }
      router.push(next || '/quote');
      router.refresh();
    } catch {
      setErr('Network error. Please try again.'); setBusy(false);
    }
  };

  return (
    <div className="auth">
      <div className="auth-l">
        <div className="auth-art"><HeroArt name="quote" /></div>
        <h2>{reg ? 'Create your Aqua 3D account' : 'Welcome back'}</h2>
        <p>Login or register to request a 3D printing quotation.</p>
        <ul className="ticks light">{PERKS.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <div className="auth-r">
        <form className="auth-card" onSubmit={submit}>
          <h1>{reg ? 'Register' : 'Login'}</h1>
          <p className="fsub">{reg ? 'It takes less than a minute.' : 'Login to continue to your quotation.'}</p>
          {reg && <input placeholder="Full name" required autoComplete="name" value={f.name} onChange={set('name')} />}
          <input type="email" placeholder="Email address" required autoComplete="email" value={f.email} onChange={set('email')} />
          {reg && <input placeholder="Phone number" required inputMode="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} />}
          <div className="pw">
            <input type={show ? 'text' : 'password'} placeholder={reg ? 'Password (min 8 characters)' : 'Password'} required
              autoComplete={reg ? 'new-password' : 'current-password'} value={f.password} onChange={set('password')} />
            <button type="button" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
          </div>
          {reg && <input type={show ? 'text' : 'password'} placeholder="Confirm password" required autoComplete="new-password" value={f.confirm} onChange={set('confirm')} />}
          {err && <div className="qerr" role="alert">{err}</div>}
          <button className="btn" type="submit" disabled={busy}>{busy ? 'Please wait…' : reg ? 'Create account' : 'Login'}</button>
          <p className="aswitch">
            {reg ? <>Already have an account? <Link href={`/login${q}`}>Login</Link></> : <>New to Aqua 3D? <Link href={`/register${q}`}>Create an account</Link></>}
          </p>
        </form>
      </div>
    </div>
  );
}
