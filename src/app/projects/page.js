import PageHeader from '@/components/PageHeader';
import Gallery from '@/components/Gallery';
import CtaBanner from '@/components/CtaBanner';

export const metadata = { title: 'Projects / Gallery' };

export default function Projects() {
  return (
    <>
      <PageHeader art="projects" eyebrow="Projects / Gallery" title="Our recent work" text="Real 3D printed projects made at Aqua 3D. Click any project to see all its photos." />
      <Gallery />
      <CtaBanner />
    </>
  );
}
