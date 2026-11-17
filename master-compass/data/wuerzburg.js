/* University of Würzburg – Faculty of Business Management and Economics (Wirtschaftswissenschaftliche Fakultät). Checked 2026-11-18. */
(function () {
  const wiwi = "https://www.wiwi.uni-wuerzburg.de/";

  const src = {
    app: { label: "Master application (faculty)", url: wiwi + "en/study/master/application/" },
    news: { label: "Master application news (150 ECTS rule, deadline)", url: wiwi + "squiwi/aktuelles/single/news/masterbewerbung-zum-sommersemester-2025/" },
    list: { label: "Master programmes (faculty)", url: wiwi + "en/study/master/" },
    fees: { label: "Semester fees (Student Affairs)", url: "https://www.uni-wuerzburg.de/en/studying-at-jmu/studienangelegenheiten/beitraegeundgebuehren/" },
    enrol: { label: "Enrolment & semester fees (no tuition statement)", url: "https://www.uni-wuerzburg.de/en/studying-at-jmu/studienangelegenheiten/degree-programmes/enrolment-semester-fees/" },
    vpd: { label: "Requesting a VPD from uni-assist (JMU)", url: "https://www.uni-wuerzburg.de/en/studying-at-jmu/studienangelegenheiten/application-and-enrolment/international-degree-seeking-students/application/requesting-a-preliminary-review-vpd-from-uni-assist/" },
    dd: { label: "Double degree options", url: wiwi + "en/studium/master/double-degree-programme/" },
  };

  const notice = {
    type: "info",
    text: "The faculty pages show the 2026 round (deadline 15 July 2026). The 2027 dates here assume the same pattern. Re-check the application page when the 2027 round opens.",
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€182.10 per semester from winter 2026/27 (Studierendenwerk €72.00 + semester ticket €110.10)",
    tuitionNote: "The university states that it charges no tuition fees. Bavaria allows universities to charge non-EU students, and some Bavarian universities do, so re-check before applying.",
    other: "uni-assist may charge a handling fee for the VPD. Language and GMAT test fees are paid to the provider.",
  };

  const baseCaveats = [
    "Würzburg says it has no tuition fees, but I found no official statement about 2027/28 for non-EU students. Bavarian law lets each university decide, so confirm with the Student Affairs office.",
    "The faculty pages do not state the number of places. No past cut-offs are published; the faculty says all applicants who meet the minimums are admitted (no waiting list).",
    "The faculty page does not give an opening date for the winter 2027/28 portal (WueStudy). The 2027 deadline is assumed to be 15 July like in 2026.",
    "Total ECTS and number of semesters are not stated on the programme page. 120 ECTS / 4 semesters is taken from the file name of the study regulations and the double degree page.",
    "The enrolment document list on the application page is for winter 2024/25 and may be outdated.",
    "Applicants with a non-EU first degree need a VPD from uni-assist. The JMU page says this depends on subject and country of the degree. Check the table on the JMU page for Turkey.",
    "Applicants from China, India or Vietnam need an APS certificate. Not relevant for Turkey.",
  ];

  const base = {
    university: "University of Würzburg",
    city: "Würzburg",
    state: "Bavaria",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    notice,
    fees,
    partialMinEcts: 150,
    lastChecked: "2026-11-18",
  };

  const application = {
    route: "Get a VPD from uni-assist first if your first degree is non-EU, then apply online in the WueStudy portal and upload documents there",
    vpd: true,
    vpdWeeks: 6,
    deadline: "2027-07-15",
    note: "The same deadline applies to EU and non-EU applicants (15 July for winter). JMU advises requesting the VPD at least 6 weeks before the deadline; it is valid for 1 year. You may apply with at least 150 ECTS and a provisional grade; the final certificate can be sent later. All subject minimums must be met by the deadline. You can apply to several programmes at once.",
  };

  const docs = [
    "Information on your higher education entrance qualification",
    "Bachelor certificate with final grade, or transcript with at least 150 ECTS and provisional grade",
    "Transcript of records showing the subject minimums",
    "VPD from uni-assist (non-EU first degree)",
    "Curriculum vitae",
    "Language proof (see language requirements)",
    "APS certificate (only for degrees from China, India, Vietnam)",
  ];

  const bachelorFieldsBM = {
    standard: ["business", "economics"],
    relatedAllowed: true,
    note: "No named bachelor degrees. Admission depends only on the subject ECTS below. Methods ECTS cover mathematics, statistics, econometrics and applied data-oriented methods (data science, business analytics, data analysis).",
  };

  const english = {
    cefr: "B2",
    ielts: 6.5,
    toefl: 85,
    englishMedium: "conditional",
    note: "B2 is needed. Accepted proof: TOEFL 85, IELTS 6.5, Cambridge FCE 176 points, PTE Academic 75. Whether an English-taught bachelor from Turkey is accepted instead of a test is not stated on the pages. Ask the faculty.",
  };

  const germanB2 = {
    cefr: "B2",
    note: "Needed if your first degree is not from a German university. The page names no exception for English-taught degrees.",
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "wue-management",
      name: "Management (majors: Finance, Accounting & Taxation; Marketing & Innovation; Management & Leadership)",
      fields: ["management", "finance", "accounting", "marketing"],
      intake: "Winter & summer",
      languageKey: "German/English",
      language: "German and English. The Marketing & Innovation and Management & Leadership majors can be studied fully in English.",
      bachelorFields: bachelorFieldsBM,
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Management and economics" },
          { cats: ["math", "statistics", "informatics"], min: 20, label: "Methods (maths, statistics, econometrics, data methods)" },
        ],
      ],
      ectsNote: "20 ECTS methods and 60 ECTS management and economics, from the subject-specific provisions of 17 Dec 2025. You can choose one 60-ECTS major or three 20-ECTS subjects.",
      grade: {
        min: 2.5,
        selection: "Bachelor grade of 2.5 or better (final or provisional). No ranking: all applicants who meet the minimums are admitted.",
      },
      test: { status: "none", accepted: [], note: "No GMAT or GRE required." },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "no",
        note: "No formal English proof is listed. The pages say a good command of English is advisable, and a good to very good command for the Finance and Marketing majors.",
      },
      german: germanB2,
      application,
      interview: false,
      documents: [...docs, "German B2 proof unless your first degree is from a German university"],
      sources: [wiwi_src("en/study/master/management/", "Programme page"), src.app, src.news, src.vpd, src.fees],
      caveats: [
        ...baseCaveats,
        "German B2 is listed as required for the whole programme, including the majors that can be studied in English. Ask the faculty if you can apply with English only.",
        "The programme page does not state the language of instruction for the whole programme or the intake. The intake comes from the application page.",
      ],
    },
    {
      ...base,
      id: "wue-mgmt-international",
      name: "Management International",
      fields: ["management", "finance", "accounting", "marketing", "information-systems", "economics"],
      intake: "Winter only",
      languageKey: "English",
      language: "English. Basic German (A2) is needed by the end of semester 3.",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "The programme page asks for a bachelor in business management or economics. Admission is checked by the subject ECTS below. Tracks in year 2: Finance & Accounting; Operations & Information Management; Marketing & Entrepreneurship; Behavioral Economics. A semester abroad is optional.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Management and economics" },
          { cats: ["math", "statistics", "informatics"], min: 20, label: "Methods (maths, statistics, econometrics, data methods)" },
        ],
      ],
      ectsNote: "20 ECTS methods and 60 ECTS management and economics.",
      grade: {
        min: 3.0,
        selection: "Grade better than 2.0: direct admission. Grade from 2.0 up to better than 3.0: you also need a GMAT Focus score of at least 565. No ranking: all who qualify are admitted.",
      },
      test: {
        status: "conditional",
        accepted: ["GMAT Focus"],
        note: "Needed only if your grade is 2.0 or worse (up to better than 3.0): GMAT Focus Edition at least 565. The test centre must send the score to the University of Würzburg.",
      },
      english,
      german: null,
      extraLanguage: "German A2 by the end of semester 3 (not needed for application)",
      application: { ...application, opens: "2027-01-15", opensApprox: true },
      interview: false,
      documents: [...docs, "English B2 proof", "GMAT Focus score report if your grade is 2.0 or worse"],
      sources: [wiwi_src("en/studium/master/master-management-international/", "Programme page"), src.app, src.news, src.vpd, src.fees],
      caveats: [
        ...baseCaveats,
        "The portal usually opens in mid to late January. The date used here is approximate.",
        "The application page says 'better than 3.0' for the GMAT route in one place and '2.0 to better than 3.0' in another. Both give the same result.",
        "The Management International requirement of a grade better than 2.0 means 1.9 or better for direct admission.",
      ],
    },
    {
      ...base,
      id: "wue-iep",
      name: "International Economic Policy",
      fields: ["economics"],
      intake: "Winter & summer",
      languageKey: "English",
      language: "English. German A2 is needed by re-registration for semester 3 (not for application).",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "No named bachelor degrees. At least 30 of the 60 ECTS must be in economics. Core: microeconomics, macroeconomics, econometrics. Double degrees with Ghent and Verona exist (start in summer semester, apply by end of April after admission).",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Management and economics" },
          { cats: ["economics"], min: 30, label: "of which economics" },
          { cats: ["math", "statistics", "informatics"], min: 20, label: "Methods (maths, statistics, econometrics, data methods)" },
        ],
      ],
      ectsNote: "20 ECTS methods and 60 ECTS management and economics, of which at least 30 ECTS economics.",
      grade: {
        min: 2.5,
        selection: "Bachelor grade of 2.5 or better (final or provisional). No ranking: all applicants who meet the minimums are admitted.",
      },
      test: { status: "none", accepted: [], note: "No GMAT required in the main requirements list." },
      english,
      german: null,
      extraLanguage: "German A2 by re-registration for semester 3 (not needed for application)",
      application,
      interview: false,
      documents: [...docs, "English B2 proof"],
      sources: [wiwi_src("en/studium/master/international-economic-policy/", "Programme page"), src.app, src.news, src.dd, src.vpd, src.fees],
      caveats: [
        ...baseCaveats,
        "The FAQ says a GMAT alternative exists for this programme, but the main requirements do not mention it. Confirm with the faculty.",
        "The programme page does not state the language of instruction. English B2 is required, and the faculty lists the programme as English-taught.",
      ],
    },
    {
      ...base,
      id: "wue-information-systems",
      name: "Information Systems",
      fields: ["information-systems", "analytics"],
      intake: "Winter & summer",
      languageKey: "German/English",
      language: "German and English (the language of instruction per course is not stated on the programme page)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "No named bachelor degrees. At least 30 ECTS must be in business informatics or computer science. Tracks: Enterprise Systems, Business Analytics, Electronic Business, Artificial Intelligence. A double degree with the University of Liechtenstein exists (apply by end of April after admission; tuition applies at Liechtenstein).",
      },
      ectsRules: [
        [
          { cats: ["business", "economics", "informatics"], min: 60, label: "Management, economics and informatics" },
          { cats: ["informatics"], min: 30, label: "of which business informatics / computer science" },
          { cats: ["math", "statistics", "informatics"], min: 20, label: "Methods (maths, statistics, econometrics, data methods)" },
        ],
      ],
      ectsNote: "20 ECTS methods and 60 ECTS economics/management, of which at least 30 ECTS business informatics or computer science. The pages do not say whether methods ECTS may also count towards the 30 informatics ECTS.",
      grade: {
        min: 2.5,
        selection: "Bachelor grade of 2.5 or better (final or provisional). No ranking: all applicants who meet the minimums are admitted.",
      },
      test: { status: "none", accepted: [], note: "No GMAT or GRE required." },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "no",
        note: "No formal English proof is listed on the application page.",
      },
      german: germanB2,
      application,
      interview: false,
      documents: [...docs, "German B2 proof unless your first degree is from a German university"],
      sources: [wiwi_src("en/study/master/information-systems/", "Programme page"), src.app, src.news, src.dd, src.vpd, src.fees],
      caveats: [
        ...baseCaveats,
        "German B2 is required if your first degree is not from a German university, even though English-language modules exist. The language of instruction and the English share are not stated.",
        "The exact wording of the ECTS rule is in the subject-specific provisions, which I could not read in full. The ECTS rule above follows the application page.",
      ],
    },
    {
      ...base,
      id: "wue-entrepreneurship-innovation",
      name: "Entrepreneurship & Innovation",
      degree: "M.A.",
      fields: ["entrepreneurship", "management"],
      intake: "Winter only",
      languageKey: "German/English",
      language: "German and English (the split is not stated on the programme page)",
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "Open to all disciplines (target group: creative minds from all disciplines). No subject ECTS minimums are listed. Admission requires passing an online aptitude assessment of about 15 minutes on start-ups, business succession and intrapreneurship.",
      },
      ectsRules: [],
      grade: {
        min: null,
        selection: "No grade minimum is stated. Admission depends on passing the online aptitude assessment.",
      },
      test: {
        status: "none",
        accepted: [],
        note: "No GMAT or GRE. Instead there is a short online aptitude assessment (about 15 minutes) as part of the application.",
      },
      english: {
        cefr: "B2",
        ielts: 6.0,
        toefl: 72,
        englishMedium: "yes",
        note: "Accepted: TOEFL 72, IELTS 6.0, Cambridge FCE, PTE Academic 59, Abitur English grade of at least 7 of 15 points, or a bachelor taught in English (medium of instruction).",
      },
      german: { cefr: "B2", note: "German B2 is required for admission (programme page). The accepted certificates are not listed there." },
      application: { ...application, route: "Apply online in WueStudy (get a VPD from uni-assist first if your first degree is non-EU)" },
      interview: false,
      documents: [...docs, "English proof (or English-taught bachelor)", "German B2 proof", "Result of the online aptitude assessment"],
      sources: [wiwi_src("en/study/master/master-entrepreneurship-innovation/", "Programme page"), src.app, src.news, src.vpd, src.fees],
      caveats: [
        ...baseCaveats,
        "The online page says the study regulations are provisional and not yet legally binding. Admission requirements may change.",
        "No subject ECTS or grade minimum is stated for this programme. The application page gives none for it either. Ask master@wiwi.uni-wuerzburg.de.",
        "The faculty's central application page lists no requirements for this programme. The data here comes only from the programme page.",
      ],
    },
  ]);

  function wiwi_src(path, label) {
    return { label: label, url: wiwi + path };
  }
})();
