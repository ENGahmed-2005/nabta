import projects from "../../data/projects.js";
import useReveal from "../../hooks/useReveal.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const revealRef = useReveal();

  return (
    <section id="work" className="border-t border-line py-28 sm:py-32">
      <div className="mx-auto max-w-shell px-6">
        <div ref={revealRef} className="reveal mb-14 flex flex-col gap-4 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            01 / Work
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Selected Projects
          </h2>
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
