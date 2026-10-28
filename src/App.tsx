import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Copy,
  Cpu,
  FileDown,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import {
  achievements,
  certifications,
  education,
  experience,
  principles,
  profile,
  projects,
  skills,
} from './data/portfolio';
import type { Project, ProjectCategory, SkillGroup } from './data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#toolkit' },
  { label: 'Education & experience', href: '#journey' },
];
const projectFilters: Array<'All' | ProjectCategory> = [
  'All',
  ...new Set(projects.map((project) => project.category)),
];

function useScrollReveal(refreshKey: unknown) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [refreshKey]);
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.name}<span className="brand-period">.</span></span>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label-number">{number}</span>
      <span>{children}</span>
      <span className="section-label-line" />
    </div>
  );
}

function ProfileCard() {
  const currentEducation = education[0];

  return (
    <article className="profile-card" data-reveal>
      <div className="profile-card-top">
        <span>ENGINEERING / 01</span>
        <span className="profile-card-mark"><span /> LEARNING IN PUBLIC</span>
      </div>
      <div className="profile-portrait">
        {profile.photoUrl ? (
          <img src={profile.photoUrl} alt={`Portrait of ${profile.name}`} />
        ) : (
          <div className="portrait-placeholder" aria-label="Profile photo placeholder">
            <span className="portrait-initials">{profile.initials}</span>
            <span className="portrait-caption">ADD A PORTRAIT</span>
          </div>
        )}
      </div>
      <div className="profile-card-details">
        <span className="profile-card-label">{currentEducation.stage} · {currentEducation.degree}</span>
        <h2>{profile.name}</h2>
        <p><MapPin size={14} /> {profile.location}</p>
      </div>
      <div className="profile-interests">
        {profile.interests.map((interest) => <span key={interest}>{interest}</span>)}
      </div>
      <div className="profile-card-footer">
        <span>EXPECTED GRADUATION</span><strong>{currentEducation.graduation.split('·').pop()?.trim()}</strong>
      </div>
    </article>
  );
}

