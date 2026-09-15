import about from "../../data/about.js";
import useReveal from "../../hooks/useReveal.js";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="border-t border-line py-28 sm:py-32">
      <div className="mx-auto max-w-shell px-6">
        <div ref={revealRef} className="reveal grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              04 / About
            </p>
            <h2 className="max-w-sm font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
              {about.heading}
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
              {about.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-9 border-t border-line pt-9 sm:grid-cols-2">
            {about.pillars.map((pillar, index) => (
              <div key={pillar.id}>
                <span className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
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
