// src/data/about.js
//
// Shape mirrors the future Laravel REST response: GET /api/about

const about = {
  heading: "We build with purpose.",
  intro:
    "NABTA is a collaborative development team focused on turning ideas into reliable, scalable digital products.",
  pillars: [
    {
      id: "architecture",
      title: "Clean architecture",
      description:
        "Code organized around clear boundaries — so a small team can move fast without breaking what already works.",
    },
    {
      id: "technology",
      title: "Modern technologies",
      description:
        "React and Laravel as a working pair, not a trend — chosen because they let us ship and maintain quickly.",
    },
    {
      id: "interfaces",
      title: "User-focused interfaces",
      description:
        "Every screen is built around what the person using it needs to do next, not what looks impressive in a demo.",
    },
    {
      id: "systems",
      title: "Scalable backend systems",
      description:
        "APIs and databases designed to hold up as usage grows, not just to pass a first review.",
    },
    {
      id: "performance",
      title: "Performance",
      description:
        "Fast load times and responsive interactions are treated as a feature, not an afterthought.",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description:
        "Frontend and backend planned together from day one, so integration is never a surprise.",
    },
  ],
};

export default about;
