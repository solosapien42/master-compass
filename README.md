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
scripts/
  check-data.js     data check used by GitHub Actions (node scripts/check-data.js)
```

## Run locally

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open http://localhost:5173.

## Data

All requirements come from official university pages and admission regulations. They change every year, so every
card shows a "last checked" date and links to the official source. Always confirm on the official page before applying.

## Automatic checks (GitHub Actions)

- **Data check** (`scripts/check-data.js`): runs on every push. On `main` it runs before publishing, so broken data
  never reaches the live site. It also warns about deadlines that have passed and data not checked for a year.
- **Link check** (`.github/workflows/check-links.yml`): every Monday it tests all official links in the data and opens a
  "Broken links" issue if some fail. It closes the issue once they work again. Start it by hand from the Actions tab.
- `main` is protected against force-pushes and deletion.
