import technologies from "../../data/technologies.js";
import useReveal from "../../hooks/useReveal.js";

export default function Technologies() {
  const revealRef = useReveal();

  return (
    <section className="border-t border-line py-32 sm:py-[128px]">
      <div className="mx-auto max-w-shell px-6">
        <div
          ref={revealRef}
          className="reveal grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8"
        >
          {technologies.map((group) => (
            <div key={group.id}>
              <h3 className="mb-[22px] flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                <span className="inline-block h-px w-4 bg-line" />
                {group.group}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group mb-[13px] flex items-center justify-between border-b border-line pb-[13px] font-display text-[19px] text-ink transition-all duration-300 ease-nabta hover:pl-1.5 hover:text-blue"
                  >
                    {item}
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-line transition-colors duration-200 group-hover:text-red"
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
