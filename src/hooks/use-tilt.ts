import { useCallback, useRef } from "react";

export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 8) {
  const raf = useRef(0);

  const onMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -max * 2;
      const ry = (px - 0.5) * max * 2;
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
    },
    [max]
  );

  const onLeave = useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget;
    cancelAnimationFrame(raf.current);
    el.style.transition = "transform 0.5s cubic-bezier(0.2,0.7,0.2,1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    window.setTimeout(() => {
      el.style.transition = "";
    }, 500);
  }, []);

  const onEnter = useCallback((e: React.MouseEvent<T>) => {
    e.currentTarget.style.transition = "";
  }, []);

  return { onMouseMove: onMove, onMouseLeave: onLeave, onMouseEnter: onEnter };
}
