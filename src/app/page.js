import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Expertise from '@/components/Expertise';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import RecentPrints from '@/components/RecentPrints';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Expertise />
      <WhyChoose />
      <Process />
      <RecentPrints />
      <Reviews />
      <CtaBanner />
    </>
  );
}
