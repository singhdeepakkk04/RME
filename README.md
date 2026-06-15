<div align="center">

# RME · Landing Page

**Marketing site for [RME, the Repository Memory Engine](https://github.com).**

A fast, single-page marketing site with a light, editorial design and a faint
animated knowledge graph traversing the background, top to bottom.

[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## Design

Light, calm, and precise. A warm off-white canvas, near-black text, and a single
muted sage-green accent used sparingly so it earns its place. Display type is
Space Grotesk, body is Inter, code is JetBrains Mono. Every design token lives in
`tailwind.config.ts`, change the palette there and the whole site follows.

## Stack

Vite · React 18 · TypeScript (strict) · Tailwind CSS · Framer Motion. No CSS
framework bloat, no UI kit, no runtime dependencies beyond React and Framer.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173, hot reload
npm run build      # type-check (tsc) + production bundle into dist/
npm run preview    # serve the production build locally
```

Requires Node 18+ (developed on Node 24).

## Project structure

```
src/
  main.tsx              React entry
  App.tsx               page composition
  index.css             Tailwind layers + design utilities
  data/site.ts          ALL copy and content (edit here)
  components/
    BackgroundGraph.tsx faint animated graph traversal behind the whole page
    Logo.tsx            the network logo mark + wordmark
    Nav.tsx             sticky nav, blur on scroll, mobile menu
    Hero.tsx            headline + animated graph + terminal
    GraphField.tsx      the hero knowledge-graph centerpiece
    Terminal.tsx        reusable syntax-lit code block
    Marquee.tsx         protocol / tool proof strip
    Stats.tsx           count-up stat band
    Features.tsx        tabbed capability showcase
    Pipeline.tsx        three-stage "how it works"
    Benchmark.tsx       animated token-reduction chart
    WhyGrid.tsx         differentiator cards
    Integrate.tsx       one-command setup
    CTA.tsx             final call to action + copy to clipboard
    Footer.tsx          documentation index
    Reveal.tsx          scroll-into-view wrapper
    Icon.tsx            dependency-free stroke icon set
```

## Editing content

- **Copy** lives in `src/data/site.ts` (nav, stats, features, pipeline,
  benchmark, footer docs).
- **Colors, type, spacing** live in `tailwind.config.ts`.
- **Repo link** is the `REPO_URL` constant in `src/data/site.ts`. Swap in the
  real URL before publishing.

## Deploy

`npm run build` emits a static `dist/`. Host it anywhere:

- **Vercel**, import the repo, framework preset Vite (a `vercel.json` is
  included for zero config).
- **Netlify**, build `npm run build`, publish `dist`.
- **Cloudflare Pages**, build `npm run build`, output `dist`.
- **GitHub Pages**, build then publish `dist/`.

## License

MIT.
