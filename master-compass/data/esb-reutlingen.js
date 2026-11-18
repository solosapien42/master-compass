/* ESB Business School, Reutlingen University (Hochschule Reutlingen). Checked 2026-11-18. */
(function () {
  const master = "https://www.esb-business-school.de/en/studying-at-esb/master/";

  const fees = {
    tuitionNonEU: 1500,
    semester: "€199.30 per semester (semester fee)",
    tuitionNote: "Baden-Württemberg charges non-EU students €1,500 per semester. The programme itself has no tuition fee.",
  };

  const application = {
    route: "Apply online in Reutlingen University's Campus-PoRTal. Foreign final grades must be converted to the German scale in advance by a recognised body (in practice a uni-assist VPD). Shortlisted applicants are invited to an online selection interview of about one hour.",
    vpd: true,
    deadline: "2027-07-15",
    note: "Winter semester: 15 July. Summer semester: 15 January. Studies start on about 28 September (winter) or 15 March (summer).",
  };

  const english = {
    cefr: "B2",
    ielts: null,
    toefl: null,
    englishMedium: "conditional",
    note: "English at B2 (CEFR) as defined in Reutlingen University's statute on language skills. The programme pages give no test scores; check the statute for accepted certificates and whether an English-taught bachelor counts.",
  };

  const german = {
    cefr: "C1",
    note: "Good German is required: DSH-2 or TestDaF with at least 14 points, or equivalent. Not needed with a German school-leaving certificate or a German-taught degree.",
  };

  const base = {
    university: "ESB Business School (Reutlingen University)",
    institutionType: "applied",
    city: "Reutlingen",
    state: "Baden-Württemberg",
    degree: "M.Sc.",
    ects: 90,
    semesters: 3,
    intake: "Winter & summer",
    languageKey: "German/English",
    language: "German and English (about 50/50)",
    english,
    german,
    application,
    fees,
    interview: true,
    lastChecked: "2026-11-18",
  };

  const grade = {
    min: 2.5,
    selection: "Minimum overall grade 2.5. Applicants are ranked by academic performance; the best are invited to an interview. Admission then depends on academic performance, relevant practical experience, experience abroad and language skills.",
  };

  const docs = [
    "Bachelor certificate and transcript",
    "Grade converted to the German scale by a recognised body (uni-assist VPD)",
    "English proof (B2)",
    "German proof (DSH-2 or TestDaF 14 points)",
    "Proof of experience abroad and practical experience, if any",
  ];

  const sharedCaveats = [
    "The winter 2027/28 opening date is not published. Only the 15 July deadline is stated.",
    "The pages say foreign grades must be converted 'by recognised bodies' before applying. We assume this means a uni-assist VPD; request it early.",
    "Without previous experience abroad, you must do a study or internship semester abroad, which extends the programme to 4 semesters (and adds €1,500 if you stay enrolled).",
    "Accepted English certificates and scores are in the university's language statute, which we did not check.",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "esb-iact",
      name: "International Accounting, Controlling and Taxation (IACT)",
      fields: ["accounting", "finance"],
      places: 15,
      bachelorFields: {
        standard: ["business", "economics", "finance"],
        relatedAllowed: false,
        note: "Degree in business or economics of at least 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums are published.",
      grade,
      test: { status: "none", accepted: [], note: "No test mentioned." },
      documents: docs,
      sources: [
        { label: "Programme page: IACT", url: master + "international-accounting-controlling-und-taxation" },
      ],
      caveats: [
        ...sharedCaveats,
        "15 places per semester.",
      ],
    },
    {
      ...base,
      id: "esb-international-business-development",
      name: "International Business Development (IBD)",
      fields: ["management", "entrepreneurship"],
      places: 23,
      bachelorFields: {
        standard: ["business", "economics", "finance"],
        relatedAllowed: false,
        note: "Qualifying degree in an economics/business programme of at least 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums are published.",
      grade,
      test: { status: "none", accepted: [], note: "No test mentioned." },
      documents: docs,
      sources: [
        { label: "Programme page: International Business Development", url: master + "international-business-development" },
      ],
      caveats: [
        ...sharedCaveats,
        "23 places in winter, 22 in summer.",
      ],
    },
  ]);
})();
