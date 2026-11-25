'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(undefined); // undefined = loading, null = logged out
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' }).then((r) => r.json()).then((d) => setUser(d.user)).catch(() => setUser(null));
  }, [path]);

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null); setMenu(false); setOpen(false);
    router.push('/'); router.refresh();
  };
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Aqua 3D">
          <img className="mk" src="/logo-mark.png" alt="" />
          <img className="wd" src="/logo-word.png" alt="Aqua 3D" />
        </Link>
        <nav className={'links' + (open ? ' open' : '')} onClick={(e) => e.target.tagName === 'A' && setOpen(false)}>
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className={path === href ? 'act' : ''}>{label}</Link>
          ))}
          {user === undefined ? null : user ? (
            <div className="um">
              <button type="button" onClick={() => setMenu(!menu)} aria-expanded={menu}>
                <span className="uav">{user.name.trim()[0].toUpperCase()}</span>{user.name.split(' ')[0]}
              </button>
              {menu && (
                <div className="umd">
                  <b>{user.name}</b><small>{user.email}</small>
                  <Link href="/quote">New quotation</Link>
                  <Link href="/account/quotes">My Quotes</Link>
                  <button type="button" onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className={path === '/login' ? 'act' : ''}>Login</Link>
              <Link href="/register" className={'rg' + (path === '/register' ? ' act' : '')}>Register</Link>
            </>
          )}
          <Link className="btn" href="/quote">Get Instant Quote</Link>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
    </header>
  );
}
