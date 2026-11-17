/* University of Passau – School of Business, Economics and Information Systems. Checked 2026-11-17. */
(function () {
  const sources = {
    ieb: { label: "M.Sc. International Economics and Business (programme page)", url: "https://www.uni-passau.de/en/msc-ieb/" },
    iebPo: { label: "IEB subject-specific regulations FStuPO 2023 (English)", url: "https://www.uni-passau.de/fileadmin/dokumente/beschaeftigte/Rechtsvorschriften/StO_und_PO/WWF/FStuPO_Master_International_Economics_and_Business_2023_EN.pdf" },
    astupo: { label: "General master's regulations AStuPO (English)", url: "https://www.uni-passau.de/fileadmin/dokumente/beschaeftigte/Rechtsvorschriften/StO_und_PO/WWF/AStuPO_Master_WiWi_EN.pdf" },
    ba: { label: "M.Sc. Business Administration (programme page)", url: "https://www.uni-passau.de/en/msc-busadmin" },
    baFaq: { label: "Business Administration application FAQ", url: "https://www.uni-passau.de/en/msc-busadmin/frequently-asked-questions-on-the-application-for-msc-business-administration" },
    is: { label: "M.Sc. Information Systems (programme page)", url: "https://www.winfo.uni-passau.de/en/studies/master-degree/" },
    isFaq: { label: "Information Systems application FAQ", url: "https://www.uni-passau.de/en/msc-infosys/faq-msc-information-systems" },
    english: { label: "English as an admission requirement", url: "https://www.uni-passau.de/en/apply/requirements-for-study/english" },
    intl: { label: "How to apply with international qualifications", url: "https://www.uni-passau.de/en/apply/apply-with-intl-qualifications" },
    fee: { label: "Semester fee", url: "https://www.uni-passau.de/en/costs-funding/enrolment-fee" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "EUR 134 per semester (summer 2027; EUR 126.90 in winter 2026/27), incl. student services and semester bus pass",
    tuitionNote: "Passau lists no tuition fee for non-EU students, and the programme pages say there is none. Bavarian law lets universities charge non-EU students, and some Bavarian universities do. No Passau fee for winter 2027/28 was found.",
    other: "uni-assist handling fee: EUR 75 for the first university and EUR 30 for each further one.",
  };

  const baseCaveats = [
    "Tuition: Bavarian law allows tuition for non-EU students and other Bavarian universities charge it. Passau's pages show none, but the rules for winter 2027/28 are not published yet. Check before you apply.",
    "The winter 2027/28 application dates are not published yet. Dates here follow the current pattern (1 April to 30 June via uni-assist).",
    "English proof: the general Passau page lists IELTS 6.0 to 6.5 and TOEFL iBT 72 to 94 for B2. The Computer Science page lists IELTS 5.5. Plan for IELTS 6.0 / TOEFL 72 and confirm with the Student Registration Office. Certificates must not be older than 2 years.",
  ];

  const english = {
    cefr: "B2",
    ielts: 6.0,
    toefl: 72,
    englishMedium: "conditional",
    note: "B2 proof is due with the application. The programme page waives it if English was the language of instruction of your previous education. The general English page says the first degree must have been entirely in English, with this shown in your transcript or confirmed officially on the university's letterhead. The application FAQ does not mention this waiver, so ask the university before relying on it.",
  };

  const base = {
    university: "University of Passau",
    city: "Passau",
    state: "Bavaria",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    german: null,
    extraLanguage: "German A1 certificate by the end of the first study year (free beginner course offered)",
    fees,
    lastChecked: "2026-11-17",
  };

  const uniAssistApp = {
    route: "Degree from outside the EEA: apply through uni-assist e.V. only (no exceptions, even for current Passau students). The university does not use the uni-assist VPD as an admission criterion",
    vpd: false,
    opens: "2027-04-01",
    opensApprox: true,
    deadline: "2027-06-30",
    note: "Winter intake via uni-assist: 1 April to 30 June. EEA degrees apply directly in the campus portal from 15 April to 15 July. Pay the uni-assist fee early, because uni-assist does not process the application before it is paid. Incomplete applications are rejected at the end of the period.",
  };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "pas-ieb",
      name: "International Economics and Business",
      fields: ["economics", "finance", "analytics"],
      intake: "Winter only",
      languageKey: "English",
      language: "English",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "No required degree title. Admission depends on at least 35 ECTS in economics and 15 ECTS in mathematics and statistics. Business or finance graduates qualify if they meet both.",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 35, label: "Economics (micro, macro, economic policy)" },
          { cats: ["math", "statistics"], min: 15, label: "Mathematics and statistics" },
        ],
      ],
      ectsNote: "Good grades in these subjects strengthen the application. The programme offers a self-assessment tool for classifying your courses.",
      partialMinEcts: 140,
      grade: {
        min: null,
        selection: "Documents are checked first. If they are positive, you are invited to an aptitude test with a written exam and an interview (in person or by video).",
      },
      test: { status: "none", accepted: [], note: "No GMAT or GRE is mentioned. The aptitude test (written exam and interview) is part of the procedure." },
      english: {
        ...english,
        englishMedium: "yes",
        note: "B2 proof is due by the application deadline, unless English is your native language or the language of instruction of your previous education. For this programme the page states the waiver directly. Keep an official confirmation from your university.",
      },
      application: uniAssistApp,
      interview: true,
      documents: [
        "Bachelor certificate, or transcript of records (at least 140 ECTS must be shown by the start of the first semester)",
        "Transcript of records",
        "English proof (B2) or confirmation of English-medium instruction",
        "Programme questionnaire and course classification (self-assessment, 10 to 15 minutes)",
        "German A1 certificate by the end of the first year",
      ],
      places: undefined,
      sources: [sources.ieb, sources.iebPo, sources.astupo, sources.english, sources.intl, sources.fee],
      caveats: [
        "No minimum grade and no published past cut-offs were found. The selection is by documents, then a written exam and interview.",
        "The programme page says only 20 to 30 students join each year. No official number of places was found.",
        "The admission regulations (FStuPO) are only available as PDFs that could not be read as text. Details here come from the programme page. Check the regulation for the exact aptitude-test scoring.",
        "The programme page gives no separate instructions for non-EU applicants beyond the uni-assist period (1 April to 30 June). The exact test dates were not found.",
      ].concat(baseCaveats),
    },
    {
      ...base,
      id: "pas-ba",
      name: "Business Administration",
      fields: ["management", "finance", "accounting", "analytics", "information-systems", "entrepreneurship"],
      intake: "Winter & summer",
      languageKey: "English",
      language: "English (some electives in German)",
      notice: {
        type: "info",
        text: "The programme was restructured from summer semester 2025. It has 6 majors: Accounting and Tax, Data Science, Entrepreneurship, Finance, Information Systems and Digital Business, Management and Strategy. Older pages that mention AFT, IMM or WIIS are outdated.",
      },
      bachelorFields: {
        standard: ["business", "economics"],
        relatedAllowed: true,
        note: "A first degree of normally three years in business, economics or a related field. The rule is at least 60 ECTS in business or economics subjects, including at least 10 ECTS in methods. If you do not meet it, you are not admitted.",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Business and economics subjects" },
          { cats: ["math", "statistics"], min: 10, label: "Methods (mathematics, statistics, data analysis)" },
        ],
      ],
      ectsNote: "The 10 ECTS of methods can also include data collection and data analysis courses. These are counted here as mathematics or statistics. The ECTS must be complete by the application deadline. Making up credits later is not allowed.",
      partialMinEcts: 140,
      grade: {
        min: 2.7,
        selection: "Admission if you meet the requirements. There is no ranking or pre-screening. Final grade of 2.7 or better, or a place in the best 50% of your graduating cohort.",
      },
      test: {
        status: "conditional",
        accepted: ["GMAT", "GMAT Focus"],
        note: "GMAT is required only if your degree is from a country that has not signed the Lisbon Convention. Minimum 600 (10th edition) or 565 (Focus). GRE is not accepted. Turkey is a signatory, so a Turkish degree needs no GMAT. Franchise degrees (a foreign university's degree taught in another country) are not accepted.",
      },
      english,
      application: uniAssistApp,
      interview: false,
      documents: [
        "Degree certificate and final transcript, or current transcript of records (at least 140 ECTS with provisional average of 2.7 or better by the start of semester 1)",
        "English proof (B2)",
        "CV",
        "GMAT score report, if required",
        "German A1 certificate (by the end of the first year)",
        "Final degree certificate by 30 September 2028 at the latest (winter start)",
      ],
      sources: [sources.ba, sources.baFaq, sources.english, sources.intl, sources.fee],
      caveats: [
        "No official number of places or past cut-offs were found. The programme page states no admission cap.",
        "The degree certificate is due by 30 September of the year after the start. A leave of absence does not extend this.",
        "The programme page waives English proof for English-medium prior education, but the application FAQ does not mention this waiver. Ask the university before relying on it.",
        "The business and economics ECTS are counted together. The FAQ says business, economics or business-related subjects count. The exact treatment of accounting and finance courses is not stated.",
        "The programme's subject-specific regulation (FStuPO) could not be read as text. Details come from the programme page and FAQ.",
      ].concat(baseCaveats),
      lastChecked: "2026-11-17",
    },
    {
      ...base,
      id: "pas-is",
      name: "Information Systems (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics", "management"],
      intake: "Winter & summer",
      languageKey: "English",
      language: "English (some electives in German)",
      notice: {
        type: "info",
        text: "This programme was formerly called Wirtschaftsinformatik. It has two majors: Artificial Intelligence and Data-Driven Business, and Information Systems Management. New regulations and module catalogue apply from summer semester 2026.",
      },
      bachelorFields: {
        standard: ["business", "quantitative"],
        relatedAllowed: true,
        note: "A first degree of at least three years in information systems or a related field. You need 60 ECTS in information systems subjects. Up to 40 of them may come from management, economics or business administration, and up to 40 from computer science.",
      },
      ectsRules: [
        [
          { cats: ["informatics"], min: 20, label: "Information systems or computer science (at least 20 in this area)" },
          { cats: ["informatics", "business", "economics"], min: 60, label: "Information systems, computer science, management and economics combined" },
        ],
      ],
      ectsNote: "Allowed combinations (information systems / management / computer science) include 20/40/0, 0/20/40, 0/40/20, 20/20/20, 10/10/40, 30/30/0, 0/30/30. Management-only or computer-science-only applicants need at least 20 ECTS in the other area. Introductory mathematics and statistics do not count, advanced ones may. Only bachelor credits count. The caps (40 per area) cannot be checked by the tool.",
      partialMinEcts: 140,
      grade: {
        min: 2.7,
        selection: "Admission if you meet the requirements. There is no pre-screening and no ranking. Final grade of 2.7 or better, or a place in the best 50% of graduates.",
      },
      test: {
        status: "conditional",
        accepted: ["GMAT", "GMAT Focus"],
        note: "GMAT (600 on the 10th edition or 565 Focus) is required only if your degree is from a country outside the Lisbon Convention. Turkey is a signatory (confirmed in the FAQ), so a Turkish degree needs no GMAT. GRE is not accepted. Send scores through GMAC (programme code CG1-D8-79). Screenshots are not accepted.",
      },
      english,
      application: uniAssistApp,
      interview: false,
      documents: [
        "Self-assessment form (Selbstauskunft) listing your ECTS",
        "Degree certificate, or transcript of records (at least 140 ECTS with provisional average of 2.7 or better by the start of semester 1)",
        "English proof (B2)",
        "CV",
        "GMAT score report, if required",
        "German A1 certificate (by the end of the first year)",
        "Final degree certificate by 30 September 2028 at the latest (winter start)",
      ],
      sources: [sources.is, sources.isFaq, sources.english, sources.intl, sources.fee],
      caveats: [
        "No official number of places or past cut-offs were found.",
        "The programme page and FAQ do not say that an English-medium bachelor replaces the B2 certificate. The general English page does allow it if the whole first degree was in English and officially confirmed. Ask the university.",
        "Passau does not pre-screen the ECTS. The tool's check is an approximation of the information systems / management / computer science rules.",
        "The ECTS rule counts only information systems subjects. The tool treats informatics, business and economics together, so a pure business bachelor needs about 20 ECTS of information systems or computer science.",
      ].concat(baseCaveats),
    },
  ]);
})();
