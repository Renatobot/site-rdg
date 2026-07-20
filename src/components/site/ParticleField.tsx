import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** Base color for particles (hex). */
  color?: string;
  /** Desktop count. Mobile uses ~40%. */
  count?: number;
};

/**
 * Lightweight bokeh particle field (Canvas 2D).
 * - Pauses when off-screen or tab hidden
 * - Respects prefers-reduced-motion
 * - Auto-scales for low-power devices
 */
export function ParticleField({
  className = "",
  color = "#00D9FF",
  count = 42,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowPower =
      (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) ||
      (nav.deviceMemory !== undefined && nav.deviceMemory <= 4);

    let particleCount = count;
    if (isMobile) particleCount = Math.round(count * 0.42);
    if (lowPower) particleCount = Math.round(particleCount * 0.6);
    particleCount = Math.max(10, particleCount);

    const dpr = Math.min(window.devicePixelRatio || 1, isMobile || lowPower ? 1.25 : 2);
    let width = 0;
    let height = 0;

    // Parse hex color
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    type P = {
      x: number;
      y: number;
      z: number; // depth 0.3–1
      r: number;
      vy: number;
      vx: number;
      phase: number;
      pulse: number;
    };
    let particles: P[] = [];

    const seed = (n: number) => {
      particles = [];
      for (let i = 0; i < n; i++) {
        const z = 0.3 + Math.random() * 0.7;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: (0.6 + Math.random() * 2.2) * z,
          vy: -(0.08 + Math.random() * 0.25) * z,
          vx: (Math.random() - 0.5) * 0.12 * z,
          phase: Math.random() * Math.PI * 2,
          pulse: 0.5 + Math.random() * 1.5,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(particleCount);
    };
    resize();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(canvas);
    } else {
      window.addEventListener("resize", resize);
    }

    let running = true;
    let rafId = 0;
    let last = performance.now();

    // Static render for reduced-motion
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r},${g},${b},${0.55 * p.z})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(48, now - last);
      last = now;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.vy * dt * 0.06;
        p.x += p.vx * dt * 0.06;
        p.phase += 0.002 * dt * p.pulse;
        if (p.y < -8) {
          p.y = height + 8;
          p.x = Math.random() * width;
        }
        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;

        const twinkle = 0.55 + 0.45 * Math.sin(p.phase);
        const alpha = 0.35 * p.z + 0.5 * p.z * twinkle;

        // Halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.85})`;
        ctx.arc(p.x, p.y, p.r * 0.55, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };

    let inView = true;
    let tabVisible = !document.hidden;
    const start = () => {
      if (reduced) {
        drawStatic();
        return;
      }
      if (running || !inView || !tabVisible) return;
      running = true;
      last = performance.now();
      rafId = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    if (reduced) {
      drawStatic();
    } else {
      running = false;
      start();
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          inView = e.isIntersecting;
          if (inView) start();
          else stop();
        }
      },
      { rootMargin: "120px" },
    );
    io.observe(canvas);

    const onVis = () => {
      tabVisible = !document.hidden;
      if (tabVisible) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", resize);
    };
  }, [color, count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
