// src/data/about.js
// Bilingual content. Shape mirrors the future Laravel REST response: GET /api/about

const about = {
  heading: { ar: "نبني بهدف واضح.", en: "We build with purpose." },
  intro: {
    ar: "نبطة فريق تطوير متعاون يركز على تحويل الأفكار إلى منتجات رقمية موثوقة، قابلة للتوسع وسهلة الاستخدام.",
    en: "NABTA is a collaborative development team focused on turning ideas into reliable, scalable digital products.",
  },
  pillars: [
    {
      id: "architecture",
      title: { ar: "هندسة برمجية نظيفة", en: "Clean architecture" },
      description: {
        ar: "كود منظم بحدود واضحة، يساعد الفريق على التحرك بسرعة دون كسر ما يعمل بالفعل.",
        en: "Code organized around clear boundaries — so a small team can move fast without breaking what already works.",
      },
    },
    {
      id: "technology",
      title: { ar: "تقنيات حديثة", en: "Modern technologies" },
      description: {
        ar: "نستخدم React وLaravel لأنهما يساعداننا على بناء المنتجات وصيانتها بسرعة، لا لمجرد اتباع الموضة.",
        en: "React and Laravel as a working pair, not a trend — chosen because they let us ship and maintain quickly.",
      },
    },
    {
      id: "interfaces",
      title: { ar: "واجهات تتمحور حول المستخدم", en: "User-focused interfaces" },
      description: {
        ar: "كل شاشة تُبنى حول ما يحتاج المستخدم إلى إنجازه تالياً، وليس حول ما يبدو مبهراً في العرض فقط.",
        en: "Every screen is built around what the person using it needs to do next, not what looks impressive in a demo.",
      },
    },
    {
      id: "systems",
      title: { ar: "أنظمة خلفية قابلة للتوسع", en: "Scalable backend systems" },
      description: {
        ar: "واجهات API وقواعد بيانات مصممة لتتحمل نمو الاستخدام، وليس فقط لاجتياز أول تجربة.",
        en: "APIs and databases designed to hold up as usage grows, not just to pass a first review.",
      },
    },
    {
      id: "performance",
      title: { ar: "الأداء", en: "Performance" },
      description: {
        ar: "سرعة التحميل والاستجابة جزء من المنتج نفسه، وليست تفصيلاً نضيفه في النهاية.",
        en: "Fast load times and responsive interactions are treated as a feature, not an afterthought.",
      },
    },
    {
      id: "collaboration",
      title: { ar: "التعاون", en: "Collaboration" },
      description: {
        ar: "نخطط للواجهة والنظام الخلفي معاً من اليوم الأول حتى لا تتحول مرحلة الدمج إلى مفاجأة.",
        en: "Frontend and backend planned together from day one, so integration is never a surprise.",
      },
    },
  ],
};

export default about;
