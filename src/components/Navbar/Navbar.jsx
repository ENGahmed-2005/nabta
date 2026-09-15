import { useEffect, useState } from "react";
import navigation from "../../data/navigation.js";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-line/80 bg-surface/85 px-2 py-2 shadow-[0_8px_30px_-8px_rgba(17,24,39,0.18)] backdrop-blur-md sm:gap-1 sm:px-2.5">
        <a
          href="#home"
          className="mr-1 hidden items-center gap-1.5 rounded-full px-3 py-2 font-display text-sm font-semibold tracking-tight text-ink sm:flex"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red" />
          </span>
          NABTA
        </a>

        {navigation.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              className={[
                "rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 sm:px-3.5",
                isActive
                  ? "bg-blue-dim text-blue"
                  : "text-muted hover:text-ink",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
