/* University of Duisburg-Essen (UDE). Checked 2026-11-17. */
/* Not included: M.Sc. BWL lines Internal Auditing & AI and Sustainability Management & Reporting
   (being discontinued, no enrolment after winter 2026/27), Wirtschaftsingenieurwesen (needs an
   industrial engineering bachelor), Digital Business Innovation and Transformation (EUR 18,000,
   needs work experience), VAWi (paid distance learning), Wirtschaftspaedagogik (teacher training). */
(function () {
  const intl = "https://www.uni-due.de/international/international-admissions-en.php";
  const feePage = "https://www.uni-due.de/studierendensekretariat/sozial_studierendenschaftsbeitrag.shtml";
  const msmAdmission = "https://www.msm.uni-due.de/studium/zulassungsverfahren-fuer-die-masterstudiengaenge/";

  const fees = {
    tuitionNonEU: 0,
    semester: "€367.80 per semester in winter 2026/27 and summer 2027 (incl. Deutschlandsemesterticket €226.80); the winter 2027/28 amount is not yet published",
  };

  const uniAssistRoute =
    "Non-EU: first step via uni-assist (listed on UDE's central international admissions page). UDE's International Office (Akademisches Auslandsamt) then decides on admission.";

  const routeConflict =
    "Application route: the central international admissions page (updated 2026-09-02) says this programme starts with uni-assist. The faculty page only says to apply via the Akademisches Auslandsamt / Zulassung International. Follow the central page and confirm with the International Office. Whether uni-assist issues a VPD or forwards a full application, and its fee, is not stated.";

  const yearCaveat =
    "Deadlines are UDE's standing yearly dates. They were not yet published specifically for winter 2027/28.";

  const feeCaveat = "Semester fee for winter 2027/28 not yet published (€367.80 in winter 2026/27).";

  const base = {
    university: "University of Duisburg-Essen",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter & summer",
    fees,
    interview: false,
    lastChecked: "2026-11-17",
  };

  // M.Sc. Betriebswirtschaftslehre, Mercator School of Management (Duisburg).
  // The line is chosen at application, so each line is a separate entry.
  const msm = {
    ...base,
    city: "Duisburg",
    languageKey: "German",
    language: "German (some parts in English)",
    bachelorFields: {
      standard: ["business", "economics"],
      relatedAllowed: true,
      note: "Bachelor with at least 180 ECTS in any field that meets the credit rules. Admission-free: no limit on places. You choose the line when you apply.",
    },
    ectsRules: [
      [
        { cats: ["business", "economics"], min: 75, label: "Economics and business (Wirtschaftswissenschaft)" },
        { cats: ["math", "statistics"], min: 15, label: "Quantitative methods" },
      ],
      [
        { cats: ["business", "economics"], min: 55, label: "Economics and business (Wirtschaftswissenschaft)" },
        { cats: ["math", "statistics"], min: 15, label: "Quantitative methods" },
        { grade: 2.0, label: "Bachelor grade 2.0 or better" },
      ],
    ],
    ectsNote: "Bachelor of at least 180 ECTS. With 55 to 74 ECTS in economics and business, you need a bachelor grade of 2.0 or better.",
    grade: { min: null, selection: "Admission-free: if you meet the requirements, you are admitted. No ranking." },
    test: { status: "none", accepted: [], note: "GMAT/GRE not mentioned." },
    english: {
      cefr: "none",
      ielts: null,
      toefl: null,
      englishMedium: "yes",
      note: "No English certificate required for admission. Some courses are taught in English.",
    },
    german: {
      cefr: "C2",
      note: "DSH-3 (TestDaF TDN 5 also listed) if German is not your native language and your degree was not fully taught in German. Must be proven before you start. UDE lists BWL Duisburg as one of only three programmes needing DSH-3.",
    },
    application: {
      route: uniAssistRoute,
      vpd: false,
      opens: "2027-05-01",
      deadline: "2027-07-31",
      note: "Central non-EU window for admission-free programmes: 1 May to 31 July. The MSM admission page says there are no application deadlines for its own portal.",
    },
    documents: [
      "Bachelor certificate (or current transcript if not finished)",
      "Full transcript of records",
      "School-leaving certificate",
      "Passport copy",
      "German certificate (DSH-3 or TestDaF TDN 5)",
    ],
    caveats: [
      "Application route: UDE's central international admissions page (updated 2026-09-02) lists Betriebswirtschaftslehre for uni-assist as the first step. The MSM admission page says non-EU applicants apply via the Akademisches Auslandsamt and does not mention uni-assist. Follow the central page and confirm with the International Office. Whether uni-assist issues a VPD or forwards a full application, and its fee, is not stated.",
      "Deadline: the MSM page says there are no deadlines; the central non-EU page gives 1 May to 31 July for admission-free programmes. 31 July is used here. " + yearCaveat,
      "Applying before graduating: the MSM page only says provisional enrolment is possible if a few credits are missing. No minimum ECTS is given.",
      "Which courses count as quantitative methods (math, statistics, possibly informatics) is decided by the faculty; not defined on the admission page.",
      feeCaveat,
    ],
  };

  const msmSources = (line, path) => [
    { label: "Admission (MSM)", url: msmAdmission },
    { label: line + " (MSM)", url: "https://www.msm.uni-due.de/studium/" + path + "/" },
    { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=17" },
    { label: "International admissions", url: intl },
    { label: "Semester fee", url: feePage },
  ];

  // Faculty of Economics and Business Administration (Essen)
  const wiwi = {
    ...base,
    city: "Essen",
    test: { status: "none", accepted: [], note: "GMAT/GRE not mentioned." },
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...msm,
      id: "ude-bwl-accounting-finance",
      name: "Business Administration – Accounting and Finance (M.Sc. Betriebswirtschaftslehre)",
      fields: ["accounting", "finance"],
      sources: msmSources("Accounting and Finance", "master-accounting-and-finance"),
    },
    {
      ...msm,
      id: "ude-bwl-finance-data-analytics",
      name: "Business Administration – Finance and Data Analytics (M.Sc. Betriebswirtschaftslehre)",
      fields: ["finance", "analytics"],
      sources: msmSources("Finance and Data Analytics", "master-finance-and-data-analytics"),
    },
    {
      ...msm,
      id: "ude-bwl-management-economics",
      name: "Business Administration – Management and Economics (M.Sc. Betriebswirtschaftslehre)",
      fields: ["management", "economics", "finance", "accounting"],
      sources: msmSources("Management and Economics", "master-management-and-economics"),
    },
    {
      ...msm,
      id: "ude-bwl-management-marketing",
      name: "Business Administration – Management and Marketing (M.Sc. Betriebswirtschaftslehre)",
      fields: ["marketing", "management"],
      sources: msmSources("Management and Marketing", "master-management-and-marketing"),
    },
    {
      ...msm,
      id: "ude-bwl-supply-chain-logistics",
      name: "Business Administration – Supply Chain Management and Logistics (M.Sc. Betriebswirtschaftslehre, technical lines)",
      fields: ["supply-chain", "analytics"],
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor with at least 180 ECTS. Only 30 ECTS of economics/business are needed, so quantitative degrees (math, engineering, CS) can also qualify. The line is fully quantitative (operations research, data analytics, programming, optimisation). Admission-free: no limit on places.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 30, label: "Economics and business (Wirtschaftswissenschaft)" },
          { cats: ["math", "statistics"], min: 15, label: "Quantitative methods" },
        ],
      ],
      ectsNote: "Bachelor of at least 180 ECTS. No grade rule for this line.",
      sources: msmSources("Supply Chain Management and Logistics", "master-supply-chain-management-and-logistics"),
    },
    {
      ...wiwi,
      id: "ude-eaf",
      name: "Business Administration – Energy and Finance (M.Sc. BWL – EaF)",
      fields: ["finance", "management"],
      languageKey: "German/English",
      language: "German and English (bilingual; exams partly in each language)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Aimed at graduates in economics/business or related fields (industrial engineering, business informatics, business mathematics). Restricted admission (local NC).",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 30, label: "Economics and business" },
          { cats: ["math", "statistics"], min: 18, label: "Math / statistics / econometrics" },
        ],
      ],
      partialMinEcts: 150,
      grade: {
        min: 3.0,
        selection: "Local NC: eligible applicants are ranked by a points system in which the bachelor grade has the largest weight. Full scheme in the faculty's admission and selection rules (PDF).",
      },
      english: {
        cefr: "B2",
        ielts: 6.5,
        toefl: 100,
        englishMedium: "no",
        note: "B2: TOEFL iBT 100 (CBT 250, PBT 600), IELTS 6.5, or a German Abitur with at least 5 points in English. An English-taught bachelor is not listed as proof.",
      },
      german: {
        cefr: "C1",
        note: "If you have a non-German school certificate: DSH-2 (DSH-3 preferred) or TestDaF TDN 4 (TDN 5 preferred); DSD II, ZOP, KDS or GDS also accepted.",
      },
      application: {
        route: uniAssistRoute,
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-06-15",
        eu: { deadline: "2027-07-15" },
        note: "Non-EU window 1 May to 15 June (faculty page and central page agree). The 15 July date on the programme overview applies to German/EU applicants only.",
      },
      documents: [
        "Tabular CV without photo",
        "School-leaving certificate",
        "Bachelor certificate (if available)",
        "Transcript of records with credits and grades",
        "English certificate",
        "German certificate (if applicable)",
        "Optional: internship or work references, study abroad proof",
      ],
      sources: [
        { label: "Admission (faculty)", url: "https://www.wiwi.uni-due.de/studium/master-studiengaenge/msc-bwl-eaf/zulassung/" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=18" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [
        routeConflict,
        "Number of places, point weighting and past NC cutoffs were not found on the pages checked. The selection rules PDF could not be read.",
        "The faculty's master overview calls EaF an English-taught master, but the programme and admission pages say bilingual German/English and ask for German proof.",
        "UDE does not allow applications with a pending German course for NC programmes, so German proof is needed when you apply.",
        yearCaveat,
        feeCaveat,
      ],
    },
    {
      ...wiwi,
      id: "ude-vwl",
      name: "Economics (M.Sc. Volkswirtschaftslehre)",
      fields: ["economics"],
      languageKey: "German",
      language: "German (some courses only in English; most literature in English)",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "Economics or a comparable economics-related degree (e.g. business, health management, business informatics, industrial engineering, business mathematics). Admission-free (no NC).",
      },
      ectsRules: [[{ cats: ["economics", "statistics"], min: 42, label: "Economics, statistics & econometrics" }]],
      ectsNote: "Statistics must cover descriptive and inductive statistics.",
      partialMinEcts: 150,
      grade: {
        min: 3.0,
        selection: "Admission-free. The bachelor grade should usually be 3.0 or better. Qualification is assessed with a points system that also counts internships and study abroad (criteria catalogue in the examination regulations).",
      },
      test: { status: "none", accepted: [], note: "GMAT/GRE not mentioned." },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No English certificate required for admission. Good English (especially reading) is expected.",
      },
      german: { cefr: "C1", note: "DSH-2 if your school-leaving certificate is not German." },
      application: {
        route: uniAssistRoute,
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-07-31",
        note: "Non-EU window 1 May to 31 July (faculty page and central page agree).",
      },
      documents: [
        "Bachelor certificate",
        "Transcript of records",
        "German certificate (if applicable)",
        "Proof of study abroad (if applicable)",
        "Optional: internship and work references",
      ],
      sources: [
        { label: "Application (faculty)", url: "https://www.wiwi.uni-due.de/studium/master-studiengaenge/msc-vwl/bewerbung/" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=106" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [
        routeConflict,
        "Subject credits: the faculty page asks for 42 ECTS in statistics, econometrics and economics. The central programme page also mentions at least 60 ECTS in business and economics. Check which rule applies to you.",
        "The grade rule says 3.0 'as a rule'; the points system can change the outcome.",
        yearCaveat,
        feeCaveat,
      ],
    },
    {
      ...wiwi,
      id: "ude-maerkte-unternehmen",
      name: "Markets and Companies (M.Sc. Märkte und Unternehmen)",
      fields: ["economics", "management"],
      languageKey: "German",
      language: "German (some electives may be in English)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Business or economics, or an equivalent economics-related degree. Focus on industrial economics and competition. Admission-free (no NC).",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Business + economics" },
          { cats: ["statistics", "economics"], min: 18, label: "Statistics + microeconomics" },
        ],
      ],
      ectsNote: "The 18 ECTS must be in statistics (descriptive and inductive) and microeconomics (consumer and firm theory); other economics does not count.",
      partialMinEcts: 150,
      grade: { min: 3.0, selection: "Admission-free: bachelor grade 3.0 or better plus the credit rules." },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No English certificate required. Good English is expected.",
      },
      german: { cefr: "C1", note: "DSH-2 (or TestDaF TDN 4) if your school-leaving certificate is not German." },
      application: {
        route: uniAssistRoute,
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-07-31",
        note: "Non-EU window 1 May to 31 July (faculty page and central page agree).",
      },
      documents: [
        "Bachelor certificate",
        "Transcript of records",
        "Module handbook of your bachelor programme",
        "German certificate (if applicable)",
      ],
      sources: [
        { label: "Application (faculty)", url: "https://www.wiwi.uni-due.de/studium/master-studiengaenge/msc-maerkte-und-unternehmen/bewerbung/" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=128" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [routeConflict, yearCaveat, feeCaveat],
    },
    {
      ...wiwi,
      id: "ude-gesundheitsoekonomik",
      name: "Health Economics (M.Sc. Gesundheitsökonomik)",
      fields: ["health", "economics"],
      languageKey: "German/English",
      language: "Fully English track, or bilingual German/English track (same content)",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "Economics or a comparable economics-related degree, or another suitable degree with an economics minor of at least 48 ECTS. Admission-free (no NC).",
      },
      ectsRules: [[{ cats: ["economics", "statistics"], min: 24, label: "Microeconomics, statistics & econometrics" }]],
      ectsNote: "The 24 ECTS must cover all three areas: microeconomics (consumer and firm theory), statistics and econometrics. Recommended: math (algebra, analysis) and basic health economics.",
      partialMinEcts: 150,
      grade: { min: 3.0, selection: "Admission-free: bachelor grade 3.0 or better plus the credit rules." },
      english: {
        cefr: "B2",
        ielts: 6.5,
        toefl: 100,
        englishMedium: "conditional",
        note: "B2 before you start: TOEFL iBT 100 or IELTS 6.5 (central page); the faculty also accepts Cambridge certificates or other equivalent proof.",
      },
      german: null,
      extraLanguage: "Bilingual track only: DSH-2 if your school-leaving certificate is not German.",
      application: {
        route: uniAssistRoute,
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-07-31",
        note: "Non-EU window 1 May to 31 July (faculty page and central page agree).",
      },
      documents: [
        "Bachelor certificate",
        "Transcript of records",
        "English certificate",
        "German certificate (bilingual track, if applicable)",
        "Proof of study abroad (if applicable)",
        "Optional: internship and work references",
      ],
      sources: [
        { label: "Application (faculty)", url: "https://www.wiwi.uni-due.de/studium/master-studiengaenge/msc-goemik/bewerbung/" },
        { label: "Programme (faculty)", url: "https://www.wiwi.uni-due.de/studiengang/goemik" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=19" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [
        routeConflict,
        "German: the faculty page asks for DSH-2 only for the bilingual track and lists no German proof for the English track. UDE's programme list shows the course as German-taught. Confirm with the faculty before relying on the English track without German.",
        yearCaveat,
        feeCaveat,
      ],
    },
    {
      ...wiwi,
      id: "ude-medizinmanagement",
      name: "Healthcare Management for Economists (M.A. Medizinmanagement für Wirtschaftswissenschaftler)",
      degree: "M.A.",
      fields: ["health", "management"],
      languageKey: "German",
      language: "German (good English reading skills expected)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Economics/business degree with at least 180 ECTS. Other degrees with at least 180 ECTS can be accepted on request if they include at least 30 ECTS of economics/business. Restricted admission (local NC). A separate variant exists for medicine and health-science graduates.",
      },
      ectsRules: [[{ cats: ["business", "economics"], min: 30, label: "Economics and business" }]],
      ectsNote: "Bachelor of at least 180 ECTS. The 30 ECTS rule only matters for degrees outside economics/business.",
      partialMinEcts: 150,
      grade: {
        min: 2.7,
        selection: "Local NC: places are allocated by ranking after the examination board checks eligibility. Ranking details are not published on the admission page.",
      },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No English certificate required. Good English for reading academic texts is expected.",
      },
      german: { cefr: "C1", note: "DSH-2 if you have neither a German school-leaving certificate nor a German degree." },
      places: 12,
      application: {
        route: uniAssistRoute,
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-06-15",
        eu: { deadline: "2027-07-15" },
        note: "Non-EU window 1 May to 15 June (faculty page and central page agree). The 15 July date on the programme overview is for German/EU applicants.",
      },
      documents: [
        "Transcript of records showing at least 150 ECTS with grades",
        "Bachelor certificate (if available)",
        "German certificate DSH-2 (if applicable)",
        "Optional: work or internship references",
      ],
      sources: [
        { label: "Admission (faculty)", url: "https://www.wiwi.uni-due.de/studium/master-studiengaenge/ma-medman-f-wiwi/zulassung/" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=71" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [
        routeConflict,
        "Only 12 places in winter (8 in summer). Past NC cutoffs were not checked.",
        "UDE does not allow applications with a pending German course for NC programmes, so German proof is needed when you apply.",
        yearCaveat,
        feeCaveat,
      ],
    },
    {
      ...wiwi,
      id: "ude-econometrics",
      city: "Dortmund",
      name: "Econometrics (M.Sc., joint with TU Dortmund and Ruhr University Bochum)",
      fields: ["economics", "analytics"],
      languageKey: "English",
      language: "English (some optional courses in German)",
      notice: {
        type: "info",
        text: "Joint programme of TU Dortmund, Ruhr University Bochum and UDE. You apply and enrol at TU Dortmund; courses take place at all three universities.",
      },
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "BSc in economics, statistics, mathematics or a related field. Degrees from other universities are assessed case by case. Admission-free: no numerus clausus.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 15, label: "Economics" },
          { cats: ["math", "statistics"], min: 25, label: "Math, statistics, econometrics, empirical economics" },
        ],
      ],
      ectsNote: "If you fall short of the credits, the joint examination committee may admit you on condition that you pass extra courses at TU Dortmund.",
      grade: {
        min: 2.7,
        selection: "No selection: if you meet the criteria, you get a place. TU Dortmund also requires an average of 3.0 or better in your math, statistics, econometrics and empirical economics modules.",
      },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "B2 proof: an internationally recognised certificate, an English-taught degree or a Medium of Instruction certificate. No test scores are specified.",
      },
      german: null,
      application: {
        route: "Non-EU: online via TU Dortmund's International Office (not UDE). uni-assist checks the foreign qualifications for TU Dortmund.",
        vpd: false,
        opens: "2027-01-01",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Non-EU window opens in January and closes 15 May for the winter semester. Plan 4 to 6 months for the visa.",
      },
      fees: {
        tuitionNonEU: 0,
        semester: "About €350 per semester at TU Dortmund (incl. public transport); exact 2027/28 amount not checked",
      },
      documents: [
        "TU Dortmund International Office document list",
        "Bachelor certificate (or preliminary certificate)",
        "English certificate",
        "Certificate of attendance from the mandatory online self-assessment",
        "Academic CV / essay on your academic background (max. three pages)",
      ],
      sources: [
        { label: "Admission (TU Dortmund)", url: "https://statistik.tu-dortmund.de/en/studies/degrees/econometrics-msc/admission/" },
        { label: "Application (TU Dortmund)", url: "https://statistik.tu-dortmund.de/en/prospective-students/application-enrollment/master-econometrics/" },
        { label: "Foreign students FAQ (TU Dortmund)", url: "https://statistik.tu-dortmund.de/en/prospective-students/faqs/enrollment-master-foreign-students/" },
        { label: "Programme website", url: "https://www.econometrics.ruhr/" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=187" },
      ],
      caveats: [
        "Grade: TU Dortmund's foreign-students FAQ and Ruhr University Bochum list a minimum bachelor grade of 2.7 and an average of 3.0 in quantitative modules. The main admission page lists no grade requirement.",
        "The essay length differs: econometrics.ruhr says up to two pages, TU Dortmund says up to three pages.",
        "Whether uni-assist charges a fee or issues a VPD for TU Dortmund is not stated on the programme pages.",
        "Total ECTS (120) and duration (4 semesters) were not confirmed on the pages checked.",
        yearCaveat,
      ],
    },
    {
      ...wiwi,
      id: "ude-sustainable-innopreneurship",
      name: "Sustainable Innopreneurship (M.Sc.)",
      fields: ["sustainability", "entrepreneurship", "management"],
      intake: "Winter only",
      languageKey: "German",
      language: "German (some courses in English)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "Open to graduates of all fields with a degree of at least 180 ECTS. No subject credit rules. Admission-free, but you must pass a subject-specific aptitude assessment.",
      },
      ectsRules: [],
      grade: {
        min: 2.5,
        selection: "Aptitude assessment after a formal check: a pitch video (max. 3 minutes) and a challenge sketch (about 4 pages). The grade is a secondary aspect but must be 2.5 or better.",
      },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "conditional",
        note: "B2. German school English (5 to 6 years, at least 5 points) is accepted. Other proofs, including an English-taught bachelor, are not specified.",
      },
      german: { cefr: "C1", note: "DSH-2 level under UDE's DSH rules." },
      application: {
        route: "Non-EU: UDE application portal (not on the uni-assist list). If you pass the formal check, you are invited by email to the aptitude assessment.",
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-07-31",
        note: "International applicants could start applying on 1 May for winter 2026/27. The programme deadline was 31 August 2026; the central non-EU deadline for admission-free programmes is 31 July, used here to be safe.",
      },
      documents: [
        "Tabular CV",
        "Bachelor certificate or current transcript",
        "English certificate",
        "German certificate (if applicable)",
        "Later: pitch video (max. 3 min) and challenge sketch (about 4 pages)",
      ],
      sources: [
        { label: "Application (programme)", url: "https://www.innopreneurship.de/masterbewerbung/" },
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=213" },
        { label: "Programme overview", url: "https://www.uni-due.de/think-free/sustainable-innopreneurship" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [
        "Deadline conflict: the programme gave 31 August (winter 2026/27) for everyone; the central non-EU page gives 31 July for admission-free programmes. Dates for winter 2027/28 are not yet published.",
        "The old M.A. Innopreneurship is being phased out; the M.Sc. started in winter 2024/25. Check that the M.Sc. admits students in winter 2027/28.",
        "Total ECTS (120) not confirmed on the pages checked.",
        feeCaveat,
      ],
    },
    {
      ...wiwi,
      id: "ude-wirtschaftsinformatik",
      name: "Information Systems (M.Sc. Wirtschaftsinformatik)",
      fields: ["information-systems"],
      languageKey: "German/English",
      language: "Bilingual: at least 30% and up to about 80% of courses in English, depending on your choices",
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: true,
        note: "Bachelor in information systems (Wirtschaftsinformatik), or an equivalent degree with a relevant specialisation in informatics or information systems, or informatics with a business specialisation. A pure business degree is not a standard route: the examination board checks each case and can admit you with extra modules (conditions). Admission-free (no NC).",
      },
      ectsRules: [],
      ectsNote: "No fixed credit minimums are published. The examination board checks subject fit.",
      partialMinEcts: 150,
      grade: { min: null, selection: "Admission-free. The examination board checks subject eligibility; no minimum grade is stated." },
      english: {
        cefr: "B2",
        ielts: 5.5,
        toefl: null,
        englishMedium: "yes",
        note: "B2, e.g. IELTS 5.5 overall with Reading and Writing at least 5.5, or a fully English-taught bachelor.",
      },
      german: { cefr: "C1", note: "DSH-2 if your school-leaving certificate is not German. Must be available when you submit your documents." },
      application: {
        route: uniAssistRoute + " The examination board also checks your subject background.",
        vpd: false,
        opens: "2027-05-01",
        deadline: "2027-07-15",
        note: "The programme page says apply by 15 July; the central non-EU window for admission-free programmes ends 31 July. 15 July is used here to be safe.",
      },
      documents: [
        "Bachelor certificate (or transcript with at least 150 ECTS)",
        "Transcript of records",
        "English certificate",
        "German certificate DSH-2 (if applicable)",
      ],
      sources: [
        { label: "Programme (UDE)", url: "https://www.uni-due.de/studienangebote/studiengang.php?id=111" },
        { label: "Regulations (faculty)", url: "https://www.ris.uni-due.de/studium/studienorganisation/ordnungen-und-dokumente-master/" },
        { label: "International admissions", url: intl },
        { label: "Semester fee", url: feePage },
      ],
      caveats: [
        "Application route: the central international admissions page lists Wirtschaftsinformatik for uni-assist as the first step; the programme page says Zulassung International handles it. Confirm with the International Office.",
        "Business graduates: no published rule says which business degrees qualify. A 2025 regulation change reportedly caps conditions at 30 ECTS. Ask the examination board (wi.master@uni-due.de) before applying.",
        "Total ECTS (120) and duration (4 semesters) were not confirmed on the pages checked.",
        yearCaveat,
        feeCaveat,
      ],
    },
  ]);
})();
