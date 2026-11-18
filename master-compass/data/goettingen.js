/* University of Göttingen – Faculty of Business and Economics (Wirtschaftswissenschaftliche Fakultät). Checked 2026-11-17. */
(function () {
  const wiwi = "https://www.uni-goettingen.de/de/";

  const src = {
    apply: { label: "Admission conditions of the faculty (admission-free vs restricted, application periods)", url: wiwi + "zulassungsbedingungen/678426.html" },
    regs: { label: "Admission regulations (Ordnung über die Zugangsvoraussetzungen und über die Zulassung), version AM I 39/2025", url: wiwi + "version+am+i+39/27.11.2025/675192.html" },
    fee: { label: "Semester contribution, Göttingen", url: "https://uni-goettingen.de/de/semesterbeitr%c3%a4ge/50655.html" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€484.18 per semester in winter 2026/27 (semester contribution incl. semester ticket, per the university's fee page)",
    tuitionNote: "No tuition fees for consecutive master's programmes are mentioned on the official pages, also for non-EU students. The double-degree options with partner universities can have extra fees.",
    other: "No uni-assist VPD fee: Göttingen uses its own faculty portal.",
  };

  const sharedCaveats = [
    "The semester contribution page lists components that add up to €439.88, but the stated total is €484.18. A DAAD listing says about €460. Check the amount in your admission letter.",
    "The faculty pages show the same application periods every year and do not print dates for 2027. We assume the 2026 pattern. Re-check from March 2027.",
    "The admission regulations (PDF) could not be read in full. Grade minimums, scoring and places come from the programme pages only. Where a page is silent, we show null.",
  ];

  const base = {
    university: "University of Göttingen",
    city: "Göttingen",
    state: "Lower Saxony",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    fees,
    lastChecked: "2026-11-17",
  };

  const germanC1 = {
    cefr: "C1",
    note: "Needed unless German is your native language, you have a German university entrance qualification, or your bachelor was taught in German at a German university. Accepted: DSH-2 or higher, TestDaF 4 in all parts, Studienkolleg German exam, DSD II, Goethe Großes Deutsches Sprachdiplom (C2), telc Deutsch C1 Hochschule.",
  };

  const englishNone = {
    cefr: "none",
    ielts: null,
    toefl: null,
    englishMedium: "no",
    note: "No English proof is required for admission to the regular programme. The programme is taught in German. English proof is needed only for the double-degree option.",
  };

  const englishC1 = {
    cefr: "C1",
    ielts: 7,
    toefl: 95,
    englishMedium: "yes",
    note: "Waived if you finished a degree taught entirely in English (confirmed by your university), are a native speaker, have an English-language school-leaving qualification, or spent at least 2 years studying or working in an English-speaking country in the last 5 years. The pages name no country restriction for the English-taught degree, so an English-taught Turkish bachelor should count, but the faculty decides. Also accepted: Cambridge English Scale 180, TOEFL iBT 95 (or 5.5 of 6 on the new scale since Jan 2026), PTE Academic 76, UNIcert III, other C1 certificates. Tests must be no older than 3 years.",
  };

  const appFrom1Apr30Sep = {
    route: "Own portal of the faculty (no uni-assist, no VPD). Fill in the online form, then upload all documents to the upload portal by the deadline.",
    vpd: false,
    opens: "2027-04-01",
    opensApprox: true,
    deadline: "2027-09-30",
    note: "Admission-free programme: the window is 1 April to 30 September for the winter semester. All documents must be uploaded by 30 September; later uploads are not possible. Decision about 4–6 weeks after a complete application. Apply early if you need a visa.",
  };

  const appRestricted = {
    route: "Own portal of the faculty (no uni-assist, no VPD). Create an account, complete the profile, upload all documents and submit.",
    vpd: false,
    opens: "2027-04-01",
    opensApprox: true,
    deadline: "2027-05-15",
    note: "Winter semester window: 1 April to 15 May (23:59 CEST). All documents must be uploaded by the deadline; late or incomplete applications are not considered. No separate non-EU window is listed for this programme.",
  };

  const germanDocs = [
    "Online application form (PDF summary is emailed to you)",
    "Transcript of records with ECTS and average grade (at least 150 ECTS if the bachelor is not finished) or bachelor certificate with diploma supplement",
    "Module descriptions of your bachelor (not needed for Göttingen graduates)",
    "German proof (see language requirement)",
    "Official German or English translations of other-language documents",
    "Do not send letters of recommendation or internship references: they are not considered",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    // ---------- Management ----------
    {
      ...base,
      id: "goe-management",
      name: "Management (M.Sc.)",
      fields: ["management"],
      intake: "Winter only",
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters and 180 ECTS in business administration or a closely related field. The faculty judges relevance from your documents. At least 18 of the 60 business ECTS must be at medium or high academic level (advanced courses beyond introductory level).",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 60, label: "Business administration" },
          { cats: ["math", "statistics"], min: 12, label: "Mathematics / statistics / econometrics" },
        ],
      ],
      ectsNote: "At least 18 of the 60 business ECTS must be at medium or high level. The checker cannot test this.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Admission-free: no ranking and no published minimum grade. You are admitted if your previous studies are judged relevant (subject ECTS above). If the bachelor is unfinished, your current average of all documented courses is used.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE." },
      english: englishNone,
      german: germanC1,
      application: appFrom1Apr30Sep,
      interview: false,
      documents: germanDocs,
      sources: [
        { label: "Programme page", url: wiwi + "579601.html" },
        { label: "Application and admission", url: wiwi + "680790.html" },
        { label: "Required application documents", url: wiwi + "680791.html" },
        src.apply,
        src.regs,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "No number of places or past cut-offs are published (admission-free programme).",
        "There is a double-degree option with Nanjing (separate application, deadline 15 May, English proof and motivation letter needed). It is not listed as a separate programme here.",
      ],
    },

    // ---------- Finance, Accounting and Taxation ----------
    {
      ...base,
      id: "goe-frs",
      name: "Finanzen, Rechnungswesen und Steuern (Finance, Accounting and Taxation)",
      fields: ["finance", "accounting"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "finance"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters and 180 ECTS in business administration or a closely related field. The faculty judges relevance from your documents.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Business administration and economics" },
          { cats: ["math", "statistics"], min: 12, label: "Mathematics / statistics / econometrics" },
        ],
      ],
      ectsNote: "Also required inside the 60 ECTS: at least 30 ECTS in finance, controlling, external accounting/auditing, corporate taxation, microeconomics and public finance combined. Of these, at least 18 ECTS in capital market theory, financial management, value/finance-oriented controlling, capital-market-oriented accounting and business tax theory. At least 18 ECTS must be at medium or high academic level. The checker cannot test these sub-rules, so count them yourself.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Admission-free: admission follows from meeting the subject requirements. No published minimum grade or ranking. If the bachelor is unfinished, your current average is used.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE." },
      english: englishNone,
      german: germanC1,
      application: appFrom1Apr30Sep,
      interview: false,
      documents: germanDocs,
      sources: [
        { label: "Programme page", url: wiwi + "23192.html" },
        { label: "Application and admission", url: wiwi + "124063.html" },
        src.apply,
        src.regs,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "One older faculty page mentions a personal selection interview for this programme. The current application page describes no interview, so we list none.",
        "The 30 ECTS 'finance' block includes microeconomics and public finance, so it cannot be mapped to the accounting category. It is in the note only.",
        "The Ghent double degree (apply by 15 May, English proof needed) is a separate application and is not listed here.",
        "No number of places is published.",
      ],
    },

    // ---------- Business Informatics ----------
    {
      ...base,
      id: "goe-wirtschaftsinformatik",
      name: "Wirtschaftsinformatik (Business Informatics)",
      fields: ["information-systems", "analytics"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German",
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters and 180 ECTS in economics, business informatics, computer science or a closely related field. You need at least 20 ECTS in each of two of the three areas: business administration, business informatics, computer science.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 20, label: "Business administration" },
          { cats: ["informatics"], min: 20, label: "Business informatics / computer science" },
        ],
        [{ cats: ["informatics"], min: 40, label: "Business informatics (20) + computer science (20)" }],
      ],
      ectsNote: "The two alternatives are approximations: the rule is 20 ECTS in each of two of three areas (business administration, business informatics, computer science). Business informatics and computer science are one category in the checker. At least 30 of these ECTS must be at medium or high academic level. Strong maths, statistics and ICT foundations are recommended.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Admission-free: relevance check of your documents, no published minimum grade or ranking. If the bachelor is unfinished, your current average is used.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE." },
      english: englishNone,
      german: germanC1,
      application: appFrom1Apr30Sep,
      interview: false,
      documents: germanDocs,
      sources: [
        { label: "Programme page", url: wiwi + "23247.html" },
        { label: "Application and admission", url: wiwi + "124140.html" },
        src.apply,
        src.regs,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "Some pages say 'admission-free for SoSe 2026, WiSe 2026/27 and SoSe 2027'. Whether it stays admission-free for winter 2027/28 is not confirmed.",
        "Language of instruction: the programme page says German. We did not verify whether individual modules are in English.",
        "No number of places is published.",
      ],
    },

    // ---------- International Economics ----------
    {
      ...base,
      id: "goe-international-economics",
      name: "International Economics (M.Sc.)",
      fields: ["economics"],
      intake: "Winter & summer",
      languageKey: "English",
      language: "English (includes a compulsory exchange semester in the elective area)",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters and 180 ECTS in economics or a closely related subject. Admission is competitive and based on the relevance of your previous studies.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 60, label: "Economics" },
          { cats: ["math", "statistics"], min: 12, label: "Mathematics / statistics / econometrics" },
        ],
      ],
      ectsNote: "Also required inside the 60 economics ECTS: at least 30 ECTS in economic theory, public economics and international trade, of which at least 18 at intermediate or advanced level (beyond introductory courses). The checker cannot test this sub-rule.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Restricted admission, two stages: (1) assessment of the written application (overall grade and relevant prior studies), (2) personal interviews. No minimum grade and no scoring formula are published on the pages.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE required." },
      english: englishC1,
      german: null,
      application: appRestricted,
      interview: true,
      documents: [
        "Online application and upload of all documents by 15 May",
        "Transcript of records with ECTS and grade average (at least 150 ECTS if the bachelor is unfinished) or certificate with diploma supplement",
        "CV in English or German",
        "Motivation letter (max. 1 page)",
        "English proof (C1)",
        "Course descriptions / module handbook extracts for business, economic theory, maths, econometrics, statistics (not for Göttingen students)",
        "Notarised translations of documents not in German or English",
      ],
      sources: [
        { label: "Programme page", url: wiwi + "23244.html" },
        { label: "Application and admission", url: wiwi + "425266.html" },
        { label: "Required application documents", url: wiwi + "425268.html" },
        { label: "DAAD International Programmes listing", url: "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/10342/" },
        src.apply,
        src.regs,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The application page lists personal interviews as stage 2. An old forum post says there is no interview. We follow the official page.",
        "Number of places and past cut-off grades are not published.",
        "The faculty does not say which countries count as English-speaking, and decides each English-taught degree case. Ask the faculty if your Turkish bachelor was fully in English.",
        "A double degree with Groningen exists (tick the option in the same application; extra motivation letter and English proof; extra fees, high for non-EU students). Not listed separately.",
      ],
    },

    // ---------- Development Economics ----------
    {
      ...base,
      id: "goe-development-economics",
      name: "Development Economics (M.Sc.)",
      fields: ["economics"],
      intake: "Winter only",
      languageKey: "English",
      language: "English (specialisation in Economics or Agricultural Economics)",
      notice: {
        type: "warning",
        text: "The non-EU/EEA application window for winter 2027/28 (1 October to 15 November 2026) closed on 15 November 2026. Non-EU applicants can no longer apply for this intake. The next non-EU window is expected 1 October to 15 November 2027 for winter 2028/29. EU/EEA applicants can still apply from 1 April to 15 May 2027.",
      },
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "Bachelor of at least 6 semesters and 180 ECTS in economics or a closely related subject (agricultural economics and econometrics also count). Admission is competitive and based on the relevance of your previous studies.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 60, label: "Economics / agricultural economics / econometrics" },
          { cats: ["math", "statistics"], min: 12, label: "Mathematics / statistics / econometrics (in addition)" },
        ],
      ],
      ectsNote: "Also required inside the 60 ECTS: at least 30 ECTS in economic theory, agricultural economics and development economics, of which at least 18 at intermediate or high level. The 12 ECTS maths/statistics/econometrics come on top of the 60. The checker cannot test the sub-rules.",
      partialMinEcts: 150,
      grade: {
        min: null,
        selection: "Restricted admission, two stages: (1) assessment of the written application: overall grade plus special knowledge in relevant fields (specialisation or performance in your bachelor), (2) personal interviews. Optional extra achievements (development internship of at least 4 weeks, 3 months of work, volunteering in the Global South) can be documented. No minimum grade or cut-off is published.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE required." },
      english: englishC1,
      german: null,
      application: {
        route: "Own portal of the faculty (no uni-assist, no VPD). Create an account, complete the three-step form, upload documents to the upload portal.",
        vpd: false,
        opens: "2026-10-01",
        deadline: "2026-11-15",
        eu: { opens: "2027-04-01", deadline: "2027-05-15" },
        note: "Non-EU/EEA citizens with a non-EU/EEA bachelor (and EPOS scholarship applicants) apply 1 October to 15 November of the previous year (23:59 CET). That window is closed for winter 2027/28. EU/EEA citizens or holders of an EU/EEA bachelor apply 1 April to 15 May 2027. Decisions for non-EU applicants come by end of February (EPOS: mid-March). Applicants from China, India, Mongolia and Vietnam need APS certification (India: also the dMAT test from 2026).",
      },
      interview: true,
      documents: [
        "Application form in the portal and upload of all documents by the deadline",
        "Transcript of records with ECTS and grade average (at least 150 ECTS if unfinished), grading scale (lowest pass / best grade)",
        "CV in English (Europass suggested)",
        "Motivation letter (max. 500 words / 1 page)",
        "English proof (C1)",
        "Course descriptions or syllabi for relevant courses (not for Göttingen students)",
        "APS certificate for applicants from China, India, Mongolia, Vietnam",
        "Optional: statement of additional achievements (1–2 pages) with proofs in one PDF",
      ],
      sources: [
        { label: "Programme page", url: wiwi + "203661.html" },
        { label: "Application and admission", url: wiwi + "648484.html" },
        { label: "Required application documents", url: wiwi + "648495.html" },
        src.apply,
        src.regs,
        src.fee,
      ],
      caveats: [
        ...sharedCaveats,
        "The non-EU deadline for winter 2027/28 (15 November 2026) has passed. The deadline field shows it for reference. Check whether the faculty accepts late non-EU applications (unlikely).",
        "The page does not say which window applies to mixed cases, such as an EU citizen with a non-EU bachelor. Ask the Student Advisory Service.",
        "The TOEFL requirement is shown on two scales (95 of 120, or 5.5 of 6 on the new scale since January 2026). Check which one the portal uses.",
        "Number of places and past cut-offs are not published.",
        "Double degrees (Florence, Clermont Auvergne) and a joint programme with Stellenbosch need a separate application and meeting both programmes' requirements.",
      ],
    },
  ]);
})();
