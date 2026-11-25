import { redirect } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import QuoteBuilder from '@/components/QuoteBuilder';
import { getSession } from '@/lib/auth';
import { getQuote } from '@/lib/quotes';

export const metadata = { title: 'Get Instant Quote' };

// Login is required to request a quotation. /quote?edit=<id> reopens a saved quotation.
export default async function Quote({ searchParams }) {
  const user = await getSession();
  if (!user) redirect('/login?next=%2Fquote');
  const initial = searchParams?.edit ? await getQuote(user.id, String(searchParams.edit)) : null;
  return (
    <>
      <PageHeader art="quote" eyebrow="Get Instant Quote" title={initial ? `Edit quotation ${initial.ref}` : 'Upload your file and get a quote'} text={`Hi ${user.name.split(' ')[0]}, upload your 3D file, choose the technology, material and colour, then save or request your quote on WhatsApp.`} />
      <QuoteBuilder key={initial?.id || 'new'} user={user} initial={initial} />
    </>
  );
}
