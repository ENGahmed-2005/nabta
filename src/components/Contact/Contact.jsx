import { contact, socialLinks } from "../../data/contact.js";
import useReveal from "../../hooks/useReveal.js";

export default function Contact() {
  const revealRef = useReveal();

  return (
    <section id="contact" className="border-t border-line py-32 sm:py-[128px]">
      <div className="mx-auto max-w-shell px-6">
        <div
          ref={revealRef}
          className="reveal flex flex-col items-start gap-11 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <h2 className="m-0 font-serif text-[clamp(44px,7vw,84px)] font-normal leading-[1.03] tracking-[-0.01em] text-ink">
              {contact.heading}
              <br />
              <span className="text-blue">{contact.subheading}</span>
            </h2>
            <p className="mt-[30px] max-w-[400px] text-[17px] leading-[1.7] text-muted">
              {contact.supportingText}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-[38px] inline-flex items-center gap-2 rounded-full border border-red bg-red px-7 py-[15px] font-display text-sm font-medium text-white transition-all duration-300 ease-nabta hover:-translate-y-[3px] hover:shadow-[0_14px_28px_-12px_rgba(229,57,53,0.45)]"
            >
              {contact.ctaLabel}
            </a>
          </div>

          <div className="flex flex-col gap-3 border-t border-line pt-[26px] lg:min-w-[220px] lg:border-t-0 lg:pt-0">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.id === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-between border-b border-line pb-[13px] font-display text-sm text-muted transition-all duration-300 ease-nabta hover:pl-1 hover:text-ink"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
