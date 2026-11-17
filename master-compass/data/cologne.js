/* University of Cologne – Faculty of Management, Economics and Social Sciences (WiSo). Checked 2026-11-17. */
(function () {
  const app = "https://wiso.uni-koeln.de/en/studies/application/master/";
  const prog = "https://wiso.uni-koeln.de/en/studies/master/";
  const zoDir = "https://wiso.uni-koeln.de/sites/fakultaet/dokumente/downloads/master/Zulassungsordnungen/";

  const src = {
    faq: { label: "FAQ & admission regulations", url: app + "faq-admission-regulations" },
    zoWiso: { label: "Admission regulations (German, binding), 7 Jan 2026", url: zoDir + "ZO_WiSoMaster.pdf" },
    zoWisoEn: { label: "Admission regulations (English translation)", url: zoDir + "ZO_WiSoMaster_E.pdf" },
    zoMim: { label: "Admission regulations CEMS MIM & Economic Research (English)", url: zoDir + "ZO_EcoRes_MIM_E.pdf" },
    zoHealth: { label: "Admission regulations Health Economics (English)", url: zoDir + "ZO_Gesundheitsoekonomie_E.pdf" },
    score: { label: "Score calculation tables (PDF)", url: "https://wiso.uni-koeln.de/sites/fakultaet/dokumente/downloads/master/Masterbewerbung/Scorebildung_E.pdf" },
    fee: { label: "Semester fee (Student Registry)", url: "https://studsek.uni-koeln.de/studium/rueckmeldung__semesterbeitrag/zahlungsdaten___bankverbindung/index_ger.html" },
  };

  const notice = {
    type: "warning",
    text: "Cologne is revising its application pages for the 2027 round (expected to be ready in December 2026). Dates and figures here come from the 2026 pages and the admission regulations of January 2026. Re-check before applying.",
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€355.65 per semester in winter 2026/27 (semester contribution incl. Deutschlandticket)",
    tuitionNote: "No tuition fees in North Rhine-Westphalia, also for non-EU students.",
    other: "uni-assist charges a handling fee for the VPD. GMAT/GTEBS/GRE fees are paid to the test provider.",
  };

  const vpdRoute = "Get a VPD from uni-assist first (about 8 weeks, can be requested all year), then apply online in Cologne's KLIPS portal";

  const sharedCaveats = [
    "The application pages are being revised for 2027 (until about December 2026). The dates here are the 2026 pattern and may change.",
    "Past-result tables have no column labels in the page text. We read the first value as the EU/EEA quota and the second as the non-EU quota, following the order in which the quotas are described.",
  ];

  // Selection score used by Business Administration, Business Analytics & Econometrics and Economics
  const scoreScale =
    "Score scale (max. 100): bachelor grade 1.0 = 68 points, 1.5 = 58, 2.0 = 48, 2.7 = 34 (2 points per 0.1 grade step), plus aptitude test 0–32 points (36th percentile = 0.49, 50th = 7.38, 75th = 19.69, 90th = 27.08, 100th = 32). Without a test, your score equals your grade points.";

  const englishB2 = {
    cefr: "B2",
    ielts: 5.5,
    toefl: 72,
    englishMedium: "yes",
    note: "Waived if your bachelor was taught 100% in English, or if you are a native speaker (shown in school reports). Also accepted: TOEFL band 4 (new scale), IELTS Indicator/Online 5.5, Cambridge B2 First, BEC Vantage, C1 Advanced, C2 Proficiency, UNIcert II. TOEFL/IELTS no older than 2 years.",
  };

  const englishC1 = {
    cefr: "C1",
    ielts: 7.0,
    toefl: 100,
    englishMedium: "conditional",
    note: "An English-taught bachelor (100% English) counts only if the university is in an English-speaking country, is a CEMS member, or is EQUIS or AACSB accredited. Also accepted: TOEFL band 5 (new scale), PTE Academic 68 (CEMS), Cambridge C1 Advanced or BEC Higher grade B, C2 Proficiency grade C. TOEFL/IELTS/PTE no older than 2 years. German Abitur and IB are not accepted.",
  };

  const englishDouble = {
    cefr: "B2",
    ielts: 6.5,
    toefl: 92,
    englishMedium: "yes",
    note: "Higher scores than the regular programme: IELTS 6.5 / TOEFL 92 (or 4.5 on the new scale), Cambridge C1 Advanced grade A–C or C2 Proficiency. Waived if your bachelor was taught 100% in English or you are a native speaker. TOEFL/IELTS no older than 2 years.",
  };

  const germanC1 = {
    cefr: "C1",
    note: "Needed unless your school-leaving certificate or your bachelor was in German. Accepted: DSH-2 or DSH-3, TestDaF 4 in all four parts, telc Deutsch C1 Hochschule, Goethe C2 (GDS), DSD II, ÖSD C2. Cologne does not offer the DSH itself.",
  };

  const base = {
    university: "University of Cologne",
    city: "Cologne",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter only",
    notice,
    fees,
    lastChecked: "2026-11-17",
  };

  // Regular round (15 June): Business Administration, BAE, Economics, Information Systems, Health Economics
  const juneApplication = {
    route: vpdRoute,
    vpd: true,
    vpdWeeks: 8,
    opens: "2027-04-15",
    opensApprox: true,
    deadline: "2027-06-15",
    note: "Portal opens mid-April. 15 June is a cut-off deadline (set in the admission regulations). Request the VPD by mid-April at the latest. Admission letters mid-July, rejections early October. You can apply to at most 3 WiSo master's programmes per year (CEMS MIM and Economic Research count towards this).",
  };

  const regularDocs = [
    "Bachelor certificate, or proof of ≥80% of credits with an officially confirmed provisional average grade",
    "Transcript of records",
    "VPD from uni-assist",
    "English proof",
    "Self-declaration form on the subject-specific ECTS (only completed courses count)",
    "Module handbook of your bachelor (do not translate it)",
    "Documents in German or English, or certified translations",
    "Optional: transcript of a semester abroad (only if it counts towards the ECTS rules)",
  ];

  // ---------- M.Sc. Business Administration (one entry per major) ----------
  const busAd = {
    ...base,
    languageKey: "English",
    language: "English",
    bachelorFields: {
      standard: ["business", "economics", "finance"],
      relatedAllowed: true,
      note: "Bachelor of at least 6 semesters and 180 ECTS that matches the programme. Admission depends on the subject ECTS below, not on the degree title.",
    },
    ectsRules: [
      [
        { cats: ["business"], min: 60, label: "Business administration" },
        { cats: ["economics"], min: 18, label: "Economics" },
        { cats: ["math", "statistics"], min: 15, label: "Statistics / mathematics" },
      ],
    ],
    ectsNote: "Only methods modules count for statistics/maths (no pure software courses). At most one third of each subject's ECTS may come from outside your own bachelor programme. The bachelor thesis does not count. The ECTS must be complete when you apply.",
    partialMinPct: 80,
    test: {
      status: "optional",
      accepted: ["GMAT", "GTEBS"],
      note: "Optional, no minimum, but worth up to 32 of 100 points (0 below the 36th percentile). GRE is not accepted. Test must be taken by 15 June and uploaded in KLIPS. GMAT scores must be released to Cologne via GMAC (guaranteed if received by 25 June). Valid 5 years.",
    },
    english: englishB2,
    german: null,
    application: juneApplication,
    places: 50,
    interview: false,
    documents: [...regularDocs, "Optional: GMAT or GTEBS score report"],
    caveats: [
      ...sharedCaveats,
      "The programme pages do not show the grade minimum. It comes from the admission regulations (overall grade 2.7 or better).",
    ],
  };

  const busAdSources = () => [
    { label: "Programme page", url: prog + "master-business-administration" },
    { label: "Application page", url: app + "master-business-administration" },
    src.zoWiso,
    src.score,
    src.faq,
    src.fee,
  ];

  // Marks programmes whose last non-EU cut-off score cannot be reached with the grade alone.
  const withTestNeeded = (grade) => ({ ...grade, testNeeded: true });
  const busAdGrade = (historicalNote) => ({
    min: 2.7,
    selection: "Ranked by score = bachelor grade (34–68 points) + optional GMAT/GTEBS (0–32 points). About 50 places per major; 7% of places are for applicants without EU/EEA citizenship, school certificate or bachelor. Ties are decided by lot.",
    historicalNote,
  });

  // ---------- M.Sc. Business Analytics & Econometrics / Economics: shared score system ----------
  const scoreTest = (accepted, extra) => ({
    status: "optional",
    accepted,
    note: "Optional, no minimum, but worth up to 32 of 100 points (0 below the 36th percentile). Test must be taken by 15 June and uploaded in KLIPS. GMAT scores must be released to Cologne via GMAC (guaranteed if received by 25 June). Valid 5 years." + (extra ? " " + extra : ""),
  });

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...busAd,
      id: "uzk-ba-accounting",
      name: "Business Administration – Major Accounting & Taxation",
      fields: ["accounting", "finance"],
      languageKey: "German/English",
      language: "English and German",
      german: germanC1,
      grade: busAdGrade(
        "Lowest admitted score, non-EU quota (7% of places): 48 in 2026, 52 in 2025. EU/EEA quota (93%): 46 (lottery) in 2026, 44 (lottery) in 2025. In 2026 a grade of 2.0 reached 48 without a test. " + scoreScale
      ),
      documents: [...busAd.documents, "German proof (C1) unless your school certificate or bachelor was in German"],
      sources: busAdSources(),
      caveats: [
        ...busAd.caveats,
        "German C1 is required for this major only (admission regulations § 2(4)). The pages call it 'BusAd A&T'.",
      ],
    },
    {
      ...busAd,
      id: "uzk-ba-corpdev",
      name: "Business Administration – Major Corporate Development",
      fields: ["management"],
      grade: busAdGrade(
        "Lowest admitted score, non-EU quota (7% of places): 68.1 (move-up round 68) in 2026, 73.5 in 2025. EU/EEA quota (93%): 58.1 (move-up 58) in 2026, 54 (lottery) in 2025. 68.1 needs e.g. grade 1.0 + 36th percentile, 1.5 + 56th, or 2.0 + 76th. " + scoreScale
      ),
      sources: busAdSources(),
    },
    {
      ...busAd,
      id: "uzk-ba-finance",
      name: "Business Administration – Major Finance",
      fields: ["finance"],
      grade: withTestNeeded(busAdGrade(
        "Lowest admitted score, non-EU quota (7% of places): 75.5 in 2026, 77.1 in 2025. EU/EEA quota (93%): 62 (lottery) in 2026, 54.8 in 2025. 75.5 needs e.g. grade 1.0 + 51st percentile, 1.5 + 71st, or 2.0 + 91st. Not reachable without a test. " + scoreScale
      )),
      sources: busAdSources(),
    },
    {
      ...busAd,
      id: "uzk-ba-marketing",
      name: "Business Administration – Major Marketing",
      fields: ["marketing"],
      grade: busAdGrade(
        "Lowest admitted score, non-EU quota (7% of places): 65.7 in 2026, 70.6 (move-up 69.5) in 2025. EU/EEA quota (93%): 48 in 2026, 48 (lottery) in 2025. 65.7 needs e.g. grade 1.1 without a test, 1.5 + 51st percentile, or 2.0 + 71st. " + scoreScale
      ),
      sources: busAdSources(),
    },
    {
      ...busAd,
      id: "uzk-ba-scm",
      name: "Business Administration – Major Supply Chain Management",
      fields: ["supply-chain", "management"],
      grade: withTestNeeded(busAdGrade(
        "Lowest admitted score, non-EU quota (7% of places): 75.8 in 2026, 70.8 (move-up 70.7) in 2025. EU/EEA quota (93%): 48 (lottery) in 2026, 40.4 (move-up 38, lottery) in 2025. 75.8 needs e.g. grade 1.0 + 51st percentile, 1.5 + 72nd, or 2.0 + 92nd. Not reachable without a test. " + scoreScale
      )),
      sources: busAdSources(),
    },

    // ---------- CEMS Master in International Management ----------
    {
      ...base,
      id: "uzk-cems",
      name: "International Management (CEMS MIM)",
      fields: ["management"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters and 180 ECTS in management, business or economics. The programme page also mentions some initial work experience. Includes a compulsory semester abroad at a CEMS school and a compulsory internship (≥8 consecutive weeks, full-time, one company).",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 48, label: "Business administration" },
          { cats: ["economics"], min: 10, label: "Economics" },
          { cats: ["math", "statistics"], min: 10, label: "Statistics / mathematics" },
        ],
      ],
      ectsNote: "Only theoretical methods modules count for statistics/maths (no pure software courses). At most one third of each subject's ECTS may come from outside your own bachelor programme. The bachelor thesis does not count.",
      partialMinPct: 70,
      grade: {
        min: 2.5,
        selection: "Score out of 30: 40% bachelor grade (1.0 = 30 points, 2.5 = 10) + 30% interview (5–30 points, five dimensions) + 30% GMAT/GTEBS (60th percentile = 10 points up to 100th = 30; 0 below the 60th percentile or without a test). About 46 places; 20% for applicants without EU/EEA citizenship, school certificate or bachelor.",
        historicalNote: "Lowest admitted weighted score (max. 30), non-EU quota (20% of places): 17.3 in 2026, 13.3 in 2025. EU/EEA quota (80%): 18 (lottery) in 2026, 16.7 in 2025. Weighted grade points: 1.0 = 12.0, 1.5 = 9.33, 2.0 = 6.67, 2.5 = 4.0. Weighted test points: 60th percentile = 3.0, 80th = 6.0, 100th = 9.0. Weighted interview: 1.5–9.0.",
      },
      test: {
        status: "optional",
        accepted: ["GMAT", "GTEBS (English version)"],
        note: "Formally optional and no minimum, but it is 30% of the score and 0 points below the 60th percentile, so applying without a test is a big handicap. It also affects the semester-abroad allocation. Test by 31 March; GMAT scores must be released to Cologne via GMAC by 10 April. GRE is not accepted.",
      },
      english: englishC1,
      german: null,
      extraLanguage: "B1 in a second CEMS language at application (CEMS language declaration). A third language must be shown by graduation.",
      application: {
        route: vpdRoute,
        vpd: true,
        vpdWeeks: 8,
        opens: "2027-01-15",
        opensApprox: true,
        deadline: "2027-03-31",
        note: "Portal opens mid-January. 31 March is a cut-off deadline. Request the VPD by early February at the latest. Interviews in May; admission letters in June. A CEMS MIM application counts towards the limit of 3 WiSo master's applications per year.",
      },
      fees: { ...fees, other: fees.other + " One-off CEMS registration fee: €120 for the 2027–28 cohort." },
      places: 46,
      interview: true,
      documents: [
        "Bachelor certificate, or proof of ≥70% of credits with an officially confirmed provisional average grade",
        "Transcript of records",
        "Self-declaration form on the subject-specific ECTS",
        "School-leaving certificate (all pages)",
        "Module handbook of your bachelor",
        "English proof (C1)",
        "CEMS application form and declaration on CEMS languages",
        "CEMS MIM statement of purpose in English (self-written, no AI text)",
        "CV in English",
        "VPD from uni-assist",
        "Optional: GMAT/GTEBS, internship and volunteering certificates, semester-abroad transcript",
      ],
      sources: [
        { label: "Programme page", url: prog + "master-international-management-cems-mim" },
        { label: "Application page", url: app + "master-international-management-cems-mim" },
        src.zoMim,
        src.score,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The grade minimum (2.5) comes from the admission regulations; the application page does not state it.",
        "Admission letters: the application page says mid-June, the FAQ says early June.",
        "Which Turkish universities count for the English-medium waiver depends on CEMS membership or EQUIS/AACSB accreditation. Check your university's status.",
      ],
    },

    // ---------- Business Analytics & Econometrics ----------
    {
      ...base,
      id: "uzk-bae",
      name: "Business Analytics & Econometrics",
      fields: ["analytics", "economics"],
      languageKey: "English",
      language: "English (can be completed entirely in English)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Economics, business, mathematics/statistics, computer science, physics or information systems bachelors are named as typical backgrounds. Admission depends on the subject ECTS below.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 30, label: "Business / economics" },
          { cats: ["math", "statistics", "informatics"], min: 24, label: "Statistics / math / (business) informatics" },
        ],
        [{ cats: ["math", "statistics", "informatics"], min: 48, label: "Statistics / math / (business) informatics" }],
      ],
      ectsNote: "Either 30 ECTS business/economics (Wirtschaftswissenschaften) + 24 ECTS quantitative, or 48 ECTS quantitative. At most one third of each subject's ECTS may come from outside your own bachelor programme. The bachelor thesis does not count.",
      partialMinPct: 80,
      grade: {
        min: 2.5,
        selection: "Ranked by score = bachelor grade (34–68 points) + optional GMAT/GTEBS (0–32 points). About 40 places; 7% for applicants without EU/EEA citizenship, school certificate or bachelor. Ties are decided by lot.",
        historicalNote:
          "Lowest admitted score, non-EU quota (7% of places): 83.6 (move-up 83.5) in 2026, 78 in 2025. EU/EEA quota (93%): 56 (lottery) in 2026, 50 (lottery) in 2025. 83.6 needs e.g. grade 1.0 + 67th percentile, 1.3 + 79th, or 1.5 + 87th. Not reachable without a test. " + scoreScale,
        testNeeded: true,
      },
      test: scoreTest(["GMAT", "GTEBS"], "GRE is not accepted."),
      english: englishB2,
      german: null,
      application: juneApplication,
      places: 40,
      interview: false,
      documents: [...regularDocs, "Optional: GMAT or GTEBS score report"],
      sources: [
        { label: "Programme page", url: prog + "master-business-analytics-econometrics" },
        { label: "Application page", url: app + "master-business-analytics-and-econometrics" },
        src.zoWiso,
        src.score,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The grade minimum (2.5) comes from the admission regulations; the application page does not state it.",
        "The English translation of the regulations says '30 ECTS economics', but the binding German text and the application page say business administration/economics (Wirtschaftswissenschaften).",
      ],
    },

    // ---------- Economics ----------
    {
      ...base,
      id: "uzk-economics",
      name: "Economics",
      fields: ["economics"],
      languageKey: "English",
      language: "English (can be completed entirely in English)",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Admission depends on the subject ECTS below. A maths-heavy bachelor (≥40 ECTS mathematics) also qualifies.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 30, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Statistics / mathematics" },
        ],
        [{ cats: ["math"], min: 40, label: "Mathematics" }],
      ],
      ectsNote: "Either 30 ECTS economics (VWL) + 15 ECTS statistics/maths, or 40 ECTS mathematics. Only methods modules count (no pure software courses). At most one third of each subject's ECTS may come from outside your own bachelor programme. The bachelor thesis does not count.",
      partialMinPct: 80,
      grade: {
        min: 2.7,
        selection: "Ranked by score = bachelor grade (34–68 points) + optional GMAT/GRE/GTEBS (0–32 points). About 100 places; 7% for applicants without EU/EEA citizenship, school certificate or bachelor. Ties are decided by lot.",
        historicalNote:
          "Lowest admitted score, non-EU quota (7% of places): 66 (lottery) in 2026, 60.3 in 2025. EU/EEA quota (93%): 40 (lottery) in 2026, 34 (lottery) in 2025. 66 needs e.g. grade 1.1 without a test, 1.5 + 52nd percentile, or 2.0 + 72nd. " + scoreScale,
      },
      test: scoreTest(["GMAT", "GRE", "GTEBS"], "GRE scores are converted to a GMAT score with a formula in the admission regulations."),
      english: englishB2,
      german: null,
      application: juneApplication,
      places: 100,
      interview: false,
      documents: [...regularDocs, "Optional: GMAT, GRE or GTEBS score report"],
      sources: [
        { label: "Programme page", url: prog + "master-economics" },
        { label: "Application page", url: app + "master-economics" },
        src.zoWiso,
        src.score,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The grade minimum (2.7) comes from the admission regulations; the application page does not state it.",
        "The Economics results table does not show move-up values clearly. Check the live page.",
      ],
    },

    // ---------- Economic Research ----------
    {
      ...base,
      id: "uzk-economic-research",
      name: "Economic Research (M.Sc. with optional PhD track)",
      fields: ["economics"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics", "business", "quantitative"],
        relatedAllowed: true,
        note: "Research-oriented programme for a small group (about 15). It is stage 1 of the Cologne Graduate School; stage 2 is an optional 3-year PhD. Stipends are considered automatically.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 36, label: "Business / economics" },
          { cats: ["economics"], min: 18, label: "of which economics" },
          { cats: ["math", "statistics"], min: 15, label: "Math / statistics / econometrics" },
        ],
        [{ cats: ["math", "statistics"], min: 40, label: "Math / statistics / econometrics" }],
      ],
      ectsNote: "Either 36 ECTS business/economics (incl. ≥18 economics) + 15 ECTS math/statistics/econometrics, or 40 ECTS math/statistics/econometrics. Only theoretical methods modules count (no pure software courses).",
      partialMinPct: 70,
      grade: {
        min: 2.5,
        selection: "Score out of 100: bachelor grade (1.0 = 50 points, 2.5 = 21) + interview (5–25 points) + GRE Quantitative (130 = 10 points up to 170 = 25; 0 without GRE). About 15 places; 7% for applicants without EU/EEA citizenship, school certificate or bachelor.",
        historicalNote: "Lowest admitted score (max. 100), non-EU quota (7% of places): 97.7 in 2026, 80.1 in 2025. EU/EEA quota (93%): 51.8 (move-up 48.4) in 2026, 55.3 in 2025. Grade points: 1.0 = 50, 1.5 = 40.33, 2.0 = 30.67. GRE Quant 160 = 21.25, 165 = 23.13.",
      },
      test: {
        status: "optional",
        accepted: ["GRE"],
        note: "Only the GRE (Quantitative Reasoning) counts. Optional, but worth up to 25 of 100 points. Upload the result in KLIPS by 31 March. Valid 5 years.",
      },
      english: englishC1,
      german: null,
      application: {
        route: vpdRoute,
        vpd: true,
        vpdWeeks: 8,
        opens: "2027-01-15",
        opensApprox: true,
        deadline: "2027-03-31",
        note: "Portal opens mid-January. 31 March is a cut-off deadline. Request the VPD by early February at the latest. Interviews in April; admission letters in June. Counts towards the limit of 3 WiSo master's applications per year.",
      },
      places: 15,
      interview: true,
      documents: [
        "Bachelor certificate, or proof of ≥70% of credits with an officially confirmed provisional average grade",
        "Transcript of records",
        "Self-declaration form on the subject-specific ECTS",
        "School-leaving certificate (all pages)",
        "Module handbook of your bachelor",
        "English proof (C1)",
        "Motivation letter in English (max. 1 page, self-written)",
        "CV in English",
        "VPD from uni-assist",
        "Optional: GRE score report",
      ],
      sources: [
        { label: "Programme page", url: prog + "master-economic-research" },
        { label: "Application page", url: app + "master-economic-research" },
        src.zoMim,
        src.score,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The grade minimum (2.5) comes from the admission regulations; the application page does not state it.",
        "Admission letters: the application page says mid-June, the FAQ says early June.",
      ],
    },

    // ---------- Information Systems ----------
    {
      ...base,
      id: "uzk-information-systems",
      name: "Information Systems",
      fields: ["information-systems", "analytics"],
      languageKey: "German/English",
      language: "English and German (some compulsory courses are in German)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Typically a business informatics (Wirtschaftsinformatik) or information systems bachelor. Admission depends on the subject ECTS below.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 30, label: "Business / economics" },
          { cats: ["informatics", "math", "statistics"], min: 30, label: "Informatics / math / statistics" },
          { cats: ["informatics"], min: 20, label: "Information systems / business informatics" },
        ],
      ],
      ectsNote: "The binding regulations require the 20 ECTS to be in information systems or business informatics (Wirtschaftsinformatik); the application page writes 'Information Systems/Informatics'. At most one third of each subject's ECTS may come from outside your own bachelor programme. The bachelor thesis does not count.",
      partialMinPct: 80,
      grade: {
        min: null,
        selection: "Ranked by bachelor grade only (no test). About 50 places; 7% for applicants without EU/EEA citizenship, school certificate or bachelor. Ties are decided by lot.",
        historicalNote: "Lowest admitted grade, EU/EEA quota (93%): 2.3 (lottery) in 2026 and 2025. The non-EU column shows no value in either year.",
      },
      test: { status: "none", accepted: [], note: "No aptitude test in the selection." },
      english: englishB2,
      german: germanC1,
      application: juneApplication,
      places: 50,
      interview: false,
      documents: [...regularDocs, "German proof (C1) unless your school certificate or bachelor was in German"],
      sources: [
        { label: "Programme page", url: prog + "master-information-systems" },
        { label: "Application page", url: app + "master-information-systems" },
        src.zoWiso,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "No past cut-off is published for the non-EU quota (shown as '-'). It is unclear whether this means no selection was needed or no data.",
      ],
    },

    // ---------- Health Economics (Gesundheitsökonomie) ----------
    {
      ...base,
      id: "uzk-health-economics",
      name: "Health Economics (Gesundheitsökonomie)",
      fields: ["health", "economics"],
      languageKey: "German/English",
      language: "German and English (some courses in each language)",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "Joint programme of the WiSo and Medical Faculties. You need ≥25 ECTS in healthcare topics, so in practice this suits health economics or health management bachelors. A typical business or economics bachelor without healthcare courses does not qualify.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 35, label: "Business / economics" },
          { cats: ["math", "statistics"], min: 10, label: "Quantitative methods" },
        ],
      ],
      ectsNote: "Also required: at least 25 ECTS in healthcare (Gesundheitswesen). The checker cannot test this, so count your healthcare courses yourself.",
      partialMinPct: 80,
      grade: {
        min: 2.7,
        selection: "Ranked by bachelor grade only (no test). About 45 places; 7% for applicants without EU/EEA citizenship, school certificate or bachelor. Ties are decided by lot.",
        historicalCutoff: 1.8,
        historicalNote: "Lowest admitted grade, non-EU quota (7% of places): 1.8 in 2026 (no value shown for 2025). EU/EEA quota (93%): 2.7 in 2026, 2.3 (lottery; move-up 2.6) in 2025.",
      },
      test: { status: "none", accepted: [], note: "No aptitude test in the selection." },
      english: englishB2,
      german: germanC1,
      application: juneApplication,
      places: 45,
      interview: false,
      documents: [...regularDocs, "German proof (C1) unless your school certificate or bachelor was in German"],
      sources: [
        { label: "Programme page", url: prog + "master-health-economics" },
        { label: "Application page (German)", url: "https://wiso.uni-koeln.de/de/studium/bewerbung/master/master-gesundheitsoekonomie" },
        src.zoHealth,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The grade minimum (2.7) comes from the admission regulations; the application page does not state it.",
        "The non-EU cut-off (1.8) is based on a single year and on our reading of the column order.",
      ],
    },

    // ---------- Double Master's Programmes ----------
    {
      ...base,
      id: "uzk-dd-business-administration",
      name: "Double Master's Programme in Business Administration (Aalto / IIM Ahmedabad / Louvain)",
      fields: ["management", "finance", "marketing", "supply-chain"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["business", "economics", "finance"],
        relatedAllowed: true,
        note: "Two master's degrees (Cologne + partner). Options: Marketing with Aalto University; Finance and Supply Chain Management with IIM Ahmedabad; Corporate Development with Louvain School of Management. You must also be admitted to the regular M.Sc. Business Administration.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 60, label: "Business administration" },
          { cats: ["economics"], min: 18, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Statistics / mathematics" },
        ],
      ],
      ectsNote: "Same subject rules as the regular M.Sc. Business Administration.",
      partialMinPct: 80,
      grade: {
        min: 2.7,
        selection: "Eligible applicants are assessed and a shortlist gets an online interview in June. You must also reach the score cut-off of the regular M.Sc. Business Administration major. If not selected, you are considered for the regular programme automatically.",
        historicalNote: "No separate cut-offs are published. See the past results of the matching Business Administration major.",
      },
      test: {
        status: "conditional",
        accepted: ["GMAT", "GTEBS"],
        note: "GMAT is mandatory for Aalto (min. 515) and IIM Ahmedabad (min. 595). For Louvain, GMAT or GTEBS is optional. Tests must be taken by 15 May; GMAT scores must be released to Cologne via GMAC (guaranteed if received by 25 May). Valid 5 years.",
      },
      english: englishDouble,
      german: null,
      application: {
        route: vpdRoute,
        vpd: true,
        vpdWeeks: 8,
        opens: "2027-04-15",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Portal opens mid-April; deadline 15 May (earlier than the regular round). Request the VPD by mid-March at the latest. Online interviews in June; admission letters mid-July.",
      },
      fees: {
        ...fees,
        tuitionNote: "No tuition in Cologne. Partner year: Aalto charges non-EU students €15,000 for the second year; IIM Ahmedabad and Louvain waive tuition (admin fees up to about €100). Living costs are your own.",
      },
      interview: true,
      documents: [
        ...regularDocs,
        "CV in English",
        "Motivation letter in English (about 500 words, self-written, no AI text)",
        "School-leaving certificate",
        "GMAT score (Aalto, IIMA) or optional GMAT/GTEBS (Louvain)",
        "Optional: internship or work references",
      ],
      sources: [
        { label: "Programme page", url: "https://wiso.uni-koeln.de/en/studium/master/double-masters-programme-in-business-administration" },
        { label: "Application page", url: app + "double-masters-programme-in-business-administration" },
        src.zoWiso,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The GMAT minimums (515 / 595) do not say whether they refer to the classic GMAT or the GMAT Focus scale.",
        "An older faculty flyer also lists Warsaw School of Economics (SGH) as a partner; the current application page does not. Places per partner are not stated.",
        "Accounting & Taxation has no double master's option.",
      ],
    },
    {
      ...base,
      id: "uzk-dd-economics-keio",
      name: "Double Master's Programme in Economics (with Keio University)",
      fields: ["economics"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Two master's degrees (Cologne + Keio University, Tokyo). You must also be admitted to the regular M.Sc. Economics.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 30, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Statistics / mathematics" },
        ],
        [{ cats: ["math"], min: 40, label: "Mathematics" }],
      ],
      ectsNote: "Same subject rules as the regular M.Sc. Economics. Only methods modules count (no pure software courses).",
      partialMinPct: 80,
      grade: {
        min: 2.7,
        selection: "Eligible applicants are assessed and a shortlist gets an online interview in June. You must also reach the score cut-off of the regular M.Sc. Economics. If not selected, you are considered for the regular programme automatically.",
        historicalNote: "No separate cut-offs are published. See the past results of the M.Sc. Economics.",
      },
      test: {
        status: "optional",
        accepted: ["GMAT", "GRE", "GTEBS"],
        note: "Optional but recommended; no minimum. Upload by 15 May. GMAT scores must be released to Cologne via GMAC by 22 May. Valid 5 years.",
      },
      english: englishDouble,
      german: null,
      application: {
        route: vpdRoute,
        vpd: true,
        vpdWeeks: 8,
        opens: "2027-04-15",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Portal opens mid-April; deadline 15 May. Request the VPD by mid-March at the latest. Online interviews in June; admission letters mid-July.",
      },
      interview: true,
      documents: [
        ...regularDocs,
        "CV in English",
        "Motivation letter in English (about 500 words, self-written, no AI text)",
        "School-leaving certificate",
        "Optional: GMAT/GRE/GTEBS, internship or work references",
      ],
      sources: [
        { label: "Programme page", url: "https://wiso.uni-koeln.de/en/studium/master/double-masters-programme-in-economics" },
        { label: "Application page", url: app + "double-masters-programme-in-economics" },
        src.zoWiso,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The application page does not state Keio's tuition, the number of places, or how the two years are split between Cologne and Tokyo.",
      ],
    },
    {
      ...base,
      id: "uzk-dd-health-maastricht",
      name: "Double Master's Programme in Health Economics and Management (with Maastricht University)",
      fields: ["health", "economics", "management"],
      languageKey: "German/English",
      language: "English and German (Cologne year follows the Health Economics programme)",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "Two master's degrees (Cologne + Maastricht University). You need ≥25 ECTS in healthcare topics, so this suits health economics or health management bachelors.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 35, label: "Business / economics" },
          { cats: ["math", "statistics"], min: 10, label: "Quantitative methods" },
        ],
      ],
      ectsNote: "Also required: at least 25 ECTS in healthcare. The checker cannot test this, so count your healthcare courses yourself.",
      partialMinPct: 80,
      grade: {
        min: 2.7,
        selection: "Eligible applicants are assessed and a shortlist gets an online interview in June. You must also be admitted to the regular Health Economics master. If not selected, you are considered for the regular programme automatically.",
        historicalNote: "No separate cut-offs are published. See the past results of the Health Economics (Gesundheitsökonomie) master.",
      },
      test: { status: "none", accepted: [], note: "No aptitude test mentioned." },
      english: englishDouble,
      german: germanC1,
      application: {
        route: vpdRoute,
        vpd: true,
        vpdWeeks: 8,
        opens: "2027-04-15",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Portal opens mid-April; deadline 15 May. Request the VPD by mid-March at the latest. Online interviews in June; admission letters mid-July.",
      },
      fees: {
        ...fees,
        tuitionNote: "No tuition in Cologne. Maastricht charges non-EU/EEA students about €21,500 for the second year (EU/EEA about €2,694). Erasmus+ funding is possible.",
      },
      interview: true,
      documents: [
        ...regularDocs,
        "CV in English",
        "Motivation letter in English (about 500 words, self-written, no AI text)",
        "School-leaving certificate",
        "Optional: internship or work references",
      ],
      sources: [
        { label: "Programme page", url: "https://wiso.uni-koeln.de/en/studium/master/double-masters-programme-in-health-economics-and-management" },
        { label: "Application page", url: app + "double-masters-programme-in-health-economics-and-management" },
        src.zoHealth,
        src.faq,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The double master's page does not list a German requirement, but you must be admitted to the regular Health Economics master, which requires German C1. We list German C1 to be safe. Ask the faculty.",
        "Places and the exact year-by-year structure are not stated.",
      ],
    },
  ]);
})();
