export default function TeamCard({ member }) {
  return (
    <article className="group bg-surface p-9 transition-colors duration-300 hover:bg-[#fdfdfe]">
      <div className="flex items-start justify-between gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border border-line bg-canvas">
          <img
            src={member.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-[filter] duration-[600ms] group-hover:grayscale-0"
          />
        </div>
        <span className="font-mono text-[11px] text-muted">{member.role}</span>
      </div>

      <h3 className="mt-[26px] font-serif text-[30px] font-normal tracking-[-0.01em] text-ink">
        {member.name}
      </h3>

      <p className="mt-3.5 max-w-[360px] text-[15px] leading-[1.65] text-muted">
        {member.bio}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-canvas px-3 py-1 font-mono text-[11px] text-muted"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-[22px] border-t border-line pt-5">
        <a href={member.github} target="_blank" rel="noreferrer" className="font-display text-sm text-muted transition-colors hover:text-ink">GitHub</a>
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="font-display text-sm text-muted transition-colors hover:text-ink">LinkedIn</a>
        <a href={`mailto:${member.email}`} className="font-display text-sm text-muted transition-colors hover:text-blue">Email</a>
      </div>
    </article>
  );
}
