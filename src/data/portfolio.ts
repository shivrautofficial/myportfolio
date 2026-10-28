export type ProjectCategory = 'Web & Product' | 'AI & Robotics';

export type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: 'LIVE' | 'ONGOING';
  visual: 'lifeos' | 'ananta';
};

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  items: string[];
  kind: 'tools' | 'contributions' | 'interests';
};

export type Achievement = {
  title: string;
  detail: string;
};

/**
 * Keep personal details and portfolio content here. Add a portrait to
 * Keep the portrait in public/ and set photoUrl to its root-relative URL.
 */
export const profile = {
  name: 'Shiv Raut',
  initials: 'SR',
  role: 'Engineering Student | AI, Robotics & Software',
  headlineTop: 'Engineering Student',
  headlineBottom: 'AI, Robotics & Software',
  intro:
    'First-year computer science student interested in how software, AI, and robotics can solve practical problems. I learn by contributing to real projects and staying curious about how the whole system works.',
  aboutHeading: 'Curious about the systems behind the screen.',
  aboutLead:
    'I’m Shiv, a first-year B.Tech student exploring software engineering, artificial intelligence, robotics, and cybersecurity.',
  aboutParagraphs: [
    'On LifeOS, I’ve contributed to backend development, productivity and academic modules, dashboard UI/UX, database integration, authentication, and personalisation. It’s been a hands-on way to learn how product decisions and engineering details fit together.',
    'I’m also training in cybersecurity and developing an ongoing interest in autonomous systems and hardware–software integration. I’m early in the journey, so I value clear fundamentals, honest experimentation, and learning from people who build.',
  ],
  email: 'shivrautofficial@gmail.com',
  github: 'https://github.com/shivrautofficial',
  linkedin: 'https://www.linkedin.com/in/shivrautofficial/',
  handle: '@shivrautofficial',
  resumeUrl:
    'https://drive.google.com/file/d/1A95WbPx22WsItlonWYo_LvAhkWeNavGl/view?usp=sharing',
  photoUrl: '/profile_pic.png',
  location: 'Somewhere in India',
  interests: ['Robotics', 'Cybersecurity', 'AI'],
  goals: ['Internships', 'Robotics', 'AI', 'Open source', 'Hackathons'],
  siteTitle: 'Shiv Raut — Engineering Student | AI, Robotics & Software',
};

export const projects: Project[] = [
  {
    number: '01',
    title: 'LifeOS',
    eyebrow: 'Personal productivity · Academic workflows',
    description:
      'A personal workspace for productivity and academics. My contributions span backend development, dashboard experience, data integration, authentication, and personalisation.',
    category: 'Web & Product',
    tags: [
      'Backend development',
      'Productivity & academics',
      'Dashboard UI/UX',
      'Database integration',
      'Authentication',
      'Personalisation',
    ],
    highlights: [
      'Contributed to productivity and academic modules',
      'Worked across dashboard UI/UX and backend development',
      'Integrated database, authentication, and personalisation work',
    ],
    liveUrl: 'https://lifeos-by-xoders.vercel.app/',
    repoUrl: 'https://github.com/shivrautofficial/LifeOS',
    status: 'LIVE',
    visual: 'lifeos',
  },
  {
    number: '02',
    title: 'ANANTA',
    eyebrow: 'Ongoing direction · AI & robotics',
    description:
      'An ongoing project direction focused on AI, robotics, autonomous physical systems, and bringing hardware and software together.',
    category: 'AI & Robotics',
    tags: ['AI', 'Robotics', 'Autonomous systems', 'Hardware–software integration'],
    highlights: [
      'Exploring autonomous physical systems',
      'Learning how software and hardware can work together',
      'Still in development; no finished prototype is being presented',
    ],
    status: 'ONGOING',
    visual: 'ananta',
  },
];

export const skills: SkillGroup[] = [
  {
    number: '01',
    title: 'Web foundations',
    description:
      'Tools present in this portfolio project; this list describes the current codebase, not proficiency ratings.',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'CSS'],
    kind: 'tools',
  },
  {
    number: '02',
    title: 'Product contributions',
    description:
      'Areas I’ve worked on as part of LifeOS, based on my project contributions.',
    items: [
      'Backend development',
      'Authentication',
      'Database integration',
      'Dashboard UI/UX',
      'Productivity & academics',
    ],
    kind: 'contributions',
  },
  {
    number: '03',
    title: 'Exploring',
    description:
      'Fields I’m interested in learning more about; these are interests, not claims of expertise.',
    items: ['Robotics', 'Cybersecurity', 'AI', 'Autonomous systems'],
    kind: 'interests',
  },
];

export const education = [
  {
    institution: 'Newton School of Technology',
    degree: 'B.Tech in Computer Science (AI/ML)',
    stage: 'First Year',
    graduation: 'Expected graduation · 2030',
  },
];

export const experience = [
  {
    organization: 'SkillOrbit × Skill India',
    role: 'Cybersecurity trainee',
    period: 'Currently training',
    description: 'Training in the cybersecurity domain.',
  },
];

export const achievements: Achievement[] = [];
export const certifications: Achievement[] = [];

export const principles = [
  {
    title: 'Learn by building',
    description: 'Use real projects to turn questions into practical experience.',
  },
  {
    title: 'Stay honest about the work',
    description: 'Separate what is shipped from what is still an idea or an area to explore.',
  },
  {
    title: 'Understand the whole system',
    description: 'Connect interfaces, data, software, and the physical world.',
  },
];
