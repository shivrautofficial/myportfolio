import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Hide the trailing arrow icon (for links that already carry their own icon). */
  plain?: boolean;
};

/** A link to another site: opens in a new tab and says so to screen readers. */
export function ExternalLink({ href, children, className, plain = false }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      {!plain && <ArrowUpRight size={13} aria-hidden="true" />}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** A compact row of evidence links, used by skills, contributions and projects. */
export function EvidenceLinks({ links, label = 'Evidence' }: { links: { label: string; url: string }[]; label?: string }) {
  if (links.length === 0) return null;
  return (
    <ul className="evidence-links" aria-label={label}>
      {links.map((link) => (
        <li key={link.url}>
          <ExternalLink href={link.url}>{link.label}</ExternalLink>
        </li>
      ))}
    </ul>
  );
}
