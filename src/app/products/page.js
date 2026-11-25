import PageHeader from '@/components/PageHeader';
import ProductsStore from '@/components/ProductsStore';
import CtaBanner from '@/components/CtaBanner';

export const metadata = { title: 'Products Store' };

export default function Products() {
  return (
    <>
      <PageHeader art="products" eyebrow="Products Store" title="Ready-to-order 3D printed products" text="Pick a product and enquire on WhatsApp. We can customize the material, colour, size and name." />
      <ProductsStore />
      <CtaBanner />
    </>
  );
}
