import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import RevealInit from '@/components/RevealInit';

export const metadata = {
  title: { default: 'Aqua 3D – 3D Printing Services', template: '%s | Aqua 3D' },
  description: 'Aqua 3D is a professional 3D printing service provider for rapid prototyping, functional components, custom products and bulk orders.',
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RevealInit />
      </body>
    </html>
  );
}
