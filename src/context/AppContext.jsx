import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

const translations = {
  "الرئيسية": "Home", "أعمالنا": "Work", "الفريق": "Team", "الخدمات": "Services", "عن نبطة": "About NABTA", "تواصل": "Contact",
  "استوديو تطوير رقمي": "Digital development studio", "أفكار.": "Ideas.", "كود.": "Code.", "أثر.": "Impact.",
  "نحول الأفكار الطموحة إلى منتجات رقمية واضحة، سريعة وقابلة للتوسع، من الواجهة إلى النظام الكامل.": "We turn ambitious ideas into clear, fast, scalable digital products, from interface to full system.",
  "استكشف أعمالنا": "Explore our work", "ابدأ مشروعاً": "Start a project", "منتجات ويب": "Web products", "واجهات": "Interfaces", "هندسة برمجيات": "Software engineering",
  "أعمال مختارة": "Selected work", "نبني ما يفيد. ونصمم ما يُتذكر.": "We build what matters. We design what gets remembered.", "تواصل معنا": "Contact us",
  "عندك فكرة؟": "Have an idea?", "خلينا نبنيها.": "Let's build it.", "احكِ لنا ماذا تريد أن تبني، ونحوّل الفكرة إلى منتج رقمي حقيقي.": "Tell us what you want to build, and we'll turn the idea into a real digital product.",
  "البريد الإلكتروني": "Email", "أفكار. كود. أثر.": "Ideas. Code. Impact.", "نبني بهدف واضح.": "We build with purpose.",
  "نبطة فريق تطوير متعاون يركز على تحويل الأفكار إلى منتجات رقمية موثوقة، قابلة للتوسع وسهلة الاستخدام.": "NABTA is a collaborative development team focused on turning ideas into reliable, scalable and easy-to-use digital products.",
  "هندسة برمجية نظيفة": "Clean architecture", "تقنيات حديثة": "Modern technologies", "واجهات تتمحور حول المستخدم": "User-focused interfaces",
  "أنظمة خلفية قابلة للتوسع": "Scalable backend systems", "الأداء": "Performance", "التعاون": "Collaboration", "تطوير الواجهات الأمامية": "Frontend development",
  "تطوير الأنظمة الخلفية": "Backend development", "تطبيقات ويب متكاملة": "Full-stack web applications", "تطوير REST APIs": "REST API development",
  "هندسة قواعد البيانات": "Database architecture", "تحويل التصاميم إلى واجهات": "Design to interface implementation", "البريد": "Email",
};
const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([ar, en]) => [en, ar]));

function translateText(root, language) {
  const dictionary = language === "ar" ? reverseTranslations : translations;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  nodes.forEach((textNode) => {
    const value = textNode.nodeValue.trim();
    const translated = dictionary[value];
    if (translated) textNode.nodeValue = textNode.nodeValue.replace(value, translated);
  });
}

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("nabta-language") || "ar");
  const [theme, setTheme] = useState(() => localStorage.getItem("nabta-theme") || "dark");

  useEffect(() => {
    localStorage.setItem("nabta-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar" ? "NABTA — أفكار. كود. أثر." : "NABTA — Ideas. Code. Impact.";
    const translate = () => translateText(document.body, language);
    translate();
    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    localStorage.setItem("nabta-theme", theme);
    document.body.classList.toggle("theme-light", theme === "light");
    document.body.classList.toggle("theme-dark", theme === "dark");
  }, [theme]);

  const value = useMemo(() => ({
    language, theme, isArabic: language === "ar", isDark: theme === "dark",
    toggleLanguage: () => setLanguage((current) => current === "ar" ? "en" : "ar"),
    toggleTheme: () => setTheme((current) => current === "dark" ? "light" : "dark"),
  }), [language, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
