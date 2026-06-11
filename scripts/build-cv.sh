#!/usr/bin/env bash
set -euo pipefail

# Build the LaTeX CV in cv/ into public/cv.pdf using a Dockerized TeX Live —
# no local TeX installation required. The source comes from Overleaf; see
# cv/README.md for how to add it.
#
# Engine: auto-detected from the "% !TeX program = ..." magic comment in the
# main file (Overleaf sets this). Override with CV_ENGINE=pdf|xe|lua.

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cv_dir="$root/cv"
out="$root/public/cv.pdf"

main="$(grep -l '\\documentclass' "$cv_dir"/*.tex 2>/dev/null | head -1 || true)"
if [ -z "$main" ]; then
  echo "No LaTeX source found in cv/."
  echo "Download your Overleaf project (Menu → Download → Source), unzip it into"
  echo "cv/, then re-run:  bun run cv:build"
  exit 1
fi
main_file="$(basename "$main")"

engine="${CV_ENGINE:-pdf}"
if grep -qiE '%[[:space:]]*!TeX program[[:space:]]*=[[:space:]]*xelatex' "$main"; then
  engine="xe"
elif grep -qiE '%[[:space:]]*!TeX program[[:space:]]*=[[:space:]]*lualatex' "$main"; then
  engine="lua"
fi
case "$engine" in
  pdf) flag="-pdf" ;;
  xe) flag="-pdfxe" ;;
  lua) flag="-pdflua" ;;
  *)
    echo "Unknown CV_ENGINE '$engine' (use pdf|xe|lua)"
    exit 1
    ;;
esac

echo "Building cv/$main_file (engine: $engine) → public/cv.pdf …"
docker run --rm -v "$cv_dir":/work -w /work texlive/texlive \
  latexmk "$flag" -interaction=nonstopmode -halt-on-error "$main_file"

cp "$cv_dir/${main_file%.tex}.pdf" "$out"
echo "✓ Wrote $out"
