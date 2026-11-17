/* Freie Universität Berlin – School of Business & Economics (plus Economic Systems at the Institute for East European Studies and Data Science at Mathematics & Computer Science). Checked 2026-11-17. */
(function () {
  const fu = "https://www.fu-berlin.de/en/studium/studienangebot/master/";
  const wiwiss = "https://www.wiwiss.fu-berlin.de/";
  const amtsblatt = "https://www.fu-berlin.de/service/zuvdocs/amtsblatt/";
  const vpdPage = "https://www.fu-berlin.de/en/studium/bewerbung/master/konsekutive-masterstudiengaenge/uni-assist/index.html";
  const englishPage = "https://www.fu-berlin.de/en/studium/bewerbung/master/konsekutive-masterstudiengaenge/sprachliche-zugangsvoraussetzungen/index.html";
  const germanPage = "https://www.fu-berlin.de/en/studium/bewerbung/allgemein/deutschkenntnisse";
  const deadlinesPage = "https://www.fu-berlin.de/en/studium/bewerbung/bewerbungsfristen/index.html";
  const feesPage = "https://www.fu-berlin.de/en/studium/studienorganisation/immatrikulation/rueckmeldung/gebuehren/index.html";
  const placesPdf = amtsblatt + "2026/ab202026.pdf";

  const gradeScale60 = "grade up to 60 points (1.0 = 60, minus 2 points per 0.1 step, 4.0 = 0)";
  const quotaText = "80% of places go by these selection points; 20% go through a separate statutory quota (waiting time), and up to 5% can go to hardship cases.";

  const englishB2 = {
    cefr: "B2",
    ielts: 5.5,
    toefl: 72,
    englishMedium: "yes",
    note: "Not needed if your degree was taught in English (shown on the certificate, diploma supplement or a university letter). B2 tests: IELTS 5.5–6.5, TOEFL iBT 72–94, PTE Academic 59–75, Cambridge B2 First, telc B2, UNIcert II.",
  };
  const englishC1 = {
    cefr: "C1",
    ielts: 7.0,
    toefl: 95,
    englishMedium: "yes",
    note: "Not needed if your degree was taught in English (shown on the certificate, diploma supplement or a university letter). C1 tests: IELTS 7.0, TOEFL iBT 95, PTE Academic 76, Cambridge C1 Advanced (180+) or C2 Proficiency, UNIcert III.",
  };
  const germanC1 = {
    cefr: "C1",
    note: "Needed if your degree is from a foreign university or was not taught in German. To apply: C1, e.g. TestDaF 4/4/3/3, DSH-1, telc C1 Hochschule. To enrol: DSH-2, TestDaF 4 in all parts, telc C1 Hochschule (gut), Goethe C2 or DSD II (C1 in all parts). Admitted applicants without such a certificate may take FU's DSH exam.",
  };

  const base = {
    university: "Freie Universität Berlin",
    city: "Berlin",
    state: "Berlin",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter only",
    english: englishB2,
    german: germanC1,
    partialMinPct: 67,
    application: {
      route: "Request a VPD from uni-assist (select FU Berlin, 'alle Fächer - Master'), then apply in FU's online application portal and upload the VPD",
      vpd: true,
      vpdWeeks: 6,
      opens: "2027-04-15",
      opensApprox: true,
      deadline: "2027-05-31",
      note: "The admission regulation fixes 31 May as the deadline every year. FU publishes the exact 2027 window each March (usually 15 April – 31 May). The complete application, including the VPD, must be in the FU portal by the deadline. Documents cannot be added later. uni-assist needs 4–6 weeks for the VPD (longer in peak season), and a VPD is valid for one year.",
    },
    fees: {
      tuitionNonEU: 0,
      semester: "€376.80 per semester (winter 2026/27, incl. Deutschlandsemesterticket)",
    },
    test: { status: "none", accepted: [], note: "GMAT/GRE are not required and are not part of the selection." },
    interview: false,
    lastChecked: "2026-11-17",
  };

  const commonCaveats = [
    "The semester fee for winter 2027/28 is not yet published. The figure shown is for winter 2026/27.",
    "Place numbers are from FU's admission order for winter 2026/27. FU sets new numbers for each intake.",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "fu-mm",
      name: "Management & Marketing",
      fields: ["management", "marketing"],
      languageKey: "German/English",
      language: "Mainly German, some modules in English. The 3rd semester is planned at a partner university abroad (taught in English).",
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "A business administration bachelor (or an equivalent foreign degree). You also need a thesis or seminar paper of at least 12 pages (in German or English) on a management or marketing topic. All required ECTS must appear on one transcript.",
      },
      ectsRules: [
        [
          { cats: ["accounting"], min: 12, label: "Accounting and/or taxation" },
          { cats: ["math", "statistics"], min: 12, label: "Math / statistics / empirical research methods" },
        ],
      ],
      ectsNote: "Only accounting and tax courses count toward the 12 ECTS. Finance courses do not, so check your 'accounting' number.",
      grade: {
        min: null,
        selection: "Up to 100 points: " + gradeScale60 + ". Accounting/taxation: 15–17 ECTS = 10 points, 18+ ECTS = 20 points. Math/statistics/empirical methods: 15–17 ECTS = 10 points, 18+ ECTS = 20 points. " + quotaText,
      },
      bonusRules: [
        { label: "accounting/taxation credits (15+ ECTS)", points: 10, conds: [{ cats: ["accounting"], min: 15, label: "Accounting / taxation" }] },
        { label: "accounting/taxation credits (18+ ECTS, on top)", points: 10, conds: [{ cats: ["accounting"], min: 18, label: "Accounting / taxation" }] },
        { label: "math/statistics/empirical methods (15+ ECTS)", points: 10, conds: [{ cats: ["math", "statistics"], min: 15, label: "Math / statistics" }] },
        { label: "math/statistics/empirical methods (18+ ECTS, on top)", points: 10, conds: [{ cats: ["math", "statistics"], min: 18, label: "Math / statistics" }] },
      ],
      places: 35,
      documents: [
        "VPD from uni-assist",
        "Bachelor certificate, or a current transcript with at least 2/3 of credits and a provisional average grade",
        "Bachelor thesis or seminar paper (at least 12 pages) on a management/marketing topic",
        "ECTS conversion note if your university does not use ECTS",
        "English proof (B2)",
        "German proof (C1 to apply, DSH-2 level to enrol)",
        "No CV, motivation letter or work certificates",
      ],
      sources: [
        { label: "Programme (FU)", url: fu + "management_marketing/index.html" },
        { label: "Application (faculty)", url: wiwiss + "en/studium-lehre/master/m-m/Application/index.html" },
        { label: "Admission regulation 2024 (German)", url: amtsblatt + "2024/ab052024.pdf" },
        { label: "Places winter 2026/27", url: placesPdf },
        { label: "VPD route", url: vpdPage },
        { label: "English proofs", url: englishPage },
        { label: "German proofs", url: germanPage },
        { label: "Deadlines", url: deadlinesPage },
        { label: "Semester fees", url: feesPage },
      ],
      caveats: [
        "FU's programme page lists the language as 'English, German', but the faculty says the programme is taught mainly in German. Plan on needing German.",
        "The faculty page asks for German at C1–C2 for the application. FU's central rules accept C1 (e.g. DSH-1) to apply and require DSH-2 level to enrol.",
        "The faculty page says the semester abroad is 'planned' for all students but does not say it is compulsory.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "fu-facts",
      name: "Finance, Accounting and Taxation (FACTS)",
      fields: ["finance", "accounting"],
      languageKey: "German/English",
      language: "1st semester mainly in English, semesters 2–4 mainly in German",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "A bachelor in economics/business (Wirtschaftswissenschaft) or law, or an equivalent foreign degree, with at least 180 ECTS. You also need a thesis or seminar paper of at least 12 pages on taxation, finance, accounting or auditing. Credits from two different degrees cannot be combined.",
      },
      ectsRules: [
        [
          { cats: ["accounting"], min: 40, label: "Taxation, finance, public finance, accounting & related law" },
          { cats: ["economics"], min: 5, label: "Microeconomics (counted under economics)" },
          { cats: ["math", "statistics", "informatics"], min: 18, label: "Math, statistics/econometrics & business informatics" },
          { cats: ["math"], min: 6, label: "of which mathematics" },
          { cats: ["statistics"], min: 6, label: "of which statistics/econometrics" },
        ],
      ],
      ectsNote: "The 5 economics ECTS must be microeconomics. Related law (e.g. tax, commercial or corporate law) counts toward the 40 ECTS.",
      grade: {
        min: null,
        selection: "Up to 120 points: " + gradeScale60 + ". +20 points if your university certifies you are in the top 20% of your graduating class. Subject credits up to 40: 48+ ECTS finance/accounting/tax/related law = 12, 18+ ECTS statistics/econometrics/math = 12, 6+ ECTS IFRS financial reporting = 8, 6+ ECTS microeconomics = 8. " + quotaText,
      },
      bonusRules: [
        { label: "finance, accounting & tax credits (48+ ECTS)", points: 12, conds: [{ cats: ["accounting"], min: 48, label: "Finance / accounting / tax" }] },
        { label: "statistics, econometrics & math credits (18+ ECTS)", points: 12, conds: [{ cats: ["math", "statistics"], min: 18, label: "Math + statistics" }] },
      ],
      test: { status: "none", accepted: [], note: "The faculty FAQ says a GMAT is not required. It is not part of the selection." },
      german: {
        cefr: "C1",
        note: "The FACTS admission regulation asks applicants with a foreign degree (or a degree not taught in German) for DSH-2 or an equivalent (e.g. TestDaF 4 in all parts). FU's general rules accept C1 (e.g. DSH-1, TestDaF 4/4/3/3) to apply and require DSH-2 level to enrol.",
      },
      places: 36,
      documents: [
        "VPD from uni-assist",
        "Bachelor certificate, or a current transcript with at least 2/3 of credits and a provisional average grade",
        "Transcript showing the required credits",
        "Bachelor thesis or seminar paper (at least 12 pages), in German or English (a translation without certification is fine)",
        "Optional: university certificate that you are in the top 20% of your class",
        "ECTS conversion key if your university does not use ECTS",
        "English proof (B2) and German proof",
      ],
      sources: [
        { label: "Programme (FU)", url: fu + "finance_accounting_taxation/index.html" },
        { label: "Admission (faculty)", url: wiwiss + "en/studium-lehre/master/facts/zulassungsvor/index.html" },
        { label: "FAQ (faculty)", url: wiwiss + "en/studium-lehre/master/facts/FAQ-of-foreign-applicants/index.html" },
        { label: "Admission regulation 2024 (German)", url: amtsblatt + "2024/ab232024.pdf" },
        { label: "Places winter 2026/27", url: placesPdf },
        { label: "VPD route", url: vpdPage },
        { label: "German proofs", url: germanPage },
      ],
      caveats: [
        "The faculty's admission page is out of date. It still asks for a thesis of at least 15 pages and for 30 of the 40 core ECTS by the deadline. The 2024 regulation (in force since the winter 2025/26 intake) asks for 12 pages and 2/3 of all credits.",
        "German level at application is unclear: the FACTS regulation names DSH-2, while FU's central page accepts C1 (e.g. DSH-1) to apply. Having DSH-2 or TestDaF 4x4 by the deadline is the safe option.",
        "The 18 ECTS block counts business informatics, not general computer science. Check that your informatics courses qualify.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "fu-econ",
      name: "Economics",
      fields: ["economics"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "An economics bachelor or equivalent. Business administration credits do not count. Holders of a math or physics degree can enter with 15 ECTS economics and 50 ECTS quantitative methods. Only modules that deal exclusively with the subject count.",
      },
      ectsRules: [
        [
          { cats: ["economics", "math", "statistics"], min: 78, label: "Economics + quantitative methods" },
          { cats: ["economics"], min: 42, label: "Economics" },
          { cats: ["math", "statistics"], min: 24, label: "Math / statistics / econometrics" },
          { cats: ["statistics"], min: 6, label: "of which econometrics (counted under statistics)" },
        ],
        [
          { cats: ["economics", "math", "statistics"], min: 75, label: "Economics + quantitative methods (math/physics degree only)" },
          { cats: ["economics"], min: 15, label: "Economics" },
          { cats: ["math", "statistics"], min: 50, label: "Math / statistics / econometrics" },
        ],
      ],
      ectsNote: "At least 6 of the quantitative ECTS must be basic econometrics. The second option is only for math or physics graduates. Before graduating you need 2/3 of your credits and must already meet these subject minimums.",
      grade: {
        min: null,
        selection: "Up to 70 points: grade up to 50 points (1.0 = 50, 2.0 = 30, 2.5 = 20, 3.0 = 15, 3.5 or worse = 10). +4 points each (max. 20) for a module of 5+ ECTS graded 2.3 or better in: advanced macroeconomics, advanced microeconomics, microeconometrics, time-series econometrics, mathematics. " + quotaText,
      },
      german: {
        cefr: "C1",
        note: "Although teaching is in English, the admission regulation requires German proof (DSH or equivalent) from applicants with a foreign degree or a degree not taught in German. The faculty page names DSH-2. FU's general rules accept C1 (e.g. DSH-1, TestDaF 4/4/3/3) to apply and require DSH-2 level to enrol.",
      },
      places: 57,
      documents: [
        "VPD from uni-assist",
        "Self-disclosure form (Selbstauskunftsformular) listing the qualifying modules",
        "Module handbook or module descriptions for the listed courses",
        "Bachelor certificate, or a current transcript with at least 2/3 of credits",
        "ECTS conversion key (required for degrees from outside the European Higher Education Area)",
        "English proof (B2)",
        "German proof (DSH-2 level)",
      ],
      sources: [
        { label: "Programme (faculty)", url: wiwiss + "en/studium-lehre/master/economics/index.html" },
        { label: "Programme (FU)", url: fu + "economics/index.html" },
        { label: "Application (faculty)", url: wiwiss + "studium-lehre/master/economics/bewerbung/index.html" },
        { label: "Admission regulation 2022 (German)", url: amtsblatt + "2022/ab322022.pdf" },
        { label: "Places winter 2026/27", url: placesPdf },
        { label: "VPD route", url: vpdPage },
        { label: "German proofs", url: germanPage },
      ],
      caveats: [
        "Language conflict: the faculty says 'taught entirely in English', while FU's programme page says most courses are in English and some in German.",
        "German is required for admission even though teaching is in English (admission regulation and faculty page). Applicants with a foreign degree should plan on DSH-2 or TestDaF 4x4.",
        "The econometrics minimum (6 ECTS) cannot be checked exactly here, because econometrics is counted together with statistics.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "fu-winfo",
      name: "Information Systems (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Any bachelor with at least 18 ECTS in business informatics or computer science and 30 ECTS in business administration. You also need a bachelor thesis in business informatics (or a closely related field), or a seminar paper of at least 15 pages on business informatics, computer science, data science or statistics.",
      },
      ectsRules: [
        [
          { cats: ["informatics"], min: 18, label: "Business informatics / computer science" },
          { cats: ["business"], min: 30, label: "Business administration" },
        ],
      ],
      ectsNote: "All required credits must be shown by the deadline. Missing credits cannot be made up by work experience or during the master.",
      grade: {
        min: null,
        selection: "Up to 110 points: " + gradeScale60 + ". Subject credits up to 40: quantitative methods of business informatics 6+ ECTS = 10; computer science basics 11+ ECTS = 15, 17+ ECTS = 20; data science or statistics 6+ ECTS = 5, 12+ ECTS = 10. +10 points for at least 6 months of full-time, study-related work (e.g. in business informatics), with a certificate. " + quotaText,
      },
      bonusRules: [
        { label: "computer science basics (11+ ECTS)", points: 15, conds: [{ cats: ["informatics"], min: 11, label: "Informatics" }] },
        { label: "computer science basics (17+ ECTS, on top)", points: 5, conds: [{ cats: ["informatics"], min: 17, label: "Informatics" }] },
        { label: "data science / statistics (6+ ECTS)", points: 5, conds: [{ cats: ["statistics"], min: 6, label: "Statistics" }] },
        { label: "data science / statistics (12+ ECTS, on top)", points: 5, conds: [{ cats: ["statistics"], min: 12, label: "Statistics" }] },
      ],
      places: 23,
      documents: [
        "VPD from uni-assist",
        "Bachelor thesis, or proof of thesis registration (topic, due date, ECTS; add an abstract and outline if the link to business informatics is not clear)",
        "Bachelor certificate, or a current transcript with at least 2/3 of credits and a provisional average grade",
        "Self-disclosure form (in the tab for additional selection documents)",
        "English proof (B2)",
        "German proof (DSH-2 level to enrol)",
        "Optional: certificate of at least 6 months of full-time relevant work",
        "Official translations of documents not issued in German or English",
      ],
      sources: [
        { label: "Programme (FU)", url: fu + "wirtschaftsinformatik/index.html" },
        { label: "Application (faculty)", url: wiwiss + "studium-lehre/master/winfo/bewerbung_und_zulassung/bewerbungsverfahren/index.html" },
        { label: "FAQ (faculty)", url: wiwiss + "studium-lehre/master/winfo/faq/index.html" },
        { label: "Admission regulation 2024 (German)", url: amtsblatt + "2024/ab052024.pdf" },
        { label: "Places winter 2026/27", url: placesPdf },
        { label: "VPD route", url: vpdPage },
        { label: "German proofs", url: germanPage },
      ],
      caveats: [
        "The faculty's application page still mentions 20-minute selection interviews for 49% of places. The 2024 admission regulation has no interview and ranks by points only.",
        "The faculty page says to apply 'via uni-assist' and does not mention the VPD. FU's current route is a VPD from uni-assist, then the FU portal.",
        "The regulation wording on the thesis is ambiguous: it asks for a thesis in business informatics, while the faculty says a thesis in a closely related field is enough.",
        "The selection bonus here uses your whole informatics and statistics numbers. FU counts only modules in 'computer science basics' and 'data science/statistics', so your real points may be lower.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "fu-econsys",
      name: "Economic Systems (with the University of Belgrade)",
      fields: ["economics"],
      languageKey: "English",
      language: "English (in Belgrade and in Berlin)",
      notice: {
        type: "info",
        text: "Year 1 (semesters 1–2) is studied at the University of Belgrade, Faculty of Economics and Business (Serbia). Year 2 is at FU Berlin. FU awards the M.Sc.",
      },
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "A bachelor in economics (Wirtschaftswissenschaft) or statistics, or another degree with at least 60 ECTS in economic theory, mathematics, statistics or econometrics. These 60 ECTS must be shown even if you apply before graduating.",
      },
      ectsRules: [
        [{ cats: ["economics", "math", "statistics"], min: 60, label: "Economic theory, math, statistics & econometrics" }],
      ],
      ectsNote: "Only economic theory counts on the economics side, not applied business courses.",
      grade: {
        min: null,
        selection: "Up to 100 points: " + gradeScale60 + ". Up to 40 points for experience outside university: internships or jobs in multinational companies, international organisations, think tanks or NGOs (economics/statistics related: 300+ hours = 10, 600+ hours = 20; other fields: 300+ hours = 5, 600+ hours = 10); stays in Eastern Europe, Russia or Eurasia (3+ months = 10, 6+ months = 20). " + quotaText,
      },
      english: englishC1,
      german: null,
      places: 19,
      documents: [
        "VPD from uni-assist",
        "Bachelor certificate, or a current transcript with at least 2/3 of credits",
        "English proof (C1)",
        "Optional: table of work experience and stays in Eastern Europe, with certificates",
      ],
      sources: [
        { label: "Programme (FU)", url: fu + "economic_systems/index.html" },
        { label: "Programme (institute)", url: "https://www.oei.fu-berlin.de/en/studiumlehre/M_Sc_-Economic-Systems/index.html" },
        { label: "Application (institute)", url: "https://www.oei.fu-berlin.de/en/studiumlehre/M_Sc_-Economic-Systems/Information-for-Prospective-Students/Application/index.html" },
        { label: "Admission & study regulation 2024 (German)", url: amtsblatt + "2024/ab052024.pdf" },
        { label: "Places winter 2026/27", url: placesPdf },
        { label: "VPD route", url: vpdPage },
        { label: "English proofs", url: englishPage },
      ],
      caveats: [
        "The 19 places for winter 2026/27 include 9 places for the University of Belgrade, so roughly 10 are for applicants through FU.",
        "FU charges no tuition. A University of Belgrade flyer lists €6,000 per year for foreign students who enrol through Belgrade. It is not clear whether students admitted through FU pay anything in Belgrade. Ask the programme coordinator.",
        "It is unclear whether an economics or business degree alone is enough, or whether every applicant must show the 60 ECTS. The tool checks the 60 ECTS for everyone.",
        "Living costs, visa and residence rules for the year in Serbia are not covered here.",
        ...commonCaveats,
      ],
    },
    {
      ...base,
      id: "fu-datasci",
      name: "Data Science",
      fields: ["analytics"],
      languageKey: "English",
      language: "English",
      notice: {
        type: "info",
        text: "Run by the Department of Mathematics and Computer Science (with Education and Psychology), not the business school. Business graduates qualify only with enough math and computer science.",
      },
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: true,
        note: "A computer science bachelor (180 ECTS) qualifies directly. Any other bachelor needs at least 20 ECTS in mathematics and 10 ECTS in computer science.",
      },
      ectsRules: [
        [
          { cats: ["math", "statistics"], min: 20, label: "Mathematics (incl. probability/statistics)" },
          { cats: ["math"], min: 5, label: "of which linear algebra or analysis" },
          { cats: ["informatics"], min: 10, label: "Computer science" },
        ],
      ],
      ectsNote: "Of the math credits, at least 5 must be linear algebra or analysis and at least 5 probability theory or statistics. Of the computer science credits, at least 5 must be algorithms and at least 5 programming in a language such as Python, Java or C/C++. Computer science graduates are exempt.",
      grade: {
        min: null,
        selection: "Up to 100 points: " + gradeScale60 + ". +10 for 15+ ECTS in theoretical computer science, +10 for 15+ ECTS in interdisciplinary data science fields (e.g. psychology, digital humanities, natural sciences), up to +20 for at least 450 hours of research-based data science work outside the regular programme. " + quotaText,
      },
      english: englishC1,
      german: null,
      places: 20,
      documents: [
        "VPD from uni-assist",
        "Self-indication form (Selbstauskunft) listing math and computer science courses",
        "Bachelor certificate, or a current transcript with at least 2/3 of credits",
        "English proof (C1)",
        "Optional: proof of research-based data science work (450+ hours)",
      ],
      sources: [
        { label: "Programme (FU)", url: "https://www.fu-berlin.de/en/studium/studienangebot/alt/data-science/index.html" },
        { label: "Programme (department)", url: "https://www.mi.fu-berlin.de/en/data-science/index.html" },
        { label: "Admission regulation 2025 (English reading version)", url: "https://www.fu-berlin.de/en/studium/studienangebot/_medien/ZugS_Data-Science-2025_2025_EN_Lesefassung.pdf" },
        { label: "Places winter 2026/27", url: placesPdf },
        { label: "VPD route", url: vpdPage },
        { label: "English proofs", url: englishPage },
      ],
      caveats: [
        "FU's programme page for Data Science sits under an 'alt' (old) web path. The department page and the 2025 regulation are current, but check that the page is still live.",
        "Neither the regulation nor the department page asks for German. FU's central German page does not list Data Science as an exemption, so confirm with the programme if unsure.",
        "The sub-minimums (5 ECTS algorithms, 5 ECTS programming, 5 ECTS probability/statistics) cannot be checked exactly here.",
        ...commonCaveats,
      ],
    },
  ]);
})();
