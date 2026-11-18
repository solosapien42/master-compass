/* HTW Berlin – University of Applied Sciences. Master International and Development Economics (MIDE). Checked 2026-11-18. */
(function () {
  const mide = "https://mide.htw-berlin.de/";

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      id: "htw-international-development-economics",
      university: "HTW Berlin – University of Applied Sciences",
      institutionType: "applied",
      city: "Berlin",
      state: "Berlin",
      name: "International and Development Economics (MIDE)",
      degree: "M.A.",
      fields: ["economics", "sustainability"],
      ects: 90,
      semesters: 3,
      intake: "Summer only (starts 1 April)",
      languageKey: "English",
      language: "English",
      notice: {
        type: "warning",
        text: "MIDE starts once a year in April (summer semester), not in October. The next start you can still apply for is April 2028: the application window is July to 30 September 2027. DAAD (EPOS) scholarships are not available in the current admission cycle.",
      },
      bachelorFields: {
        standard: ["economics", "business", "finance", "social"],
        relatedAllowed: true,
        note: "Any first university degree of 180 ECTS (or equivalent) with enough economics. Applicants from outside the ECTS system need at least three economics modules.",
      },
      ectsRules: [
        [{ cats: ["economics"], min: 15, label: "Economics" }],
      ],
      grade: {
        min: null,
        selection: "Ranking by cumulative grade (40%), number of economics courses (25%) and the letter of motivation (35%). No minimum grade is published.",
      },
      test: { status: "none", accepted: [], note: "No test mentioned." },
      english: {
        cefr: "English proof",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "Proof of English is required. If your previous degree was taught in English, no further proof is needed. No minimum test scores are published on the application page.",
      },
      german: null,
      application: {
        route: "Apply online in HTW Berlin's application portal (choose the summer term). HTW Berlin handles all MIDE applications. No uni-assist. Electronic copies are enough to apply; certified copies are needed only after admission.",
        vpd: false,
        opens: "2027-07-01",
        opensApprox: true,
        deadline: "2027-09-30",
        note: "Window for the April 2028 start, following the current pattern (July to 30 September). Admission decisions usually come in October.",
      },
      fees: {
        tuitionNonEU: 2500 / 3,
        tuitionAll: 2500 / 3,
        semester: "About €357.30 per semester (semester fee, incl. public transport ticket)",
        tuitionNote: "MIDE charges a service fee of €2,500 for the whole 18-month programme, paid in one sum after admission. Everyone pays it, EU citizens included. Shown here as about €833 per semester.",
      },
      interview: false,
      documents: [
        "Letter of motivation (max. two pages, signed and dated)",
        "Transcript of records and degree certificate(s), with cumulative GPA; official translations if not in English or German",
        "Explanation of your grading system (best and minimum passing grade)",
        "CV in Europass format, signed and dated",
        "Copy of passport",
        "Proof of English proficiency",
      ],
      sources: [
        { label: "MIDE: Applying (requirements, deadline, selection criteria)", url: mide + "applying" },
        { label: "MIDE: Admission (next intake, duration)", url: mide + "admission" },
        { label: "MIDE: Costs (service fee, semester fee)", url: mide + "applying/costs-1" },
        { label: "Study and examination regulations, English translation (PDF)", url: "https://mide.htw-berlin.de/fileadmin/HTW/Zentral/Rechtsstelle/Amtliche_Mitteilungsblaetter/Lesefassungen/MIDE-MA-StPO-2015-2AEO-EN.pdf" },
      ],
      lastChecked: "2026-11-18",
      caveats: [
        "The current page shows the window for the April 2027 start (deadline 30 September 2026, already passed). The dates for the April 2028 start are our estimate from that pattern.",
        "The deadline shown is for the April 2028 start, not winter 2027/28. MIDE has no October intake.",
        "No minimum English test score is published. Ask mide@htw-berlin.de which tests and scores are accepted.",
        "Whether the service fee stays at €2,500 for the 2028 intake is not confirmed.",
      ],
    },
  ]);
})();
