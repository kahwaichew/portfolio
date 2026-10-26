# Chew Kah Wai — Portfolio

Personal portfolio of a software engineer and UI/UX designer. It has UI/UX case studies covering the full design process (research → personas → flows → wireframes → design system → hi-fi → testing), plus the mobile and full-stack products I've shipped.

**Live:** _add Azure Static Web Apps URL_

## Stack

| Area      | Choice                                                   |
| --------- | -------------------------------------------------------- |
| Framework | React 19 + TypeScript (strict)                           |
| Build     | Vite 6                                                   |
| Styling   | Tailwind CSS v4 (`@theme` tokens in `src/index.css`)     |
| Routing   | React Router 7 (`/` and `/work/:slug`)                   |
| Motion    | Motion (Framer Motion)                                   |
| Testing   | Vitest + React Testing Library                           |
| Quality   | ESLint (typescript-eslint, react-hooks), Prettier        |
| Hosting   | Azure Static Web Apps (Free), deployed by GitHub Actions |
| Design    | Figma                                                    |

## Project structure

```
src/
  components/   Section components, Lightbox, SelectedWork, Process
  pages/        Home, CaseStudy, NotFound
  data/         Typed content: caseStudies, projects, skills, research
  hooks/        useDocumentTitle, useScrollToHash
  test/         Data-integrity and routing tests
public/work/    Exported Figma frames, one folder per case study
```

Case studies are data-driven. Each one is a `CaseStudy` object in `src/data/caseStudies.ts` made of typed sections (`text`, `insights`, `personas`, `steps`, `palette`, `gallery`). `pages/CaseStudy.tsx` renders each section by its `kind`. Adding a case study takes no new UI code.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit + routing tests
npm run lint
npm run build      # type-checks, then builds to dist/
```

## Deployment

`main` deploys to Azure Static Web Apps through `.github/workflows/azure-static-web-apps.yml`. Each pull request gets its own preview URL. `staticwebapp.config.json` rewrites unknown routes to `index.html`, so deep links like `/work/duit` work on refresh.

## License

MIT for the code. Design work, images and case-study content © Chew Kah Wai.
