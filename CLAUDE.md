# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun run dev`
- **Build (static export):** `bun run build` — outputs to `out/`
- **Lint:** `bun run lint`
- **Install dependencies:** `bun install`

## Architecture

This is a single-page portfolio site built with Next.js (static export) and deployed to GitHub Pages via GitHub Actions.

**Key architectural decisions:**

- **Static export only** (`output: "export"` in next.config.ts) — no server-side features, no API routes. Images use `unoptimized: true`.
- **Content is data-driven** — all portfolio content lives in `src/data/content.ts` as typed arrays. Components import from there. To update content, edit that file only.
- **Theming uses three layers:** `next-themes` (sets `class="dark"/"light"` on `<html>`), Radix UI `<Theme>` (reads the class to switch design tokens), and Tailwind (supports `dark:` variants via `darkMode: "class"`). No manual toggle — system preference only.
- **CSS layering:** `globals.css` imports Radix styles into `layer(components)` so Tailwind utilities can override them when needed.
- **Path alias:** `@/*` maps to `./src/*`.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`: Bun install → build → deploy `out/` to GitHub Pages. Custom domain: `www.tomaszalesak.eu` (CNAME in `public/`).
