import { useApp } from "../../context/AppContext.jsx";

const copy = {
  viewCase: { ar: "عرض المشروع", en: "View Case Study" },
  comingSoon: { ar: "تفاصيل المشروع قريباً", en: "Case study coming soon" },
};

export default function ProjectCard({ project, index }) {
  const { t } = useApp();
  const isLarge = project.size === "large";

  return (
    <article
      className={[
        "group flex flex-col bg-surface",
        isLarge ? "md:col-span-2 md:grid md:grid-cols-[1.2fr_1fr]" : "",
      ].join(" ")}
    >
      <div className={["relative overflow-hidden bg-canvas", isLarge ? "min-h-[300px] md:h-full" : "aspect-[4/3]"].join(" ")}>
        <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-nabta group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
        <span className="absolute right-4 top-4 z-[1] font-mono text-[10px] font-medium tracking-widest text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full bg-blue-dim px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-red">{t(project.category)}</span>
          <span className="font-mono text-[10px] tracking-wider text-muted">{project.year}</span>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-[-0.035em] text-ink sm:text-[28px]">{project.title}</h3>
        <p className="max-w-lg text-[14px] leading-7 text-muted sm:text-[15px]">{t(project.description)}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-muted transition-colors group-hover:border-red/30">{tech}</span>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-line/80 pt-5">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-red">
              {t(copy.viewCase)}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:-translate-x-1">↙</span>
            </a>
          ) : (
            <span className="text-sm text-muted">{t(copy.comingSoon)}</span>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-muted transition-colors hover:text-ink">GitHub</a>
          )}
        </div>
      </div>
    </article>
  );
}
