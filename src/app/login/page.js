import { redirect } from 'next/navigation';
import AuthForm from '@/components/AuthForm';
import { getSession, safeNext } from '@/lib/auth';

export const metadata = { title: 'Login' };

export default async function Page({ searchParams }) {
  const next = safeNext(searchParams?.next);
  if (await getSession()) redirect(next);
  return <AuthForm mode="login" next={next} />;
}
