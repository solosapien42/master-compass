/* University of Hamburg - Faculty of Business, Economics and Social Sciences (incl. Hamburg Business School, Economics, Socioeconomics). Checked 2026-11-17. */
(function () {
  const wiso = "https://www.wiso.uni-hamburg.de/";
  const bwlEn = "https://www.bwl.uni-hamburg.de/en/studium/master-studiengaenge/master-of-science-bwl";

  const src = {
    dates: { label: "UHH Campus Center: dates and deadlines", url: "https://www.uni-hamburg.de/campuscenter/bewerbung/fristen-termine.html" },
    masterApp: { label: "UHH Campus Center: master application and German requirement", url: "https://www.uni-hamburg.de/campuscenter/bewerbung/master/zugangsvoraussetzungen.html" },
    fee: { label: "UHH semester contribution", url: "https://www.uni-hamburg.de/en/campuscenter/studienorganisation/studienverlauf/beitraege-gebuehren/semesterbeitrag.html" },
    zugangWiso: { label: "Admission regulations WiSo (English PDF, 25 Mar 2025)", url: "https://www.uni-hamburg.de/campuscenter/studienorganisation/ordnungen-satzungen/zugangsvoraussetzungen/wiso/20250325-zugang-wiso-38-eng.pdf" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "EUR 402 per semester in winter 2026/27 (EUR 352 contribution incl. public transport pass + EUR 50 administrative fee)",
    tuitionNote: "No tuition fees at the University of Hamburg, also for non-EU students.",
    other: "Test fees (GTEBS, GRE, GMAT) are paid to the test provider.",
  };

  const stine = "Apply online in the university's STiNE applicant portal (no uni-assist, no VPD).";

  const sharedCaveats = [
    "The 2027 application dates are not yet published. Dates here follow the pattern on the current official pages. Re-check before applying.",
    "The semester contribution of EUR 402 is the winter 2026/27 figure. It will change for winter 2027/28.",
  ];

  const base = {
    university: "University of Hamburg",
    city: "Hamburg",
    state: "Hamburg",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter only",
    fees,
    lastChecked: "2026-11-17",
  };

  const germanNote = "Needed unless your first degree or school-leaving certificate was German-taught. You sign a confirmation at application; the formal certificate is due at enrolment at the latest.";

  // Window used by most UHH master's programmes
  const mayWindow = (extra) => ({
    route: stine,
    vpd: false,
    opens: "2027-05-01",
    opensApprox: true,
    deadline: "2027-06-15",
    note: "Window 1 May to 15 June for winter. Documents uploaded after the deadline are not considered." + (extra ? " " + extra : ""),
  });

  // Window used by BWL and the international programmes
  const febWindow = (extra) => ({
    route: stine,
    vpd: false,
    opens: "2027-02-15",
    opensApprox: true,
    deadline: "2027-03-31",
    note: "Window 15 February to 31 March for winter. Late applications and documents are not considered." + (extra ? " " + extra : ""),
  });

  const bwlBase = {
    ...base,
    name: "",
    bachelorFields: {
      standard: ["business", "economics", "finance"],
      relatedAllowed: true,
      note: "B.Sc. Business Administration from Hamburg, or a comparable degree in business, economics, industrial engineering, business mathematics or information systems with at least 24 ECTS in mathematics, statistics and/or microeconomics. A closely related interdisciplinary degree needs at least 90 ECTS in classic business/economics subjects plus the 24 ECTS. Universities of applied sciences are accepted on the same terms.",
    },
    ectsRules: [[{ cats: ["math", "statistics", "economics"], min: 24, label: "Mathematics / statistics / microeconomics" }]],
    ectsNote: "Only methods modules in mathematics, statistics or microeconomics count. Modules that merely apply them (for example macroeconomics) do not count, so do not enter all your economics ECTS. Part-relevant modules count proportionally. Thesis, internships and work experience do not count. The ECTS must be completed before you apply. For an interdisciplinary degree you also need 90 ECTS in business/economics subjects.",
    grade: {
      min: null,
      selection: "Score = 51% bachelor grade (or current average) + 49% GTEBS result. No fixed cut-off grade; ties are decided by lot. About 165 places per year, recalculated every year. Wait semesters count (max. 10).",
      historicalNote: "No past cut-off scores are published. The faculty reports 1,712 applications for the English track in winter 2025/26 (54% international), with 51 international first-semester students.",
    },
    test: {
      status: "required",
      accepted: ["GTEBS"],
      note: "GTEBS (formerly TM-WISO) is mandatory for all applicants. GMAT and GRE are not accepted. Result must be no older than 3 years. Can be taken in German or English, at a test centre or online. Register weeks before the test date, well before the application deadline.",
    },
    application: febWindow("Only one Hamburg master's application per semester is allowed (limited exception for unsuccessful international applicants). Preliminary eligibility checks are not offered."),
    places: 165,
    interview: false,
    sources: [
      { label: "Application and admission (English)", url: bwlEn + "/bewerbung.html" },
      { label: "Structure and specialisations (English)", url: bwlEn + "/aufbau-schwerpunkte.html" },
      { label: "Programme page (English)", url: bwlEn + ".html" },
      { label: "English track announcement (2025)", url: "https://www.bwl.uni-hamburg.de/en/ueber-die-fakultaet/aktuelles/2025/0924-master-bwl-englischer-track.html" },
      src.dates,
      src.fee,
    ],
  };

  const bwlCaveats = [
    ...sharedCaveats,
    "Conflict on dates: the faculty page gives 15 Feb to 31 Mar for BWL, but the university-wide list of international programmes with this window does not include BWL, and the university-wide default is 1 May to 15 June. We follow the faculty page, which was updated in May 2026. Confirm the window with the faculty.",
    "The page asks for a partial-degree transcript but states no minimum share of credits. Proof of the finished bachelor is due by 31 March of the first semester or admission is withdrawn.",
    "The admission regulations were not read. All facts come from the faculty application page.",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    // ---------- M.Sc. Business Administration, English track ----------
    {
      ...bwlBase,
      id: "uhh-bwl-english",
      name: "Business Administration - English track (Business Analytics, Finance/Banking/Insurance, Marketing, Operations & Supply Chain)",
      fields: ["management", "finance", "marketing", "analytics", "supply-chain"],
      languageKey: "English",
      language: "English (all modules; you choose 2 of 4 specialisations)",
      ectsNote: bwlBase.ectsNote,
      english: {
        cefr: "C1",
        ielts: 7.0,
        toefl: 95,
        englishMedium: "yes",
        note: "Proof: a degree taught entirely in English at a university, or a certificate no older than 3 years: TOEFL iBT 95, IELTS 7.0, Cambridge C1 Advanced or higher, UNIcert III or higher. The page does not limit the English-taught degree to English-speaking countries, but you should be ready to document that the whole degree was in English.",
      },
      german: null,
      documents: [
        "Bachelor certificate, or transcript of records showing current average (partial degree)",
        "Tabular self-declaration of the 24 ECTS in mathematics, statistics and/or microeconomics (Excel form on the page, for foreign degrees)",
        "Module descriptions where the transcript does not show the content (not the full module handbook)",
        "GTEBS result (or consent for ITB to send it) - mandatory",
        "English C1 proof",
        "Grading system information: best grade, lowest pass grade (ECTS conversion documents helpful)",
        "Certified translations plus originals if not in German or English",
      ],
      caveats: [
        ...bwlCaveats,
        "No German proof is required for the four English-taught specialisations from 2025 onwards (faculty page). Wirtschaftsprüfung und Steuern, Management im Gesundheitswesen and Management need German and are covered in the general-track entry.",
      ],
    },

    // ---------- M.Sc. Business Administration, general track ----------
    {
      ...bwlBase,
      id: "uhh-bwl-general",
      name: "Business Administration - general track (7 specialisations incl. Auditing & Taxation, Management, Healthcare Management)",
      fields: ["management", "finance", "marketing", "accounting", "analytics", "supply-chain", "health"],
      languageKey: "German/English",
      language: "German and English (modules in both languages; Auditing & Taxation, Management and Healthcare Management need German)",
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No certificate. You tick a box in the online form to confirm you can follow courses, read literature and take exams in English.",
      },
      german: {
        cefr: "C1",
        note: "Needed unless your first degree or university entrance qualification was in German. Otherwise a recognised German certificate is needed. The page does not state the level; C1 (DSH-2 / TestDaF 4x4) is our assumption.",
      },
      documents: [
        "Bachelor certificate, or transcript of records showing current average (partial degree)",
        "Tabular self-declaration of the 24 ECTS in mathematics, statistics and/or microeconomics (Excel form on the page, for foreign degrees)",
        "Module descriptions where the transcript does not show the content (not the full module handbook)",
        "GTEBS result (or consent for ITB to send it) - mandatory",
        "German proof (unless exempt)",
        "Grading system information: best grade, lowest pass grade",
        "Certified translations plus originals if not in German or English",
      ],
      caveats: [
        ...bwlCaveats,
        "The German level for the general track is not stated on the page. We assume C1. Ask the Campus Center for the exact certificate list.",
        "It is not clear whether you can complete the general track fully in English. The fully English path is the English track (separate entry).",
      ],
    },

    // ---------- M.Sc. Economics ----------
    {
      ...base,
      id: "uhh-economics",
      name: "Economics (ECON)",
      fields: ["economics"],
      languageKey: "English",
      language: "English only",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Three categories: (a) economics degree; (b) economics-related degree with 2 general economics courses, 3 advanced economics topic courses and 3 courses in mathematics, statistics or econometrics; (c) quantitative degree such as mathematics, business mathematics or statistics. Minimum first degree of 180 ECTS. The selection committee judges courses individually.",
      },
      ectsRules: [],
      ectsNote: "The page counts courses, not ECTS (see category (b) above), so the checker cannot test it. Examples of advanced economics: international economics, growth, industrial organisation, game theory, behavioural economics, political economics, health economics.",
      grade: {
        min: null,
        selection: "Ranked if applicants exceed places. Economics degree (a): 40% GPA, 10% GRE Verbal, 15% GRE Quantitative, 10% GRE Analytical Writing, 25% motivation letter. Categories (b) and (c): 30% GPA, 10% GRE Verbal, 25% GRE Quantitative, 10% GRE Analytical Writing, 25% motivation letter. About 35 places.",
        historicalNote: "No past cut-offs or admitted GRE scores are published.",
      },
      test: {
        status: "required",
        accepted: ["GRE"],
        note: "GRE General Test is required. Minimums: Verbal + Quantitative at least 300 combined, Analytical Writing at least 3.5. No (sufficient) GRE result means no admission. You may apply before sitting the test, but the result must be uploaded in STiNE by 31 March.",
      },
      english: {
        cefr: "English proof",
        ielts: null,
        toefl: null,
        englishMedium: "no",
        note: "No separate English certificate. The GRE result serves as proof of English. An English-taught bachelor does not replace the GRE.",
      },
      german: null,
      application: febWindow("Applications are made for the form 'Economics (WiSe 27/28, admission restricted)'. A partial-degree applicant sends the transcript by 31 March; the certificate is due by the end of the first semester."),
      places: 35,
      interview: false,
      documents: [
        "Degree certificate, or current transcript of records with provisional GPA",
        "Grading scale of a non-German degree (lowest pass grade and highest grade) or separate proof",
        "GRE General Test result (uploaded in STiNE)",
        "Letter of motivation, max. 500 words, in English, as PDF",
        "Certified translation if documents are not in German or English",
      ],
      sources: [
        { label: "Programme page", url: wiso + "studienbuero-volkswirtschaftslehre/studiengaenge/master-econ.html" },
        { label: "How to apply", url: wiso + "studienbuero-volkswirtschaftslehre/studiengaenge/master-econ/mscecon-application-inhalt.html" },
        { label: "Do you meet the requirements?", url: wiso + "studienbuero-volkswirtschaftslehre/studiengaenge/master-econ/mscecon-requirements-inhalt.html" },
        { label: "Curriculum", url: wiso + "studienbuero-volkswirtschaftslehre/studiengaenge/master-econ/mscecon-curriculum-inhalt.html" },
        { label: "FAQ", url: wiso + "studienbuero-volkswirtschaftslehre/studiengaenge/master-econ/faq-msecon-inhalt.html" },
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The 120 ECTS total is assumed from the 4-semester structure; the pages we read do not state it.",
        "The 35 places come from a search snippet of the study guide (valid from winter 2026/27). We could not read the PDF.",
        "No minimum grade is stated, but admission is competitive. No past results are published.",
      ],
    },

    // ---------- M.Sc. Innovation, Business and Sustainability (MIBAS) ----------
    {
      ...base,
      id: "uhh-mibas",
      name: "Innovation, Business and Sustainability (MIBAS)",
      fields: ["management", "sustainability", "entrepreneurship"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["business", "economics", "social"],
        relatedAllowed: true,
        note: "Bachelor of at least 180 ECTS in Socioeconomics or a comparable interdisciplinary socio-economic programme. Accepted subjects: business administration, law, social sciences, sociology, economics. In exceptional cases other degrees are admitted if the master's can build on them.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums are stated.",
      grade: {
        min: null,
        selection: "Places are split 50/50 between applicants with a German entrance qualification and those with a foreign one. Each group is ranked by final bachelor grade (or current average). The test score is used only to break ties at the cut-off, then a lottery.",
        historicalNote: "Number of places and past cut-offs are not published.",
      },
      test: {
        status: "required",
        accepted: ["GMAT Focus", "GMAT", "GRE", "GTEBS"],
        note: "One test is required, taken in English, no older than 5 years. Minimums: GMAT Focus 545, GMAT (10th edition) 570, GRE 151 Verbal and 156 Quantitative, GTEBS 95 points. Send scores to UHH and upload the report in STiNE by 31 March. The score is used mainly as a tie-breaker.",
      },
      english: {
        cefr: "English proof",
        ielts: null,
        toefl: null,
        englishMedium: "no",
        note: "No separate English certificate. Proof is the aptitude test, which must be taken in English (tests in German are not accepted).",
      },
      german: null,
      application: febWindow("Foreign bachelor holders must also apply for recognition of their foreign degree (GPA conversion) in STiNE by 31 March. Applicants from China, India and Vietnam need an APS certificate. Results mid-May."),
      interview: false,
      documents: [
        "First degree certificate, or current transcript if not yet available",
        "Transcript of records with GPA",
        "Recognition of the foreign degree (or proof that you applied for it by the deadline)",
        "CV in English",
        "GMAT, GRE or GTEBS score report (GMAT as image, others PDF)",
        "Certified translations if not in German or English",
      ],
      sources: [
        { label: "Programme page", url: wiso + "en/studienbuero-sozialoekonomie/studiengaenge/msc-mibas.html" },
        { label: "Entry requirements", url: wiso + "en/studienbuero-sozialoekonomie/studiengaenge/msc-mibas/entry-requirements.html" },
        { label: "Admissions", url: wiso + "en/studienbuero-sozialoekonomie/studiengaenge/msc-mibas/admissions.html" },
        { label: "Costs and funding", url: wiso + "en/studienbuero-sozialoekonomie/studiengaenge/msc-mibas/costs-and-funding.html" },
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The programme page quotes a semester contribution of EUR 334. The university page shows EUR 402 for winter 2026/27, which we use.",
        "No minimum grade is stated and the number of places is not given.",
        "Applicants in the foreign-entrance-qualification group compete only against each other. A Turkish applicant normally falls into this group.",
        "Partial degree: final-semester students can get conditional acceptance; details are on a page we could not read in full.",
      ],
    },

    // ---------- M.Sc. Health Economics & Health Care Management ----------
    {
      ...base,
      id: "uhh-hehcm",
      name: "Health Economics & Health Care Management (HEHCM)",
      fields: ["health", "economics", "management"],
      languageKey: "German/English",
      language: "German and English (courses are taught in both languages)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Direct route: first degree in business administration, economics, socioeconomics (business/economics focus), health economics or industrial engineering. Other degrees are admitted only if all the subject minimums below are proven.",
      },
      ectsRules: [
        [
          { cats: ["math"], min: 5, label: "Mathematics" },
          { cats: ["statistics"], min: 10, label: "Statistics (descriptive 5 + inferential 5)" },
          { cats: ["business"], min: 10, label: "Management introduction 5 + cost and performance accounting 5" },
          { cats: ["economics"], min: 5, label: "Microeconomics" },
        ],
      ],
      ectsNote: "These minimums apply to applicants from other fields. Graduates of the direct-route degrees are not asked for them.",
      grade: {
        min: null,
        selection: "Ranked if applicants exceed the 30 places: 55% first-degree grade (converted to the GTEBS scale) + 45% GTEBS/TestAS result. Without a test you get 0 points for that part but are not excluded.",
        historicalNote: "No past cut-offs are published.",
      },
      test: {
        status: "optional",
        accepted: ["GTEBS", "TestAS"],
        note: "Worth 45% of the selection score. Non-EU applicants may take the German-language TestAS (core test plus economics module) instead of GTEBS. Without a result you score 0 points on this part.",
      },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No certificate. You submit a signed informal confirmation of sufficient English (template provided).",
      },
      german: {
        cefr: "C1",
        note: germanNote + " The level is not stated on the page; C1 (DSH-2 / TestDaF 4x4) is our assumption.",
      },
      application: mayWindow("Results mid-July; lectures start mid-October."),
      places: 30,
      interview: false,
      documents: [
        "Degree certificate and transcript of records (or current transcript if not yet graduated)",
        "Explanation of the home grading system for foreign degrees; uni-assist pre-check result if available (optional)",
        "GTEBS or TestAS result (optional)",
        "Tabular CV in German or English",
        "Signed English proficiency confirmation (template)",
        "Signed German proficiency confirmation (non-German school leavers)",
      ],
      sources: [
        { label: "Programme page", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/msc-hehcm.html" },
        { label: "Application", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/msc-hehcm/ihre-bewerbung-hehcm.html" },
        { label: "Overview", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/msc-hehcm/ihr-master-im-ueberblick.html" },
        src.masterApp,
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The German certificate level is not stated. The formal rule is in the university admission statute (section 3), which we could not read.",
        "The page text is dated for the current round; the winter 2027/28 window is assumed to be the same.",
        "The page names a TestAS option for non-EU applicants only. It is unclear how its score is converted.",
      ],
    },

    // ---------- M.Sc. Wirtschaftsinformatik ----------
    {
      ...base,
      id: "uhh-wirtschaftsinformatik",
      name: "Wirtschaftsinformatik (Information Systems)",
      fields: ["information-systems", "analytics"],
      languageKey: "German/English",
      language: "Mainly German; you must be able to follow English-taught courses. The page does not state the language split.",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in Wirtschaftsinformatik from Hamburg, or another bachelor with at least 30 ECTS in business/economics and 30 ECTS in computer science, comparable to the WI curriculum. Run jointly by the Faculty of Mathematics, Informatics and Natural Sciences and the Business School.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 30, label: "Business / economics" },
          { cats: ["informatics"], min: 30, label: "Computer science" },
        ],
      ],
      ectsNote: "The ECTS must be completed at application. Conditional admission needs at least 150 ECTS and a registered bachelor thesis.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "If oversubscribed, a committee scores: 30% first-degree grade or current average, 25% completed WI modules (software development 1, WI basics, seminar, WI project; 24 ECTS = best score), 25% work experience and stays abroad, 20% motivation statement. Remaining places go to substitutes.",
        historicalNote: "No past cut-offs are published. The page says the selection criteria apply from winter 2027/28.",
      },
      test: { status: "none", accepted: [], note: "No aptitude test in the selection." },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No certificate. You sign a confirmation form that you can follow English-taught courses, read literature and take English exams.",
      },
      german: {
        cefr: "C1",
        note: "The page asks for very good German, proven by a language certificate at enrolment (not at application). The level is not stated; C1 (DSH-2 / TestDaF 4x4) is our assumption.",
      },
      application: mayWindow("Applications are not via uni-assist; uni-assist is only an optional route for a grade conversion of a foreign degree. Decisions around end of July; you have 7 days to accept."),
      interview: false,
      documents: [
        "Bachelor certificate, transcript of records and diploma supplement (or proof of current ECTS status)",
        "Proof of ECTS earned and bachelor thesis registration, if not yet graduated",
        "Optional: grade conversion for a foreign degree",
        "CV with certificates for work experience, stays abroad, further training",
        "Signed English proficiency confirmation (form on the page)",
        "Motivation letter in English, plus a study plan if applicable",
      ],
      sources: [
        { label: "Programme page (Informatics)", url: "https://www.inf.uni-hamburg.de/de/studies/master/wiinf.html" },
        { label: "Application and admission (German)", url: "https://www.inf.uni-hamburg.de/de/studies/master/wiinf/msc-wiinf-application.html" },
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The official new admission statute for the winter 2027/28 criteria was still expected in November 2026. The selection criteria may change.",
        "The language of instruction and the German level are not stated on the pages we read.",
        "The number of places and the ECTS total (120 assumed from 4 semesters) are not stated.",
        "Partial-degree rule: 150 ECTS plus a registered thesis, otherwise a study plan showing graduation by the end of the first master's semester.",
      ],
    },

    // ---------- M.Sc. Business Mathematics ----------
    {
      ...base,
      id: "uhh-business-mathematics",
      name: "Business Mathematics",
      fields: ["analytics", "finance", "economics"],
      languageKey: "German/English",
      language: "Can be completed fully in English. The page recommends being able to follow courses in German and English.",
      intake: "Winter & summer",
      bachelorFields: {
        standard: ["quantitative", "economics"],
        relatedAllowed: false,
        note: "Bachelor in business mathematics, or mathematics with economics as a minor, or economics with a strong mathematics focus. Content must be comparable to the Hamburg bachelors in business mathematics, mathematics, business administration or economics.",
      },
      ectsRules: [
        [
          { cats: ["math", "statistics"], min: 60, label: "Mathematics" },
          { cats: ["business", "economics"], min: 20, label: "Economic sciences" },
        ],
      ],
      ectsNote: "You must show at least 60 ECTS in mathematics and 20 ECTS in economic sciences, also when applying with a partial degree.",
      grade: {
        min: null,
        selection: "If oversubscribed: bachelor grade and length of studies, relevant qualifications or work experience (especially a business mathematics bachelor), and a personal statement.",
        historicalNote: "No past cut-offs or places are published.",
      },
      test: { status: "none", accepted: [], note: "No aptitude test." },
      english: {
        cefr: "B2",
        ielts: 5.0,
        toefl: 72,
        englishMedium: "yes",
        note: "Accepted: CEFR/telc B2, IELTS 5.0, TOEFL iBT 72, Cambridge CAE/CPE/BEC Higher/FCE, an English-taught bachelor, a school diploma accepted at English-language universities, 6 months in an English-speaking country, or 7 years of English lessons at a German-speaking school.",
      },
      german: null,
      application: mayWindow("Summer intake window is 1 December to 15 January. Apply early for a prospective student visa if you need one."),
      interview: false,
      documents: [
        "Degree certificate, or provisional transcript of records if still studying (certificate due by the end of the first semester)",
        "Current transcript of records with grade conversion proof",
        "Self-written lists of completed mathematics and economics modules with credits",
        "CV in English",
        "Motivation letter of about one page",
        "English proof",
        "Certified English or German translations",
      ],
      sources: [
        { label: "Programme page", url: "https://www.math.uni-hamburg.de/studium/master/msc-businessmathematics.html" },
        { label: "Application page", url: "https://www.math.uni-hamburg.de/studium/master/msc-businessmathematics/bewerbung.html" },
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The ECTS total (120 assumed from the 2-year duration) and the places are not stated.",
        "This is a mathematics-heavy programme in the Faculty of Mathematics, Informatics and Natural Sciences, jointly with the Business School. Most business bachelors will not reach 60 ECTS in mathematics.",
        "The German-language version of the programme no longer accepts applications.",
      ],
    },

    // ---------- M.A. Arbeit, Wirtschaft, Gesellschaft (AWG) ----------
    {
      ...base,
      id: "uhh-awg",
      name: "Arbeit, Wirtschaft, Gesellschaft - Ökonomische und Soziologische Studien (AWG)",
      degree: "M.A.",
      fields: ["economics"],
      languageKey: "German",
      language: "German (English literature is used)",
      bachelorFields: {
        standard: ["economics", "social"],
        relatedAllowed: true,
        note: "First degree in socioeconomics or an equivalent social science or economics programme. Graduates of other fields may be admitted if the master's can build on their degree. No preliminary checks are offered.",
      },
      ectsRules: [],
      ectsNote: "No minimum ECTS. Sociology, economics and methods ECTS only improve your selection grade (see grade).",
      grade: {
        min: null,
        selection: "Ranked if applicants exceed the 35 places: 60% first-degree grade + 40% motivation letter, then bonuses (sociology 10-29 ECTS = 0.2, 30+ = 0.5; economics same; methods 18+ ECTS = 0.3; vocational training or 6 years of work = 0.3). Ties are decided by lot.",
        historicalNote: "No past cut-offs are published.",
      },
      test: { status: "none", accepted: [], note: "No entrance test. A motivation letter on the official questionnaire is graded." },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No certificate. You submit a signed informal confirmation of sufficient English (template provided).",
      },
      german: {
        cefr: "C1",
        note: germanNote + " The level is not stated on the page; C1 (DSH-2 / TestDaF 4x4) is our assumption.",
      },
      application: mayWindow("Hardship applications (10% of places) and top-athlete applications (2%) go through the Campus Center."),
      places: 35,
      interview: false,
      documents: [
        "Degree certificate and grade transcript (or transcript of records if not yet issued)",
        "Signed English proficiency confirmation",
        "Motivation letter on the official questionnaire",
        "Knowledge form for sociology, economics and methods (Word file)",
        "Proof of vocational training, work experience, publications (if applicable)",
        "CV in German or English",
        "German proficiency confirmation (non-German-educated applicants)",
      ],
      sources: [
        { label: "Programme page", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/ma-awg.html" },
        { label: "Application", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/ma-awg/ihre-bewerbung-awg.html" },
        src.masterApp,
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The bonus table on the page is garbled. The exact bonus tiers should be checked on the live page.",
        "The ECTS total (120 assumed) and the language of instruction are not stated on the page.",
        "Partial degree: applicants finishing in the application year are considered with a current transcript. If the certificate comes too late, admission is conditional with the certificate due by 31 March of the following year.",
      ],
    },

    // ---------- M.Sc. Public and Nonprofit Studies (PUNO) ----------
    {
      ...base,
      id: "uhh-puno",
      name: "Interdisciplinary Public and Nonprofit Studies (PUNO)",
      fields: ["management"],
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "economics", "social"],
        relatedAllowed: true,
        note: "First degree in socioeconomics or a comparable interdisciplinary programme, or business administration, political science, law, social sciences, sociology, economics. Other graduates may be admitted if the master's can build on their degree.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums. Public or nonprofit courses in your bachelor give bonus points (see grade).",
      grade: {
        min: null,
        selection: "Ranked if applicants exceed the 45 places. Maximum 100 points: first-degree result up to 50, university entrance qualification up to 16, thesis on public/nonprofit topic up to 16, bonus for passed public/nonprofit courses up to 18 (1 point per ECTS, max. 3 courses). Ties are decided by lot.",
        historicalNote: "No past cut-offs are published.",
      },
      test: { status: "none", accepted: [], note: "No entrance test. TestAS is not required." },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No certificate. You submit a signed informal confirmation of sufficient English (template provided).",
      },
      german: {
        cefr: "C1",
        note: germanNote + " The level is not stated on the page; C1 (DSH-2 / TestDaF 4x4) is our assumption.",
      },
      application: mayWindow("Results around mid-July."),
      places: 45,
      interview: false,
      documents: [
        "University entrance qualification (school-leaving certificate)",
        "Copy of first degree certificate, or transcript of records with average",
        "Transcript with public/nonprofit courses marked",
        "Thesis proof (if the topic is public/nonprofit)",
        "Signed English proficiency confirmation",
        "Tabular CV",
        "German proficiency proof or declaration (without German entrance qualification or degree)",
        "Certified translation of a foreign degree and grading-system explanation (due by enrolment)",
      ],
      sources: [
        { label: "Programme page", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/msc-puno.html" },
        { label: "Application", url: wiso + "studienbuero-sozialoekonomie/studiengaenge/msc-puno/bewerbung-puno.html" },
        src.masterApp,
        src.dates,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The 45 places and the rules are for winter 2026/27. Winter 2027/28 numbers may differ.",
        "The language of instruction is not stated on the page; it is a German-language programme in practice. Check before applying.",
        "The scoring table is an image that we could not read. Partial-degree rules are not stated.",
        "This is a public-sector and nonprofit management programme. It is a niche fit for business graduates.",
      ],
    },
  ]);
})();
