# OculomiX

Marketing website for OculomiX, a retinal screening solution. Implemented in React as a single-page application with a pixel-accurate realization of the design across all ten pages.

## Tech stack

- **React 19** + **TypeScript** on **Vite 7**
- **Tailwind CSS 4** layered with the original design-system stylesheet (`src/styles/webflow.css`)
- **GSAP ScrollTrigger** for scroll-triggered reveals
- **Lenis** for smooth scrolling
- **lottie-web** for the animated navigation menu
- **React Router 7** for page routing

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/uitdaging` | De uitdaging |
| `/de-camera` | De camera |
| `/voor-wie` | Voor wie |
| `/oculomix-managed-service` | OculomiX Managed Service |
| `/eigen-beheer` | Eigen Beheer |
| `/over-ons` | Over ons |
| `/nieuws` | Nieuws |
| `/contact` | Contact |
| `/privacy-statement` | Privacy statement (renders without navbar/footer, by design) |

## Project structure

```
├── src/
│   ├── components/     # Navbar, Footer
│   ├── lib/            # asset map, GSAP reveal helpers
│   ├── pages/          # one component per route
│   └── styles/         # design-system CSS + global overrides
├── public/             # images, fonts, Lottie animations
├── tools/              # visual QA scripts (see below)
├── tests/              # Playwright smoke tests
└── docs/               # design reference material (mostly local-only, see below)
```

## Getting started

```bash
npm install
npm run dev        # start dev server on http://localhost:5173
npm run build      # type-check + production build
npm run preview    # serve the production build
npm run lint       # eslint
npm run test:e2e   # playwright smoke tests
```

## Visual QA

Two helper scripts support pixel-level verification of every page:

```bash
node tools/capture.mjs           # full-page screenshots of all routes at 1440px (dev server must be running)
python3 tools/compare.py home    # side-by-side composite: docs/capture-pack (left) vs shots/ (right)
```

`tools/compare.py` requires Pillow (`pip install Pillow`).

## Docs folder

- `docs/reference/` — markup and stylesheet reference used during implementation
- `docs/capture-pack/` — full-page reference screenshots + extracted content (local only, git-ignored)
- `docs/source-images/` — original image assets (local only, git-ignored)
- `docs/design-assets/` — design sketches and animation notes (local only, git-ignored)
- `docs/site-content.txt` — page content notes
