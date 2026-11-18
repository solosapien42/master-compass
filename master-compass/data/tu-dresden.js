/* TU Dresden – Faculty of Business and Economics. Checked 2026-11-17. */
(function () {
  const base = {
    university: "TU Dresden",
    city: "Dresden",
    state: "Saxony",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    fees: {
      tuitionNonEU: 0,
      semester: "€361.00 per semester in winter 2026/27 (semester contribution incl. semester ticket); €338.00 in summer 2026",
      tuitionNote: "TU Dresden states that it charges no general tuition fees. Fees apply only to long-term study, distance study, some special programmes and a second degree (€350 per semester, only if the earlier studies exceeded the standard period by at least 6 semesters). Non-EU students are not charged extra. The semester contribution is not tuition.",
      other: "uni-assist may charge a handling fee for foreign degrees (not stated on the TU Dresden pages).",
    },
    lastChecked: "2026-11-17",
  };

  const feeSrc = { label: "Semester fee and tuition at TU Dresden", url: "https://tu-dresden.de/studium/im-studium/studienorganisation/semesterbeitrag-studiengebuehren" };
  const rueckSrc = { label: "Semester contribution, re-registration", url: "https://tu-dresden.de/studium/organisation/rueckmeldung" };

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "tud-ma-bwl",
      name: "Business Administration (Betriebswirtschaftslehre)",
      fields: ["management", "finance", "accounting", "marketing", "supply-chain", "sustainability"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German (some elective modules in English)",
      bachelorFields: {
        standard: ["business"],
        relatedAllowed: true,
        note: "Degree in business/economics (Wirtschaftswissenschaften) or a related subject, including from a Berufsakademie. Admission depends on the subject ECTS below. At most 5 ECTS from other social sciences (e.g. psychology, sociology, law) can count towards the economics/quantitative block, and only from elective modules.",
      },
      ectsRules: [
        [
          { cats: ["business"], min: 55, label: "Business administration (non-overlapping courses)" },
          { cats: ["economics"], min: 20, label: "Economics" },
          { cats: ["math", "statistics"], min: 20, label: "Mathematics / statistics / quantitative methods" },
        ],
      ],
      ectsNote: "Economics (≥20) plus mathematics/statistics/quantitative methods (≥20) must together be at least 40 ECTS. The 55 ECTS in business administration must come from courses that do not overlap in content. Rules are in § 2 of the aptitude regulations (Eignungsfeststellungsordnung).",
      partialMinPct: 80,
      grade: {
        min: null,
        selection: "Restricted admission (NC). The faculty first checks aptitude (subject ECTS). Places are then allocated under the university's master allocation rules, by degree grade. No interview is mentioned.",
      },
      test: { status: "none", accepted: [], note: "No GMAT or GRE is mentioned for this programme." },
      english: { cefr: "none", ielts: null, toefl: null, englishMedium: "no", note: "No English proof is required for admission. Some elective modules are taught in English." },
      german: {
        cefr: "C1",
        note: "German is required for international applicants. The programme page does not name the level. TU Dresden's general rule for German-taught master's programmes is DSH-2, TestDaF 4 in all parts, telc C1 Hochschule, DSD II or Goethe C2.",
      },
      application: {
        route: "Apply online in the TU Dresden application portal (Immatrikulationsamt), then send the aptitude form and documents to TU Dresden c/o uni-assist e.V. (degrees from abroad)",
        vpd: false,
        opens: "2027-04-01",
        deadline: "2027-05-31",
        eu: { deadline: "2027-07-15" },
        note: "Non-EU applicants with a foreign degree: 1 April to 31 May (EU: until 15 July). The faculty's aptitude application must be in by the end of the period, and its deadline can be earlier than the general one. The aptitude notice is sent by about 15 August. The faculty page does not mention a VPD.",
      },
      interview: false,
      documents: [
        "Online application in the TU Dresden portal",
        "Aptitude assessment form (Antrag auf Feststellung der besonderen Eignung)",
        "Copy of the first degree certificate, or a certificate proving at least 80% of the bachelor credits with a provisional average grade",
        "Certificates and module descriptions proving the subject ECTS",
        "Proof of German",
        "Certificate of credited semesters (only if you apply for a higher semester)",
      ],
      sources: [
        { label: "Programme page", url: "https://tu-dresden.de/bu/wirtschaft/studium/studienangebot/msc-bwl/studiengangsseite" },
        { label: "Aptitude assessment (Eignungsfeststellung)", url: "https://tu-dresden.de/bu/wirtschaft/studium/studienangebot/msc-bwl/eignungsfeststellung" },
        { label: "Study information system SINS: M.Sc. BWL", url: "https://tu-dresden.de/sins/ma-bwl" },
        { label: "Aptitude regulations MA BWL (12 Apr 2019)", url: "https://www.verw.tu-dresden.de/AmtBek/PDF-Dateien/2019-06/10eignungsfeststOBWL12.04.2019.pdf" },
        { label: "German skills for studying", url: "https://tu-dresden.de/studium/vor-dem-studium/bewerbung/studienvoraussetzungen/sprachkenntnisse" },
        feeSrc,
        rueckSrc,
      ],
      caveats: [
        "The subject ECTS come from the SINS page. We could not read the regulation PDF (2019) to confirm them. Check § 2 of the aptitude regulations.",
        "No minimum grade, selection formula, past cut-off or number of places is published on the pages we could read. The programme is NC-restricted, so the grade decides. Ask the faculty for recent cut-offs.",
        "The German level for this programme is not named on the programme pages. We list C1 from TU Dresden's general rule. Confirm it with the faculty.",
        "Aptitude application: the faculty page says the aptitude form goes to uni-assist for foreign degrees. Whether a VPD is needed is not stated. The faculty notes the aptitude deadline can be earlier than the general one.",
        "The programme page and the 2024 faculty slides give different dates (the slides show only the 1 June to 15 July window). We used the SINS and Eignungsfeststellung pages for non-EU dates. These dates are for 2026 and may change for 2027 (SINS data is valid until May 2027).",
        "Semester fee for winter 2027/28 is not published yet. TU Dresden says the fee rises in 2026/27.",
        "Tuition: no general fees at TU Dresden, but a second-degree fee of €350 per semester can apply to people who already hold a degree and exceeded the standard study time by at least 6 semesters.",
      ],
    },
    {
      ...base,
      id: "tud-ma-pie",
      name: "Public and International Economics",
      fields: ["economics"],
      intake: "Winter only",
      languageKey: "English",
      language: "English (taught entirely in English)",
      bachelorFields: {
        standard: ["economics"],
        relatedAllowed: true,
        note: "First degree in economics or a closely related field, recognised in Germany (a Berufsakademie degree in economics also counts). Admission depends on the subject ECTS below. Double degrees with the universities of Trento and Pavia are available (one year abroad).",
      },
      ectsRules: [
        [
          { cats: ["economics"], min: 35, label: "Economics" },
          { cats: ["math", "statistics"], min: 15, label: "Quantitative methods (mathematics, statistics, econometrics)" },
        ],
      ],
      ectsNote: "At least 35 ECTS in economics 'with a good grade average' and 15 ECTS in quantitative methods such as mathematics, statistics or econometrics.",
      partialMinPct: 80,
      grade: {
        min: null,
        selection: "Aptitude assessment by the admissions committee based on the documents (grades, subject ECTS, CV, motivation letter, two academic references). An online interview may follow. The pages ask for a 'good' grade average but give no number.",
      },
      test: { status: "none", accepted: [], note: "No GMAT or GRE is mentioned." },
      english: {
        cefr: "B2",
        ielts: 5.5,
        toefl: 72,
        englishMedium: "yes",
        note: "Proof of B2. A bachelor degree taught entirely in English is accepted, as is a school-leaving certificate taught entirely in English or with 6 years of English. Also accepted: Cambridge FCE grade C, PTE Academic 59, TOEIC 785, telc B2, UNIcert II, IGCSE.",
      },
      german: null,
      application: {
        route: "Apply through uni-assist.de (degrees from abroad). The portal handles registration, uploads and status tracking. Applicants with a German degree apply through the TU Dresden portal and send documents by post.",
        vpd: false,
        opens: "2027-04-01",
        deadline: "2027-05-31",
        eu: { deadline: "2027-07-15" },
        note: "Non-EU applicants with a foreign degree: 1 April to 31 May (EU: until 15 July). Enrolment deadline for the winter semester is 31 October; a summer start is not possible. If a visa delays you, the admission letter can be used to enrol the next winter semester. The pages do not mention a VPD.",
      },
      interview: false,
      documents: [
        "Aptitude assessment form",
        "CV showing your academic history",
        "Motivation letter",
        "Contact details of two professors from your bachelor programme (no reference letters)",
        "Copy of the first degree, or a registrar's certificate of at least 80% of the credits",
        "Certificates and module descriptions proving the aptitude criteria",
        "English proof",
        "Documents in German or English, plus the original-language version",
      ],
      sources: [
        { label: "Programme page", url: "https://tu-dresden.de/bu/wirtschaft/studium/studienangebot/master-pie" },
        { label: "How to apply: first degree from abroad", url: "https://tu-dresden.de/bu/wirtschaft/studium/studienangebot/master-pie/copy2_of_index?set_language=en" },
        { label: "How to apply: first degree from Germany", url: "https://tu-dresden.de/bu/wirtschaft/studium/studienangebot/master-pie/copy3_of_index" },
        { label: "Study requirements (SINS)", url: "https://tu-dresden.de/sins/efv/ma-pie" },
        { label: "Aptitude regulations MA PIE (English, 13 Apr 2023)", url: "https://tu-dresden.de/bu/wirtschaft/ressourcen/dateien/studium/studienangebot/Studienangebot/master-pie/EFO_MA-PIE_eng_20230413.pdf" },
        feeSrc,
        rueckSrc,
      ],
      caveats: [
        "No minimum grade, cut-off, ranking formula or number of places is published. The page only says 'good grade average'. Ask the programme advisor.",
        "Total ECTS (120) is taken from the 4-semester structure and the BWL master. The PIE pages we could read do not state it. Check the study regulations.",
        "The English TOEFL line on the SINS page also says 'new: 4.0'. We list 72 (old scale).",
        "The faculty page says the interview is possible, not certain. We marked interview as false.",
        "Semester fee for winter 2027/28 is not published yet. TU Dresden says the fee rises in 2026/27.",
        "Whether uni-assist charges a fee and whether a VPD is needed is not stated on the TU Dresden pages.",
      ],
    },
  ]);
})();
