import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

/**
 * Language + theme state, persisted to localStorage.
 *
 * Previously this provider also ran a MutationObserver that walked every
 * text node in <body> and swapped strings via an exact-match dictionary.
 * That approach silently failed for any text split across nodes (e.g. a
 * heading with a <br /> in the middle never matched its dictionary key)
 * and required keeping a second, easy-to-forget copy of every string.
 * Content is now bilingual at the data layer instead -- each field in
 * src/data/*.js is `{ ar, en }` and components read the active language
 * from this context directly -- so there is nothing left to walk or miss.
 */
export function AppProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("nabta-language") || "ar");
  const [theme, setTheme] = useState(() => localStorage.getItem("nabta-theme") || "dark");

  useEffect(() => {
    localStorage.setItem("nabta-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar" ? "NABTA — أفكار. كود. أثر." : "NABTA — Ideas. Code. Impact.";
  }, [language]);

  useEffect(() => {
    localStorage.setItem("nabta-theme", theme);
    document.body.classList.toggle("theme-light", theme === "light");
    document.body.classList.toggle("theme-dark", theme === "dark");
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      theme,
      isArabic: language === "ar",
      isDark: theme === "dark",
      toggleLanguage: () => setLanguage((current) => (current === "ar" ? "en" : "ar")),
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      /** Pick the active-language string out of a `{ ar, en }` field. */
      t: (field) => (language === "ar" ? field.ar : field.en),
    }),
    [language, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
