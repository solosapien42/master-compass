/* Rhine-Waal University of Applied Sciences (Hochschule Rhein-Waal, HSRW). Checked 2026-11-18. */
(function () {
  const src = {
    masters: { label: "HSRW: Master's degrees (application periods, language levels)", url: "https://www.hochschule-rhein-waal.de/en/study/before-starting-university/application-process/masters-degrees" },
    faq: { label: "HSRW: FAQs for prospective students", url: "https://www.hochschule-rhein-waal.de/en/academics/prospective-students/current-application-period/admission-requirements/faqs-prospective" },
    regsSE: { label: "HSRW: examination regulations, Faculty of Society and Economics", url: "https://www.hochschule-rhein-waal.de/en/university/organisation/statutes-and-regulations/examination-regulations/society-and-economics" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€365.10 per semester in winter 2026/27 (semester fee, incl. Deutschlandticket)",
    tuitionNote: "No tuition fees in North Rhine-Westphalia, also for non-EU students.",
    other: "uni-assist charges a processing fee.",
  };

  const application = {
    route: "Applicants with a school-leaving certificate from outside Germany apply through uni-assist. uni-assist checks the documents and forwards them to HSRW, which decides and emails you.",
    vpd: false,
    opens: "2027-05-01",
    opensApprox: true,
    deadline: "2027-07-15",
    note: "Winter semester: May to 15 July. Summer semester: December to 15 January. uni-assist processing takes several weeks, so apply early.",
  };

  const docsCommon = [
    "Bachelor certificate, or a current transcript showing the credits achieved so far",
    "Current average mark",
    "English certificate (B2), for example TOEFL or IELTS, not older than two years",
    "Further documents if relevant (for example internship or semester abroad)",
  ];

  const english = {
    cefr: "B2",
    ielts: null,
    toefl: null,
    englishMedium: "no",
    note: "All international applicants must send an English certificate such as TOEFL or IELTS, even if they studied in English. It must be no older than two years at application. A letter from your university is not accepted.",
  };

  const base = {
    university: "Rhine-Waal University of Applied Sciences",
    institutionType: "applied",
    state: "North Rhine-Westphalia",
    ects: 90,
    semesters: 3,
    intake: "Winter & summer",
    languageKey: "English",
    language: "English",
    english,
    german: null,
    application,
    fees,
    interview: false,
    lastChecked: "2026-11-18",
  };

  const sharedCaveats = [
    "The winter 2027/28 dates are not announced yet. The dates here follow the current pattern (May to 15 July).",
    "Bachelors with fewer than 210 ECTS (for example a 4-year Turkish bachelor converted to 180–240 ECTS) can be admitted, but must make up the missing credits (up to 30 ECTS) during the master's with a learning agreement.",
    "HSRW publishes no past cut-off grades or places.",
    "The €365.10 semester fee comes from HSRW's re-registration notice for winter 2026/27, which we could only see in search results. Check the current amount after admission.",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "hsrw-economics-finance",
      city: "Kleve",
      name: "Economics and Finance",
      degree: "M.Sc.",
      fields: ["economics", "finance"],
      bachelorFields: {
        standard: ["economics", "business", "finance"],
        relatedAllowed: true,
        note: "Accepted bachelors: economics, business studies, business mathematics, industrial engineering, business informatics or business psychology. Basic statistics, econometrics or mathematics is recommended. 210 ECTS are expected; with 180 ECTS you make up 30 ECTS during the master's.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject ECTS minimums are published. The degree subject decides.",
      grade: {
        min: 2.5,
        selection: "Restricted admission (selection procedure). Minimum overall grade 2.5 on the German scale, or ECTS grade A or B.",
      },
      test: {
        status: "none",
        accepted: [],
        note: "Older regulations asked non-EU applicants for TM-WISO (102), GMAT (600) or GRE. The current application page lists a special aptitude test only for Information Engineering and Computer Science, not for this programme.",
      },
      documents: docsCommon,
      sources: [
        { label: "Programme page: Economics and Finance, M.Sc.", url: "https://www.hochschule-rhein-waal.de/en/faculties/society-and-economics/degree-programmes/economics-and-finance-msc" },
        src.masters, src.faq, src.regsSE,
      ],
      caveats: [
        ...sharedCaveats,
        "The 2.5 minimum grade comes from the examination regulations and the faculty freshers page, not the programme page itself.",
        "Older regulations required an aptitude test (TM-WISO, GRE or GMAT 600) from non-EU applicants, suspended until winter 2025/26. Newer regulations apply from winter 2025/26. Confirm with HSRW that no test is needed for winter 2027/28.",
      ],
    },
    {
      ...base,
      id: "hsrw-international-management-psychology",
      city: "Kamp-Lintfort",
      name: "International Management and Psychology",
      degree: "M.Sc.",
      fields: ["management"],
      bachelorFields: {
        standard: ["business", "economics", "social"],
        relatedAllowed: true,
        note: "Relevant bachelor such as psychology, industrial and organisational psychology, business administration or economics with a social or behavioural sciences focus. 210 ECTS are ideal; with fewer you complete extra modules.",
      },
      ectsRules: [
        [{ cats: ["statistics"], min: 15, label: "Empirical research methods and statistics" }],
      ],
      grade: {
        min: 2.0,
        selection: "Restricted admission (selection procedure). Final grade should be 2.0 or better.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      english: {
        ...english,
        ielts: 5.5,
        toefl: 72,
        note: "B2, for example IELTS 5.5 or TOEFL iBT 72. HSRW says all international applicants need an English certificate, even after an English-taught bachelor.",
      },
      documents: docsCommon,
      sources: [
        { label: "Programme page: International Management and Psychology, M.Sc.", url: "https://www.hochschule-rhein-waal.de/en/faculties/communication-and-environment/degree-programmes/master-degree-programmes/international" },
        { label: "Examination regulations (2020, PDF)", url: "https://www.hochschule-rhein-waal.de/sites/default/files/documents/2023/05/12/2020-04-30_examination_regulations_international_management_and_psychology_msc.pdf" },
        src.masters, src.faq,
      ],
      caveats: [
        ...sharedCaveats,
        "The programme page says the grade 'should be' 2.0 or better. Ask whether this is a hard minimum.",
      ],
    },
    {
      ...base,
      id: "hsrw-sustainable-development-management",
      city: "Kleve",
      name: "Sustainable Development Management",
      degree: "M.A.",
      fields: ["sustainability", "management"],
      bachelorFields: {
        standard: ["social", "economics", "business"],
        relatedAllowed: true,
        note: "Aimed at graduates in the social sciences, economics, industrial engineering or interdisciplinary programmes with an economics or social sciences focus. Basic quantitative methods are expected.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject ECTS minimums are published.",
      grade: {
        min: 2.5,
        selection: "Restricted admission (selection procedure). Cumulative grade of at least 2.5 at bachelor level.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      documents: docsCommon,
      sources: [
        { label: "Programme page: Sustainable Development Management, M.A.", url: "https://www.hochschule-rhein-waal.de/en/faculties/society-and-economics/degree-programmes/sustainable-development-management-ma" },
        src.masters, src.faq, src.regsSE,
      ],
      caveats: [
        ...sharedCaveats,
        "The programme is part of the DAAD development-related postgraduate (EPOS/AGEP) network. DAAD scholarships have their own, earlier deadlines and work-experience rules.",
      ],
    },
  ]);
})();
