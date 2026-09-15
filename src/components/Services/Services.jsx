import { useState } from "react";
import services from "../../data/services.js";
import useReveal from "../../hooks/useReveal.js";

export default function Services() {
  const revealRef = useReveal();
  const [openId, setOpenId] = useState(null);

  return (
    <section id="services" className="border-t border-line py-28 sm:py-32">
      <div className="mx-auto max-w-shell px-6">
        <div ref={revealRef} className="reveal mb-14 flex flex-col gap-4 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            03 / Services
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            What We Build
          </h2>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                >
                  <span className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-mono text-sm text-muted">
                      {service.number}
                    </span>
                    <span
                      className={[
                        "font-display text-xl font-medium tracking-tight transition-colors duration-200 sm:text-2xl",
                        isOpen ? "text-blue" : "text-ink",
                      ].join(" ")}
                    >
                      {service.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={[
                      "flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-sm text-muted transition-transform duration-300 ease-nabta",
                      isOpen ? "rotate-45 border-blue text-blue" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid overflow-hidden transition-all duration-300 ease-nabta"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="min-h-0">
                    <p className="max-w-xl pb-7 pl-0 text-[15px] leading-relaxed text-muted sm:pl-[3.4rem]">
                      {service.description}
                    </p>
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
