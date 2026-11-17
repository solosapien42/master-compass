/* University of Regensburg – Faculty of Business, Economics and Management Information Systems (plus M.Sc. Business Information Systems of the Faculty of Informatics and Data Science). Checked 2026-11-18. */
(function () {
  const stg = "https://www.uni-regensburg.de/studieren/wege-ins-studium/studiengangsfinder/master/";
  const src = {
    list: { label: "Master programmes of the business faculty", url: "https://www.uni-regensburg.de/wirtschaftswissenschaften/studieren/studieninteressierte/studienangebot-master" },
    faq: { label: "Faculty FAQ for prospective students", url: "https://www.uni-regensburg.de/wirtschaftswissenschaften/fakultaet/gremien-services/studienberatung/faqs-studieninteressierte" },
    pso: { label: "Master examination regulations BWL / Economics / Real Estate (PDF, German, binding)", url: "https://www.uni-regensburg.de/fileadmin/user_upload/bilderkatalog/ordnungen-satzungen-richtlinien/studium/pruefungsordnungen/Master/M.Sc/BWL_Economics_VWL_und_IMMO/0925_AE_MSc_BWL__VWL__IMMO_PSO_endg.pdf" },
    costs: { label: "Costs of studying for international students (no tuition, semester fee)", url: "https://www.uni-regensburg.de/international/wege-nach-regensburg/studienabschluss-an-der-ur/studien-lebenskosten" },
    intl: { label: "International degree-seeking applicants", url: "https://www.uni-regensburg.de/international/wege-nach-regensburg/studienabschluss-an-der-ur/bewerbung" },
  };

  const notice = {
    type: "warning",
    text: "Regensburg's admission regulations (PDF) could not be read automatically, so the details here come from the official programme pages and FAQ. Dates are the published 2026 pattern, not yet confirmed for 2027. Bavaria allows universities to charge non-EU students tuition (Erlangen and Munich do). Regensburg states it charges none, but check before applying.",
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€199 per semester (as of summer 2026), incl. semester ticket for the RVV region",
    tuitionNote: "The University of Regensburg states that it charges no tuition fees for international students (International Office page, status summer 2026). Bavarian law lets universities introduce fees for non-EU students, and some Bavarian universities have done so. No Regensburg fee for 2027/28 was found, but this was not confirmed in writing for that semester.",
    other: "Semester fee may change. No application fee is stated on the pages.",
  };

  const sharedCaveats = [
    "Tuition: Regensburg says it charges non-EU students no tuition (status summer 2026). Bavarian law allows fees, so confirm for winter 2027/28 before applying.",
    "The binding admission regulations (PDF) could not be read automatically. Requirements here come from the programme pages and may differ in detail. The pages say they are not legally binding.",
    "The 2027 application window is not yet published. 1 May to 1 June is the pattern shown on the current programme pages. The page does not say whether 1 June is the same for non-EU applicants.",
    "Whether non-EU applicants need uni-assist is unclear. The International Office says master's applicants apply to the faculty directly and register centrally only after admission. Only the Business Information Systems page names a uni-assist VPD.",
    "Places, interviews, past cut-offs and a full document checklist are not published on the programme pages. The faculty says it cannot judge chances in advance and decides one to two months after the deadline.",
    "Practical experience does not count for admission. All required ECTS must be shown with grades by the deadline. A rule for applicants who have not yet graduated was not verifiable beyond a current transcript being accepted if the certificate is missing.",
  ];

  const base = {
    university: "University of Regensburg",
    city: "Regensburg",
    state: "Bavaria",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter & summer",
    notice,
    fees,
    test: { status: "none", accepted: [], note: "No GMAT/GRE required. The faculty states that TOEFL/GMAT are not needed. Admission depends mainly on the bachelor grade and credit points." },
    lastChecked: "2026-11-18",
  };

  const application = (note) => ({
    route: "Online in the SPUR applicant portal. International applicants use the separate International Office page (go.ur.de/io-bewerbung). Master's programmes apply to the faculty directly.",
    vpd: false,
    opens: "2027-05-01",
    opensApprox: true,
    deadline: "2027-06-01",
    note,
  });

  const englishB2 = (medium, note) => ({
    cefr: "B2",
    ielts: null,
    toefl: null,
    englishMedium: medium,
    note,
  });

  const germanC1 = {
    cefr: "C1",
    note: "Required for applicants with a foreign university entrance qualification (DSH-2 level = C1). The programme page does not name other accepted tests.",
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "ur-bwl",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "finance", "marketing", "accounting", "supply-chain", "analytics"],
      languageKey: "German/English",
      language: "German and English (modules in both languages; 2 of 8 specialisations plus a third)",
      bachelorFields: {
        standard: ["business", "economics", "finance"],
        relatedAllowed: false,
        note: "Business-related (wirtschaftswissenschaftlich) bachelor degree required. Regular degree time of at least 6 semesters.",
      },
      ectsRules: [[{ cats: ["business"], min: 48, label: "Business administration" }]],
      ectsNote: "At least 48 ECTS in business administration. Grade 2.50 or better is enough. With a grade of 2.51 to 2.80 you also need a business-related bachelor thesis graded 2.30 or better.",
      grade: {
        min: 2.8,
        selection: "Aptitude assessment by the committee on grade and ECTS (no NC, no ranking published). The committee may invite you to an interview if suitability is unclear.",
        historicalNote: "No past cut-offs published.",
      },
      english: englishB2("conditional", "B2 required. The Economics page says an entirely English-taught degree only needs proof of the language of instruction. The BWL page does not repeat this, so ask the faculty about an English-taught Turkish bachelor."),
      german: germanC1,
      application: application("The Honors track is a separate application and needs grade 2.0, a motivation letter and an interview. It does not replace the regular application."),
      interview: false,
      documents: [
        "Bachelor certificate or current transcript",
        "Tabular CV with certificates",
        "Detailed grade list with ECTS (non-Regensburg applicants)",
        "English proof (B2)",
        "German proof (foreign entrance qualification)",
        "Passport copy and other documents of the International Office page",
        "Module descriptions of your bachelor (not stated, bring them)",
      ],
      sources: [{ label: "Programme page", url: stg + "betriebswirtschaftslehre-msc" }, src.list, src.faq, src.pso, src.costs, src.intl],
      lastChecked: "2026-11-18",
      caveats: [
        ...sharedCaveats,
        "Older regulations required only 12 ECTS in business. The 2025 version of the regulations and the programme page say 48 ECTS.",
        "The programme page names German C1 (DSH-2) for applicants with a foreign entrance qualification. Check whether this applies to your degree, since many modules are in English.",
      ],
    },
    {
      ...base,
      id: "ur-economics",
      name: "Economics (Volkswirtschaftslehre)",
      fields: ["economics", "analytics"],
      languageKey: "English",
      language: "English (taught entirely in English)",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Economics bachelor, or a methods-focused degree (e.g. mathematics, statistics, CS) with grade 2.50 or better and economics basics.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 40, label: "Economics (20 micro/macro + 20 other)" },
          { cats: ["math", "statistics"], min: 15, label: "Maths / statistics / econometrics" },
        ],
        [
          { grade: 2.5, label: "Grade 2.5 or better" },
          { cats: ["economics"], min: 25, label: "Economics (20 micro/macro + 5)" },
          { cats: ["math", "statistics", "informatics"], min: 30, label: "Methods subjects (average 2.0 or better)" },
        ],
      ],
      ectsNote: "Economics degree: 20 ECTS micro and macro, 20 ECTS other economics, 15 ECTS maths/statistics/econometrics. Grade 2.51 to 3.00 also needs an average of 2.50 or better in one of the three areas. Methods-focused degree: 20 ECTS micro/macro, 30 ECTS methods subjects (average 2.0 or better) plus either a 6-week economics internship or 5 ECTS economics. We use 25 ECTS as the conservative total.",
      grade: {
        min: 3.0,
        selection: "Aptitude assessment by grade and ECTS. Grade worse than 3.00 is not admitted. No ranking or past cut-offs published.",
        historicalNote: "No past cut-offs published.",
      },
      english: englishB2("yes", "B2 required. Proof can be a certificate such as TOEFL/IELTS, or proof that English was the language of instruction of your degree (a certificate is then not needed). No IELTS/TOEFL minimum scores are published."),
      german: null,
      extraLanguage: "A1 German is required after the first semester.",
      application: application("The Honors track is a separate application (grade 2.0, motivation letter, interview)."),
      interview: false,
      documents: [
        "Bachelor certificate or current transcript",
        "Tabular CV with certificates",
        "Detailed grade list with ECTS",
        "English proof or proof of English as language of instruction",
        "Anabin check for foreign degrees (applicant's own check)",
        "Passport copy and other documents of the International Office page",
      ],
      sources: [{ label: "Programme page", url: stg + "economics-msc" }, src.list, src.faq, src.pso, src.costs, src.intl],
      lastChecked: "2026-11-18",
      caveats: [
        ...sharedCaveats,
        "No IELTS or TOEFL minimum scores are given.",
        "The ECTS alternative for methods-focused degrees is simplified. Internship or 5 ECTS economics are modelled as 25 ECTS total economics.",
      ],
    },
    {
      ...base,
      id: "ur-real-estate",
      name: "Real Estate (Immobilienwirtschaft)",
      fields: ["management", "finance", "economics"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "Economics degree, or a degree methodically close to real estate. The page does not name specific fields.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 12, label: "Economics (VWL)" },
          { cats: ["math", "statistics"], min: 12, label: "Methods (maths and statistics)" },
        ],
      ],
      ectsNote: "Grade 2.50 or better needs 12 ECTS economics and 12 ECTS maths/statistics. Grade 2.51 to 3.00 also needs an average of 2.50 or better in one area, plus one relevant internship or 5 ECTS real estate. A methodically related degree needs grade 2.50 or better, an average of 2.00 or better in one area, and the same internship or real estate ECTS.",
      grade: {
        min: 3.0,
        selection: "Aptitude assessment by grade and ECTS. No NC or ranking. A motivation letter was not found on the page.",
        historicalNote: "No past cut-offs published.",
      },
      english: englishB2("conditional", "B2 required. The page does not say whether an English-taught bachelor replaces a certificate. Ask the faculty."),
      german: germanC1,
      application: application("The page does not mention a motivation letter or interview."),
      interview: false,
      documents: [
        "Bachelor certificate or current transcript",
        "Tabular CV with certificates",
        "Detailed grade list with ECTS",
        "English proof (B2)",
        "German proof (foreign entrance qualification)",
        "Proof of internship or real estate ECTS if required",
      ],
      sources: [{ label: "Programme page", url: stg + "immobilienwirtschaft-msc" }, src.list, src.faq, src.pso, src.costs, src.intl],
      lastChecked: "2026-11-18",
      caveats: [
        ...sharedCaveats,
        "The German level is not named on the page. We assume C1 (DSH-2), as on the BWL page. The ECTS rule counts business bachelors as economics degrees, which we could not confirm.",
        "The page says both 'aptitude assessment' and 'no selection procedure'. Details are in the binding regulations.",
      ],
    },
    {
      ...base,
      id: "ur-business-information-systems",
      name: "Business Information Systems (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Run by the Faculty of Informatics and Data Science. Economics or computer science degree (150 ECTS in exams), or a related degree with strong maths, statistics and informatics.",
      },
      ectsRules: [
        [{ grade: 2.5, label: "Grade 2.5 or better" }],
        [
          { grade: 2.8, label: "Grade 2.8 or better" },
          { cats: ["math"], min: 12, label: "Mathematics" },
          { cats: ["statistics"], min: 12, label: "Statistics" },
        ],
        [
          { grade: 2.5, label: "Grade 2.5 or better" },
          { cats: ["math"], min: 30, label: "Mathematics (average 2.0 or better)" },
          { cats: ["statistics"], min: 30, label: "Statistics (average 2.0 or better)" },
          { cats: ["informatics"], min: 30, label: "Basic informatics / business informatics" },
        ],
      ],
      ectsNote: "All routes also need 12 ECTS of subject knowledge in Digital Business, IT Security or Data Science & AI Applications (average 2.50 or better). You may finish these within one year after starting. The first two routes are for economics or computer science degrees (the second for grades 2.51 to 2.80). The third is for related degrees and has further requirements in the regulations.",
      partialMinEcts: 150,
      grade: {
        min: 2.8,
        selection: "Aptitude assessment. No ranking or past cut-offs published.",
        historicalNote: "No past cut-offs published.",
      },
      english: englishB2("conditional", "B2 required. The page does not say whether an English-taught bachelor replaces a certificate."),
      german: germanC1,
      application: {
        route: "Online in the SPUR applicant portal. A uni-assist VPD is listed for applicants with a non-German degree.",
        vpd: true,
        opens: "2027-05-01",
        opensApprox: true,
        deadline: "2027-06-01",
        note: "Deadline pattern shown on the faculty page: 1 May to 1 June. A Honors track exists with a separate application.",
      },
      interview: false,
      documents: [
        "Bachelor certificate or current grade transcript",
        "Detailed CV with certificates",
        "Signed declaration for recognising foreign credits (if applicable)",
        "German proof (international applicants)",
        "VPD from uni-assist (non-German degree)",
        "English proof (B2)",
      ],
      sources: [
        { label: "Programme page", url: stg + "wirtschaftsinformatik-msc" },
        { label: "Faculty of Informatics and Data Science: admission and application", url: "https://www.uni-regensburg.de/informatik-data-science/studieren/studierende/bsc-msc-wirtschaftsinformatik" },
        src.costs,
      ],
      lastChecked: "2026-11-18",
      caveats: [
        ...sharedCaveats,
        "The 12 ECTS subject-knowledge requirement and the 'other prior knowledge' for related degrees are not modelled in the checker.",
        "The programme page says 'aptitude assessment' but also marks selection procedure as 'no'. The faculty page says the grade and ECTS rules apply.",
        "The faculty page asks for a VPD from uni-assist, while the International Office says master's applicants apply to the faculty directly. Ask the faculty which applies.",
      ],
    },
  ]);
})();
