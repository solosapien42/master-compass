/* Humboldt-Universitaet zu Berlin - School of Business and Economics (plus the joint M.Sc. Statistics). Checked 2026-11-17. */
(function () {
  const sharedCaveats = [
    "The official HU pages (wiwi.hu-berlin.de, hu-berlin.de, the Amtliches Mitteilungsblatt on gremien.hu-berlin.de) could not be read during this check because they are behind a bot-check. The facts here come from the DAAD International Programmes database, which is filled in by the university. The binding admission regulations (ZSP-HU and the subject-specific rules) were not read.",
    "Application window, grade minimum, selection method, past cut-offs, number of places, interview and the exact document list are NOT verified. Check the HU application page before applying.",
    "DAAD gives the application period as 1 May to 31 May (all countries). We use 31 May 2027 as the non-EU deadline, but the 2027 dates are not published yet. Aggregators mention 14 June, which we could not confirm.",
    "DAAD says you can apply through uni-assist or through HU's own online portal. We could not confirm which route non-EU applicants must use or whether a VPD is needed. Ask bewerbung-international@hu-berlin.de.",
    "You can apply to only one master's programme at HU per round (faculty page, via search summary).",
    "Whether an English-taught bachelor from Turkey replaces the English certificate is not verified. DAAD only says exemptions are listed on the programme website.",
    "The semester fee (about EUR 355.80, incl. Germany ticket EUR 208.80) is the figure shown by DAAD. HU fees change each semester, and the Statistics and Information Systems DAAD pages show slightly different amounts.",
  ];

  const fees = {
    tuitionNonEU: 0,
    semester: "About EUR 355.80 per semester (semester contribution EUR 50, student body EUR 12, student union EUR 85, Germany ticket EUR 208.80), per DAAD",
    tuitionNote: "No tuition fees in Berlin, also for non-EU students.",
  };

  const base = {
    notice: {
      type: "warning",
      text: "Based on HU's entries in the DAAD database. HU's own pages block automated checks, so confirm every requirement on the official programme page.",
    },
    university: "Humboldt-Universität zu Berlin",
    city: "Berlin",
    state: "Berlin",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter only",
    fees,
    lastChecked: "2026-11-17",
  };

  const application = {
    route: "Apply via uni-assist or HU's own online application portal (DAAD lists both; confirm the route for your degree)",
    vpd: false,
    opens: "2027-05-01",
    opensApprox: true,
    deadline: "2027-05-31",
    note: "Window 1-31 May according to DAAD. Not verified on the official HU deadline page. Check whether a uni-assist VPD is needed for non-EU degrees and request it early if so.",
  };

  const noTest = {
    status: "none",
    accepted: [],
    note: "DAAD does not mention GMAT or GRE for this programme. Not verified on the official page.",
  };

  const englishC1 = {
    cefr: "C1",
    ielts: 7.0,
    toefl: null,
    englishMedium: "conditional",
    note: "Official C1 certificate needed. DAAD gives IELTS Academic 7.0 as an example (onSET C1 also accepted for Information Systems). TOEFL minimum not found. Exemptions exist but are listed only on the programme website, which could not be read. An English-taught bachelor from Turkey may or may not be accepted.",
  };

  const srcCommon = [
    { label: "Faculty: applying for master's programmes", url: "https://www.wiwi.hu-berlin.de/en/study/sb/bewerbung/masterstudiengange" },
    { label: "HU admission regulations (ZSP-HU, Amtliches Mitteilungsblatt)", url: "https://gremien.hu-berlin.de/de/amb" },
  ];

  const docs = [
    "Bachelor certificate, or transcript if you have not yet graduated (at most 30 ECTS outstanding)",
    "Transcript of records",
    "English certificate (C1) unless exempt",
    "Proof of subject-specific ECTS (module list / handbook)",
    "Further documents per HU portal (not verified)",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "hu-business-administration",
      name: "Business Administration",
      fields: ["management", "finance", "accounting", "marketing"],
      languageKey: "English",
      language: "English (some taxation courses in German)",
      bachelorFields: {
        standard: ["business", "economics", "finance"],
        relatedAllowed: true,
        note: "A bachelor in economics or a related subject. Admission depends on the subject ECTS below.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 100, label: "Business / economics and economically relevant law (without methods and thesis)" },
          { cats: ["math", "statistics"], min: 24, label: "Methods: maths, statistics, econometrics (microeconomics also counts)" },
        ],
      ],
      ectsNote: "DAAD: at least 100 ECTS in economic subjects and economically relevant law, excluding methods and the bachelor thesis. At least 24 ECTS in methods: mathematics, statistics, econometrics and microeconomics (macroeconomics does not count). The checker counts only maths and statistics for the 24 ECTS, so add your microeconomics ECTS by hand. If your degree is not finished, no more than 30 ECTS may be outstanding at application.",
      grade: {
        min: null,
        selection: "Not verified. HU selects by ranking, but the criteria and any grade minimum could not be read.",
      },
      test: noTest,
      english: englishC1,
      german: null,
      application,
      interview: false,
      documents: docs,
      sources: [
        { label: "Programme page", url: "https://www.wiwi.hu-berlin.de/en/study/studium/ma-business-administration" },
        { label: "DAAD listing", url: "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/6100/" },
        ...srcCommon,
      ],
      caveats: [
        ...sharedCaveats,
        "Aggregators quote 120 ECTS instead of 100 for the economic subjects. DAAD says 100. The binding regulation was not read.",
        "Business Administration majors or concentrations (if any) were not checked.",
      ],
    },
    {
      ...base,
      id: "hu-economics",
      name: "Economics",
      fields: ["economics"],
      languageKey: "English",
      language: "English (some taxation courses in German)",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Admission depends on the subject ECTS below.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 60, label: "Specialised economics subjects (without methods and thesis)" },
          { cats: ["math", "statistics"], min: 24, label: "Mathematics, statistics, econometrics" },
        ],
      ],
      ectsNote: "DAAD: at least 60 ECTS in specialised economics subjects, excluding mathematics, statistics, econometrics and the bachelor thesis. At least 24 ECTS in mathematics, statistics and econometrics. If your degree is not finished, no more than 30 ECTS may be outstanding at application. Whether business (BWL) courses count towards the 60 ECTS is not clear.",
      grade: {
        min: null,
        selection: "Not verified. HU selects by ranking, but the criteria and any grade minimum could not be read.",
      },
      test: noTest,
      english: englishC1,
      german: null,
      application,
      interview: false,
      documents: docs,
      sources: [
        { label: "DAAD listing", url: "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/6323/" },
        ...srcCommon,
      ],
      caveats: [
        ...sharedCaveats,
        "The faculty programme page for Economics was not read. The DAAD wording may differ from the regulation (VWL master, AMB 48/2016 as amended).",
      ],
    },
    {
      ...base,
      id: "hu-statistics",
      name: "Statistics (joint programme with FU Berlin, TU Berlin and Charité)",
      fields: ["analytics", "economics"],
      languageKey: "German/English",
      language: "Mostly English; compulsory Stochastik 1 and a few other courses are in German",
      bachelorFields: {
        standard: ["quantitative", "economics"],
        relatedAllowed: true,
        note: "A university degree with a quantitative focus, for example economics, social sciences, industrial engineering, mathematics or physics.",
      },
      ectsRules: [
        [{ cats: ["math", "statistics"], min: 30, label: "Maths (analysis, linear algebra), probability, statistics, econometrics" }],
      ],
      ectsNote: "DAAD International Programmes: at least 30 ECTS in mathematics (analysis and linear algebra), probability theory, statistics, econometrics or comparable training. The general DAAD database shows 20 ECTS instead, so this is not settled.",
      grade: {
        min: null,
        selection: "Not verified.",
      },
      test: noTest,
      english: {
        cefr: "B1",
        ielts: null,
        toefl: 42,
        englishMedium: "conditional",
        note: "B1 with an official certificate. DAAD gives TOEFL iBT 42 (old scale) as an example. Exemptions are listed on the programme website, which could not be read.",
      },
      german: {
        cefr: "B1",
        note: "B1 with an official certificate (for example Goethe-Zertifikat B1). Needed because some compulsory courses are in German.",
      },
      application,
      interview: false,
      documents: docs,
      sources: [
        { label: "DAAD listing", url: "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/10507/" },
        { label: "Programme admission page", url: "https://kosmos.hu-berlin.de/de/stat/admission" },
        ...srcCommon,
      ],
      caveats: [
        ...sharedCaveats,
        "This is run by the HU Faculty of Economics together with other Berlin institutions. The programme page (kosmos.hu-berlin.de/de/stat) could not be read.",
        "DAAD pages conflict on the minimum ECTS (30 vs 20) and on the main language (English vs German).",
        "The partial-degree rule was not stated for this programme.",
      ],
    },
    {
      ...base,
      id: "hu-information-systems",
      name: "Information Systems (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      languageKey: "German/English",
      language: "About 75% English and 25% German; thesis in either language",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "A degree in economics, computer science, information systems, industrial engineering or a related field.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 120, label: "Business / economics subjects" },
          { cats: ["math", "statistics", "informatics"], min: 24, label: "Methods: maths, informatics, statistics, econometrics" },
          { cats: ["informatics"], min: 9, label: "Practical informatics" },
        ],
      ],
      ectsNote: "DAAD: at least 120 ECTS in business/economics subjects, at least 24 ECTS in methods (maths, informatics, statistics, econometrics) including at least 9 ECTS practical informatics, and at least 6 ECTS programming. The 6 ECTS programming rule cannot be tested here. A pure computer science bachelor may not reach 120 ECTS in business/economics, so check the regulation.",
      grade: {
        min: null,
        selection: "Not verified.",
      },
      test: noTest,
      english: {
        ...englishC1,
        note: "C1 required. DAAD names onSET English C1 or IELTS Academic 7.0. TOEFL minimum not found. Exemptions for English-taught degrees were not verified.",
      },
      german: {
        cefr: "B1",
        note: "B1 required. DAAD names UNIcert II or Goethe-Zertifikat B1.",
      },
      application,
      interview: false,
      documents: docs,
      sources: [
        { label: "DAAD listing (2026/27)", url: "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/10491/" },
        { label: "Programme page", url: "https://www.wiwi.hu-berlin.de/en/professuren/bwl/wi/master_information_system" },
        ...srcCommon,
      ],
      caveats: [
        ...sharedCaveats,
        "DAAD does not list a deadline for this programme and shows a semester fee of about EUR 320. The faculty page has shown both winter-and-summer and winter-only intake in different versions. We assume winter only.",
        "The ECTS thresholds (120 / 24 / 9 / 6) come from DAAD only. The 120 ECTS in business/economics looks high compared with other programmes. Check the regulation (AMB 19/2025 and the subject-specific admission rules).",
      ],
    },
  ]);
})();
