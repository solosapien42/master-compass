/* WHU - Otto Beisheim School of Management and HHL Leipzig Graduate School of Management (private). Checked 2026-11-17. */
(function () {
  const whuMsc = "https://www.whu.edu/en/programs/master-of-science-programs/";
  const hhl = "https://www.hhl.de/";

  // ---------- WHU ----------
  const whuBase = {
    university: "WHU - Otto Beisheim School of Management",
    private: true,
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

  const whuFees = (extra) => ({
    tuitionAll: 10300,
    tuitionNonEU: 10300,
    semester: "About EUR 10,300 per semester (120-credit track, 4 semesters)",
    tuitionNote:
      "Total tuition for the 2027 intake: EUR 41,200 (120-credit track, incl. semester abroad), paid as EUR 2,000 deposit (deducted from the total) plus instalments. Application fee EUR 100. Early bird: EUR 3,000 off for complete applications by 30 Nov 2026, EUR 1,500 off by 31 Jan 2027. About 40% of MSc students get a scholarship; Merit Scholarship needs GMAT 655+, GRE 164/164 or GTEBS 112+ (usually 25% of tuition); Responsible Leader Scholarship (MiM only) covers 75%, apply by 31 Jan 2027." +
      (extra || ""),
    other: "No semester contribution is stated on the programme pages.",
  });

  const whuTest = {
    status: "required",
    accepted: ["GMAT", "GRE", "GTEBS"],
    note: "Minimum GMAT 555 (superscore accepted), GRE 158 Verbal and 158 Quant, or GTEBS 102 (taken in English). Online formats accepted. You can apply without a score and get a conditional offer; scores are due by 31 May 2027. Applicants who already have a score are prioritised.",
  };

  const whuEnglish = {
    cefr: "C1",
    ielts: 7.5,
    toefl: 100,
    englishMedium: "conditional",
    note: "IELTS Academic 7.5, or TOEFL iBT 100 (classic) or 5.5 (new format, from Jan 2026). Valid for 2 years. Duolingo and TOEIC are not accepted. Waived only if your entire bachelor AND secondary education were taught in English (proof such as IB diploma or medium-of-instruction certificate). An English-taught bachelor alone may not be enough.",
  };

  const whuApplication = {
    route: "Online via the WHU Application Center. WHU does not use uni-assist.",
    vpd: false,
    opens: "2026-09-15",
    deadline: "2027-04-30",
    eu: { deadline: "2027-05-31" },
    note: "Rounds for the 2027 intake: early bird 30 Nov 2026 and 31 Jan 2027; scholarship deadline 31 Mar 2027; 30 Apr 2027 for applicants who need a student visa (this date is used above); 31 May 2027 final deadline for EU/EEA citizens and applicants who do not need a visa. Processing: online review up to 7 business days, video interview, live interview, then study contract (14 days to sign).",
  };

  const whuDocs = [
    "One-page CV in English",
    "Bachelor transcript of records (latest transcript if still studying)",
    "Passport copy (national ID for EU citizens)",
    "English proof or proof of English-taught education",
    "GMAT, GRE or GTEBS score sent through the official portal (can follow, by 31 May 2027)",
    "Employer letter proving at least 12 weeks (480 hours) of business-related practical experience (name, position, dates, tasks, stamp, signature)",
    "Secondary school diploma and transcript",
    "Certified translations for documents not in English or German (PDF only, max. 10 MB per file)",
  ];

  const whuCaveats = [
    "WHU publishes the minimum for practical experience as both 12 weeks (480 hours) and 3 months full-time. Confirm which applies.",
    "The 2027 tuition (EUR 41,200 / EUR 33,600) comes from the shared MSc fees page; programme pages do not state tuition. Per-semester value is total divided by 4 payment semesters.",
    "No minimum bachelor grade is published. Selection is by test score, interviews and profile; no historical cutoff is stated.",
    "The scholarship deadline is given as 31 March on the application and fees pages, and as 31 January for the Responsible Leader Scholarship (MiM).",
    "Exact start date is not published; the mandatory welcome week is usually in the last week of August and lectures began 1 September in 2026.",
    "Deadline field shows the date for applicants who need a student visa (30 Apr 2027). The final deadline for others is 31 May 2027.",
    "Class sizes are those of the current Class of 2028 and only an indication of places.",
  ];

  const whuSources = (slug, label) => [
    { label: label + " programme page", url: whuMsc + slug + "/" },
    { label: label + " application and admissions", url: whuMsc + slug + "/application-admissions/" },
    { label: "MSc fees and financing", url: whuMsc + "fees-financing/" },
    { label: "MSc programmes overview", url: whuMsc },
  ];

  // ---------- HHL ----------
  const hhlBase = {
    university: "HHL Leipzig Graduate School of Management",
    private: true,
    city: "Leipzig",
    state: "Saxony",
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

  const hhlFees = (extra) => ({
    tuitionAll: 9625,
    tuitionNonEU: 9625,
    semester: "About EUR 9,625 per semester (EUR 38,500 over 4 semesters)",
    tuitionNote:
      "Total tuition EUR 38,500 (incl. exams and term abroad), EUR 3,000 down payment after admission, rest in four instalments. No application fee is stated. Early bird discounts: EUR 4,500 (by 30 Nov 2026), EUR 3,000 (31 Jan 2027), EUR 1,500 (31 Mar 2027). HHL awards scholarships by academic record and personality; amounts not published." +
      (extra || ""),
  });

  const hhlTest = {
    status: "required",
    accepted: ["GMAT", "GRE", "HHL Entry Test"],
    note: "GMAT, GRE or the HHL Entry Test; no minimum score is published. The score can follow the application. Test deadlines by round: 31 Jan, 31 Mar, 30 Jun (early bird rounds) and 15 Aug (final rounds). Applicants from India with an eligible bachelor must first pass the dMAT.",
  };

  const hhlEnglish = {
    cefr: "C1",
    ielts: 7.0,
    toefl: 90,
    englishMedium: "yes",
    note: "Proof of very good English, e.g. IELTS 7.0 or TOEFL iBT 90. A bachelor taught in English counts as proof. No other waivers are listed. Proof can follow the initial application.",
  };

  const hhlApplication = {
    route: "Online via the HHL application portal. HHL does not use uni-assist.",
    vpd: false,
    opens: "2026-09-15",
    deadline: "2027-05-31",
    eu: { deadline: "2027-06-30" },
    note: "Rounds for the September 2027 intake: Early Bird 1 on 30 Nov 2026, Early Bird 2 on 31 Jan 2027, Early Bird 3 on 31 Mar 2027 (discounts need the interview passed and tests in by the later dates listed on the site), final round for non-EU applicants on 31 May 2027 (used above), final round for EU applicants and others without a visa need on 30 Jun 2027. Non-EU applicants who need a visa should apply as early as possible. Interview dates run from Oct 2026 to Jul 2027; decision 7 to 10 days after the interview.",
  };

  const hhlDocs = [
    "CV",
    "Letter of motivation",
    "Copy of Abitur or secondary school diploma",
    "Current or final bachelor transcript",
    "Passport photo",
    "Later: proof of at least 3 months of relevant work experience (internship, working student job or job)",
    "Later: degree certificate, English proof, GMAT/GRE/HHL Entry Test result",
    "Later (non-business bachelor): proof of business background",
    "APS certificate for applicants from China, India and Vietnam (for the visa)",
  ];

  const hhlCaveats = [
    "HHL publishes no minimum grade; it asks for above-average results in the school-leaving certificate and the bachelor.",
    "The early bird deadlines differ between the programme list and a footnote (the footnote gives 31 Jan, 31 Mar and 30 Jun for finishing documents, tests and the interview). Confirm with HHL admissions.",
    "The deadline field shows the non-EU date (31 May 2027). EU applicants and non-EU applicants who do not need a visa can apply until 30 Jun 2027.",
    "Duration is given as 21 to 24 months. Semesters are set to 4 to calculate the per-semester tuition.",
    "The programme page says 'credits' for the 180-credit bachelor requirement, not ECTS. Business credits are given as a range (40 to 60); 40 is used as the minimum here.",
    "The TOEFL requirement is written as '90 or 5' on the application page; 90 iBT is assumed.",
    "The 2027 intake year is not printed on the programme page; the application page says applications for fall 2027 open on 15 September.",
  ];

  const hhlBachelor = {
    standard: ["business", "economics"],
    relatedAllowed: true,
    note: "Bachelor in business administration or a related field (e.g. business informatics, business psychology, business law, economics, industrial engineering) with at least 180 credits. Non-business bachelors must show a business background through electives, thesis or work experience.",
  };

  const hhlSelection = "No minimum grade is published. HHL looks for above-average results in the school-leaving certificate and the bachelor, the test result, the letter of motivation and the interview. The interview (about 45 minutes with a professor: personal fit, small case, questions) is called the most important part.";

  const hhlMimBase = {
    ...hhlBase,
    bachelorFields: hhlBachelor,
    ectsRules: [[{ cats: ["business", "economics"], min: 40, label: "Business-related subjects (40 to 60 ECTS)" }]],
    ectsNote: "The school asks for 40 to 60 credits in business-related subjects. Applicants with a non-business bachelor can show the background through electives, thesis or work experience instead.",
    grade: { min: null, selection: hhlSelection },
    test: hhlTest,
    english: hhlEnglish,
    application: hhlApplication,
    documents: hhlDocs,
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...whuBase,
      id: "whu-mim",
      city: "Vallendar",
      state: "Rhineland-Palatinate",
      name: "Master in Management (MiM)",
      fields: ["management", "finance", "marketing"],
      language: "English (21 months incl. a semester abroad)",
      fees: whuFees(),
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: false,
        note: "Bachelor in business or economics with at least 180 ECTS. Applicants with other fields are pointed to the Master in International Business. Non-German degrees must come from a university rated H+ in Anabin. Up to 2 years of work experience after the bachelor.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject are published; the bachelor must be in business or economics.",
      grade: {
        min: null,
        selection: "No minimum grade is published. Selection by test score (GMAT/GRE/GTEBS), CV and practical experience, a recorded video interview (Kira Talent) and a live interview with a faculty member.",
      },
      test: whuTest,
      english: whuEnglish,
      application: whuApplication,
      places: 74,
      documents: whuDocs,
      sources: whuSources("master-in-management", "Master in Management"),
      caveats: [
        ...whuCaveats,
        "WHU's fee page lists a 90-credit track, but the MiM FAQ says the MiM exists only as a 120-credit, 21-month programme. Only the 120-credit track is used here.",
      ],
    },
    {
      ...whuBase,
      id: "whu-mif",
      city: "Düsseldorf",
      state: "North Rhine-Westphalia",
      name: "Master in Finance (MiF)",
      fields: ["finance", "management"],
      language: "English (17 or 21 months; the 21-month track includes a semester abroad)",
      fees: whuFees(" The 90-credit, 17-month track costs EUR 33,600 (3 semesters, about EUR 11,200 each)."),
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in business or economics, or in STEM with a strong quantitative background and finance-related practical experience, with at least 180 ECTS. Non-German degrees must be rated H+ in Anabin. Up to 4 years of work experience after the bachelor.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject are published.",
      grade: {
        min: null,
        selection: "No minimum grade is published. Selection by test score, finance-related practical experience, a recorded video interview and a live interview.",
      },
      test: whuTest,
      english: whuEnglish,
      application: whuApplication,
      places: 106,
      documents: whuDocs,
      sources: whuSources("master-in-finance", "Master in Finance"),
      caveats: [
        ...whuCaveats,
        "There is also a 90-credit, 17-month track (generally for bachelors of about 210 ECTS and at least 3 months of international experience). It is not listed separately here; this entry covers the 120-credit track. The campus is Duesseldorf.",
        "The programme page lists no 2027 dates; the dates come from the application page. Class size is the current Class of 2028 (106 students).",
      ],
    },
    {
      ...whuBase,
      id: "whu-mie",
      city: "Vallendar",
      state: "Rhineland-Palatinate",
      name: "Master in Entrepreneurship (MiE)",
      fields: ["entrepreneurship", "management"],
      language: "English (17 or 21 months; the 21-month track includes a semester abroad)",
      fees: whuFees(" The 90-credit, 17-month track costs EUR 33,600 (3 semesters, about EUR 11,200 each)."),
      bachelorFields: {
        standard: ["business", "economics", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "Bachelor in business, STEM or another field with at least 180 ECTS. Applicants from other fields should show an entrepreneurship background (electives, thesis, practical experience). Non-German degrees must be rated H+ in Anabin. Up to 6 years of work experience after the bachelor.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject are published.",
      grade: {
        min: null,
        selection: "No minimum grade is published. Selection by a 10-slide pitch deck, a recorded video interview with a 5-minute business pitch, and a live interview with a faculty member.",
      },
      test: {
        status: "none",
        accepted: [],
        note: "A 10-slide pitch deck replaces the GMAT/GRE/GTEBS score. You do not need to be a founder.",
      },
      english: whuEnglish,
      application: whuApplication,
      places: 47,
      documents: [
        ...whuDocs.filter((d) => !d.startsWith("GMAT")),
        "Pitch deck: 10 slides on a business concept (opportunity, problem, solution, business model and financials, market, competition, team, next steps)",
      ],
      sources: whuSources("master-in-entrepreneurship", "Master in Entrepreneurship"),
      caveats: [
        ...whuCaveats,
        "The application page lists GMAT/GRE/GTEBS in the general checklist but says MiE applicants submit a pitch deck instead; the MSc overview says MiE needs no GMAT/GRE. Treated as no test.",
        "There is also a 90-credit, 17-month track; this entry covers the 120-credit track. Class size is the current Class of 2028 (47 students).",
      ],
    },
    {
      ...whuBase,
      id: "whu-mib",
      city: "Vallendar",
      state: "Rhineland-Palatinate",
      name: "Master in International Business (MIB)",
      fields: ["management"],
      language: "English (21 months incl. a semester abroad)",
      fees: whuFees(),
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "Bachelor in any field with at least 180 ECTS. Without a business minor you take free online pre-master modules after enrolment. Non-German degrees must be rated H+ in Anabin. Up to 2 years of work experience after the bachelor.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject. Show business interest through internships, work experience or entrepreneurial activity.",
      grade: {
        min: null,
        selection: "No minimum grade is published. Selection by test score, practical experience, a recorded video interview and a live interview.",
      },
      test: whuTest,
      english: whuEnglish,
      application: whuApplication,
      places: 30,
      documents: whuDocs,
      sources: whuSources("master-in-international-business", "Master in International Business"),
      caveats: [
        ...whuCaveats,
        "The programme page gives 21 months and does not state ECTS; 120 ECTS is assumed from the 120-credit track on the fees page. The application page does not say whether MIB has a 90-credit option.",
        "Class size is the current Class of 2028 (30 students).",
      ],
    },
    {
      ...hhlMimBase,
      id: "hhl-mim",
      name: "Full-time Master in Management (M.Sc.)",
      fields: ["management", "finance", "entrepreneurship"],
      language: "English (21 to 24 months, incl. a term abroad at one of about 140 partner universities)",
      fees: hhlFees(),
      places: 50,
      sources: [
        { label: "Full-time Master in Management", url: hhl + "programs/full-time-master-in-management/" },
        { label: "Application", url: hhl + "application-full-time-m-sc-program/" },
      ],
      caveats: hhlCaveats,
    },
    {
      ...hhlMimBase,
      id: "hhl-mim-finance",
      name: "Full-time Master in Management | Finance (M.Sc.)",
      fields: ["finance", "management"],
      language: "English (21 to 24 months, 30 ECTS Finance Focus)",
      fees: hhlFees(),
      places: null,
      sources: [
        { label: "Full-time Master in Management | Finance", url: hhl + "programs/full-time-master-in-management-finance/" },
        { label: "Application", url: hhl + "application-full-time-m-sc-program/" },
      ],
      caveats: [
        ...hhlCaveats,
        "This is a finance specialisation of the HHL Master in Management with the same admission rules. The page does not state the number of places.",
      ],
    },
    {
      ...hhlMimBase,
      id: "hhl-mim-consulting",
      name: "Full-time Master in Management | Strategy and Business Consulting (M.Sc.)",
      fields: ["management"],
      language: "English (21 to 24 months, consulting track with a mandatory internship)",
      fees: hhlFees(),
      places: 20,
      sources: [
        { label: "Full-time Master in Management | Strategy and Business Consulting", url: hhl + "programs/full-time-master-in-management-consulting/" },
        { label: "Application", url: hhl + "application-full-time-m-sc-program/" },
      ],
      caveats: [
        ...hhlCaveats,
        "This is a consulting specialisation of the HHL Master in Management. The page says about 20 students are in the track within a class of about 60; admission rules were taken from the general M.Sc. application page.",
      ],
    },
    {
      ...hhlBase,
      id: "hhl-mfin-advanced",
      name: "Full-time Master in Finance, Advanced Track (M.Sc.)",
      fields: ["finance"],
      language: "English (21 to 24 months, incl. a term abroad)",
      fees: hhlFees(),
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in any field, ideally business or STEM. At least 3 months of relevant, finance-related work experience (internship, working student job or job); documents can follow.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject are published on the programme page.",
      grade: { min: null, selection: hhlSelection },
      test: hhlTest,
      english: {
        ...hhlEnglish,
        note: "The programme page names no minimum score and says proof can follow the application. IELTS 7.0 or TOEFL iBT 90 come from the general M.Sc. application page.",
      },
      application: hhlApplication,
      places: 15,
      documents: hhlDocs,
      sources: [
        { label: "Full-time Master in Finance", url: hhl + "programs/full-time-master-finance/" },
        { label: "Application", url: hhl + "application-full-time-m-sc-program/" },
      ],
      caveats: [
        ...hhlCaveats,
        "The programme page says a class of about 15 students is targeted. Tests and English minimums were not stated on the programme page; values come from the general M.Sc. application page.",
        "The business-credit rule (40 to 60) applies to the Master in Management page; the Master in Finance page asks only for a bachelor in any field, ideally business or STEM.",
      ],
    },
    {
      ...hhlBase,
      id: "hhl-mfin-fast",
      name: "Full-time Master in Finance, Fast Track (M.Sc.)",
      fields: ["finance"],
      ects: 90,
      semesters: 3,
      language: "English (15 months, 18 months with an optional internship)",
      fees: {
        tuitionAll: 10800,
        tuitionNonEU: 10800,
        semester: "About EUR 10,800 per semester (EUR 32,400 over 3 semesters)",
        tuitionNote:
          "Total tuition EUR 32,400, EUR 3,000 down payment after admission, rest in instalments. Early bird discounts EUR 3,150, EUR 2,100 and EUR 1,050 (30 Nov, 31 Jan, 31 Mar). Scholarships by academic record and personality; amounts not published.",
      },
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative"],
        relatedAllowed: true,
        note: "Bachelor in any field, ideally business or STEM. At least 3 months of relevant, finance-related work experience.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject are published on the programme page.",
      grade: { min: null, selection: hhlSelection },
      test: hhlTest,
      english: {
        ...hhlEnglish,
        note: "The programme page names no minimum score and says proof can follow the application. IELTS 7.0 or TOEFL iBT 90 come from the general M.Sc. application page.",
      },
      application: hhlApplication,
      places: 15,
      documents: hhlDocs,
      sources: [
        { label: "Full-time Master in Finance", url: hhl + "programs/full-time-master-finance/" },
        { label: "Application", url: hhl + "application-full-time-m-sc-program/" },
      ],
      caveats: [
        ...hhlCaveats,
        "Fast Track has 90 ECTS and 15 months (3 semesters assumed). The page does not state the entry requirements that differ from the Advanced Track, such as the expected bachelor length.",
        "Duration is 15 months per the programme page, so the fall 2027 start leads to a graduation around end 2028.",
      ],
    },
    {
      ...hhlBase,
      id: "hhl-mie",
      name: "Full-time Master in Entrepreneurship (M.Sc.)",
      fields: ["entrepreneurship", "management"],
      language: "English (21 to 24 months, incl. a term abroad)",
      fees: hhlFees(),
      bachelorFields: {
        standard: ["business", "economics", "finance", "quantitative", "social", "other"],
        relatedAllowed: true,
        note: "Open to graduates of all disciplines; a business degree is not required. At least 3 months of relevant practical experience (internship, working student job or job); proof can follow.",
      },
      ectsRules: [],
      ectsNote: "No ECTS minimums per subject are published.",
      grade: { min: null, selection: hhlSelection },
      test: {
        status: "none",
        accepted: [],
        note: "A GMAT or GRE score is not required. The page does not say clearly whether the HHL Entry Test is needed; its FAQ answer is No.",
      },
      english: {
        ...hhlEnglish,
        note: "The programme page names no minimum score and says proof can follow the application. IELTS 7.0 or TOEFL iBT 90 come from the general M.Sc. application page.",
      },
      application: hhlApplication,
      places: null,
      documents: hhlDocs.filter((d) => !d.includes("GMAT")).concat(["Later: degree certificate and English proof"]),
      sources: [
        { label: "Full-time Master in Entrepreneurship", url: hhl + "programs/full-time-master-entrepreneurship/" },
        { label: "Application", url: hhl + "application-full-time-m-sc-program/" },
      ],
      caveats: [
        ...hhlCaveats,
        "The number of places is not stated.",
        "Test rule: the programme page says no GMAT/GRE is required, while the general M.Sc. application page lists a test. This entry follows the programme page.",
      ],
    },
  ]);
})();
