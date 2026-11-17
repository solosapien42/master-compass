/* Ruhr University Bochum (RUB) – Faculty of Management and Economics. Checked 2026-11-18. */
(function () {
  const wiwi = "https://www.wiwi.rub.de/";
  const apply = "https://studium.ruhr-uni-bochum.de/en/internationals-application-masters-degree";

  const src = {
    intl: { label: "RUB: application for international master's applicants", url: apply },
    intlProspective: { label: "RUB: application for international prospective students (German proof, dates)", url: "https://studium.ruhr-uni-bochum.de/en/application-international-prospective-students" },
    restricted: { label: "RUB: restricted-admission master's programmes (deadlines, selection)", url: "https://studium.ruhr-uni-bochum.de/de/bewerbung-fuer-zulassungsbeschraenkte-master-studiengaenge" },
    nc: { label: "RUB: past master's NC values (PDFs per semester)", url: "https://studium.ruhr-uni-bochum.de/de/masterstudiengaenge-nc-werte" },
    fee: { label: "RUB: semester contribution", url: "https://studium.ruhr-uni-bochum.de/de/rueckmeldung-und-sozialbeitrag" },
    overview: { label: "Faculty: study programmes overview", url: "https://www.wiwi.rub.de/en/study-programs-overview/" },
    catalogue: { label: "RUB programme catalogue", url: "https://studienangebot.ruhr-uni-bochum.de/de/uebersicht?field_sg_abschluss_value%5B2%5D=2" },
  };

  const notice = {
    type: "warning",
    text: "Bochum has not yet announced the application dates for winter 2027/28 (RUB says they will follow in due time). Dates here follow the 2026 pattern: master's portal opens in early June, deadline 15 July. The faculty's admission regulations (PDF) and the selection rules could not be read, so grade rules and the selection method are not confirmed. Re-check before applying.",
  };

  const fees = {
    tuitionNone: undefined,
    tuitionNonEU: 0,
    semester: "Semester contribution, about €350 per semester (figure from the Sales Management page; the official fee page gives no amount in the text we could read)",
    tuitionNote: "No tuition fees in North Rhine-Westphalia, also for non-EU students.",
  };
  delete fees.tuitionNone;

  const english = {
    cefr: "B2",
    ielts: null,
    toefl: 87,
    englishMedium: "yes",
    note: "English B2 is shown by a German Abitur, a fully English-taught bachelor's degree, or an international test such as TOEFL iBT 87 or an equivalent. The pages name no country restriction for the English-taught bachelor, so a fully English-taught Turkish bachelor should count. No IELTS score is published; ask the faculty for the equivalent.",
  };

  const german = {
    cefr: "C1",
    note: "International applicants need German proof (the pages say B2/C1). RUB accepts only certain certificates: TestDaF (16 points in total), DSH-2 or DSH-3, DSD II, Goethe C2 (ZOP) or KDS/GDS, ÖSD C1, telc Deutsch C1 Hochschule. These are C1-level, so plan for C1. Not needed if your school-leaving certificate was German.",
  };

  const portalRoute = "Apply online in the RUB application portal (HIO). No uni-assist and no VPD are mentioned. Upload certificates and transcript before the deadline. Do not upload CV, motivation letter, photo or references.";

  const application = {
    route: portalRoute,
    vpd: false,
    opens: "2027-06-01",
    opensApprox: true,
    deadline: "2027-07-15",
    note: "Winter-semester window: early June to 15 July. Missing proof documents (for example the transcript of records) may follow until 21 July. Higher-semester entry: 15 September. A mandatory advising meeting takes place after admission, before enrolment.",
  };

  const sharedCaveats = [
    "The winter 2027/28 dates are not announced yet. The dates here follow the 2026 pattern (early June to 15 July).",
    "The faculty's admission regulation (Prüfungsordnung 2020 and a 2024 amendment) could not be read as text, so the pages' ECTS figures were not checked against the binding text.",
    "No minimum grade, ranking method or past cut-off could be verified. RUB publishes past NC values only as PDFs for German and EU applicants. How non-EU applicants are ranked is not stated.",
    "The pages do not say how much of your degree may be missing at application beyond the 150 ECTS transcript rule. Ask wiwi-studium@rub.de.",
  ];

  const docsCommon = [
    "Copy of passport",
    "Bachelor certificate and transcript, or transcript of records with at least 150 ECTS",
    "Certified translations into German or English if needed",
    "Module handbooks / course descriptions of your bachelor",
    "English proof (B2) unless your bachelor was fully in English",
    "German proof (accepted certificate)",
    "APS certificate only for applicants with certificates from China, Vietnam or India",
  ];

  const base = {
    university: "Ruhr University Bochum",
    city: "Bochum",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter & summer",
    notice,
    english,
    application,
    fees,
    interview: false,
    lastChecked: "2026-11-18",
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "rub-management-economics",
      name: "Management and Economics",
      fields: ["management", "economics"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bachelor of 180 ECTS in economics and/or management (for example Management and Economics B.Sc.). Admission depends on the subject ECTS below.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 40, label: "Business administration" },
          { cats: ["economics"], min: 30, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Mathematics / statistics" },
        ],
      ],
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Admission-restricted (NC). The selection method is not described on the programme pages.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      german,
      documents: docsCommon,
      sources: [
        { label: "Programme page (faculty)", url: wiwi + "en/study-programms/master-management-economics-en/" },
        { label: "Programme page (RUB catalogue)", url: "https://studienangebot.ruhr-uni-bochum.de/de/management-and-economics/master-1-fach" },
        src.intl, src.intlProspective, src.restricted, src.nc, src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The programme page says international applicants need German at B2/C1 but does not say which exact certificate level. We list C1.",
        "Whether the Master's has 120 ECTS comes from a search summary of the examination regulation, not the programme page.",
      ],
    },
    {
      ...base,
      id: "rub-faact",
      name: "Finance, Accounting, Auditing, Controlling & Taxation (FAACT)",
      fields: ["accounting", "finance"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["business", "finance"],
        relatedAllowed: true,
        note: "Business or economics bachelor of 180 ECTS (for example Management and Economics B.Sc. or a business-focused two-subject B.A.). Admission depends on the subject ECTS below.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 60, label: "Business administration" },
          { cats: ["accounting"], min: 40, label: "of which finance, accounting, auditing, controlling, taxation" },
          { cats: ["economics", "math", "statistics"], min: 30, label: "Economics and/or mathematics / statistics" },
        ],
      ],
      ectsNote: "The 40 ECTS in finance, accounting, auditing, controlling and taxation are part of the 60 ECTS in business administration.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Admission-restricted (NC). The selection method is not described on the programme page, and no minimum grade is stated.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      german,
      documents: docsCommon,
      sources: [
        { label: "Programme page (faculty)", url: wiwi + "studiengaenge/master-faact/" },
        { label: "Programme page (RUB catalogue)", url: "https://studienangebot.ruhr-uni-bochum.de/de/finance-accounting-auditing-controlling-taxation/master-1-fach" },
        src.intl, src.intlProspective, src.restricted, src.nc, src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The page does not say how much of the 30 ECTS may be economics versus mathematics/statistics.",
        "The ECTS total (120) is assumed from the 4-semester duration; the page does not state it.",
      ],
    },
    {
      ...base,
      id: "rub-sales-management",
      name: "Sales Management",
      fields: ["marketing", "management"],
      languageKey: "German",
      language: "German (the programme page states no language; the RUB catalogue lists German)",
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Six-semester bachelor of 180 ECTS in an economics-related field, such as business administration, psychology or industrial engineering. Admission with up to 5 missing ECTS is possible in exceptional cases. A compulsory internship is part of the programme.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 25, label: "Business administration" },
          { cats: ["math", "statistics"], min: 15, label: "Mathematics / statistics" },
        ],
      ],
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "In-person get-to-know day (Kennenlerntag) with a small-group conversation. The admission grade combines the conversation grade and the bachelor grade. 45 applicants are invited and about 15 are admitted. A grade in the 2.x range is generally enough to be invited.",
      },
      test: { status: "none", accepted: [], note: "No test. Selection is by the get-to-know day." },
      german,
      application: {
        ...application,
        note: "Winter-semester window: early June to 15 July; missing documents until 21 July. The get-to-know day attendance is mandatory with no alternative date. Page names the next one as 28 Jan 2027, so dates for the winter 2027/28 round may differ.",
      },
      places: 15,
      interview: true,
      documents: [...docsCommon, "Transcript with average grade, stamped and signed by the examination office, if you apply before graduating (150 of 180 CP, or 180 of 210 CP)"],
      sources: [
        { label: "Programme page (Sales Management)", url: "https://smd.rub.de/masterstudiengang-sales-management/" },
        { label: "Programme page (RUB catalogue)", url: "https://studienangebot.ruhr-uni-bochum.de/de/sales-management/master-1-fach" },
        src.intl, src.intlProspective, src.restricted, src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The programme page does not state the language of teaching. The RUB catalogue says German. International applicants therefore need German proof.",
        "The page names the 28 January 2027 get-to-know day. It is not clear whether this belongs to the summer 2027 or winter 2027/28 round, or whether international applicants can attend in person.",
        "The 45-invited / 15-admitted figures are given for the get-to-know day; the places per intake are not stated.",
      ],
    },
    {
      ...base,
      id: "rub-economic-policy-consulting",
      name: "Economic Policy Consulting",
      fields: ["economics"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Completed economics bachelor. Six-semester bachelors in economics, East Asian economy and politics, geography, or social/political science with economic content are also named. A one-semester internship is compulsory (3rd semester).",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 40, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Mathematics / statistics" },
        ],
      ],
      ectsNote: "Second route: 20 ECTS economics plus 20 ECTS in East Asian economy and politics, geography, or social/political science with economic content, plus 15 ECTS maths/statistics. The checker cannot test the second 20 ECTS, so it only shows the 40 ECTS economics route.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "The faculty page calls it admission-restricted with a cap of about 15 students a year, but describes no selection method or grade threshold.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      german,
      application: { ...application, deadline: "2027-07-15" },
      places: 15,
      documents: docsCommon,
      sources: [
        { label: "Programme page (faculty)", url: wiwi + "studiengaenge/economic-policy-consulting/" },
        { label: "Programme page (RUB catalogue)", url: "https://studienangebot.ruhr-uni-bochum.de/de/economic-policy-consulting/master-1-fach" },
        src.intl, src.intlProspective, src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "Conflict: the faculty page says admission-restricted (about 15 places), the RUB catalogue says admission-free. Ask the faculty whether there is a ranking.",
        "The ECTS total (120) is assumed from the 4-semester duration; the page does not state it.",
      ],
    },
    {
      ...base,
      id: "rub-global-sustainability-economics",
      name: "Global Sustainability Economics",
      fields: ["economics", "sustainability"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Bachelor of 180 ECTS in economics or a related field with an economics or sustainability focus (for example development studies, international economics, sustainability studies). Missing 5 or 10 ECTS in economics, maths or statistics can be made up in the first semester if you are admitted.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 40, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Mathematics / statistics" },
        ],
      ],
      ectsNote: "Second route: 20 ECTS economics plus 20 ECTS in sustainability, plus 15 ECTS maths/statistics. The checker cannot test the sustainability ECTS, so it only shows the 40 ECTS economics route.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Admission-free: no ranking and no minimum grade is stated. Applicants who meet the requirements are admitted.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      german: null,
      application: {
        route: portalRoute,
        vpd: false,
        opens: "2027-06-01",
        opensApprox: true,
        deadline: "2027-07-15",
        note: "Non-EU deadline for winter: 15 July (EU citizens: 30 September; higher semester: 15 October). The opening date is assumed from the RUB master's pattern (early June). A mandatory advising meeting takes place after admission.",
      },
      documents: [
        "Copy of passport",
        "Bachelor certificate and transcript, or transcript of records with at least 150 ECTS",
        "Certified translations into German or English if needed",
        "Module handbooks / course descriptions of your bachelor",
        "English proof (B2) unless your bachelor was fully in English",
        "APS certificate only for applicants with certificates from China, Vietnam or India",
      ],
      sources: [
        { label: "Programme page (faculty)", url: wiwi + "studiengaenge/global-sustainability-economics/" },
        { label: "Programme page (RUB catalogue)", url: "https://studienangebot.ruhr-uni-bochum.de/de/global-sustainability-economics/master-1-fach" },
        src.intl, src.intlProspective, src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The page asks for a transcript of records with at least 150 ECTS but also states a 180 ECTS bachelor. Confirm with the programme advisor.",
        "Places are not stated. The ECTS total (120) is assumed from the 4-semester duration.",
        "Check whether the RUB opening date for this programme matches the general early-June master's window.",
      ],
    },
  ]);
})();
