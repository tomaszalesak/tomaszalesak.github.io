# Migrate portfolio site from plain HTML to Next.js

## Summary

Rewrite the portfolio site from a hand-coded single-page HTML/CSS site to a modern Next.js (static export) application with React, Radix UI, Tailwind CSS, and TypeScript.

## Motivation

The current site is a single `index.html` with inline styles and a `styles.css` file. While functional, it lacks:
- Type safety and maintainability — content is hardcoded in HTML
- Modern SEO features — no Open Graph, Twitter cards, structured data, sitemap, or robots.txt
- A component-based architecture for easier iteration
- A proper build pipeline with linting and formatting

## What changes

### Old stack (removed)
- Raw `index.html` + `styles.css` served directly via GitHub Pages
- Manual `prefers-color-scheme` media queries for dark mode
- All content hardcoded in HTML
- No build step, no linting, no type checking

### New stack
- **Next.js 16** with `output: "export"` (fully static, no server)
- **React 19** + **Radix UI Themes** for the design system
- **Tailwind CSS 4** for utility styles
- **TypeScript 5** for type safety
- **Biome** for linting and formatting (replaces ESLint + Prettier)
- **Bun** as the package manager and runtime
- **next-themes** for system-preference-based dark/light mode (no manual toggle)

### Architecture

- All portfolio content lives in `src/data/content.ts` as typed arrays — edit content in one place
- Components: `hero`, `contact`, `experience`, `tech-stack`, `education`, `hobbies`, `json-ld`, `section`
- Theming: `next-themes` sets `class="dark"/"light"` on `<html>`, Radix UI reads it, Tailwind supports `dark:` variants
- CSS layering: Radix styles imported into `layer(components)` so Tailwind utilities can override
- Static assets (favicons, portrait, CV, CNAME) moved from repo root to `public/`

### New features
- Full Open Graph and Twitter Card metadata
- Schema.org JSON-LD structured data (`Person` type) for rich search results
- Auto-generated `sitemap.xml` and `robots.txt`
- CI/CD via GitHub Actions: Bun install -> build -> deploy `out/` to GitHub Pages
- Clickable tech stack badges linking to documentation

### Content sections (preserved from original)
1. Hero (name, title, location)
2. Contact links (email, LinkedIn, GitHub, Facebook)
3. Work experience (3 roles with company links)
4. Tech stack (23 technologies)
5. Education (2 degrees)
6. Hobbies

## Files

### Deleted (old site at repo root)
- `index.html`, `styles.css`, `.nojekyll`, `CNAME`
- Favicons and assets at root level (`portrait.jpeg`, `cv.pdf`, etc.)

### Added
- `src/app/` — Next.js app directory (layout, page, globals.css, robots, sitemap)
- `src/components/` — React components for each section
- `src/data/content.ts` — all site content as typed data
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `public/` — static assets (moved from root)
- Config files: `next.config.ts`, `tsconfig.json`, `biome.json`, `postcss.config.mjs`, `package.json`

## Checklist

- [ ] Remove old HTML/CSS files from repo root
- [ ] Set up Next.js project with static export
- [ ] Implement all content sections as React components
- [ ] Extract content into typed data file (`content.ts`)
- [ ] Add Radix UI + Tailwind CSS + next-themes for theming
- [ ] Add SEO: Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt
- [ ] Set up GitHub Actions deploy workflow
- [ ] Set up Biome for linting/formatting
- [ ] Verify deployment to GitHub Pages with custom domain
