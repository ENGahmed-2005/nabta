// src/data/services.js
// Bilingual content. Shape mirrors the future Laravel REST response: GET /api/services

const services = [
  {
    id: "frontend-development",
    number: "01",
    title: { ar: "تطوير الواجهات الأمامية", en: "Frontend Development" },
    description: {
      ar: "واجهات حديثة مبنية بـ React وتقنيات CSS المعاصرة، منظمة وقابلة للصيانة وسريعة على مختلف الأجهزة.",
      en: "Interfaces built with React and modern CSS — componentized, performant, and easy to hand off to a design or product team.",
    },
  },
  {
    id: "backend-development",
    number: "02",
    title: { ar: "تطوير الأنظمة الخلفية", en: "Backend Development" },
    description: {
      ar: "منطق خادم باستخدام Laravel وPHP، يشمل المصادقة وقواعد العمل والتكاملات بطريقة واضحة وقابلة للتوسع.",
      en: "Server-side logic in Laravel and PHP — authentication, business rules, and integrations built to be maintained by more than one person.",
    },
  },
  {
    id: "fullstack-applications",
    number: "03",
    title: { ar: "تطبيقات ويب متكاملة", en: "Full-Stack Web Applications" },
    description: {
      ar: "منتجات رقمية متكاملة يُصمم فيها الـFrontend والـBackend معاً من البداية، لا كقطعتين يتم جمعهما في النهاية.",
      en: "End-to-end products where frontend and backend are designed together from the start, not stitched on afterward.",
    },
  },
  {
    id: "rest-api-development",
    number: "04",
    title: { ar: "تطوير REST APIs", en: "REST API Development" },
    description: {
      ar: "واجهات API منظمة وموثقة باستجابات واضحة، بحيث يعرف فريق الواجهة ما الذي سيحصل عليه دون تخمين.",
      en: "Clean, versioned APIs with predictable responses — documented well enough that a frontend team never has to guess.",
    },
  },
  {
    id: "database-architecture",
    number: "05",
    title: { ar: "هندسة قواعد البيانات", en: "Database Architecture" },
    description: {
      ar: "تصميم قواعد بيانات MySQL منظمة ومهيأة للاستخدام الحقيقي، مع الاهتمام بالتطبيع والفهارس والأداء.",
      en: "Schema design in MySQL that holds up under real usage — normalized where it matters, indexed where it counts.",
    },
  },
  {
    id: "ui-implementation",
    number: "06",
    title: { ar: "تحويل التصاميم إلى واجهات", en: "UI Implementation" },
    description: {
      ar: "تحويل التصاميم الثابتة إلى واجهات حقيقية ومتجاوبة تحافظ على التفاصيل والمسافات والحركة المطلوبة.",
      en: "Turning static designs into working, responsive interfaces that match spec down to spacing and motion.",
    },
  },
];

export default services;
