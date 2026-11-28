import { AlertTriangle, CheckCircle2, GitPullRequest, Info } from 'lucide-react';
import { VERIFIED_ON } from '../data/portfolio';
import type { Contribution } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export const contributionAnchor = (taskId: string) => `pr-${taskId.toLowerCase()}`;

export function ContributionCard({ contribution: c }: { contribution: Contribution }) {
  const headingId = `contribution-${c.taskId}`;

  return (
    <article className="contribution-card" id={contributionAnchor(c.taskId)} aria-labelledby={headingId}>
      <header className="contribution-head">
        <div className="contribution-badges">
          <span className="task-id">{c.taskId}</span>
          <span className={`status-pill status-pill--${c.statusTone}`}><span />{c.status}</span>
          <span className="task-type">{c.taskType}</span>
        </div>
        <h3 id={headingId}>{c.title}</h3>
        <p className="contribution-summary">{c.summary}</p>
      </header>

      <dl className="contribution-meta">
        <div>
          <dt>Repository</dt>
          <dd><ExternalLink href={c.repositoryUrl}>{c.repository}</ExternalLink></dd>
        </div>
        <div>
          <dt>Pull request</dt>
          <dd>
            <ExternalLink className="pr-link" href={c.prUrl}>
              <GitPullRequest size={14} aria-hidden="true" /> #{c.prNumber}
            </ExternalLink>
            <span className="meta-url">{c.prUrl.replace('https://', '')}</span>
          </dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{c.status}<span className="meta-note">{c.statusDetail}</span></dd>
        </div>
        <div>
          <dt>Exercise</dt>
          <dd><code>{c.exercise}</code></dd>
        </div>
        <div>
          <dt>Branch</dt>
          <dd><ExternalLink href={c.branch.url}><code>{c.branch.label}</code></ExternalLink></dd>
        </div>
        <div>
          <dt>Opened</dt>
          <dd>{c.opened}<span className="meta-note">from GitHub account {c.openedBy}</span></dd>
        </div>
      </dl>

      <div className="contribution-columns">
        <section>
          <h4>What I changed</h4>
          <ul className="detail-list">{c.changes.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h4>Why</h4>
          <ul className="detail-list">{c.rationale.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>

      <section className="contribution-files">
        <h4>Files changed</h4>
        <ul>
          {c.files.map((file) => (
            <li key={file.path}>
              <span className={`file-change file-change--${file.change.toLowerCase()}`}>{file.change}</span>
              <div>
                <ExternalLink className="file-path" href={file.url}><code>{file.path}</code></ExternalLink>
                <p>{file.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="contribution-verification">
        <h4>How it was verified</h4>
        <ul className="detail-list">{c.verification.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="recheck-note">
          <CheckCircle2 size={15} aria-hidden="true" />
          <span><strong>Re-checked {VERIFIED_ON}:</strong> {c.recheck}</span>
        </p>
      </section>

      {c.knownIssues && c.knownIssues.length > 0 && (
        <section className="known-issues">
          <h4><AlertTriangle size={14} aria-hidden="true" /> Known issues</h4>
          <ul className="detail-list">{c.knownIssues.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      )}

      {c.aiNote && (
        <p className="commit-note"><Info size={14} aria-hidden="true" /> AI assistance: {c.aiNote}</p>
      )}
    </article>
  );
}

/** Compact index of every contribution, linking to the detailed cards below it. */
export function ContributionTable({ contributions }: { contributions: Contribution[] }) {
  return (
    <div className="contribution-table-wrap">
      <table className="contribution-table">
        <caption className="sr-only">Summary of S&amp;AI pull requests</caption>
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Pull request</th>
            <th scope="col">Exercise</th>
            <th scope="col">PR</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((c) => (
            <tr key={c.taskId}>
              <th scope="row"><a href={`#${contributionAnchor(c.taskId)}`}>{c.taskId}</a></th>
              <td>{c.title}</td>
              <td><code>{c.exercise}</code></td>
              <td><ExternalLink href={c.prUrl}>#{c.prNumber}</ExternalLink></td>
              <td><span className={`table-status table-status--${c.statusTone}`}>{c.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
