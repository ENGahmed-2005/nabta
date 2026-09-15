import team from "../../data/team.js";
import useReveal from "../../hooks/useReveal.js";
import TeamCard from "./TeamCard.jsx";

export default function Team() {
  const revealRef = useReveal();
  return (
    <section id="team" className="border-t border-line py-28 sm:py-32">
      <div className="mx-auto max-w-shell px-6">
        <div ref={revealRef} className="reveal mb-14 flex flex-col gap-4 sm:mb-16">
          <p className="font-mono text-xs tracking-[0.1em] text-muted">02 / الفريق</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">الأشخاص خلف NABTA</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {team.map((member) => <TeamCard key={member.id} member={member} />)}
        </div>
      </div>
    </section>
  );
}
