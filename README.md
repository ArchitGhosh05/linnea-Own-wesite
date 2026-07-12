# Linnea Media

Marketing and creative agency website built with React and Vite. Showcases Linnea’s work across categories with scroll-driven animations, category-based portfolio pages, and React Bits UI components.

## Tech stack

- **React 19** + **Vite 8**
- **React Router** — client-side routing
- **Tailwind CSS** — layout and utilities
- **GSAP + ScrollTrigger** — pinned horizontal scroll, scroll animations
- **Lenis** — smooth scroll styles (optional hook available)
- **OGL** — WebGL components where needed
- **Oxlint** — linting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/works` | Works (redirects to `/works/creative`) |
| `/works/:category` | Category showcase |
| `/team` | Team |
| `/career` | Career |
| `/contact` | Contact |

### Work categories

`creative` · `motion` · `website` · `system-design` · `application` · `digital-marketing`

## Works page sections

Each category page (`WorksShowcase`) includes:

1. **Hero** — animated title and category description
2. **Marquee** — scrolling category label
3. **Impact** — scroll-pinned horizontal card gallery (GSAP)
4. **Gallery** — auto-moving infinite marquee
5. **Stack** — large stacked scroll cards (React Bits ScrollStack)
6. **Featured Projects** — cream bento grid
7. **CTA** — contact call-to-action

## Project structure

```
src/
├── App.jsx                 # Routes, navbar, footer, mascot
├── data.js                 # Nav, work categories, portfolio items
├── pages/                  # Home, About, Works, Team, Career, Contact
├── components/
│   ├── works/              # WorksShowcase, Impact, Gallery, Stack, Grid
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Mascot.jsx
│   ├── ScrollStack.jsx     # React Bits scroll-stack cards
│   ├── PillNav.jsx         # React Bits pill navigation
│   ├── LightRays.jsx       # React Bits hero background
│   ├── CardSwap.jsx        # React Bits card swap
│   ├── SplashCursor.jsx    # Fluid cursor trail
│   └── ImageTrail.jsx      # Cursor image trail
├── assets/
│   ├── impact/             # Impact section creatives
│   ├── banners/            # Stack section mockups
│   └── digital-marketing/  # Digital marketing mockups
└── hooks/
    └── useWorksSmoothScroll.js
```

## Updating content

Portfolio items live in `src/data.js` under `worksByCategory`. Each item supports:

```js
{
  image: importedImage,       // Used in Impact, Gallery, Grid
  stackImage: importedImage,  // Optional — used in Stack big cards
  title: 'Project Name',
  blurb: 'Short description',
}
```

To add images:

1. Place files in `src/assets/` (e.g. `impact/`, `banners/`)
2. Import them at the top of `data.js`
3. Assign to the relevant category array

Category metadata (labels, descriptions) is in `workCategories` in the same file.

## Notable components

Components from [React Bits](https://reactbits.dev) are vendored into `src/components/` with their CSS co-located. GSAP is registered in `main.jsx`; `ScrollTrigger.refresh()` runs on route changes in `Works.jsx`.
