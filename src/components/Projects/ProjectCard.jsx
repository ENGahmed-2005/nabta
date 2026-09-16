export default function ProjectCard({ project, index }) {
  const isLarge = project.size === "large";

  return (
    <article
      className={[
        "group flex flex-col bg-surface",
        isLarge ? "md:col-span-2 md:grid md:grid-cols-[1.2fr_1fr]" : "",
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden",
          isLarge ? "min-h-[340px] md:h-full" : "aspect-[4/3]",
        ].join(" ")}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full scale-[1.02] object-cover transition-transform duration-[900ms] ease-nabta group-hover:scale-[1.08]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(21,94,239,0)_55%,rgba(17,24,39,0.14)_100%)]" />
        <span className="absolute left-4 top-4 z-[1] font-mono text-[11px] tracking-[0.05em] text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-blue">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-muted">{project.year}</span>
        </div>

        <h3 className="m-0 font-serif text-[28px] font-normal tracking-[-0.01em] text-ink">
          {project.title}
        </h3>

        <p className="m-0 max-w-[460px] text-[15px] leading-[1.65] text-muted">
          {project.description}
        </p>

        <div className="mt-0.5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-[22px] pt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="relative font-display text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-[3px] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-nabta group-hover:text-blue group-hover:after:scale-x-100"
            >
              View Case Study
            </a>
          ) : (
            <span className="text-sm text-muted">Case study coming soon</span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
