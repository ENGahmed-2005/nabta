import useReveal from "../../hooks/useReveal.js";

/**
 * Shared section heading: mono eyebrow with a short rule, an oversized
 * faint numeral behind the title, and the serif display heading.
 * Used by every numbered section so the rhythm stays consistent.
 */
export default function SectionHeading({ eyebrow, numeral, title, className = "" }) {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className={`reveal relative z-[1] mb-16 ${className}`}>
      <p className="mb-[18px] flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="inline-block h-px w-4 bg-line" />
        {eyebrow}
      </p>
      {numeral && (
        <span className="ghost-num font-serif" aria-hidden="true">
          {numeral}
        </span>
      )}
      <h2 className="m-0 font-serif text-[clamp(32px,4vw,48px)] font-normal tracking-[-0.01em] text-ink">
        {title}
      </h2>
    </div>
  );
}
