import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  /** Accent color (hex) for the spark tint. */
  accent: string;
  /** Number of sparks on desktop. Mobile gets ~60%. */
  count?: number;
  /** Container className. */
  className?: string;
};

/**
 * Ambient glowing sparks behind cards.
 * Small twinkling particles tinted with the section accent.
 * Only mounts + animates while the container is in the viewport.
 */
export function FloatingSparks({ accent, count = 14, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const isLite = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  const effectiveCount = isLite ? Math.max(6, Math.round(count * 0.6)) : count;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setVisible(e.isIntersecting);
      },
      { rootMargin: "160px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const sparks = useMemo(() => {
    return Array.from({ length: effectiveCount }, (_, i) => {
      const base = (i + 1) * 137.5;
      const left = ((base * 1.618) % 100).toFixed(2);
      const top = ((base * 0.91) % 100).toFixed(2);
      const size = Math.round(2 + ((base * 0.13) % 4)); // 2–6px
      const delay = ((base * 0.19) % 6).toFixed(2);
      const duration = (6 + ((base * 0.17) % 8)).toFixed(2);
      const driftX = Math.round(-30 + ((base * 0.53) % 60));
      const driftY = Math.round(-80 + ((base * 0.41) % 40));
      const opacity = (0.55 + ((base * 0.07) % 0.4)).toFixed(2);
      return { left, top, size, delay, duration, driftX, driftY, opacity };
    });
  }, [effectiveCount]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ contain: "paint" }}
    >
      {visible &&
        sparks.map((s, i) => (
          <span
            key={i}
            className="spark"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              color: accent,
              background: accent,
              animation: `spark-float ${s.duration}s ease-in-out ${s.delay}s infinite`,
              ["--spark-opacity" as string]: s.opacity,
              ["--spark-x" as string]: `${s.driftX}px`,
              ["--spark-y" as string]: `${s.driftY}px`,
            }}
          />
        ))}
    </div>
  );
}
