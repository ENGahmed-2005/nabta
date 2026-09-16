import team from "../../data/team.js";
import SectionHeading from "../shared/SectionHeading.jsx";
import TeamCard from "./TeamCard.jsx";

export default function Team() {
  return (
    <section id="team" className="border-t border-line py-32 sm:py-[128px]">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeading eyebrow="02 / Team" numeral="02" title="The People Behind NABTA" />

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
