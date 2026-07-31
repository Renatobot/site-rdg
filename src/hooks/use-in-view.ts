import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean that flips true once the element enters the viewport.
 * Stays true after first intersection (one-shot reveal).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0, rootMargin: "150px 0px 150px 0px" }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      return true; // No mobile os elementos já iniciam visíveis para evitar telas pretas
    }
    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Se já estiver visível ou próximo no mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setInView(true);
          io.unobserve(entry.target);
        }
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
