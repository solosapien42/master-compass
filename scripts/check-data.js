#!/usr/bin/env node
/*
 * Checks the programme data in master-compass/data before the site is published.
 * Run: node scripts/check-data.js
 * Errors (broken data) make it exit with code 1; warnings (e.g. a deadline that has
 * passed) are only printed. See master-compass/data/SCHEMA.md for the format.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = path.join(__dirname, "..", "master-compass");
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const FIELDS = ["management", "finance", "marketing", "accounting", "supply-chain", "economics", "analytics", "information-systems", "health", "sustainability", "entrepreneurship"];
const APPLICANT_FIELDS = ["business", "economics", "finance", "quantitative", "social", "other"];
const CATS = ["business", "economics", "math", "statistics", "informatics", "accounting", "engineering"];
const LANG_KEYS = ["English", "German/English", "German"];
const CEFR = ["none", "A1", "A2", "B1", "B2", "C1", "C2", "English proof"];
const TEST_STATUS = ["none", "optional", "required", "conditional"];
const MEDIUM = ["yes", "no", "conditional"];

const isStr = (v) => typeof v === "string" && v.trim() !== "";
const isNum = (v) => typeof v === "number" && Number.isFinite(v);
function isDate(s) {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}
const todayStr = new Date().toISOString().slice(0, 10);
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);

// ---------- 1. Load the data files in the same order as index.html ----------
const html = fs.readFileSync(path.join(SITE, "index.html"), "utf8");
const listed = [...html.matchAll(/<script src="(data\/[^"]+\.js)"><\/script>/g)].map((m) => m[1]);
const onDisk = fs.readdirSync(path.join(SITE, "data")).filter((f) => f.endsWith(".js")).map((f) => "data/" + f);
for (const f of onDisk) if (!listed.includes(f)) err(f, "the file exists but index.html does not load it");
for (const f of listed) if (!onDisk.includes(f)) err(f, "index.html loads it but the file is missing");

const ctx = vm.createContext({});
ctx.window = ctx; // the data files write to window.PROGRAMS
for (const f of listed.filter((x) => onDisk.includes(x))) {
  try {
    vm.runInContext(fs.readFileSync(path.join(SITE, f), "utf8"), ctx, { filename: f });
  } catch (e) {
    err(f, `the file does not run: ${e.message}`);
  }
}
const programs = Array.isArray(ctx.PROGRAMS) ? ctx.PROGRAMS : [];
const meta = ctx.PROGRAMS_META || {};
if (!programs.length) err("data", "no programmes were loaded");
if (!isDate(meta.lastUpdated)) err("data/_meta.js", `lastUpdated "${meta.lastUpdated}" is not a valid YYYY-MM-DD date`);
if (!isStr(meta.cycle)) err("data/_meta.js", "cycle is missing");

// ---------- 2. Check each programme ----------
function checkCond(where, c) {
  if (!c || typeof c !== "object") return err(where, "a condition is not an object");
  if (c.grade !== undefined) {
    if (!isNum(c.grade) || c.grade < 1 || c.grade > 4) err(where, `grade condition ${c.grade} must be between 1.0 and 4.0`);
    return;
  }
  if (!Array.isArray(c.cats) || !c.cats.length) return err(where, "a condition has no cats");
  for (const cat of c.cats) if (!CATS.includes(cat)) err(where, `unknown ECTS category "${cat}"`);
  if (c.cats.includes("accounting") && c.cats.includes("business")) err(where, "accounting is part of business; never sum the two");
  if (c.min === undefined && c.minPctOfTotal === undefined) err(where, "a condition needs min or minPctOfTotal");
  if (c.min !== undefined && (!isNum(c.min) || c.min <= 0)) err(where, `min ${c.min} must be a positive number`);
  if (c.minPctOfTotal !== undefined && (!isNum(c.minPctOfTotal) || c.minPctOfTotal <= 0 || c.minPctOfTotal > 100)) err(where, `minPctOfTotal ${c.minPctOfTotal} must be 1–100`);
  if (!isStr(c.label)) err(where, "a condition has no label");
}

function checkWindow(where, w, isEu) {
  if (w.deadline !== undefined && !isDate(w.deadline)) err(where, `deadline "${w.deadline}" is not a valid date`);
  if (!isEu && w.deadline === undefined) err(where, "application.deadline is missing");
  if (w.opens != null && !isDate(w.opens)) err(where, `opens "${w.opens}" is not a valid date`);
  if (isDate(w.opens) && isDate(w.deadline) && w.opens > w.deadline) err(where, `opens (${w.opens}) is after the deadline (${w.deadline})`);
  if (isDate(w.deadline) && w.deadline < todayStr) warn(where, `the deadline ${w.deadline} has passed; update it for the next intake`);
}

const ids = new Set();
for (const p of programs) {
  const id = isStr(p && p.id) ? p.id : "(programme without id)";
  if (!isStr(p && p.id)) { err(id, "id is missing"); continue; }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id)) err(id, "id must be lowercase kebab-case");
  if (ids.has(p.id)) err(id, "the same id is used twice");
  ids.add(p.id);

  for (const k of ["university", "city", "state", "name", "degree", "language", "intake"]) if (!isStr(p[k])) err(id, `${k} is missing`);
  if (!LANG_KEYS.includes(p.languageKey)) err(id, `languageKey "${p.languageKey}" must be one of ${LANG_KEYS.join(", ")}`);
  if (p.institutionType !== undefined && !["university", "applied"].includes(p.institutionType)) err(id, `institutionType "${p.institutionType}" is unknown`);
  if (p.private !== undefined && typeof p.private !== "boolean") err(id, "private must be true or false");
  if (!Array.isArray(p.fields) || !p.fields.length) err(id, "fields is empty");
  else for (const f of p.fields) if (!FIELDS.includes(f)) err(id, `unknown field "${f}"`);
  if (!isNum(p.ects) || p.ects <= 0) err(id, "ects must be a positive number");
  if (!isNum(p.semesters) || p.semesters <= 0) err(id, "semesters must be a positive number");
  if (p.notice !== undefined && (!["warning", "info"].includes(p.notice && p.notice.type) || !isStr(p.notice.text))) err(id, "notice needs type (warning/info) and text");

  const bf = p.bachelorFields;
  if (!bf || !Array.isArray(bf.standard)) err(id, "bachelorFields.standard is missing");
  else for (const f of bf.standard) if (!APPLICANT_FIELDS.includes(f)) err(id, `unknown bachelor field "${f}"`);

  if (!Array.isArray(p.ectsRules)) err(id, "ectsRules must be a list ([] if none)");
  else p.ectsRules.forEach((alt, i) => {
    if (!Array.isArray(alt) || !alt.length) return err(id, `ectsRules alternative ${i + 1} must be a non-empty list`);
    alt.forEach((c) => checkCond(`${id} (ectsRules)`, c));
  });
  if (p.bonusRules !== undefined) {
    if (!Array.isArray(p.bonusRules)) err(id, "bonusRules must be a list");
    else p.bonusRules.forEach((b) => {
      if (!isStr(b.label) || !isNum(b.points) || !Array.isArray(b.conds)) return err(id, "each bonus rule needs label, points and conds");
      b.conds.forEach((c) => checkCond(`${id} (bonusRules)`, c));
    });
  }
  for (const k of ["partialMinPct", "partialMinEcts"]) if (p[k] !== undefined && (!isNum(p[k]) || p[k] <= 0)) err(id, `${k} must be a positive number`);
  if (isNum(p.partialMinPct) && p.partialMinPct > 100) err(id, "partialMinPct can't be over 100");

  const g = p.grade;
  if (!g || typeof g !== "object") err(id, "grade is missing");
  else {
    if (g.min !== null && (!isNum(g.min) || g.min < 1 || g.min > 4)) err(id, `grade.min ${g.min} must be null or between 1.0 and 4.0`);
    if (!isStr(g.selection)) err(id, "grade.selection is missing");
    if (g.historicalCutoff !== undefined && (!isNum(g.historicalCutoff) || g.historicalCutoff < 1 || g.historicalCutoff > 4)) err(id, "grade.historicalCutoff must be between 1.0 and 4.0");
  }

  const t = p.test;
  if (!t || !TEST_STATUS.includes(t.status)) err(id, `test.status must be one of ${TEST_STATUS.join(", ")}`);
  else if (t.status !== "none" && (!Array.isArray(t.accepted) || !t.accepted.length)) err(id, "test.accepted is empty although a test is optional or required");

  const en = p.english;
  if (!en || !CEFR.includes(en.cefr)) err(id, `english.cefr must be one of ${CEFR.join(", ")}`);
  else {
    if (en.ielts != null && (!isNum(en.ielts) || en.ielts < 0 || en.ielts > 9 || !Number.isInteger(en.ielts * 2))) err(id, `english.ielts ${en.ielts} must be 0–9 in steps of 0.5`);
    if (en.toefl != null && (!isNum(en.toefl) || en.toefl < 0 || en.toefl > 120 || !Number.isInteger(en.toefl))) err(id, `english.toefl ${en.toefl} must be a whole number 0–120`);
    if (en.cefr !== "none" && !MEDIUM.includes(en.englishMedium)) err(id, `english.englishMedium must be one of ${MEDIUM.join(", ")}`);
  }
  if (p.german !== null && p.german !== undefined && !CEFR.includes(p.german.cefr)) err(id, `german.cefr "${p.german && p.german.cefr}" is unknown`);

  const a = p.application;
  if (!a || typeof a !== "object") err(id, "application is missing");
  else {
    if (typeof a.vpd !== "boolean") err(id, "application.vpd must be true or false");
    if (!isStr(a.route)) err(id, "application.route is missing");
    checkWindow(id, a, false);
    if (a.eu != null) checkWindow(`${id} (EU window)`, a.eu, true);
  }

  const fe = p.fees;
  if (!fe || typeof fe !== "object") err(id, "fees is missing");
  else {
    if (!isNum(fe.tuitionNonEU) || fe.tuitionNonEU < 0) err(id, "fees.tuitionNonEU must be 0 or more");
    if (fe.tuitionAll !== undefined && (!isNum(fe.tuitionAll) || fe.tuitionAll < 0)) err(id, "fees.tuitionAll must be 0 or more");
    if (!isStr(fe.semester)) err(id, "fees.semester is missing");
  }

  if (!Array.isArray(p.sources) || !p.sources.length) err(id, "sources is empty (at least one official page)");
  else for (const s of p.sources) {
    if (!s || !isStr(s.label)) err(id, "a source has no label");
    if (!s || !/^https?:\/\/[^\s]+$/.test(s.url || "")) err(id, `source URL "${s && s.url}" is not a valid link`);
  }
  if (!isDate(p.lastChecked)) err(id, `lastChecked "${p.lastChecked}" is not a valid date`);
  else if (p.lastChecked > todayStr) warn(id, `lastChecked ${p.lastChecked} is in the future`);
  else if (daysBetween(p.lastChecked, todayStr) > 365) warn(id, `last checked ${p.lastChecked}, over a year ago`);
  if (p.caveats !== undefined && (!Array.isArray(p.caveats) || !p.caveats.every(isStr))) err(id, "caveats must be a list of texts");

  // Text that leaked from code into what users read.
  const text = JSON.stringify(p);
  if (/\b(undefined|NaN)\b/.test(text)) err(id, 'the text contains "undefined" or "NaN"');
}

// ---------- 3. Report ----------
const lines = [];
lines.push(`Checked ${programs.length} programmes from ${listed.length - 1} data files.`);
lines.push(errors.length ? `\n${errors.length} error(s):` : "\nNo errors.");
for (const e of errors) lines.push(`  ✗ ${e}`);
lines.push(warnings.length ? `\n${warnings.length} warning(s):` : "\nNo warnings.");
for (const w of warnings) lines.push(`  ! ${w}`);
console.log(lines.join("\n"));

if (process.env.GITHUB_STEP_SUMMARY) {
  const md = [
    `### Data check: ${errors.length ? `❌ ${errors.length} error(s)` : "✅ no errors"}, ${warnings.length} warning(s)`,
    `${programs.length} programmes from ${listed.length - 1} data files.`,
    ...(errors.length ? ["", "**Errors** (the site is not published until these are fixed):", ...errors.map((e) => `- ${e}`)] : []),
    ...(warnings.length ? ["", "**Warnings:**", ...warnings.map((w) => `- ${w}`)] : []),
  ].join("\n");
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + "\n");
}
process.exit(errors.length ? 1 : 0);
