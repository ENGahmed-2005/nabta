// src/data/services.js
//
// Shape mirrors the future Laravel REST response: GET /api/services

const services = [
  {
    id: "frontend-development",
    number: "01",
    title: "Frontend Development",
    description:
      "Interfaces built with React and modern CSS — componentized, performant, and easy to hand off to a design or product team.",
  },
  {
    id: "backend-development",
    number: "02",
    title: "Backend Development",
    description:
      "Server-side logic in Laravel and PHP — authentication, business rules, and integrations built to be maintained by more than one person.",
  },
  {
    id: "fullstack-applications",
    number: "03",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end products where frontend and backend are designed together from the start, not stitched on afterward.",
  },
  {
    id: "rest-api-development",
    number: "04",
    title: "REST API Development",
    description:
      "Clean, versioned APIs with predictable responses — documented well enough that a frontend team never has to guess.",
  },
  {
    id: "database-architecture",
    number: "05",
    title: "Database Architecture",
    description:
      "Schema design in MySQL that holds up under real usage — normalized where it matters, indexed where it counts.",
  },
  {
    id: "ui-implementation",
    number: "06",
    title: "UI Implementation",
    description:
      "Turning static designs into working, responsive interfaces that match spec down to spacing and motion.",
  },
];

export default services;
