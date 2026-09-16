import projects from "../../data/projects.js";
import useReveal from "../../hooks/useReveal.js";
import ProjectCard from "./ProjectCard.jsx";
import { useApp } from "../../context/AppContext.jsx";

const copy = {
  eyebrow: { ar: "01 / أعمال مختارة", en: "01 / Selected Work" },
  headingLine1: { ar: "نبني ما يفيد.", en: "We build what matters." },
  headingLine2: { ar: "ونصمم ما يُتذكر.", en: "We design what gets remembered." },
  sub: {
    ar: "مجموعة من المنتجات والواجهات والتجارب التي بنيناها داخل نبطة.",
    en: "A selection of products, interfaces, and experiences built inside NABTA.",
  },
};

export default function Projects() {
  const revealRef = useReveal();
  const { t } = useApp();

  return (
    <section id="work" className="relative border-t border-line/80 py-24 sm:py-32">
      <div className="section-shell relative">
        <div ref={revealRef} className="reveal relative z-[1] mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div className="relative">
            <div className="eyebrow mb-5">{t(copy.eyebrow)}</div>
            <span className="ghost-num text-ink font-display" aria-hidden="true">01</span>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
              {t(copy.headingLine1)}
              <br />
              {t(copy.headingLine2)}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-muted">{t(copy.sub)}</p>
        </div>

        {/* Hairline grid: 1px gaps over a line-colored background read as
            ruled divisions rather than a row of floating rounded cards. */}
        <div className="grid grid-cols-1 gap-px border border-line/80 bg-line md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
