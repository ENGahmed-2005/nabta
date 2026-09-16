import about from "../../data/about.js";
import useReveal from "../../hooks/useReveal.js";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="border-t border-line py-32 sm:py-[128px]">
      <div className="mx-auto max-w-shell px-6">
        <div
          ref={revealRef}
          className="reveal grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
        >
          <div className="relative z-[1]">
            <p className="mb-[18px] flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className="inline-block h-px w-4 bg-line" />
              04 / About
            </p>
            <span
              className="ghost-num font-serif"
              style={{ fontSize: "clamp(64px, 8vw, 120px)" }}
              aria-hidden="true"
            >
              04
            </span>
            <h2 className="m-0 max-w-[380px] font-serif text-[clamp(34px,4.5vw,52px)] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
              {about.heading}
            </h2>
            <p className="mt-[26px] max-w-[380px] text-[17px] leading-[1.7] text-muted">
              {about.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-2">
            {about.pillars.map((pillar, index) => (
              <div key={pillar.id}>
                <span className="font-mono text-[11px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3.5 font-display text-[17px] font-medium text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
