import useReveal from "../../hooks/useReveal.js";

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-32 pt-36 sm:pt-40"
    >
      <div className="mx-auto grid w-full max-w-shell grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div ref={revealRef} className="reveal">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            NABTA
          </p>

          <h1 className="font-display text-[15vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            Ideas.
            <br />
            <span className="text-blue">Code.</span>
            <br />
            <span className="text-red">Impact.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            We build digital products that turn ambitious ideas into
            meaningful experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 ease-nabta hover:-translate-y-0.5"
            >
              Explore Our Work
            </a>
            <a
              href="#team"
              className="rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-blue hover:text-blue"
            >
              Meet The Team
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex">
          <PulseMark />
        </div>
      </div>
    </section>
  );
}

/**
 * Abstract signal / pulse mark: a line that resolves from a flat
 * baseline into a waveform, then a clean node — representing the
 * path from idea to shipped code. One deliberate hero motif, not a
 * decorative repeat pattern.
 */
function PulseMark() {
  return (
    <div className="pulse-grid relative flex h-full w-full items-center justify-center rounded-[28px] border border-line bg-surface">
      <svg
        viewBox="0 0 320 320"
        className="h-3/5 w-3/5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 160 H100 L120 90 L150 230 L175 40 L200 260 L225 160 H310"
          stroke="#155EEF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="310" cy="160" r="6" fill="#E53935" />
        <circle cx="10" cy="160" r="4" fill="#111827" />
      </svg>
    </div>
  );
}
