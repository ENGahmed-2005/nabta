import technologies from "../../data/technologies.js";
import useReveal from "../../hooks/useReveal.js";

export default function Technologies() {
  const revealRef = useReveal();

  return (
    <section className="border-t border-line py-28 sm:py-32">
      <div className="mx-auto max-w-shell px-6">
        <div ref={revealRef} className="reveal grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {technologies.map((group) => (
            <div key={group.id}>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {group.group}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center justify-between border-b border-line pb-3 font-display text-lg text-ink transition-colors duration-200 hover:text-blue"
                  >
                    {item}
                    <span
                      aria-hidden="true"
                      className="text-sm text-line transition-colors duration-200 group-hover:text-red"
                    >
                      /
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
