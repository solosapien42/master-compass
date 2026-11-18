# Master Compass Germany

A free website that checks which **business and economics master's programmes in Germany** a student qualifies for.
Students enter their profile once (bachelor field, grade, ECTS per subject, languages, tests) and see, for every
programme, what they already meet and what is still missing.

- 179 programmes at 32 schools (public universities, universities of applied sciences, optional private schools), winter semester 2027/28
- Grade conversion with the modified Bavarian formula, or the grade from a uni-assist VPD
- Subject-ECTS rules, minimum grades, English/German requirements, GMAT/GRE, application windows, tuition
- Filters by field, city/university, language, tuition; a personal shortlist
- Every programme links to its official sources and lists facts that still need checking

## Project structure

```
master-compass/
  index.html        page markup
  styles.css        design
  app.js            eligibility logic and UI
  data/
    SCHEMA.md       data format (read this before adding a university)
    _meta.js        cycle and last-update date
    <university>.js one file per university
build-artifact.ps1  builds artifact.html for publishing on claude.ai
serve.ps1           local preview server (http://localhost:5173)
```

## Run locally

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open http://localhost:5173.

## Data

All requirements come from official university pages and admission regulations. They change every year, so every
card shows a "last checked" date and links to the official source. Always confirm on the official page before applying.
