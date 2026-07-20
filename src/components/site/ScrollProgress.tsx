import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop || window.scrollY) / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${p})`,
          background:
            "linear-gradient(90deg, var(--primary-glow), var(--primary) 50%, var(--accent2))",
          boxShadow: "0 0 12px color-mix(in oklab, var(--primary) 70%, transparent)",
          transition: "transform 0.08s linear",
        }}
      />
    </div>
  );
}
