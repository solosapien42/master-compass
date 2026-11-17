/* University of Bayreuth - Faculty of Law, Business and Economics (plus Sport Economics from the Faculty of Cultural Studies). Checked 2026-11-17. */
(function () {
  const dl = "https://www.studierendenkanzlei.uni-bayreuth.de/de/studieninteressierte/internationale-bewerbende/degree-students/";

  const commonSources = [
    { label: "Master application deadlines (Studierendenkanzlei)", url: dl + "fristen-und-deadlines/bewerbungsfristen-masterstudiengaenge/index.php" },
    { label: "Application for international degree students", url: dl + "index.html" },
    { label: "Language proofs for international applicants", url: dl + "sprachnachweise/index.html" },
    { label: "uni-assist VPD at Bayreuth", url: "https://www.international-office.uni-bayreuth.de/en/come-to-bayreuth/degree-students/uni-assist/index.html" },
    { label: "Semester fee", url: "https://www.studierendenkanzlei.uni-bayreuth.de/de/studierende/semesterbeitrag/index.html" },
  ];

  const fees = {
    tuitionNonEU: 0,
    semester: "€172 per semester in winter 2026/27 (Studentenwerk €87, semester ticket €85); the 2027/28 amount is not yet published",
    tuitionNote: "Programme pages state no tuition fees. Bavarian law would allow fees for non-EU students, but no Bayreuth fee is published (see caveats).",
    other: "uni-assist charges a fee for the VPD (amount not checked).",
  };

  const route = "Online via CAMPUSonline (the university's own portal). Applicants with a non-EU degree first need a uni-assist VPD, then upload the documents to CAMPUSonline.";

  const translationDoc = "Documents not in German or English: scan of the original plus an official German or English translation (originals at enrolment)";

  const generalDocs = [
    "CV",
    "Secondary school leaving certificate",
    "Bachelor certificate or, if applying early, transcript with at least 150 ECTS",
    "Transcript listing all courses and grades",
    "Grading scale of your university",
    "Language proofs (see language requirements)",
    "uni-assist VPD (non-EU degrees)",
    translationDoc,
  ];

  const commonCaveats = [
    "Tuition: programme pages and press say Bayreuth charges no tuition to non-EU students, and no 2027/28 fee decision was found. Bavarian law allows universities to charge non-EU students, and the Bayreuth fee statute (2023/081) was not read. Confirm with the Studierendenkanzlei.",
    "Non-EU deadline: the Studierendenkanzlei table gives the window shown here, but other Bayreuth pages mention 15 June for some non-EU applicants. Check the application info tool (BIT) for your programme.",
    "The opening date is the usual one from the deadline table, not a published 2027 date.",
    "VPD: Bayreuth pages disagree on how long a VPD is valid (one or two years). If you applied to uni-assist on time, the VPD may be submitted up to 4 weeks after the deadline.",
    "The semester fee for 2027/28 is not yet published (€172 in winter 2026/27).",
    "The examination regulations (PDFs) could not be read in full; data comes from the programme and application web pages. The number of places is not stated.",
    "Foreign grades are converted with the Bavarian formula; whether a Turkish grade reaches the minimum is decided by the examination board.",
  ];

  const base = {
    university: "University of Bayreuth",
    city: "Bayreuth",
    state: "Bavaria",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    fees,
    interview: false,
    places: null,
    partialMinEcts: 150,
    test: { status: "none", accepted: [], note: "No GMAT or GRE is mentioned for this programme." },
    lastChecked: "2026-11-17",
  };

  const appBase = {
    route,
    vpd: true,
    vpdWeeks: 8,
    opensApprox: true,
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "ubt-bwl",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "finance", "marketing", "accounting"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German (selected modules in English)",
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bachelor in business administration from Bayreuth with grade 2.5 or better, or an equivalent degree. The examination board decides on equivalence during the application; no advance ruling. The page expects core business, economics (micro/macro), business law, and maths and statistics.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums. Expected foundations: general business administration, economics (micro and macro), business law, maths and statistics. Admission with conditions (up to 15 ECTS) is possible.",
      grade: {
        min: 2.5,
        selection: "Not competitive: admission if the degree is equivalent and the grade is 2.5 or better. A grade below 2.5 can be improved by 0.4 with at least 4 ECTS maths and 8 ECTS statistics (research methods) passed. The examination board decides monthly.",
      },
      english: { cefr: "none", ielts: null, toefl: null, englishMedium: "yes", note: "No English proof is listed for admission." },
      german: { cefr: "C1", note: "C1 is required unless your school-leaving certificate or first degree was in German. A thesis written in German can also count. TestDaF 4x4 or DSH-2 are accepted at C1." },
      application: {
        ...appBase,
        opens: "2027-04-15",
        deadline: "2027-07-15",
        note: "Examination board decides from 15 July for the winter semester. Apply early because the equivalence check takes time.",
      },
      documents: generalDocs,
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/betriebswirtschaftslehre" },
        { label: "Programme website and application info", url: "https://www.bwl.uni-bayreuth.de/de/master_bwl/bewerbung/index.html" },
        { label: "Examination regulations (all master programmes)", url: "https://www.amtliche-bekanntmachungen.uni-bayreuth.de/de/pruefungsordnungen/master/index.html" },
        ...commonSources,
      ],
      caveats: [
        "Minimum grade: the programme pages name 2.5 for Bayreuth BWL graduates; for other degrees, the board judges equivalence. The conditions page is dated for summer 2026.",
        "The programme page says conditional admission of up to 15 ECTS; other Bayreuth programmes allow 20 or 30.",
        ...commonCaveats,
      ],
      lastChecked: "2026-11-17",
    },
    {
      ...base,
      id: "ubt-de",
      name: "Digitalization and Entrepreneurship (Digitalisierung und Entrepreneurship)",
      fields: ["entrepreneurship", "management", "information-systems"],
      intake: "Winter only",
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Mainly business, business informatics or industrial engineering, or a closely related or interdisciplinary degree. Basic knowledge of business administration and (business) informatics is expected. The examination board decides on equivalence; a non-binding check is possible by email.",
      },
      ectsRules: [],
      ectsNote: "No subject minimums are published on the web pages. Admission with conditions (up to 20 ECTS) is possible.",
      grade: {
        min: null,
        selection: "The programme page states no minimum grade. It refers to an aptitude procedure described on the programme website, which was not accessible.",
      },
      english: { cefr: "none", ielts: null, toefl: null, englishMedium: "yes", note: "No English proof is listed for admission." },
      german: { cefr: "C1", note: "C1 proof is required. Accepted: DSH-2, TestDaF 4x4, DSD II, telc C1 Hochschule, Goethe C2 and others on the Studierendenkanzlei list." },
      application: {
        ...appBase,
        opens: "2027-03-01",
        deadline: "2027-07-15",
        note: "Winter intake only. Same window for EU and non-EU applicants.",
      },
      documents: generalDocs,
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/digitalisierung-und-entrepreneurship" },
        { label: "Programme website", url: "https://www.de.uni-bayreuth.de" },
        ...commonSources,
      ],
      caveats: [
        "Aptitude procedure (Eignungsverfahren): the programme page says to read the programme website but gives no details, so grade limits and selection steps are unverified.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "ubt-econ",
      name: "Economics (M.Sc.)",
      fields: ["economics", "analytics"],
      intake: "Winter & summer",
      languageKey: "English",
      language: "English (all compulsory courses and most electives; the university page also says German and English)",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Bachelor in economics from a university with a good international reputation, with a curriculum similar to Bayreuth's. Other bachelors need at least 35 ECTS in methodological core courses (maths, statistics, microeconomics, macroeconomics, econometrics) at a sufficiently advanced level. Each application is reviewed individually.",
      },
      ectsRules: [[{ cats: ["economics", "math", "statistics"], min: 35, label: "Micro, macro, econometrics, statistics and maths core courses" }]],
      ectsNote: "The 35 ECTS rule is stated for non-economics bachelors and European degrees. The most common reason for rejection is a non-economics bachelor without enough core economics.",
      grade: {
        min: 2.5,
        selection: "Qualifications must be judged equal to a 2.5 or better in the Bayreuth BSc Economics. This is assessed individually; there is no simple grade conversion.",
      },
      test: {
        status: "conditional",
        accepted: ["GRE"],
        note: "GRE General Test is required for a degree from a non-EU university without a Partnership/Learning Agreement with Bayreuth. Scores must be in the top 25%. The page gives no point values. No GMAT mentioned.",
      },
      english: {
        cefr: "B2",
        ielts: 6.5,
        toefl: 80,
        englishMedium: "no",
        note: "B2 proof is required. The IELTS and TOEFL values are the university's orientation values (TOEFL iBT 80 on the old scale). Waived only with a university degree from an English-language programme in Australia, Ireland, New Zealand, the UK or the USA. An English-taught degree from another country is not enough on its own.",
      },
      german: null,
      extraLanguage: "German A1 is required, ideally at application and at the latest within the first year (the general rule says by the end of semester 2).",
      application: {
        ...appBase,
        opens: "2027-03-01",
        deadline: "2027-07-15",
        note: "The programme recommends non-EU applicants apply by 1 June. Admission is confirmed by email and in CAMPUSonline; the offer can be used for the visa.",
      },
      documents: [
        "CV",
        "English proof (B2, unless waived)",
        "German proof (A1, unless deferred)",
        "Secondary school leaving certificate",
        "Degree proof and transcripts listing all courses and grades",
        "Grading scale of your university",
        "GRE General Test scores (non-EU degree without partnership)",
        "uni-assist VPD",
        translationDoc,
      ],
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/economics" },
        { label: "Admission without a German degree", url: "https://www.econmsc.uni-bayreuth.de/en/prospective-students/deadlines-application-faq/appl-without-german-degree/index.html" },
        { label: "Deadlines and application FAQ", url: "https://www.econmsc.uni-bayreuth.de/en/prospective-students/deadlines-application-faq/index.html" },
        { label: "Examination regulations (EN, 2023)", url: "https://www.amtliche-bekanntmachungen.uni-bayreuth.de/de/amtliche-bekanntmachungen/englischeSatzungen/2023-059-EN-PSO-MA-Economic-_Volkswirtschaft.pdf" },
        ...commonSources,
      ],
      caveats: [
        "Language: the programme website says it is fully English-taught, while the university programme page says it is taught in German and English.",
        "GRE: the admission page says the GRE is needed for non-EU degrees without a partnership, but the FAQ page does not list it. Check with econmsc@uni-bayreuth.de whether it applies to a Turkish degree.",
        "Semester fee: the programme FAQ says about €165, the Studierendenkanzlei says €172 for winter 2026/27.",
        "Partial degree: no rule stated on the programme pages; the 150 ECTS figure is the common Bayreuth master rule and was not confirmed for Economics.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "ubt-iwg",
      degree: "M.A.",
      name: "International Economics and Governance (Internationale Wirtschaft und Governance)",
      fields: ["economics", "management"],
      intake: "Winter & summer",
      languageKey: "German/English",
      language: "German and English (partly English-taught)",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "Bayreuth bachelors in Economics, International Economics and Development, Business Administration, Philosophy and Economics or Health Economics, or an equivalent degree. The examination board decides on equivalence; no advance ruling.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums are published. Admission with conditions (up to 30 ECTS) is possible.",
      grade: {
        min: 2.5,
        selection: "Degree with grade 2.5 or better (Bayreuth bachelor or equivalent). No aptitude test is mentioned.",
      },
      english: { cefr: "B2", ielts: 6.5, toefl: 80, englishMedium: "conditional", note: "B2 is required. IELTS and TOEFL values are the university's orientation values. Whether an English-taught Turkish bachelor counts is decided case by case (the university says an English-taught degree alone is not automatic proof)." },
      german: { cefr: "B2", note: "B2 German is required. Accepted: DSH-1, TestDaF 3x4+ (14 points), Goethe B2, telc B2, ÖSD B2." },
      application: {
        ...appBase,
        opens: "2027-04-15",
        deadline: "2027-07-15",
      },
      documents: generalDocs,
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/internationale-wirtschaft-und-governance" },
        { label: "Programme website", url: "https://www.iwg.uni-bayreuth.de/de/index.html" },
        ...commonSources,
      ],
      caveats: [
        "Degree label is M.A. per the deadline table; the programme page was not checked for the degree name beyond that.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "ubt-goe",
      name: "Health Economics (Gesundheitsökonomie)",
      fields: ["health", "economics", "management"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bayreuth bachelor in Health Economics with grade 2.5 or better, or an equivalent degree. The examination board decides on equivalence; a non-binding check is possible by email to bwl5@uni-bayreuth.de.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums are published. Admission with conditions (up to 20 ECTS) is possible.",
      grade: {
        min: 2.5,
        selection: "If the grade requirement is not met, an aptitude procedure under Annex 2 of the examination regulations applies, possibly with an interview. Details were not accessible.",
      },
      english: { cefr: "none", ielts: null, toefl: null, englishMedium: "yes", note: "No English proof is listed." },
      german: { cefr: "B2", note: "B2 German is required. Accepted: DSH-1, TestDaF 3x4+, Goethe B2, telc B2, ÖSD B2." },
      application: {
        ...appBase,
        opens: "2027-04-15",
        deadline: "2027-07-15",
        note: "Same window for EU and non-EU applicants.",
      },
      documents: generalDocs,
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/gesundheitsoekonomie" },
        { label: "Programme website", url: "https://www.goe.uni-bayreuth.de/de/master/index.html" },
        ...commonSources,
      ],
      caveats: [
        "A part-time option exists. The aptitude procedure (and possible interview) for applicants below 2.5 is described only in the examination regulations, which could not be read.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "ubt-wi",
      name: "Business Informatics (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics", "management"],
      intake: "Winter & summer",
      languageKey: "German/English",
      language: "German and English (aimed at German speakers, but can be completed with English-only courses)",
      bachelorFields: {
        standard: ["quantitative", "business"],
        relatedAllowed: true,
        note: "Bayreuth bachelor in Business Informatics with grade 2.5 or better, or an equivalent degree. The examination board decides on equivalence; no advance ruling.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums are published. Admission with conditions (up to 20 ECTS) is possible. No admission restriction (no numerus clausus).",
      grade: {
        min: 2.5,
        selection: "Not competitive: admission if the degree is equivalent and the grade is 2.5 or better. No aptitude test is mentioned.",
      },
      english: { cefr: "none", ielts: null, toefl: null, englishMedium: "yes", note: "No separate English proof is listed. If you study in English, German A1 is still needed by the end of semester 2 (see caveats)." },
      german: { cefr: "B2", note: "B2 German is required. Accepted: DSH-1, TestDaF 3x4+, Goethe B2, telc B2, ÖSD B2." },
      application: {
        ...appBase,
        opens: "2027-04-15",
        deadline: "2027-07-15",
      },
      documents: generalDocs,
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/wirtschaftsinformatik" },
        { label: "Programme website", url: "https://www.winfo.uni-bayreuth.de/" },
        ...commonSources,
      ],
      caveats: [
        "The page requires B2 German and also describes English-only study. It is not clear whether English-only students can skip the B2 rule.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "ubt-spoeko",
      name: "Sports Economics (Sportökonomie)",
      fields: ["management", "economics"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German",
      notice: { type: "info", text: "This programme belongs to the Faculty of Cultural Studies but is business-focused. It is the most selective Bayreuth programme listed here (grade 1.9)." },
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bayreuth bachelor in Sports Economics, Business Administration, Health Economics or Sport/Economics teacher training with grade 1.9 or better, or an equivalent degree. The examination board decides on equivalence.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums are published. Admission with conditions is not provided for.",
      grade: {
        min: 1.9,
        selection: "Grade 1.9 or better. A weaker grade can be improved under Annex 2, point 5 of the examination regulations; applicants with 2.0 or worse may request an improvement.",
      },
      english: { cefr: "none", ielts: null, toefl: null, englishMedium: "yes", note: "No English proof is listed." },
      german: { cefr: "B2", note: "B2 German is required. Accepted: DSH-1, TestDaF 3x4+, Goethe B2, telc B2, ÖSD B2." },
      application: {
        ...appBase,
        opens: "2027-04-15",
        deadline: "2027-07-31",
        note: "Same window (15 April to 31 July) for EU and non-EU applicants.",
      },
      documents: generalDocs,
      sources: [
        { label: "Programme page", url: "https://www.uni-bayreuth.de/master/sportoekonomie" },
        { label: "Programme website", url: "https://www.sport.uni-bayreuth.de/de/studium/master-sportoekonomie/index.html" },
        ...commonSources,
      ],
      caveats: [
        "The total ECTS (120) is assumed from the 4-semester duration; the page does not state it.",
        "The grade improvement rules in Annex 2 of the examination regulations were not read.",
        ...commonCaveats,
      ],
    },
  ]);
})();
