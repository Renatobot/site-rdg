import { useCallback } from "react";

export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  return useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }, []);
}
