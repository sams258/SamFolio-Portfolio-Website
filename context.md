# Context: SamFolio Portfolio Website

Academic research portfolio for Sam El Saati — MSc Computer Science
candidate at Malmö University, seeking a funded PhD position. Deployed at
[samfolio.se](https://samfolio.se) via Vercel.

The site's through-line: systems that adapt within the limits of their own
competence and hand control back to a person at the boundary of it — stated
in the Hero and evidenced by every project below it. Audience is PhD
supervisors, research groups, and funding committees, so course codes,
credits, grades, and named supervisors/examiners/co-authors are given in
full everywhere except the CareRide project, which is under NDA (domain,
role and research methods only — never internal architecture).

## Stack

- **Next.js 16** (App Router, Turbopack dev), **React 19**, **TypeScript**
- **CSS Modules** + hand-written CSS variables for styling (no Tailwind
  utility classes in the current design — see "Legacy / unused" below)
- **next/font**: DM Serif Display (serif), Instrument Sans (sans), JetBrains
  Mono (mono)
- **Framer Motion** is a dependency but unused by the current design;
  entrance animation is the CSS `.fade-up` / `.delay-1..4` classes in
  `globals.css`
- **Formspree** for the contact form backend (no custom API route,
  `nodemailer` was removed as an unused dependency)
- **Vercel Analytics** + **Speed Insights**
- **next-sitemap** (runs as a `postbuild` step)

## Structure

```
src/app/
  layout.tsx          root layout: fonts, metadata (title/OG/twitter), Analytics/SpeedInsights
  page.tsx             assembles the one-page site from section components
  globals.css          CSS variables (charcoal + gold palette), reset,
                        grain overlay, fadeUp animation
  not-found.tsx         custom 404
  projects.json         placeholder data ("Project One/Two/Three") — NOT
                         imported anywhere; stale/unused
  github/page.tsx       orphaned route: fetches /api/github, renders repos
                         with Tailwind classes — not linked from Navbar,
                         predates the redesign
  components/
    Navbar.tsx / .module.css
    Hero.tsx / .module.css
    Research.tsx / .module.css        -- the research-position statement
    About.tsx / .module.css
    Projects.tsx / .module.css        -- full research-project detail
    Dissemination.tsx / .module.css   -- posters + teaching
    IndependentWork.tsx / .module.css -- Albal Radio (featured) + Amazon Reviews
    Skills.tsx / .module.css
    Timeline.tsx / .module.css
    ContactForm.tsx / .module.css     -> POSTs to Formspree endpoint
    Footer.tsx / .module.css
src/pages/api/github.ts  Pages Router API route: fetches GITHUB_USERNAME's
                          repos via GITHUB_TOKEN, filters by "fetched" topic
                          (backs the orphaned /github page only)
z_ref.tsx                self-contained structural/content reference for the
                          academic redesign — not imported/built, kept in
                          sync with page.tsx and components/* by hand
public/                  favicons, hero/project images, og-image, robots.txt,
                          generated sitemap files
```

Page order (`page.tsx`): Navbar → Hero → Research → About → Projects →
Dissemination → IndependentWork → Skills → Timeline → ContactForm → Footer.

Section ids / nav: the visible nav links are Research, Projects,
Dissemination, Methods, Experience, Contact (in that order, driven by
`Navbar.tsx`'s `sections` array, rendered uppercase via CSS). `About` and
`IndependentWork` (`id="independent-work"`) are reachable by scroll but have
no nav entry by design. `Skills.tsx` uses `id="methods"` to match its nav
label; `Timeline.tsx` keeps `id="experience"`.

## Design system

Defined as CSS custom properties in `globals.css` — unchanged by the content
redesign:

- Palette: near-black background (`--black`, `--charcoal*`), warm off-white
  text (`--offwhite`, `--cream`), gold accent (`--accent`, `--accent-dim`,
  `--accent-glow`), hairline borders (`--line`)
- Fonts: `--serif` (headings), `--sans` (body), `--mono` (labels, metadata
  blocks, stat labels)
- Shared entrance animation: `.fade-up` + `.delay-1..4` utility classes —
  every new section (Research, Dissemination, IndependentWork) uses this
  pattern on label/heading/body in sequence

Recurring content patterns worth knowing before editing:
- **Featured card**: `.featured` (full-width, `--charcoal` bg, accent-glow
  radial gradient) used for the single most important entry in a grid —
  currently the BSc thesis in Projects and Albal Radio in IndependentWork
- **`.metaBlock`**: two-line mono provenance block (course code/credits/
  grades/dates, then supervisors/examiners/co-authors) under each project
  title in Projects.tsx and IndependentWork.tsx
- **Metrics strip** (IndependentWork only): 4-column stat grid, `--serif`
  accent-colored figures over `--mono` labels, for Albal Radio's listener
  numbers

When editing any section, match these tokens/patterns rather than
introducing new colors, fonts, spacing values, or reaching for Tailwind.

## Legacy / unused

- `tailwind.config.ts` and `postcss.config.mjs` are still present but
  `globals.css` has no `@tailwind` directives — Tailwind is effectively
  dead weight except on the orphaned `/github` page.
- `src/app/projects.json` — placeholder content, not wired up; `Projects.tsx`
  has its own data.
- `src/app/github/page.tsx` + `src/pages/api/github.ts` — pre-redesign
  GitHub-repos page, not linked from navigation. Needs `GITHUB_TOKEN` and
  `GITHUB_USERNAME` env vars to function.

## Environment / integrations

- Formspree form ID hardcoded in `ContactForm.tsx`:
  `https://formspree.io/f/mdaybjdz`
- `GITHUB_TOKEN`, `GITHUB_USERNAME` — only needed if reviving `/github`
- `package.json` has an `overrides` entry pinning the transitive `nanoid`
  dependency (pulled in via `postcss`) to `^3.3.18`, fixing a customAlphabet
  infinite-loop bug at `size: 0`

## Scripts

- `npm run dev` — Turbopack dev server
- `npm run build` — production build (also regenerates `public/robots.txt`
  and `public/sitemap-0.xml` via the `postbuild` `next-sitemap` step — revert
  those two files after a local build if they weren't an intended change)
- `npm run start` — serve production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`); `next lint`
  itself has been flaky in this environment, `npx eslint <files>` is the
  reliable fallback
- `postbuild` — runs `next-sitemap` automatically after `build`

## Recent history

- `88d0c18` Replace Technical Projects with featured Independent Work section
- `d637d3c` Rebuild site content around an academic research profile
- `61123b7` fix: patch nanoid infinite-loop and remove unused nodemailer
- `61fcbbf` Merge PR #15 — dependabot bump
- `59213d1` Bump brace-expansion

Uncommitted as of this writing: `layout.tsx` (title changed from "Samir" to
"Sam" per explicit instruction — do not reintroduce "Samir" unless asked),
`ContactForm.tsx` and `z_ref.tsx` (removed the Växjö relocation line and
simplified the Swedish-language line to just "beginner", no SFI detail).
