import { Code2, Database, Cpu, Sparkles, Zap, Layers } from "lucide-react";

const orbitIcons = [
  { Icon: Code2, label: "tsx" },
  { Icon: Database, label: "db" },
  { Icon: Cpu, label: "ai" },
  { Icon: Sparkles, label: "ui" },
  { Icon: Zap, label: "edge" },
  { Icon: Layers, label: "stack" },
];

export function OrbitRing() {
  return (
    <div aria-hidden className="orbit-wrap pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="orbit-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${320 + i * 180}px`,
            height: `${320 + i * 180}px`,
            animationDuration: `${40 + i * 20}s`,
            animationDirection: i % 2 ? "reverse" : "normal",
          }}
        >
          {orbitIcons
            .filter((_, idx) => idx % 3 === i)
            .map(({ Icon, label }, idx, arr) => {
              const angle = (360 / Math.max(arr.length, 1)) * idx;
              return (
                <span
                  key={label}
                  className="orbit-chip absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-md"
                  style={{ transform: `rotate(${angle}deg) translateY(-${(320 + i * 180) / 2}px) rotate(${-angle}deg)` }}
                >
                  <Icon size={11} className="text-primary" />
                  {label}
                </span>
              );
            })}
        </div>
      ))}
    </div>
  );
}
