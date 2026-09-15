export default function TeamCard({ member }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-red/40 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border border-line bg-canvas sm:h-20 sm:w-20">
          <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
        </div>
        <span className="font-mono text-xs text-muted">{member.role}</span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{member.name}</h3>
      <p className="mt-3 max-w-sm text-[15px] leading-8 text-muted">{member.bio}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {member.skills.map((skill) => <span key={skill} className="rounded-full bg-canvas px-3 py-1 text-xs text-muted">{skill}</span>)}
      </div>
      <div className="mt-7 flex items-center gap-5 border-t border-line pt-5">
        <a href={member.github} target="_blank" rel="noreferrer" className="text-sm text-muted transition-colors hover:text-ink">GitHub</a>
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-sm text-muted transition-colors hover:text-ink">LinkedIn</a>
        <a href={`mailto:${member.email}`} className="text-sm text-muted transition-colors hover:text-red">البريد</a>
      </div>
    </article>
  );
}
