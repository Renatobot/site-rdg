import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  /** Accent colors (hex) for smoke tints. Cycles through them. */
  accents?: string[];
  /** Number of smoke blobs on desktop. Mobile gets ~60%. */
  count?: number;
  className?: string;
};

/**
 * Cinematic drifting smoke / fog backdrop for hero sections.
 * Large soft blurred blobs with screen blend mode.
 */
export function SmokeField({
  accents = ["#00D9FF", "#3B82F6", "#7C3AED", "#00D9FF"],
  count = 11,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const isLite = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  const effectiveCount = isLite ? Math.max(4, Math.round(count * 0.6)) : count;

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

  const blobs = useMemo(() => {
    return Array.from({ length: effectiveCount }, (_, i) => {
      const base = (i + 1) * 137.5;
      const left = ((base * 1.618) % 100).toFixed(2);
      const top = ((base * 0.91) % 100).toFixed(2);
      const size = Math.round(340 + ((base * 0.53) % 380)); // 340–720px (denser)
      const delay = ((base * 0.19) % 4).toFixed(2);
      const duration = (10 + ((base * 0.21) % 8)).toFixed(2); // 10–18s
      const driftX = Math.round(-300 + ((base * 0.83) % 600));
      const driftY = Math.round(-360 + ((base * 0.61) % 300));
      const opacity = (0.38 + ((base * 0.07) % 0.32)).toFixed(2);
      const accent = accents[i % accents.length];
      return { left, top, size, delay, duration, driftX, driftY, opacity, accent };
    });
  }, [effectiveCount, accents]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ contain: "paint" }}
    >
      {visible &&
        blobs.map((b, i) => (
          <span
            key={i}
            className="smoke"
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              marginLeft: `-${b.size / 2}px`,
              marginTop: `-${b.size / 2}px`,
              background: `radial-gradient(circle at 50% 50%, ${b.accent}cc 0%, ${b.accent}55 45%, transparent 72%)`,
              animation: `smoke-drift ${b.duration}s ease-in-out ${b.delay}s infinite`,
              ["--smoke-opacity" as string]: b.opacity,
              ["--smoke-x" as string]: `${b.driftX}px`,
              ["--smoke-y" as string]: `${b.driftY}px`,
            }}
          />
        ))}
    </div>
  );
}
