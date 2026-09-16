import useReveal from "../../hooks/useReveal.js";
import { useApp } from "../../context/AppContext.jsx";

const copy = {
  kicker: { ar: "استوديو تطوير رقمي", en: "Digital development studio" },
  words: [
    { ar: "أفكار.", en: "Ideas." },
    { ar: "كود.", en: "Code." },
    { ar: "أثر.", en: "Impact." },
  ],
  lede: {
    ar: "نحول الأفكار الطموحة إلى منتجات رقمية واضحة، سريعة وقابلة للتوسع، من الواجهة إلى النظام الكامل.",
    en: "We turn ambitious ideas into clear, fast, scalable digital products, from interface to full system.",
  },
  ctaWork: { ar: "استكشف أعمالنا", en: "Explore our work" },
  ctaContact: { ar: "ابدأ مشروعاً", en: "Start a project" },
  meta: [
    { ar: "منتجات ويب", en: "Web products" },
    { ar: "واجهات", en: "Interfaces" },
    { ar: "هندسة برمجيات", en: "Software engineering" },
  ],
  signalLabel: { ar: "إشارة / 01", en: "Signal / 01" },
  signalCaption: { ar: "فكرة ← منتج", en: "Idea → product" },
};

export default function Hero() {
  const revealRef = useReveal();
  const { t } = useApp();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-32 pt-28 sm:pt-36">
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-red/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[-7rem] h-72 w-72 rounded-full bg-red/10 blur-3xl" />

      <div className="section-shell grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <div className="eyebrow mb-7">{t(copy.kicker)}</div>

          {/* Each word rises into place once on load. */}
          <h1 className="max-w-4xl font-display text-[17vw] font-bold leading-[0.92] tracking-[-0.055em] text-ink sm:text-7xl md:text-8xl lg:text-[6.4rem]">
            <span className="headline-word">
              <span style={{ animationDelay: "0.05s" }}>{t(copy.words[0])}</span>
            </span>
            <br />
            <span className="headline-word">
              <span className="text-red" style={{ animationDelay: "0.16s" }}>{t(copy.words[1])}</span>
            </span>
            <br />
            <span className="headline-word">
              <span className="text-red" style={{ animationDelay: "0.27s" }}>{t(copy.words[2])}</span>
            </span>
          </h1>

          <div ref={revealRef} className="reveal mt-8 flex max-w-xl items-start gap-4">
            <span className="mt-2 h-12 w-1 shrink-0 rounded-full bg-red" />
            <p className="text-base leading-8 text-muted sm:text-lg">{t(copy.lede)}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c62828] hover:shadow-[0_14px_28px_-16px_rgba(229,57,53,0.8)]">
              {t(copy.ctaWork)}
              <span className="transition-transform duration-300 group-hover:-translate-x-1">↙</span>
            </a>
            <a href="#contact" className="rounded-full border border-line bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-red hover:bg-blue-dim hover:text-red">
              {t(copy.ctaContact)}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[10px] tracking-[0.08em] text-muted">
            {copy.meta.map((item) => (
              <span key={item.en}>{t(item)}</span>
            ))}
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
  const { t } = useApp();
  return (
    <div className="pulse-grid relative aspect-square overflow-hidden rounded-[32px] border border-line bg-white shadow-[0_30px_80px_-42px_rgba(0,0,0,0.8)]">
      <div className="absolute right-6 top-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-red" />
        {t(copy.signalLabel)}
      </div>
      <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between font-mono text-[10px] tracking-[0.08em] text-muted">
        <span>{t(copy.signalCaption)}</span>
        <span className="text-red">NABTA</span>
      </div>
      <svg viewBox="0 0 320 320" className="absolute inset-0 m-auto h-[68%] w-[68%]" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="160" cy="160" r="96" stroke="#343434" strokeDasharray="2 8" />
        <circle cx="160" cy="160" r="64" stroke="#3b2525" />
        <path className="signal-line" d="M28 160 H92 L111 112 L136 208 L158 68 L183 252 L208 160 H292" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="292" cy="160" r="7" fill="#E53935" />
        <circle cx="28" cy="160" r="5" fill="#F5F5F5" />
      </svg>
    </div>
  );
}
