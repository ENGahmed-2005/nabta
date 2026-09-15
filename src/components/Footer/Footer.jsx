import { socialLinks } from "../../data/contact.js";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12 pb-36 sm:pb-32">
      <div className="mx-auto flex max-w-shell flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-medium tracking-tight text-ink">
            NABTA
          </p>
          <p className="mt-1 text-sm text-muted">Ideas. Code. Impact.</p>
        </div>

        <p className="text-sm text-muted">© 2026 NABTA</p>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.id === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
