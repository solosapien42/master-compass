/* Technical University of Munich (TUM) – TUM School of Management (Munich, Heilbronn, Straubing) + one School of Life Sciences economics master. Checked 2026-11-17. */
(function () {
  const mgt = "https://www.mgt.tum.de/programs/";
  const tumDetail = "https://www.tum.de/en/studies/degree-programs/detail/";
  const feeSource = { label: "Tuition fees (non-EU)", url: "https://www.tum.de/en/studies/fees/tuition" };
  const langSource = {
    label: "TUM language certificates",
    url: "https://www.tum.de/en/studies/application/application-info-portal/admission-requirements/language-certificates",
  };

  const turkNote =
    "Turkish citizens are exempt only if a parent lives in Germany, is or was legally employed there for at least one continuous year (self-employment does not count), and you live with that parent in Germany at the time of application.";
  const tuitionNote = (now, next) =>
    `TUM lists this programme at €${now} per semester today. Master's fees rise to €4,600 or €6,800 per semester for students who start in winter 2027/28, so €${next} is expected. ${turkNote}`;
  const feeCaveat =
    "TUM announces only that master's fees rise from €4,000/€6,000 to €4,600/€6,800 in winter 2027/28. It does not yet list the new amount per programme. The amount shown assumes the €4,000 tier becomes €4,600 and the €6,000 tier becomes €6,800.";
  const heilbronnFeeNote =
    "The School of Management lists \"No tuition fees\" for this Heilbronn programme, and TUM's programme page states no tuition amount (Munich programmes state €4,000 or €6,000). TUM's central fee page does not mention a Heilbronn exemption.";
  const heilbronnFeeCaveat =
    "Tuition-free status at Campus Heilbronn comes from the School of Management programme page only. TUM's central tuition page does not confirm a Heilbronn exemption, and TUM fees rise in winter 2027/28. Confirm with admission_heilbronn@mgt.tum.de.";
  const toeflCaveat =
    "TUM states TOEFL iBT 88 on the old 0-120 scale (Test Date Score only, no MyBest). TOEFL moved to a 1-6 band scale in January 2026. Check which new-scale band TUM accepts.";
  const vpdNote =
    "Apply in TUMonline within the window. Applicants with a non-German degree also need a VPD from uni-assist: the uni-assist application must be made before the window closes, but the VPD itself can follow later. Formal checks by the TUM Center for Study and Teaching can take several weeks.";

  const somEnglish = {
    cefr: "English proof",
    ielts: 6.5,
    toefl: 88,
    englishMedium: "yes",
    note: "One of: IELTS Academic 6.5, TOEFL iBT 88, Cambridge CAE/CPE (grade A-C), PTE Academic 65; OR a degree taught and assessed in English, or at least 12 ECTS of English-taught courses and/or thesis (official confirmation + TUM SOM form); OR GMAT at the 53rd percentile or higher. Duolingo is not accepted.",
  };
  const somTest = {
    status: "optional",
    accepted: ["GMAT", "GMAT Focus"],
    note: "Optional for Turkish degrees and adds up to 10 points in stage 1 (points start at the 72nd percentile). GRE is not accepted. Mandatory (≥65th percentile) only for bachelor's degrees from China, Egypt, India, Pakistan and Bangladesh.",
  };
  const somDocs = [
    "Transcript of records (one merged PDF, at least 140 ECTS)",
    "Degree certificate, if already graduated",
    "Passport / photo ID",
    "CV",
    "Module catalogue / course descriptions (text-searchable)",
    "Curricular analysis PDF (TUM SOM online tool)",
    "English proof",
    "VPD from uni-assist",
    "Optional: GMAT score (TUM must be able to verify it)",
  ];

  const base = {
    university: "Technical University of Munich (TUM)",
    city: "Munich",
    state: "Bavaria",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    languageKey: "English",
    english: somEnglish,
    german: null,
    test: somTest,
    partialMinEcts: 140,
    application: {
      route: "Online via TUMonline. Applicants with a foreign degree also need a VPD from uni-assist",
      vpd: true,
      opens: "2027-04-01",
      deadline: "2027-05-31",
      note: vpdNote,
    },
    interview: false,
    documents: somDocs,
    lastChecked: "2026-11-17",
  };
  const munichFees = (now, next) => ({
    tuitionNonEU: next,
    semester: "€97 per semester (student union fee; winter 2027/28 amount not yet published)",
    tuitionNote: tuitionNote(now, next),
  });
  const heilbronnFees = {
    tuitionNonEU: 0,
    semester: "€97 per semester (student union fee; winter 2027/28 amount not yet published)",
    tuitionNote: heilbronnFeeNote,
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "tum-mmt",
      name: "Management & Technology",
      fields: ["management"],
      intake: "Winter & summer",
      language: "English (up to 100%; some technology specialisations are bilingual German/English)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in business, economics, management, management & technology, industrial engineering, information systems or a comparable programme. A master's degree cannot be the applying degree.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 25, label: "Business / management" },
          { cats: ["economics"], min: 10, label: "Economics" },
          { cats: ["engineering"], min: 15, label: "Engineering / natural sciences" },
        ],
      ],
      ectsNote:
        "Hard minimums, no conditional admission. At least 5 ECTS in operations research adds 10 selection points. Only passed modules count; courses from additional transcripts can be used.",
      grade: {
        min: null,
        selection:
          "Stage 1 (max 60): 30 points for meeting the business and economics minimums, +10 for ≥5 ECTS operations research, up to 10 for the grade (1.0 = 10, 2.0 = 5, 2.9 or worse = 0; best-140-ECTS average used if better), up to 10 for GMAT. 45+ = direct admission, 35-44 = admission test, 34 or less = rejection. Stage 2: stage-1 points without GMAT + test (max 40: math/statistics, business/accounting, micro/macro, 400-word mini-essay). 70+ = admission. Without operations research credits you need a GMAT or a very good grade.",
      },
      fees: munichFees(4000, 4600),
      sources: [
        { label: "Programme", url: mgt + "master-in-management-technology" },
        { label: "How to apply", url: mgt + "master-in-management-technology/how-to-apply" },
        { label: "Assessment procedure", url: mgt + "master-in-management-technology/curriculum-assessment" },
        { label: "TUM programme page", url: tumDetail + "management-and-technology-tum-bwl-master-of-science-msc" },
        langSource,
        feeSource,
      ],
      caveats: [
        feeCaveat,
        "The assessment page currently describes the summer 2027 round (test end of January / early February). Winter 2027/28 test dates are not yet published.",
        "German is not required for admission, but some technology specialisations are taught partly in German.",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "tum-mim",
      name: "Master in Management (Munich)",
      fields: ["management"],
      intake: "Winter only",
      language: "English (up to 100%; German widens course choice)",
      extraLanguage: "Basic German (about A1) by the end of semester 2.",
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: false,
        note: "Only for bachelors (at least 6 semesters) in engineering (mechanical, electrical, civil, architecture or equivalent) or natural sciences (physics, computer science, mathematics, nutrition science, sports science or other). Industrial engineering is excluded. The full list is in the German statute.",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums. Eligibility depends on your degree field. No conditional admission.",
      grade: {
        min: null,
        selection:
          "Stage 1: 50 points for an eligible degree + up to 15 for the grade (1.0 = 15, 1.3 = 12, 2.0 = 5, 2.5 or worse = 0; best-140-ECTS average used if better) + up to 10 for GMAT. 62+ = direct admission (about 1.3 without GMAT), 50-61 = admission test. Stage 2: stage-1 points without GMAT + test (max 40: math, logic, problem solving, short essay). 80+ = admission. Test dates: end of June and mid-September.",
      },
      fees: munichFees(4000, 4600),
      sources: [
        { label: "Programme", url: mgt + "master-in-management/munich" },
        { label: "How to apply", url: mgt + "master-in-management/munich/how-to-apply" },
        {
          label: "Assessment procedure (PDF, WS 2026/27+)",
          url: "https://www.mgt.tum.de/fileadmin/mgt.tum.de/downloads/MiM/Application/MIM_How_does_the_Assessment_procedure_work_WS26_27.pdf",
        },
        langSource,
        feeSource,
      ],
      caveats: [feeCaveat, toeflCaveat],
    },
    {
      ...base,
      id: "tum-mim-hn",
      name: "Master in Management (Heilbronn)",
      city: "Heilbronn",
      state: "Baden-Württemberg",
      fields: ["management"],
      intake: "Winter only",
      language: "English (100%)",
      extraLanguage: "Basic German (about A1) by the end of semester 2.",
      english: {
        ...somEnglish,
        note: "One of: IELTS Academic 6.5, TOEFL iBT 88, Cambridge CAE/CPE (grade A-C), PTE Academic 65; OR a degree taught and assessed in English, or at least 12 ECTS of English-taught courses and/or thesis (official confirmation + TUM SOM form); OR GMAT 600+. Duolingo is not accepted.",
      },
      partialMinEcts: undefined,
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: false,
        note: "Only for bachelors (at least 6 semesters) in engineering, natural sciences, computer science, mathematics, architecture or a comparable field. Industrial engineering graduates are usually not eligible (consider Management & Digital Technology instead).",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums. Eligibility depends on your degree field. No conditional admission.",
      grade: {
        min: null,
        selection:
          "Same scheme as in Munich. Stage 1: 50 points for an eligible degree + up to 15 for the grade (1.0 = 15, 2.5 or worse = 0) + up to 10 for GMAT. 62+ = direct admission, 50-61 = admission test (online or on campus). Stage 2: stage-1 points without GMAT + test (max 40). 80+ = admission. 2026 test dates were early July and early August.",
      },
      fees: heilbronnFees,
      sources: [
        { label: "Programme", url: mgt + "master-in-management/heilbronn" },
        { label: "How to apply", url: mgt + "master-in-management/heilbronn/how-to-apply" },
        {
          label: "Assessment procedure (PDF, WS 2026/27+)",
          url: "https://www.mgt.tum.de/fileadmin/mgt.tum.de/downloads/MiM/HN/MiM_How_does_the_assessment_procedure_work_WS26_27.pdf",
        },
        { label: "TUM programme page", url: tumDetail + "management-main-location-heilbronn-master-of-science-msc" },
        langSource,
        feeSource,
      ],
      caveats: [
        heilbronnFeeCaveat,
        "The Heilbronn page accepts GMAT 600+ as English proof; the Munich pages say the 53rd percentile. Check which applies.",
        "No minimum number of completed ECTS at application is stated for Heilbronn (Munich asks for 140).",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "tum-mmdt",
      name: "Management & Digital Technology (Heilbronn)",
      city: "Heilbronn",
      state: "Baden-Württemberg",
      fields: ["management", "information-systems"],
      intake: "Winter & summer",
      language: "English (100%)",
      extraLanguage: "Basic German (about A1) by the end of semester 2.",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor (at least 6 semesters) in management & technology, management, economics, industrial engineering or a comparable programme.",
      },
      ectsRules: [],
      ectsNote:
        "Five module groups give up to 50 selection points: business ≥25 ECTS, economics ≥10, empirical research methods ≥5, operations research ≥5, programming ≥5 (joined by \"and/or\", so none is a hard minimum alone). A group below its minimum gives 0 points. You realistically need most of the five groups to reach the admission test. If only single subjects are missing, the committee may require bachelor exams from Management and Data Science in year 1.",
      grade: {
        min: null,
        selection:
          "Stage 1: up to 50 points for module groups + up to 9 for the grade + GMAT points (from the 72nd percentile). 51+ = direct admission, 45-50 = admission test, 44 or less = rejection. Stage 2: stage-1 points without GMAT + test (max 40: math/statistics, business/accounting, micro/macro, short essay). 70+ = admission.",
      },
      fees: heilbronnFees,
      sources: [
        { label: "Programme", url: mgt + "master-in-management-digital-technology" },
        { label: "How to apply", url: mgt + "master-in-management-digital-technology/how-to-apply" },
        {
          label: "Assessment procedure (PDF, WS 2026/27+)",
          url: "https://www.mgt.tum.de/fileadmin/mgt.tum.de/downloads/MMDT/MMDT_How_does_the_assessment_procedure_work_WS26_27.pdf",
        },
        { label: "TUM programme page", url: tumDetail + "management-and-digital-technology" },
        langSource,
        feeSource,
      ],
      caveats: [
        heilbronnFeeCaveat,
        "Points per module group and the grade-to-points table are not readable in the assessment PDF.",
        "The how-to-apply page does not mention GMAT as English proof (other TUM SOM pages accept the 53rd percentile).",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "tum-fim",
      name: "Finance & Information Management",
      fields: ["finance", "information-systems"],
      intake: "Winter only",
      language: "English (100%)",
      extraLanguage: "Basic German (about A1) by the end of semester 2.",
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor (at least 140 ECTS at application) in economics, business, industrial engineering, information systems, computer science, mathematics, financial/business mathematics, statistics or a related field. Run with the University of Bayreuth; you study in Munich and apply to TUM.",
      },
      ectsRules: [],
      ectsNote:
        "Hard requirement: at least 5 ECTS of academic writing (bachelor thesis, project or paper). At least 12 ECTS in business, OR in mathematics, OR in computer science adds 10 selection points. No conditional admission.",
      grade: {
        min: null,
        selection:
          "Stage 1 (max 70): 10 points for academic writing + 10 for ≥12 ECTS business/math/CS + up to 15 for the grade (1.0 = 15, 2.0 = 5, 2.5 or worse = 0) + up to 10 for GMAT (from the 72nd percentile) + up to 25 for the essay. 62+ = direct admission, 40-61 = interview, 39 or less = rejection. Stage 2: stage-1 points without GMAT and essay + interview incl. group discussion (max 25). 48+ = admission. Essays using AI tools are excluded.",
      },
      interview: true,
      application: {
        ...base.application,
        opens: "2027-01-01",
        rounds: ["2027-03-15", "2027-05-31"],
        note: "Two rounds treated equally: 1 Jan-15 Mar and 16 Mar-31 May 2027 (round 1 gets faster results). " + vpdNote,
      },
      fees: munichFees(6000, 6800),
      documents: [
        ...somDocs,
        "Essay on the set topic (2027 topic not yet published)",
        "Writing sample from your bachelor (individual work, ≥10 A4 pages, with bibliography and course description)",
      ],
      sources: [
        { label: "Programme", url: mgt + "master-in-finance-information-management" },
        { label: "How to apply", url: mgt + "master-in-finance-information-management/how-to-apply" },
        {
          label: "Assessment procedure (PDF)",
          url: "https://www.mgt.tum.de/fileadmin/mgt.tum.de/downloads/FIM/Application/FIM_How_does_the_assessment_procedure_work_WS2026_27.pdf",
        },
        { label: "TUM programme page", url: tumDetail + "finance-and-information-management-fim-master-of-science-msc" },
        langSource,
        feeSource,
      ],
      caveats: [
        feeCaveat,
        "The how-to-apply page lists economics, industrial engineering, information systems, mathematics and statistics. The assessment PDF also names business, social sciences and computer science. Business graduates should confirm eligibility.",
        "The assessment PDF linked as WS 2026/27 says on its cover \"valid for winter 2024/25 or later\".",
        "Application rounds are taken from the current page without a year. Confirm the 2027 dates.",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "tum-mcs",
      name: "Consumer Science",
      fields: ["marketing"],
      intake: "Winter only",
      language: "English (up to 100%; German widens course choice)",
      extraLanguage: "Basic German (about A1) by the end of semester 2.",
      bachelorFields: {
        standard: ["business", "economics", "social"],
        relatedAllowed: true,
        note: "Bachelor (at least 6 semesters, 140 ECTS at application) in management, economics or a social science (e.g. sociology, psychology, communication science).",
      },
      ectsRules: [[{ cats: ["math", "statistics"], min: 15, label: "Empirical methods / statistics / math" }]],
      ectsNote:
        "Empirical research methods and quantitative methods courses also count toward the 15 ECTS. A bachelor thesis or other academic paper of ≥5 ECTS adds 10 selection points. No conditional admission.",
      bonusRules: [
        { label: "Business modules (or social / communication sciences ≥10 ECTS)", points: 10, conds: [{ cats: ["business"], min: 10, label: "Business / management" }] },
        { label: "Economics modules (or consumer behaviour ≥5 ECTS)", points: 10, conds: [{ cats: ["economics"], min: 5, label: "Economics" }] },
      ],
      grade: {
        min: null,
        selection:
          "Stage 1: up to 40 points for module groups (10 for the 15 ECTS methods, 10 writing, 10 business/social, 10 economics/consumer behaviour) + up to 10 for the grade (1.0-1.1 = 10, 2.0-2.1 = 5, 3.0 or worse = 0) + up to 10 for GMAT. 50+ = direct admission, 39-49 = admission test, 38 or less = rejection. Stage 2: stage-1 points without GMAT + test (max 40). 69+ = admission. Test dates: end of June and mid-September.",
      },
      fees: munichFees(6000, 6800),
      sources: [
        { label: "Programme", url: mgt + "master-in-consumer-science" },
        { label: "How to apply", url: mgt + "master-in-consumer-science/how-to-apply" },
        {
          label: "Assessment procedure (PDF, WS 2026/27+)",
          url: "https://www.mgt.tum.de/fileadmin/mgt.tum.de/downloads/MCS/Application/MCS_How_does_the_assessment_procedure_work.pdf",
        },
        { label: "TUM programme page", url: tumDetail + "consumer-science-master-of-science-msc" },
        langSource,
        feeSource,
      ],
      caveats: [feeCaveat, toeflCaveat],
    },
    {
      ...base,
      id: "tum-msmt",
      name: "Sustainable Management & Technology (Straubing)",
      city: "Straubing",
      fields: ["management", "sustainability"],
      intake: "Winter & summer",
      language: "English (100%)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Any bachelor (at least 6 semesters, 140 ECTS at application). No field restriction is stated, but selection points depend on management, economics, methods, natural science and sustainability modules.",
      },
      ectsRules: [],
      ectsNote:
        "Module groups give up to 60 points: management ≥20 ECTS (20 points), economics ≥10 (10), operations research ≥5 (5), empirical methods ≥5 (5), natural sciences ≥10 (10), sustainability & circular economy ≥10 (10). A group below its minimum gives 0 points. Modules from outside your bachelor can count.",
      bonusRules: [
        { label: "Management modules", points: 20, conds: [{ cats: ["business"], min: 20, label: "Business / management" }] },
        { label: "Economics modules", points: 10, conds: [{ cats: ["economics"], min: 10, label: "Economics" }] },
        { label: "Empirical methods", points: 5, conds: [{ cats: ["statistics"], min: 5, label: "Statistics / empirical methods" }] },
        { label: "Natural science modules", points: 10, conds: [{ cats: ["engineering"], min: 10, label: "Natural sciences / engineering" }] },
      ],
      grade: {
        min: null,
        selection:
          "Stage 1 (max 100): up to 60 points for module groups + up to 30 for the average of your best 140 ECTS (1.0 = 30, 1.5 = 20, 2.0 = 10, 2.5 = 5, 3.0 or worse = 0) + up to 10 for GMAT. 62+ = direct admission, 42-61 = online admission test, below 42 = rejection. Stage 2: stage-1 points without GMAT + test (max 60: math/statistics 20%, business/accounting 20%, economics 10%, sustainability 10%, essay 40%). 90+ = admission.",
      },
      test: {
        status: "optional",
        accepted: ["GMAT", "GMAT Focus"],
        note: "Optional and adds up to 10 points in stage 1 (from the 72nd percentile). The programme pages do not say it is mandatory for any country.",
      },
      fees: {
        tuitionNonEU: 4600,
        semester: "€92 per semester from winter 2027/28 (student union fee, Straubing; €82 today)",
        tuitionNote: tuitionNote(4000, 4600),
      },
      documents: [...somDocs.slice(0, 7), "List of best credits (best 140 ECTS)", ...somDocs.slice(7)],
      sources: [
        { label: "Programme", url: mgt + "master-in-sustainable-management-technology" },
        { label: "How to apply", url: mgt + "master-in-sustainable-management-technology/how-to-apply" },
        { label: "How to apply (PDF)", url: "https://www.cs.tum.de/fileadmin/studyprograms/smt/msc/20261/msmt_how_to_apply.pdf" },
        { label: "TUM programme page", url: tumDetail + "sustainable-management-and-technology-master-of-science-msc" },
        { label: "Semester fee Straubing", url: "https://www.tum.de/en/studies/fees-and-financial-aid/campus-straubing" },
        langSource,
        feeSource,
      ],
      caveats: [
        feeCaveat,
        "Run by TUM Campus Straubing (cs.tum.de) and listed by the School of Management. Admission test dates are not published.",
        "No basic-German requirement is stated (German is recommended).",
        toeflCaveat,
      ],
    },
    {
      ...base,
      id: "tum-afepr",
      name: "AgriFood Economics, Policy and Regulation",
      city: "Freising",
      fields: ["economics", "sustainability"],
      intake: "Winter only",
      language: "English",
      english: {
        cefr: "English proof",
        ielts: 6.5,
        toefl: 88,
        englishMedium: "conditional",
        note: "The programme page lists TOEFL iBT 88, IELTS 6.5 or Cambridge exams. TUM's central rules also accept a degree taught at least 50% in English (official confirmation needed), but the programme page does not mention this.",
      },
      test: {
        status: "conditional",
        accepted: [],
        note: "No GMAT/GRE. Every applicant takes TUM's own 40-minute online multiple-choice test in English as part of stage 1.",
      },
      partialMinEcts: undefined,
      partialMinPct: 100,
      bachelorFields: {
        standard: ["business", "economics", "social"],
        relatedAllowed: true,
        note: "Bachelor (at least 6 semesters) in agricultural or horticultural sciences, political science, economics, business administration or a comparable field. TUM School of Life Sciences, Weihenstephan campus.",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums stated. Your bachelor must be completed: the degree certificate is due by the 31 May deadline.",
      grade: {
        min: null,
        selection:
          "Stage 1: final grade (max 30 points) + online aptitude test (max 40: general knowledge 30%, methods/math 30%, agriculture/economics/policy 40%). 52+ = admission, 46-51 = 20-30 minute interview on Teams, below 46 = rejection.",
      },
      interview: true,
      application: {
        route: "Online via TUMonline. Applicants with a foreign degree also need a VPD from uni-assist",
        vpd: true,
        vpdWeeks: 8,
        opens: "2027-01-01",
        deadline: "2027-05-31",
        note: "Window 1 Jan-31 May 2027; international applicants are advised to apply by 31 March. uni-assist needs 6-8 weeks for the VPD.",
      },
      fees: munichFees(4000, 4600),
      documents: [
        "Degree certificate (required by the deadline)",
        "Transcript of records",
        "Passport",
        "CV",
        "English proof",
        "VPD from uni-assist",
        "Optional: letter of motivation",
      ],
      sources: [
        { label: "Programme (School of Life Sciences)", url: "https://www.ls.tum.de/en/ls/studies/courses-and-programs/agrifood-economics-policy-and-regulation-msc/" },
        { label: "TUM programme page", url: tumDetail + "agrifood-economics-policy-and-regulation" },
        feeSource,
      ],
      caveats: [
        feeCaveat,
        "Not a School of Management programme. Economics and policy focus with agriculture; check that it fits a business profile.",
        "The grade-to-points table and interview criteria are only in the German statute (Annex 2), which could not be read.",
        toeflCaveat,
      ],
    },
  ]);
})();
