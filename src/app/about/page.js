import PageHeader from '@/components/PageHeader';
import AboutIntro from '@/components/AboutIntro';
import StatsBand from '@/components/StatsBand';
import Expertise from '@/components/Expertise';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import CtaBanner from '@/components/CtaBanner';

export const metadata = { title: 'About Us' };

export default function About() {
  return (
    <>
      <PageHeader art="about" eyebrow="About Us" title="Turning Ideas into Reality with 3D Printing." />
      <AboutIntro />
      <StatsBand />
      <Expertise />
      <WhyChoose />
      <Process />
      <CtaBanner />
    </>
  );
}
