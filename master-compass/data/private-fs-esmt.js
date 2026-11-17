/* Frankfurt School of Finance & Management and ESMT Berlin (private, state-recognised). Checked 2026-11-17. */
(function () {
  const fsBase = "https://www.frankfurt-school.de/en/study/master/";

  const fsSemesterFee =
    "Frankfurt School tuition is paid by all students, EU citizens included. No separate semester contribution is stated on the programme pages.";

  const fsBaseObj = {
    university: "Frankfurt School of Finance & Management",
    private: true,
    city: "Frankfurt am Main",
    state: "Hesse",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Fall only",
    languageKey: "English",
    language: "English",
    german: null,
    interview: true,
    lastChecked: "2026-11-17",
  };

  const fsApplication = {
    route: "Online application portal of Frankfurt School. Frankfurt School does not state that uni-assist is required.",
    vpd: false,
    deadline: "2027-06-30",
    note:
      "The programme page lists one deadline, 30 June 2027, plus two early-bird dates: 30 November 2026 (saves EUR 4,000) and 31 March 2027 (saves EUR 2,000). Process: online application, document review, online admissions interview, decision and scholarship decision by email.",
  };

  const fsEnglish = {
    cefr: "C1",
    ielts: 7.0,
    toefl: null,
    englishMedium: "yes",
    note:
      "IELTS 7.0 or equivalent. The programme page says TOEFL 5.0 iBT, which looks like the new 1-6 scale and does not convert to a clear score. The test may be waived if your bachelor was taught in English; for other waivers write to masteradmissions@fs.de.",
  };

  const fsTest = {
    status: "required",
    accepted: ["GMAT", "GRE", "Frankfurt School Admission Test (BT Methods)"],
    note:
      "A valid GMAT or GRE score, or the Frankfurt School Admission Test (BT Methods, can be taken only once). GMAT/GRE cannot be waived. A GMAT superscore is only supplementary and does not replace one full test sitting. No minimum score is published.",
  };

  const fsDocs = [
    "Bachelor degree certificate or transcript showing at least 180 ECTS",
    "GMAT or GRE score report, or result of the Frankfurt School Admission Test (BT Methods)",
    "English proof (unless waived)",
    "Further documents as listed in the online portal (the programme page only says all required documents are uploaded online)",
    "Application fee of EUR 100",
  ];

  const fsCaveats = [
    "Application opening date is not stated on the programme page (the page shows the deadline only). Check the online portal.",
    "Admission regulations (Specific Study and Examination Regulations, intake 2026 PDF) could not be read here. Minimum grade, subject ECTS and selection weights may be defined there.",
    "TOEFL: the programme page says 5.0 iBT. A search snippet suggested the regulations require 90 iBT. Not confirmed; use IELTS 7.0 as the safe benchmark.",
    "Cohort size is the intake 2026 class size shown on the page; the 2027 number of places is not published.",
    "Lessons run on a 3-day model (two weekdays and one Saturday), so the programme is full-time but leaves room for part-time work.",
    "Scholarship counts such as the Deutschlandstipendium (up to 60 awards, EUR 300 per month) are given for 2025/26, not for 2027.",
    "Tuition for 2027 is taken from the programme page and may change. Total fees: tuition plus EUR 600 enrolment fee plus EUR 100 application fee.",
  ];

  const fsSources = (slug, label) => [
    { label: label + " programme page", url: fsBase + slug },
    { label: "All Frankfurt School master's programmes", url: fsBase },
  ];

  const fsFees = (total, extra) => ({
    tuitionNonEU: total / 4,
    tuitionAll: total / 4,
    semester: "EUR " + total / 4 + " per semester (EUR " + total.toLocaleString("en-US") + " total over 4 semesters, divided equally). " + fsSemesterFee,
    tuitionNote:
      "Total tuition EUR " + total.toLocaleString("en-US") + " for the whole programme, plus EUR 600 enrolment fee and EUR 100 application fee. Early-bird discounts: EUR 4,000 (apply by 30 Nov 2026) or EUR 2,000 (apply by 31 Mar 2027). " +
      extra +
      " Study loans and payment plans are available.",
  });

  const fsGenericScholar = "Merit- and need-based scholarships are applied for in the online application.";

  const esmtBase = {
    university: "ESMT Berlin",
    private: true,
    city: "Berlin",
    state: "Berlin",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    intake: "Fall only",
    languageKey: "English",
    language: "English",
    german: null,
    interview: true,
    lastChecked: "2026-11-17",
    places: null,
  };

  const esmtApplication = {
    route:
      "Online application on the ESMT website. Rolling admissions; uni-assist is not mentioned.",
    vpd: false,
    deadline: "2027-06-30",
    note:
      "Intake starts 7 September 2027. Rounds: 31 Oct 2026 (closed), 15 Dec 2026 (EUR 2,000 early award), 31 Jan 2027 (EUR 1,000 early award), 31 Mar 2027, 18 May 2027, 30 Jun 2027 (recommended last date for visa applicants), 31 Jul 2027 (case by case, only if places are left). Applications are open now. Decisions usually come 2 to 4 weeks after review.",
  };

  const esmtFees = {
    tuitionNonEU: 9625,
    tuitionAll: 9625,
    semester: "EUR 9,625 per semester (EUR 38,500 total over 4 semesters, divided equally). Paid in three instalments over two academic years.",
    tuitionNote:
      "Total tuition EUR 38,500 (includes courses, seminars, materials, orientation, career support and exchange study fees; not travel or housing). Application fee EUR 75 (waived if you attend an Open House or a Coffee Chat). Early Application Award: EUR 2,000 (by 15 Dec 2026), EUR 1,000 (by 31 Jan 2027). Scholarships are awarded on a rolling basis, e.g. women's and academic excellence scholarships of up to EUR 10,000, High Achievers GMAT/GRE (above 94th percentile) up to EUR 5,000, LDC/LLDC up to 50% of tuition. Loans: Brain Capital income share agreement (needs German GPA of 2.9 or better), Deutsche Bildung, Juno.",
  };

  const esmtEnglish = {
    cefr: "C1",
    ielts: 7.0,
    toefl: null,
    englishMedium: "yes",
    note:
      "A test is not mandatory; English is also assessed in the interview. Waived for native speakers and for applicants whose degree was fully taught in English. If required: IELTS 7.0, TOEFL at least 5.0 in each section (2026 scoring, code 8707) or TOEIC 850.",
  };

  const esmtDocs = [
    "CV",
    "Transcripts from all higher education institutions attended",
    "One recommendation from a current or former employer or a professor (ESMT form)",
    "Short essay questions in the online application",
    "GMAT, GRE or ESMT BAT result (if no waiver)",
    "English test result (if not waived)",
    "Application fee of EUR 75",
  ];

  const esmtCaveats = [
    "ESMT does not offer a programme called Master in Management. Its three pre-experience masters are Global Management, Innovation & Entrepreneurship and Analytics & AI.",
    "ECTS (120) comes from an ESMT search result for the Master in Global Management, not from the programme page; the other two ESMT masters are assumed to be the same.",
    "Application opening date is not stated; the pages only say applications are open for 2027.",
    "Tuition of EUR 38,500 is from ESMT's master's fees page (one fee for all three masters). The EUR 29,500 figure on one landing page and the EUR 32,000 in an older press release conflict and were not used.",
    "No minimum grade is stated; ESMT asks for a degree with excellent grades. The Brain Capital loan needs a German GPA of 2.9 or better.",
    "Visa: non-EU applicants should apply by 30 June 2027; later applicants get only minimal visa support.",
    "Chinese and Indian graduates need an APS certificate, which can take up to six months.",
    "The pages are not explicit about the state-recognised status; ESMT describes itself as a state-recognised private university elsewhere (not re-checked on the programme pages).",
  ];

  const esmtTestNote =
    "Not required if you show strong quantitative skills (quantitative degree or grades in quantitative courses). Otherwise take the GMAT, GRE or ESMT Business Admissions Test (BAT, USD 100). There is no official minimum, but GMAT below 600 (GMAT Focus below 555) or GRE below 304 is usually not competitive.";

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...fsBaseObj,
      id: "fs-mim",
      name: "Master in Management",
      fields: ["management", "analytics"],
      fees: fsFees(35500, fsGenericScholar + " Examples: Lincoln International (women in M&A, Global Strategy or Business Analytics track), Possibility scholarships, Yeni Nesil (women with Turkish background, German/Turkish citizenship)."),
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "Open to graduates of any discipline with a first degree of at least 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums are published on the programme page.",
      grade: {
        min: null,
        selection:
          "No minimum grade published. Selection is based on document review (profile fit), GMAT/GRE or BT Methods score, and an online admissions interview.",
      },
      test: fsTest,
      english: fsEnglish,
      application: { ...fsApplication },
      places: 24,
      documents: fsDocs,
      sources: fsSources("master-in-management", "Master in Management"),
      caveats: [
        ...fsCaveats,
        "Concentration is chosen in semester 2: Global Strategy, Organisational Leadership, Digital Business or Business Analytics.",
      ],
    },
    {
      ...fsBaseObj,
      id: "fs-mof",
      name: "Master of Finance",
      fields: ["finance"],
      fees: fsFees(44000, fsGenericScholar + " Examples: FIRM scholarships (up to two semesters of fees), CHOM Capital (sustainable finance), Lincoln International."),
      bachelorFields: {
        standard: ["finance", "business", "economics", "quantitative"],
        relatedAllowed: true,
        note: "Preferably business administration or economics with a finance focus, or a related quantitative discipline. Minimum 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums are published; the field preference is a guideline.",
      grade: {
        min: null,
        selection:
          "No minimum grade listed. Selection is based on profile review, GMAT/GRE or BT Methods score, and an online admissions interview.",
      },
      test: fsTest,
      english: fsEnglish,
      application: { ...fsApplication },
      places: 24,
      documents: fsDocs,
      sources: fsSources("master-of-finance", "Master of Finance"),
      caveats: [
        ...fsCaveats,
        "Class profile on the page lists an average age of 43 for intake 2026, which looks like an error; not used.",
      ],
    },
    {
      ...fsBaseObj,
      id: "fs-mire",
      name: "Master in Real Estate",
      fields: ["finance", "management"],
      fees: fsFees(39000, "Scholarships: Helaba and MOMENI Group Foundation Possibility scholarships (apply with a motivation letter), Yeni Nesil, Foerderverein. The programme is RICS-accredited."),
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "Preferably business or economics. Minimum 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums are published.",
      grade: {
        min: null,
        selection:
          "No minimum grade listed. Selection is based on profile review, GMAT/GRE or BT Methods score, and an online admissions interview.",
      },
      test: fsTest,
      english: fsEnglish,
      application: { ...fsApplication },
      places: 25,
      documents: fsDocs,
      sources: fsSources("master-in-real-estate", "Master in Real Estate"),
      caveats: [
        ...fsCaveats,
        "Three semesters are possible under certain conditions (not detailed on the page). This file uses the standard 4 semesters.",
        "The cohort figure of 25 is read from an ambiguous page layout.",
      ],
    },
    {
      ...fsBaseObj,
      id: "fs-mfintech",
      name: "Master in Financial Technology",
      fields: ["finance", "information-systems", "analytics"],
      fees: fsFees(35500, fsGenericScholar + " Examples: Deutsche Bank Technology, Data & Innovation Diversity Scholarship, WM Group women scholarship, Yeni Nesil."),
      bachelorFields: {
        standard: ["quantitative", "finance", "economics", "business"],
        relatedAllowed: true,
        note: "Preferably STEM, finance, economics or business. Minimum 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums are published.",
      grade: {
        min: null,
        selection:
          "No minimum grade listed. Selection is based on profile review, GMAT/GRE or BT Methods score, and an online admissions interview.",
      },
      test: fsTest,
      english: fsEnglish,
      application: { ...fsApplication },
      places: 28,
      documents: fsDocs,
      sources: fsSources("master-in-financial-technology", "Master in Financial Technology"),
      caveats: [
        ...fsCaveats,
        "Three semesters are possible under certain conditions (not detailed on the page). This file uses the standard 4 semesters.",
      ],
    },
    {
      ...fsBaseObj,
      id: "fs-maids",
      name: "Master of Artificial Intelligence & Data Science",
      fields: ["analytics", "information-systems"],
      fees: fsFees(35500, fsGenericScholar + " Examples: Proresult (two years of paid part-time work in financial consulting that covers full tuition; needs German C1; one place per intake), Deutsche Bank scholarships, WM Gruppe women scholarship, Yeni Nesil."),
      bachelorFields: {
        standard: ["quantitative"],
        relatedAllowed: true,
        note: "Strong quantitative and analytical skills expected: shown by high GMAT/GRE or FS test scores, a STEM degree (maths, engineering, computer science, physics), or other evidence. Minimum 180 ECTS.",
      },
      ectsRules: [],
      ectsNote: "No subject-specific ECTS minimums are published. The school looks for quantitative evidence.",
      grade: {
        min: null,
        selection:
          "No minimum grade listed. Selection is based on profile review (quantitative skills), GMAT/GRE or BT Methods score, and an online admissions interview.",
      },
      test: fsTest,
      english: fsEnglish,
      application: { ...fsApplication },
      places: 25,
      documents: fsDocs,
      sources: fsSources("master-of-artificial-intelligence-and-data-science", "Master of AI & Data Science"),
      caveats: [...fsCaveats, "Semester 3 includes a 3 to 4 month company cooperation project."],
    },
    {
      ...esmtBase,
      id: "esmt-mgm",
      name: "Master in Global Management (MGM)",
      fields: ["management", "finance", "supply-chain", "analytics"],
      fees: esmtFees,
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "A bachelor degree or equivalent with excellent grades. Final-year students graduating within a year can apply. At most 24 months of postgraduate work experience (internships excluded).",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums. Quantitative skills are shown through a quantitative degree, grades in quantitative courses, or a GMAT/GRE/BAT score.",
      grade: {
        min: null,
        selection:
          "No numeric minimum. Holistic review of grades, essays, CV, recommendation, quantitative evidence (GMAT/GRE/BAT if needed) and an interview. Rolling admissions.",
      },
      test: { status: "conditional", accepted: ["GMAT", "GMAT Focus", "GRE", "ESMT BAT"], note: esmtTestNote },
      english: esmtEnglish,
      application: { ...esmtApplication },
      documents: esmtDocs,
      sources: [
        { label: "MGM programme", url: "https://esmt.berlin/master-programs/master-global-management" },
        { label: "MGM admissions", url: "https://esmt.berlin/master-programs/master-global-management/admissions" },
        { label: "Master's fees and scholarships", url: "https://esmt.berlin/master-programs/scholarships-financing" },
        { label: "ESMT degree programmes", url: "https://esmt.berlin/degrees" },
      ],
      caveats: [
        ...esmtCaveats,
        "The programme page says 156 students across two cohorts; the places per intake are not stated.",
      ],
    },
    {
      ...esmtBase,
      id: "esmt-mie",
      name: "Master in Innovation & Entrepreneurship (MIE)",
      fields: ["entrepreneurship", "management"],
      fees: esmtFees,
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "A bachelor degree or equivalent, ideally with excellent grades. Final-year students graduating within a year can apply. Ideally 0 to 3 years of postgraduate work experience; up to 5 considered case by case.",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums. A quantitative waiver for GMAT/GRE/BAT is not guaranteed.",
      grade: {
        min: null,
        selection:
          "No numeric minimum. Holistic review of grades, essays, CV, recommendation, quantitative evidence and an interview. Rolling admissions.",
      },
      test: { status: "conditional", accepted: ["GMAT", "GMAT Focus", "GRE", "ESMT BAT"], note: esmtTestNote },
      english: esmtEnglish,
      application: { ...esmtApplication },
      documents: esmtDocs,
      sources: [
        { label: "MIE programme", url: "https://esmt.berlin/master-programs/master-innovation-entrepreneurship" },
        { label: "MIE admissions", url: "https://esmt.berlin/master-programs/master-innovation-entrepreneurship/admissions" },
        { label: "Master's fees and scholarships", url: "https://esmt.berlin/master-programs/scholarships-financing" },
      ],
      caveats: [
        ...esmtCaveats,
        "Work experience: the page says ideally 0 to 3 years and up to 5 years case by case. This is a recommendation, not a hard rule, and differs from the 24-month limit of the MGM.",
        "Programme-specific scholarships: Women in I&E up to EUR 6,000 (5 awards), Next Unicorn up to EUR 6,000 (5 awards).",
      ],
    },
    {
      ...esmtBase,
      id: "esmt-maai",
      name: "Master in Analytics & Artificial Intelligence (MAAI)",
      fields: ["analytics", "information-systems"],
      fees: esmtFees,
      bachelorFields: {
        standard: ["quantitative", "economics", "business"],
        relatedAllowed: true,
        note: "Scientific training expected: bachelor in engineering, natural sciences, mathematics or statistics, or a quantitative economics/business degree with mostly theoretical coursework. Others may need the BAT, GMAT or GRE. Ideally 0 to 3 years of postgraduate work experience; up to 5 considered case by case.",
      },
      ectsRules: [],
      ectsNote: "No subject ECTS minimums. Quantitative evidence is judged individually.",
      grade: {
        min: null,
        selection:
          "No numeric minimum. Holistic review of grades, quantitative evidence, essays, CV, recommendation and an interview. Rolling admissions.",
      },
      test: { status: "conditional", accepted: ["GMAT", "GRE", "ESMT BAT"], note: esmtTestNote },
      english: esmtEnglish,
      application: { ...esmtApplication },
      documents: esmtDocs,
      sources: [
        { label: "MAAI programme", url: "https://esmt.berlin/master-programs/master-analytics-artificial-intelligence" },
        { label: "MAAI admissions", url: "https://esmt.berlin/master-programs/master-analytics-artificial-intelligence/admissions" },
        { label: "Master's fees and scholarships", url: "https://esmt.berlin/master-programs/scholarships-financing" },
      ],
      caveats: [
        ...esmtCaveats,
        "Work experience is a recommendation (0 to 3 years ideal), not a hard rule.",
        "Women in STEM & Analytics scholarship: up to EUR 6,000 (10 awards, MAAI only).",
      ],
    },
  ]);
})();
