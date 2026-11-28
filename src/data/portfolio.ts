/**
 * All portfolio content lives in this file. Components only render it.
 *
 * Evidence rule: every demonstrated skill, contribution and project claim
 * links to a public repository, file, commit, blame view or pull request.
 * Commit SHAs, pull-request states and test results below were checked on
 * 27 November 2026 (git refs, the GitHub search API and local re-runs).
 * When a PR's status changes (e.g. merged), update `status`/`statusTone`
 * in `contributions` and `VERIFIED_ON`.
 */

/** Date the PR statuses were last read from GitHub and the checks re-run. */
export const VERIFIED_ON = '27 November 2026';

export type EvidenceLink = {
  label: string;
  url: string;
};

const GH = 'https://github.com';
/** Fork on my main account (branches for R48-T001, T003, T004). */
const FORK = `${GH}/shivrautofficial/c`;
/** Fork on my second account, Shiv1742L (branches for R48-T002, T005–T010). */
const FORK2 = `${GH}/Shiv1742L/c`;
const COURSE_REPO = `${GH}/S-AI-Projects/c`;
const LIFEOS = `${GH}/shivrautofficial/LifeOS`;
const LLM = `${GH}/shivrautofficial/llmnpipeline`;

/** Pull-request head commits (each equals the tip of a branch in one of my forks). */
const SHA = {
  T001: 'ff608cb7c188a98f191b79907e6d78a853a137c7',
  T002: '646057f7ea7263b13dbd558f9b0ad28d69092224',
  T003: '34cff878444188946c5ee0e2ad50c2948dac706a',
  T004: '8b1a22472df21d11d2677dea0c592459f5cfe22f',
  T005: '22b76ae21cdb24d6ba44cdbef72e8d2eae790dc9',
  T006: 'c1a3cb518d8406df33f16ac8182a4ab26118555a',
  T007: '97d7e526a17f0a4e8ea6e7e5f6b670343454c1ec',
  T008: '1b56aac70e69fdebe68958d3e16180a275e3534f',
  T009: '867f4d065f115f39281cbc4a800eff9909906616',
  T010: '3bd813674c007d95f0e401e595f524d1057149f4',
  LIFEOS_FIRST: '941f5d617ff9798eb1ea30ef49ead6fc6bb61572',
  LIFEOS_FRONTEND: '32fb4221e437060a36242030930a7fcb11911ac0',
  LIFEOS_SERVER: '03df9b96836e6843d78b9b80a5694cc4b7b42cea',
  LIFEOS_RESTRUCTURE: '13ad53b9784c7b768843eed6e577e153c7545d85',
  LIFEOS_LICENSE: '0996ba9e7d36f6e2dad06ab4de436de835f32144',
  LIFEOS_SUPABASE: '6021a791e34762f7944fea4a94cf3cbc0a2ed82f',
  LLM: 'bb02d57e795c11aad57612fdff2b19a8cf78a0c6',
};

const blob = (repo: string, sha: string, path: string) => `${repo}/blob/${sha}/${path}`;
const tree = (repo: string, sha: string, path: string) => `${repo}/tree/${sha}/${path}`;
const LIFEOS_PROTOTYPE = `${LIFEOS}/blob/${SHA.LIFEOS_FIRST}/LifeOS/Workflow%20and%20Middle%20Workers`;

