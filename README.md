# Shiv Raut — Portfolio

A responsive React, TypeScript, and Vite portfolio for Shiv Raut, a first-year B.Tech Computer Science (AI/ML) student at Newton School of Technology. It presents education, project contributions, cybersecurity training, skills, and interests in AI and robotics.

## Run locally

From the repository root:

```bash
npm ci
npm run dev
```

Verify and preview a production build:

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy on Vercel

Import this GitHub repository into Vercel and use:

- **Root Directory:** `./` (the repository root)
- **Framework Preset:** Vite
- **Install Command:** `npm ci`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

No environment variables are required. `vercel.json` configures the SPA rewrite.

## Update portfolio content

Edit [`src/data/portfolio.ts`](./src/data/portfolio.ts) to update the profile, links, skills, education, experience, interests, projects, achievements, and certifications.

To add a profile photo, copy your image to `public/profile-photo.jpg` and set `photoUrl` to `"/profile-photo.jpg"` in the profile configuration. The site uses an initials placeholder until a photo is added.

LifeOS uses the supplied repository and demo links. ANANTA is labelled ongoing and does not claim a finished demo. The contact form opens the visitor's default email application with a draft; it does not send, store, or forward messages.
