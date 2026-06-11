# CV (LaTeX)

LaTeX source for the CV served at [`/cv.pdf`](../public/cv.pdf) on the site
(the hero's **Download CV** button). The main document is a
[moderncv](https://ctan.org/pkg/moderncv) file.

## Files

- `zalesak_tomas-cv.tex` — main document
- `photo.jpg` — portrait used by moderncv's `\photo`

The source lives on Overleaf. To refresh it, download the project
(**Menu → Download → Source**) and replace the files here.

## Building (no local TeX install)

The build runs in a Dockerized TeX Live image, so you don't install anything:

```bash
bun run cv:build
```

This compiles the main `.tex` and writes the result to `public/cv.pdf`
(committed, so the site works even without a local build). Requires Docker to
be running.

The engine is auto-detected from a `% !TeX program = xelatex|lualatex` magic
comment if present, otherwise pdfLaTeX. Override explicitly with:

```bash
CV_ENGINE=xe bun run cv:build   # pdf | xe | lua
```

## CI

`public/cv.pdf` is rebuilt from this source on every deploy (and validated on
PRs) — see `.github/workflows/deploy.yml` and `ci.yml`. The build steps are
conditional: if `cv/` has no `.tex`, they skip and the committed PDF is used.
