import { Cpu, Wrench, MousePointerClick, Zap, HeartHandshake, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useScrollScene } from "@/hooks/use-scroll-scene";

type Feature = {
  Icon: LucideIcon;
  title: string;
  description: string;
  /** grid slot: [col, row] with col: -1 (left) | 1 (right), row: -1 top | 0 mid | 1 bottom */
  col: -1 | 1;
  row: -1 | 0 | 1;
  mobileCol: -1 | 1;
  mobileRow: 0 | 1 | 2;
  /** stagger delay (0..1 along scene progress) */
  delay: number;
};

const STEP = 0.08; // duration of each card's reveal window (snap in, then linger)
const features: Feature[] = [
  {
    Icon: Cpu,
    title: "Tecnologia moderna",
    description:
      "Stacks atuais, seguras e escaláveis para acompanhar o crescimento do seu negócio.",
    col: -1,
    row: -1,
    mobileCol: -1,
    mobileRow: 0,
    delay: 0.05,
  },
  {
    Icon: MousePointerClick,
    title: "Interfaces intuitivas",
    description: "Sua equipe usa sem treinamento.",
    col: 1,
    row: -1,
    mobileCol: 1,
    mobileRow: 0,
    delay: 0.22,
  },
  {
    Icon: Wrench,
    title: "Sob medida",
    description: "Cada solução pensada para a realidade do seu negócio.",
    col: -1,
    row: 0,
    mobileCol: -1,
    mobileRow: 1,
    delay: 0.39,
  },
  {
    Icon: Zap,
    title: "Alto desempenho",
    description: "Rápido, mesmo em horários de pico.",
    col: 1,
    row: 0,
    mobileCol: 1,
    mobileRow: 1,
    delay: 0.56,
  },
  {
    Icon: HeartHandshake,
    title: "Atendimento humanizado",
    description: "Suporte próximo e consultivo, com gente que entende seu dia a dia.",
    col: -1,
    row: 1,
    mobileCol: -1,
    mobileRow: 2,
    delay: 0.73,
  },
  {
    Icon: Building2,
    title: "Pensado para PMEs",
    description: "Soluções acessíveis e práticas para pequenas e médias empresas.",
    col: 1,
    row: 1,
    mobileCol: 1,
    mobileRow: 2,
    delay: 0.88,
  },
];

// Top/bottom rows sit above and below the title; middle row must clear the
// title horizontally, so it uses a wider X offset than the outer rows.
const X_OUTER = "clamp(180px, 24vw, 340px)";
const NX_OUTER = "clamp(-340px, -24vw, -180px)";
const X_MID = "clamp(260px, 34vw, 460px)";
const NX_MID = "clamp(-460px, -34vw, -260px)";
const Y = "clamp(150px, 22vh, 240px)";
const NY = "clamp(-240px, -22vh, -150px)";
const MOBILE_X = "clamp(83px, 23vw, 92px)";
const MOBILE_NX = "clamp(-92px, -23vw, -83px)";
const MOBILE_Y = [
  "clamp(118px, 15svh, 150px)",
  "clamp(244px, 30svh, 286px)",
  "clamp(370px, 45svh, 418px)",
] as const;

function offsetX(col: -1 | 1, row: -1 | 0 | 1) {
  if (row === 0) return col === -1 ? NX_MID : X_MID;
  return col === -1 ? NX_OUTER : X_OUTER;
}
function offsetY(row: -1 | 0 | 1) {
  return row === -1 ? NY : row === 1 ? Y : "0px";
}
function mobileOffsetX(col: -1 | 1) {
  return col === -1 ? MOBILE_NX : MOBILE_X;
}
function mobileOffsetY(row: 0 | 1 | 2) {
  return MOBILE_Y[row];
}


export function Features() {
  const ref = useScrollScene<HTMLElement>();
  return (
    <section
      ref={ref}
      id="diferenciais"
      aria-label="Diferenciais RDG"
      className="features-scene relative border-t border-white/10 bg-[#0A0A0A]"
      style={{ height: "760vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-4 pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 50%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
          }}
        />

        {/* Centered title (always visible) — narrow so it never collides with cards */}
        <div className="features-heading relative z-20 mx-auto w-full max-w-xs px-4 text-center sm:max-w-sm">
          <SectionHeading
            eyebrow="Diferenciais"
            title={
              <>
                Por que <em className="italic text-primary">RDG Digital</em>?
              </>
            }
            description="Mais do que entregar tecnologia, entregamos parceria — soluções que cabem no seu bolso e crescem com você."
          />
        </div>

        {/* Cards reveal one-by-one; on short screens they switch to a fixed grid to avoid collisions. */}
        <div
          className="features-cards pointer-events-none absolute inset-0 z-10"
          style={{ perspective: "1400px" }}
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} index={i} feature={f} />
          ))}
        </div>
      </div>

    </section>
  );
}

function FeatureCard({ index, feature }: { index: number; feature: Feature }) {
  const { Icon, title, description, col, row, mobileCol, mobileRow, delay } = feature;
  return (
    <div
      className="feature-piece absolute left-1/2 top-1/2"
      style={
        {
          ["--o" as string]: offsetX(col, row),
          ["--oy" as string]: offsetY(row),
          ["--mobile-o" as string]: mobileOffsetX(mobileCol),
          ["--mobile-y" as string]: mobileOffsetY(mobileRow),
          ["--d" as string]: delay,
          ["--step" as string]: STEP,
        } as React.CSSProperties
      }
    >
      <div className="feature-card w-[clamp(140px,40vw,250px)] rounded-xl border border-white/10 bg-[#0B0B0F]/92 p-3 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] sm:w-[clamp(160px,22vw,250px)] sm:p-4">
        <div className="flex items-center gap-3">
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-primary/30 sm:h-9 sm:w-9"
            style={{
              background: "color-mix(in oklab, var(--primary) 14%, transparent)",
              color: "var(--primary)",
            }}
          >
            <Icon size={16} strokeWidth={1.6} aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary/80">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="feature-card-title text-sm font-light tracking-tight text-foreground sm:text-base">
              {title}
            </h3>
          </div>
        </div>
        <p className="feature-card-description mt-3 text-xs font-light leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
