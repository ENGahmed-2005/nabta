// src/hooks/useReveal.js
//
// Tiny IntersectionObserver hook that adds the `.is-visible` class
// (see index.css `.reveal`) once an element enters the viewport.
// Kept as a single restrained pattern used across sections rather
// than a different animation per component.

import { useEffect, useRef } from "react";

export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
