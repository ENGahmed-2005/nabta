import { socialLinks } from "../../data/contact.js";

export default function Footer() {
  return (
    <footer className="border-t border-line py-[52px] pb-[148px] sm:pb-[132px]">
      <div className="mx-auto flex max-w-shell flex-col gap-[26px] px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="m-0 font-serif text-[19px] font-normal tracking-[-0.01em] text-ink">
            NABTA
          </p>
          <p className="mt-[5px] text-sm text-muted">Ideas. Code. Impact.</p>
        </div>

        <p className="m-0 text-sm text-muted">© 2026 NABTA</p>

        <div className="flex gap-[22px]">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.id === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="font-display text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
