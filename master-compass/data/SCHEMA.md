# Master Compass – programme data schema

One JavaScript file per university in `data/`. Each file appends programmes like this:

```js
/* <University name>. Checked YYYY-MM-DD. */
(function () {
  const base = { /* shared fields */ };
  window.PROGRAMS = (window.PROGRAMS || []).concat([
    { ...base, id: "...", /* programme fields */ },
  ]);
})();
```

`data/_meta.js` sets `window.PROGRAMS_META = { lastUpdated, cycle }` and loads first.
Target cycle: **winter semester 2027/28** (apply in spring/summer 2027). Today is 2026-11-17.

The UI is in English. Write all text in plain English, with short, factual sentences.
Use straight quotes in JS strings and escape apostrophes properly.

## Programme object

| Key | Type | Meaning |
|---|---|---|
| `id` | string | Unique, kebab-case, prefixed with the uni code (`gu-`, `uzk-`, `tum-`, `lmu-`, `fu-`, `uma-`, `rwth-`, `ude-`, `hsrw-`, `htw-`, `hwr-`, `esb-` …) |
| `university` | string | e.g. "University of Cologne" |
| `institutionType` | `"university"` \| `"applied"` | Optional, default `"university"`. `"applied"` = university of applied sciences (Hochschule / FH / TH) |
| `private` | bool | Optional, default `false`. `true` for state-recognised private schools (WHU, Frankfurt School, HHL, ESMT …). Hidden in the UI unless the user includes private schools |
| `city` | string | Campus city, e.g. "Cologne", "Munich", "Heilbronn", "Duisburg", "Essen" |
| `state` | string | German state |
| `name` | string | Programme name (English if one exists, German in brackets if helpful) |
| `degree` | string | "M.Sc.", "M.A." … |
| `fields` | string[] | Any of: `management`, `finance`, `marketing`, `accounting`, `supply-chain`, `economics`, `analytics`, `information-systems`, `health`, `sustainability`, `entrepreneurship` |
| `ects` | number | Total programme ECTS |
| `semesters` | number | Standard duration |
| `intake` | string | "Winter only", "Winter & summer", "Fall only" … |
| `languageKey` | `"English"` \| `"German/English"` \| `"German"` | Used by the language filter |
| `language` | string | Human description, e.g. "English (some electives in German)" |
| `notice` | `{type: "warning"\|"info", text}` | Optional banner (programme closing, intake suspended, pages under revision…) |
| `bachelorFields` | object | See below |
| `ectsRules` | array | See below. `[]` if the programme has no fixed subject minimums |
| `ectsNote` | string | Optional extra explanation of subject requirements |
| `partialMinPct` / `partialMinEcts` | number | Applying before graduating: minimum share (%) or absolute ECTS completed at application. Omit if not stated |
| `grade` | object | `{ min: number\|null, selection: string, historicalCutoff?: number, historicalNote?: string }`. `min` = hard minimum on the German scale (1.0 best). `selection` = how applicants are ranked |
| `bonusRules` | array | Optional. Selection points that are not requirements: `[{ label, points, conds: [conditions] }]` |
| `test` | object | `{ status: "none"\|"optional"\|"required"\|"conditional", accepted: ["GMAT","GRE","GMAT Focus","GTEBS"...], note }` |
| `english` | object | `{ cefr: "B2"\|"C1"\|…\|"none"\|"English proof", ielts: number\|null, toefl: number\|null, englishMedium: "yes"\|"no"\|"conditional", note }`. `englishMedium` = is an English-taught bachelor from Turkey accepted as proof? `"no"` if the waiver is limited to native-English countries |
| `german` | object \| null | `null` if no German needed for admission, else `{ cefr: "B2"\|"C1"\|"C2", note }` (DSH-2 / TestDaF 4×4 ≈ C1, DSH-3 ≈ C2) |
| `extraLanguage` | string | Optional (e.g. "A1 German by end of semester 2") |
| `application` | object | `{ route, vpd: bool, vpdWeeks?: number, opens?: "YYYY-MM-DD", opensApprox?: bool, deadline: "YYYY-MM-DD", note? }`. `deadline` = deadline for **non-EU applicants** for the winter 2027/28 intake. `vpd: true` if a uni-assist VPD must be obtained before applying |
| `fees` | object | `{ tuitionNonEU: number (EUR per semester, 0 if free), tuitionAll?: number, semester: string, tuitionNote?: string, other?: string }`. `tuitionAll` = tuition per semester that **everyone** pays, EU citizens included (private schools). If a school states a total programme fee, divide it by the number of semesters and give the total in `tuitionNote` |
| `places` | number | Optional, approx. study places |
| `interview` | bool | Interview part of selection |
| `documents` | string[] | Required documents |
| `sources` | `[{label, url}]` | Official pages used (always at least one) |
| `lastChecked` | "YYYY-MM-DD" | Date verified |
| `caveats` | string[] | Optional. Facts that could not be verified or that conflict between official pages. Shown to users as "Check before applying" |

### `bachelorFields`

`{ standard: [...], relatedAllowed: bool, note }`, where `standard` lists the applicant fields that are a normal route in: `business`, `economics`, `finance`, `quantitative` (math, statistics, engineering, CS, natural sciences), `social` (other social sciences), `other`.
`relatedAllowed: false` means other fields are rejected outright.

### `ectsRules` (subject requirements)

A list of **alternatives**. The applicant qualifies if every condition of at least one alternative is met.

Each condition is one of:
- `{ cats: [...], min: N, label }`: the sum of these categories must be ≥ N
- `{ cats: [...], minPctOfTotal: P, label }`: the sum must be ≥ P % of the applicant's total bachelor ECTS
- `{ grade: G, label }`: bachelor grade (German scale) must be ≤ G

ECTS categories the applicant enters:

| Category | Meaning |
|---|---|
| `business` | Business administration (BWL), including accounting/finance courses |
| `economics` | Economics (VWL): micro, macro, etc. |
| `math` | Mathematics |
| `statistics` | Statistics, econometrics, empirical/quantitative methods |
| `informatics` | Informatics, computer science, information systems, programming |
| `accounting` | Accounting, finance & tax courses (a **subset** of `business`; never sum it with `business`) |
| `engineering` | Engineering and natural sciences |

If a requirement cannot be expressed (e.g. "≥9 ECTS operations research", "thesis ≥15 pages"), put it in `ectsNote` or `bachelorFields.note`.
