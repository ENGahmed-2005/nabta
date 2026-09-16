import team from "../../data/team.js";
import useReveal from "../../hooks/useReveal.js";
import TeamCard from "./TeamCard.jsx";
import { useApp } from "../../context/AppContext.jsx";

const copy = {
  eyebrow: { ar: "02 / الفريق", en: "02 / Team" },
  heading: { ar: "الأشخاص خلف NABTA", en: "The People Behind NABTA" },
};

export default function Team() {
  const revealRef = useReveal();
  const { t } = useApp();

  return (
    <section id="team" className="relative border-t border-line/80 py-28 sm:py-32">
      <div className="section-shell relative">
        <div ref={revealRef} className="reveal relative z-[1] mb-14 sm:mb-16">
          <p className="eyebrow mb-4">{t(copy.eyebrow)}</p>
          <span className="ghost-num text-ink font-display" aria-hidden="true">02</span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{t(copy.heading)}</h2>
        </div>
        <div className="grid grid-cols-1 gap-px border border-line/80 bg-line sm:grid-cols-2">
          {team.map((member) => <TeamCard key={member.id} member={member} />)}
        </div>
      </div>
    </section>
  );
}
