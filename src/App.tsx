import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  FileDown,
  GitPullRequest,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  achievements,
  certifications,
  contributions,
  contributionsIntro,
  education,
  exploringAreas,
  otherPrRecords,
  profile,
  projects,
  skillCategories,
  training,
} from './data/portfolio';
import { ContactForm } from './components/ContactForm';
import { ContributionCard, ContributionTable } from './components/ContributionCard';
import { ExternalLink } from './components/ExternalLink';
import { Header } from './components/Header';
import type { Theme } from './components/Header';
import { ProjectCaseStudy } from './components/ProjectCaseStudy';
import { SectionLabel } from './components/SectionLabel';
import { SkillCategoryCard } from './components/SkillCategoryCard';
import { TimelineList } from './components/TimelineList';

function ProfileCard() {
  const currentEducation = education[0];

  return (
    <article className="profile-card">
      <div className="profile-card-top">
        <span>NEWTON SCHOOL OF TECHNOLOGY</span>
        <span className="profile-card-mark"><span /> CLASS OF 2030</span>
      </div>
      <div className="profile-portrait">
        <img src={profile.photoUrl} alt={`Portrait of ${profile.name}`} width={144} height={168} />
      </div>
      <div className="profile-card-details">
        <span className="profile-card-label">{currentEducation.stage} · {currentEducation.degree}</span>
        <h2>{profile.name}</h2>
        <p><MapPin size={14} aria-hidden="true" /> {profile.location}</p>
      </div>
      <div className="profile-interests">
        {profile.interests.map((interest) => <span key={interest}>{interest}</span>)}
      </div>
      <div className="profile-card-footer">
        <span>S&amp;AI PULL REQUESTS</span><strong>{contributions.length} submitted</strong>
      </div>
    </article>
  );
}

const contactLinks = [
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, text: profile.email, external: false },
  { icon: Github, label: 'GitHub', href: profile.github, text: profile.github.replace('https://', ''), external: true },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin, text: profile.linkedin.replace('https://www.', '').replace(/\/$/, ''), external: true },
  { icon: FileDown, label: 'Résumé', href: profile.resumeUrl, text: 'Google Drive (PDF)', external: true },
];

