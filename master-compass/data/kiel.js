/* Kiel University – Faculty of Business, Economics and Social Sciences (WiSo), plus the cross-faculty Business Information Technology master. Checked 2026-11-18. */
(function () {
  const wiso = "https://www.uni-kiel.de/en/wiso/studying/master/";

  const fees = {
    tuitionNonEU: 0,
    semester: "About €403 per semester in winter 2026/27 (semester contribution incl. public transport ticket)",
    tuitionNote: "No tuition fees in Schleswig-Holstein, also for non-EU students.",
    other: "uni-assist may charge a handling fee for international applications.",
  };

  const sharedCaveats = [
    "Dates are the published pattern for winter semester (apply 1 April to 31 May). The 2027 dates are not yet confirmed. Re-check before applying.",
    "The semester fee (about 403 euros) comes from the International Center re-registration page and the student union archive. Older Kiel pages still show lower figures (120 to 273 euros). Confirm the current amount.",
    "Kiel master's programmes are admission-free: there is no ranking and no past cut-off. You enrol if you pass the eligibility check, so the grade is a hard minimum only.",
    "The programme pages do not state the number of places, a full document list, or any GMAT/GRE requirement.",
  ];

  const englishC1 = {
    cefr: "C1",
    ielts: 6.5,
    toefl: 79,
    englishMedium: "yes",
    note: "C1 reading level. Accepted: a Bachelor's taught in English, TOEFL ITP 550, IELTS 6.5 or TOEFL iBT 79, or a school report with at least 4 years of English and an average of at least 07 points over the last four semesters. An English-taught bachelor from Turkey counts as proof, according to the programme page.",
  };

  const intlApp = {
    route: "International bachelor (also German citizens with foreign certificates): apply through uni-assist for the eligibility assessment. German bachelor: apply directly to the study programme adviser (1 June to 1 August).",
    vpd: false,
    opens: "2027-04-01",
    deadline: "2027-05-31",
    note: "International applicants apply to uni-assist between 1 April and 31 May for the winter semester. The pages advise planning at least 3 extra months for visa and scholarship steps. Late applications are not guaranteed to be considered. After a positive assessment you enrol online.",
  };

  const econDocs = [
    "Bachelor certificate (or provisional transcript)",
    "Transcript of records",
    "Proof of English (C1 reading)",
    "Uni-assist application for international bachelors",
    "Course descriptions showing the economics and quantitative ECTS",
  ];

  const base = {
    university: "Kiel University",
    city: "Kiel",
    state: "Schleswig-Holstein",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter & summer",
    fees,
    german: null,
    test: { status: "none", accepted: [], note: "No GMAT or GRE is mentioned on the programme pages." },
    interview: false,
    lastChecked: "2026-11-18",
  };

  const econGrade = {
    min: 2.5,
    selection: "Admission-free. No ranking: you need a positive eligibility assessment from the study programme adviser and a bachelor grade of 2.5 or better.",
    historicalNote: "No cut-offs exist because there is no selection.",
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "kiel-economics",
      name: "Economics",
      fields: ["economics"],
      languageKey: "English",
      language: "English (exceptions possible in supplementary subjects)",
      bachelorFields: {
        standard: ["economics", "business", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor of at least 3 years and 180 ECTS with a grade of 2.5 or better. 35 ECTS must come from economics and quantitative basics without overlap. Good linear algebra and analysis are recommended.",
      },
      ectsRules: [
        [
          { cats: ["economics", "math", "statistics"], min: 35, label: "Economics + quantitative basics" },
          { cats: ["math", "statistics"], min: 15, label: "Quantitative basics (analysis, algebra, statistics, econometrics)" },
        ],
      ],
      ectsNote: "Economics means micro- and macroeconomic theory. Courses with similar content count only once.",
      grade: econGrade,
      english: englishC1,
      application: intlApp,
      documents: econDocs,
      sources: [
        { label: "Programme page", url: wiso + "economics" },
        { label: "FAQ (Economics)", url: wiso + "economics/students/faq" },
      ],
      caveats: [
        ...sharedCaveats,
        "Partial-degree rule not stated for this programme. Ask the study adviser if you have not yet graduated.",
        "The binding rules are in the German examination regulations (FPO) and study qualification statutes, which we did not read.",
      ],
    },
    {
      ...base,
      id: "kiel-quantitative-economics",
      name: "Quantitative Economics",
      fields: ["economics", "analytics"],
      languageKey: "English",
      language: "English (some electives may be in German)",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor of at least 3 years and 180 ECTS with a grade of 2.5 or better. 35 ECTS in economics and quantitative basics, without overlap.",
      },
      ectsRules: [
        [
          { cats: ["economics", "math", "statistics"], min: 35, label: "Economics + quantitative basics" },
          { cats: ["math", "statistics"], min: 22, label: "Analysis/algebra (8) + statistics (10) + econometrics (4)" },
        ],
      ],
      ectsNote: "Required within the 35 ECTS: at least 10 ECTS micro- and macroeconomic theory, 8 ECTS analysis and algebra, 10 ECTS statistics, 4 ECTS econometrics. The checker sums the quantitative parts (22 ECTS) but cannot test each part separately.",
      grade: econGrade,
      english: englishC1,
      application: intlApp,
      documents: econDocs,
      sources: [{ label: "Programme page", url: wiso + "quantitative-economics" }],
      caveats: [
        ...sharedCaveats,
        "Partial-degree rule not stated for this programme.",
        "The binding rules are in the German examination regulations (FPO) and study qualification statutes, which we did not read.",
      ],
    },
    {
      ...base,
      id: "kiel-environmental-resource-economics",
      name: "Environmental and Resource Economics",
      fields: ["economics", "sustainability"],
      languageKey: "English",
      language: "English (German only as a language course)",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor of at least 3 years and 180 ECTS with a grade of 2.5 or better. 35 ECTS in economics and quantitative basics, without overlap.",
      },
      ectsRules: [
        [
          { cats: ["economics", "math", "statistics"], min: 35, label: "Economics + quantitative basics" },
          { cats: ["economics"], min: 15, label: "Micro (10) + macro (5) economics" },
          { cats: ["math", "statistics"], min: 15, label: "Quantitative basics" },
        ],
      ],
      ectsNote: "Required within the 35 ECTS: at least 10 ECTS microeconomics, 5 ECTS macroeconomics, 15 ECTS quantitative basics (analysis, algebra, statistics, econometrics).",
      grade: econGrade,
      english: englishC1,
      application: intlApp,
      documents: econDocs,
      sources: [{ label: "Programme page", url: wiso + "environmental-and-resource-economics" }],
      caveats: [
        ...sharedCaveats,
        "Partial-degree rule not stated for this programme.",
        "A search summary of an older Kiel page mentions a special rule for grades 2.6 to 3.0 in Quantitative Finance. It is not on the current pages we read. Ask the adviser if your grade is above 2.5.",
      ],
    },
    {
      ...base,
      id: "kiel-quantitative-finance",
      name: "Quantitative Finance",
      fields: ["finance", "analytics"],
      languageKey: "English",
      language: "English (exceptions possible in supplementary subjects)",
      bachelorFields: {
        standard: ["economics", "finance", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor of at least 3 years and 180 ECTS with a grade of 2.5 or better. 35 ECTS in economics and quantitative basics, without overlap, of which at least 20 must be quantitative.",
      },
      ectsRules: [
        [
          { cats: ["economics", "math", "statistics"], min: 35, label: "Economics + quantitative basics" },
          { cats: ["math", "statistics"], min: 20, label: "Quantitative basics (analysis, algebra, statistics, econometrics)" },
        ],
      ],
      grade: econGrade,
      english: englishC1,
      application: intlApp,
      documents: econDocs,
      sources: [
        { label: "Programme page", url: wiso + "quantitative-finance" },
        { label: "Prospective students (older page)", url: "https://www.wiso.uni-kiel.de/en/study/master/quantitative-finance/prospective-students/interested-students" },
      ],
      caveats: [
        ...sharedCaveats,
        "Partial-degree rule not stated for this programme.",
        "An older prospective-students page may mention a special rule for bachelor grades between 2.6 and 3.0. The current page states a 2.5 minimum only. Ask the adviser.",
      ],
    },
    {
      ...base,
      id: "kiel-business-administration",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "finance", "marketing", "accounting", "supply-chain", "analytics", "entrepreneurship"],
      languageKey: "German/English",
      language: "German and English (specialisations such as Controlling, Marketing, Supply Chain, Auditing, Taxation, Service Analytics)",
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Business administration bachelor or a related degree of at least 3 years. Economics or other degrees may be admitted conditionally. Motivation letters, references and vocational training are not considered. Kiel business bachelors can switch without applying.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 40, label: "Business administration" },
          { cats: ["economics"], min: 20, label: "Micro- and macroeconomic theory" },
          { cats: ["math", "statistics"], min: 20, label: "Analysis, algebra, statistics, econometrics" },
        ],
      ],
      ectsNote: "Only pure mathematics or statistics courses count as quantitative basics. Number-heavy business courses (cost accounting, public economics, operations research) do not. Courses with similar content count only once.",
      partialMinPct: 83,
      partialMinEcts: 150,
      grade: {
        min: 2.5,
        selection: "Admission-free. Excellence criterion: relative ECTS grade C, or top 65% of your graduating class, or a bachelor grade of 2.5 or better. A positive eligibility assessment is needed.",
        historicalNote: "No cut-offs exist because there is no selection.",
      },
      english: englishC1,
      german: {
        cefr: "C1",
        note: "The programme page asks for German C1 proof for enrolment. The admissions FAQ does not mention German. Accepted proofs on Kiel pages include DSH-2, TestDaF 4x4, telc Deutsch C1 Hochschule, Goethe C2, DSD II.",
      },
      application: {
        route: "Admission-free. International applicants are advised to use uni-assist (grade conversion) and contact the International Center. Then enrol online.",
        vpd: false,
        opens: "2027-04-01",
        opensApprox: true,
        deadline: "2027-05-31",
        note: "The Business Administration pages give no deadline. The date shown is the deadline of the sibling economics programmes for international applicants. Confirm with the International Center.",
      },
      documents: [
        "Bachelor certificate (provisional enrolment possible with at least 150 credits and a preliminary grade of 2.5 or better; certificate due after two semesters)",
        "Transcript of records with ECTS grade or class ranking, if available",
        "Proof of English (C1 reading)",
        "Proof of German (C1)",
        "Course descriptions for the subject ECTS",
      ],
      sources: [
        { label: "Programme page", url: wiso + "business-administration" },
        { label: "FAQ (admission requirements, section 6 FPO)", url: wiso + "business-administration/students/faq" },
      ],
      caveats: [
        ...sharedCaveats,
        "Language conflict: the programme page asks for German C1 and the FAQ does not mention German. Confirm with the study adviser whether non-German speakers can enrol.",
        "The teaching language is not stated. Many specialisations are probably taught in German. Check the module handbook.",
        "No application deadline is published for international applicants. The 31 May 2027 date is assumed from sibling programmes.",
        "The share of 83% for partial degrees is our calculation from 150 of 180 ECTS. The FAQ states 150 credits.",
      ],
    },
    {
      ...base,
      id: "kiel-business-information-technology",
      name: "Business Information Technology (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      languageKey: "German",
      language: "German (the page asks for German C1 and only B1 English)",
      notice: {
        type: "warning",
        text: "This master belongs to the Faculty of Engineering (computer science institute), not WiSo. Language, ECTS rules and deadlines could not be fully verified.",
      },
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in business informatics or a closely related degree (for example computer science with a business minor, or economics with an informatics minor). The examination board decides. Missing modules may not exceed 30 credit points.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums. Up to 30 credit points of missing modules are tolerated.",
      grade: {
        min: null,
        selection: "Admission-free. An aptitude assessment is needed. The pages we read do not state a minimum grade.",
        historicalNote: "No cut-offs exist because there is no selection.",
      },
      english: {
        cefr: "B1",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "B1 English is enough: German school-leaving certificate, or at least 3 years of basic English, or a B1 certificate, or GRE Verbal 145.",
      },
      german: {
        cefr: "C1",
        note: "DSH-2, TestDaF 4x4, DSD II, telc Deutsch C1 Hochschule, Goethe C2 or a German school-leaving certificate.",
      },
      application: {
        route: "Admission-free. Contact the International Center and the study adviser. No uni-assist or deadline is stated on the page.",
        vpd: false,
        opens: "2027-04-01",
        opensApprox: true,
        deadline: "2027-05-31",
        note: "No international deadline is published. The date shown is only a placeholder from the sibling programmes. Confirm with the International Center.",
      },
      documents: ["Bachelor certificate", "Transcript of records", "German proof (C1)", "English proof (B1)", "Module descriptions for the eligibility check"],
      sources: [
        { label: "Programme page (Faculty of Engineering)", url: "https://www.uni-kiel.de/en/tf/study/ma-business-informatics" },
        { label: "Examination regulations 2025 (German)", url: "https://www.studservice.uni-kiel.de/sta/fachpruefungsordnung-wirtschaftsinformatik-master-1-fach.pdf" },
      ],
      caveats: [
        ...sharedCaveats,
        "The teaching language is not stated. German C1 is required, so we assume German.",
        "The deadline is not published. The 31 May 2027 date is an assumption.",
        "Minimum grade, partial-degree rule and ECTS: not read from the regulations. Check the 2025 FPO.",
        "An English search summary of the FPO says B1 English suffices. The programme page confirms this.",
      ],
    },
  ]);
})();
