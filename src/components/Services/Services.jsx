import { useState } from "react";
import services from "../../data/services.js";
import SectionHeading from "../shared/SectionHeading.jsx";

export default function Services() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="services" className="border-t border-line py-32 sm:py-[128px]">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeading eyebrow="03 / Services" numeral="03" title="What We Build" />

        <ul className="border-t border-line">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <li key={service.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-[30px] text-left"
                >
                  <span className="flex items-baseline gap-6 sm:gap-9">
                    <span className="font-mono text-[13px] text-muted">
                      {service.number}
                    </span>
                    <span
                      className={[
                        "inline-block font-serif text-[22px] font-normal tracking-[-0.01em] transition-all duration-300 ease-nabta group-hover:translate-x-1.5 sm:text-[28px]",
                        isOpen ? "text-blue" : "text-ink",
                      ].join(" ")}
                    >
                      {service.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={[
                      "flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full border border-line text-[15px] text-muted transition-all duration-[350ms] ease-nabta",
                      isOpen ? "rotate-45 border-blue text-blue" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-[400ms] ease-nabta"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="max-w-[540px] pb-[30px] text-[15px] leading-[1.65] text-muted sm:pl-[60px]">
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
