import { useEffect, useRef } from "react";

/**
 * Tracks sticky-scene scroll progress (0 → 1) while the element is pinned
 * and writes it as `--p` on that element. Driven via rAF; cheap.
 */
export function useScrollScene<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.style.setProperty("--p", "1");
      return;
    }

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Abort heavy calculations if section is far outside the viewport
      if (rect.bottom < -vh * 0.5) {
        el.style.setProperty("--p", "1");
        return;
      }
      if (rect.top > vh * 1.5) {
        el.style.setProperty("--p", "0");
        return;
      }

      // 0 when section reaches top of viewport, 1 at sticky release.
      const sectionTop = rect.top + window.scrollY;
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const naturalTotal = Math.max(1, rect.height - vh);
      const availableTotal = Math.max(1, maxScroll - sectionTop);
      const total = Math.min(naturalTotal, availableTotal);
      const passed = window.scrollY - sectionTop;
      const p = Math.max(0, Math.min(1, passed / total));
      el.style.setProperty("--p", p.toFixed(4));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
