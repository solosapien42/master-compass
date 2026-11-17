/* Leipzig University (Universität Leipzig) – Faculty of Economics and Management Science. Checked 2026-11-18. */
(function () {
  const notice = {
    type: "warning",
    text: "The faculty website of Leipzig University is being moved to a new address. During our check its programme and application pages returned errors or could not be reached. Most facts here therefore come from the DAAD database, official search-result extracts and older faculty pages, not from the current official pages. Many details are unverified. Check the official pages and AlmaWeb / uni-assist before applying.",
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "Semester contribution not confirmed. The Deutschland-Semesterticket alone is EUR 226.80 per semester from winter 2026/27 and is part of the contribution.",
    tuitionNote: "Saxony does not charge tuition fees for regular master's programmes (our general knowledge, not confirmed on a Leipzig page). Confirm with the university.",
    other: "uni-assist charges a fee for applications with a foreign degree.",
  };

  const sharedCaveats = [
    "Official faculty pages were not reachable during our check (site migration, 404 and connection errors). This is not a bot block. Facts come from the DAAD database and extracts of official pages.",
    "No subject-ECTS minimums could be verified, so none are checked here. Read the current admission and selection regulations.",
    "The total semester contribution could not be verified. Only the Deutschland-Semesterticket price (EUR 226.80 from winter 2026/27) is confirmed (Studentenwerk Leipzig).",
    "The exact 2027 application dates are not published yet. The dates here repeat the 2026 pattern (uni-assist for foreign degrees: 15 April to 31 May).",
  ];

  const base = {
    university: "Leipzig University",
    city: "Leipzig",
    state: "Saxony",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    notice,
    fees,
    lastChecked: "2026-11-18",
  };

  const app = {
    route: "Applicants with a foreign degree apply through uni-assist; applicants with a German degree use the AlmaWeb portal",
    vpd: false,
    opens: "2027-04-15",
    opensApprox: true,
    deadline: "2027-05-31",
    note: "In 2026 the window for foreign degrees was 15 April to 31 May via uni-assist. 31 May is a cut-off deadline. Whether uni-assist issues a VPD first is not stated on the pages we could read. The 2027 dates are not published yet.",
  };

  const englishB2 = {
    cefr: "B2",
    ielts: null,
    toefl: null,
    englishMedium: "conditional",
    note: "English level B2 is required. Minimum IELTS/TOEFL scores could not be verified. Whether an English-taught bachelor from Turkey counts as proof is not stated. Ask the faculty.",
  };

  const sources = {
    daadBwl: { label: "DAAD database: Betriebswirtschaftslehre (Management Science), Leipzig", url: "https://www.daad.de/de/in-deutschland-studieren/hochschulen/alle-studiengaenge/detail/universitaet-leipzig-betriebswirtschaftslehre-management-science-w29883/?hec-id=w29883" },
    faculty: { label: "Faculty homepage (new address)", url: "https://www.uni-leipzig.de/wirtschaftswissenschaftliche-fakultaet/" },
    bwlApply: { label: "Faculty page: Bewerbung Master BWL (older version)", url: "https://www.wifa.uni-leipzig.de/studium/studienbuero/mentoring/studieninteressierte/bewerbung-master-bwl.html" },
    fee: { label: "Studentenwerk Leipzig: semester fee", url: "https://www.studentenwerk-leipzig.de/en/semester-fee/" },
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "lei-bwl-management-science",
      name: "Business Administration (Betriebswirtschaftslehre, Management Science)",
      fields: ["management"],
      intake: "Winter only",
      languageKey: "German",
      language: "German (English is an additional language)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "A bachelor with mostly business and economics content (or a comparable degree, also from a university of applied sciences). The suitability check is done by the faculty. Exact subject minimums are not verified.",
      },
      ectsRules: [],
      ectsNote: "Subject-ECTS minimums could not be verified.",
      grade: {
        min: null,
        selection: "Local admission restriction with a selection procedure. An older faculty page describes two stages: a subject-suitability check, then up to about half of the places by grade and the rest by selection interviews with invited applicants. Competition is strong.",
        historicalNote: "No past cut-offs found.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE requirement found." },
      english: englishB2,
      german: {
        cefr: "C1",
        note: "The older faculty page asks for German C1 from applicants whose degree was not in German. Not confirmed on a current page.",
      },
      application: app,
      interview: true,
      documents: [
        "Bachelor certificate or proof of completed courses",
        "Transcript of records",
        "Motivation letter",
        "CV",
        "English proof (B2)",
        "German proof (C1) for non-German degrees",
      ],
      sources: [sources.daadBwl, sources.bwlApply, sources.faculty, sources.fee],
      caveats: [
        ...sharedCaveats,
        "Teaching language: DAAD says German is the main language and English additional. The extent of English courses is not stated.",
        "The selection method (grade share, interview, points) comes from an older faculty page and may have changed. DAAD only says 'local admission restriction, possibly with a selection procedure'.",
        "DAAD lists the programme as possible full-time or part-time.",
        "Number of places is not published on the pages we could read.",
      ],
    },
    {
      ...base,
      id: "lei-economics",
      name: "Economics",
      fields: ["economics", "analytics"],
      intake: "Winter only",
      languageKey: "English",
      language: "English (as stated by the CHE ranking on DAAD; not confirmed on the programme page)",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "A third-party listing says a degree in business administration, economics and/or law. Not verified on an official page.",
      },
      ectsRules: [],
      ectsNote: "Subject-ECTS minimums could not be verified.",
      grade: {
        min: null,
        selection: "Local admission restriction. The faculty FAQ (via search extract) says suitable applicants take part in a selection interview. Weighting is not verified.",
        historicalNote: "No past cut-offs found.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE requirement found." },
      english: englishB2,
      german: null,
      application: app,
      interview: true,
      documents: [
        "Bachelor certificate or proof of completed courses",
        "Transcript of records",
        "Motivation letter (typical; not verified)",
        "English proof",
      ],
      sources: [
        { label: "DAAD database: Economics (National Economics), Leipzig", url: "https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/detail/university-of-leipzig-national-economics-economics-w29858/?hec-id=w29858" },
        { label: "Faculty programme page (not reachable during our check)", url: "https://wifa.uni-leipzig.de/en/degree-programme/study-programmes/masters-degree-in-economics" },
        sources.faculty,
        sources.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "This programme replaces the old M.Sc. Volkswirtschaftslehre from winter 2026/27, so it is new. The first cohort started in October 2026. No past cut-offs exist.",
        "English requirement: sources disagree (no requirement, B2, IELTS 6.0). We list B2. Confirm.",
        "Winter-only intake and the May deadline come from the DAAD listing (May 2026).",
      ],
    },
    {
      ...base,
      id: "lei-quest",
      name: "Quantitative Economics for Sustainability (QuESt)",
      fields: ["economics", "sustainability", "analytics"],
      intake: "Winter only",
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics", "business"],
        relatedAllowed: true,
        note: "First degree with predominantly business and economics content, or a comparable degree (also from a university of applied sciences). Micro, macro, statistics and econometrics knowledge is an advantage but not strictly required. Gaps can be closed by self-study.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums found. The selection score rewards ECTS in microeconomics, macroeconomics and statistics/econometrics.",
      grade: {
        min: null,
        selection: "Local admission restriction. Five criteria are scored from 0 to 30 points each (maximum 150): final grade, relevance of the degree, and ECTS in microeconomics, macroeconomics and statistics/econometrics (our reading of the search extract).",
        historicalNote: "No past cut-offs found. The programme is new (first intake October 2026).",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE requirement found." },
      english: {
        ...englishB2,
        note: "English level B2 is required. It can be shown by a German Abitur with English, TOEFL iBT, IELTS or Cambridge exams. Minimum scores could not be verified. Whether an English-taught bachelor from Turkey counts is not stated.",
      },
      german: null,
      application: {
        ...app,
        note: "Official extract: foreign-degree applicants apply via uni-assist from early April / mid-April to 31 May for the winter semester. German-degree applicants use AlmaWeb (2 to 31 May). The 2027 dates are not published yet.",
      },
      interview: false,
      documents: [
        "Bachelor certificate or proof of completed courses",
        "Transcript of records",
        "Letter of motivation",
        "University entrance certificate",
        "English proof (B2)",
      ],
      sources: [
        { label: "Faculty programme page: QuESt (not reachable during our check)", url: "https://www.wifa.uni-leipzig.de/en/degree-programme/study-programmes/masters-degree-in-quantitative-economics-for-sustainability" },
        sources.faculty,
        sources.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "Application start differs between pages: 'early April' (English page) and 15 April (uni-assist date used for 2026).",
        "It is unclear if an interview is part of selection. We set it to false.",
        "A DAAD mirror showed the October 2026 international deadline as closed. We could not see the DAAD entry itself.",
      ],
    },
    {
      ...base,
      id: "lei-business-information-systems",
      name: "Business Information Systems (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      intake: "Winter only (sources conflict; DAAD also lists summer)",
      languageKey: "German/English",
      language: "German is the main language; some English",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Typically a business informatics, information systems or computer science bachelor. Exact entry rules are not verified.",
      },
      ectsRules: [],
      ectsNote: "Subject-ECTS minimums could not be verified. An aptitude test (Eignungsfeststellungsprüfung) is reported by one source.",
      grade: {
        min: null,
        selection: "No admission restriction (NC) reported, but an aptitude test (Eignungsfeststellungsprüfung) is reported by an older university guide. Details are not verified.",
        historicalNote: "No past cut-offs found.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE requirement found. A university-internal aptitude test may apply." },
      english: englishB2,
      german: {
        cefr: "C1",
        note: "Not verified for this programme. German C1 is the usual Leipzig requirement for non-German degrees in German-taught programmes.",
      },
      application: {
        ...app,
        note: "Older sources give 15 September (winter) and 15 March (summer) for programmes without admission restriction. We use 31 May, the earlier safe date for non-EU applicants. Check the real date.",
      },
      interview: false,
      documents: [
        "Bachelor certificate or proof of completed courses",
        "Transcript of records",
        "Language proofs",
      ],
      sources: [
        { label: "DAAD database: Wirtschaftsinformatik (Business Information Systems), Leipzig", url: "https://www.daad.de/de/in-deutschland-studieren/hochschulen/alle-studiengaenge/detail/universitaet-leipzig-wirtschaftsinformatik-business-information-systems-w29856/?hec-id=w29856" },
        { label: "Faculty module overview (new site)", url: "https://www.uni-leipzig.de/wp-content/uploads/2026/11/WiFa_MasterWinf_Module.pdf" },
        sources.faculty,
        sources.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "Intake: DAAD says summer and winter; another source says winter only. Check.",
        "Deadline conflict: 31 May (typical for non-EU) versus 15 September (older sources). We could not verify either for 2027.",
        "Whether an aptitude test is still required is not confirmed.",
        "DAAD describes German as main language with English also offered. Language requirements are unverified.",
      ],
    },
  ]);
})();
