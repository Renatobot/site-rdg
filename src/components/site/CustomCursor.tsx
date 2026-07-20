import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx;
    let ty = ry;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
    };

    let raf = 0;
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]')) {
        ring.dataset.state = "hover";
      } else {
        ring.dataset.state = "idle";
      }
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        data-state="idle"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-primary/70 mix-blend-screen transition-[width,height,border-color,background-color] duration-200 data-[state=hover]:h-12 data-[state=hover]:w-12 data-[state=hover]:border-primary data-[state=hover]:bg-primary/10"
        style={{
          boxShadow: "0 0 18px color-mix(in oklab, var(--primary) 50%, transparent)",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ boxShadow: "0 0 8px var(--primary)" }}
      />
    </>
  );
}
