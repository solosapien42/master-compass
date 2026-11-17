/* Paderborn University - Faculty of Business Administration and Economics (WiWi). Checked 2026-11-18. */
(function () {
  const progBase = "https://www.uni-paderborn.de/studienangebot/studiengang/";
  const src = {
    deadlines: { label: "Application deadlines (International Office)", url: "https://www.uni-paderborn.de/en/studies/international-office/degree-students/application-for-admission-terms/application-deadlines" },
    procedure: { label: "Application procedure and documents (International Office)", url: "https://www.uni-paderborn.de/en/studies/international-students/application-for-admission-terms/application-for-admission-procedure-and-documents" },
    language: { label: "Language requirements (International Office, German)", url: "https://www.uni-paderborn.de/studium/international-office/degree-students/bewerbungsverfahren-fristen/sprachliche-voraussetzungen" },
    transition: { label: "Bachelor to master transition (applying before graduating)", url: "https://uni-paderborn.de/zv/3-3/bewerbung-immatrikulation/uebergang-bachelor-master" },
    enrol: { label: "Semester fee (International Office, enrolment)", url: "https://www.uni-paderborn.de/en/studies/international-office/degree-students/formalities-and-services/immatrikulation" },
    conditions: { label: "Enrolment with conditions (Einschreibung unter Auflagen)", url: "https://wiwi.uni-paderborn.de/studienorganisation/studienorganisation/studienphasen-und-prozesse/uebergang-bachelor-master/einschreibung-unter-auflagen" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "About €351 per semester in winter 2026/27 (semester contribution incl. semester ticket)",
    tuitionNote: "No general tuition fee for non-EU students is stated; North Rhine-Westphalia does not charge one for regular master's programmes. The Paderborn programme pages do not mention tuition.",
    other: "uni-assist may charge a processing fee (not stated on the Paderborn pages).",
  };

  const sharedCaveats = [
    "The deadline 31 May and the uni-assist route come from the current International Office pages and are not dated for 2027. Check the 2027 dates in spring 2027.",
    "The uni-assist opening date is not stated. The direct route (preliminary review) opens 15 April, so we use mid-April as an estimate.",
    "The semester fee differs between sources: the International Office lists about €351.15 (incl. semester ticket) for winter 2026/27, while a student-body fee regulation excerpt shows €241.15. Check the amount before paying.",
    "The grade rule is 'final grade 2.5 or better, OR among the best 35% of graduates of the same degree programme'. The 35% route is mainly meant for Paderborn graduates. How foreign grades are converted is not stated.",
    "Master's programmes are open admission (no numerus clausus). Everyone who meets the requirements gets an offer, so there are no cut-offs and no place numbers.",
    "Enrolment with conditions is possible if up to 30 ECTS are missing (to be made up ideally in the first year). Whether the Studienbüro accepts this for international applicants is not stated. Ask studium@wiwi.upb.de for a pre-check of your transcript.",
  ];

  const sharedDocs = [
    "School-leaving certificate",
    "Bachelor certificate (or transcript if not yet graduated; all bachelor achievements must be complete by 30 September for a winter start)",
    "Transcript of records",
    "Module handbook / syllabus of your bachelor with subject weighting (required for business and economics master's)",
    "Language certificate",
    "Passport",
    "APS certificate (applicants from India, China, Vietnam)",
  ];

  const application = {
    route: "Apply through uni-assist (no VPD needed). Applicants who apply directly to Paderborn (Bildungsinlaender) first need a preliminary review report via the PAUL portal",
    vpd: false,
    opens: "2027-04-15",
    opensApprox: true,
    deadline: "2027-05-31",
    note: "uni-assist deadline for winter semester: 31 May; missing documents can be added until 15 July. The direct route has a preliminary review period of 15 April to 31 May (processing up to 6 weeks). Bachelor graduates of a German university switching to a master's have 15 August. Applying before graduating is allowed; all bachelor achievements must be finished by 30 September.",
  };

  const german = {
    cefr: "C1",
    note: "The programme page only says international students must prove language skills. The International Office lists DSH-2 or higher, TestDaF 4 in all parts, Goethe C2, telc Deutsch C1 Hochschule or DSD II for German-taught programmes. Not needed if your school certificate or bachelor was in German.",
  };

  const noEnglish = {
    cefr: "none",
    ielts: null,
    toefl: null,
    englishMedium: "yes",
    note: "No English proof is required; the programme is taught in German.",
  };

  const base = {
    university: "Paderborn University",
    city: "Paderborn",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Winter & summer",
    fees,
    application,
    places: null,
    interview: false,
    test: { status: "none", accepted: [], note: "No GMAT/GRE is required." },
    lastChecked: "2026-11-18",
  };

  const gradeOpen = (extra) => ({
    min: 2.5,
    selection: "Open admission (no numerus clausus). Everyone who meets the requirements is admitted. Grade requirement: 2.5 or better, or among the best 35% of graduates of the same programme." + (extra ? " " + extra : ""),
  });

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "upb-iem",
      name: "International Economics and Management",
      fields: ["economics", "management"],
      languageKey: "German/English",
      language: "English and German (compulsory modules are taught in English)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bachelor in economics/business (e.g. Paderborn B.Sc. Wirtschaftswissenschaften or International Business Studies), an equivalent research-oriented economics degree, or a related degree. Content is checked from your module handbook. Double-degree options with Tohoku University (Japan) and the University of Ferrara (Italy).",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 80, label: "Business and economics" },
          { cats: ["economics"], min: 30, label: "of which economics" },
          { cats: ["business"], min: 30, label: "of which business administration" },
          { cats: ["math", "statistics", "informatics"], min: 40, label: "Quantitative methods incl. business informatics" },
          { cats: ["math"], min: 10, label: "of which mathematics" },
          { cats: ["statistics"], min: 10, label: "of which statistics" },
        ],
      ],
      ectsNote: "A bachelor thesis of at least 10 ECTS is also required (cannot be tested here). Rules apply from winter 2025/26. Up to 30 missing ECTS can be made up after enrolment (enrolment with conditions).",
      grade: gradeOpen(),
      english: {
        cefr: "B2",
        ielts: 6.5,
        toefl: 87,
        englishMedium: "yes",
        note: "Accepted: five or more years of school English from grade 5 at a German school, an English-language bachelor (abroad or accredited English-taught in Germany), TOEFL iBT 87, IELTS 6.5, BEC Vantage or Cambridge First (grade A).",
      },
      german: {
        cefr: "A2",
        note: "A2 German is needed if you did not study at a German-speaking institution. Proof: Goethe A2 or higher, TestDaF TDN 3-5, DSH 1-3, or a C-Test after enrolment. If you lack it, you can learn German during the programme (240 hours of courses count as an elective).",
      },
      documents: [...sharedDocs, "English proof (unless waived)", "German A2 proof (or catch up during studies)"],
      sources: [
        { label: "Programme page", url: progBase + "international-economics-and-management-master" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats,
        "Whether an English-taught bachelor from Turkey counts is not spelled out. The page says 'English-language bachelor abroad', so it should count, but confirm with the International Office.",
      ],
    },
    {
      ...base,
      id: "upb-bwl",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "marketing", "finance", "accounting"],
      languageKey: "German",
      language: "German (some English-taught modules)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bachelor in economics from Paderborn, an equivalent research-oriented economics degree, or a relevant degree. Other bachelor and FH degrees are generally sufficient if the ECTS fit.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 80, label: "Business and economics" },
          { cats: ["math", "statistics", "informatics"], min: 40, label: "Quantitative methods incl. business informatics" },
          { cats: ["math"], min: 10, label: "of which mathematics" },
          { cats: ["statistics"], min: 10, label: "of which statistics" },
        ],
      ],
      ectsNote: "A bachelor thesis of at least 10 ECTS is also required (cannot be tested here).",
      grade: gradeOpen(),
      english: noEnglish,
      german,
      documents: [...sharedDocs, "German proof (C1)"],
      sources: [
        { label: "Programme page", url: progBase + "betriebswirtschaftslehre-master" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats,
        "The page does not state the German level. The C1 shown comes from the International Office list for German-taught programmes. Confirm with the International Office.",
        "A newer M.Sc. Management exists with similar content. It is not clear whether M.Sc. Business Administration will keep admitting students.",
      ],
    },
    {
      ...base,
      id: "upb-management",
      name: "Management",
      fields: ["management"],
      languageKey: "German",
      language: "German (some English-taught modules)",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bachelor in economics from Paderborn, an equivalent research-oriented economics degree, or a relevant degree.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 80, label: "Business and economics" },
          { cats: ["business"], min: 45, label: "of which business administration" },
          { cats: ["math", "statistics"], min: 20, label: "Quantitative methods (maths and statistics, no business informatics)" },
        ],
      ],
      ectsNote: "A bachelor thesis of 8 ECTS is also required (cannot be tested here).",
      grade: gradeOpen(),
      english: noEnglish,
      german,
      documents: [...sharedDocs, "German proof (C1)"],
      sources: [
        { label: "Programme page", url: progBase + "management" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats,
        "The page does not state the German level. The C1 shown comes from the International Office list for German-taught programmes. Confirm with the International Office.",
        "A search result suggested this master is new. We could not verify its start date; the page lists summer and winter intake.",
      ],
    },
    {
      ...base,
      id: "upb-ibs",
      name: "International Business Studies",
      fields: ["management"],
      languageKey: "German/English",
      language: "German and English",
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Bachelor in International Business Studies from Paderborn, an equivalent research-oriented degree, or a related degree. Other bachelor and FH degrees are generally accepted if the ECTS fit. About 70 partner universities; optional ASBE (Asia) and Illinois State University transfer programmes.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Business and economics" },
          { cats: ["math", "statistics", "informatics"], min: 20, label: "Quantitative methods" },
          { cats: ["math"], min: 5, label: "of which mathematics" },
          { cats: ["statistics"], min: 5, label: "of which statistics" },
          { cats: ["informatics"], min: 5, label: "of which business informatics" },
        ],
      ],
      ectsNote: "A bachelor thesis of at least 10 ECTS is also required (cannot be tested here).",
      grade: gradeOpen(),
      english: {
        cefr: "C1",
        ielts: 7.0,
        toefl: 95,
        englishMedium: "yes",
        note: "Accepted: Paderborn IBS bachelor, an English-taught bachelor abroad or an accredited English-taught bachelor in Germany, DAAD (C1), BEC Higher, Cambridge CAE (passed), TOEFL iBT 95, IELTS 7.0, UNIcert III. Certificates must be at most 2 years old at semester start.",
      },
      german: null,
      documents: [...sharedDocs, "English proof (C1) unless waived"],
      sources: [
        { label: "Programme page", url: progBase + "international-business-studies-master" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats,
        "The page lists no German requirement, but the programme is taught in German and English. Ask whether German is needed for some modules.",
        "An English-taught bachelor abroad counts as English proof on the page. It does not name conditions such as accreditation. Confirm for a bachelor from Turkey.",
      ],
    },
    {
      ...base,
      id: "upb-taf",
      name: "Taxation, Accounting and Finance (TAF)",
      fields: ["accounting", "finance"],
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "finance", "economics"],
        relatedAllowed: true,
        note: "Bachelor in economics from Paderborn, an equivalent research-oriented economics degree, or a relevant degree. Optional double master with Kristianstad University (Sweden) and optional ASBE half-year in Asia.",
      },
      ectsRules: [
        [
          { cats: ["accounting"], min: 50, label: "Taxation, accounting and finance" },
          { cats: ["math", "statistics", "informatics"], min: 20, label: "Methods (qualitative, quantitative, information systems)" },
          { cats: ["math", "statistics"], min: 10, label: "of which maths and/or statistics" },
        ],
      ],
      ectsNote: "A bachelor thesis of 8 ECTS is also required (cannot be tested here). The thesis counts towards TAF only if it is in that area.",
      grade: gradeOpen(),
      english: noEnglish,
      german,
      documents: [...sharedDocs, "German proof (C1)"],
      sources: [
        { label: "Programme page", url: progBase + "taxation-accounting-and-finance-master" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats,
        "The page does not state the German level. The C1 shown comes from the International Office list for German-taught programmes. Confirm with the International Office.",
        "A part-time track (focus 'Taxes, AI and Transformation', 5 semesters) is also offered. We list only the full-time programme. Its admission rules and any fees were not checked.",
      ],
    },
    {
      ...base,
      id: "upb-mis",
      name: "Management Information Systems",
      fields: ["information-systems", "analytics", "management"],
      languageKey: "German",
      language: "German (some English-taught modules)",
      bachelorFields: {
        standard: ["business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Professional bachelor in economics (e.g. business informatics, economics, business administration) of at least 6 semesters. The programme is economics-oriented and has no pure computer science modules.",
      },
      ectsRules: [
        [
          { cats: ["informatics"], min: 30, label: "Business informatics / information systems" },
          { cats: ["business", "economics"], min: 30, label: "Business and economics" },
        ],
      ],
      ectsNote: "A bachelor thesis of 10 ECTS is also required (it does not count towards the other two areas).",
      grade: gradeOpen(),
      english: noEnglish,
      german,
      documents: [...sharedDocs, "German proof (C1)"],
      sources: [
        { label: "Programme page", url: progBase + "management-information-systems-master" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats,
        "The page does not state the German level. The C1 shown comes from the International Office list for German-taught programmes. Confirm with the International Office.",
        "The page says the programme is taught in German but gives no list of English-taught modules.",
      ],
    },
    {
      ...base,
      id: "upb-winfo",
      name: "Business Informatics (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      languageKey: "German",
      language: "German (some English-taught modules)",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Degree in economics or with an economics focus (e.g. B.Sc. Wirtschaftsinformatik). Needs both business informatics and computer science content.",
      },
      ectsRules: [
        [
          { cats: ["informatics"], min: 60, label: "Business informatics and computer science (30 + 30)" },
          { cats: ["business", "economics"], min: 30, label: "Business and economics" },
        ],
      ],
      ectsNote: "The regulations require 30 ECTS business informatics AND 30 ECTS computer science separately. The checker cannot split these, so it uses 60 informatics in total. Check that you have both. A bachelor thesis of 10 ECTS is also required.",
      grade: {
        min: 2.7,
        selection: "Open admission (no numerus clausus). Everyone who meets the requirements is admitted. Grade requirement: 2.7 or better, or among the best 35% of graduates of the same programme.",
      },
      english: noEnglish,
      german,
      documents: [...sharedDocs, "German proof (C1)"],
      sources: [
        { label: "Programme page", url: "https://uni-paderborn.de/studienangebot/studiengang/wirtschaftsinformatik-master" },
        src.deadlines, src.procedure, src.language, src.transition, src.conditions, src.enrol,
      ],
      caveats: [
        ...sharedCaveats.filter((c) => !c.startsWith("The grade rule")),
        "The grade minimum here is 2.7 (not 2.5 as in the other programmes), or the best 35% of the cohort. How foreign grades are converted is not stated.",
        "The page does not state the German level. The C1 shown comes from the International Office list for German-taught programmes. Confirm with the International Office.",
      ],
    },
  ]);
})();