function App() {
  const [theme, setTheme] = useState<Theme>(
    () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1220' : '#f7f9fc');
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    try {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
    setTheme(nextTheme);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main id="main">
        <section id="home" className="hero-section" aria-label="Introduction">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow-chip"><span className="pulse-dot" /> {profile.role}</div>
              <p className="hero-pretitle">Hi, I&apos;m {profile.name}.</p>
              <h1>{profile.headlineTop}<br /><span>{profile.headlineBottom}</span></h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contributions">S&amp;AI contributions <ArrowDownRight size={17} aria-hidden="true" /></a>
                <a className="button button-outline" href="#projects">Projects <ArrowDownRight size={16} aria-hidden="true" /></a>
                <a className="button button-outline" href="#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
              <div className="hero-footnote">
                <span className="hero-footnote-icon"><Sparkles size={14} aria-hidden="true" /></span>
                <span>Looking for<br /><strong>{profile.goals.join(' · ')}</strong></span>
              </div>
            </div>
            <div className="hero-art">
              <ProfileCard />
            </div>
          </div>
        </section>

        {/* 1 · About Me */}
        <section id="about" className="section section-about" aria-labelledby="about-heading">
          <div className="container">
            <SectionLabel number="01">ABOUT ME</SectionLabel>
            <div className="about-layout">
              <div className="about-main">
                <h2 id="about-heading">{profile.aboutHeading}</h2>
                <p className="about-lede">{profile.about.join(' ')}</p>
              </div>
              <aside className="about-side" aria-label="Key facts">
                <dl className="fact-list">
                  <div><dt>Degree</dt><dd>{education[0].degree}</dd></div>
                  <div><dt>Institution</dt><dd>{education[0].institution}</dd></div>
                  <div><dt>Year</dt><dd>{education[0].stage} · graduating 2030</dd></div>
                  <div><dt>Focus</dt><dd>{profile.interests.join(', ')}</dd></div>
                  <div><dt>Looking for</dt><dd>{profile.goals.join(', ')}</dd></div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* 2 · Technical Skills */}
        <section id="skills" className="section section-toolkit" aria-labelledby="skills-heading">
          <div className="container">
            <SectionLabel number="02">TECHNICAL SKILLS</SectionLabel>
            <div className="section-heading-row">
              <div><h2 id="skills-heading">Technical skills<br /><span>with evidence.</span></h2></div>
              <p className="section-subtitle section-subtitle--right">Each skill links to a pull request, file or blame view where I used it. No ratings or percentages. Areas I am still learning are listed separately below.</p>
            </div>
            <div className="skills-grid">
              {skillCategories.map((category, index) => <SkillCategoryCard key={category.id} category={category} index={index} />)}
            </div>
            <section className="exploring-block" aria-labelledby="exploring-heading">
              <h3 id="exploring-heading">Currently exploring <span>(not claimed as demonstrated skills)</span></h3>
              <ul>
                {exploringAreas.map((area) => <li key={area.name}><strong>{area.name}</strong><span>{area.note}</span></li>)}
              </ul>
            </section>
          </div>
        </section>

        {/* 3 · S&AI Open-Source Contributions */}
        <section id="contributions" className="section section-contributions" aria-labelledby="contributions-heading">
          <div className="container">
            <SectionLabel number="03">S&amp;AI OPEN-SOURCE CONTRIBUTIONS</SectionLabel>
            <div className="section-heading-row">
              <div>
                <h2 id="contributions-heading">S&amp;AI Open-Source Contributions</h2>
                <p className="section-subtitle">
                  Pull requests submitted to{' '}
                  <ExternalLink className="inline-link" href={contributionsIntro.repositoryUrl}>{contributionsIntro.repository}</ExternalLink>
                  , the S&amp;AI course organisation’s fork of{' '}
                  <ExternalLink className="inline-link" href={contributionsIntro.upstreamUrl}>{contributionsIntro.upstream}</ExternalLink>
                  {' '}(Exercism’s C track).
                </p>
              </div>
              <div className="contribution-summary-box">
                <GitPullRequest size={18} aria-hidden="true" />
                <div>
                  <strong>{contributions.length} pull requests</strong>
                  <span>Tasks {contributions.map((c) => c.taskId).join(', ')}</span>
                </div>
              </div>
            </div>
            <div className="verification-note">
              <p><strong>Verified on {contributionsIntro.verifiedOn}.</strong> {contributionsIntro.method}</p>
              <p>
                {contributionsIntro.accountsNote}{' '}Accounts:{' '}
                {contributionsIntro.accounts.map((account, index) => (
                  <span key={account.label}>
                    {index > 0 && ', '}
                    <ExternalLink className="inline-link" href={account.url}>{account.label}</ExternalLink>
                  </span>
                ))}
                .
              </p>
            </div>
            <h3 className="contribution-index-heading">Index of pull requests</h3>
            <ContributionTable contributions={contributions} />
            <h3 className="contribution-index-heading">Details of each pull request</h3>
            <div className="contributions-list">
              {contributions.map((contribution) => <ContributionCard key={contribution.taskId} contribution={contribution} />)}
            </div>
            <section className="other-records" aria-labelledby="other-records-heading">
              <h3 id="other-records-heading">Other pull-request records (not counted above)</h3>
              <p>These appear in my GitHub history but are superseded submissions, a mistaken target, or PRs inside my own forks.</p>
              <ul>
                {otherPrRecords.map((record) => (
                  <li key={record.label}>
                    <div className="other-record-head">
                      <ExternalLink href={record.url}><code>{record.label}</code></ExternalLink>
                      <span className="other-record-status">{record.status}</span>
                    </div>
                    <p>{record.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        {/* 4 · Projects */}
        <section id="projects" className="section section-work" aria-labelledby="projects-heading">
          <div className="container">
            <SectionLabel number="04">PROJECTS</SectionLabel>
            <div className="section-heading-row">
              <div>
                <h2 id="projects-heading">Projects<br /><span>and what I built in them.</span></h2>
                <p className="section-subtitle">A team project with my own work separated from my teammates’, an individual project, and an ongoing direction with current progress kept apart from plans.</p>
              </div>
              <ExternalLink className="github-link" href={profile.github}><Github size={17} aria-hidden="true" /> All repositories</ExternalLink>
            </div>
            <div className="case-study-list">
              {projects.map((project) => <ProjectCaseStudy key={project.id} project={project} />)}
            </div>
          </div>
        </section>

        {/* 5 · Education & Achievements */}
        <section id="education" className="section section-journey" aria-labelledby="education-heading">
          <div className="container">
            <SectionLabel number="05">EDUCATION &amp; ACHIEVEMENTS</SectionLabel>
            <div className="section-heading-row">
              <h2 id="education-heading">Education &amp;<br /><span>achievements.</span></h2>
              <p className="section-subtitle section-subtitle--right">Every entry has a date and, where one exists, a link that verifies it.</p>
            </div>
            <div className="journey-layout">
              <div className="journey-heading">
                <div className="journey-section-kicker"><GraduationCap size={16} aria-hidden="true" /> EDUCATION</div>
                {education.map((item) => (
                  <article className="education-card" key={item.institution}>
                    <span className="education-stage">{item.stage}</span>
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                    <span className="education-graduation">{item.graduation}</span>
                  </article>
                ))}
                <div className="journey-section-kicker journey-section-kicker--spaced"><BookOpen size={16} aria-hidden="true" /> TRAINING</div>
                <TimelineList entries={training} />
              </div>
              <div>
                <div className="journey-section-kicker"><Award size={16} aria-hidden="true" /> ACHIEVEMENTS</div>
                <TimelineList entries={achievements} />
                <div className="journey-section-kicker journey-section-kicker--spaced"><Award size={16} aria-hidden="true" /> CERTIFICATIONS</div>
                {certifications.length > 0 ? (
                  <TimelineList entries={certifications} />
                ) : (
                  <p className="empty-note">No completed certifications yet. The SkillOrbit × Skill India cybersecurity programme is listed under Training because it is still in progress.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 6 · Contact */}
        <section id="contact" className="section section-contact" aria-labelledby="contact-heading">
          <div className="container contact-container">
            <SectionLabel number="06">CONTACT</SectionLabel>
            <div className="contact-layout">
              <div className="contact-copy">
                <div className="contact-overline"><span className="pulse-dot" /> OPEN TO INTERNSHIPS &amp; OPEN-SOURCE WORK</div>
                <h2 id="contact-heading">Get in<br /><span>touch.</span></h2>
                <p>For internships, AI/ML opportunities or open-source collaboration, email is the quickest way to reach me.</p>
                <ul className="contact-list">
                  {contactLinks.map(({ icon: Icon, label, href, text, external }) => (
                    <li key={label}>
                      <span className="contact-direct-icon"><Icon size={17} aria-hidden="true" /></span>
                      <div>
                        <span className="contact-direct-label">{label.toUpperCase()}</span>
                        {external ? (
                          <ExternalLink href={href} plain>{text}</ExternalLink>
                        ) : (
                          <a href={href}>{text}</a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact-form-wrap">
                <div className="contact-form-header"><span><Mail size={16} aria-hidden="true" /> SEND A NOTE</span></div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">{profile.initials}</span><span className="brand-name">{profile.name}<span className="brand-period">.</span></span></a>
          <span className="footer-copy">© {new Date().getFullYear()} {profile.name} · Source on <ExternalLink className="inline-link" href="https://github.com/shivrautofficial/myportfolio" plain>GitHub</ExternalLink></span>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
