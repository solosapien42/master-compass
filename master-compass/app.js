(function () {
  "use strict";

  const PROGRAMS = window.PROGRAMS || [];
  const META = window.PROGRAMS_META || {};
  const STORE_KEY = "master-compass-v1";

  const FIELD_LABELS = {
    management: "Management",
    finance: "Finance",
    marketing: "Marketing",
    accounting: "Accounting & Tax",
    "supply-chain": "Supply Chain",
    economics: "Economics",
    analytics: "Analytics",
    "information-systems": "Information Systems",
    health: "Health",
    sustainability: "Sustainability",
    entrepreneurship: "Entrepreneurship & Innovation",
  };
  const CAT_LABELS = {
    business: "Business admin.",
    economics: "Economics",
    math: "Mathematics",
    statistics: "Statistics",
    informatics: "Informatics",
    accounting: "Accounting / finance / tax",
    engineering: "Engineering / natural sciences",
  };
  const CEFR = ["none", "A1", "A2", "B1", "B2", "C1", "C2"];
  const STATUS = {
    eligible: { label: "You meet the requirements", tab: "Eligible", icon: "✓", rank: 0 },
    action: { label: "Almost: action needed", tab: "Almost there", icon: "!", rank: 1 },
    incomplete: { label: "Complete your profile", tab: "Profile incomplete", icon: "…", rank: 2 },
    no: { label: "Not eligible yet", tab: "Not eligible yet", icon: "✕", rank: 3 },
  };

  const DEFAULT_PROFILE = {
    field: "business",
    gradeSource: "calc",
    vpdGrade: "",
    gradeScale: "tr4",
    grade: "",
    gradeMin: "2.00",
    totalEcts: "240",
    finished: "no",
    completedEcts: "",
    "ects.business": "",
    "ects.economics": "",
    "ects.math": "",
    "ects.statistics": "",
    "ects.informatics": "",
    "ects.accounting": "",
    "ects.engineering": "",
    citizenship: "nonEU",
    englishType: "none",
    englishScore: "",
    german: "none",
    testType: "none",
    testScore: "",
  };
  const DEFAULT_FILTERS = { search: "", city: "", uni: "", lang: "", tuition: "", sort: "deadline", fields: [], notest: false, nogerman: false, private: false, inst: "", status: "" };
  const STATUS_ORDER = ["eligible", "action", "incomplete", "no"];
  const TAB_HINTS = {
    eligible: "Programmes where you meet every requirement we can check. Open a card for documents and deadlines.",
    action: "You meet the subject requirements, but something is still missing, e.g. a language certificate or a credit count to confirm.",
    incomplete: "Fill in the missing parts of your profile to see whether you qualify.",
    no: "A hard requirement is not met yet. Each card shows what is missing.",
    saved: "Programmes you saved, sorted by deadline. Filters don't apply here.",
  };

  // ---------- storage (best effort) ----------
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        const filters = { ...DEFAULT_FILTERS, ...d.filters };
        if (!["deadline", "opens", "tuition", "name"].includes(filters.sort)) filters.sort = "deadline";
        if (filters.status === "saved") filters.status = ""; // always open on a results tab
        return { profile: { ...DEFAULT_PROFILE, ...d.profile }, filters, saved: Array.isArray(d.saved) ? d.saved : [] };
      }
    } catch (e) { /* ignore */ }
    return { profile: { ...DEFAULT_PROFILE }, filters: { ...DEFAULT_FILTERS }, saved: [] };
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  const state = load();

  // ---------- helpers ----------
  const $ = (s, el = document) => el.querySelector(s);
  const num = (v) => {
    const n = parseFloat(String(v).replace(",", "."));
    return Number.isFinite(n) ? n : null;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const fmtDate = (s) => parseDate(s).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const daysUntil = (s) => Math.round((parseDate(s) - today()) / 86400000);
  const pad = (n) => String(n).padStart(2, "0");
  const addDays = (s, n) => {
    const d = parseDate(s);
    d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  function ectsOf(cat) { return num(state.profile["ects." + cat]) || 0; }
  function hasAnyEcts() { return Object.keys(CAT_LABELS).some((c) => ectsOf(c) > 0); }

  /** German grade via the modified Bavarian formula. Returns null if not computable. */
  function germanGrade(p) {
    if (p.gradeSource === "vpd") {
      const v = num(p.vpdGrade);
      return v !== null && v >= 1 && v <= 4 ? v : null;
    }
    const g = num(p.grade);
    if (g === null) return null;
    if (p.gradeScale === "de") return g >= 1 && g <= 5 ? g : null;
    if (g < 0 || g > (p.gradeScale === "tr4" ? 4 : 100)) return null;
    const max = p.gradeScale === "tr4" ? 4 : 100;
    const min = num(p.gradeMin);
    if (min === null || min >= max) return null;
    const de = 1 + (3 * (max - g)) / (max - min);
    return Math.max(1, de);
  }
  /** Tells the user which grade input is missing or invalid. */
  function gradeMissingMsg() {
    const p = state.profile;
    if (p.gradeSource === "vpd") return "Enter the grade from your uni-assist VPD (1.0–4.0).";
    const g = num(p.grade);
    const max = p.gradeScale === "tr4" ? 4 : p.gradeScale === "100" ? 100 : 5;
    if (g === null) return "Enter your GPA to see your German grade.";
    if (p.gradeScale === "de") return "Enter a German grade between 1.0 and 5.0.";
    if (g < 0 || g > max) return `Enter a GPA between 0 and ${max}.`;
    return "Enter the minimum grade needed to graduate.";
  }

  // uni-assist style: cut off after the first decimal
  const truncGrade = (g) => Math.floor(g * 10 + 1e-9) / 10;

  /** Tuition per semester that applies to this applicant (EU/EEA citizens pay none). */
  function tuitionFor(p) {
    const f = p.fees || {};
    if (f.tuitionAll) return state.profile.citizenship === "eu" ? f.tuitionAll : Math.max(f.tuitionAll, f.tuitionNonEU || 0);
    if (state.profile.citizenship === "eu") return 0;
    return f.tuitionNonEU || 0;
  }
  /**
   * The application window that applies to this applicant. `application` holds the non-EU dates;
   * an optional `application.eu` overrides them for EU/EEA citizens (opens: null = no opening date known).
   */
  function appFor(p) {
    const a = p.application;
    return state.profile.citizenship === "eu" && a.eu ? { ...a, ...a.eu, isEu: true } : a;
  }
  const fmtEuro = (n) => "€" + Math.round(n).toLocaleString("en-US");
  /** Escaped text that ends with exactly one full stop (data strings may or may not have one). */
  const sentence = (s) => { const t = esc(String(s).trim()); return /[.!?]\)?$/.test(t) ? t : t + "."; };

  /** Evaluate one ECTS/grade condition against the profile. */
  function evalCond(c) {
    if (c.grade != null) {
      const de = germanGrade(state.profile);
      return { ...c, isGrade: true, have: de === null ? "–" : truncGrade(de).toFixed(1), ok: de !== null && truncGrade(de) <= c.grade + 1e-9 };
    }
    const total = num(state.profile.totalEcts) || 0;
    const min = c.minPctOfTotal ? Math.ceil((total * c.minPctOfTotal) / 100) : c.min;
    const have = c.cats.reduce((s, cat) => s + ectsOf(cat), 0);
    return { ...c, min, have, ok: have >= min };
  }
  function condText(c) {
    if (c.isGrade) return `${c.label}: yours ${c.have}${c.ok ? " ✓" : " ✕"}`;
    return `${c.label}: ${c.have}/${c.min}${c.ok ? " ✓" : ` (${c.min - c.have} missing)`}`;
  }

  // ---------- evaluation ----------
  function evaluate(p) {
    const prof = state.profile;
    const checks = [];
    // detail = short text shown on the card; more = extra context shown only in the details view.
    const add = (s, label, detail, more) => checks.push({ s, label, detail, more });

    // 1. Bachelor field
    const bf = p.bachelorFields;
    if (bf.standard.includes(prof.field)) add("ok", "Bachelor field", "Your field is one of the standard routes into this programme.");
    else if (bf.relatedAllowed) add("warn", "Bachelor field", "Not a standard route; the committee decides case by case.", bf.note);
    else add("fail", "Bachelor field", "This programme does not accept your field of study.");

    // 2. Subject-specific ECTS
    if (!p.ectsRules.length) {
      add("info", "Subject ECTS", p.ectsNote || "No fixed subject minimums.");
    } else if (!hasAnyEcts()) {
      add("pending", "Subject ECTS", "Enter your ECTS by subject to check this.", "Required: " + describeRules(p.ectsRules) + ".");
    } else {
      const results = p.ectsRules.map((alt) => alt.map(evalCond));
      const passing = results.find((alt) => alt.every((c) => c.ok));
      const shown = passing || results.reduce((best, alt) => (gap(alt) < gap(best) ? alt : best));
      const detail = shown.map(condText).join(" · ");
      if (passing) add("ok", "Subject ECTS", detail, p.ectsNote);
      else {
        // On the card, list only the conditions that are not met.
        const missing = shown.filter((c) => !c.ok).map(condText).join(" · ");
        add("fail", "Subject ECTS", missing + (results.length > 1 ? " (closest of " + results.length + " options)" : ""), [detail, p.ectsNote].filter(Boolean).join(" "));
      }
    }

    // 3. Bachelor progress (partial degree)
    if (prof.finished !== "yes") {
      const total = num(prof.totalEcts), done = num(prof.completedEcts);
      const rule = p.partialMinEcts ? `${p.partialMinEcts} ECTS` : `${p.partialMinPct}% of your credits`;
      const need = p.partialMinEcts || (total ? Math.ceil((total * p.partialMinPct) / 100) : null);
      if (!rule || (!p.partialMinEcts && !p.partialMinPct)) add("info", "Credits completed", "Check the official page for rules on applying before graduation.");
      else if (!need || done === null) add("pending", "Credits completed", `You can apply before graduating with at least ${rule}. Enter your completed ECTS.`);
      else if (done >= need) add("ok", "Credits completed", `${done}/${total || "?"} ECTS done. ${need} are required when you apply.`);
      else add("warn", "Credits completed", `${done}/${total || "?"} ECTS done. You need ${need} (${rule}) by the time you apply.`);
    }

    // 4. Grade
    const de = germanGrade(prof);
    if (de === null) add("pending", "Grade", gradeMissingMsg(), p.grade.selection);
    else if (de > 4) add("fail", "Grade", `Your grade converts to ${de.toFixed(1)}, which is below passing (4.0).`);
    else {
      // German universities cut the grade after the first decimal (2.46 → 2.4) before comparing.
      const dt = truncGrade(de);
      const g = dt.toFixed(1);
      const m = p.grade.min;
      const minTxt = m == null ? "" : Number.isInteger(Math.round(m * 100) / 10) ? m.toFixed(1) : m.toFixed(2);
      if (m != null && dt > m + 1e-9) add("fail", "Grade", `Your German grade ≈ ${g}. The minimum is ${minTxt}.`);
      else if (p.grade.historicalCutoff && dt > p.grade.historicalCutoff + 1e-9)
        add("warn", "Grade", `Your ${g} is weaker than the lowest admitted grade last time (${p.grade.historicalCutoff.toFixed(1)}).`, `${p.grade.historicalNote} ${p.grade.selection}`);
      else add("info", "Grade", `Your German grade ≈ ${g}. ${p.grade.selection}${p.grade.historicalNote ? " " + p.grade.historicalNote : ""}`);
    }
    if (p.grade.testNeeded && !p.test.accepted.some((a) => prof.testType !== "none" && a.startsWith(prof.testType)))
      add("warn", "Score cut-off", `Last year's cut-off for non-EU applicants could not be reached with the grade alone. Plan for ${p.test.accepted.join(" or ")}.`);

    // 4b. Bonus points in the selection score (not a requirement)
    (p.bonusRules || []).forEach((b) => {
      const conds = b.conds.map(evalCond);
      if (!hasAnyEcts()) add("info", "Selection bonus", `${b.label}: +${b.points} points if you have ${conds.map((c) => `${c.label} ≥${c.min}`).join(", ")}.`);
      else if (conds.every((c) => c.ok)) add("ok", "Selection bonus", `You get +${b.points} points for ${b.label}. ${conds.map(condText).join(" · ")}`);
      else add("info", "Selection bonus", `You miss +${b.points} points for ${b.label}. ${conds.map(condText).join(" · ")}`);
    });

    // 5. English
    const en = p.english;
    const enReq = en.ielts != null || en.toefl != null
      ? `${en.cefr === "English proof" ? "" : en.cefr + ": "}${[en.ielts != null ? "IELTS " + en.ielts.toFixed(1) : "", en.toefl != null ? "TOEFL iBT " + en.toefl : ""].filter(Boolean).join(" / ")}`
      : `${en.cefr} (see the official page for accepted tests)`;
    const score = num(prof.englishScore);
    const range = { ielts: [0, 9], toefl: [0, 120], toeflBand: [1, 6] }[prof.englishType];
    const badScore = range && score !== null && (score < range[0] || score > range[1]);
    if (en.cefr === "none") add("ok", "English", en.note || "No English certificate required for admission.");
    else if (badScore) add("pending", "English", `Enter a valid score (${range[0]}–${range[1]}).`);
    else if (prof.englishType === "toeflBand") {
      // The 2026 TOEFL band scale (1–6) is aligned with CEFR A1–C2.
      const needIdx = CEFR.indexOf(en.cefr);
      if (score === null) add("pending", "English", `Enter your TOEFL band score. Required: ${enReq}.`);
      else if (needIdx < 1) add("info", "English", `TOEFL band ${score}. Check on the official page whether the new band scale is accepted. ${en.note || ""}`);
      else if (Math.floor(score) >= needIdx) add("ok", "English", `TOEFL band ${score} ≈ ${CEFR[Math.min(6, Math.floor(score))]}, which meets ${en.cefr}. Check that the programme already accepts the new band scale.`);
      else add("warn", "English", `TOEFL band ${score} ≈ ${CEFR[Math.max(1, Math.floor(score))]}, below the required ${en.cefr}.`);
    } else if (prof.englishType === "ielts" || prof.englishType === "toefl") {
      const min = prof.englishType === "ielts" ? en.ielts : en.toefl;
      const name = prof.englishType === "ielts" ? "IELTS" : "TOEFL";
      if (min == null) add("info", "English", `The programme page doesn't state a minimum ${name} score. ${en.note || ""}`);
      else if (score === null) add("pending", "English", `Enter your ${name} score. Required: ${enReq}.`);
      else if (score >= min) add("ok", "English", `${name} ${score} meets the requirement (min. ${min}).`);
      else add("warn", "English", `${name} ${score} is below the minimum of ${min}. A retake is needed.`);
    } else if (prof.englishType === "medium") {
      if (en.englishMedium === "yes") add("ok", "English", "An English-taught bachelor is accepted as proof. You need an official confirmation from your university.");
      else if (en.englishMedium === "conditional") add("warn", "English", "An English-taught bachelor counts only under conditions.", en.note);
      else add("warn", "English", `An English-taught bachelor is not accepted as proof here. You need ${enReq}.`, en.note);
    } else add("warn", "English", `Proof needed: ${enReq}.`);

    // 6. German
    if (p.german) {
      const have = CEFR.indexOf(prof.german), need = CEFR.indexOf(p.german.cefr);
      if (have >= need) add("ok", "German", `${p.german.cefr} required. Your level matches.`, p.german.note);
      else add("fail", "German", `${p.german.cefr} certificate required.`, p.german.note);
    } else add("ok", "German", "No German required for admission.");

    // 7. Aptitude test
    const t = p.test;
    const hasTest = prof.testType !== "none";
    const accepted = t.accepted.some((a) => a.startsWith(prof.testType));
    if (t.status === "required") {
      if (hasTest && accepted) add("ok", "GMAT / GRE", `Required, and you have ${prof.testType}. ${t.note}`);
      else add("warn", "GMAT / GRE", `Required: ${t.accepted.join(", ")}.`, t.note);
    } else if (t.status === "optional") {
      if (hasTest && accepted) add("ok", "GMAT / GRE", `Optional. Your ${prof.testType} will count. ${t.note}`);
      else if (hasTest) add("info", "GMAT / GRE", `Optional, but ${prof.testType} is not accepted here (only ${t.accepted.join(", ")}). ${t.note}`);
      else add("info", "GMAT / GRE", `Optional (${t.accepted.join(", ")}). ${t.note}`);
    } else if (t.status === "conditional") {
      add("info", "GMAT / GRE", t.note);
    } else add("ok", "GMAT / GRE", "Not needed.", t.note && !/^GMAT\/GRE not mentioned\.?$/i.test(t.note) ? t.note : "");

    // 8. Tuition
    const fee = tuitionFor(p);
    if (fee > 0) add("info", "Tuition", `${fmtEuro(fee)} per semester${p.fees.tuitionAll ? "" : " for non-EU students"} (about ${fmtEuro(fee * (p.semesters || 4))} in total).`, p.fees.tuitionNote);

    // 9. Deadline
    const a = appFor(p);
    const left = daysUntil(a.deadline);
    if (left < 0) add("fail", "Deadline", `The deadline (${fmtDate(a.deadline)}) has passed for this cycle.`);
    if (a.vpd) {
      const weeks = a.vpdWeeks || 8;
      const vpdBy = addDays(a.deadline, -7 * weeks);
      const vLeft = daysUntil(vpdBy);
      if (left >= 0) {
        if (vLeft < 0) add("warn", "VPD (uni-assist)", `A VPD takes about ${weeks} weeks. The safe date to request it (${fmtDate(vpdBy)}) has passed, so request it immediately.`);
        else add("info", "VPD (uni-assist)", `Request your VPD from uni-assist by ${fmtDate(vpdBy)} (about ${weeks} weeks before the deadline).`);
      }
    }

    const has = (s) => checks.some((c) => c.s === s);
    const status = has("fail") ? "no" : has("pending") ? "incomplete" : has("warn") ? "action" : "eligible";
    return { status, checks };
  }

  function gap(alt) { return alt.reduce((s, c) => s + (c.isGrade ? (c.ok ? 0 : 10) : Math.max(0, c.min - c.have)), 0); }
  function describeCond(c) {
    if (c.grade != null) return `${c.label} (≤ ${c.grade.toFixed(1)})`;
    if (c.minPctOfTotal) return `${c.label} ≥ ${c.minPctOfTotal}% of your total ECTS`;
    return `${c.label} ≥${c.min}`;
  }
  function describeRules(rules) {
    return rules.map((alt) => alt.map(describeCond).join(", ")).join(" OR ");
  }

  // ---------- rendering ----------
  function renderMeta() {
    const unis = new Set(PROGRAMS.map((p) => p.university)).size;
    $("#meta").textContent = `${PROGRAMS.length} programmes at ${unis} schools · ${META.cycle || ""} · updated ${fmtDate(META.lastUpdated || "2026-01-01")}`;
  }

  function renderGradeOut() {
    const el = $("#grade-out");
    const de = germanGrade(state.profile);
    if (state.profile.gradeSource === "vpd") {
      el.classList.add("show");
      el.innerHTML = de === null
        ? "Enter the grade from your VPD (between 1.0 and 4.0)."
        : `Using your uni-assist grade <strong>${de.toFixed(1)}</strong> <span class="muted">(1.0 is best)</span>`;
      return;
    }
    if (de === null) {
      const g = num(state.profile.grade);
      el.classList.toggle("show", g !== null);
      el.textContent = g !== null ? gradeMissingMsg() : "";
      return;
    }
    if (state.profile.gradeScale === "de") { el.classList.add("show"); el.innerHTML = `German grade <strong>${truncGrade(de).toFixed(1)}</strong>`; return; }
    el.classList.add("show");
    el.innerHTML = de > 4
      ? "This grade is below the minimum passing grade."
      : `German grade ≈ <strong>${truncGrade(de).toFixed(1)}</strong><br/><span class="muted">Calculated ${de.toFixed(2)}; universities cut it after the first decimal. 1.0 is best.</span>`;
  }

  function syncFormVisibility() {
    const p = state.profile;
    const vpd = p.gradeSource === "vpd";
    $(".vpd-wrap").hidden = !vpd;
    $(".calc-wrap").hidden = vpd;
    $(".grade-min-wrap").hidden = p.gradeScale === "de";
    const sum = ["business", "economics", "math", "statistics", "informatics", "engineering"].reduce((s, c) => s + ectsOf(c), 0);
    const acc = ectsOf("accounting"), bus = ectsOf("business");
    const total = num(p.totalEcts) || 0;
    const warns = [];
    if (acc > bus) warns.push(`accounting/finance/tax (${acc}) can't be more than business (${bus})`);
    if (total && sum > total) warns.push(`more than your total bachelor ECTS (${total})`);
    $("#ects-total").innerHTML = sum
      ? `Subject credits entered: <strong>${sum}</strong> ECTS${warns.length ? ` <span class="warn-text">· ${esc(warns.join("; "))}</span>` : ""}`
      : "";
    $(".completed-wrap").style.display = p.finished === "yes" ? "none" : "";
    const showEn = p.englishType === "ielts" || p.englishType === "toefl" || p.englishType === "toeflBand";
    $(".english-score-wrap").style.visibility = showEn ? "visible" : "hidden";
    $(".test-score-wrap").style.visibility = p.testType !== "none" ? "visible" : "hidden";
    const gradeInput = $('[data-key="grade"]');
    gradeInput.placeholder = p.gradeScale === "tr4" ? "e.g. 3.20" : p.gradeScale === "100" ? "e.g. 78" : "e.g. 2.3";
  }

  function filtered() {
    const f = state.filters;
    const q = f.search.trim().toLowerCase();
    return PROGRAMS.map((p) => ({ p, ev: evaluate(p) }))
      .filter(({ p, ev }) => {
        if (q && !(p.name + " " + p.university + " " + p.city + " " + p.fields.map((x) => FIELD_LABELS[x]).join(" ")).toLowerCase().includes(q)) return false;
        if (f.city && p.city !== f.city) return false;
        if (f.uni && p.university !== f.uni) return false;
        if (f.lang && p.languageKey !== f.lang) return false;
        if (f.fields.length && !p.fields.some((x) => f.fields.includes(x))) return false;
        if (f.notest && (p.test.status === "required" || p.test.status === "conditional" || p.grade.testNeeded)) return false;
        if (f.nogerman && p.german) return false;
        if (f.tuition !== "" && tuitionFor(p) > Number(f.tuition)) return false;
        if (p.private && !f.private) return false;
        if (f.inst && (p.institutionType || "university") !== f.inst) return false;
        return true;
      })
      .sort((a, b) => {
        // Closed windows go last whatever the sort order: they can't be acted on in this cycle.
        const A = appFor(a.p), B = appFor(b.p);
        const closed = (x) => (daysUntil(x.deadline) < 0 ? 1 : 0);
        if (closed(A) !== closed(B)) return closed(A) - closed(B);
        if (f.sort === "deadline") return A.deadline.localeCompare(B.deadline);
        if (f.sort === "name") return a.p.name.localeCompare(b.p.name);
        if (f.sort === "opens") return (A.opens || A.deadline).localeCompare(B.opens || B.deadline);
        if (f.sort === "tuition") return tuitionFor(a.p) - tuitionFor(b.p) || STATUS[a.ev.status].rank - STATUS[b.ev.status].rank;
        return STATUS[a.ev.status].rank - STATUS[b.ev.status].rank || A.deadline.localeCompare(B.deadline);
      });
  }

  /**
   * "What would unlock the most programmes?" Re-evaluates the filtered programmes with one
   * missing item added (English, German, GMAT) and counts how many would become eligible.
   */
  function unlockHints(all) {
    const prof = state.profile;
    if (!hasAnyEcts() || germanGrade(prof) === null) return [];
    const scenarios = [];
    if (prof.englishType === "none") scenarios.push({ text: "An English certificate (IELTS 7.0)", patch: { englishType: "ielts", englishScore: "7" } });
    if (prof.testType === "none") scenarios.push({ text: "A GMAT score", patch: { testType: "GMAT" } });
    if (CEFR.indexOf(prof.german) < CEFR.indexOf("C1")) scenarios.push({ text: "German C1 (DSH-2 / TestDaF 4×4)", patch: { german: "C1" } });
    const open = all.filter(({ ev }) => ev.status !== "eligible");
    const saved = state.profile;
    const res = scenarios.map((s) => {
      state.profile = { ...saved, ...s.patch };
      const n = open.filter(({ p }) => evaluate(p).status === "eligible").length;
      state.profile = saved;
      return { text: s.text, n };
    });
    return res.filter((r) => r.n > 0).sort((a, b) => b.n - a.n).slice(0, 2);
  }

  function renderList() {
    const all = filtered();
    const hints = unlockHints(all);
    $("#unlock").innerHTML = hints.length
      ? `<strong>Biggest next step:</strong> ` + hints.map((h) => `${esc(h.text)} would make <strong>${h.n}</strong> more programme${h.n === 1 ? "" : "s"} eligible`).join(". ") + "."
      : "";
    const counts = { eligible: 0, action: 0, incomplete: 0, no: 0 };
    all.forEach(({ ev }) => counts[ev.status]++);

    // Shown tab: the user's choice if it has programmes, otherwise the first non-empty one.
    // The user's choice is kept, so it comes back when filters change again.
    // The shortlist ignores filters: it always shows every saved programme.
    const savedIds = new Set(state.saved);
    const saved = PROGRAMS.filter((p) => savedIds.has(p.id)).map((p) => ({ p, ev: evaluate(p) }))
      .sort((a, b) => appFor(a.p).deadline.localeCompare(appFor(b.p).deadline));
    counts.saved = saved.length;

    const chosen = state.filters.status;
    const sel = chosen && counts[chosen] ? chosen : STATUS_ORDER.find((k) => counts[k]) || null;
    renderList.shown = sel;

    const tab = (k, label) => `<button type="button" role="tab" id="tab-${k}" aria-controls="list" class="status-tab ${k}" data-status="${k}" aria-selected="${k === sel}" tabindex="${k === sel ? 0 : -1}" ${counts[k] ? "" : "disabled"}>${esc(label)}<span class="st-count">${counts[k]}</span></button>`;
    $("#status-tabs").innerHTML =
      STATUS_ORDER.filter((k) => k !== "incomplete" || counts.incomplete).map((k) => tab(k, STATUS[k].tab)).join("") +
      `<span class="tab-sep" aria-hidden="true"></span>` + tab("saved", "★ Shortlist");
    $("#tab-hint").textContent = sel ? TAB_HINTS[sel] : "";
    if (sel) $("#list").setAttribute("aria-labelledby", "tab-" + sel);

    const items = sel === "saved" ? saved : all.filter(({ ev }) => ev.status === sel);
    if (!items.length) {
      $("#list").innerHTML = `<div class="empty">No programmes match these filters.</div>`;
      return;
    }
    $("#list").innerHTML = items.map(({ p, ev }) => card(p, ev, sel === "saved")).join("");
  }

  function card(p, ev, showStatus) {
    const isSaved = state.saved.includes(p.id);
    const a = appFor(p);
    // Window text for the details view: "approx. 1 May 2027 – 15 Jul 2027".
    const winText = (w) => `${w.opens ? `${w.opensApprox ? "approx. " : ""}${fmtDate(w.opens)} – ` : "until "}${fmtDate(w.deadline)}`;
    const otherWin = p.application.eu
      ? (a.isEu ? `Non-EU applicants: ${winText(p.application)}.` : `EU/EEA citizens: ${winText({ ...p.application, ...p.application.eu })}.`)
      : "";
    const left = daysUntil(a.deadline);
    // Application window: "1 Apr – 15 May 2027" plus where we are in it today.
    const toOpen = a.opens ? daysUntil(a.opens) : null;
    const soon = left >= 0 && left <= 45 && (toOpen === null || toOpen <= 0);
    const winStatus =
      left < 0 ? "Closed" :
      toOpen !== null && toOpen > 0 ? `Opens in ${toOpen} days${a.opensApprox ? " (approx.)" : ""}` :
      toOpen !== null ? `Open now · closes in ${left} days` :
      `Closes in ${left} days`;
    const sameYear = a.opens && a.opens.slice(0, 4) === a.deadline.slice(0, 4);
    const opensTxt = a.opens
      ? (a.opensApprox ? "~" : "") + (sameYear ? parseDate(a.opens).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : fmtDate(a.opens))
      : "";
    const fee = tuitionFor(p);
    const icons = { ok: "✓", warn: "!", fail: "✕", info: "i", pending: "…" };
    const lang = p.languageKey === "German/English" ? "German & English" : p.languageKey;
    const meta = [p.private ? "Private" : "", p.institutionType === "applied" ? "Applied sciences" : "", p.degree, lang, p.intake, fee > 0 ? `${fmtEuro(fee)} per semester` : "No tuition"].filter(Boolean);
    // On the card, show only what still needs attention; everything else sits under "details".
    // Missing profile inputs are the same on every card, so they collapse into one short line.
    const todo = ev.checks.filter((c) => c.s === "fail" || c.s === "warn");
    const pending = ev.checks.filter((c) => c.s === "pending");
    if (pending.length) todo.push({ s: "pending", label: "Add to your profile:", detail: pending.map((c) => c.label).join(", ") });
    const details = (c) => `${c.detail}${c.more ? " " + c.more : ""}`;

    return `
<article class="card">
  <div class="card-head">
    <div class="card-title">
      ${showStatus ? `<div class="card-status ${ev.status}">${esc(STATUS[ev.status].label)}</div>` : ""}
      <div class="uni">${esc(p.university)} · ${esc(p.city)}</div>
      <h3>${esc(p.name)}</h3>
      <div class="meta-line">${meta.map(esc).join(" · ")}</div>
    </div>
    <div class="deadline${soon ? " soon" : ""}">
      <button type="button" class="save-btn" data-id="${esc(p.id)}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove from" : "Add to"} shortlist: ${esc(p.name)}">${isSaved ? "★ Saved" : "☆ Save"}</button>
      <span>${a.opens ? "Application" : "Deadline"}${a.isEu ? " · EU/EEA" : ""}</span>
      <strong>${a.opens ? `${esc(opensTxt)} – ` : ""}${fmtDate(a.deadline)}</strong>
      <small>${esc(winStatus)}</small>
    </div>
  </div>
  ${p.notice && p.notice.type === "warning" ? `<p class="notice"><strong>Note:</strong> ${esc(p.notice.text)}</p>` : ""}
  ${todo.length
    ? `<div class="todo"><ul>${todo.map((c) => `<li class="${c.s}"><strong>${esc(c.label)}</strong>${esc(c.detail)}</li>`).join("")}</ul></div>`
    : `<p class="allset">✓ You meet every requirement we can check.</p>`}

  <details class="more">
    <summary>Details and how to apply</summary>
    <div class="more-body">
    <h4>Your requirements check</h4>
    <ul class="checks">
      ${ev.checks.map((c) => `<li class="check ${c.s}"><span class="ic" aria-hidden="true">${icons[c.s]}</span><span><span class="lbl">${esc(c.label)}:</span> ${esc(details(c))}</span></li>`).join("")}
    </ul>
    ${p.notice && p.notice.type !== "warning" ? `<p class="notice">${esc(p.notice.text)}</p>` : ""}
    <div class="more-grid">
      <div>
        <h4>How to apply</h4>
        <p>${sentence(a.route)}</p>
        ${a.note ? `<p>${sentence(a.note)}</p>` : ""}
        <p><strong>Your window${a.isEu ? " (EU/EEA citizens)" : p.application.eu ? " (non-EU)" : ""}:</strong> ${winText(a)}</p>
        ${otherWin ? `<p class="muted">${esc(otherWin)}</p>` : ""}
        <h4 style="margin-top:14px">Fees</h4>
        <p>${p.fees.tuitionAll
          ? `Tuition (everyone): ${fmtEuro(p.fees.tuitionAll)} per semester.`
          : `Tuition (non-EU): ${p.fees.tuitionNonEU ? fmtEuro(p.fees.tuitionNonEU) + " per semester" : "none"}.`} ${sentence(p.fees.semester)}</p>
        ${p.fees.tuitionNote ? `<p>${sentence(p.fees.tuitionNote)}</p>` : ""}
        ${p.fees.other ? `<p>${sentence(p.fees.other)}</p>` : ""}
      </div>
      <div>
        <h4>Documents</h4>
        <ul>${p.documents.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Requirements in detail</h4>
        <p><strong>Bachelor:</strong> ${esc(p.bachelorFields.note)}</p>
        ${p.ectsRules.length ? `<p><strong>Subject ECTS:</strong> ${esc(describeRules(p.ectsRules))}</p>` : ""}
        <p><strong>Selection:</strong> ${esc(p.grade.selection)}</p>
        <p><strong>English:</strong> ${esc(p.english.note)}</p>
        ${p.extraLanguage ? `<p><strong>Other languages:</strong> ${esc(p.extraLanguage)}</p>` : ""}
      </div>
    </div>
    ${p.caveats && p.caveats.length ? `<div class="caveats"><h4>Check before applying</h4><ul>${p.caveats.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>` : ""}
    <div class="sources">
      Official sources: ${p.sources.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join(" · ")}
      · Last checked ${fmtDate(p.lastChecked)}
    </div>
    </div>
  </details>
</article>`;
  }

  /** One-line summaries shown on the collapsed profile sections. */
  function renderSummaries() {
    const p = state.profile;
    const fieldLabel = $('[data-key="field"]').selectedOptions[0]?.textContent || "";
    const set = (id, text, empty) => {
      const el = $("#sum-" + id);
      el.textContent = text || empty;
      el.classList.toggle("empty", !text);
    };
    const total = num(p.totalEcts);
    set("degree", [fieldLabel, total ? `${total} ECTS` : "", p.finished === "yes" ? "graduated" : "studying"].filter(Boolean).join(" · "), "");
    const de = germanGrade(p);
    set("grade", de !== null && de <= 4 ? `${truncGrade(de).toFixed(1)}${p.gradeSource === "vpd" ? " (from your VPD)" : " (estimated)"}` : "", "Not added yet");
    const parts = [["business", "Business"], ["economics", "Econ"], ["math", "Math"], ["statistics", "Stats"], ["informatics", "IT"]]
      .filter(([c]) => ectsOf(c) > 0).map(([c, l]) => `${l} ${ectsOf(c)}`);
    set("credits", parts.join(" · "), "Not added yet");
    const enLabel = { none: "No English certificate", ielts: "IELTS", toefl: "TOEFL", toeflBand: "TOEFL band", medium: "English-taught bachelor" }[p.englishType];
    const en = ["ielts", "toefl", "toeflBand"].includes(p.englishType) && p.englishScore ? `${enLabel} ${p.englishScore}` : enLabel;
    set("lang", [en, p.german === "none" ? "no German" : `German ${p.german}`, p.testType === "none" ? "" : p.testType].filter(Boolean).join(" · "), "");
  }

  function render() {
    syncFormVisibility();
    renderGradeOut();
    renderSummaries();
    if (initFilters.updateMore) initFilters.updateMore();
    renderList();
    save();
  }

  // ---------- wiring ----------
  function initProfile() {
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.dataset.key;
      el.value = state.profile[key] ?? "";
      el.addEventListener("input", () => {
        state.profile[key] = el.value;
        // A score only makes sense for the test it was entered for.
        const scoreKey = { englishType: "englishScore", testType: "testScore" }[key];
        if (scoreKey) {
          state.profile[scoreKey] = "";
          const s = document.querySelector(`[data-key="${scoreKey}"]`);
          if (s) s.value = "";
        }
        render();
      });
    });
    $("#reset-profile").addEventListener("click", () => {
      if (!window.confirm("Clear your whole profile? Your shortlist stays.")) return;
      state.profile = { ...DEFAULT_PROFILE };
      document.querySelectorAll("[data-key]").forEach((el) => (el.value = state.profile[el.dataset.key] ?? ""));
      render();
    });
  }

  function initFilters() {
    const f = state.filters;
    // Field: one select instead of many chips.
    const usedFields = Object.keys(FIELD_LABELS).filter((k) => PROGRAMS.some((p) => p.fields.includes(k)));
    $("#f-field").innerHTML = `<option value="">All fields</option>` +
      usedFields.map((k) => `<option value="${k}">${esc(FIELD_LABELS[k])}</option>`).join("");
    $("#f-field").value = f.fields[0] || "";
    $("#f-field").addEventListener("input", () => { f.fields = $("#f-field").value ? [$("#f-field").value] : []; render(); });

    // Location: one select, grouped by city. Pick a whole city or one university in it.
    // Option value = "city|university" (university empty = whole city).
    const cities = [...new Set(PROGRAMS.map((p) => p.city))].sort();
    $("#f-location").innerHTML = `<option value="|">All cities &amp; universities</option>` +
      cities.map((c) => {
        const unis = [...new Set(PROGRAMS.filter((p) => p.city === c).map((p) => p.university))].sort();
        const whole = unis.length > 1 ? `<option value="${esc(c)}|">All of ${esc(c)}</option>` : "";
        return `<optgroup label="${esc(c)}">${whole}${unis.map((u) => `<option value="${esc(c)}|${esc(u)}">${esc(u)}</option>`).join("")}</optgroup>`;
      }).join("");
    const locValue = () => {
      // A single-university city has no "All of …" option, so map it to the university.
      const v = `${f.city}|${f.uni}`;
      if ([...$("#f-location").options].some((o) => o.value === v)) return v;
      const o = [...$("#f-location").options].find((x) => x.value.startsWith(f.city + "|") && f.city);
      return o ? o.value : "|";
    };
    $("#f-location").value = locValue();
    $("#f-location").addEventListener("input", () => {
      [f.city, f.uni] = $("#f-location").value.split("|");
      render();
    });

    // Only offer the school-type filter once the data has universities of applied sciences.
    if (!PROGRAMS.some((p) => p.institutionType === "applied")) {
      $("#f-inst").closest("label").hidden = true;
      f.inst = "";
    }

    // "More filters" panel and its active-count badge.
    const moreBtn = $("#f-more-btn");
    moreBtn.addEventListener("click", () => {
      const open = $("#f-more").hidden;
      $("#f-more").hidden = !open;
      moreBtn.setAttribute("aria-expanded", String(open));
    });
    initFilters.updateMore = () => {
      const n = [f.lang, f.tuition !== "" ? "t" : "", f.notest, f.nogerman, f.private, f.inst].filter(Boolean).length;
      moreBtn.textContent = n ? `More filters (${n})` : "More filters";
      moreBtn.classList.toggle("active", n > 0);
    };
    $("#f-clear").addEventListener("click", () => {
      Object.assign(f, { search: "", city: "", uni: "", lang: "", tuition: "", fields: [], notest: false, nogerman: false, private: false, inst: "" });
      $("#f-search").value = ""; $("#f-field").value = ""; $("#f-location").value = "|";
      $("#f-lang").value = ""; $("#f-tuition").value = ""; $("#f-inst").value = "";
      $("#f-notest").checked = false; $("#f-nogerman").checked = false; $("#f-private").checked = false;
      render();
    });

    $("#list").addEventListener("click", (e) => {
      const b = e.target.closest(".save-btn");
      if (!b) return;
      const id = b.dataset.id;
      state.saved = state.saved.includes(id) ? state.saved.filter((x) => x !== id) : [...state.saved, id];
      render();
      const again = document.querySelector(`.save-btn[data-id="${CSS.escape(id)}"]`);
      if (again) again.focus();
    });

    $("#status-tabs").addEventListener("click", (e) => {
      const b = e.target.closest(".status-tab");
      if (!b || b.disabled) return;
      f.status = b.dataset.status;
      render();
    });
    $("#status-tabs").addEventListener("keydown", (e) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const tabs = [...document.querySelectorAll(".status-tab:not([disabled])")];
      const i = tabs.findIndex((t) => t.dataset.status === renderList.shown);
      const next =
        e.key === "Home" ? tabs[0] :
        e.key === "End" ? tabs[tabs.length - 1] :
        tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      if (!next) return;
      f.status = next.dataset.status;
      render();
      const el = document.querySelector(`.status-tab[data-status="${f.status}"]`);
      if (el) el.focus();
    });

    const bind = (sel, key, prop = "value") => {
      const el = $(sel);
      el[prop] = f[key];
      el.addEventListener(prop === "checked" ? "change" : "input", () => { f[key] = el[prop]; render(); });
    };
    bind("#f-search", "search");
    bind("#f-lang", "lang");
    bind("#f-tuition", "tuition");
    bind("#f-sort", "sort");
    bind("#f-notest", "notest", "checked");
    bind("#f-nogerman", "nogerman", "checked");
    bind("#f-private", "private", "checked");
    bind("#f-inst", "inst");
  }

  renderMeta();
  initProfile();
  initFilters();
  render();
  // First visit: open the sections that still need input. Returning users see the compact summary.
  document.querySelectorAll(".sec").forEach((d) => {
    if ($("#sum-" + d.dataset.sec).classList.contains("empty") || !hasAnyEcts()) d.open = true;
  });
  if (state.filters.lang || state.filters.tuition !== "" || state.filters.notest || state.filters.nogerman || state.filters.private || state.filters.inst) {
    $("#f-more").hidden = false;
    $("#f-more-btn").setAttribute("aria-expanded", "true");
  }
})();
