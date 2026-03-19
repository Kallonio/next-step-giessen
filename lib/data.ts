import {
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  GraduationCap,
  Laptop2,
  Lightbulb,
} from "lucide-react";

export const seminars = [
  {
    title: "Financial Education",
    hook: "Wer finanziell vorausdenken will, startet hier.",
    targetGroup: "Studierende, Berufseinsteiger und junge Akademiker zwischen 18 und 30",
    format: "120 Minuten",
    value:
      "Verbindet Vermögensaufbau, Stabilität und Zukunftsplanung in einem zugänglichen, modernen Workshopformat.",
    points: [
      "Verstehe, welche Absicherungen für junge Akademiker wirklich Sinn machen",
      "Lerne, wie Vermögensaufbau schon früh einfach und strategisch gelingen kann",
      "Durchblicke die Unterschiede zwischen Aktien, Anleihen, Fonds und ETFs",
      "Optimiere deine Konten- und Ausgabenstruktur für mehr Übersicht und mehr Spielraum",
      "Baue eine finanzielle Basis auf, die dir heute Sicherheit und morgen Chancen schafft",
    ],
    icon: Lightbulb,
  },
  {
    title: "KI im Studium und Beruf",
    hook: "KI sinnvoll einsetzen und dir im Studium und Beruf einen echten Vorsprung verschaffen.",
    targetGroup: "Studierende, Absolventen und junge Akademiker mit Zukunftsfokus",
    format: "120 Minuten",
    value:
      "Zeigt praxisnah, wie moderne KI-Tools Arbeitsprozesse beschleunigen und komplexe Aufgaben smarter lösbar machen.",
    points: [
      "So formulierst du Prompts, die verwertbare und präzise Ergebnisse liefern",
      "Die Möglichkeiten von KI wirklich begreifen und gezielt für deinen Vorteil nutzen",
      "Relevante KI-Tools und Anwendungsfelder verstehen",
      "Texte, Präsentationen und Workflows effizienter erstellen",
      "Produktivität im Studium und im Beruf gezielt steigern",
    ],
    icon: Laptop2,
  },
  {
    title: "Bewerbung und Gehaltsverhandlung",
    hook: "Überzeugender auftreten, besser verhandeln und finanziell stärker in den Beruf starten.",
    targetGroup: "Absolventen, Berufseinsteiger und Young Professionals",
    format: "180 Minuten",
    value:
      "Stärkt Selbstpräsentation, Gesprächssicherheit und kann realistisch zu einem besseren Einstiegsgehalt beitragen.",
    points: [
      "Typische Fehler in Lebenslauf und Anschreiben vermeiden",
      "Kompetenten und selbstbewussten ersten Eindruck erzielen",
      "Auf Druckfragen professionell antworten",
      "Souverän und klar durch Bewerbungsgespräche führen",
      "Schritt für Schritt zu 5.000 bis 10.000 Euro mehr Einstiegsgehalt",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Steuerguide für Studium und Berufseinstieg",
    hook: "Steuern verstehen und finanzielle Vorteile nicht länger liegen lassen.",
    targetGroup: "Studierende, Absolventen und Berufseinsteiger",
    format: "120 Minuten",
    value:
      "Macht Steuern greifbar und zeigt konkrete Hebel, mit denen zum Jobstart oft mehrere tausend Euro relevant werden können.",
    points: [
      "Grundlagen der Steuererklärung verständlich erklärt",
      "Steuerliche Möglichkeiten im Studium erkennen",
      "Tausende Euro vom Staat zurückbekommen",
      "Ohne Belege und ohne Fahrtenbuch möglichst einfach Steuern sparen",
      "Finanzielle Vorteile frühzeitig sinnvoll nutzen",
    ],
    icon: Calculator,
  },
  {
    title: "Thesis mit System",
    hook: "Mit Struktur, Klarheit und weniger Stress zu einer starken wissenschaftlichen Arbeit.",
    targetGroup: "Studierende vor Bachelor-, Master- oder Projektarbeiten",
    format: "120 Minuten",
    value:
      "Reduziert Chaos, spart Zeit und hilft dabei, den gesamten Schreibprozess systematisch zu steuern.",
    points: [
      "Do's and Don'ts beim Schreiben wissenschaftlicher Arbeiten",
      "Effizienter schreiben dank des iterativen Verfahrens",
      "Professoren oder Dozenten die Arbeit für sich schreiben lassen",
      "Zeitmanagement optimieren",
      "Prokrastination ein Ende setzen",
    ],
    icon: GraduationCap,
  },
  {
    title: "Excel für Einsteiger",
    hook: "Mit Excel endlich sicher umgehen und Tabellen, Formeln und Diagramme souverän nutzen.",
    targetGroup: "Studierende, Werkstudierende und Berufseinsteiger mit wenig Excel-Erfahrung",
    format: "120 Minuten",
    value:
      "Nimmt Unsicherheit im Umgang mit Excel und vermittelt direkt anwendbare Skills für Uni, Praktikum und Berufseinstieg.",
    points: [
      "Grundlegende Funktionsweise kennenlernen",
      "Formeln verständlich anwenden",
      "Grafiken und Diagramme sinnvoll erstellen",
      "Bedingte Formatierungen sicher einsetzen",
      "Mehr Routine für Studium, Praktikum und Job gewinnen",
    ],
    icon: BarChart3,
  },
] as const;

export const relevancePoints = [
  {
    title: "Praxisnah statt theoretisch",
    description:
      "Alle Inhalte sind so aufgebaut, dass sie im Studium, im Bewerbungsprozess oder beim Berufseinstieg direkt nutzbar sind.",
  },
  {
    title: "Auf junge Akademiker zugeschnitten",
    description:
      "Die Formate sprechen genau die Fragen an, die zwischen Vorlesung, Abschluss und erstem Job wirklich relevant werden.",
  },
  {
    title: "Karriere, Finanzen und Zukunftskompetenzen verbunden",
    description:
      "Die Seminare verbinden berufliche Orientierung mit finanzieller Stabilität und modernen Arbeitsmethoden.",
  },
  {
    title: "Vom Verstehen ins Umsetzen",
    description:
      "Die Seminare enden nicht bei theoretischem Input. Viele Themen lassen sich im Anschluss mit einem professionellen Ansprechpartner konkret weiterdenken und auf die eigene Situation übertragen.",
  },
];

export const audience = [
  "Studierende",
  "Absolventen",
  "Berufseinsteiger",
  "Werkstudierende",
  "Young Professionals und junge Akademiker",
];

export const contactDetails = {
  phone: "01522 9380239",
  email: "karl-philip.duebel@mlp.de",
  advisor: "Karl-Philip Dübel",
  company: "MLP Finanzberatung SE",
};

export const legalDetails = {
  websiteDomain: "next-step-giessen.de",
  mailService: "Resend, Resend Inc.",
  hostingProvider: "Vercel Inc.",
  postalAddressLine1: "Bahnhofstraße 64",
  postalAddressLine2: "35390 Gießen",
  professionalInfo:
    "Erlaubnis nach § 34d GewO. Zuständige Aufsichtsbehörde: IHK Limburg. Registrierungsnummer: D-QWDH-HVX0Z-33. Einsehbar im Vermittlerregister unter www.vermittlerregister.info.",
};

export const siteContent = {
  brand: {
    name: "Next Step Gießen",
    tagline: "Seminare, Karriere und finanzielle Orientierung",
  },
  hero: {
    eyebrow: "Seminare für Studierende, Absolventen und Berufseinsteiger",
    title: "Der nächste Schritt gelingt leichter mit dem richtigen Wissen.",
    description:
      "Praxisnahe Workshops rund um Karriere, Bewerbung und Finanzen – für mehr Orientierung, Sicherheit und Klarheit bei den nächsten wichtigen Entscheidungen.",
    primaryCta: "Seminare entdecken",
    secondaryCta: "Kontakt aufnehmen",
    trustPoints: [
      "Praxisnahe Workshopformate",
      "Seminare und Workshops kostenfrei",
      "Relevant für Studium und Berufseinstieg",
      "Offen, transparent und beratungsorientiert",
    ],
    badge: "",
    focusTitle: "Orientierung für die nächsten Schritte in Karriere und Finanzen.",
    focusCopy:
      "Von Excel, KI und Bewerbung bis zu Steuern, Thesis und Financial Education: moderne Seminarformate, die Wissen greifbar machen und Vertrauen schaffen.",
    highlightTitle: "Mehrwert statt Standardvertrieb",
    highlightCopy:
      "Die Seminare stehen für eigenständigen Nutzen. Weiterführende Gespräche sind möglich, aber immer transparent und optional.",
  },
  about: {
    eyebrow: "Über mich",
    title: "Persönlich in der Ansprache, klar in der Einordnung und professionell in der Begleitung.",
    intro:
      "Ich bin Finanzberater bei der MLP Finanzberatung SE und fokussiere mich auf die Themen, die für Studierende, Absolventen und junge Berufseinsteiger relevant sind.",
    paragraphs: [
      "Ich begleite seit fast drei Jahren meine Mandanten und Mandantinnen in Karriere- und Finanzfragestellungen und helfe ihnen dabei, selbstbestimmt kluge Entscheidungen für ihre Zukunft zu treffen.",
    ],
    points: [
      "Fokus auf junge Akademiker, Studierende und Berufseinsteiger",
      "Seminare mit klarer Verbindung zwischen Wissen, Anwendung und Orientierung",
      "Gespräche auf Augenhöhe mit ehrlicher und verständlicher Einordnung",
      "Seriöser Rahmen mit professioneller Beratungskompetenz im Hintergrund",
    ],
    cta: "Unverbindlich ins Gespräch kommen",
  },
  seminars: {
    eyebrow: "Seminarübersicht",
    title: "Sechs Formate, die dich in Karriere und Finanzfragen wirklich weiterbringen.",
    copy: "",
    formatLabel: "Dauer",
    cta: "Interesse anfragen",
  },
  relevance: {
    eyebrow: "Warum diese Seminare relevant sind",
    title: "Wissen, das im richtigen Moment wirklich weiterhilft.",
    copy:
      "Zwischen Studium, Abschluss und Berufseinstieg entstehen oft Fragen, die in klassischen Lehrplänen zu kurz kommen. Genau dort setzen diese Seminarformate an.",
  },
  audience: {
    eyebrow: "Für wen die Seminare gedacht sind",
    title: "Passend für Menschen, die Orientierung und Substanz suchen.",
    copy: "",
    cta: "Seminar oder Gespräch anfragen",
  },
  pathway: {
    eyebrow: "Seminar, Ansprechpartner und nächste Schritte",
    title: "Vertrauensvoll, transparent und ohne unnötigen Druck.",
    copy:
      "Die Seminare bieten bereits eigenständigen Nutzen. Gleichzeitig entsteht oft der Wunsch, offene Fragen zu Karriere, Berufseinstieg oder finanzieller Orientierung weiter zu vertiefen. Genau dafür steht Karl-Philip Dübel als Ansprechpartner zur Verfügung.",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kostenfrei ein Gespräch anfordern oder Informationen zu Seminaren erhalten.",
    copy: "",
    frameTitle: "Transparenter Rahmen",
    frameCopy:
      "Die Seminare liefern eigenständigen Mehrwert. Wenn daraus weitere Fragen zu Karriere, Studium oder finanzieller Orientierung entstehen, ist eine weiterführende Kontaktaufnahme möglich, aber nie verpflichtend.",
    submitCta: "Seminar anfragen",
    submitPending: "Anfrage wird versendet...",
  },
  faq: {
    eyebrow: "Transparenz und häufige Fragen",
    title: "Klar in der Einordnung, offen in der Kommunikation.",
    copy: "",
    items: [
      {
        question: "Warum sind die Seminare und Workshops kostenfrei?",
        answer:
          "Die Seminare sind für viele ein erster Berührungspunkt mit meinen Themen rund um Karriere und Finanzen. Im Anschluss entstehen daraus häufig weiterführende Fragen, die wir gemeinsam vertiefen. Meine Tätigkeit vergüte ich dort, wo aus diesem Austausch konkrete Lösungen entstehen, beispielsweise im Vermögensaufbau.",
      },
      {
        question: "Wie läuft eine unverbindliche Kontaktaufnahme ab?",
        answer:
          "Über das Kontaktformular oder direkt per E-Mail. Die Anfrage geht direkt an mich und wir vereinbaren einen kurzen 15-minütigen kostenfreien Kennenlerntermin, um gemeinsam zu schauen, welches Format wann Sinn macht.",
      },
      {
        question: "Für welche Gruppen oder Formate eignen sich die Seminare?",
        answer:
          "Die Inhalte passen sehr gut zu Hochschulveranstaltungen, Fachschaften, Career Services, studentischen Initiativen, Workshops, Gruppenformaten und Empfehlungsumfeldern.",
      },
      {
        question: "Welche Themen sind aktuell besonders relevant?",
        answer:
          "Vor allem Bewerbung und Gehaltsverhandlung, KI im Studium und Beruf, Steuern zum Berufseinstieg sowie finanzielle Orientierung für junge Akademiker sind aktuell besonders stark nachgefragt.",
      },
    ],
  },
  footer: {
    noteTitle: "Hinweis zur Einordnung",
    noteCopy:
      "Ich bin Finanzberater bei der MLP Finanzberatung SE. Die Seminare bieten fundierte und praxisnahe Orientierung zu Karriere, Finanzen und Berufseinstieg. Für weiterführende Fragen und persönliche Anliegen stehe ich darüber hinaus auch als Ansprechpartner zur Verfügung.",
  },
} as const;

export const siteAssets = {
  heroImage: {
    src: "/hero-woman-office.png",
    alt: "Frau mit positiver Ausstrahlung im modernen Büro als Hero-Bild.",
  },
  heroImageFallback: {
    src: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Studierende in einer lockeren Seminaratmosphäre mit interaktivem Austausch im Raum.",
  },
  aboutImage: {
    src: "/about-portrait.png",
    alt: "Junger Mann im modernen Büro als Portrait für die Über-mich-Seite.",
  },
  relevanceImage: {
    src: "/relevance-main.png",
    alt: "Auf dem Weg zum Erfolg.",
  },
  faqImage: {
    src: "/faq-main.png",
    alt: "Moderne FAQ-Darstellung mit Fragenzeichen.",
  },
  contactImage: {
    src: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Ruhige Gesprächssituation mit Notizbuch und professioneller Beratungssituation.",
  },
  seminarImages: {
    "Excel für Einsteiger": {
      src: "/excel-seminar.png",
      alt: "Digitale Analyseansicht auf einem Laptop mit klar erkennbarem Tabellen- und Diagrammfokus.",
    },
    "Bewerbung und Gehaltsverhandlung": {
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Professionelles Bewerbungsgespräch in moderner Arbeitsumgebung.",
    },
    "KI im Studium und Beruf": {
      src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Moderne Tech-Arbeitsumgebung mit digitalem Fokus und KI-Bezug.",
    },
    "Thesis mit System": {
      src: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Studierende arbeitet konzentriert an Laptop und Unterlagen für wissenschaftliches Arbeiten.",
    },
    "Steuerguide für Studium und Berufseinstieg": {
      src: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Steuernahe Unterlagen, Taschenrechner und konzentriertes Arbeiten am Schreibtisch.",
    },
    "Financial Education": {
      src: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Junge Person plant Finanzen mit Laptop, Notizen und ruhiger Arbeitsatmosphäre.",
    },
  },
} as const;
