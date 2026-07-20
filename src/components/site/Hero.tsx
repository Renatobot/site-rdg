import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { useCounter } from "@/hooks/use-counter";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const c = useCounter(value);
  return (
    <div className="flex flex-col items-center px-4">
      <span
        className="mb-2 text-4xl font-light tabular-nums text-foreground md:text-5xl"
        style={{ fontFamily: SERIF }}
      >
        <span ref={c.ref}>{c.value}</span>
        {suffix}
      </span>
      <span className="text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0A0A0A] px-4 pt-28 pb-16 selection:bg-primary selection:text-primary-foreground sm:pt-40 sm:pb-28"
    >
      {/* Very subtle single cyan ambient light — no aurora, no smoke, no particles */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[160px]"
        style={{ background: "hsl(var(--primary) / 1)" }}
      />
      {/* Faint film grain for tactile depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative border border-white/5 bg-white/[0.01] p-8 backdrop-blur-3xl sm:p-16 md:p-24">
          {/* Fine cyan corner accents */}
          <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-primary/40" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/40" />

          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-10">
              <span className="border border-primary/30 px-4 py-1.5 text-[10px] font-light uppercase tracking-[0.25em] text-primary">
                RDG Digital &bull; Engenharia sob medida
              </span>
            </div>

            {/* Headline */}
            <h1
              className="word-in mb-8 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl"
              style={{ fontFamily: SERIF }}
            >
              Tecnologia que <span className="italic">impulsiona</span> negócios.
            </h1>

            {/* Paragraph */}
            <p
              className="word-in mb-12 max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "0.15s" }}
            >
              Desenvolvemos sistemas inteligentes e soluções digitais para ajudar empresas a crescer com mais organização, eficiência e presença online.
            </p>

            {/* CTAs */}
            <div
              className="word-in mb-24 flex flex-col gap-4 sm:flex-row sm:gap-6"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#sistemas"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors duration-500 hover:bg-foreground"
              >
                Conhecer os sistemas
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-10 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-500 hover:border-primary hover:text-primary"
              >
                <MessageCircle size={16} />
                Falar com a RDG
              </a>
            </div>

            {/* Stats */}
            <dl className="grid w-full grid-cols-1 gap-8 border-t border-white/10 pt-12 md:grid-cols-3 md:gap-0">
              <div className="md:border-r md:border-white/10">
                <Stat value={100} suffix="%" label="Sob medida" />
              </div>
              <div className="md:border-r md:border-white/10">
                <Stat value={8} suffix="+" label="Nichos atendidos" />
              </div>
              <div>
                <Stat value={100} suffix="%" label="Foco em resultado" />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
