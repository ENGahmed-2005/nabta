import projects from "../../data/projects.js";
import SectionHeading from "../shared/SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="work" className="border-t border-line py-32 sm:py-[128px]">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeading eyebrow="01 / Work" numeral="01" title="Selected Projects" />

        {/* Hairline grid: 1px gaps over a line-colored background read as
            ruled divisions rather than a row of floating rounded cards. */}
        <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
