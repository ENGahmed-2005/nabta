import about from "../../data/about.js";
import useReveal from "../../hooks/useReveal.js";
import { useApp } from "../../context/AppContext.jsx";

const copy = { eyebrow: { ar: "04 / عن نبطة", en: "04 / About" } };

export default function About() {
  const revealRef = useReveal();
  const { t } = useApp();
  return (
    <section id="about" className="relative border-t border-line/80 py-28 sm:py-32">
      <div className="section-shell relative">
        <div ref={revealRef} className="reveal grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="relative">
            <p className="eyebrow mb-4">{t(copy.eyebrow)}</p>
            <span className="ghost-num text-ink font-display" style={{ fontSize: "clamp(60px, 7vw, 110px)" }} aria-hidden="true">04</span>
            <h2 className="max-w-sm font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">{t(about.heading)}</h2>
            <p className="mt-6 max-w-sm text-lg leading-9 text-muted">{t(about.intro)}</p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-9 border-t border-line pt-9 sm:grid-cols-2">
            {about.pillars.map((pillar, index) => (
              <div key={pillar.id}>
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{t(pillar.title)}</h3>
                <p className="mt-2 text-[15px] leading-8 text-muted">{t(pillar.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
