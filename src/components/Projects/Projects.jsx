import projects from "../../data/projects.js";
import useReveal from "../../hooks/useReveal.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const revealRef = useReveal();

  return (
    <section id="work" className="border-t border-line/80 py-24 sm:py-32">
      <div className="section-shell">
        <div ref={revealRef} className="reveal mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">01 / Selected work</div>
            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl">
              Built to be useful.
              <br />
              Designed to be remembered.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted">
            A selection of products, interfaces, and experiments from the
            studio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
