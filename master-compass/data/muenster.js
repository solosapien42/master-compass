/* University of Münster – School of Business and Economics (Wirtschaftswissenschaftliche Fakultät). Checked 2026-11-17. */
(function () {
  const wiwi = "https://www.wiwi.uni-muenster.de/fakultaet/";
  const ab = "https://www.uni-muenster.de/imperia/md/content/wwu/ab_uni/";

  const src = {
    bwlApp: { label: "Business Administration: application and admission", url: wiwi + "en/study/study-programs/master/business-administration/applicationadmission" },
    bwlZzo: { label: "Admission regulations Business Administration, 17 Feb 2026 (German, binding)", url: ab + "beitrag261903.pdf" },
    bwlInfo: { label: "Business Administration: information for applicants (Jan 2026, PDF)", url: wiwi + "sites/fakultaet/files/downloads/studium/master_bwl/infos_for_applicants_-_version_2026_en.pdf" },
    bwlFaq: { label: "Business Administration FAQ", url: wiwi + "en/study/study-programs/master/business-administration/faq" },
    bdApp: { label: "Business Development: application and admission", url: wiwi + "de/studium/studiengaenge/master/business-development/application-admission" },
    bdZzo: { label: "Admission regulations Business Development, 17 Feb 2026 (German, binding)", url: ab + "beitrag261904.pdf" },
    ecoPage: { label: "Economics: programme page", url: wiwi + "de/studium/studiengaenge/master/economics" },
    ecoApp: { label: "Economics: application and admission (German)", url: wiwi + "de/studium/master/vwl/bewerbungzulassung" },
    ecoZzo: { label: "Admission regulations Economics, 17 Feb 2025 (German, binding)", url: ab + "beitrag251405.pdf" },
    isPage: { label: "Information Systems: programme page", url: "https://www.wi.uni-muenster.de/prospective-students/our-courses-study/master-science-information-systems" },
    isApp: { label: "Information Systems: application and admission", url: "https://www.wi.uni-muenster.de/prospective-students/our-courses-study/master-science-information-systems/application-and-admission" },
    isZzo: { label: "Admission regulations Information Systems, 17 Feb 2025 (German, binding)", url: ab + "beitrag251404.pdf" },
    isFaq: { label: "Information Systems FAQ", url: "https://www.wi.uni-muenster.de/prospective-students/faq" },
    dates: { label: "University of Münster: deadlines for master's applications", url: "https://www.uni-muenster.de/studieninteressierte/bewerbung/fristenundtermine.shtml" },
    masterApp: { label: "University of Münster: applying for a master's programme", url: "https://www.uni-muenster.de/studieninteressierte/bewerbung/master.html" },
    fee: { label: "Semester fee (University of Münster)", url: "https://www.uni-muenster.de/studium/en/kosten/semesterbeitrag.html" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€369.50 per semester in winter 2026/27 (semester contribution incl. NRW semester ticket)",
    tuitionNote: "No tuition fees in North Rhine-Westphalia, also for non-EU students. The same semester fee applies to everyone.",
    other: "Health insurance is required for enrolment. The faculty suggests about €700 per month for living costs (Information Systems FAQ).",
  };

  const route = "Apply online in the University of Münster application portal (own portal, no uni-assist, no VPD). Upload scans of all documents there.";

  const sharedCaveats = [
    "Dates are based on the pages for winter 2026/27 and the general pattern (early May to 15 July). The 2027/28 dates were not yet published on 2026-11-17. Re-check before applying.",
    "The university's general deadline page says that some master's programmes accept applications until 15 September (a PDF lists them). Münster's own rules say deadlines are final and cannot be extended.",
    "No past selection cut-offs (points or grades) are published on the official pages we found. We cannot say what score was needed.",
    "Applicants from China, India or Vietnam must also upload an APS certificate.",
    "Study places are not stated on the programme pages.",
  ];

  const englishC1 = {
    cefr: "C1",
    ielts: 7.0,
    toefl: 95,
    englishMedium: "no",
    note: "Official proof is mandatory. A bachelor taught in English does not count unless the university is in an English-speaking country (certificate from that university needed). A bachelor taught in English in Turkey is therefore not enough. Native speakers are exempt. Also accepted: UNIcert III/IV, DAAD C1/C2, Cambridge C1 or higher, TELC C1 and other CEFR C1 certificates that cover all four skills. School English courses and CV statements are not accepted.",
  };

  const base = {
    university: "University of Münster",
    city: "Münster",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    languageKey: "English",
    german: null,
    fees,
    interview: false,
    lastChecked: "2026-11-17",
  };

  // ---------- M.Sc. Business Administration (4 majors) and Business Development: shared subject rules ----------
  const bwlBachelor = {
    standard: ["business", "economics", "finance"],
    relatedAllowed: true,
    note: "Bachelor of at least 6 semesters in a relevant field with at least 40 ECTS business administration and 30 ECTS economics/mathematics/statistics combined. An economics bachelor that misses these numbers can still enter the selection if the applicant proves a place in the top 10% of the graduating class (certificate from the examinations office or dean, not a recommendation letter). Missing credits cannot be made up later.",
  };

  const bwlEctsRules = [
    [
      { cats: ["business"], min: 40, label: "Business administration" },
      { cats: ["economics", "math", "statistics"], min: 30, label: "Economics / mathematics / statistics (combined)" },
    ],
    [
      { cats: ["business"], min: 32, label: "Business administration (8 ECTS substituted)" },
      { cats: ["economics", "math", "statistics"], min: 38, label: "Economics / mathematics / statistics (combined)" },
      { cats: ["math", "statistics"], min: 8, label: "Extra maths / statistics" },
    ],
    [
      { cats: ["business"], min: 24, label: "Business administration (16 ECTS substituted, the maximum)" },
      { cats: ["economics", "math", "statistics"], min: 46, label: "Economics / mathematics / statistics (combined)" },
      { cats: ["math", "statistics"], min: 16, label: "Extra maths / statistics" },
    ],
  ];

  const bwlEctsNote =
    "Rule: at least 40 ECTS business administration and at least 30 ECTS economics, mathematics and statistics combined (no split between them). Up to 16 missing business ECTS can be replaced by maths/statistics ECTS above the 30. The checker shows the maximum replacement in steps of 8 ECTS, so values in between may also qualify. Accounting and finance courses count as business administration. Business law, business informatics, soft skills and languages do not count. The bachelor thesis counts in the area of its topic.";

  const gradeBwl = (extra) => ({
    min: 2.9,
    selection:
      "If there are more eligible applicants than places, ranking by score (max. 100): bachelor grade up to 40 points (1.0 = 40, 2.9 = 0, linear in between), quantitative background up to 25 points (12.5 for maths/statistics and 12.5 for economics: 0 points at 12 ECTS or fewer, full points at 21 ECTS or more), fit with the chosen major up to 25 points (courses, work experience, internships, time abroad, judged by the centre of that major) and personal achievements up to 10 points (awards, scholarships, engagement). Ties are decided by lot." +
      (extra ? " " + extra : ""),
  });

  const gmatBwl = {
    status: "required",
    accepted: ["GMAT Focus", "GRE", "GTEBS"],
    note: "Required for foreign applicants who are not treated like German citizens, i.e. non-EU applicants with a Turkish bachelor. Minimums: GMAT Focus 565, or GRE 155 quantitative and 145 verbal, or GTEBS 104 total. If you send more than one test, only the better one counts. The test is a pass/fail requirement only and gives no selection points. The last test date must be within 2 years of the application deadline.",
  };

  const bwlDocs = [
    "Bachelor certificate, or a transcript with at least 140 ECTS and the current average grade (provisional application)",
    "Transcript of records with all courses, grades and ECTS, official stamp/signature or online verification link",
    "Converted German grades (modified Bavarian formula) and ECTS conversion, in a separate document",
    "School-leaving certificate (university entrance qualification)",
    "Form assigning your bachelor courses to business administration, economics, mathematics and statistics with ECTS",
    "CV with proof of every claim (time abroad, work, awards)",
    "English certificate (C1)",
    "GMAT Focus, GRE or GTEBS score report (non-EU)",
    "Chosen major (and intended minor)",
    "If needed: proof of top 10% of your graduating class",
    "Certified translations if documents are not in German or English",
    "APS certificate (China, India, Vietnam only)",
  ];

  const bwlApplication = {
    route,
    vpd: false,
    opens: "2027-05-03",
    opensApprox: true,
    deadline: "2027-07-15",
    note: "The page says 'early May to 15 July'. For winter 2026/27 there were two rounds: complete applications by 5 June got an answer by the end of June, the final deadline was 15 July with an answer in early August. Provisional applicants must finish all exams by 30 September. Documents cannot be added after the deadline.",
  };

  const bwlCaveats = [
    ...sharedCaveats,
    "The Business Administration FAQ still contains old text (a German DSH-2 requirement and a deadline for winter 2023/24). The 2026 admission regulations and the application page say no German is required from winter 2025/26.",
    "You can apply for only one major. The major cannot be changed after admission. The four majors share the same entry requirements and the same score system.",
    "The FAQ (2023) says at least 300 applicants are admitted per semester across all majors. Places per major are not stated.",
    "The substitution rule (maths/statistics for missing business ECTS) is only partly captured by the checker. Contact the study coordination if you are close to the limits.",
    "The regulations ask for the GMAT/GRE for foreign applicants who are not equal to German citizens. The application pages say 'non-EU applicants'. A non-EU applicant with a German bachelor or German school-leaving certificate may be exempt: ask the Master Office.",
  ];

  const bwl = {
    ...base,
    intake: "Winter only",
    bachelorFields: bwlBachelor,
    ectsRules: bwlEctsRules,
    ectsNote: bwlEctsNote,
    partialMinEcts: 140,
    english: englishC1,
    test: gmatBwl,
    application: bwlApplication,
    documents: bwlDocs,
    sources: [src.bwlApp, src.bwlZzo, src.bwlInfo, src.bwlFaq, src.dates, src.fee],
    caveats: bwlCaveats,
  };

  // ---------- Information Systems: shared ----------
  const isBase = {
    ...base,
    intake: "Winter & summer",
    bachelorFields: {
      standard: ["business", "quantitative"],
      relatedAllowed: true,
      note: "Bachelor of at least 6 semesters in a relevant field (business informatics, information systems, computer science, business administration, statistics and similar). You need at least 72 ECTS across information systems, computer science, quantitative methods and business administration, and at least 24 ECTS of them in the area of your chosen major. The admission committee assigns courses by content, not by module title.",
    },
    partialMinPct: 80,
    english: {
      ...englishC1,
      note: "Official proof is mandatory and must be at most 2 years old. A bachelor taught in English outside an English-speaking country does not count, so an English-taught bachelor from Turkey is not enough. Only a bachelor from an English-speaking country (university certificate) or a native language of English exempts you. Accepted: TOEFL iBT 95, IELTS C1 level (7.0), UNIcert A/B/C, DAAD C1/C2 and other C1 certificates covering all four skills. TOEFL code 4740.",
    },
    test: {
      status: "required",
      accepted: ["GMAT Focus", "GRE"],
      note: "Required for non-EU applicants only (applicants without German school-leaving certificate, German bachelor or EU citizenship). Minimums: GMAT Focus 650, or GRE 165 quantitative and 160 verbal. If you send both, only the better one counts. The last test date must be within 2 years of the application deadline. The test gives no selection points.",
    },
    grade: {
      min: 2.9,
      selection:
        "If there are more eligible applicants than places, ranking by score (max. 100): bachelor grade up to 45 points (1.0 = 45, 2.9 = 0, linear in between), fit for the chosen major up to 40 points (courses, practical experience, time abroad), personal competences up to 15 points (other degrees or certificates 5, academic work and awards 5, more than 6 months of relevant work 5). Ties are decided by lot.",
    },
    application: {
      route,
      vpd: false,
      opens: "2027-05-10",
      deadline: "2027-07-15",
      note: "Application period for winter: 10 May to 15 July. It is the same for EU and non-EU applicants. Deadlines are strict and documents cannot be added later. Answer in early August. You may be invited to an interview before the decision. Enrolment by 15 November at the latest. Admission cannot be deferred.",
    },
    documents: [
      "School-leaving certificate (university entrance qualification)",
      "Bachelor certificate, or a transcript covering at least 80% of your modules (provisional application)",
      "Transcript of records with converted German grades and average mark (Grade_Conversion.xlsx)",
      "Detailed course description of your bachelor courses (or module handbook) using the faculty template",
      "Form 'Analysis of Curriculum' assigning courses to Information Systems, Computer Science, Quantitative Methods and Business Administration",
      "Major selection form (with topics studied and practical experience)",
      "CV",
      "English certificate (C1, not older than 2 years)",
      "GMAT Focus or GRE score report (non-EU)",
      "Optional: documents showing special interest or qualification",
      "Certified translation if documents are not in German or English",
      "APS certificate (China, India, Vietnam only)",
    ],
    caveats: [
      ...sharedCaveats,
      "The faculty may invite applicants to an interview, but it is not a fixed part of the selection. The admission regulations also allow a talk with the committee if the ECTS or the English level are unclear.",
      "The major-specific ECTS (at least 24) cannot be fully tested by the checker. Which course belongs to which area is decided by the committee on a content basis.",
      "The English-language page of the department says the three majors are Managing Digital Business, Business Process Management and Data Science. The IS FAQ still quotes a summer 2025 semester fee of €320.17. We use the fee from the university's fee page.",
      "Quantitative methods may also include economics-type methods courses in the committee's view. We counted mathematics, statistics and informatics only.",
    ],
    sources: [src.isPage, src.isApp, src.isZzo, src.isFaq, src.dates, src.fee],
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    // ---------- Business Administration (four majors) ----------
    {
      ...bwl,
      id: "ms-bwl-accounting",
      name: "Business Administration – Major Accounting",
      fields: ["accounting", "finance"],
      language: "English",
      grade: gradeBwl("Major: Accounting (assessed by the Accounting Center Münster)."),
    },
    {
      ...bwl,
      id: "ms-bwl-finance",
      name: "Business Administration – Major Finance",
      fields: ["finance"],
      language: "English",
      grade: gradeBwl("Major: Finance (assessed by the Finance Center Münster)."),
    },
    {
      ...bwl,
      id: "ms-bwl-management",
      name: "Business Administration – Major Management",
      fields: ["management"],
      language: "English",
      grade: gradeBwl("Major: Management (assessed by the Centrum für Management)."),
    },
    {
      ...bwl,
      id: "ms-bwl-marketing",
      name: "Business Administration – Major Marketing",
      fields: ["marketing"],
      language: "English",
      grade: gradeBwl("Major: Marketing (assessed by the Marketing Center Münster)."),
    },

    // ---------- Business Development ----------
    {
      ...base,
      id: "ms-business-development",
      name: "Business Development",
      fields: ["management", "entrepreneurship", "marketing", "finance"],
      intake: "Winter only",
      language: "English (taught exclusively in English)",
      bachelorFields: bwlBachelor,
      ectsRules: bwlEctsRules,
      ectsNote: bwlEctsNote,
      partialMinEcts: 140,
      grade: {
        min: 2.9,
        selection:
          "If there are more eligible applicants than places, ranking by score (max. 100): bachelor grade up to 51 points (1.0 = 51, 2.9 = 0, linear in between), overall GMAT/GRE/GTEBS score up to 19 points (0 at the minimum score, full at the maximum), quantitative test section up to 30 points (0 at the minimum, full at the maximum). So the test makes up 49% of the score. Ties are decided by lot.",
      },
      test: {
        status: "required",
        accepted: ["GMAT Focus", "GMAT Exam", "GRE", "GTEBS"],
        note: "Required for ALL applicants (the regulations do not exempt EU applicants). Minimums: GMAT Focus 565, or GMAT Exam (classic) 600, or GRE 155 quantitative and 145 verbal, or GTEBS 104 total. If you send more than one test, only the one that gives the better result counts. Higher scores earn more selection points.",
      },
      english: englishC1,
      german: null,
      application: {
        route,
        vpd: false,
        opens: "2027-05-03",
        opensApprox: true,
        deadline: "2027-07-15",
        note: "The programme page gave 15 July 2026 for the previous round, so we assume the same pattern (early May to 15 July) for winter 2027/28. The page is marked as under construction.",
      },
      interview: false,
      documents: [
        "Bachelor certificate, or a transcript with at least 140 ECTS and the current average grade (provisional application)",
        "Transcript of records with all courses, grades and ECTS (official validation)",
        "Converted German grades and ECTS conversion, in a separate document",
        "English certificate (C1)",
        "GMAT Focus / GMAT Exam / GRE / GTEBS score report",
        "CV",
        "If needed: proof of top 10% of your graduating class",
        "Certified translations if documents are not in German or English",
        "APS certificate (China, India, Vietnam only)",
      ],
      sources: [src.bdApp, src.bdZzo, src.dates, src.fee],
      caveats: [
        ...sharedCaveats,
        "The programme page says the start is in the 'fall term' (winter semester) and names 15 July 2026 as the next deadline. The 2027 date is our assumption.",
        "The faculty page describes the English proof as C1 with IELTS 7.0 and TOEFL 95. The binding regulations only say C1 and give TOEFL, IELTS and CAE as examples.",
        "The test is a hard requirement for everyone and carries 49% of the selection score. Applicants without a test cannot be admitted.",
        "The substitution rule (maths/statistics for missing business ECTS) is only partly captured by the checker.",
        "The programme page has a section on a 'relevant course of study' but also says top 10% applicants may enter without the ECTS minimums. This is not testable here.",
      ],
    },

    // ---------- Economics ----------
    {
      ...base,
      id: "ms-economics",
      name: "Economics (VWL)",
      fields: ["economics"],
      intake: "Winter & summer",
      language: "English (taught exclusively in English)",
      bachelorFields: {
        standard: ["economics", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters in a field with economics content. Needs at least 40 ECTS economics and at least 10 ECTS mathematics, statistics and/or econometrics. Business-only bachelors usually miss the 40 ECTS economics.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 40, label: "Economics" },
          { cats: ["math", "statistics"], min: 10, label: "Mathematics / statistics / econometrics" },
        ],
        [
          { cats: ["economics"], min: 25, label: "Economics (15 ECTS substituted, the maximum)" },
          { cats: ["math", "statistics"], min: 10, label: "Mathematics / statistics / econometrics" },
          { cats: ["economics", "math", "statistics"], min: 50, label: "Economics + maths/statistics together" },
        ],
      ],
      ectsNote: "Rule: 40 ECTS economics (VWL) and 10 ECTS maths/statistics/econometrics. Up to 15 missing economics ECTS can be replaced by maths/statistics/econometrics ECTS above the 10. In practice: economics at least 25, maths/statistics at least 10, and the two together at least 50. Business administration courses do not count.",
      partialMinEcts: 140,
      grade: {
        min: null,
        selection:
          "No minimum grade in the regulations. If there are more eligible applicants than places, ranking by score (max. 100): bachelor grade up to 50 points, average grade in your economics courses up to 30 points, average grade in your maths/statistics/econometrics courses up to 20 points. The points also depend on how many ECTS you have (scaled from 100 ECTS economics and 30 ECTS maths/statistics). English and German knowledge give no points. A waiting list is used.",
      },
      test: {
        status: "required",
        accepted: ["GRE"],
        note: "Required for non-EU applicants who are not treated like German citizens and did not earn their bachelor at Münster (from winter 2025/26). Minimum GRE 155 quantitative and 145 verbal. EU applicants need no test. The last test date must be within 2 years of the deadline. Questions: economics@wiwi.uni-muenster.de.",
      },
      english: {
        ...englishC1,
        note: "C1 proof is mandatory. Accepted: German Abitur showing English at C1 or at least 7 years of school English, TOEFL iBT 95, IELTS 7.0, TELC C1, or another course certificate at C1 or higher. Native speakers are exempt. The pages do not accept an English-taught bachelor as proof, so a Turkish English-medium bachelor is not enough.",
      },
      german: null,
      application: {
        route,
        vpd: false,
        opens: "2027-05-03",
        opensApprox: true,
        deadline: "2027-07-15",
        note: "Two rounds for winter 2026/27: complete applications by 31 May got an answer in mid or late June; the final deadline was 15 July with an answer by the end of July. We assume the same pattern for 2027. Bachelor certificate is due by 15 November at enrolment. Waiting list and re-application are possible.",
      },
      interview: false,
      documents: [
        "Bachelor certificate, or a transcript with at least 140 ECTS and the current average grade (provisional application)",
        "Transcript of records with all courses, grades and ECTS",
        "Short module descriptions if course titles do not show the subject area",
        "Complete CV without gaps",
        "English proof (C1)",
        "GRE score report (non-EU)",
        "School-leaving certificate (university entrance qualification)",
        "Certified translations if documents are not in German or English",
        "APS certificate (China, India, Vietnam only)",
      ],
      sources: [src.ecoPage, src.ecoApp, src.ecoZzo, src.dates, src.fee],
      caveats: [
        ...sharedCaveats,
        "The application page says the programme still has German-language electives and asks for German at DSH-2 level (courses can be taken before the deadline). The same page, the regulations and the programme page say no German proof is needed. We treat German as not required: confirm with the programme management before relying on this.",
        "The application page asks for 135 ECTS at application for provisional applications. The binding regulations (17 Feb 2025) say grades for at least 140 ECTS. We use 140.",
        "The point table for the economics and maths grades is in an attachment we could not read, so we do not give the exact scale.",
        "The Business Administration and Business Development regulations were renewed in February 2026. We found the Economics regulations only in the February 2025 version and did not see a 2026 update.",
        "Intake is winter and summer. The deadline shown is for winter 2027/28 (the summer intake uses a different window).",
      ],
    },

    // ---------- Information Systems (three majors) ----------
    {
      ...isBase,
      id: "ms-is-data-science",
      name: "Information Systems – Major Data Science",
      fields: ["information-systems", "analytics"],
      language: "English (taught exclusively in English)",
      ectsRules: [
        [
          { cats: ["business", "informatics", "math", "statistics"], min: 72, label: "IS / computer science / quantitative methods / business administration" },
          { cats: ["informatics", "math", "statistics"], min: 24, label: "Quantitative methods / computer science (major area)" },
        ],
      ],
      ectsNote: "At least 72 ECTS across information systems, computer science, quantitative methods and business administration, of which at least 24 ECTS in quantitative methods and computer science (Data Science major). Courses are assigned by content. Business law, soft skills and languages do not count.",
    },
    {
      ...isBase,
      id: "ms-is-bpm",
      name: "Information Systems – Major Business Process Management",
      fields: ["information-systems", "management"],
      language: "English (taught exclusively in English)",
      ectsRules: [
        [
          { cats: ["business", "informatics", "math", "statistics"], min: 72, label: "IS / computer science / quantitative methods / business administration" },
          { cats: ["business", "informatics"], min: 12, label: "Information systems / business administration (major area)" },
          { cats: ["informatics", "math", "statistics"], min: 12, label: "Quantitative methods / computer science (major area)" },
        ],
      ],
      ectsNote: "At least 72 ECTS across information systems, computer science, quantitative methods and business administration, of which at least 12 ECTS in information systems/business administration and 12 ECTS in quantitative methods/computer science (Business Process Management major). The checker may count the same informatics ECTS twice. Count them once for the two 12 ECTS blocks.",
    },
    {
      ...isBase,
      id: "ms-is-mdb",
      name: "Information Systems – Major Managing Digital Business",
      fields: ["information-systems", "management"],
      language: "English (taught exclusively in English)",
      ectsRules: [
        [
          { cats: ["business", "informatics", "math", "statistics"], min: 72, label: "IS / computer science / quantitative methods / business administration" },
          { cats: ["business", "informatics"], min: 24, label: "Business administration / information systems (major area)" },
        ],
      ],
      ectsNote: "At least 72 ECTS across information systems, computer science, quantitative methods and business administration, of which at least 24 ECTS in business administration and information systems (Managing Digital Business major).",
    },
  ]);
})();
