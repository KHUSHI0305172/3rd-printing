export default function SectionHead({ eyebrow, title, sub = '' }) {
  return (
    <>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="rv">{title}</h2>
      <p className="sub rv">{sub}</p>
    </>
  );
}
