import { Check, MessageCircle, Sparkles, TrendingUp, Flame } from "lucide-react";

type Variant = "barber" | "beauty" | "fit";

const ACCENTS: Record<Variant, string> = {
  barber: "#E5B86A",
  beauty: "#B57BFF",
  fit: "#F97316",
};

const URL_LABELS: Record<Variant, string> = {
  barber: "filazerobarbery.app",
  beauty: "filazerobeauty.app",
  fit: "smart-treino.app",
};

export function SystemMockup({ variant }: { variant: Variant }) {
  const accent = ACCENTS[variant];
  return (
    <div
      className="mockup-wrap relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border-strong bg-background/70"
      style={{ ["--mock-accent" as string]: accent }}
    >
      <div className="absolute inset-0 bg-grid-dot opacity-30" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: 0.7,
        }}
      />
      <div className="absolute inset-x-3 top-2.5 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent, opacity: 0.8 }} />
        <span className="ml-2 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
          {URL_LABELS[variant]}
        </span>
      </div>
      <div className="absolute inset-x-3 bottom-2.5 top-7">
        {variant === "barber" && <BarberMock accent={accent} />}
        {variant === "beauty" && <BeautyMock accent={accent} />}
        {variant === "fit" && <FitMock accent={accent} />}
      </div>
    </div>
  );
}

function BarberMock({ accent }: { accent: string }) {
  const bars = [38, 52, 44, 60, 48, 70, 58, 72, 65, 80, 74, 88, 82, 95];
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="grid grid-cols-2 gap-1.5">
        <div
          className="rounded-md px-2 py-1.5"
          style={{
            background: `linear-gradient(135deg, ${accent}33, ${accent}10)`,
            border: `1px solid ${accent}55`,
          }}
        >
          <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Hoje</div>
          <div className="font-display text-[13px] font-semibold leading-none" style={{ color: accent }}>
            18 <span className="text-[8px] font-normal text-muted-foreground">agend.</span>
          </div>
        </div>
        <div className="rounded-md border border-border bg-surface/70 px-2 py-1.5">
          <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Faturamento</div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-[13px] font-semibold leading-none text-foreground">R$ 32,4k</span>
            <span className="font-mono text-[8px] text-emerald-400">↗14,6%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end gap-[3px] rounded-md border border-border bg-surface/50 p-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="mock-bar flex-1 rounded-[2px]"
            style={{
              height: `${h}%`,
              background: `linear-gradient(180deg, ${accent}, ${accent}66)`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
      <div
        className="mock-row flex items-center gap-1.5 rounded-md px-2 py-1"
        style={{
          background: `${accent}1a`,
          border: `1px solid ${accent}40`,
          animationDelay: "0.6s",
        }}
      >
        <Sparkles size={10} style={{ color: accent }} />
        <span className="text-[9px] text-foreground">
          IA detectou <strong style={{ color: accent }}>+R$ 2.400</strong> em clientes pra reativar
        </span>
      </div>
    </div>
  );
}

function BeautyMock({ accent }: { accent: string }) {
  const slots = [
    { h: "09:00", s: "Manicure", c: "Ana" },
    { h: "10:30", s: "Coloração", c: "Júlia" },
    { h: "14:00", s: "Corte", c: "Camila" },
  ];
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">agenda · hoje</span>
        <span
          className="inline-flex items-center gap-1 rounded-full px-1.5 py-[2px] font-mono text-[8px]"
          style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}
        >
          <MessageCircle size={8} /> WhatsApp 1-clique
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {slots.map((s, i) => (
          <div
            key={s.h}
            className="mock-row flex items-center gap-2 rounded-md border border-border bg-surface/70 px-2 py-1.5"
            style={{ animationDelay: `${i * 0.18}s` }}
          >
            <span className="font-mono text-[9px]" style={{ color: accent }}>
              {s.h}
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-foreground">{s.s}</span>
              <span className="font-mono text-[8px] text-muted-foreground">{s.c}</span>
            </div>
            <span
              className="ml-auto inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] font-mono text-[8px]"
              style={{ background: `${accent}1a`, color: accent }}
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
              />
              confirmado
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between font-mono text-[8px] text-muted-foreground">
        <span>lembrete 1h antes · auto</span>
        <span style={{ color: accent }}>3/3</span>
      </div>
    </div>
  );
}

function FitMock({ accent }: { accent: string }) {
  const exs = [
    { n: "Supino reto", r: "4×10", done: true },
    { n: "Crucifixo halter", r: "3×12", done: true },
    { n: "Supino inclinado", r: "4×10", done: false },
  ];
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <div className="leading-tight">
          <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Treino de hoje</div>
          <div className="text-[11px] font-semibold text-foreground">Peito</div>
        </div>
        <span
          className="grid h-5 w-5 place-items-center rounded-full"
          style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}
        >
          <Flame size={10} />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {exs.map((e, i) => (
          <div
            key={e.n}
            className="mock-row flex items-center gap-2 rounded-md border border-border bg-surface/70 px-2 py-1"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <span
              className="grid h-3.5 w-3.5 place-items-center rounded-full"
              style={{
                background: e.done ? accent : "transparent",
                border: `1px solid ${e.done ? accent : "var(--border)"}`,
              }}
            >
              {e.done && <Check size={8} className="text-background" strokeWidth={3} />}
            </span>
            <span className={`text-[10px] ${e.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
              {e.n}
            </span>
            <span className="ml-auto font-mono text-[9px]" style={{ color: accent }}>
              {e.r}
            </span>
          </div>
        ))}
      </div>
      <div
        className="mock-row flex items-start gap-1.5 rounded-md px-2 py-1"
        style={{
          background: `${accent}18`,
          border: `1px solid ${accent}44`,
          animationDelay: "0.5s",
        }}
      >
        <TrendingUp size={10} className="mt-[1px] shrink-0" style={{ color: accent }} />
        <span className="text-[9px] leading-tight text-foreground">
          <strong style={{ color: accent }}>Coach IA:</strong> +2,5kg no supino — RPE 7 nas últimas 2 sessões.
        </span>
      </div>
    </div>
  );
}
