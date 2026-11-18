/* RWTH Aachen University – School of Business and Economics. Checked 2026-11-17. */
(function () {
  const wiwi = "https://www.wiwi.rwth-aachen.de/cms/wirtschaftswissenschaften/studium/Studiengaenge/Masterstudiengaenge/";
  const central = "https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-aktuelle-studiengaenge/studiengangbeschreibung/";
  const deadlines = "https://www.rwth-aachen.de/cms/root/studium/Vor-dem-Studium/~bsottx/Bewerbungs-und-Einschreibefrist/lidx/1/";
  const intlApply = "https://www.rwth-aachen.de/go/id/dqml/lidx/1";
  const upo = "https://www.rwth-aachen.de/global/show_document.asp?id=aaaaaaaadlptbzt";
  const asta = "https://www.asta.rwth-aachen.de/en/about-us/finance/";

  const englishB2 = {
    cefr: "B2",
    ielts: 6.0,
    toefl: 90,
    englishMedium: "no",
    note: "B2 under the General Examination Regulations (June 2026): TOEFL iBT 90, IELTS 6.0, Cambridge B2 First (grade B), C1 Advanced, C2 Proficiency, PTE Academic 60 or UNIcert II. Exempt only if your school-leaving certificate or English-taught degree is from the UK, Ireland, Australia, New Zealand, Canada or the USA. Proof is due at enrolment at the latest.",
  };

  const base = {
    university: "RWTH Aachen University",
    city: "Aachen",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter & summer",
    fees: {
      tuitionNonEU: 0,
      semester: "≈ €358 per semester (latest AStA table: €358.34 incl. Deutschlandsemesterticket); the amount for 2027/28 is not yet published",
    },
    application: {
      route: "Online application via RWTHonline (central Student Secretariat); the faculty's examination board checks subject fit. No uni-assist step is mentioned.",
      vpd: false,
      opens: "2026-12-01",
      deadline: "2027-03-01",
      // EU applicants (and German-degree holders) of open-admission programmes: until 15 July. Opening date not stated.
      eu: { opens: null, deadline: "2027-07-15" },
      note: "Open-admission programmes: non-EU applicants apply 1 Dec – 1 Mar for winter (1 Jun – 1 Sep for summer). EU applicants and holders of a German degree have until 15 July. Deadlines are final and there is no extension for missing documents. You may apply before graduating; grades are needed for all semesters except the last two.",
    },
    interview: false,
    lastChecked: "2026-11-17",
  };

  const commonDocs = [
    "Transcript of records covering all semesters studied (except possibly the last two)",
    "Module descriptions or a link to the module catalogue",
    "CV in tabular form",
    "Language certificates (can be submitted until enrolment)",
    "Certified translation plus copy of the original for documents not in German or English (no notarised copies needed)",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "rwth-bwl",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "marketing", "entrepreneurship", "sustainability"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "A recognised degree in business or economics (wirtschaftswissenschaftlicher Abschluss). Other degrees only if the subject minimums are met. Specialisations: Corporate Development & Strategy, Operations Research Management, Sustainability & Corporations, Innovation/Entrepreneurship/Marketing.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 55, label: "Business + economics subjects" },
          { cats: ["economics"], min: 15, label: "General economics (VWL)" },
          { cats: ["business"], min: 30, label: "General business administration (BWL)" },
          { cats: ["math", "statistics"], min: 14, label: "Mathematics / statistics" },
        ],
      ],
      ectsNote: "The former 6 ECTS decision theory/OR requirement was dropped from the summer 2026 application round onwards. Exams still open at the deadline cannot be added later, except clearly identified compulsory modules. Missing subjects may lead to conditional admission (Auflagen).",
      grade: { min: null, selection: "No NC. One-stage check of subject and language requirements only." },
      test: { status: "none", accepted: [], note: "No GMAT, GRE or GTEBS. The programme is not on RWTH's GRE list (November 2026)." },
      english: englishB2,
      german: {
        cefr: "C1",
        note: "Required unless your school-leaving certificate or degree was German-taught: DSH-2, TestDaF 4 in all parts, DSD II, Goethe C1, ÖSD C1 or telc C1 Hochschule. Proof is due at enrolment.",
      },
      documents: [
        ...commonDocs,
        "Formblatt zur Überprüfung der fachlichen Kompetenzen (subject competency form, German/English)",
      ],
      sources: [
        { label: "Programme (faculty)", url: wiwi + "~uencd/Betriebswirtschaftslehre-M-Sc-/" },
        { label: "Programme (English)", url: "https://www.wiwi.rwth-aachen.de/cms/wirtschaftswissenschaften/studium/studiengaenge/masterstudiengaenge/~uencd/betriebswirtschaftslehre-m-sc-/?lidx=1" },
        { label: "Programme profile (RWTH)", url: central + "~bpyt/betriebswirtschaftslehre-m-sc-/?lidx=1" },
        { label: "Subject competency form", url: "https://www.wiwi.rwth-aachen.de/global/show_document.asp?id=aaaaaaaadifkgft" },
        { label: "General Examination Regulations 2026 (English)", url: upo },
        { label: "International master's application", url: intlApply },
        { label: "Deadlines", url: deadlines },
        { label: "Semester fee (AStA)", url: asta },
      ],
      caveats: [
        "IELTS: the German programme page says 6.0, the English page says 5.5. The current General Examination Regulations (June 2026) require 6.0 for B2, so plan for 6.0.",
        "The programme page says English proof is waived if your degree or school certificate was English-taught. The General Examination Regulations limit this waiver to the UK, Ireland, Australia, New Zealand, Canada and the USA. Confirm with the faculty before relying on an English-taught Turkish degree.",
        "The deadline table does not print a year. 1 Dec 2026 – 1 Mar 2027 is the standing rule for non-EU applicants to open-admission programmes.",
        "The semester fee is taken from the AStA table, which does not say which semester it covers. The Deutschlandsemesterticket share rises from winter 2026/27, so the 2027/28 fee will likely be slightly higher.",
      ],
    },
    {
      ...base,
      id: "rwth-msm",
      name: "Management Science and Mathematics",
      fields: ["analytics", "finance", "economics"],
      languageKey: "English",
      language: "English (some courses may be in German)",
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: true,
        note: "Prior studies must be comparable to RWTH's B.Sc. Business Mathematics (Wirtschaftsmathematik). Data science graduates may need Analysis III and Numerical Analysis II. Specialisations: Mathematical Optimization & Business Analytics, Statistics & Data Science, Mathematical Economics & Finance.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 30, label: "Economics & business" },
          { cats: ["business"], min: 10, label: "of which business administration" },
          { cats: ["economics"], min: 10, label: "of which economics" },
          { cats: ["math"], min: 30, label: "Mathematics" },
          { cats: ["statistics"], min: 10, label: "Stochastics / statistics" },
          { cats: ["informatics"], min: 10, label: "Programming & algorithms" },
        ],
      ],
      ectsNote: "Also about 10 ECTS optimisation/operations research. The mathematics must include at least 15 ECTS analysis and 9 ECTS linear algebra.",
      grade: { min: null, selection: "No NC. Subject requirements and GRE minimums (non-EU applicants)." },
      test: {
        status: "conditional",
        accepted: ["GRE"],
        note: "GRE General Test required for non-EU applicants: Quantitative above the 75th percentile, Verbal above the 15th percentile, Analytical Writing at least 3.5. Scores must be sent by ETS to RWTH (institution code 8504).",
      },
      english: englishB2,
      german: null,
      documents: [...commonDocs, "GRE General Test score (non-EU applicants)"],
      sources: [
        { label: "Programme profile (RWTH)", url: central + "~bhhese/mathematik-m-sc/?lidx=1" },
        { label: "Programme website", url: "https://wima.rwth-aachen.de/en/landing-page/" },
        { label: "Programme (faculty)", url: wiwi + "~bhstcm/Management-Science-and-Mathematics-M-Sc/?lidx=1" },
        { label: "RWTH GRE requirements (Nov 2026)", url: "https://www.rwth-aachen.de/global/show_document.asp?id=aaaaaaaacuuhvtx" },
        { label: "Exam regulations (2025/400)", url: "https://www.rwth-aachen.de/global/show_document.asp?id=aaaaaaaadflwrrs" },
        { label: "General Examination Regulations 2026 (English)", url: upo },
        { label: "International master's application", url: intlApply },
        { label: "Deadlines", url: deadlines },
      ],
      caveats: [
        "The subject ECTS minimums could not be read from the official exam regulations (protected PDF). They match a third-party summary of the regulations; the optimisation/OR minimum is given as 10 ECTS there and 9 ECTS in an earlier check.",
        "The official programme page says only that non-EU applicants need a GRE score. The minimum scores come from RWTH's GRE overview (November 2026), which is not legally binding. A third-party summary says EU/EEA citizens and German-educated applicants are exempt.",
        "If you get conditional admission with extra modules that are taught only in German, you may also need German proof.",
        "The deadline table does not print a year. 1 Dec 2026 – 1 Mar 2027 is the standing rule for non-EU applicants to open-admission programmes.",
      ],
    },
    {
      ...base,
      id: "rwth-mbe",
      name: "Management, Business and Economics (Wirtschaftswissenschaft, for STEM graduates)",
      fields: ["management", "economics", "entrepreneurship", "sustainability"],
      intake: "Winter only",
      languageKey: "German/English",
      language: "German and English",
      notice: {
        type: "info",
        text: "This programme is only for graduates in engineering, natural sciences, mathematics or computer science. Business and economics graduates are not admitted.",
      },
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: false,
        note: "A degree in engineering, natural sciences, mathematics or computer science. Not open to graduates of business or economics degrees. Specialisations as in Business Administration, plus General Management.",
      },
      ectsRules: [
        [
          { cats: ["math", "statistics", "informatics", "engineering"], min: 140, label: "Mathematics, computer science, natural sciences, engineering" },
          { cats: ["math", "statistics"], min: 15, label: "Higher mathematics and statistics" },
        ],
      ],
      ectsNote: "The 15 ECTS higher mathematics/statistics may be taken as extra modules alongside the first degree.",
      grade: {
        min: null,
        selection: "Restricted admission (NC for winter 2026). Ranking: bachelor grade 51%, GTEBS result 49%.",
      },
      test: {
        status: "optional",
        accepted: ["GTEBS"],
        note: "Not mandatory, but strongly recommended: without a GTEBS result the test part (49% of the ranking) counts as zero. A result is valid for one year. Applicants with a completed master's or Diplom are exempt.",
      },
      english: { ...englishB2, note: "B2: TOEFL iBT 90, IELTS 6.0, Cambridge CAE, FCE (grade B), or RWTH placement test MK7. Under the General Examination Regulations the waiver applies only to school certificates or degrees from the UK, Ireland, Australia, New Zealand, Canada or the USA." },
      german: {
        cefr: "C1",
        note: "Required unless your school-leaving certificate or degree was German-taught: DSH-2, TestDaF 4 in all parts, KMK II, Goethe C1, KDS/GDS or telc C1 Hochschule.",
      },
      application: {
        ...base.application,
        eu: undefined, // restricted admission: one window for everyone
        opens: "2027-05-01",
        deadline: "2027-07-15",
        note: "Restricted-admission programmes use the same window for all applicants, including non-EU: 1 May – 15 July for winter. Extra supporting documents are accepted until 1 August. Plan the GTEBS early: online dates in 2027 include January to early June.",
      },
      documents: [...commonDocs, "GTEBS result (strongly recommended)"],
      sources: [
        { label: "Programme (faculty)", url: wiwi + "~uendx/Wirtschaftswissenschaft-M-Sc-/" },
        { label: "Programme profile (RWTH)", url: central + "~bogb/wirtschaftswissenschaft-m-sc/?lidx=1" },
        { label: "GTEBS", url: "https://itb-academic-tests.org/en/universities/gtebs/" },
        { label: "General Examination Regulations 2026 (English)", url: upo },
        { label: "International master's application", url: intlApply },
        { label: "Deadlines", url: deadlines },
      ],
      caveats: [
        "NC status is set each year. RWTH lists the programme as restricted for winter 2026; if it becomes open-admission for winter 2027/28, the non-EU deadline would be 1 March 2027 instead of 15 July.",
        "The number of study places is not published.",
        "The faculty page still refers to the 2014 exam regulations; the requirements above should be checked against the current regulations.",
      ],
    },
  ]);
})();
