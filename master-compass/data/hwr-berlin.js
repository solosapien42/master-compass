/* Berlin School of Economics and Law (HWR Berlin) – Department of Business and Economics, English-taught master's. Checked 2026-11-18. */
(function () {
  const detail = "https://www.hwr-berlin.de/en/study/degree-programme/detail/";

  const src = {
    faq: { label: "HWR: FAQs on applying for master's programmes (requirements, English tests, selection, places)", url: "https://www.hwr-berlin.de/en/hwr-berlin/departments-and-bps/department-1-business-and-economics/studying-at-the-department/faqs-applying-for-master-degree-programmes" },
    deadlines: { label: "HWR: application deadlines", url: "https://www.hwr-berlin.de/en/study/how-to-apply/application-deadlines" },
    fee: { label: "HWR: semester fee (German)", url: "https://www.hwr-berlin.de/studium/studieren-an-der-hwr-berlin/studienorganisation/semesterbeitrag" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€379.77 per semester (semester fee incl. Berlin public transport ticket, current figure)",
    tuitionNote: "No tuition fees, also for non-EU students.",
    other: "uni-assist charges a processing fee.",
  };

  const application = {
    route: "Applicants with a non-German bachelor apply online through uni-assist. uni-assist checks the documents and forwards them to HWR Berlin. You can name up to three HWR master's programmes in order of priority.",
    vpd: false,
    opens: "2027-03-15",
    deadline: "2027-05-15",
    note: "Non-German bachelor: 15 March to 15 May. German bachelor: 15 April to 15 June. uni-assist recommends applying at least six weeks before the deadline. First offers mid-July, later offers until September. Programmes start only in the winter semester (1 October).",
  };

  const englishBase = {
    cefr: "B2",
    ielts: 6.0,
    toefl: 83,
    englishMedium: "yes",
    note: "High B2 proved by a standardised test: TOEFL iBT 83, IELTS 6.0, TOEIC Four Skills 1200, PTE Academic 67, Cambridge 170, Oxford Test of English 126 or UNIcert II. Certificates up to five years old. At least two semesters of higher education taught entirely in English also count. A GMAT replaces the English test. School-leaving certificates and DAAD language certificates are not accepted.",
  };

  const gmatOptional = {
    status: "optional",
    accepted: ["GMAT", "GMAT Focus"],
    note: "Not required. A GMAT or GMAT Focus above 600 improves your ranking and replaces the English test.",
  };

  const grade = {
    min: null,
    selection: "Ranking mainly by the overall bachelor grade, plus grades in relevant modules and at least one year of full-time work experience in the field. No minimum grade is published.",
  };

  const docsCommon = [
    "Bachelor certificate and transcript (or a provisional transcript with average grade and confirmation that you will graduate by 30 September)",
    "English test certificate (or a GMAT, or proof of two semesters taught in English)",
    "Letter of motivation in English",
    "CV in English",
    "Module descriptions showing the required subject courses",
    "Optional: proof of at least one year of full-time work experience in the field",
  ];

  const sharedCaveats = [
    "The winter 2027/28 dates are not announced yet. The dates here follow the current pattern (15 March to 15 May via uni-assist).",
    "HWR expects 210 ECTS. With 180 ECTS you must earn 30 more, usually through an internship in a 4th semester. uni-assist converts degrees from outside the ECTS system.",
    "HWR does not check eligibility before you apply. The admission board decides after the deadline whether your courses match.",
    "No past cut-off grades are published. HWR says it usually receives many more applications than places.",
  ];

  const base = {
    university: "Berlin School of Economics and Law (HWR Berlin)",
    institutionType: "applied",
    city: "Berlin",
    state: "Berlin",
    ects: 90,
    semesters: 3,
    intake: "Winter only",
    languageKey: "English",
    language: "English",
    german: null,
    application,
    fees,
    grade,
    interview: false,
    places: 35,
    documents: docsCommon,
    lastChecked: "2026-11-18",
  };

  const page = (slug, label) => ({ label: `Programme page: ${label}`, url: detail + slug });

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "hwr-international-economics",
      name: "International Economics",
      degree: "M.A.",
      fields: ["economics"],
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Bachelor in economics or an equivalent course of study, with undergraduate courses in microeconomics, macroeconomics and international economics.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums, but you must show completed courses in microeconomics, macroeconomics and international economics.",
      test: { status: "none", accepted: [], note: "No test required. A GMAT replaces the English test." },
      english: englishBase,
      sources: [page("23-international-economics", "International Economics"), src.faq, src.deadlines, src.fee],
      caveats: [
        ...sharedCaveats,
        "Double-degree options exist (EPoG2 and the Erasmus Mundus EPoG-JM). These have their own application rules.",
      ],
    },
    {
      ...base,
      id: "hwr-international-finance",
      name: "International Finance",
      degree: "M.Sc.",
      fields: ["finance"],
      bachelorFields: {
        standard: ["business", "finance", "economics"],
        relatedAllowed: true,
        note: "Bachelor in business studies or equivalent, with basic modules in capital market finance, corporate finance and statistics. A finance-related internship of at least 6 months is expected; without it you do an internship in a 4th semester.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums, but you must show completed modules in capital market finance, corporate finance and statistics.",
      test: gmatOptional,
      english: {
        ...englishBase,
        ielts: 6.5,
        toefl: 89,
        englishMedium: "no",
        note: "Only TOEFL, IELTS or GMAT are accepted. The programme page asks for TOEFL iBT 89 (or 4.5) or IELTS 6.5. The FAQ says TOEFL 83, so aim for 89. A GMAT replaces the English test.",
      },
      sources: [page("24-international-finance", "International Finance"), src.faq, src.deadlines, src.fee],
      caveats: [
        ...sharedCaveats,
        "TOEFL minimum conflicts: programme page 89, FAQ 83. We use 89.",
      ],
    },
    {
      ...base,
      id: "hwr-fact",
      name: "Finance, Accounting, Controlling and Taxation (FACT)",
      degree: "M.Sc.",
      fields: ["accounting", "finance"],
      places: 80,
      bachelorFields: {
        standard: ["business", "finance"],
        relatedAllowed: true,
        note: "Bachelor in business studies or equivalent. At least two of the four subjects finance, accounting, controlling and taxation, with at least 20 ECTS in total.",
      },
      ectsRules: [
        [{ cats: ["accounting"], min: 20, label: "Finance, accounting, controlling, taxation (at least two of these)" }],
      ],
      test: gmatOptional,
      english: englishBase,
      extraLanguage: "German at A1 or higher is helpful but not required.",
      sources: [page("15-fact-finance-accounting-controlling-und-taxation", "FACT"), src.faq, src.deadlines, src.fee],
      caveats: sharedCaveats,
    },
    {
      ...base,
      id: "hwr-global-supply-chain-operations",
      name: "Global Supply Chain and Operations Management",
      degree: "M.A.",
      fields: ["supply-chain", "management"],
      places: 40,
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bachelor in business studies or equivalent, with undergraduate courses in operations management, supply chain management, procurement, production management and logistics (the FAQ says at least 15 ECTS).",
      },
      ectsRules: [],
      ectsNote: "About 15 ECTS in operations, supply chain management and logistics are needed. The form cannot check this, so verify it on your transcript.",
      test: gmatOptional,
      english: englishBase,
      sources: [page("19-global-supply-chain-and-operations-management", "Global Supply Chain and Operations Management"), src.faq, src.deadlines, src.fee],
      caveats: [
        ...sharedCaveats,
        "The FAQ lists a GMAT above 600 among the requirements for this programme, while the programme page calls it helpful but not required. Ask the Master's office.",
      ],
    },
    {
      ...base,
      id: "hwr-ibc-human-resource-management",
      name: "International Business and Consulting: Human Resource Management",
      degree: "M.A.",
      fields: ["management"],
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bachelor in business studies or equivalent, with modules in human resource management, labour law and organisational design/behaviour worth at least 15 ECTS together.",
      },
      ectsRules: [],
      ectsNote: "At least 15 ECTS in HR management, labour law and organisational behaviour. The form cannot check this, so verify it on your transcript.",
      test: gmatOptional,
      english: {
        ...englishBase,
        englishMedium: "no",
        note: "Only standardised tests, with every part at high B2: TOEFL iBT 83, IELTS 6.0 in all parts, TOEIC 1200, PTE 67, Cambridge 170, Oxford 126 or UNIcert II. An English-taught bachelor does not count. A GMAT replaces the test.",
      },
      sources: [page("20-international-business-and-consulting-human-resource-management", "IBC: Human Resource Management"), src.faq, src.deadlines, src.fee],
      caveats: sharedCaveats,
    },
    {
      ...base,
      id: "hwr-ibc-strategic-management",
      name: "International Business and Consulting: Strategic Management",
      degree: "M.A.",
      fields: ["management"],
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bachelor in business studies or equivalent, with modules in strategic management, accounting and controlling, and operations management worth at least 15 ECTS together.",
      },
      ectsRules: [],
      ectsNote: "At least 15 ECTS in strategic management, accounting/controlling and operations management. The form cannot check this, so verify it on your transcript.",
      test: gmatOptional,
      english: {
        ...englishBase,
        englishMedium: "no",
        note: "Only standardised tests, with every part at high B2: TOEFL iBT 83, IELTS 6.0 in all parts, TOEIC 1200, PTE 67, Cambridge 170, Oxford 126 or UNIcert II. An English-taught bachelor does not count. A GMAT replaces the test.",
      },
      sources: [page("87-international-business-and-consulting-strategic-management", "IBC: Strategic Management"), src.faq, src.deadlines, src.fee],
      caveats: sharedCaveats,
    },
    {
      ...base,
      id: "hwr-international-marketing-management",
      name: "International Marketing Management",
      degree: "M.A.",
      fields: ["marketing"],
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bachelor in business studies or equivalent, with marketing modules (for example strategic marketing, marketing methods, consumer behaviour, international marketing) worth at least 15 ECTS.",
      },
      ectsRules: [],
      ectsNote: "At least 15 ECTS in marketing. The form cannot check this, so verify it on your transcript.",
      test: gmatOptional,
      english: {
        ...englishBase,
        ielts: 6.5,
        toefl: 89,
        note: "High B2: TOEFL iBT 89 (or 4.5), IELTS 6.5, TOEIC 1200, PTE 67, Cambridge 170, Oxford 126 or UNIcert II. Two semesters taught entirely in English also count. A GMAT replaces the test.",
      },
      sources: [page("26-international-marketing-management", "International Marketing Management"), src.faq, src.deadlines, src.fee],
      caveats: sharedCaveats,
    },
    {
      ...base,
      id: "hwr-business-intelligence-process-management",
      name: "Business Intelligence and Process Management",
      degree: "M.Sc.",
      fields: ["information-systems", "analytics"],
      places: 20,
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in business information systems, (applied) computer science with a business major, or business administration/engineering with an informatics or information systems major.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 10, label: "Business administration" },
          { cats: ["math", "statistics", "informatics"], min: 10, label: "Quantitative methods and/or databases" },
          { cats: ["informatics"], min: 10, label: "Computer science / business information systems" },
        ],
      ],
      ectsNote: "Databases count under quantitative methods, so a single block of informatics ECTS may not cover both informatics rules. HWR publishes a non-exhaustive list of matching subjects.",
      test: gmatOptional,
      english: {
        ...englishBase,
        note: englishBase.note + " If listening is scored separately, it must be at C1.",
      },
      extraLanguage: "German is helpful but not required.",
      sources: [page("13-business-intelligence-and-process-management", "Business Intelligence and Process Management"), src.faq, src.deadlines, src.fee],
      caveats: sharedCaveats,
    },
    {
      ...base,
      id: "hwr-political-economy-european-integration",
      name: "Political Economy of European Integration",
      degree: "M.A.",
      fields: ["economics"],
      bachelorFields: {
        standard: ["economics", "social"],
        relatedAllowed: true,
        note: "Degree in economics, political or social science, with modules in macroeconomics, political science (or similar) and/or European studies.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums, but you must show completed modules in macroeconomics, political science and/or European studies.",
      test: { status: "none", accepted: [], note: "No test required. A GMAT replaces the English test." },
      english: englishBase,
      sources: [page("30-political-economy-of-european-integration", "Political Economy of European Integration"), src.faq, src.deadlines, src.fee],
      caveats: sharedCaveats,
    },
  ]);
})();
