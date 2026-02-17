# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun run dev`
- **Build (static export):** `bun run build` — outputs to `out/`
- **Preview build:** `bun run start` — serves `out/` locally
- **Lint:** `bun run lint` (Biome check)
- **Lint + fix:** `bun run lint:fix` (Biome auto-fix)
- **Install dependencies:** `bun install`

## Architecture

Single-page portfolio site built with Next.js 16, React 19, Radix UI Themes, and Tailwind CSS v4. Statically exported and deployed to GitHub Pages.

### Key decisions

- **Static export only** (`output: "export"` in next.config.ts) — no server-side features, no API routes. Images use `unoptimized: true`. Critical CSS is inlined via `experimental.optimizeCss` (critters).
- **Content is data-driven** — all portfolio content lives in `src/data/content.ts` as typed arrays (`contactLinks`, `workExperience`, `technologies`, `education`). Components import from there. To update content, edit that file only.
- **Theming uses three layers:** `next-themes` (sets `class="dark"/"light"` on `<html>`, system preference only), Radix UI `<Theme>` (reads the class to switch design tokens), and Tailwind v4 (supports `dark:` variants natively when class is set on `<html>`).
- **CSS layering:** `globals.css` imports Radix styles into `layer(components)` so Tailwind utilities can override them.
- **Tailwind v4** — CSS-first configuration via `@import "tailwindcss"` in `globals.css`, no `tailwind.config` file. PostCSS plugin in `postcss.config.mjs`.
- **Biome** for linting and formatting (replaces ESLint/Prettier). Config in `biome.json`.
- **Path alias:** `@/*` maps to `./src/*`.

### Project structure

```text
src/
  app/
    layout.tsx      — metadata, ThemeProvider, Radix Theme, skip-to-content link
    page.tsx        — composes all section components
    globals.css     — Tailwind + Radix CSS layering
    robots.ts       — allow-all robots config
    sitemap.ts      — single-URL sitemap
  components/
    hero.tsx        — portrait + name + tagline
    contact.tsx     — contact links table
    experience.tsx  — work experience cards
    tech-stack.tsx  — technology badges
    education.tsx   — education cards
    hobbies.tsx     — hobbies paragraph
    section.tsx     — reusable section wrapper with heading
    external-link.tsx — accessible external link (target="_blank" + sr-only label)
    json-ld.tsx     — Person schema (schema-dts)
  data/
    content.ts      — all portfolio content as typed arrays
public/
    CNAME, favicons, portrait images, cv.pdf, site.webmanifest
```

## CI/CD

- **CI** (`.github/workflows/ci.yml`): Runs on PRs to `main` and pushes to non-main branches. Steps: lint → type check (`tsc --noEmit`) → build.
- **CD** (`.github/workflows/deploy.yml`): Runs on push to `main`. Steps: install (`--frozen-lockfile`) → build → deploy `out/` to GitHub Pages. Custom domain: `www.tomaszalesak.eu` (CNAME in `public/`).
