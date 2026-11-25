import { redirect } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import QuotesList from '@/components/QuotesList';
import { getSession } from '@/lib/auth';
import { listByUser } from '@/lib/quotes';

export const metadata = { title: 'My Quotations' };

export default async function MyQuotes() {
  const user = await getSession();
  if (!user) redirect('/login?next=%2Faccount%2Fquotes');
  const quotes = await listByUser(user.id);
  return (
    <>
      <PageHeader art="quote" eyebrow="My Quotations" title="Your saved quotations" text="All the quotations you have saved or requested. Open one to edit it, or send it again on WhatsApp." />
      <QuotesList quotes={quotes} user={user} />
    </>
  );
}
