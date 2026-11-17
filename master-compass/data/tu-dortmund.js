/* TU Dortmund University – Department of Business and Economics (+ M.Sc. Information Systems). Checked 2026-11-18. */
(function () {
  const src = {
    wiwiApp: { label: "WiWi: Application & enrollment (Master facts, access requirements)", url: "https://wiwi.tu-dortmund.de/en/prospective-students/application-and-enrollment/" },
    central: { label: "TU Dortmund: M.Sc. Business Administration and Economics", url: "https://www.tu-dortmund.de/en/students/degree-programs/wirtschaftswissenschaften-692" },
    po: { label: "Master examination regulations Wirtschaftswissenschaften, 13 Jul 2022 (German, binding)", url: "https://www.tu-dortmund.de/storages/tu_website/Dezernat_4/Dez._4.4/pruefungsordnungen/fachstudiengaenge/master/po-wirtschaftswissenschaften-ma-neuf-20220713.pdf" },
    intApp: { label: "International Office: application for non-EU/EEA nationals (Master)", url: "https://international.tu-dortmund.de/en/international-applicants/application/master/application-for-non-eu/eea/" },
    intEnroll: { label: "International Office: Master enrollment", url: "https://international.tu-dortmund.de/en/international-applicants/enrollment/bachelor-and-master/master/" },
    wiPage: { label: "Master Information Systems (Wirtschaftsinformatik) programme page", url: "https://wi.tu-dortmund.de/en/study-programs/master-in-information-systems/" },
    wiMpo: { label: "Master examination regulations Wirtschaftsinformatik, 10 Oct 2025 (German, binding)", url: "https://cs.tu-dortmund.de/storages/cs/r/Informatik/Studiendekanat/Modulhandbuecher/MSc_WirtInf/MPO/MPO_WI_10.10.2025.pdf" },
  };

  const fees = {
    tuitionNonEU: 0,
    semester: "€339.70 per semester in winter 2026/27 (semester contribution, incl. public transport ticket)",
    tuitionNote: "No tuition fees in North Rhine-Westphalia, also for non-EU students.",
    other: "If you apply through uni-assist, it may charge a processing fee.",
  };

  const application = {
    route: "International (non-EU) applicants apply through the International Office of TU Dortmund. Its non-EU page says to apply via uni-assist (no VPD step named). After admission you enrol in the Campusportal.",
    vpd: false,
    opens: "2027-03-15",
    opensApprox: true,
    deadline: "2027-07-15",
    note: "Cut-off deadline for German-taught programmes, winter semester: mid-March to 15 July. The English-taught window (early January to 15 May) does not apply here because German proof is required.",
  };

  const german = {
    cefr: "C1",
    note: "Very good German is required, also for the English-profile option. Examples accepted: DSH-2, TestDaF 4 in all parts (16 points), a German-taught school-leaving certificate or a German-taught degree.",
  };

  const base = {
    university: "TU Dortmund University",
    city: "Dortmund",
    state: "North Rhine-Westphalia",
    degree: "M.Sc.",
    ects: 120,
    semesters: 4,
    fees,
    lastChecked: "2026-11-18",
  };

  const sharedCaveats = [
    "The International Office page for non-EU applicants names uni-assist as the route. Other TU Dortmund pages say applications run through the Campusportal / an online form. Confirm the route and fee with admission.inquiries@tu-dortmund.de.",
    "The 15 July deadline and the mid-March opening come from the general German-taught-programme dates, not from a programme-specific page.",
    "Official pages publish no places and no past cut-off grades for this programme.",
  ];

  window.PROGRAMS = (window.PROGRAMS || []).concat([
    {
      ...base,
      id: "tudo-business-administration-economics",
      name: "Business Administration and Economics (Wirtschaftswissenschaften)",
      fields: ["management", "finance", "accounting", "economics", "entrepreneurship", "analytics"],
      intake: "Winter & summer",
      languageKey: "German/English",
      language: "Mostly German. One of five competence profiles, Business & Economics, is taught in English. German proof is still required.",
      bachelorFields: {
        standard: ["business", "economics", "finance"],
        relatedAllowed: true,
        note: "Any relevant bachelor of at least 180 ECTS is possible. Relevance is judged by the subject ECTS below, not by the degree title. Five profiles: Accounting and Finance; Management and Organizations; Digitalization and Entrepreneurship; Economics; Business & Economics (English).",
      },
      ectsRules: [
        [
          { cats: ["business", "economics"], min: 60, label: "Business administration and/or economics" },
          { cats: ["economics", "math", "statistics", "informatics"], min: 60, label: "Economics, mathematics, statistics and/or informatics" },
        ],
      ],
      ectsNote: "Economics ECTS may count towards both groups. The 2022 regulations require 60 + 60 ECTS. The faculty web page currently says 60 ECTS business/economics + 50 ECTS economics/maths/statistics/informatics. We use the stricter regulation values.",
      grade: {
        min: 2.5,
        selection: "Admission-free (no numerus clausus). Eligible applicants who meet the access requirements are admitted.",
        historicalNote: "No past cut-offs are published. There is no ranking.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE required or mentioned." },
      english: {
        cefr: "none",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No formal English certificate is required. The regulations only say very good English is expected. The English-profile modules are taught and examined in English.",
      },
      german,
      application,
      interview: false,
      documents: [
        "Bachelor certificate with transcript, or proof of studies and expected graduation date",
        "Highest school-leaving certificate with grade overview",
        "Proof of German (e.g. DSH-2 or TestDaF 4x4) unless your school or degree was German-taught",
        "Sworn translations of documents not in German or English",
        "APS certificate (China, India, Vietnam) or HEC attestation (Pakistan), if applicable",
        "Module descriptions / proof of subject ECTS (to check the 60 ECTS rules)",
      ],
      sources: [src.wiwiApp, src.central, src.po, src.intApp, src.intEnroll],
      caveats: [
        ...sharedCaveats,
        "Subject ECTS conflict: regulations (2022) say 60 + 60, the faculty page says 60 + 50. Ask the Examinations Office which applies for winter 2027/28.",
        "The 2022 regulations require an overall bachelor grade of at least 'good' (or ECTS grade B). We read this as 2.5 on the German scale. The faculty page does not mention a grade. Foreign grades are converted by the university.",
        "Partial-degree rule: not stated on the pages we could read. Ask whether you can apply before your bachelor certificate is issued.",
        "The faculty page says German is the language and 'at any time' for starting. The central page says German, English or bilingual, and the winter/summer intake. Deadlines for summer are not covered here.",
        "The page for the master's tuition and fees was not found. NRW has no tuition fees, but check the International Office.",
        "A 100%-English bachelor from Turkey does not replace German. English proof is not formally required.",
      ],
    },
    {
      ...base,
      id: "tudo-information-systems",
      name: "Information Systems (Wirtschaftsinformatik)",
      fields: ["information-systems", "analytics"],
      intake: "Winter & summer",
      languageKey: "German",
      language: "German (the regulations require German proof). The programme page does not state the teaching language.",
      notice: {
        type: "warning",
        text: "This is a joint programme of the Computer Science and Business and Economics faculties. The regulations name a Wirtschaftsinformatik bachelor as the standard entry. Other bachelors are admitted only if the examining board finds no essential differences. Pure business bachelors rarely qualify.",
      },
      bachelorFields: {
        standard: ["quantitative", "business"],
        relatedAllowed: true,
        note: "Standard entry: bachelor in Wirtschaftsinformatik (information systems) of TU Dortmund, or a comparable degree of at least 6 semesters with no essential differences, as decided by the examining board. The board can set conditions to be completed before the master's thesis.",
      },
      ectsRules: [],
      ectsNote: "No fixed subject ECTS minimums. The examining board compares your bachelor's content with TU Dortmund's Wirtschaftsinformatik bachelor. Plan for substantial informatics and programming content plus business and information systems modules.",
      grade: {
        min: 2.9,
        selection: "Minimum overall bachelor grade 2.9 (also for converted foreign grades). The page says no numerus clausus is applied; no ranking is published.",
        historicalNote: "No past cut-offs are published.",
      },
      test: { status: "none", accepted: [], note: "No GMAT/GRE required or mentioned." },
      english: {
        cefr: "B1",
        ielts: null,
        toefl: null,
        englishMedium: "yes",
        note: "No certificate required. B1 English is strongly recommended in the regulations.",
      },
      german: {
        cefr: "C1",
        note: "Required unless you finished a German-taught degree. Examples: TestDaF 4 in all four parts (16 points), DSH-2, or a German-taught school certificate.",
      },
      application,
      interview: false,
      documents: [
        "Bachelor certificate with transcript (or proof that all bachelor exams are passed with grade 2.9 or better)",
        "Module descriptions of your bachelor, for the equivalence check",
        "Proof of German (TestDaF 4x4 or DSH-2)",
        "Highest school-leaving certificate with grade overview",
        "Sworn translations of documents not in German or English",
        "Complete application: incomplete applications are not considered",
      ],
      sources: [src.wiPage, src.wiMpo, src.intApp, src.intEnroll],
      caveats: [
        ...sharedCaveats,
        "Teaching language is not stated on the programme page. German proof is required, so we assume the programme is mainly German-taught.",
        "The programme page names a CS bachelor and a grade of 2.9 'recommended'. The 2025 regulations make 2.9 a hard minimum.",
        "Partial-degree: the regulations let the examining board admit you before the bachelor certificate if all bachelor exams are passed with 2.9 or better. No minimum ECTS percentage is given.",
        "Winter and summer intake per regulations (the study plan starts in winter). Check the application deadline on the Campusportal.",
      ],
    },
  ]);
})();

