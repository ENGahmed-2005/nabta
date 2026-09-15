export default function ProjectCard({ project, index }) {
  const isLarge = project.size === "large";

  return (
    <article className={["group relative flex flex-col overflow-hidden rounded-[26px] border border-line/80 bg-white shadow-[0_16px_50px_-34px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-red/40 hover:shadow-[0_28px_65px_-34px_rgba(0,0,0,0.9)]", isLarge ? "md:col-span-2" : "md:col-span-1"].join(" ")}>
      <div className={["relative overflow-hidden bg-canvas", isLarge ? "aspect-[16/8]" : "aspect-[4/3]"].join(" ")}>
        <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-nabta group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 font-mono text-[10px] font-medium tracking-widest text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full bg-blue-dim px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-red">{project.category}</span>
          <span className="font-mono text-[10px] tracking-wider text-muted">{project.year}</span>
        </div>
        <h3 className="font-display text-2xl font-bold tracking-[-0.035em] text-ink sm:text-3xl">{project.title}</h3>
        <p className="max-w-2xl text-[14px] leading-7 text-muted sm:text-[15px]">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => <span key={tech} className="rounded-full border border-line px-3 py-1.5 text-[11px] font-medium text-muted transition-colors group-hover:border-red/30">{tech}</span>)}
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-line/80 pt-5">
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-red">عرض المشروع <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:-translate-x-1">↙</span></a> : <span className="text-sm text-muted">تفاصيل المشروع قريباً</span>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-muted transition-colors hover:text-ink">GitHub</a>}
        </div>
      </div>
    </article>
  );
}
