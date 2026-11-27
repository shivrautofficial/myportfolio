import { BookOpen, Cpu, Github, Globe } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { EvidenceLinks, ExternalLink } from './ExternalLink';

/** Stage titles as defined in llmnpipeline's js/pipeline.js. */
const llmStages = ['Input Text', 'Tokenization', 'Vocab Lookup', 'Token IDs', 'Embeddings', '3D Projection', 'Self-Attention (explained)'];

function ProjectVisual({ id }: { id: Project['id'] }) {
  if (id === 'lifeos') {
    return (
      <div className="project-visual project-visual--lifeos" role="img" aria-label="Illustration of the LifeOS dashboard layout">
        <div className="mock-dashboard" aria-hidden="true">
          <div className="mock-sidebar">
            <div className="mock-logo"><span /> lifeos</div>
            <div className="mock-side-active"><span /> Dashboard</div>
            <div className="mock-side-row"><span /> Tasks</div>
            <div className="mock-side-row"><span /> Habits</div>
            <div className="mock-side-row"><span /> Calendar</div>
          </div>
          <div className="mock-content">
            <div className="mock-welcome"><div><span className="mock-overline">DASHBOARD</span><strong>One life. One dashboard.</strong></div><div className="mock-avatar">S</div></div>
            <div className="mock-stats">
              <div><span>MODULE</span><strong>Tasks</strong><i className="mock-bar bar-a" /></div>
              <div><span>MODULE</span><strong>Habits</strong><i className="mock-bar bar-b" /></div>
              <div><span>MODULE</span><strong>Goals</strong><i className="mock-bar bar-c" /></div>
            </div>
            <div className="mock-lower">
              <div className="mock-task-list"><span className="mock-overline">ROUTER</span><div><i />#dashboard</div><div><i />#tasks</div><div><i />#habits</div></div>
              <div className="mock-chart"><span className="mock-overline">STATE → STORAGE</span><div className="mock-abstract-lines"><i /><i /><i /><i /></div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'llm-explorer') {
    return (
      <div className="project-visual project-visual--llm">
        <p className="llm-visual-caption">The app’s seven stages</p>
        <ol className="llm-stages">
          {llmStages.map((stage) => <li key={stage}>{stage}</li>)}
        </ol>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--ananta" role="img" aria-label="Diagram of a sense, decide, act loop">
      <div className="ananta-grid" aria-hidden="true" />
      <div className="ananta-ring ananta-ring--outer" aria-hidden="true" />
      <div className="ananta-ring ananta-ring--middle" aria-hidden="true" />
      <div className="ananta-ring ananta-ring--inner" aria-hidden="true" />
      <div className="ananta-core" aria-hidden="true"><Cpu size={36} strokeWidth={1.2} /></div>
      <div className="ananta-node node-one" aria-hidden="true"><span /> SENSE</div>
      <div className="ananta-node node-two" aria-hidden="true"><span /> DECIDE</div>
      <div className="ananta-node node-three" aria-hidden="true"><span /> ACT</div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const { repo, docs, live } = project.links;
  const items = [
    { key: 'repo', icon: Github, label: 'Repository', link: repo },
    { key: 'docs', icon: BookOpen, label: 'Documentation', link: docs },
    { key: 'live', icon: Globe, label: 'Live deployment', link: live },
  ];

  return (
    <div className="project-links">
      <ul>
        {items.map(({ key, icon: Icon, label, link }) => (
          <li key={key}>
            <Icon size={15} aria-hidden="true" />
            <span className="project-link-label">{label}</span>
            {link ? (
              <ExternalLink className="text-link" href={link.url}>{link.url.replace('https://', '')}</ExternalLink>
            ) : (
              <span className="project-link-missing">Not available yet</span>
            )}
          </li>
        ))}
      </ul>
      {project.missingLinks && <p className="project-links-note">{project.missingLinks}</p>}
    </div>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const headingId = `project-${project.id}`;

  return (
    <article className={`case-study case-study--${project.id}`} aria-labelledby={headingId}>
      <div className="case-study-top">
        <div className="case-study-intro">
          <div className="project-card-meta">
            <span className="project-number">/{project.number}</span>
            <span className={`status-pill ${project.isLive ? 'status-pill--live' : ''}`}><span />{project.status}</span>
          </div>
          <p className="project-eyebrow">{project.tagline}</p>
          <h3 id={headingId}>{project.title}<span className="project-title-dot">.</span></h3>
          <p className="case-status-detail">{project.statusDetail}</p>
          <p className="case-overview">{project.overview}</p>
          <ProjectLinks project={project} />
        </div>
        <ProjectVisual id={project.id} />
      </div>

      <div className="case-grid">
        <section className="case-block">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </section>
        <section className="case-block">
          <h4>{project.isLive ? 'Solution' : 'Proposed solution'}</h4>
          <p>{project.solution}</p>
        </section>

        <section className="case-block case-block--wide">
          <h4>Architecture</h4>
          <p>{project.architecture.summary}</p>
          <ol className="architecture-list">
            {project.architecture.layers.map((layer) => (
              <li key={layer.name}><strong>{layer.name}</strong><span>{layer.detail}</span></li>
            ))}
          </ol>
        </section>

        <section className="case-block case-block--wide">
          <h4>Technologies</h4>
          {project.technologies.map((group) => (
            <div className="tech-group" key={group.label}>
              <span className="tech-group-label">{group.label}</span>
              <div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </section>

        <section className="case-block case-block--wide">
          <h4>My individual contribution</h4>
          <p className="case-team">{project.team}</p>
          <ul className="contribution-items">
            {project.myContribution.map((item) => (
              <li key={item.area}>
                <strong>{item.area}</strong>
                <p>{item.detail}</p>
                <EvidenceLinks links={item.evidence} label={`Evidence for ${item.area}`} />
              </li>
            ))}
          </ul>
        </section>

        {project.teamContribution && (
          <section className="case-block case-block--wide case-block--muted">
            <h4>Built by teammates (not my work)</h4>
            <ul className="detail-list">{project.teamContribution.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        )}

        <section className="case-block case-block--wide">
          <h4>Technical implementation details</h4>
          <ul className="detail-list">{project.implementation.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        {project.progress && (
          <>
            <section className="case-block">
              <h4>Current progress</h4>
              <ul className="detail-list">{project.progress.current.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section className="case-block">
              <h4>Planned next</h4>
              <ul className="detail-list">{project.progress.next.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </>
        )}
      </div>
    </article>
  );
}
