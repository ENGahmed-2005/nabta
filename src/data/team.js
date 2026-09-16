// src/data/team.js
//
// Shape mirrors the future Laravel REST response: GET /api/team

const team = [
  {
    id: "ahmed-al-kahlout",
    name: "Ahmed Al-Kahlout",
    role: "Frontend Developer",
    bio: "Builds interfaces that feel fast and considered — focused on component architecture, accessibility, and translating design into precise, maintainable code.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/ahmed-al-kahlout",
    linkedin: "https://linkedin.com/in/ahmed-al-kahlout",
    email: "ahmed@nabta.dev",
  },
  {
    id: "backend-developer",
    name: "Backend Developer",
    role: "Backend Developer",
    bio: "Designs the data layer and server logic behind NABTA's products — API contracts, database schemas, and the systems that keep them reliable at scale.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs"],
    github: "https://github.com/nabta-studio",
    linkedin: "https://linkedin.com/company/nabta-studio",
    email: "backend@nabta.dev",
  },
];

export default team;
