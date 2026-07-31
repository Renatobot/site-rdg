import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Check if already in/near viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      startAnimation();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            startAnimation();
            io.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 150px 0px" }
    );
    io.observe(el);

    // Fallback safeguard so numbers never remain stuck at 0
    const fallbackTimer = setTimeout(() => {
      startAnimation();
    }, 600);

    return () => {
      io.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [target, duration]);

  return { ref, value };
}