/* -------------------------------------------------------------------------- */
/* Profile & About                                                            */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: 'Shiv Raut',
  initials: 'SR',
  role: 'B.Tech CSE (AI/ML) · Newton School of Technology',
  headlineTop: 'Engineering Student',
  headlineBottom: 'Software, AI & Robotics',
  intro:
    'First-year Computer Science (AI/ML) student at Newton School of Technology. I write and test code for team projects and open-source course repositories, and I am looking for software engineering and AI/ML internships.',
  aboutHeading: 'Software engineering first, with AI, security and robotics close behind.',
  /**
   * The About Me paragraph required by the assessment (3–5 sentences):
   * degree & institution, year, focus areas, practical interests, objectives.
   */
  about: [
    'I’m Shiv Raut, a first-year B.Tech Computer Science (AI/ML) student at Newton School of Technology, expected to graduate in 2030.',
    'My focus is software engineering, alongside artificial intelligence, machine learning, cybersecurity and robotics, and the practical work I am most drawn to is verification: writing tests and check scripts that prove code does what its specification says.',
    'I wrote the client-side router, state and storage modules and the first version of the Node.js development server for LifeOS, a team-built life-management dashboard, and built LLM Pipeline Explorer, a browser app that shows how text becomes tokens and embedding vectors.',
    'For my S&AI course I submitted ten pull requests to a fork of Exercism’s C track that document exercises, add verification harnesses and clarify reference solutions.',
    'I’m looking for software engineering and AI/ML internships, and for open-source projects where my code is reviewed, tested and merged.',
  ],
  email: 'shivrautofficial@gmail.com',
  github: `${GH}/shivrautofficial`,
  linkedin: 'https://www.linkedin.com/in/shivrautofficial/',
  handle: '@shivrautofficial',
  resumeUrl:
    'https://drive.google.com/file/d/1A95WbPx22WsItlonWYo_LvAhkWeNavGl/view?usp=sharing',
  photoUrl: '/profile_pic.png',
  location: 'India',
  interests: ['Software Engineering', 'AI / ML', 'Cybersecurity', 'Robotics'],
  goals: ['Software engineering internships', 'AI/ML opportunities', 'Open source'],
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export type Skill = {
  name: string;
  /** What I actually did with it — one line, no proficiency rating. */
  usage: string;
  evidence: EvidenceLink[];
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      {
        name: 'C',
        usage:
          'Read and documented reference solutions in ten Exercism exercises, refactored the sum_of_squares loop, and wrote a differential driver and an instrumented measurement harness.',
        evidence: [
          { label: 'PR #74 · example.c', url: `${COURSE_REPO}/pull/74/files` },
          { label: 'R48-T005 harness.c', url: blob(FORK2, SHA.T005, 'work/R48-T005/harness.c') },
          { label: 'R48-T003 diagnostic_driver.c', url: blob(FORK, SHA.T003, 'work/R48-T003/diagnostic_driver.c') },
        ],
      },
      {
        name: 'Python',
        usage:
          'Standard-library check harnesses that copy an exercise to a temporary directory, run make test, parse the Unity summary and prove they fail on bad input.',
        evidence: [
          { label: 'R48-T004 check.py', url: blob(FORK, SHA.T004, 'work/R48-T004/check.py') },
          { label: 'R48-T009 runner', url: blob(FORK2, SHA.T009, 'tools/course_checks/r48-t009.py') },
          { label: 'R48-T002 check', url: blob(FORK2, SHA.T002, 'tools/course_checks/r48-t002.py') },
        ],
      },
      {
        name: 'JavaScript (ES modules)',
        usage:
          'LifeOS hash router, state container and storage wrapper; tokenizer and embedding maths in LLM Pipeline Explorer.',
        evidence: [
          { label: 'router.js (blame)', url: `${LIFEOS}/blame/main/js/router.js` },
          { label: 'state.js (blame)', url: `${LIFEOS}/blame/main/js/state.js` },
          { label: 'embeddings.js', url: blob(LLM, SHA.LLM, 'js/embeddings.js') },
        ],
      },
      {
        name: 'TypeScript',
        usage:
          'Typed React components and a task model with union types and a runtime type guard in the first LifeOS prototype.',
        evidence: [
          { label: 'taskTypes.ts', url: `${LIFEOS_PROTOTYPE}/taskTypes.ts` },
          { label: 'TaskManager.tsx', url: `${LIFEOS_PROTOTYPE}/TaskManager.tsx` },
        ],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      {
        name: 'HTML & CSS',
        usage:
          'First versions of the LifeOS page templates (dashboard, tasks, habits, goals, calendar) and about 40% of the current layout stylesheet.',
        evidence: [
          { label: 'Commit 32fb422 · FrontEnd Added', url: `${LIFEOS}/commit/${SHA.LIFEOS_FRONTEND}` },
          { label: 'layout.css (blame)', url: `${LIFEOS}/blame/main/css/layout.css` },
        ],
      },
      {
        name: 'React',
        usage: 'Hook-based components (useState, useMemo, useEffect) for task entry and an academic tracker in the LifeOS prototype.',
        evidence: [
          { label: 'TaskManager.tsx', url: `${LIFEOS_PROTOTYPE}/TaskManager.tsx` },
          { label: 'AcademicTracker.tsx', url: `${LIFEOS_PROTOTYPE}/AcademicTracker.tsx` },
        ],
      },
      {
        name: 'Single-page app routing',
        usage: 'Hash-based routing that fetches HTML templates, caches them in a Map and updates the title, breadcrumb and active link.',
        evidence: [{ label: 'router.js', url: `${LIFEOS}/blob/main/js/router.js` }],
      },
      {
        name: 'Three.js (WebGL)',
        usage: '3D scene with orbit controls, raycast hover tooltips, sprite labels and a spline through the words of a sentence.',
        evidence: [{ label: 'visualizer3d.js', url: blob(LLM, SHA.LLM, 'js/visualizer3d.js') }],
      },
      {
        name: 'Web Audio API',
        usage: 'Oscillator-generated click and completion sounds for LifeOS, with a mute setting saved between visits.',
        evidence: [{ label: 'audio.js (blame)', url: `${LIFEOS}/blame/main/js/audio.js` }],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      {
        name: 'Node.js (http module)',
        usage:
          'Zero-dependency server for LifeOS: MIME map, static file serving, a /api/health endpoint, 405 for unsupported methods and automatic port fallback.',
        evidence: [
          { label: 'server.js (blame)', url: `${LIFEOS}/blame/main/server/server.js` },
          { label: 'Commit 03df9b9', url: `${LIFEOS}/commit/${SHA.LIFEOS_SERVER}` },
        ],
      },
      {
        name: 'REST client scaffolding',
        usage: 'A fetch-based API client with a configurable base URL and bearer-token header, ready for a backend.',
        evidence: [{ label: 'api.js', url: `${LIFEOS}/blob/main/js/api.js` }],
      },
    ],
  },
  {
    id: 'data',
    title: 'Databases and Tools',
    skills: [
      {
        name: 'Browser storage (localStorage)',
        usage: 'Prefixed, JSON-serialised key–value persistence with safe reads and writes; saved custom vocabulary and history.',
        evidence: [
          { label: 'LifeOS storage.js (blame)', url: `${LIFEOS}/blame/main/js/storage.js` },
          { label: 'LLM Explorer state.js', url: blob(LLM, SHA.LLM, 'js/state.js') },
        ],
      },
      {
        name: 'GNU Make & Unity (C test framework)',
        usage: 'Ran exercise test suites with every case enabled and parsed the Unity summary line in harnesses.',
        evidence: [
          {
            label: 'Unity run log (9 tests, 0 failures)',
            url: blob(FORK, SHA.T004, 'work/R48-T004/evidence/make_test_current.log'),
          },
        ],
      },
      {
        name: 'Exercism configlet',
        usage: 'Regenerated a tests.toml twice with configlet sync and compared the outputs byte for byte.',
        evidence: [
          { label: 'R48-T002 evidence.md', url: blob(FORK2, SHA.T002, 'work/R48-T002/evidence.md') },
          { label: 'wordy.md', url: blob(FORK2, SHA.T002, 'docs/maintenance/wordy.md') },
        ],
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Development and Collaboration Tools',
    skills: [
      {
        name: 'Git & GitHub pull requests',
        usage: 'One branch per course task, each submitted as a pull request to the course organisation with a written description.',
        evidence: [
          { label: 'My PRs (Shiv1742L)', url: `${COURSE_REPO}/pulls?q=is%3Apr+author%3AShiv1742L` },
          { label: 'PR #74 (shivrautofficial)', url: `${COURSE_REPO}/pull/74` },
        ],
      },
      {
        name: 'Vercel deployment',
        usage: 'Restructured the LifeOS repository and added its deployment configuration; Vercel config for LLM Pipeline Explorer.',
        evidence: [
          { label: 'Commit 13ad53b', url: `${LIFEOS}/commit/${SHA.LIFEOS_RESTRUCTURE}` },
          { label: 'llmnpipeline vercel.json', url: blob(LLM, SHA.LLM, 'vercel.json') },
        ],
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Technical Areas',
    skills: [
      {
        name: 'Software testing & verification',
        usage:
          'Mutation testing, negative controls that prove a harness can fail, injected faults, and before/after sweeps against an independent model.',
        evidence: [
          { label: 'R48-T003 summary', url: blob(FORK, SHA.T003, 'work/R48-T003/evidence/summary.txt') },
          { label: 'R48-T005 check.py', url: blob(FORK2, SHA.T005, 'work/R48-T005/check.py') },
        ],
      },
      {
        name: 'Algorithm cost analysis',
        usage: 'Counted the comparisons a reference function makes, derived best- and worst-case bounds and checked them against measurements.',
        evidence: [
          { label: 'saddle-points.md', url: blob(FORK2, SHA.T005, 'docs/maintenance/saddle-points.md') },
          { label: 'PR #89', url: `${COURSE_REPO}/pull/89` },
        ],
      },
      {
        name: 'Vector maths for embeddings',
        usage: 'Unit-normalised vectors, cosine similarity and Euclidean distance, with tests that check expected similarity ordering.',
        evidence: [
          { label: 'embeddings.js', url: blob(LLM, SHA.LLM, 'js/embeddings.js') },
          { label: 'test_pipeline.js', url: blob(LLM, SHA.LLM, 'tests/test_pipeline.js') },
        ],
      },
      {
        name: 'Technical documentation',
        usage: 'Maintainer notes and learner hints that explain test decisions and C details for other people to act on.',
        evidence: [
          { label: 'grade-school.md', url: blob(FORK, SHA.T001, 'docs/maintenance/grade-school.md') },
          { label: 'acronym hints.md', url: blob(FORK2, SHA.T007, 'exercises/practice/acronym/.docs/hints.md') },
        ],
      },
    ],
  },
];

/** Areas I am learning. Listed separately because there is no shipped evidence yet. */
export const exploringAreas = [
  { name: 'Machine learning', note: 'Coursework in my AI/ML degree. LLM Pipeline Explorer visualises embeddings but does not train a model.' },
  { name: 'Cybersecurity', note: 'Training with SkillOrbit × Skill India (in progress).' },
  { name: 'Robotics & autonomous systems', note: 'The direction behind ANANTA (no prototype yet).' },
  { name: 'SQL & Supabase', note: 'Used by teammates in LifeOS; I added the client dependency only.' },
];

/* -------------------------------------------------------------------------- */
/* S&AI Open-Source Contributions                                             */
/* -------------------------------------------------------------------------- */

export type ChangedFile = {
  path: string;
  change: 'Added' | 'Modified';
  note: string;
  url: string;
};

export type Contribution = {
  taskId: string;
  /** Exact pull-request title on GitHub. */
  title: string;
  /** The course task family (same pattern across every student's R48 tasks). */
  taskType: string;
  repository: string;
  repositoryUrl: string;
  prNumber: number;
  prUrl: string;
  exercise: string;
  status: string;
  statusTone: 'open' | 'revision';
  statusDetail: string;
  opened: string;
  openedBy: string;
  branch: EvidenceLink;
  summary: string;
  changes: string[];
  rationale: string[];
  files: ChangedFile[];
  verification: string[];
  /** Result of re-running the checks (see VERIFIED_ON). */
  recheck: string;
  knownIssues?: string[];
  /** AI assistance recorded in the commit or PR itself. */
  aiNote?: string;
};

export const contributionsIntro = {
  repository: 'S-AI-Projects/c',
  repositoryUrl: COURSE_REPO,
  upstream: 'exercism/c',
  upstreamUrl: `${GH}/exercism/c`,
  verifiedOn: VERIFIED_ON,
  method:
    'Titles, numbers, authors and states were read from GitHub, and each PR’s own check script (or the exercise’s Unity test suite) was re-run at the PR’s head commit.',
  accountsNote:
    'I opened PR #74 from my main account and the other nine from my second GitHub account. Every commit in those nine is authored as shivrautofficial <shivrautofficial@gmail.com>, so the work can be traced to this profile from each PR’s commit list.',
  accounts: [
    { label: 'shivrautofficial', url: `${GH}/shivrautofficial` },
    { label: 'Shiv1742L', url: `${GH}/Shiv1742L` },
  ],
};

export const contributions: Contribution[] = [
  {
    taskId: 'R48-T001',
    title: 'docs(grade-school): explain canonical case decisions (R48-T001)',
    taskType: 'Explain canonical-case decisions',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 85,
    prUrl: `${COURSE_REPO}/pull/85`,
    exercise: 'grade-school',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review. Replaces #61.',
    opened: '18 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'student/e26b07f0554-R48-T001', url: `${FORK}/tree/student/e26b07f0554-R48-T001` },
    summary:
      'Reviewed all 23 canonical test cases for grade-school and replaced three vague “Reimplemented” comments with specific reasons.',
    changes: [
      'Rewrote the comment on each of the 3 excluded cases in tests.toml to name the included case that covers it and the code path involved.',
      'Added a maintenance page with a table of the excluded UUIDs, test names and rationale.',
      'Added a check script that runs the full suite against the reference implementation in a temporary copy.',
      'Kept every inclusion status unchanged: 20 included, 3 excluded, before and after.',
    ],
    rationale: [
      '“Reimplemented” did not tell a maintainer why a case was skipped or whether C could support it.',
      'Each exclusion is redundancy, not a language limitation: the roster-wide duplicate check (strncmp in student_is_on_roster) is already covered by an included case.',
      'Writing that down prevents someone from re-adding a duplicate test or assuming a C limitation that does not exist.',
    ],
    files: [
      {
        path: 'exercises/practice/grade-school/.meta/tests.toml',
        change: 'Modified',
        note: 'Three comment fields rewritten (+3 / −3).',
        url: blob(FORK, SHA.T001, 'exercises/practice/grade-school/.meta/tests.toml'),
      },
      {
        path: 'docs/maintenance/grade-school.md',
        change: 'Added',
        note: 'Rationale table for the excluded cases.',
        url: blob(FORK, SHA.T001, 'docs/maintenance/grade-school.md'),
      },
      {
        path: 'work/R48-T001/check.py · test-output.txt · verification.json',
        change: 'Added',
        note: 'Coursework harness and saved results.',
        url: tree(FORK, SHA.T001, 'work/R48-T001'),
      },
    ],
    verification: [
      'Reference implementation passes all 20 enabled tests (0 failures, 0 ignored).',
      'Case counts checked against the pinned baseline: 23 total, 20 included, 3 excluded.',
      'Learner stub files hashed before and after; unchanged and still unsolved.',
    ],
    recheck: 'work/R48-T001/check.py re-run: PASS, 20 tests, 0 failures, 0 ignored.',
    aiNote: 'The commit trailer lists GitHub Copilot as co-author.',
  },
  {
    taskId: 'R48-T002',
    title: 'R48-T002: Make the wordy test-generation path reproducible [exercises/practice/wordy]',
    taskType: 'Make the test-generation path reproducible',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 88,
    prUrl: `${COURSE_REPO}/pull/88`,
    exercise: 'wordy',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '21 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T002', url: `${FORK2}/tree/R48-T002` },
    summary:
      'Documented where the wordy tests come from and added a reusable check that regenerates them twice with configlet and proves both runs are identical.',
    changes: [
      'Added tools/course_checks/r48-t002.py (standard library only): runs configlet sync twice in scratch copies, compares the outputs byte for byte and by UUID set, and confirms no committed case is dropped.',
      'The same check runs the reference against every case with Unity and confirms the number of RUN_TEST lines equals the number of cases in tests.toml.',
      'Added docs/maintenance/wordy.md: the generation command, the input files, which files are generated, hand-maintained or vendored, and a 23-row table mapping each case to its RUN_TEST line.',
      'Recorded that the anchor phrase named in the task is the configlet header on line 3 of tests.toml, not a test case.',
      'Recorded that the committed tests.toml is 4 cases behind the canonical data (just a zero, just a negative number, addition with a left or right hand zero), without changing any test.',
    ],
    rationale: [
      'tests.toml is generated, so it should change through configlet, never by hand. A check that regenerates it shows that path actually works.',
      'Two identical runs prove the generation is deterministic, so a later diff in tests.toml means a real upstream change rather than noise.',
      'Mapping each case to its RUN_TEST line lets a maintainer see at a glance whether the hand-written C tests still match the generated list.',
      'Reporting the 4-case drift instead of fixing it keeps this PR reviewable and leaves a concrete, separate sync task for maintainers.',
    ],
    files: [
      {
        path: 'tools/course_checks/r48-t002.py',
        change: 'Added',
        note: 'The reusable check (318 lines).',
        url: blob(FORK2, SHA.T002, 'tools/course_checks/r48-t002.py'),
      },
      {
        path: 'docs/maintenance/wordy.md',
        change: 'Added',
        note: 'Generation command, inputs and case-to-test mapping.',
        url: blob(FORK2, SHA.T002, 'docs/maintenance/wordy.md'),
      },
      {
        path: 'work/R48-T002/check.py · evidence.md',
        change: 'Added',
        note: 'Coursework wrapper and saved evidence (expected vs actual, tool versions, negative runs).',
        url: tree(FORK2, SHA.T002, 'work/R48-T002'),
      },
    ],
    verification: [
      'Two configlet sync runs were byte-identical with identical UUID sets; no committed case was dropped.',
      '23 Unity cases ran against the reference: 0 failures, 0 ignored; learner stub still unsolved.',
      'Negative runs: a broken reference gave 15 failures and exit 1; removing every RUN_TEST made the build fail and the check exit 1.',
    ],
    recheck:
      'Reference re-run at the PR head: 23 tests, 0 failures. The configlet step could not be repeated in the re-check environment because the configlet download was blocked there.',
  },
  {
    taskId: 'R48-T003',
    title: 'docs(palindrome-products): find test distinguishing mutant and add contract hint (R48-T003)',
    taskType: 'Find a test that distinguishes a wrong implementation',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 72,
    prUrl: `${COURSE_REPO}/pull/72`,
    exercise: 'palindrome-products',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '17 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T003', url: `${FORK}/tree/R48-T003` },
    summary:
      'Showed that the existing test suite rejects a deliberately wrong palindrome() and documented three wrong versions it does not catch.',
    changes: [
      'Mutant M1: in a temporary copy only, deleted the guard that says a number ending in 0 is not a palindrome.',
      'Confirmed the existing case 0853f82c (“largest palindrome from single digit factors”) fails on M1 with “Expected 9 Was 40”.',
      'Found the smallest input that separates reference and mutant: get_palindrome_product(2, 5).',
      'Added a learner hint explaining why numbers ending in 0 are never palindromes, with that small input to debug with and no reference code.',
      'Added a maintainer page recording M1 and three surviving mutants (M2, M9, M12), each with a proposed test case.',
    ],
    rationale: [
      'A passing test suite only means something if it fails on wrong code. Mutation testing measures that directly.',
      'Searching for the smallest differing input (instead of guessing one) gives learners a case small enough to check by hand.',
      'Recording surviving mutants gives maintainers specific, evidence-backed proposals for new tests without changing tests in a coursework PR.',
    ],
    files: [
      {
        path: 'exercises/practice/palindrome-products/.docs/hints.md',
        change: 'Added',
        note: 'Learner hint: the trailing-zero rule and a worked example.',
        url: blob(FORK, SHA.T003, 'exercises/practice/palindrome-products/.docs/hints.md'),
      },
      {
        path: 'docs/maintenance/palindrome-products.md',
        change: 'Added',
        note: 'Mutants, rejecting test ID, smallest input and proposed cases.',
        url: blob(FORK, SHA.T003, 'docs/maintenance/palindrome-products.md'),
      },
      {
        path: 'work/R48-T003/check.py · diagnostic_driver.c · evidence/',
        change: 'Added',
        note: 'Coursework harness, differential C driver and saved logs.',
        url: tree(FORK, SHA.T003, 'work/R48-T003'),
      },
    ],
    verification: [
      'Original reference passes all 13 cases; the learner stub still fails.',
      'M1 fails 6 of 13 cases, including the named one; the mutation changes 10 C tokens, not just formatting.',
      'Original and mutants compared on 1,891 input ranges against an independent oracle written from the instructions.',
      'No test, learner stub, reference or metadata file was modified.',
    ],
    recheck: 'work/R48-T003/check.py re-run: RESULT PASS (13 cases; M1 fails 6 of 13; working tree unchanged).',
    aiNote: 'The commit trailer lists Claude (an AI coding assistant) as co-author.',
  },
  {
    taskId: 'R48-T004',
    title: 'R48-T004: Clarify sum_of_squares in the difference-of-squares reference',
    taskType: 'Clarify a function in the reference solution',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 74,
    prUrl: `${COURSE_REPO}/pull/74`,
    exercise: 'difference-of-squares',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '17 Nov 2026',
    openedBy: 'shivrautofficial',
    branch: { label: 'R48-T004', url: `${FORK}/tree/R48-T004` },
    summary:
      'A readability refactor of the reference solution’s sum_of_squares function, with a harness that proves behaviour did not change.',
    changes: [
      'Renamed the accumulator from sum to total and the loop variable from i to n.',
      'Started the loop at 1 instead of 0; the old first pass only ever added 0 × 0.',
      'Added a two-line loop-invariant comment: after adding n, total equals 1² + 2² + … + n².',
      'Left the function signature, square_of_sum and difference_of_squares unchanged.',
      'Added a Python check harness and saved its evidence under work/R48-T004/.',
    ],
    rationale: [
      'The exercise asks for the sum of squares of “the first N natural numbers”. Counting from 1 makes the code read the way the specification is written.',
      'total and n describe what the variables hold; sum was also the name square_of_sum uses for a different quantity.',
      'A stated invariant lets a reviewer check correctness one iteration at a time instead of trusting the output.',
      'Reference solutions are read by learners and maintainers, so clarity is worth a change even when behaviour is identical, as long as identical behaviour is proven.',
    ],
    files: [
      {
        path: 'exercises/practice/difference-of-squares/.meta/example.c',
        change: 'Modified',
        note: 'The refactor itself (+6 / −4 lines).',
        url: blob(FORK, SHA.T004, 'exercises/practice/difference-of-squares/.meta/example.c'),
      },
      {
        path: 'work/R48-T004/check.py',
        change: 'Added',
        note: 'Coursework harness: static checks, make test on stub/baseline/current, input sweep, negative controls.',
        url: blob(FORK, SHA.T004, 'work/R48-T004/check.py'),
      },
      {
        path: 'work/R48-T004/evidence/',
        change: 'Added',
        note: 'Test logs, results.json, sweep.csv, a hand-checkable trace and tool versions.',
        url: tree(FORK, SHA.T004, 'work/R48-T004/evidence'),
      },
    ],
    verification: [
      'Baseline and refactored reference both pass all 9 Unity tests (0 failures, 0 ignored); the learner stub still fails to build.',
      'All three functions agree with an independent closed-form model, and before equals after, on 306 inputs (including values where unsigned arithmetic wraps).',
      'Three negative controls (an off-by-one loop bound, a zero-test run and a non-compiling reference) are each reported as failures.',
    ],
    recheck: 'work/R48-T004/check.py re-run: 19 checks, 0 failed; 9 of 9 cases executed.',
  },
  {
    taskId: 'R48-T005',
    title: 'R48-T005: Measure the scaling of the saddle-points reference',
    taskType: 'Measure the scaling of the reference',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 89,
    prUrl: `${COURSE_REPO}/pull/89`,
    exercise: 'saddle-points',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '21 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T005', url: `${FORK2}/tree/R48-T005` },
    summary:
      'Stated and measured the cost of is_greatest_in_row in the reference solution. The only change to the exercise is a comment; no code changed.',
    changes: [
      'Added a comment above is_greatest_in_row in .meta/example.c giving its loop invariant, best case (1 comparison), worst case (C comparisons) and the int16_t index limit.',
      'Derived the whole-grid bounds: saddle_points() calls the function once per cell, so an R × C grid costs between R × (2C − 1) and R × C² comparisons.',
      'Measured exact comparison counts on nine grid sizes up to 512 × 512 with an instrumented copy (worst case 134,217,728 comparisons at 512 × 512).',
      'Added docs/maintenance/saddle-points.md: supported sizes, measured counts and timings, algorithm time separated from compile and process start-up time, and what the conclusion does not cover.',
    ],
    rationale: [
      'A cost claim in a reference solution should be measured, not guessed. Counting comparisons gives the same answer on every machine, unlike timings.',
      'Asserting correctness against an independent oracle before timing anything prevents measuring a program that is wrong.',
      'Separating compile (about 84 ms) and start-up (about 1.4 ms) from algorithm time stops small inputs from looking slower than they are.',
      'Stating limits (nothing above 512 × 512, only this function costed, one machine at -O2) keeps the claim exactly as strong as the evidence.',
    ],
    files: [
      {
        path: 'exercises/practice/saddle-points/.meta/example.c',
        change: 'Modified',
        note: 'Comment only (+18 lines): invariant, best and worst case, grid bounds.',
        url: blob(FORK2, SHA.T005, 'exercises/practice/saddle-points/.meta/example.c'),
      },
      {
        path: 'docs/maintenance/saddle-points.md',
        change: 'Added',
        note: 'Measurements, timings and the limits of the conclusion.',
        url: blob(FORK2, SHA.T005, 'docs/maintenance/saddle-points.md'),
      },
      {
        path: 'work/R48-T005/check.py · harness.c · evidence/',
        change: 'Added',
        note: 'Coursework check, instrumented C measurement harness, saved evidence and PR notes.',
        url: tree(FORK2, SHA.T005, 'work/R48-T005'),
      },
    ],
    verification: [
      'All 9 exercise cases pass against the reference; the learner stub is unchanged and still fails to build.',
      'Comparison counts match an independent Python model on every input, and the closed forms on the two extreme inputs.',
      'Negative controls (zero-test run, flipped comparison, bare stub) and six injected faults each make the check exit non-zero.',
    ],
    recheck: 'work/R48-T005/check.py re-run: 128 assertions passed, 0 failed; 9 test cases executed.',
    aiNote: 'The PR description ends with a “Generated with Claude Code” footer.',
  },
  {
    taskId: 'R48-T006',
    title: 'Add check script, evidence, and hint updates for R48-T006',
    taskType: 'Explain two approaches in C',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 90,
    prUrl: `${COURSE_REPO}/pull/90`,
    exercise: 'triangle',
    status: 'Open · needs revision',
    statusTone: 'revision',
    statusDetail: 'Open and not merged. Its saved evidence shows a failing build (see known issues).',
    opened: '21 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T006-pr', url: `${FORK2}/tree/R48-T006-pr` },
    summary:
      'A check script that builds the triangle exercise three ways (learner stub, reference, and a second implementation) and saves the build logs.',
    changes: [
      'Added work/R48-T006/check.py: copies the exercise to a temporary directory and runs make test for the stub (expected to fail), the reference .meta/example.c, and an alternative implementation.',
      'The alternative implementation, embedded in the script, replaces the repeated checks with one valid() helper for positive sides and the triangle inequality.',
      'Saved make output, error output and return codes for the stub and the reference, plus tool versions (updated in a second commit).',
    ],
    rationale: [
      'If a second, independently written implementation passes the same tests, the tests are checking behaviour rather than one implementation’s details.',
      'A single validity helper states the triangle rules once, which is easier to read and review than repeating them in all three functions.',
    ],
    files: [
      {
        path: 'work/R48-T006/check.py',
        change: 'Added',
        note: 'Three-variant build harness (210 lines).',
        url: blob(FORK2, SHA.T006, 'work/R48-T006/check.py'),
      },
      {
        path: 'work/R48-T006/evidence/',
        change: 'Added',
        note: 'make stdout, stderr and return codes for stub and reference; tool versions.',
        url: tree(FORK2, SHA.T006, 'work/R48-T006/evidence'),
      },
    ],
    verification: [
      'The saved logs show make test exiting with status 2 for both the stub and the reference.',
    ],
    recheck:
      'The reference and the alternative implementation both pass all 21 tests when .meta/example.h is copied as well as example.c, which confirms the problem is in the harness, not the implementations.',
    knownIssues: [
      'The script copies .meta/example.c but not .meta/example.h. The stub triangle.h declares no functions, so the reference build fails with “call to undeclared function ‘is_equilateral’”.',
      'REPO_ROOT is hard-coded to a local macOS path, so the script cannot run on another machine as committed.',
      'The title mentions hint updates, but no hints.md change is in the diff, and no log for the alternative implementation is saved.',
      'Planned fix: copy every files.example entry over its matching files.solution entry, resolve paths from the script location, re-run and update the evidence.',
    ],
  },
  {
    taskId: 'R48-T007',
    title: 'R48-T007: Add C-specific guidance for acronym [exercises/practice/acronym] #7',
    taskType: 'Add C-specific guidance',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 86,
    prUrl: `${COURSE_REPO}/pull/86`,
    exercise: 'acronym',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '20 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T007', url: `${FORK2}/tree/R48-T007` },
    summary:
      'Added a C hints section for acronym explaining null termination, the one C detail the reference solution’s string scan depends on.',
    changes: [
      'Added .docs/hints.md (56 lines) naming null termination (\'\\0\') as the construct that bounds the reference’s scan in count_words.',
      'Explained why that matters: is_first_letter_of_word reads phrase[i] and phrase[i − 1], which is safe only because the loop stops at the terminator; abbreviate reserves the extra byte with calloc(count + 1, …).',
      'Included a runnable micro-example comparing "PNG" (sizeof 4) with {\'P\',\'N\',\'G\'} (sizeof 3), with its exact expected output.',
      'Added the matching pitfall, an unterminated buffer that strlen reads past, and a link to the C language reference.',
    ],
    rationale: [
      'Learners coming from languages with length-tracked strings often do not know that a C string’s end is marked by a byte, not stored as a length.',
      'Tying the explanation to the reference’s actual loop condition shows why the code is safe, instead of describing null termination in the abstract.',
      'A runnable example with exact expected output lets a learner confirm the sizeof difference for themselves.',
    ],
    files: [
      {
        path: 'exercises/practice/acronym/.docs/hints.md',
        change: 'Added',
        note: 'C guidance, micro-example, pitfall and reference link.',
        url: blob(FORK2, SHA.T007, 'exercises/practice/acronym/.docs/hints.md'),
      },
    ],
    verification: [
      'The PR description reports that the check script ran 11 tests with 0 failures and that the learner stub is still unsolved.',
    ],
    recheck:
      'Reference re-run at the PR head: 11 tests, 0 failures. The micro-example compiles with cc -std=c99 and prints exactly the output given in the hint.',
    knownIssues: [
      'The check script mentioned in the description (work/R48-T007/check.py) is not part of the committed diff, so reviewers cannot run it from the PR.',
    ],
  },
  {
    taskId: 'R48-T008',
    title: 'R48-T008: map maintained files for queen-attack + verification checks',
    taskType: 'Map the maintained files',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 87,
    prUrl: `${COURSE_REPO}/pull/87`,
    exercise: 'queen-attack',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '20 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'student/e26b07f0554', url: `${FORK2}/tree/student/e26b07f0554` },
    summary:
      'Made the queen-attack metadata verifiable: a check proves every file declared in .meta/config.json resolves inside the exercise, and a note maps which files are maintained, generated or vendored.',
    changes: [
      'Added work/R48-T008/check.py (437 lines): parses the files object in .meta/config.json, resolves each path relative to the exercise, rejects absolute paths, “..” traversal and paths outside the exercise, and checks that every declared file exists.',
      'The same check copies the exercise to a temporary directory, substitutes the reference, enables the intended cases from tests.toml and runs make test, checking the exit code and Unity counts.',
      'Added three deliberately invalid config fixtures: a missing reference file, a missing test file, and a path that escapes the exercise.',
      'Added a maintenance note listing the real stub, header, test, reference and build paths, how the runner finds tests.toml and example.c, and which files are build outputs or vendored Unity.',
    ],
    rationale: [
      'config.json is how tooling finds the stub, tests and reference. A wrong or escaping path makes tooling test the wrong file without any error.',
      'Fixtures that must fail prove the validator is not a no-op that passes everything.',
      'Separating build outputs and vendored code from maintained source tells a maintainer which files to edit and which to leave alone.',
    ],
    files: [
      {
        path: 'work/R48-T008/check.py',
        change: 'Added',
        note: 'Metadata validator plus behavioural run.',
        url: blob(FORK2, SHA.T008, 'work/R48-T008/check.py'),
      },
      {
        path: 'work/R48-T008/fixtures/',
        change: 'Added',
        note: 'missing-reference, missing-test and outside-exercise config.json fixtures.',
        url: tree(FORK2, SHA.T008, 'work/R48-T008/fixtures'),
      },
      {
        path: 'work/R48-T008/maintenance.md',
        change: 'Added',
        note: 'Maintained, generated and vendored file map.',
        url: blob(FORK2, SHA.T008, 'work/R48-T008/maintenance.md'),
      },
      {
        path: 'work/R48-T008/inputs/ · results/ · versions.txt',
        change: 'Added',
        note: 'Metadata snapshots, expected-vs-actual report and run log.',
        url: tree(FORK2, SHA.T008, 'work/R48-T008'),
      },
    ],
    verification: [
      'The real config passes: all 4 declared files resolve inside the exercise.',
      'Each of the three invalid fixtures fails for its intended reason.',
      'Behavioural run: 13 tests, 0 failures, 4 ignored, child exit 0; learner stub untouched.',
    ],
    recheck: 'work/R48-T008/check.py re-run: 0 failures (13 tests, 0 failures, 4 ignored).',
    knownIssues: [
      'The maintenance note sits inside work/, which the course asks to be removed before upstreaming; it belongs in docs/maintenance/ to survive that step.',
    ],
  },
  {
    taskId: 'R48-T009',
    title: 'R48-T009: isolated test runner for complex-numbers',
    taskType: 'Run the exercise without altering its learner files',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 91,
    prUrl: `${COURSE_REPO}/pull/91`,
    exercise: 'complex-numbers',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '21 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T009', url: `${FORK2}/tree/R48-T009` },
    summary:
      'An isolated runner that tests the complex-numbers reference in a temporary copy, reports the real case count and proves it never edits the learner’s files.',
    changes: [
      'Added tools/course_checks/r48-t009.py (272 lines): reads paths from .meta/config.json, copies the exercise into a TemporaryDirectory, substitutes the reference, enables every case, runs make test and parses the Unity summary with a regular expression.',
      'Hashes the learner files before and after every run.',
      'Three scenarios: real (expects all 40 cases to pass), failing (breaks c_add in the copy and expects a non-zero exit) and empty (removes every RUN_TEST and expects the zero-test run to fail).',
      'Added docs/maintenance/complex-numbers.md with the commands, tool requirements and what each scenario checks.',
    ],
    rationale: [
      'A runner that reports success when zero tests ran, or hides a failing child process, gives false confidence. The failing and empty scenarios prove it reports both.',
      'Hashing the learner files before and after shows the runner never edits the stub, even when a run fails.',
      'TemporaryDirectory cleans up automatically, so an interrupted run leaves nothing behind in the repository.',
    ],
    files: [
      {
        path: 'tools/course_checks/r48-t009.py',
        change: 'Added',
        note: 'The isolated runner.',
        url: blob(FORK2, SHA.T009, 'tools/course_checks/r48-t009.py'),
      },
      {
        path: 'docs/maintenance/complex-numbers.md',
        change: 'Added',
        note: 'How to run it and what it checks.',
        url: blob(FORK2, SHA.T009, 'docs/maintenance/complex-numbers.md'),
      },
      {
        path: 'PR_Description.md',
        change: 'Added',
        note: 'Copy of the PR description.',
        url: blob(FORK2, SHA.T009, 'PR_Description.md'),
      },
    ],
    verification: [
      'PR results table: real scenario exit 0 with 40 cases; failing and empty scenarios exit non-zero; learner hashes match in all three.',
    ],
    recheck: 'Runner re-run at the PR head: real scenario 40 tests, 0 failures; failing and empty scenarios both exit 1 as intended.',
    knownIssues: [
      'The doc and description point to work/R48-T009/check.py and saved evidence files that are not in the committed diff.',
      'PR_Description.md was committed at the repository root rather than under work/.',
    ],
  },
  {
    taskId: 'R48-T010',
    title: 'R48-T010: explain subtle contract cases in two-fer',
    taskType: 'Explain the subtle contract cases',
    repository: 'S-AI-Projects/c',
    repositoryUrl: COURSE_REPO,
    prNumber: 92,
    prUrl: `${COURSE_REPO}/pull/92`,
    exercise: 'two-fer',
    status: 'Open · not merged',
    statusTone: 'open',
    statusDetail: 'Awaiting instructor review.',
    opened: '21 Nov 2026',
    openedBy: 'Shiv1742L',
    branch: { label: 'R48-T010', url: `${FORK2}/tree/R48-T010` },
    summary:
      'Added learner guidance for two-fer that explains each selected test case and separates specified behaviour from inputs outside the exercise contract.',
    changes: [
      'Added .docs/hints.md (35 lines) with a table of the three selected cases: NULL → “One for you, one for me.”, "Alice" and "Bob".',
      'Explained the C representation: two_fer(char *buffer, const char *name), where an unknown name is a NULL pointer and output goes into a caller-provided buffer.',
      'Stated that a NULL buffer, an empty string and a name longer than the buffer are outside the contract and unspecified.',
    ],
    rationale: [
      'In C, “no name” is a NULL pointer, not an empty string, which is easy to miss for learners coming from other languages.',
      'Marking out-of-contract inputs stops learners and reviewers from inventing rules the specification does not require, such as treating "" as “you”.',
    ],
    files: [
      {
        path: 'exercises/practice/two-fer/.docs/hints.md',
        change: 'Added',
        note: 'Case table, C representation and contract boundaries.',
        url: blob(FORK2, SHA.T010, 'exercises/practice/two-fer/.docs/hints.md'),
      },
    ],
    verification: [
      'The PR description reports the check script ran 3 cases with 0 failures and child exit 0; the learner stub is still unsolved.',
    ],
    recheck: 'Reference re-run at the PR head: 3 tests, 0 failures.',
    knownIssues: [
      'The check script and evidence were deliberately left out of the commit (stated in the PR), so reviewers cannot run them from the PR.',
    ],
  },
];

