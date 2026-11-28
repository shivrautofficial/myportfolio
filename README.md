# Shiv Raut — Portfolio

Personal portfolio of Shiv Raut, a first-year B.Tech Computer Science (AI/ML) student at Newton School of Technology. Built with React, TypeScript, Vite and Tailwind CSS.

Live site: https://shivrautofficial.vercel.app

## Sections

The page follows the S&AI Project Portfolio Assessment structure:

1. **About Me** — degree, institution, year, focus areas, practical interests and objectives.
2. **Technical Skills** — six categories; every skill links to the repository, file, blame view or pull request where it was used. Areas still being learned are listed separately. No ratings or percentages.
3. **S&AI Open-Source Contributions** — an index table plus a detailed card for each course pull request (task ID, title, repository, PR link, status, changes, rationale, files changed, verification and known issues), and a list of other PR records that are not counted.
4. **Projects** — LifeOS (team project, individual contribution separated from teammates' work), LLM Pipeline Explorer (individual) and ANANTA (ongoing; current progress separated from plans).
5. **Education & Achievements** — education, training, achievements with dates and verification links, and certifications (none listed until one can be verified).
6. **Contact** — email (`mailto:`), GitHub, LinkedIn and résumé links, plus a form that drafts an email in the visitor's own mail app.

## Project structure

```
src/
  data/portfolio.ts           all content and evidence links (edit this to update the site)
  App.tsx                     page layout and section order
  components/
    ContributionCard.tsx      S&AI PR card and index table
    ProjectCaseStudy.tsx      project case study
    SkillCategoryCard.tsx     skill category with evidence links
    TimelineList.tsx          dated entries (training, achievements)
    ExternalLink.tsx          new-tab link and evidence-link row
    Header.tsx, SectionLabel.tsx, ContactForm.tsx
  styles.css
```

## Updating content

Everything shown on the page comes from [`src/data/portfolio.ts`](./src/data/portfolio.ts).

- **A PR is merged or closed:** change its `status`, `statusTone` and `statusDetail` in `contributions`, then update `VERIFIED_ON`.
- **A new S&AI PR:** add an entry to `contributions` with the same fields as the others. Link files with the `blob(...)` / `tree(...)` helpers at the PR's head commit so the links never drift.
- **A certification is completed:** add it to `certifications` with its date and a verification link.

Evidence links point at fixed commit SHAs where possible, so they keep showing the code as it was when the claim was written.

## Run locally

```bash
npm ci
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

Vite writes the site to `dist/`.

## Deploy on Vercel

When the Vercel project is connected to this repository (Vercel → Project → Settings → Git), pushing to the production branch (`main`) deploys automatically. Build settings:

- **Framework Preset:** Vite
- **Install Command:** `npm ci`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

No environment variables are required. `vercel.json` configures the SPA rewrite.

The contact form opens the visitor's email application with a draft; the site does not send, store or forward messages.
