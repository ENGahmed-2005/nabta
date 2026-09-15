export default function ProjectCard({ project, index }) {
  const isLarge = project.size === "large";

  return (
    <article
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(17,24,39,0.18)]",
        isLarge ? "md:col-span-2" : "md:col-span-1",
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden",
          isLarge ? "aspect-[16/9]" : "aspect-[4/3]",
        ].join(" ")}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-nabta group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-blue">
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h3>

        <p className="max-w-lg text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-5 pt-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-blue"
            >
              View Case Study
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                ›
              </span>
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