function ProjectVisual({ visual }: { visual: Project['visual'] }) {
  if (visual === 'lifeos') {
    return (
      <div className="project-visual project-visual--lifeos" aria-label="Abstract LifeOS dashboard preview">
        <div className="mock-dashboard">
          <div className="mock-sidebar">
            <div className="mock-logo"><span /> lifeos</div>
            <div className="mock-side-active"><span /> Workspace</div>
            <div className="mock-side-row"><span /> Productivity</div>
            <div className="mock-side-row"><span /> Academics</div>
            <div className="mock-side-row"><span /> Personalise</div>
          </div>
          <div className="mock-content">
            <div className="mock-welcome"><div><span className="mock-overline">YOUR SPACE</span><strong>One space, your way.</strong></div><div className="mock-avatar">S</div></div>
            <div className="mock-stats">
              <div><span>WORKSPACE</span><strong>Productivity</strong><i className="mock-bar bar-a" /></div>
              <div><span>WORKSPACE</span><strong>Academics</strong><i className="mock-bar bar-b" /></div>
              <div><span>SETTINGS</span><strong>Personalise</strong><i className="mock-bar bar-c" /></div>
            </div>
            <div className="mock-lower">
              <div className="mock-task-list"><span className="mock-overline">DESIGNED AROUND YOU</span><div><i />Productivity workflows</div><div><i />Academic planning</div><div><i />Personal settings</div></div>
              <div className="mock-chart"><span className="mock-overline">A FLEXIBLE WORKSPACE</span><div className="mock-abstract-lines"><i /><i /><i /><i /></div></div>
            </div>
          </div>
        </div>
        <span className="visual-caption">ONE SPACE. MORE CLARITY.</span>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--ananta" aria-label="Abstract autonomous robotics concept visual">
      <div className="ananta-grid" />
      <div className="ananta-ring ananta-ring--outer" />
      <div className="ananta-ring ananta-ring--middle" />
      <div className="ananta-ring ananta-ring--inner" />
      <div className="ananta-core"><Cpu size={36} strokeWidth={1.2} /></div>
      <div className="ananta-node node-one"><span /> SENSORS</div>
      <div className="ananta-node node-two"><span /> DECISION</div>
      <div className="ananta-node node-three"><span /> ACTION</div>
      <span className="visual-caption">SENSE → THINK → ACT</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card--${project.visual}`} data-reveal>
      <ProjectVisual visual={project.visual} />
      <div className="project-card-content">
        <div className="project-card-meta">
          <span className="project-number">/{project.number}</span>
          <span className={`status-pill ${project.status === 'LIVE' ? 'status-pill--live' : ''}`}>
            <span />{project.status}
          </span>
        </div>
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.title}<span className="project-title-dot">.</span></h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}><Check size={14} />{highlight}</li>)}
        </ul>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-card-links">
          {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>}
          {project.repoUrl && <a className="text-link text-link--muted" href={project.repoUrl} target="_blank" rel="noreferrer"><Github size={15} /> Source code</a>}
          {!project.liveUrl && !project.repoUrl && <span className="project-coming">Prototype in progress <ArrowRight size={14} /></span>}
        </div>
      </div>
    </article>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    const body = `Hi ${profile.name},\n\n${message}\n\nFrom: ${name}${email ? ` (${email})` : ''}`;
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt('Copy your message:', body);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} name="name" autoComplete="name" placeholder="What should I call you?" required />
        </label>
        <label>
          <span>Your email</span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label>
        <span>What's on your mind?</span>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} name="message" rows={4} placeholder="A project, an idea, an opportunity…" required />
      </label>
      <p className="form-notice">Submitting opens your email application with this message drafted. It is not sent or stored by this website.</p>
      <div className="form-actions">
        <button className="button button-primary" type="submit">Draft email <ArrowUpRight size={17} /></button>
        <button className="button button-quiet" type="button" onClick={copyMessage}><Copy size={15} /> {copied ? 'Copied message' : 'Copy message'}</button>
      </div>
    </form>
  );
}

function getSkillIcon(group: SkillGroup) {
  if (group.kind === 'tools') return Code2;
  if (group.kind === 'contributions') return Layers3;
  return Sparkles;
}

function CredentialList({
  title,
  entries,
}: {
  title: string;
  entries: { title: string; detail: string }[];
}) {
  return (
    <section className="credential-list" aria-label={title}>
      <h3>{title}</h3>
      {entries.map((entry) => (
        <article className="credential-item" key={entry.title}>
          <strong>{entry.title}</strong>
          <p>{entry.detail}</p>
        </article>
      ))}
    </section>
  );
}

function App() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  useScrollReveal(filter);
  const visibleProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section id="home" className="hero-section">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow-chip"><span className="pulse-dot" /> {profile.role}</div>
              <p className="hero-pretitle">Hey, I&apos;m {profile.name}.</p>
              <h1>{profile.headlineTop}<br /><span>{profile.headlineBottom}</span></h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
                <a className="button button-outline" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
                <a className="button button-outline" href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé <FileDown size={16} /></a>
              </div>
              <div className="hero-footnote">
                <span className="hero-footnote-icon"><Sparkles size={14} /></span>
                <span>Open to opportunities in<br /><strong>{profile.goals.join(' · ')}</strong></span>
              </div>
            </div>
            <div className="hero-art">
              <div className="art-index"><span>PROFILE / 001</span><span>STUDENT · BUILDER · EXPLORER</span></div>
              <ProfileCard />
              <div className="hero-art-orbit" aria-hidden="true" />
            </div>
          </div>
          <div className="container hero-bottom-row">
            <span className="scroll-hint"><span className="scroll-icon"><ArrowDown size={13} /></span> SCROLL TO EXPLORE</span>
            <span className="hero-bottom-note">GOOD WORK STARTS WITH GOOD QUESTIONS.</span>
          </div>
        </section>

        <section className="signal-strip" aria-label="Areas of interest">
          <div className="container signal-strip-inner">
            <span className="signal-label">AREAS I’M EXPLORING</span>
            {profile.interests.map((interest) => <div className="signal-item" key={interest}><span className="signal-bullet" /> {interest}</div>)}
          </div>
        </section>

        <section id="about" className="section section-about">
          <div className="container">
            <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
            <div className="about-layout">
              <div className="about-main" data-reveal>
                <h2>{profile.aboutHeading}</h2>
                <p className="about-lede">{profile.aboutLead}</p>
                {profile.aboutParagraphs.map((paragraph) => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
                <a className="inline-link" href="#journey">A bit more about the journey <ArrowUpRight size={15} /></a>
              </div>
              <div className="about-side" data-reveal>
                <div className="about-side-top"><span className="side-index">CURRENTLY EXPLORING</span><span className="side-icon"><Cpu size={18} /></span></div>
                {profile.interests.map((interest, index) => (
                  <div className="focus-line" key={interest}><span className="focus-number">0{index + 1}</span><div><strong>{interest}</strong><span>Learning through projects and training.</span></div><ArrowUpRight size={15} /></div>
                ))}
                <div className="about-side-bottom"><span className="side-status-dot" /> {education[0].stage} · {education[0].graduation.toUpperCase()}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section section-work">
          <div className="container">
            <SectionLabel number="02">PROJECTS</SectionLabel>
            <div className="section-heading-row" data-reveal>
              <div><h2>Work in progress.<br /><span>Ideas with a purpose.</span></h2><p className="section-subtitle">A project I’ve contributed to and an ongoing direction I’m exploring.</p></div>
              <a className="github-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> More on GitHub <ArrowUpRight size={15} /></a>
            </div>
            <div className="project-filter" role="group" aria-label="Filter projects">
              {projectFilters.map((value) => (
                <button key={value} type="button" className={filter === value ? 'filter-button filter-button--active' : 'filter-button'} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}<span>{value === 'All' ? projects.length.toString().padStart(2, '0') : projects.filter((project) => project.category === value).length.toString().padStart(2, '0')}</span></button>
              ))}
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
            <div className="work-note" data-reveal><span className="work-note-mark">+</span><p>Not every experiment becomes a product. <strong>Every experiment teaches me something.</strong></p><span className="work-note-code">KEEP BUILDING / KEEP LEARNING</span></div>
          </div>
        </section>

        <section id="toolkit" className="section section-toolkit">
          <div className="toolkit-bg-mark" aria-hidden="true">{`{ }`}</div>
          <div className="container">
            <SectionLabel number="03">SKILLS & FOCUS</SectionLabel>
            <div className="section-heading-row" data-reveal>
              <div><h2>What I use.<br /><span>What I’m learning.</span></h2></div>
              <p className="section-subtitle section-subtitle--right">Tools in this portfolio, project contribution areas, and interests are kept separate—no proficiency scores or inflated claims.</p>
            </div>
            <div className="capabilities-grid">
              {skills.map((item) => {
                const Icon = getSkillIcon(item);
                return (
                  <article className="capability-card" key={item.number} data-reveal>
                    <div className="capability-top"><span>{item.number}</span><Icon size={21} strokeWidth={1.5} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="capability-tools">{item.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </article>
                );
              })}
            </div>
            <div className="toolkit-bottom"><span><ShieldCheck size={16} /> LEARNING IN PROGRESS</span><span><Sparkles size={16} /> CURIOSITY OVER COMFORT</span><span><Code2 size={16} /> PROGRESS OVER PERFECTION</span></div>
          </div>
        </section>

        <section id="journey" className="section section-journey">
          <div className="container">
            <SectionLabel number="04">EDUCATION & EXPERIENCE</SectionLabel>
            <div className="journey-layout">
              <div className="journey-heading" data-reveal>
                <div className="journey-section-kicker"><GraduationCap size={16} /> EDUCATION</div>
                {education.map((item) => (
                  <article className="education-card" key={item.institution}>
                    <span className="education-stage">{item.stage}</span>
                    <h2>{item.institution}</h2>
                    <p>{item.degree}</p>
                    <span className="education-graduation">{item.graduation}</span>
                  </article>
                ))}
                <div className="journey-side-label"><span className="journey-side-line" />OPEN TO: {profile.goals.join(' · ').toUpperCase()}</div>
              </div>
              <div className="timeline">
                <div className="journey-section-kicker"><BookOpen size={16} /> EXPERIENCE & TRAINING</div>
                {experience.map((item, index) => (
                  <article className="timeline-item" key={item.organization} data-reveal>
                    <div className="timeline-rail"><span className="timeline-dot" />{index < experience.length - 1 && <span className="timeline-line" />}</div>
                    <div className="timeline-content"><span className="timeline-period">{item.period}</span><div className="timeline-title-row"><h3>{item.role}</h3><span className="timeline-marker">TRAINING</span></div><p className="timeline-organization">{item.organization}</p><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
            {(achievements.length > 0 || certifications.length > 0) && (
              <div className="credentials-grid">
                {achievements.length > 0 && <CredentialList title="Achievements" entries={achievements} />}
                {certifications.length > 0 && <CredentialList title="Certifications" entries={certifications} />}
              </div>
            )}
            <div className="principles-block">
              <div className="principles-heading"><span className="principles-kicker">A FEW WORKING PRINCIPLES</span><h3>The way I like to build.</h3></div>
              <div className="principles-list">
                {principles.map((principle, index) => <div className="principle-row" key={principle.title} data-reveal><span className="principle-index">0{index + 1}</span><div><h4>{principle.title}</h4><p>{principle.description}</p></div><MoveUpRight size={17} /></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="contact-backdrop" aria-hidden="true"><span>LET&apos;S</span><span>BUILD</span></div>
          <div className="container contact-container">
            <SectionLabel number="05">MAKE SOMETHING MATTER</SectionLabel>
            <div className="contact-layout">
              <div className="contact-copy" data-reveal>
                <div className="contact-overline"><span className="pulse-dot" /> OPEN TO OPPORTUNITIES & COLLABORATION</div>
                <h2>Let&apos;s build<br /><span>what&apos;s next.</span></h2>
                <p>I’m interested in internships, robotics and AI projects, open source, and hackathons. For a collaboration or a thoughtful conversation, email is the best way to reach me.</p>
                <div className="contact-direct"><span className="contact-direct-icon"><Mail size={18} /></span><div><span className="contact-direct-label">PREFER EMAIL?</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><ArrowUpRight size={16} /></div>
                <div className="social-links">
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
                  {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>}
                  {profile.resumeUrl && <a href={profile.resumeUrl} target="_blank" rel="noreferrer" aria-label="Resume"><FileDown size={17} /> Resume <ArrowUpRight size={13} /></a>}
                  <span className="contact-handle">{profile.handle}</span>
                </div>
                <div className="contact-small-note"><span /> {profile.location.toUpperCase()}</div>
              </div>
              <div className="contact-form-wrap" data-reveal><div className="contact-form-header"><span><Mail size={16} /> SEND A NOTE</span><span>USUALLY THE START OF SOMETHING</span></div><ContactForm /></div>
            </div>
            <div className="contact-footer-stamp"><span className="stamp-mark">{profile.initials}</span><span>ENGINEERED WITH CURIOSITY.<br />BUILT ONE ITERATION AT A TIME.</span><span className="stamp-ascii">( •̀ᴗ•́ )و</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">{profile.initials}</span><span className="brand-name">{profile.name}<span className="brand-period">.</span></span></a>
          <span className="footer-copy">© {new Date().getFullYear()} {profile.name}. Built with curiosity and a keyboard.</span>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
