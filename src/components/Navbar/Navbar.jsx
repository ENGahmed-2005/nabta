import { useEffect, useState } from "react";
import navigation from "../../data/navigation.js";
import { useApp } from "../../context/AppContext.jsx";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const { language, isDark, toggleLanguage, toggleTheme, t } = useApp();

  useEffect(() => {
    const sections = navigation.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"} className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1rem)] -translate-x-1/2 sm:bottom-6 sm:w-auto">
      <div className="flex items-center justify-center rounded-[22px] border border-line/80 bg-white/90 p-1.5 shadow-[0_18px_55px_-22px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <a href="#home" className="mr-1 hidden items-center gap-2 rounded-[16px] px-3.5 py-2.5 font-display text-sm font-bold text-ink sm:flex" aria-label={language === "ar" ? "نبطة - الرئيسية" : "NABTA - Home"}>
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-40" /><span className="relative inline-flex h-2 w-2 rounded-full bg-red" /></span>
          NABTA
        </a>
        <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
        <div className="flex items-center gap-0.5">
          {navigation.map((item) => {
            const isActive = active === item.id;
            return (
              <a key={item.id} href={item.href} aria-current={isActive ? "page" : undefined} className={["relative rounded-[16px] px-2.5 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:px-3 sm:text-[13px]", isActive ? "bg-red text-white shadow-[0_6px_18px_-8px_rgba(229,57,53,0.8)]" : "text-muted hover:bg-blue-dim hover:text-red"].join(" ")}>
                {t(item.label)}
              </a>
            );
          })}
        </div>
        <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
        <div className="ml-1 flex items-center gap-1">
          <button type="button" onClick={toggleLanguage} aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"} title={language === "ar" ? "English" : "العربية"} className="rounded-[14px] border border-line px-2.5 py-2 text-[11px] font-bold text-ink transition hover:border-red hover:text-red">
            {language === "ar" ? "EN" : "ع"}
          </button>
          <button type="button" onClick={toggleTheme} aria-label={isDark ? (language === "ar" ? "تفعيل الوضع الفاتح" : "Switch to light mode") : (language === "ar" ? "تفعيل الوضع الداكن" : "Switch to dark mode")} title={isDark ? "Light mode" : "Dark mode"} className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-line text-sm text-ink transition hover:border-red hover:text-red">
            {isDark ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </nav>
  );
}