/** Other pull-request records found on GitHub that are not counted above. */
export const otherPrRecords: { label: string; url: string; status: string; detail: string }[] = [
  {
    label: 'S-AI-Projects/c #61',
    url: `${COURSE_REPO}/pull/61`,
    status: 'Closed · not merged (18 Nov 2026)',
    detail:
      'First submission of R48-T001. Its branch also carried the R48-T002 commit, so it was replaced by #85 (T001 only) and later #88 (T002).',
  },
  {
    label: 'exercism/c #1566',
    url: `${GH}/exercism/c/pull/1566`,
    status: 'Closed · not merged (19 Nov 2026)',
    detail:
      'Opened against the upstream Exercism repository by mistake; its own description says the base should be S-AI-Projects/c. Not a course submission.',
  },
  {
    label: 'shivrautofficial/c #1',
    url: `${FORK}/pull/1`,
    status: 'Merged into my fork (18 Nov 2026)',
    detail: 'A pull request inside my own fork that staged the R48-T006 work later submitted as #90.',
  },
  {
    label: 'Shiv1742L/c #1 and #2',
    url: `${FORK2}/pulls?q=is%3Apr`,
    status: 'Open inside my second fork (21 Nov 2026)',
    detail: 'Staging copies of R48-T006 and R48-T010 within the fork itself. The course submissions for those tasks are #90 and #92.',
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ContributionItem = {
  area: string;
  detail: string;
  evidence: EvidenceLink[];
};

export type Project = {
  id: 'lifeos' | 'llm-explorer' | 'ananta';
  number: string;
  title: string;
  tagline: string;
  status: string;
  statusDetail: string;
  isLive: boolean;
  overview: string;
  problem: string;
  solutionHeading: string;
  solution: string;
  architecture: { summary: string; layers: { name: string; detail: string }[] };
  technologies: { label: string; items: string[] }[];
  team: string;
  contributionHeading: string;
  myContribution: ContributionItem[];
  teamContribution?: string[];
  implementation: string[];
  progress?: { current: string[]; next: string[] };
  links: { repo?: EvidenceLink; docs?: EvidenceLink; live?: EvidenceLink };
  missingLinks?: string;
};

export const projects: Project[] = [
  {
    id: 'lifeos',
    number: '01',
    title: 'LifeOS',
    tagline: 'Open-source, privacy-first personal life management dashboard',
    status: 'Live',
    statusDetail: 'Team project · deployed on Vercel · built 24–25 Oct 2026 (per commit history)',
    isLive: true,
    overview:
      'LifeOS brings tasks, calendar, habits, goals, projects, notes, health and academic planning into one browser-based dashboard. It is a team project licensed under GPL-3.0.',
    problem:
      'Students juggle coursework deadlines, tasks, schedules, habits and personal goals across separate apps. Switching between them costs time, and each app keeps its own copy of the user’s data.',
    solutionHeading: 'Solution',
    solution:
      'A single-page dashboard where each life area is a module sharing one state store. Data stays in the browser by default (localStorage and IndexedDB, with JSON export), and cloud sync through Supabase is optional.',
    architecture: {
      summary:
        'A framework-free ES-module single-page app served as static files, with a small Node.js server for local development and Vercel for hosting.',
      layers: [
        { name: 'Shell', detail: 'index.html with sidebar navigation and a content outlet.' },
        { name: 'Router', detail: 'js/router.js maps #hash routes to HTML templates in pages/ and to a JavaScript module per page.' },
        { name: 'Feature modules', detail: 'tasks, calendar, habits, goals, projects, notes, health, insights, suggestions, settings.' },
        { name: 'State', detail: 'js/state.js: one central object with key updates and change events.' },
        { name: 'Persistence', detail: 'js/storage.js (localStorage); database/ wellness module (IndexedDB); optional Supabase sync.' },
        { name: 'Server & hosting', detail: 'server/server.js for local development; Vercel static hosting with /api/health and /api/config serverless functions.' },
      ],
    },
    technologies: [
      { label: 'Project stack', items: ['HTML5', 'CSS3', 'JavaScript (ES modules)', 'Node.js', 'Supabase', 'IndexedDB', 'Chart.js', 'Vercel'] },
      { label: 'Used in my contributions', items: ['JavaScript', 'HTML/CSS', 'Node.js http', 'localStorage', 'Web Audio API', 'React + TypeScript (prototype)', 'Vercel config'] },
    ],
    team:
      'Three-person team: me, Sarthak Chaudhary and Gitesh Patil (the contributors in the commit history). Line shares below come from git blame on the main branch, checked 27 Nov 2026.',
    contributionHeading: 'My individual contribution',
    myContribution: [
      {
        area: 'Client-side core (router, state, storage)',
        detail:
          'Wrote the hash router, the central state container and the localStorage wrapper that every other module builds on. I still author 86%, 76% and 86% of the current lines of these three files.',
        evidence: [
          { label: 'router.js', url: `${LIFEOS}/blame/main/js/router.js` },
          { label: 'state.js', url: `${LIFEOS}/blame/main/js/state.js` },
          { label: 'storage.js', url: `${LIFEOS}/blame/main/js/storage.js` },
        ],
      },
      {
        area: 'Productivity & academic modules',
        detail:
          'First implementations of the tasks, habits, goals, calendar and projects modules and their page templates; I still author more than half of the current tasks.js, habits.js and projects.js (53–66% of lines). An earlier React + TypeScript academic tracker prototype was in the first commit and later replaced.',
        evidence: [
          { label: 'Commit 32fb422', url: `${LIFEOS}/commit/${SHA.LIFEOS_FRONTEND}` },
          { label: 'habits.js (blame)', url: `${LIFEOS}/blame/main/js/habits.js` },
          { label: 'AcademicTracker.tsx', url: `${LIFEOS_PROTOTYPE}/AcademicTracker.tsx` },
        ],
      },
      {
        area: 'Dashboard UI/UX',
        detail:
          'The first dashboard view, including its Pomodoro focus timer (since rewritten by teammates); the task-row and habit-row renderers in widgets.js; and parts of the layout and component styles.',
        evidence: [
          { label: 'First dashboard.js', url: `${LIFEOS}/blob/${SHA.LIFEOS_FRONTEND}/Frontend/js/dashboard.js` },
          { label: 'widgets.js (blame)', url: `${LIFEOS}/blame/main/js/widgets.js` },
        ],
      },
      {
        area: 'Personalisation & sound',
        detail:
          'The profession presets (student, engineer, founder, creator) that the onboarding flow uses to tailor the dashboard, and the Web Audio sound module with a saved mute setting.',
        evidence: [
          { label: 'onboarding.js (blame)', url: `${LIFEOS}/blame/main/js/onboarding.js` },
          { label: 'audio.js (blame)', url: `${LIFEOS}/blame/main/js/audio.js` },
        ],
      },
      {
        area: 'Backend & data layer',
        detail:
          'The Node.js development server and a fetch-based API client with bearer-token support; added the Supabase client dependency that the team’s sync layer uses.',
        evidence: [
          { label: 'server.js', url: `${LIFEOS}/blame/main/server/server.js` },
          { label: 'api.js', url: `${LIFEOS}/blob/main/js/api.js` },
          { label: 'Commit 6021a79', url: `${LIFEOS}/commit/${SHA.LIFEOS_SUPABASE}` },
        ],
      },
      {
        area: 'Deployment & Git workflow',
        detail: 'Created the repository, restructured its folders, removed duplicates, added the deployment configuration (vercel.json, Dockerfile, render.yaml) and set the GPL-3.0 licence.',
        evidence: [
          { label: 'Commit 13ad53b', url: `${LIFEOS}/commit/${SHA.LIFEOS_RESTRUCTURE}` },
          { label: 'Commit 0996ba9', url: `${LIFEOS}/commit/${SHA.LIFEOS_LICENSE}` },
        ],
      },
    ],
    teamContribution: [
      'Sign-in, account modal and Supabase authentication (auth.js, authModal.js)',
      'Supabase schema and cloud sync engine (supabase.js, dbSync.js, server/dbController.js)',
      'Vercel serverless functions (api/health.js, api/config.js)',
      'Health manager, suggestions and insights/analytics modules',
      'Notes module and the IndexedDB wellness database with its tests',
      'The current dashboard and focus timer, and later design-system refinements',
    ],
    implementation: [
      'The router keeps a Map of fetched templates, so revisiting a page does not re-download its HTML; it updates the breadcrumb, document title and active sidebar item on every route change.',
      'Every storage read and write is wrapped in try/catch with a lifeos_ key prefix, so corrupted or blocked storage degrades to defaults instead of crashing the app.',
      'The development server answers HEAD as well as GET, rejects other methods with 405, and retries on the next port if the default one is in use.',
      'Profession presets are plain objects keyed by id, so adding a new persona is a data change rather than new UI code.',
    ],
    links: {
      repo: { label: 'GitHub repository', url: LIFEOS },
      docs: { label: 'README', url: `${LIFEOS}#readme` },
      live: { label: 'Live deployment', url: 'https://lifeos-by-xoders.vercel.app/' },
    },
  },
  {
    id: 'llm-explorer',
    number: '02',
    title: 'LLM Pipeline Explorer',
    tagline: 'Interactive, browser-based walkthrough of how text becomes tokens and embedding vectors',
    status: 'Built',
    statusDetail: 'Individual project · committed 18 Nov 2026 · 28/28 tests pass',
    isLive: false,
    overview:
      'An educational single-page app: type a sentence and follow it through tokenization, vocabulary lookup, token IDs, 16-dimensional embedding vectors and a 3D view, with each stage’s input and output shown. It is a teaching simulation, not a trained model.',
    problem:
      'Explanations of how large language models read text are usually static diagrams. A beginner cannot see what happens to their own sentence: where it splits into tokens, which IDs those tokens get, or why related words end up close together.',
    solutionHeading: 'Solution',
    solution:
      'A seven-stage stepper driven by the user’s own text, a searchable vocabulary that users can extend, a cosine-similarity calculator, and a 3D view that places related words near each other. The app states clearly that its embeddings are illustrative and that adding words does not change any real model.',
    architecture: {
      summary:
        'Plain JavaScript modules loaded with script tags, no build step and no backend. Three.js r128 comes from a CDN. Hosted as static files with a Vercel SPA rewrite.',
      layers: [
        { name: 'Config', detail: 'js/config.js: base vocabulary, semantic categories, sample prompts and constants.' },
        { name: 'State', detail: 'js/state.js: publish/subscribe store persisted to localStorage (custom words, history, stats).' },
        { name: 'Tokenizer', detail: 'js/tokenizer.js: regex tokenizer that assigns IDs and flags out-of-vocabulary tokens.' },
        { name: 'Embeddings', detail: 'js/embeddings.js: 16-D vectors, cosine similarity, Euclidean distance and a 3D projection.' },
        { name: '3D view', detail: 'js/visualizer3d.js: Three.js scene, orbit controls, raycast hover and a sentence path.' },
        { name: 'Pipeline & app', detail: 'js/pipeline.js seven-stage stepper and tour; js/app.js view routing and UI events.' },
      ],
    },
    technologies: [
      { label: 'Stack', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Three.js r128', 'OrbitControls', 'localStorage', 'Node.js (tests)', 'Vercel'] },
    ],
    team: 'Individual project: both commits in the repository are mine.',
    contributionHeading: 'My contribution',
    myContribution: [
      {
        area: 'Tokenizer and vocabulary',
        detail: 'Regex-based tokenization, ID assignment, out-of-vocabulary detection, and user-added words that get new unique IDs and persist between visits.',
        evidence: [
          { label: 'tokenizer.js', url: blob(LLM, SHA.LLM, 'js/tokenizer.js') },
          { label: 'state.js', url: blob(LLM, SHA.LLM, 'js/state.js') },
        ],
      },
      {
        area: 'Embedding maths',
        detail: 'Deterministic 16-D vectors, cosine similarity, Euclidean distance and the projection used to place words in 3D.',
        evidence: [{ label: 'embeddings.js', url: blob(LLM, SHA.LLM, 'js/embeddings.js') }],
      },
      {
        area: '3D visualisation',
        detail: 'Three.js scene with orbit controls, hover tooltips by raycasting, sprite labels, fly-to selection and a spline through the words of the input sentence.',
        evidence: [{ label: 'visualizer3d.js', url: blob(LLM, SHA.LLM, 'js/visualizer3d.js') }],
      },
      {
        area: 'Tests and deployment config',
        detail: 'A Node test suite that loads the browser modules in a vm sandbox with a mocked localStorage, a DOM-ID consistency check, and the Vercel configuration.',
        evidence: [
          { label: 'test_pipeline.js', url: blob(LLM, SHA.LLM, 'tests/test_pipeline.js') },
          { label: 'test_dom_elements.js', url: blob(LLM, SHA.LLM, 'tests/test_dom_elements.js') },
          { label: 'vercel.json', url: blob(LLM, SHA.LLM, 'vercel.json') },
        ],
      },
    ],
    implementation: [
      'Each embedding blends a per-category bias vector (65%) with deterministic noise from an FNV-1a-style hash of the word and dimension (35%), clamps to [−1, 1] and normalises to unit length. The same word always gets the same vector, and results are cached in a Map.',
      'Related words score high on cosine similarity by construction: the tests check that king–queen (0.866) is more similar than king–wolf (−0.292).',
      'The 3D position is a fixed trigonometric projection of the 16-D vector. The code calls it a PCA simulation; it is not a fitted principal-component analysis.',
      'One regular expression handles special tags such as <unk> and <pad>, words with apostrophe contractions, numbers and single punctuation marks. It is word-level, not a trained subword tokenizer.',
      'The self-attention stage explains the Q, K, V and softmax formulas; it does not compute attention.',
      'The test suite runs 28 assertions in Node without a browser by evaluating the modules inside vm with a mocked localStorage.',
    ],
    links: {
      repo: { label: 'GitHub repository', url: LLM },
      docs: { label: 'README', url: `${LLM}#readme` },
    },
    missingLinks: 'A Vercel configuration is committed, but no public deployment URL is listed yet.',
  },
  {
    id: 'ananta',
    number: '03',
    title: 'ANANTA',
    tagline: 'Ongoing direction in AI, robotics and autonomous systems',
    status: 'Ongoing',
    statusDetail: 'Early stage · no prototype, repository or documentation published yet',
    isLive: false,
    overview:
      'ANANTA is the name for my ongoing work towards autonomous systems: combining AI, robotics and hardware–software integration. It is presented here as work in progress, not as a finished product.',
    problem:
      'Autonomous physical systems need software that can sense their surroundings, make decisions and act through hardware reliably. ANANTA is my way of learning that full loop rather than only the software half.',
    solutionHeading: 'Proposed solution',
    solution:
      'Not fixed yet. The specific use case, hardware platform and AI approach are still being chosen; nothing is claimed beyond that direction.',
    architecture: {
      summary:
        'No architecture has been committed. The conceptual starting point is the sense → decide → act loop common to autonomous systems.',
      layers: [
        { name: 'Sense', detail: 'Read the environment through sensors.' },
        { name: 'Decide', detail: 'Turn sensor data into a decision (where AI/ML fits).' },
        { name: 'Act', detail: 'Drive hardware based on that decision.' },
      ],
    },
    technologies: [{ label: 'Stack', items: ['Not selected yet'] }],
    team: 'Individual direction; no collaborators are claimed.',
    contributionHeading: 'My individual contribution',
    myContribution: [
      {
        area: 'Direction and scoping',
        detail: 'Defining what ANANTA should be before building it.',
        evidence: [],
      },
    ],
    implementation: ['No implementation exists yet, so no implementation details are listed.'],
    progress: {
      current: [
        'Direction chosen: AI, robotics, autonomous systems and hardware–software integration.',
        'No code, hardware build, repository or prototype exists yet.',
      ],
      next: [
        'Choose one concrete use case and a hardware platform.',
        'Publish a repository with a written problem statement once work starts.',
      ],
    },
    links: {},
    missingLinks: 'No public repository, documentation or deployment yet. Links will be added when they exist.',
  },
];

/* -------------------------------------------------------------------------- */
/* Education & Achievements                                                   */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    institution: 'Newton School of Technology',
    degree: 'B.Tech in Computer Science (AI/ML)',
    stage: 'First year',
    graduation: 'Expected graduation · 2030',
  },
];

export type TimelineEntry = {
  title: string;
  organization: string;
  date: string;
  kind: string;
  detail: string;
  evidence?: EvidenceLink[];
};

export const training: TimelineEntry[] = [
  {
    title: 'Cybersecurity training',
    organization: 'SkillOrbit × Skill India',
    date: 'Ongoing',
    kind: 'Training',
    detail: 'Ongoing training in the cybersecurity domain. This is training, not a completed certification.',
  },
];

export const achievements: TimelineEntry[] = [
  {
    title: 'Ten S&AI open-source pull requests',
    organization: 'S-AI-Projects/c · course fork of exercism/c',
    date: '17–21 Nov 2026',
    kind: 'Open source',
    detail:
      'Submitted a pull request for every one of my assigned course tasks, R48-T001 to R48-T010, across ten Exercism C exercises. All ten are open and awaiting review.',
    evidence: [
      { label: 'PRs by Shiv1742L', url: `${COURSE_REPO}/pulls?q=is%3Apr+author%3AShiv1742L` },
      { label: 'PR #74', url: `${COURSE_REPO}/pull/74` },
    ],
  },
  {
    title: 'Shipped LifeOS with a team',
    organization: 'Team project · deployed on Vercel',
    date: '24–25 Oct 2026',
    kind: 'Project',
    detail: 'Built and deployed a working multi-module web app with two teammates over two days, according to the repository’s commit history.',
    evidence: [
      { label: 'Commit history', url: `${LIFEOS}/commits/main` },
      { label: 'Live app', url: 'https://lifeos-by-xoders.vercel.app/' },
    ],
  },
];

/** No certification could be verified, so none is listed. */
export const certifications: TimelineEntry[] = [];
