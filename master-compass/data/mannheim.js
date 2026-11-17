/* University of Mannheim. Checked 2026-11-17. */
(function () {
  const bwl = "https://www.bwl.uni-mannheim.de/en/programs/master/";
  const bwlDocs = "https://www.bwl.uni-mannheim.de/media/Fakultaeten/bwl/Dokumente/Studium/";
  const um = "https://www.uni-mannheim.de/en/academics/before-your-studies/programs/";
  const statutes = "https://www.uni-mannheim.de/media/Einrichtungen/zula/Auswahlsatzungen_master/";

  const commonSources = [
    { label: "Application deadlines", url: "https://www.uni-mannheim.de/en/academics/dates/application-deadlines/" },
    { label: "Master's application and documents", url: "https://www.uni-mannheim.de/en/academics/before-your-studies/applying/masters-program/admission-to-the-first-subject-specific-semester-masters-program/" },
    { label: "Foreign language requirements", url: "https://www.uni-mannheim.de/en/academics/before-your-studies/applying/the-a-to-z-of-applying/masters-programs-foreign-language-requirements/" },
    { label: "Fees", url: "https://www.uni-mannheim.de/en/academics/during-your-studies/organizing-your-studies/fees/" },
  ];

  const fees = {
    tuitionNonEU: 1500,
    semester: "€194 per semester in spring 2027 (administration €80, Studierendenwerk €100, student body €14); the fall 2027 amount is not yet published",
    tuitionNote: "Baden-Württemberg charges students from outside the EU/EEA €1,500 per semester on top of the semester fee.",
  };

  const route = "Online via Mannheim's own portal (Portal²). Mannheim does not use uni-assist.";

  const translationDoc = "Documents not in German or English: original plus a translation by a sworn translator (degree certificate: notarized German or English translation)";

  const fee = (txt) => "Semester fee for fall 2027 not yet published (" + txt + ").";

  const base = {
    university: "University of Mannheim",
    city: "Mannheim",
    state: "Baden-Württemberg",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    fees,
    german: null,
    interview: false,
    lastChecked: "2026-11-17",
  };

  // Shared structure of MMM, MMFACT and MMOSCM (Business School, same admission rules per the faculty fact sheets)
  const mannheimMaster = {
    ...base,
    intake: "Fall only",
    languageKey: "English",
    notice: {
      type: "info",
      text: "The faculty website marks the 2.5 minimum grade and the 34/16 ECTS rule for economics, math and statistics as subject to approval by university committees. The current selection statute differs (see caveats).",
    },
    bachelorFields: {
      standard: ["business", "economics"],
      relatedAllowed: true,
      note: "Any bachelor with at least 180 ECTS (or 3 years) is possible if it contains at least 36 ECTS of pure business administration.",
    },
    ectsRules: [[{ cats: ["business"], min: 36, label: "Pure business administration" }]],
    ectsNote: "Only pure business administration counts toward the 36 ECTS, e.g. marketing, HR, strategic/international management, financial and cost accounting, financial management, operations and supply chain management. Not counted: economics, game theory, law, math, statistics, public finance, data science, programming, information systems, project management, operations research, business English, soft skills, seminars, internships and the thesis. List at most 60 ECTS of modules with titles exactly as on your transcript and upload official module descriptions.",
    partialMinEcts: 140,
    grade: {
      min: 2.5,
      selection: "Ranking by points (max. 180), no minimum score: bachelor grade up to 60 (1.0 = 60, minus 2 points per 0.1, 2.5 = 30), GMAT/GRE up to 60, economics/math/statistics coursework 32 (all or nothing), semester abroad 22, practical experience up to 6 (2 per job of at least one full-time month, 4 for completed vocational training or dual studies). Foreign grades are converted with the modified Bavarian formula.",
    },
    bonusRules: [
      {
        label: "economics, mathematics & statistics coursework",
        points: 32,
        conds: [
          { cats: ["economics", "math", "statistics"], min: 34, label: "Economics + math + statistics" },
          { cats: ["economics"], min: 16, label: "of which economics" },
        ],
      },
    ],
    test: {
      status: "optional",
      accepted: ["GMAT", "GMAT Focus", "GRE"],
      note: "Not required, but worth up to 60 of 180 points. GMAT Focus: 555 = 1 point up to 685+ = 60. GMAT 10th edition: 600 = 1 up to 730+ = 60. GRE is converted to a GMAT 10th edition score (Verbal × 6.3837 + Quant × 10.6231 − 2080.75, rounded to tens). Scores up to 5 years old; the official score report must arrive by 15 May. GMAT codes: MMM VLC-95-04, MMFACT VLC-95-79, MMOSCM VLC-95-68. GRE institution code 2620.",
    },
    english: {
      cefr: "C1",
      ielts: 7.0,
      toefl: 100,
      englishMedium: "yes",
      note: "Waived if at least 40% of your degree (by ECTS, teaching and exams) was in English; your university must fill in, sign and stamp Mannheim's form. Also accepted: telc English C1 University, CAE/C1 Advanced, CPE, the Mannheim language test at C1. TOEFL MyBest scores are not accepted. Tests must be at most 2 years old on 15 May. Proof can follow until 15 August.",
    },
    application: {
      route,
      vpd: false,
      opens: "2027-04-01",
      deadline: "2027-05-15",
      note: "One intake per year. GMAT/GRE, transcript, abroad and work proofs must be in by 15 May. Only the English proof (until 15 August) and the bachelor certificate (until mid-October) may follow. Results about 4 to 6 weeks after the deadline.",
    },
    documents: [
      "Transcript of records with at least 140 ECTS (German or English, otherwise with a sworn translation)",
      "Information on your grading scale (best grade and lowest passing grade)",
      "Official module descriptions for all listed business and economics/math/statistics courses (same language as the transcript; no cloud links)",
      "Bachelor certificate (can follow until mid-October)",
      "CV",
      "English proof (C1 test or Mannheim's 40% English-taught confirmation form)",
      "Optional: official GMAT/GRE score report, host university transcript for a semester abroad, employer confirmation of work experience",
      translationDoc,
    ],
    caveats: [
      "Minimum grade: the faculty website says 2.5 (subject to committee approval), but the current MMM selection statute (amended 24 March 2026) sets no minimum grade.",
      "Economics/math/statistics bonus: the website says at least 34 ECTS including 16 ECTS economics (subject to committee approval); the current statute says at least 30 ECTS including 12 ECTS economics. This file uses the stricter website values.",
      "Work experience: the website counts one full-time month as 158 hours; the statute says at least 30 days full-time at 39.5 hours per week.",
      "The deadlines table still has the heading Fall Semester 2026/2027, while its intro text and the programme pages give 1 April to 15 May 2027 for fall 2027/2028.",
      "Only the MMM selection statute was read in full. The faculty fact sheets say the same rules apply to MMFACT and MMOSCM.",
      "The semester fee for fall 2027 is not yet published (€194 in spring 2027).",
    ],
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...mannheimMaster,
      id: "uma-mmm",
      name: "Mannheim Master in Management (MMM)",
      fields: ["management", "marketing", "finance"],
      language: "Two tracks: English track (up to 20% of places) or German-English track (rest of the places). Track choice is binding.",
      extraLanguage: "The German-English track requires German C1. The English track does not, but English-track students cannot take German-taught courses.",
      places: 400,
      sources: [
        { label: "MMM application information", url: bwl + "mmm/application-information/" },
        { label: "MMM selection statute (EN)", url: statutes + "satzung_ma_mmm_en.pdf" },
        { label: "MMM selection statute (DE, binding)", url: statutes + "satzung_ma_mmm.pdf" },
        { label: "Fact sheet: 36 ECTS business administration", url: bwlDocs + "Fact_sheet_Admission_requirement_36_ECTS_ENG.pdf" },
        { label: "Fact sheet: economics, math, statistics", url: bwlDocs + "MMM_MMFACT_MMOSCM_Fact_sheet_Selection_Criterion_economics_mathematics_statistics.pdf" },
        { label: "Fact sheet: English proficiency", url: bwlDocs + "Fact_sheet_Admission_requirement_English_proficiency_ENG.pdf" },
        ...commonSources,
      ],
    },
    {
      ...mannheimMaster,
      id: "uma-mmfact",
      name: "Mannheim Master in Finance, Accounting and Taxation (MMFACT)",
      fields: ["finance", "accounting"],
      language: "English",
      places: null,
      sources: [
        { label: "MMFACT application information", url: bwl + "mmfact/application-information-mmfact/" },
        { label: "MMFACT selection statute (EN)", url: statutes + "satzung_ma_mmfact_en.pdf" },
        { label: "Fact sheet: economics, math, statistics", url: bwlDocs + "MMM_MMFACT_MMOSCM_Fact_sheet_Selection_Criterion_economics_mathematics_statistics.pdf" },
        ...commonSources,
      ],
      caveats: [
        ...mannheimMaster.caveats,
        "The MMFACT page names the wrong programme in its GMAT instructions; confirm the GMAT code VLC-95-79 with the admissions office.",
        "The number of places is not stated.",
      ],
    },
    {
      ...mannheimMaster,
      id: "uma-mmoscm",
      name: "Mannheim Master in Operations & Supply Chain Management (MMOSCM)",
      fields: ["supply-chain", "management"],
      language: "English",
      places: null,
      sources: [
        { label: "MMOSCM application information", url: bwl + "mmoscm/application-information-mmoscm/" },
        { label: "MMOSCM selection statute (EN)", url: statutes + "satzung_ma_mmoscm_en.pdf" },
        { label: "Fact sheet: economics, math, statistics", url: bwlDocs + "MMM_MMFACT_MMOSCM_Fact_sheet_Selection_Criterion_economics_mathematics_statistics.pdf" },
        ...commonSources,
      ],
      caveats: [...mannheimMaster.caveats, "The number of places is not stated."],
    },
    {
      ...base,
      id: "uma-binf",
      name: "Business Informatics (Wirtschaftsinformatik)",
      fields: ["information-systems"],
      intake: "Fall & spring",
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["quantitative", "business"],
        relatedAllowed: true,
        note: "Bachelor in business informatics, or an equivalent degree with at least 180 ECTS (or 3 years) that meets the subject minimums.",
      },
      ectsRules: [
        [
          { cats: ["informatics"], min: 30, label: "Informatics (incl. at least 8 ECTS programming)" },
          { cats: ["business"], min: 30, label: "Business administration or business informatics" },
          { cats: ["math", "statistics"], min: 18, label: "Mathematics or statistics" },
        ],
      ],
      ectsNote: "At least 8 of the 30 informatics ECTS must be programming. Business informatics courses can count toward the 30 ECTS business requirement.",
      partialMinEcts: 130,
      grade: {
        min: null,
        selection: "Ranking by points (max. 65): bachelor grade up to 50 (1.0 = 50, 4.0 = 0, linear), semester abroad 5, relevant work experience up to 10 (at least 4 weeks full-time). No minimum grade.",
      },
      test: {
        status: "none",
        accepted: [],
        note: "Not a selection criterion. A GMAT of at least 500 (or an equivalent GRE) is accepted as English proof.",
      },
      english: {
        cefr: "B2",
        ielts: 6.0,
        toefl: 72,
        englishMedium: "yes",
        note: "Waived if at least 50% of your degree courses and exams were in English, or with a school-leaving certificate from an English-speaking school system. Also accepted: FCE grade C, CAE, CPE, GMAT 500, equivalent GRE, Mannheim language test at B2. TOEFL MyBest not accepted. Tests up to 5 years old. Proof can follow until 15 August (fall) or 15 January (spring).",
      },
      application: {
        route,
        vpd: false,
        opens: "2027-04-01",
        deadline: "2027-05-15",
        note: "Spring 2028 intake: 15 October to 15 November 2027.",
      },
      places: null,
      documents: [
        "Transcript of records with at least 130 ECTS (German or English, otherwise with a sworn translation)",
        "Information on your grading scale",
        "Module catalogue or descriptions (link or PDF)",
        "Bachelor certificate (can follow)",
        "CV",
        "English proof",
        "Optional: proof of semester abroad and work experience",
        translationDoc,
      ],
      sources: [
        { label: "Programme", url: um + "masters-program-in-business-informatics/" },
        { label: "Selection statute (EN)", url: statutes + "satzung_ma_wifo_en.pdf" },
        ...commonSources,
      ],
      caveats: [
        "The number of places is not stated (the programme describes the cohort as relatively small).",
        fee("€194 in spring 2027"),
      ],
    },
    {
      ...base,
      id: "uma-mmds",
      name: "Mannheim Master in Data Science",
      fields: ["analytics", "information-systems"],
      intake: "Fall & spring",
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: true,
        note: "Bachelor in computer science or mathematics, or a related degree (e.g. business informatics, business mathematics, computer/software engineering). Other degrees qualify only with at least 70 ECTS in informatics, mathematics or statistics. A typical business or economics degree will not reach this.",
      },
      ectsRules: [[{ cats: ["informatics", "math", "statistics"], min: 70, label: "Informatics, mathematics or statistics" }]],
      ectsNote: "The 70 ECTS rule is for degrees outside the named fields. The admissions committee decides on equivalence.",
      partialMinEcts: 130,
      grade: {
        min: 2.5,
        selection: "Separate quotas: one fifth of places go to non-EU applicants without a German school-leaving certificate, who are ranked only by GRE (0.75 × Quant + 0.25 × Verbal). EU/German applicants are ranked by grade (up to 70 points, 1.0 = 70, 2.5 = 0) plus semester abroad and work experience (up to 30).",
      },
      test: {
        status: "conditional",
        accepted: ["GRE"],
        note: "Required for non-EU citizens without a German school-leaving certificate: GRE Quant at least 162 and Verbal at least 151, at most 5 years old. For them the GRE is the only ranking criterion.",
      },
      english: {
        cefr: "B2",
        ielts: 6.0,
        toefl: 72,
        englishMedium: "yes",
        note: "Waived if at least 50% of your degree courses and exams were in English, or with an English-medium school-leaving certificate. Also accepted: FCE grade C, CAE/C1 Advanced, CPE, GMAT 500, equivalent GRE, Mannheim language test at B2. Tests up to 5 years old. Proof can follow until 15 August (fall) or 15 January (spring).",
      },
      application: {
        route,
        vpd: false,
        opens: "2027-04-01",
        deadline: "2027-05-15",
        note: "Spring 2028 intake: 15 October to 15 November 2027.",
      },
      places: 40,
      documents: [
        "Transcript of records with at least 130 ECTS (German or English, otherwise with a sworn translation)",
        "Information on your grading scale",
        "Module catalogue or descriptions (link or PDF)",
        "Bachelor certificate (can follow)",
        "CV",
        "English proof",
        "Official GRE score report (non-EU applicants)",
        translationDoc,
      ],
      sources: [
        { label: "Programme", url: um + "mannheim-master-in-data-science/" },
        { label: "Selection statute (EN)", url: statutes + "satzung_ma_mmds_en.pdf" },
        ...commonSources,
      ],
      caveats: [
        "Places: the programme page says 40 per year; it is not clear if this covers both intakes.",
        fee("€194 in spring 2027"),
      ],
    },
    {
      ...base,
      id: "uma-econ",
      name: "Economics",
      fields: ["economics"],
      intake: "Fall only",
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Bachelor in economics or a degree the admissions committee recognises as equivalent, with at least 180 ECTS (or 3 years).",
      },
      ectsRules: [],
      ectsNote: "No subject minimums are stated. The committee decides on equivalence; expect solid micro, macro, econometrics, statistics and math.",
      partialMinEcts: 120,
      grade: {
        min: 2.5,
        selection: "Ranking by points (max. 35): bachelor grade up to 15 (1.0 = 15, 2.5 = 0), motivation letter up to 7 (max. 2 pages), essay up to 13 (max. 25 pages on economics, econometrics, economic history or statistics, or applying quantitative methods). With 26 points or more you get a place regardless of rank.",
      },
      test: { status: "none", accepted: [], note: "GMAT/GRE are not part of admission or selection." },
      english: {
        cefr: "B2",
        ielts: 6.0,
        toefl: 72,
        englishMedium: "yes",
        note: "Waived if at least 25% of your degree courses and exams were in English, or with an English-medium school-leaving certificate. Also accepted: FCE grade C, CAE, CPE, Mannheim language test at B2. TOEFL MyBest not accepted. Tests up to 5 years old. Proof can follow until 15 August.",
      },
      application: { route, vpd: false, opens: "2027-04-01", deadline: "2027-05-15" },
      places: null,
      documents: [
        "Transcript of records with at least 120 ECTS (German or English, otherwise with a sworn translation)",
        "Information on your grading scale",
        "Motivation letter (max. 2 pages, German or English)",
        "Essay (max. 25 pages, German or English)",
        "Bachelor certificate (can follow)",
        "CV",
        "English proof",
        translationDoc,
      ],
      sources: [
        { label: "Programme", url: um + "masters-program-in-economics/" },
        { label: "Selection statute (EN)", url: statutes + "satzung_ma_vwl_en.pdf" },
        ...commonSources,
      ],
      caveats: [
        "The number of places is not stated.",
        fee("€194 in spring 2027"),
      ],
    },
    {
      ...base,
      id: "uma-wima",
      name: "Mathematics in Business and Economics (Wirtschaftsmathematik)",
      fields: ["economics", "analytics"],
      intake: "Fall & spring",
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: true,
        note: "Bachelor in mathematics in business and economics or an equivalent degree with at least 180 ECTS (or 3 years). A standard business or economics degree usually lacks the 80 ECTS of mathematics.",
      },
      ectsRules: [
        [
          { cats: ["math"], min: 80, label: "Mathematics" },
          { cats: ["business", "economics"], min: 30, label: "Economics or business administration" },
        ],
      ],
      partialMinEcts: 140,
      grade: {
        min: 2.8,
        selection: "Currently not selective: everyone who meets the requirements is admitted.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE." },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No English certificate required; some courses are taught in English.",
      },
      german: { cefr: "C1", note: "Proof of German is listed as a requirement. Mannheim asks for C1 for German-taught programmes; accepted proofs are on the admissions office list." },
      application: {
        route,
        vpd: false,
        opens: "2027-04-01",
        deadline: "2027-07-15",
        note: "Spring 2028 intake: 15 October to 15 November 2027. Apply early if you need a visa.",
      },
      places: null,
      documents: [
        "Transcript of records with at least 140 ECTS (German or English, otherwise with a sworn translation)",
        "Information on your grading scale",
        "Module catalogue or descriptions (link or PDF)",
        "Bachelor certificate (can follow)",
        "CV",
        "German proof (C1)",
        translationDoc,
      ],
      sources: [
        { label: "Programme", url: um + "masters-program-in-mathematics-in-business-and-economics/" },
        { label: "Selection statute (DE)", url: statutes + "satzung_ma_wima.pdf" },
        ...commonSources,
      ],
      caveats: [
        "The programme page says both that no language proof is required and that proof of German is required. The German level is not stated on the page; C1 is Mannheim's general rule for German-taught programmes.",
        "The selection statute exists only in German and was not checked; data comes from the programme page.",
        fee("€194 in spring 2027"),
      ],
    },
  ]);
})();
