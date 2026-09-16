// src/data/technologies.js
// Bilingual group labels; technology names stay in their official form
// in both languages. Shape mirrors: GET /api/technologies

const technologies = [
  { id: "frontend", group: { ar: "الواجهة الأمامية", en: "Frontend" }, items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { id: "backend", group: { ar: "الواجهة الخلفية", en: "Backend" }, items: ["Laravel", "PHP", "MySQL"] },
  { id: "tools", group: { ar: "الأدوات", en: "Tools" }, items: ["Git", "GitHub", "REST APIs"] },
];

export default technologies;
