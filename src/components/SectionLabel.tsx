export function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label-number">{number}</span>
      <span>{children}</span>
      <span className="section-label-line" />
    </div>
  );
}
