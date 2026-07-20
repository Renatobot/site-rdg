import { Scissors, Sparkles, Dumbbell, Globe, Instagram, Wand2, type LucideIcon } from "lucide-react";
import { useScrollScene } from "@/hooks/use-scroll-scene";
import { Logo } from "@/components/site/Logo";
import { SectionHeading } from "@/components/site/SectionHeading";


/**
 * Cena "exploded view" dirigida por scroll.
 * A página trava (sticky) enquanto as 6 peças — uma por serviço RDG —
 * nascem atrás da logo e terminam em uma grade alinhada.
 */

type Piece = {
  label: string;
  sub: string;
  Icon: LucideIcon;
  tone: string;
  o: string; // deslocamento X final (qualquer unidade CSS)
  y: string; // deslocamento Y final
  mo: string; // deslocamento X final no mobile
  my: string; // deslocamento Y final no mobile
  delay: number;
};

// Grade 2 colunas × 3 linhas ao redor do núcleo RDG.
const X = "clamp(105px, 30vw, 250px)";
const NX = "clamp(-250px, -30vw, -105px)";
const Y = "clamp(118px, 22vh, 170px)";
const NY = "clamp(-170px, -22vh, -118px)";
const MX = "clamp(84px, 24vw, 94px)";
const MNX = "clamp(-94px, -24vw, -84px)";

const PIECES: Piece[] = [
  { label: "Fila Zero Barber", sub: "Barbearia", Icon: Scissors, tone: "#E5B86A", o: NX, y: NY, mo: MNX, my: "128px", delay: 0.00 },
  { label: "Fila Zero Beauty", sub: "Beleza", Icon: Sparkles, tone: "#B57BFF", o: X, y: NY, mo: MX, my: "128px", delay: 0.04 },
  { label: "Smart Treino", sub: "Fitness", Icon: Dumbbell, tone: "#F97316", o: NX, y: "0px", mo: MNX, my: "212px", delay: 0.08 },
  { label: "Criação de Sites", sub: "Web", Icon: Globe, tone: "#00D9FF", o: X, y: "0px", mo: MX, my: "212px", delay: 0.12 },
  { label: "Instagram", sub: "Social", Icon: Instagram, tone: "#E1306C", o: NX, y: Y, mo: MNX, my: "296px", delay: 0.16 },
  { label: "Automação & IA", sub: "IA", Icon: Wand2, tone: "#34D399", o: X, y: Y, mo: MX, my: "296px", delay: 0.20 },
];

export function ExplodedScroll() {
  const ref = useScrollScene<HTMLDivElement>();

  return (
    <section
      ref={ref}
      aria-label="Serviços RDG — visão em camadas"
      className="exploded-scene relative"
      style={{ height: "320vh" }}
    >
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-10 md:pt-32">
        <SectionHeading
          eyebrow="/o ecossistema rdg"
          title={
            <>
              Seis frentes. <em className="italic text-primary">Um só motor.</em>
            </>
          }
          description="Role para ver cada serviço encontrar seu lugar ao redor do núcleo RDG."
        />
      </div>

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 pb-10 pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 50%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
          }}
        />



        <div
          className="exploded-stage relative"
          style={{
            width: "min(780px, 96vw)",
            height: "min(520px, calc(100vh - 150px))",
            perspective: "1400px",
          }}
        >
          {/* núcleo — logo RDG */}
          <div
            aria-hidden
            className="exploded-core absolute left-1/2 top-1/2 z-30 grid -translate-x-1/2 -translate-y-1/2 scale-[0.5] place-items-center rounded-2xl border border-primary/40 bg-[#0B0B0F]/95 p-2 sm:scale-100 sm:p-4"
            style={{
              boxShadow:
                "0 0 60px -10px color-mix(in oklab, var(--primary) 60%, transparent), 0 0 0 1px color-mix(in oklab, var(--primary) 30%, transparent) inset",
            }}
          >
            <Logo size="lg" />
          </div>

          {PIECES.map((p, i) => (
            <ServicePiece key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePiece({ label, sub, Icon, tone, o, y, mo, my, delay }: Piece) {
  return (
    <div
      className="exploded-piece absolute left-1/2 top-1/2 z-10"
      style={
        {
          ["--o" as string]: o,
          ["--oy" as string]: y,
          ["--mobile-o" as string]: mo,
          ["--mobile-y" as string]: my,
          ["--d" as string]: delay,
        } as React.CSSProperties
      }
    >
      <div
        className="exploded-card flex w-[clamp(138px,40vw,220px)] items-center gap-2 rounded-xl border border-white/10 bg-[#0B0B0F]/88 px-2.5 py-2 backdrop-blur-md sm:w-[clamp(150px,38vw,220px)] sm:gap-2.5 sm:px-3 sm:py-2.5"
        style={{
          boxShadow: `0 20px 60px -20px color-mix(in oklab, ${tone} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${tone} 25%, transparent) inset`,
        }}
      >
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
          style={{
            background: `color-mix(in oklab, ${tone} 18%, transparent)`,
            color: tone,
            boxShadow: `0 0 20px -4px ${tone}`,
          }}
        >
          <Icon size={18} strokeWidth={1.6} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="exploded-service-kicker font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: tone }}>
            {sub}
          </div>
          <div className="exploded-service-label text-[13px] font-medium leading-tight text-foreground sm:text-sm">{label}</div>
        </div>
      </div>
    </div>
  );
}
