// src/data/projects.js
//
// Shape mirrors the future Laravel REST response: GET /api/projects
// Replace this static array with a fetch() / axios call once the
// backend is live — component props are already contracted to this shape.

const projects = [
  {
    id: "menupilot",
    title: "menuPilot",
    description:
      "A multi-tenant SaaS platform that lets restaurants manage QR-code menus, live orders, and table sessions from a single dashboard.",
    category: "Restaurant Management Platform",
    technologies: ["React.js", "Laravel", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    liveUrl: "https://menupilot.example.com",
    githubUrl: "https://github.com/nabta-studio/menupilot",
    size: "large",
  },
  {
    id: "ledger-flow",
    title: "LedgerFlow",
    description:
      "An invoicing and cash-flow tool for small agencies — recurring invoices, client portals, and payment tracking in one clean interface.",
    category: "Finance & Operations",
    technologies: ["React.js", "Laravel", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    liveUrl: "https://ledgerflow.example.com",
    githubUrl: "https://github.com/nabta-studio/ledgerflow",
    size: "medium",
  },
  {
    id: "orbit-lms",
    title: "Orbit LMS",
    description:
      "A lightweight learning-management system for small training centers — course delivery, quizzes, and student progress tracking.",
    category: "Education Platform",
    technologies: ["React.js", "MySQL", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    liveUrl: "https://orbit-lms.example.com",
    githubUrl: "https://github.com/nabta-studio/orbit-lms",
    size: "medium",
  },
  {
    id: "fieldpoint",
    title: "FieldPoint",
    description:
      "An internal field-service scheduler for small maintenance teams — job assignment, route order, and status updates.",
    category: "Internal Tooling",
    technologies: ["React.js", "Laravel"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    year: "2024",
    liveUrl: "",
    githubUrl: "https://github.com/nabta-studio/fieldpoint",
    size: "small",
  },
];

export default projects;
