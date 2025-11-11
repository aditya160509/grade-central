<div align="center">

# 📚 A‑Level Central — CIE A‑Level Notes Hub

Curated study resources and notes for CIE A‑Level students — organized by subject and topic, easy to browse, and mobile‑friendly.

</div>

---

## Overview

This is a student‑made project that brings together links to high‑quality, publicly available study notes for the CIE A‑Level curriculum. The app is a single‑page application (SPA) built with Vite + React + TypeScript and deployed to Vercel.

⚠️ Disclaimer: None of the notes or PDFs are owned by this project. All content belongs to the original creators (see Credits). This is a non‑commercial school project intended to save students time and direct attention back to the original sources.

## Features

- Organized subjects and topics for quick navigation
- Responsive UI built with Tailwind and shadcn/ui (Radix primitives)
- Client‑side routing with React Router
- Ready for deployment on Vercel with SPA rewrites

Subjects covered (from `src/data`): Mathematics, Further Mathematics, Physics, Chemistry, Biology, Computer Science, Economics, Business Studies, Accounting, Psychology, Sociology.

## Tech Stack

- React 18 + TypeScript
- Vite 5 (development/build tooling)
- Tailwind CSS + shadcn/ui (Radix UI)
- TanStack Query (data fetching/cache)
- React Router v6
- Vercel (deployment)

## Project Structure

```
.
├─ index.html                 # Vite entry HTML
├─ vercel.json                # Vercel SPA config (rewrites to index.html)
├─ src/
│  ├─ main.tsx               # App bootstrap
│  ├─ App.tsx                # Routes and providers
│  ├─ pages/                 # Route pages (Homepage, SubjectPage, etc.)
│  ├─ components/            # UI components (shadcn/ui)
│  ├─ data/                  # Subject metadata JSON
│  └─ lib/, hooks/           # Utilities and hooks
├─ public/                    # Static assets
├─ tailwind.config.ts         # Tailwind config
├─ vite.config.ts             # Vite config (port 8080)
├─ package.json               # Scripts and dependencies
└─ .env                       # Local env (ignored by Git)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```
npm install
```

### Environment

Create a `.env` file at the repo root (do not commit it):

```
VITE_SUPABASE_URL=
VITE_SUPABASE_PROJECT_ID=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

Note: Variables are optional unless you integrate Supabase features. When deploying, set the same keys in your Vercel Project Settings → Environment Variables.

### Run (development)

```
npm run dev
```

Open http://localhost:8080.

### Build and Preview

```
npm run build
npm run preview
```

## Deployment (Vercel)

- `vercel.json` is included and configured for a Vite SPA:
  - Build: `npm run build`, Output: `dist`
  - Rewrite all routes to `/index.html` for client‑side routing
- Connect your GitHub/GitLab/Bitbucket repo to Vercel.
- Vercel will auto‑deploy on every push to the connected branch.
- Add required environment variables in Vercel → Project Settings.

## Scripts

- `npm run dev` — Start dev server (Vite)
- `npm run build` — Production build
- `npm run preview` — Preview built app locally
- `npm run lint` — Run ESLint

## Credits

This project curates links to materials by the following educators and platforms (and others acknowledged in‑app):

- Physics & Maths Tutor — https://www.physicsandmathstutor.com/
- BackNotes — https://backnotes.com/
- StudyWithMehar — https://studywithmehar.com/
- IGCSE Maths — https://igcsemaths.in/
- RIGCSE — https://rigcse.com/
- Reddit Community — https://www.reddit.com/
- Rocket Revise — https://rocketrevised.com/
- Suresh Goyal — Mathematics & Further Mathematics notes
- Study with Majid — Computer Science notes

If any contributor or platform prefers their materials not be linked here, please open an issue and the links will be promptly removed or updated.

## Contributing

Suggestions and improvements are welcome. Feel free to open an issue or pull request for bug fixes, UI/UX refinements, or data updates.

## License

See LICENSE file for more [MIT].
