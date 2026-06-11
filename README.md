# tomaszalesak.github.io

Personal portfolio website for [Tomáš Zálešák](https://www.tomaszalesak.eu).

## Tech Stack

- [Next.js](https://nextjs.org/) (static export)
- [React](https://react.dev/)
- [Radix UI Themes](https://www.radix-ui.com/themes)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/)

## Development

```bash
bun install
bun run dev        # dev server
bun run lint       # Biome check (use lint:fix to auto-fix)
bun run build      # static export to out/
```

## CV

The CV is a LaTeX ([moderncv](https://ctan.org/pkg/moderncv)) document in
[`cv/`](cv/), compiled in a Dockerized TeX Live image — no local TeX install
needed:

```bash
bun run cv:build   # → public/cv.pdf (requires Docker)
```

See [`cv/README.md`](cv/README.md) for details.

## Deployment

Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions on push
to `main`. The deploy regenerates `public/cv.pdf` from the LaTeX source so the
downloadable CV is always current.

## Dependencies

Kept up to date by [Dependabot](.github/dependabot.yml), which opens weekly
grouped PRs for the Bun (`package.json` + `bun.lock`) and GitHub Actions
dependencies.
