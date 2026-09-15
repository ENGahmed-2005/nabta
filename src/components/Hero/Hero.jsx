import useReveal from "../../hooks/useReveal.js";

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-32 pt-28 sm:pt-36"
    >
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[-7rem] h-72 w-72 rounded-full bg-red/10 blur-3xl" />

      <div className="section-shell grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div ref={revealRef} className="reveal">
          <div className="eyebrow mb-7">Digital development studio</div>

          <h1 className="max-w-4xl font-display text-[18vw] font-semibold leading-[0.86] tracking-[-0.065em] text-ink sm:text-7xl md:text-8xl lg:text-[6.7rem]">
            Ideas.
            <br />
            <span className="text-blue">Code.</span>
            <br />
            <span className="text-red">Impact.</span>
          </h1>

          <div className="mt-8 flex max-w-xl items-start gap-4">
            <span className="mt-2 h-12 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue to-red" />
            <p className="text-base leading-7 text-muted sm:text-lg">
              We design and build focused digital products for ambitious teams,
              turning complex ideas into clear, useful experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue hover:shadow-[0_14px_28px_-16px_rgba(21,94,239,0.8)]"
            >
              Explore our work
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-blue hover:bg-blue-dim hover:text-blue"
            >
              Start a project
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <span>Web products</span>
            <span>Interfaces</span>
            <span>Engineering</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <PulseMark />
        </div>
      </div>
    </section>
  );
}

function PulseMark() {
  return (
    <div className="pulse-grid relative aspect-square overflow-hidden rounded-[32px] border border-line bg-white shadow-[0_30px_80px_-42px_rgba(17,24,39,0.42)]">
      <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-red" />
        Signal / 01
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        <span>Idea → Product</span>
        <span className="text-blue">NABTA</span>
      </div>

      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 m-auto h-[68%] w-[68%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="160" cy="160" r="96" stroke="#E4E7EC" strokeDasharray="2 8" />
        <circle cx="160" cy="160" r="64" stroke="#E8EFFE" />
        <path
          d="M28 160 H92 L111 112 L136 208 L158 68 L183 252 L208 160 H292"
          stroke="#155EEF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="292" cy="160" r="7" fill="#E53935" />
        <circle cx="28" cy="160" r="5" fill="#111827" />
      </svg>
    </div>
  );
}
