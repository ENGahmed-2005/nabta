// Arabic project content. Shape mirrors the future Laravel REST response.
const projects = [
  {
    id: "menupilot", title: "menuPilot",
    description: "منصة SaaS متعددة المطاعم لإدارة قوائم QR والطلبات المباشرة وجلسات الطاولات من لوحة تحكم واحدة.",
    category: "منصة إدارة المطاعم", technologies: ["React.js", "Laravel", "MySQL"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop", year: "2026",
    liveUrl: "https://menupilot.example.com", githubUrl: "https://github.com/nabta-studio/menupilot", size: "large",
  },
  {
    id: "ledger-flow", title: "LedgerFlow",
    description: "أداة للفوترة وإدارة التدفق النقدي للوكالات الصغيرة، تجمع الفواتير الدورية وبوابات العملاء وتتبع المدفوعات في واجهة واحدة.",
    category: "المال والعمليات", technologies: ["React.js", "Laravel", "REST APIs"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop", year: "2025",
    liveUrl: "https://ledgerflow.example.com", githubUrl: "https://github.com/nabta-studio/ledgerflow", size: "medium",
  },
  {
    id: "orbit-lms", title: "Orbit LMS",
    description: "نظام إدارة تعلم خفيف لمراكز التدريب الصغيرة، يشمل تقديم الدورات والاختبارات وتتبع تقدم الطلاب.",
    category: "منصة تعليمية", technologies: ["React.js", "MySQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop", year: "2025",
    liveUrl: "https://orbit-lms.example.com", githubUrl: "https://github.com/nabta-studio/orbit-lms", size: "medium",
  },
  {
    id: "fieldpoint", title: "FieldPoint",
    description: "أداة داخلية لجدولة فرق الصيانة، مع توزيع المهام وترتيب المسارات وتحديث الحالات.",
    category: "أدوات داخلية", technologies: ["React.js", "Laravel"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop", year: "2024",
    liveUrl: "", githubUrl: "https://github.com/nabta-studio/fieldpoint", size: "small",
  },
];

export default projects;
