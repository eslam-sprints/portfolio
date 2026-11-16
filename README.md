# Eslam Mohamed — Portfolio

Personal portfolio site built with React and Vite, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build
```

## Editing content

All text (experience, projects, skills, links) lives in [`src/data/profile.js`](src/data/profile.js). Update it and push — Vercel redeploys automatically.

## Deploy

Live at **https://eslam-portfolio-ten.vercel.app**.

Deploys run from GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) using the Vercel CLI:

- push to `main` → production deploy
- pull request into `main` → preview deploy
- manual run from the Actions tab (`workflow_dispatch`) → production deploy

Required repository secrets:

| Secret | Value |
| --- | --- |
| `VERCEL_TOKEN` | Token from https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | `orgId` from `.vercel/project.json` (after `vercel link`) |
| `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json` |
