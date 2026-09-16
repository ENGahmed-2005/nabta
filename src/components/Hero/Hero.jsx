import useReveal from "../../hooks/useReveal.js";

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-0 pb-32 pt-[150px]"
    >
      <div className="mx-auto grid w-full max-w-shell grid-cols-1 items-end gap-14 px-6 lg:grid-cols-[8fr_4fr] lg:gap-8">
        <div>
          <p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            NABTA / Software Studio
          </p>

          {/* Each line rises into place once on load — one deliberate
              entrance, not a per-element animation everywhere. */}
          <h1 className="m-0 font-serif text-[clamp(52px,9.5vw,108px)] font-normal leading-[0.98] tracking-[-0.015em] text-ink">
            <span className="headline-word">
              <span style={{ animationDelay: "0.05s" }}>Ideas.</span>
            </span>
            <br />
            <span className="headline-word">
              <span className="text-blue" style={{ animationDelay: "0.16s" }}>
                Code.
              </span>
            </span>
            <br />
            <span className="headline-word">
              <span className="text-red" style={{ animationDelay: "0.27s" }}>
                Impact.
              </span>
            </span>
          </h1>
        </div>

        <div ref={revealRef} className="reveal flex flex-col gap-8 pb-1.5">
          <div className="h-px w-full bg-line" />

          <p className="m-0 max-w-[340px] text-[17px] leading-[1.7] text-muted">
            We build digital products that turn ambitious ideas into meaningful
            experiences.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-7 py-[15px] font-display text-sm font-medium text-white transition-all duration-300 ease-nabta hover:-translate-y-[3px] hover:shadow-[0_14px_28px_-12px_rgba(17,24,39,0.4)]"
            >
              Explore Our Work
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] font-display text-sm font-medium text-ink transition-all duration-300 ease-nabta hover:-translate-y-[3px] hover:border-blue hover:text-blue"
            >
              Meet The Team
            </a>
          </div>

          <SignalMark />
        </div>
      </div>
    </section>
  );
}

/**
 * Abstract signal line: a flat baseline that spikes into a waveform and
 * resolves into a single node — idea, to work, to shipped result. Drawn
 * once on load via stroke-dashoffset.
 */
function SignalMark() {
  return (
    <div className="h-16" aria-hidden="true">
      <svg
        viewBox="0 0 260 64"
        className="h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="signal-line"
          d="M0 32 H40 L52 10 L68 54 L84 4 L100 58 L116 32 H260"
          stroke="#155EEF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="260" cy="32" r="4" fill="#E53935" />
      </svg>
    </div>
  );
}
