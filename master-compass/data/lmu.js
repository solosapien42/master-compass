/* Ludwig-Maximilians-Universität München (LMU). Checked 2026-11-17. */
(function () {
  const som = "https://www.som.lmu.de/en/studies/study-offer/";
  const wipaed = "https://www.som.lmu.de/wipaed/";
  const econ = "https://www.econ.lmu.de/en/study/master-in-economics/";
  const ioNote =
    "Applicants with a foreign degree must also apply to the LMU International Office (new LMU application portal, from December 2026) by 15 July 2027. The faculty's admission letter can be submitted later.";
  const ioSource = {
    label: "International Office: master's application guide",
    url: "https://www.lmu.de/de/studium/internationale-vollzeit-studierende/studienbewerbung/bewerbungshilfen-und-faq/leitfaden-fuer-die-bewerbung-zum-masterstudium/",
  };
  const feeSource = { label: "Fees", url: "https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/studierendenwerksbeitraege/" };
  const germanSource = { label: "German certificates (LMU)", url: "https://www.lmu.de/en/study/degree-students/prerequisites/german-proficiency/" };
  const toeflCaveat =
    "TOEFL iBT changed to a 1-6 band scale in January 2026. The page states only old-scale scores (0-120). Ask the programme which new-scale band it accepts.";

  const base = {
    university: "LMU Munich",
    city: "Munich",
    state: "Bavaria",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter only",
    fees: {
      tuitionNonEU: 0,
      semester: "€97 per semester (Studierendenwerk basic fee, winter 2026/27; no semester-ticket surcharge at present)",
      tuitionNote:
        "LMU states that no tuition fees have been charged since winter 2013/14. Bavarian law allows fees for non-EU students, but no LMU page announces any.",
    },
    lastChecked: "2026-11-17",
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "lmu-bwl",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "finance", "marketing", "accounting"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: false,
        note: "A first degree in an economics-type subject (at least 180 ECTS). Business and/or economics must be the major: more than half of all ECTS. A minor is not enough, and missing modules cannot be made up before applying.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 15, label: "General business administration" },
          { cats: ["economics"], min: 15, label: "Economics" },
          { cats: ["business", "economics"], minPctOfTotal: 50, label: "Business + economics (more than half)" },
        ],
      ],
      partialMinEcts: 140,
      grade: {
        min: null,
        selection:
          "No minimum grade. Stage 1: written entrance exam in person in Munich (2026 date: 5 June), or GMAT ≥600 / GMAT Focus ≥565 instead. Stage 2: about 15-minute selection interview in person in Munich. Pass/fail, no ranking.",
      },
      test: {
        status: "optional",
        accepted: ["GMAT", "GMAT Focus"],
        note: "GMAT ≥600 or GMAT Focus ≥565 replaces the written entrance exam. It is only a threshold, not part of the evaluation. Submit by 15 May.",
      },
      english: {
        cefr: "English proof",
        ielts: 7.5,
        toefl: 100,
        englishMedium: "yes",
        note: "Accepted: IELTS 7.5, TOEFL iBT 100 (tests before 26 Jan 2026) or band 5 (tests after 26 Jan 2026), TOEFL cbt 250 / pbt 600, Cambridge CPE. Home editions accepted; Duolingo and Goethe not. Waived if your degree was 100% English-taught; use LMU's certificate form if your transcript does not show this.",
      },
      german: {
        cefr: "C1",
        note: "Needed unless your degree or school leaving certificate was German-taught. The admission statute names TestDaF 4 in all four parts or DSH-2.",
      },
      application: {
        route: "Online application form (LMU EFV portal), then the International Office",
        vpd: false,
        opens: "2027-02-01",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Window: February to 15 May (strict cut-off; late documents and scores are not accepted). " + ioNote,
      },
      interview: true,
      documents: [
        "Online application form",
        "CV (tabular)",
        "Degree certificate, or transcript with at least 140 ECTS (simple copies are enough)",
        "English proof (unless degree fully English-taught)",
        "German proof (unless degree or school certificate German-taught)",
        "Optional: GMAT / GMAT Focus score report, or LMU credit-recognition certificate for the entrance exam",
      ],
      sources: [
        { label: "Programme", url: som + "master-business-administration/" },
        { label: "FAQ", url: som + "master-business-administration/master-faq/" },
        { label: "Accepted language proofs (PDF)", url: "https://cms-cdn.lmu.de/media/04-som/irc/downloads-master/sprachnachweise-2026_beschreibbar.pdf" },
        { label: "Admission statute (PDF)", url: "https://cms-cdn.lmu.de/media/04-som/fakultaetswebsite-som/downloads/eignungssatzung_master_bwl.pdf" },
        germanSource,
        ioSource,
        feeSource,
      ],
      caveats: [
        "The exact opening date in February 2027 and the 2027 entrance-exam date are not yet published.",
        "The programme page does not state a German level. C1 is taken from the 2010 admission statute (TestDaF 4 x 4 or DSH-2), which has since been amended.",
        "The 2010 statute also lists a professor's recommendation letter. The current programme page does not ask for one.",
        "The International Office deadline (15 July) is not mentioned on the programme page; it comes from LMU's central pages.",
      ],
    },
    {
      ...base,
      id: "lmu-mmt",
      name: "Management & Digital Technologies",
      fields: ["management", "information-systems"],
      languageKey: "English",
      language: "English (all core courses, electives and thesis)",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: false,
        note: "At least 180 ECTS: a business major with ≥20 ECTS informatics, an informatics/CS major with ≥20 ECTS business, or an interdisciplinary degree (e.g. information systems, business engineering) with ≥20 ECTS in each. Engineering degrees (mechanical, civil, electrical) normally do not qualify.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 20, label: "Business (major)" },
          { cats: ["informatics"], min: 15, label: "Informatics minor (15 of 20 at application)" },
        ],
        [
          { cats: ["informatics"], min: 20, label: "Informatics (major)" },
          { cats: ["business"], min: 15, label: "Business minor (15 of 20 at application)" },
        ],
      ],
      ectsNote:
        "The minor needs 20 ECTS; 15 are enough at application and the rest can be completed in year one. Business minor must include accounting, principles of management and marketing, plus one of: economics, cost accounting, corporate finance, organisation/HR. Informatics minor must include programming, algorithms & data structures / data analytics and software engineering, plus intro to CS or data management. Excel-type courses do not count. LMU's online 'Basics in Programming' course (6 ECTS) can count.",
      partialMinEcts: 140,
      grade: {
        min: 2.39,
        selection:
          "Grade 2.3 or better (below 2.40; decimals after the first are cut, not rounded). Then an online exam (business, computer science) and an online interview with professors.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE. All eligible applicants take LMU's own online exam." },
      english: {
        cefr: "C1",
        ielts: 7.0,
        toefl: 95,
        englishMedium: "yes",
        note: "Also accepted: Cambridge CAE (pass), telc C1, LCCI EFB level 3. Tests max. 2 years old. Waived for native speakers or a school/bachelor/master degree taught entirely in English (proof required).",
      },
      german: null,
      extraLanguage: "Free intensive German courses are offered but not required.",
      application: {
        route: "Online application form (SoM), then the International Office",
        vpd: false,
        opens: "2027-02-01",
        deadline: "2027-05-15",
        note: "Form open 1 February to 15 May 2027. Review until end of May, assessment mid-June, decision early July. " + ioNote,
      },
      interview: true,
      documents: [
        "Bachelor certificate & transcript (or transcript with ≥140 ECTS)",
        "Proof of grade ≤2.39 (German scale)",
        "English proof or waiver document",
        "CV",
        "Basics in Programming result (if used)",
      ],
      sources: [
        { label: "Programme", url: som + "master-management-digital-technologies/" },
        { label: "Application", url: som + "master-management-digital-technologies/application-and-submission/" },
        { label: "At a glance", url: som + "master-management-digital-technologies/mmt-at-a-glance/" },
        ioSource,
        feeSource,
      ],
      caveats: [
        "The page states the grade threshold as both '2.3 or better (below 2.40)' and '2.39 or better'. Foreign grades are converted with the modified Bavarian formula.",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "lmu-econ",
      name: "Economics",
      fields: ["economics"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Economics or a subject related in content or methods, e.g. economics & business studies, international relations, finance or mathematics.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums. The admission test covers microeconomics, macroeconomics, empirical economics and mathematical methods.",
      partialMinPct: 75,
      grade: {
        min: 2.5,
        selection:
          "Grade 2.0 or better with an equivalent economics bachelor: direct admission. Otherwise (related degree, or grade 2.01-2.5): 90-minute written admission test in person in Munich (end of May / early June). Pass: ≥60% overall and ≥20% in each relevant part.",
      },
      test: { status: "none", accepted: [], note: "GRE/GMAT are not required." },
      english: {
        cefr: "English proof",
        ielts: 6.5,
        toefl: 80,
        englishMedium: "yes",
        note: "Or a degree from an institution where all teaching was in English (must be stated on the transcript/certificate). Scores can be emailed until 31 August.",
      },
      german: null,
      application: {
        route: "LMU online application tool (Economics)",
        vpd: false,
        opens: "2027-04-01",
        deadline: "2027-04-30",
        note: "Only 1-30 April. Decisions in May; test end of May / early June. " + ioNote,
      },
      interview: false,
      documents: [
        "Bachelor certificate with grade and grading scale (or transcript + certified weighted average)",
        "Transcript / course list",
        "English proof",
        "CV in English",
        "Motivation letter (2,000-3,000 characters, pasted as plain text)",
        "Official translations if not German/English",
      ],
      sources: [
        { label: "Programme", url: econ + "master-of-science-in-economics/" },
        { label: "Application", url: econ + "master-of-science-in-economics/application/" },
        ioSource,
        feeSource,
      ],
      caveats: [
        "Whether a foreign economics bachelor counts as 'equivalent' (direct admission) or only 'related' (test needed) is decided case by case.",
        "The page does not name the 2027 cycle; the 1-30 April 2027 window follows the stated yearly pattern.",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "lmu-mqe",
      name: "Quantitative Economics (MQE, research master)",
      fields: ["economics", "analytics"],
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Economics or a subject related in content or methods, e.g. economics & business studies, international relations, finance or mathematics. Research-oriented, very quantitative.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject minimums. The admission test covers microeconomics, macroeconomics, empirical economics and mathematical methods.",
      partialMinPct: 75,
      grade: {
        min: 2.5,
        selection:
          "Grade 2.5 or better. Then GRE (≥75th percentile) or a 90-minute written admission test in Munich (≥60% overall, ≥20% per part). Then an admission interview.",
      },
      test: {
        status: "optional",
        accepted: ["GRE"],
        note: "A GRE at or above the 75th percentile skips the admission test. Without it you are invited to the test.",
      },
      english: {
        cefr: "English proof",
        ielts: 6.5,
        toefl: 80,
        englishMedium: "yes",
        note: "Or a degree from an institution where all teaching was in English. Scores can be emailed until 31 August.",
      },
      german: null,
      application: {
        route: "LMU online application tool (MQE)",
        vpd: false,
        opens: "2027-02-15",
        deadline: "2027-03-15",
        note: "Only 15 February - 15 March. " + ioNote,
      },
      interview: true,
      documents: [
        "Bachelor certificate with grade and grading scale (or transcript + certified weighted average)",
        "Transcript / course list",
        "English proof",
        "CV in English",
        "Motivation letter (2,000-3,000 characters, pasted as plain text)",
        "Names of two academic referees (no letters uploaded)",
        "Optional: GRE score",
        "Official translations if not German/English",
      ],
      sources: [
        { label: "Programme", url: econ + "master-of-science-in-research-mqe/" },
        { label: "Application", url: econ + "master-of-science-in-research-mqe/application/" },
        ioSource,
        feeSource,
      ],
      caveats: [
        "The page also gives a C1 level of TOEFL 95 / IELTS 7.0 next to the application minimum of TOEFL 80 / IELTS 6.5. Confirm which applies.",
        "Test date conflicts on the page: the timeline says end of March (interviews end of April), the test section says end of May / early June.",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "lmu-wipaed-1",
      name: "Business Education I (Wirtschaftspädagogik I)",
      fields: ["management"],
      languageKey: "German/English",
      language: "German and English",
      notice: {
        type: "info",
        text: "Prepares mainly for teaching at vocational schools (Bavarian Referendariat), and for corporate training/HR roles. It is an M.Sc., not an M.Ed.",
      },
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: false,
        note: "A first degree in an economics-type subject with at least 180 ECTS.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 15, label: "General business administration" },
          { cats: ["economics"], min: 15, label: "Economics" },
        ],
      ],
      ectsNote: "Also at least 12 ECTS in business education (Wirtschaftspädagogik / human resource education & management). Courses from other universities need module descriptions.",
      partialMinEcts: 140,
      grade: {
        min: null,
        selection:
          "No minimum grade. Stage 1: multiple-choice entrance exam (research methods, business education, two business topics), or GMAT ≥600 / GMAT Focus ≥565 instead. Stage 2: selection interview.",
      },
      test: {
        status: "optional",
        accepted: ["GMAT", "GMAT Focus"],
        note: "GMAT ≥600 or GMAT Focus ≥565 replaces the entrance exam. Submit by 15 May.",
      },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "B2 proof: school certificate showing B2, English-taught school leaving certificate, or a fully English-taught degree. No test scores are listed.",
      },
      german: {
        cefr: "C1",
        note: "Needed unless your degree or school leaving certificate was German-taught. The page links LMU's list of accepted certificates (DSH-2, TestDaF 4 x 4, telc C1 Hochschule, Goethe C2 etc.).",
      },
      application: {
        route: "Online application form (LMU EFV portal), then the International Office",
        vpd: false,
        opens: "2027-02-01",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Window: February to 15 May (strict cut-off). " + ioNote,
      },
      interview: true,
      documents: [
        "Online application form (printed and signed if requested)",
        "CV (tabular)",
        "Degree certificate, or transcript with at least 140 ECTS",
        "Proof of required ECTS (with module descriptions for non-LMU courses)",
        "English B2 proof",
        "German proof (if applicable)",
        "Optional: GMAT score or credit notice for the entrance exam",
      ],
      sources: [
        { label: "Programme", url: wipaed + "en/study-offer/master-human-resource-education-management/" },
        { label: "Programme (German)", url: wipaed + "de/studienangebot/master-wirtschaftspaedagogik/" },
        germanSource,
        ioSource,
        feeSource,
      ],
      caveats: [
        "The programme page does not state the German level. C1 is inferred from LMU's general German certificates for registration.",
        "The English page says to print, sign and post the application; the German page mentions online upload. Check the current process.",
        "The exact opening date in February 2027 and the entrance-exam date are not published.",
      ],
    },
    {
      ...base,
      id: "lmu-wipaed-2",
      name: "Business Education II with second subject (Wirtschaftspädagogik II)",
      fields: ["management"],
      languageKey: "German/English",
      language: "German and English",
      notice: {
        type: "info",
        text: "Prepares mainly for teaching business plus a second school subject at vocational schools (Bavarian Referendariat). It is an M.Sc., not an M.Ed.",
      },
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: false,
        note: "A first degree in an economics-type subject with at least 180 ECTS, including at least 36 ECTS in a school subject (German, English, theology, mathematics, French, Spanish, computer science or Berufssprache Deutsch).",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 15, label: "General business administration" },
          { cats: ["economics"], min: 15, label: "Economics" },
        ],
      ],
      ectsNote: "Also at least 15 ECTS in business education (Wirtschaftspädagogik) and at least 36 ECTS in the chosen second (school) subject.",
      partialMinEcts: 140,
      grade: {
        min: null,
        selection:
          "No minimum grade. A grade of 1.0 goes straight to the interview. Otherwise Stage 1: multiple-choice entrance exam, or GMAT ≥600 / GMAT Focus ≥565 instead. Stage 2: selection interview.",
      },
      test: {
        status: "optional",
        accepted: ["GMAT", "GMAT Focus"],
        note: "GMAT ≥600 or GMAT Focus ≥565 replaces the entrance exam. Submit by 15 May.",
      },
      english: {
        cefr: "B2",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "B2 proof: school certificate showing B2, English-taught school leaving certificate, or a fully English-taught degree. No test scores are listed.",
      },
      german: {
        cefr: "C1",
        note: "Needed unless your degree or school leaving certificate was German-taught. The page links LMU's list of accepted certificates (DSH-2, TestDaF 4 x 4, telc C1 Hochschule, Goethe C2 etc.).",
      },
      application: {
        route: "Online application form (LMU EFV portal), then the International Office",
        vpd: false,
        opens: "2027-02-01",
        opensApprox: true,
        deadline: "2027-05-15",
        note: "Window: February to 15 May (strict cut-off). You can apply to WiPäd I and II at the same time with separate forms. " + ioNote,
      },
      interview: true,
      documents: [
        "Online application form (printed and signed if requested)",
        "CV (tabular)",
        "Degree certificate, or transcript with at least 140 ECTS",
        "Proof of required ECTS incl. second subject (with module descriptions for non-LMU courses)",
        "English B2 proof",
        "German proof (if applicable)",
        "Optional: GMAT score or credit notice for the entrance exam",
      ],
      sources: [
        { label: "Programme", url: wipaed + "en/study-offer/master-human-resource-education-management/" },
        { label: "Programme (German)", url: wipaed + "de/studienangebot/master-wirtschaftspaedagogik/" },
        germanSource,
        ioSource,
        feeSource,
      ],
      caveats: [
        "The programme page does not state the German level. C1 is inferred from LMU's general German certificates for registration.",
        "The English page says to print, sign and post the application; the German page mentions online upload. Check the current process.",
        "The exact opening date in February 2027 and the entrance-exam date are not published.",
      ],
    },
  ]);
})();
