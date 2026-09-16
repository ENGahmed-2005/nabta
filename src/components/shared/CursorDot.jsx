import { useEffect, useRef } from "react";

/**
 * Small trailing cursor dot that grows on interactive elements.
 * Desktop pointers only -- disabled on touch and effectively invisible
 * under prefers-reduced-motion since it only reacts to live mousemove.
 */
export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return undefined;
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    let shown = false;

    const onMove = (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      if (!shown) {
        dot.classList.add("visible");
        shown = true;
      }
    };
    const onLeave = () => dot.classList.remove("visible");
    const enter = () => dot.classList.add("hover");
    const exit = () => dot.classList.remove("hover");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", exit);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", exit);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
