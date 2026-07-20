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
      // 0 when the section reaches the top of the viewport, 1 at sticky release.
      // If a sticky scene is close to the end of the page, the browser may not
      // have enough remaining scroll distance to reach the natural release
      // point. Use the available scroll distance so the final cards can still
      // complete instead of staying half-open/cut off on mobile.
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
