import { useState } from "react";
import services from "../../data/services.js";
import useReveal from "../../hooks/useReveal.js";
import { useApp } from "../../context/AppContext.jsx";

const copy = {
  eyebrow: { ar: "03 / الخدمات", en: "03 / Services" },
  heading: { ar: "ما الذي نبنيه؟", en: "What We Build" },
};

export default function Services() {
  const revealRef = useReveal();
  const [openId, setOpenId] = useState(null);
  const { t } = useApp();

  return (
    <section id="services" className="relative border-t border-line/80 py-28 sm:py-32">
      <div className="section-shell relative">
        <div ref={revealRef} className="reveal relative z-[1] mb-14 sm:mb-16">
          <p className="eyebrow mb-4">{t(copy.eyebrow)}</p>
          <span className="ghost-num text-ink font-display" aria-hidden="true">03</span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{t(copy.heading)}</h2>
        </div>
        <ul className="divide-y divide-line border-y border-line/80">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <li key={service.id}>
                <button type="button" onClick={() => setOpenId(isOpen ? null : service.id)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-start sm:py-7">
                  <span className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-mono text-sm text-muted">{service.number}</span>
                    <span className={["font-display text-xl font-semibold tracking-tight transition-colors duration-200 sm:text-2xl", isOpen ? "text-red" : "text-ink"].join(" ")}>{t(service.title)}</span>
                  </span>
                  <span aria-hidden="true" className={["flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-sm text-muted transition-transform duration-300 ease-nabta", isOpen ? "rotate-45 border-red text-red" : ""].join(" ")}>+</span>
                </button>
                <div className="grid overflow-hidden transition-all duration-300 ease-nabta" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="min-h-0">
                    <p className="max-w-xl pb-7 ps-0 text-[15px] leading-8 text-muted sm:ps-[3.4rem]">{t(service.description)}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
