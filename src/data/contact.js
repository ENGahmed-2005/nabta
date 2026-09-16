// src/data/contact.js
// Bilingual content. Shape mirrors the future Laravel REST response: GET /api/contact

export const contact = {
  heading: { ar: "عندك فكرة؟", en: "Have an idea?" },
  subheading: { ar: "خلينا نبنيها.", en: "Let's build it." },
  supportingText: {
    ar: "احكِ لنا ماذا تريد أن تبني، ونحوّل الفكرة إلى منتج رقمي حقيقي.",
    en: "Tell us what you're building and let's turn the idea into a real digital product.",
  },
  ctaLabel: { ar: "ابدأ مشروعاً", en: "Start a Project" },
  email: "hello@nabta.dev",
};

export const socialLinks = [
  { id: "github", label: "GitHub", url: "https://github.com/nabta-studio" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/company/nabta-studio" },
  { id: "email", label: { ar: "البريد الإلكتروني", en: "Email" }, url: "mailto:hello@nabta.dev" },
];
