import type { TimelineEntry } from '../data/portfolio';
import { EvidenceLinks } from './ExternalLink';

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {entries.map((item, index) => (
        <article className="timeline-item" key={item.title}>
          <div className="timeline-rail">
            <span className="timeline-dot" />
            {index < entries.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <span className="timeline-period">{item.date}</span>
            <div className="timeline-title-row">
              <h3>{item.title}</h3>
              <span className="timeline-marker">{item.kind.toUpperCase()}</span>
            </div>
            <p className="timeline-organization">{item.organization}</p>
            <p>{item.detail}</p>
            {item.evidence && <EvidenceLinks links={item.evidence} label={`Verification for ${item.title}`} />}
          </div>
        </article>
      ))}
    </div>
  );
}
