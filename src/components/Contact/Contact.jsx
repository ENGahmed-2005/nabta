import { contact, socialLinks } from "../../data/contact.js";
import useReveal from "../../hooks/useReveal.js";
import { useApp } from "../../context/AppContext.jsx";

const copy = { eyebrow: { ar: "05 / تواصل معنا", en: "05 / Contact" } };

export default function Contact() {
  const revealRef = useReveal();
  const { t } = useApp();
  return (
    <section id="contact" className="border-t border-line/80 py-28 sm:py-32">
      <div className="section-shell">
        <div ref={revealRef} className="reveal flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-6">{t(copy.eyebrow)}</p>
            <h2 className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl">
              {t(contact.heading)}
              <br />
              <span className="text-red">{t(contact.subheading)}</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-9 text-muted">{t(contact.supportingText)}</p>
            <a href={`mailto:${contact.email}`} className="mt-9 inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 text-sm font-medium text-white transition-transform duration-200 ease-nabta hover:-translate-y-0.5 hover:bg-[#c62828]">
              {t(contact.ctaLabel)} <span aria-hidden="true">↙</span>
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 border-t border-line pt-6 lg:w-auto lg:min-w-[220px] lg:border-t-0 lg:pt-0">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} target={link.id === "email" ? undefined : "_blank"} rel="noreferrer" className="flex items-center justify-between border-b border-line pb-3 text-sm text-muted transition-colors duration-200 hover:text-red">
                {typeof link.label === "string" ? link.label : t(link.label)}<span aria-hidden="true">↙</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
