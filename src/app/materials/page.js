import PageHeader from '@/components/PageHeader';
import MaterialsTabs from '@/components/MaterialsTabs';
import SelectionGuide from '@/components/SelectionGuide';
import CtaBanner from '@/components/CtaBanner';

export const metadata = { title: 'Materials' };

export default function Materials() {
  return (
    <>
      <PageHeader art="materials" eyebrow="Materials" title="3D Printing Materials" text="FDM filaments and resins for every need – properties, comparison and colour options. Not sure which one to choose? Tell us how the part will be used and we will suggest." />
      <MaterialsTabs />
      <SelectionGuide />
      <CtaBanner />
    </>
  );
}
