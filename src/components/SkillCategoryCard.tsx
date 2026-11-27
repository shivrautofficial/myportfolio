import type { SkillCategory } from '../data/portfolio';
import { EvidenceLinks } from './ExternalLink';

export function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <article className="skill-category" aria-labelledby={`skills-${category.id}`}>
      <header className="skill-category-head">
        <span className="skill-category-number">{String(index + 1).padStart(2, '0')}</span>
        <h3 id={`skills-${category.id}`}>{category.title}</h3>
      </header>
      <ul className="skill-list">
        {category.skills.map((skill) => (
          <li className="skill-item" key={skill.name}>
            <strong>{skill.name}</strong>
            <p>{skill.usage}</p>
            <EvidenceLinks links={skill.evidence} label={`Evidence for ${skill.name}`} />
          </li>
        ))}
      </ul>
    </article>
  );
}
