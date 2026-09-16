import { socialLinks } from "../../data/contact.js";
import { useApp } from "../../context/AppContext.jsx";

const copy = { tagline: { ar: "أفكار. كود. أثر.", en: "Ideas. Code. Impact." } };

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-line/80 py-12 pb-36 sm:pb-32">
      <div className="section-shell flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-ink">NABTA</p>
          <p className="mt-1 text-sm text-muted">{t(copy.tagline)}</p>
        </div>
        <p className="text-sm text-muted">© 2026 NABTA</p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target={link.id === "email" ? undefined : "_blank"} rel="noreferrer" className="text-sm text-muted transition-colors hover:text-red">
              {typeof link.label === "string" ? link.label : t(link.label)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
