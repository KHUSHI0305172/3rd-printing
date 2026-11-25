import SectionHead from './SectionHead';
import BlurFeature from './BlurFeature';
import { selectionGuide } from '@/data/site';

export default function SelectionGuide() {
  return (
    <section className="alt">
      <div className="wrap">
        <SectionHead eyebrow="Material Guide" title="Which material is right for you?" sub="Tell us your requirement and we will suggest the right material." />
        <div className="sgl">
          <div className="sg rv">
            <div className="sgh"><span>Customer Requirement</span><span>Suggested Material</span></div>
            {selectionGuide.map(([a, b]) => <div key={a}><span>{a}</span><b>{b}</b></div>)}
          </div>
          <BlurFeature />
        </div>
      </div>
    </section>
  );
}
