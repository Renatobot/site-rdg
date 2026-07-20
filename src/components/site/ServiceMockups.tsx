import { Check, Code2, Heart, MapPin, MessageCircle, Phone, Sparkles, Star } from "lucide-react";
import macbookImg from "@/assets/macbook-rdg.jpg";

export type ServiceVariant = "web" | "saas" | "social" | "ai" | "brand" | "gmn";

const URL_LABELS: Record<ServiceVariant, string> = {
  web: "rdg.digital/site",
  saas: "rdg.digital/app",
  social: "instagram.com/rdg",
  ai: "rdg.digital/ai",
  brand: "rdg.digital/brand",
  gmn: "google.com/maps",
};

export function ServiceMockup({ variant, accent }: { variant: ServiceVariant; accent: string }) {
  return (
    <div
      className="mockup-wrap relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border-strong bg-background/70"
      style={{ ["--mock-accent" as string]: accent }}
    >
      <div className="absolute inset-0 bg-grid-dot opacity-30" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0.7 }}
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
        {variant === "web" && <WebMock accent={accent} />}
        {variant === "saas" && <SaaSMock accent={accent} />}
        {variant === "social" && <SocialMock accent={accent} />}
        {variant === "ai" && <AIMock accent={accent} />}
        {variant === "brand" && <BrandMock accent={accent} />}
        {variant === "gmn" && <GMNMock accent={accent} />}
      </div>
    </div>
  );
}

/* ───────────────── WEB — usa a imagem real do MacBook ───────────────── */
function WebMock({ accent }: { accent: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md">
      <img
        src={macbookImg}
        alt=""
        loading="lazy"
        decoding="async"
        width={1280}
        height={800}
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 40%, #05080F 95%)`,
        }}
      />
      <div
        className="mock-row absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1.5 rounded-md px-2 py-1"
        style={{
          background: `${accent}1a`,
          border: `1px solid ${accent}44`,
          animationDelay: "0.3s",
        }}
      >
        <Code2 size={10} style={{ color: accent }} />
        <span className="text-[9px] text-foreground">
          Lighthouse <strong style={{ color: accent }}>100/100</strong> · deploy 1.2s
        </span>
      </div>
    </div>
  );
}

/* ───────────────── SAAS — dashboard interno ───────────────── */
function SaaSMock({ accent }: { accent: string }) {
  const rows = [
    { c: "Acme Co.", s: "ativo", v: "R$ 12.4k" },
    { c: "Studio M", s: "pendente", v: "R$ 3.1k" },
    { c: "Loja Norte", s: "ativo", v: "R$ 8.9k" },
  ];
  return (
    <div className="grid h-full grid-cols-[34%_1fr] gap-1.5">
      <div className="flex flex-col gap-1 rounded-md border border-border bg-surface/60 p-1.5">
        {["Dashboard", "Clientes", "Faturas", "Relatórios", "Equipe"].map((m, i) => (
          <span
            key={m}
            className="rounded px-1.5 py-1 font-mono text-[8px]"
            style={{
              background: i === 0 ? `${accent}22` : "transparent",
              color: i === 0 ? accent : "var(--muted-foreground)",
              border: i === 0 ? `1px solid ${accent}55` : "1px solid transparent",
            }}
          >
            {m}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="grid grid-cols-3 gap-1">
          {["MRR", "Clientes", "Churn"].map((k, i) => (
            <div
              key={k}
              className="rounded-md border border-border bg-surface/70 px-1.5 py-1"
              style={i === 0 ? { borderColor: `${accent}55`, background: `${accent}10` } : undefined}
            >
              <div className="font-mono text-[7px] uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="text-[11px] font-semibold" style={{ color: i === 0 ? accent : "white" }}>
                {["R$ 48k", "126", "1,8%"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-1 rounded-md border border-border bg-surface/50 p-1.5">
          {rows.map((r, i) => (
            <div
              key={r.c}
              className="mock-row flex items-center gap-2 rounded px-1.5 py-1"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="text-[9px] text-foreground">{r.c}</span>
              <span
                className="ml-auto rounded-full px-1.5 py-[1px] font-mono text-[7px]"
                style={{
                  background: r.s === "ativo" ? `${accent}22` : "rgba(255,255,255,0.08)",
                  color: r.s === "ativo" ? accent : "var(--muted-foreground)",
                }}
              >
                {r.s}
              </span>
              <span className="font-mono text-[9px]" style={{ color: accent }}>
                {r.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── SOCIAL — Prospecção Invisível (funil + DM) ───────── */
function SocialMock({ accent }: { accent: string }) {
  const steps = [
    { n: "01", l: "Mapeamento", v: "2.4k", w: 100 },
    { n: "02", l: "Interação", v: "1.8k", w: 75 },
    { n: "03", l: "Visita", v: "920", w: 42 },
    { n: "04", l: "DM enviada", v: "312", w: 22 },
  ];
  return (
    <div className="grid h-full grid-cols-[1fr_46%] gap-1.5">
      {/* Funil */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-widest text-muted-foreground">
            funil · hoje
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] font-mono text-[7px]"
            style={{ background: `${accent}1a`, color: accent }}
          >
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
            />
            ao vivo
          </span>
        </div>
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="mock-row rounded-md border border-border bg-surface/60 px-1.5 py-1"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[7px]" style={{ color: accent }}>
                {s.n}
              </span>
              <span className="text-[9px] text-foreground">{s.l}</span>
              <span
                className="ml-auto font-mono text-[9px] font-semibold"
                style={{ color: accent }}
              >
                {s.v}
              </span>
            </div>
            <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${s.w}%`,
                  background: `linear-gradient(90deg, #F58529, ${accent}, #8134AF)`,
                  boxShadow: `0 0 8px ${accent}88`,
                }}
              />
            </div>
          </div>
        ))}
        <div
          className="mock-row mt-auto flex items-center gap-1 rounded-md px-1.5 py-1"
          style={{
            background: `${accent}14`,
            border: `1px solid ${accent}44`,
            animationDelay: "0.55s",
          }}
        >
          <Heart size={9} style={{ color: accent }} />
          <span className="text-[8px] leading-tight text-foreground">
            <strong style={{ color: accent }}>+312</strong> leads quentes
          </span>
        </div>
      </div>

      {/* DM */}
      <div
        className="relative flex flex-col overflow-hidden rounded-md border"
        style={{
          borderColor: `${accent}55`,
          background: "linear-gradient(180deg, rgba(225,48,108,0.10), rgba(11,18,32,0.6))",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, #F58529, ${accent}, #8134AF)` }}
        />
        <div className="flex items-center gap-1 px-1.5 pb-1 pt-2">
          <span
            className="grid h-4 w-4 place-items-center rounded-full p-[1px]"
            style={{ background: `conic-gradient(from 0deg, #F58529, ${accent}, #8134AF, #515BD4, #F58529)` }}
          >
            <span className="grid h-full w-full place-items-center rounded-full bg-background font-mono text-[6px] text-foreground">
              @
            </span>
          </span>
          <div className="leading-none">
            <div className="text-[8px] font-semibold text-foreground">@cliente.alvo</div>
            <div className="font-mono text-[6px] text-muted-foreground">começou a seguir você</div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-end gap-1 px-1.5 pb-1.5">
          <div
            className="mock-row max-w-[95%] rounded-lg rounded-bl-sm px-1.5 py-1 text-[8px] leading-snug text-foreground"
            style={{
              background: `linear-gradient(135deg, ${accent}, #8134AF)`,
              color: "#fff",
              animationDelay: "0.35s",
              boxShadow: `0 8px 22px -10px ${accent}aa`,
            }}
          >
            Oi! Vi que curte esse assunto — liberei um acesso à minha aula secreta. Quer o link?
          </div>
          <div className="flex items-center gap-1">
            <span
              className="inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] font-mono text-[6px]"
              style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}
            >
              <MessageCircle size={7} /> auto · 0.4s
            </span>
            <span className="font-mono text-[6px] text-muted-foreground">enviado</span>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ───────────────── AI — chat com automação ───────────────── */
function AIMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <span
          className="grid h-5 w-5 place-items-center rounded-md"
          style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}
        >
          <Sparkles size={10} />
        </span>
        <span className="font-mono text-[9px] text-foreground">RDG Agent</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] font-mono text-[7px]" style={{ background: `${accent}1a`, color: accent }}>
          <span className="h-1 w-1 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} /> online
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="mock-row max-w-[80%] rounded-lg rounded-tl-sm bg-surface/70 px-2 py-1 text-[9px] text-foreground" style={{ animationDelay: "0.1s" }}>
          Quanto faturei essa semana?
        </div>
        <div
          className="mock-row ml-auto max-w-[85%] rounded-lg rounded-tr-sm px-2 py-1 text-[9px] text-foreground"
          style={{ background: `${accent}1a`, border: `1px solid ${accent}44`, animationDelay: "0.35s" }}
        >
          <strong style={{ color: accent }}>R$ 18.420</strong> · 32 vendas
          <br />
          ↗ 24% vs semana passada
        </div>
        <div className="mock-row max-w-[60%] rounded-lg rounded-tl-sm bg-surface/70 px-2 py-1 text-[9px] text-foreground" style={{ animationDelay: "0.6s" }}>
          Reativar clientes inativos
        </div>
        <div
          className="mock-row ml-auto flex max-w-[85%] items-center gap-1.5 rounded-lg rounded-tr-sm px-2 py-1 text-[9px] text-foreground"
          style={{ background: `${accent}1a`, border: `1px solid ${accent}44`, animationDelay: "0.85s" }}
        >
          <Check size={9} style={{ color: accent }} />
          124 mensagens enviadas no WhatsApp
        </div>
      </div>
      <div className="flex items-center gap-1.5 rounded-md border border-border bg-surface/50 px-2 py-1">
        <span className="h-1 w-1 animate-pulse rounded-full" style={{ background: accent }} />
        <span className="font-mono text-[8px] text-muted-foreground">digitando…</span>
      </div>
    </div>
  );
}

/* ───────────────── BRAND — moodboard / identidade ───────────────── */
function BrandMock({ accent }: { accent: string }) {
  const palette = [accent, "#0B1220", "#F5F5F5", "#E5B86A", "#7C3AED"];
  return (
    <div className="grid h-full grid-cols-3 grid-rows-2 gap-1">
      <div
        className="col-span-2 mock-row relative flex items-center justify-center overflow-hidden rounded-md"
        style={{
          background: `linear-gradient(135deg, ${accent}33, transparent)`,
          border: `1px solid ${accent}55`,
          animationDelay: "0.1s",
        }}
      >
        <div className="absolute inset-0 bg-grid-dot opacity-30" />
        <span className="font-display text-[22px] font-semibold leading-none tracking-tight text-foreground">
          rdg<span style={{ color: accent }}>.</span>
        </span>
      </div>
      <div className="mock-row flex flex-col justify-between rounded-md border border-border bg-surface/70 p-1.5" style={{ animationDelay: "0.2s" }}>
        <span className="font-mono text-[7px] uppercase tracking-widest text-muted-foreground">tipo</span>
        <span className="font-display text-[14px] leading-none text-foreground">Aa</span>
        <span className="font-mono text-[7px] text-muted-foreground">Geist · Mono</span>
      </div>
      <div className="mock-row flex items-center gap-1 rounded-md border border-border bg-surface/70 p-1.5" style={{ animationDelay: "0.35s" }}>
        {palette.map((c, i) => (
          <span
            key={i}
            className="h-full flex-1 rounded-sm"
            style={{
              background: c,
              boxShadow: c === accent ? `0 0 12px ${accent}aa` : undefined,
              minHeight: 18,
            }}
          />
        ))}
      </div>
      <div
        className="col-span-2 mock-row flex items-center gap-2 rounded-md px-2 py-1"
        style={{
          background: `${accent}14`,
          border: `1px solid ${accent}44`,
          animationDelay: "0.5s",
        }}
      >
        <Sparkles size={10} style={{ color: accent }} />
        <span className="text-[9px] leading-tight text-foreground">
          Identidade <strong style={{ color: accent }}>consistente</strong> em site, app e social.
        </span>
      </div>
    </div>
  );
}

/* ───────────────── GMN — Google Meu Negócio card + mapa ───────────────── */
function GMNMock({ accent }: { accent: string }) {
  return (
    <div className="grid h-full grid-cols-[1fr_44%] gap-1.5">
      {/* Business Profile card */}
      <div className="flex flex-col gap-1 rounded-md border border-border bg-surface/60 p-1.5">
        <div className="flex items-center gap-1.5">
          <span
            className="grid h-5 w-5 place-items-center rounded-sm text-[9px] font-bold"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}
          >
            R
          </span>
          <div className="leading-none">
            <div className="text-[9px] font-semibold text-foreground">RDG Barbearia</div>
            <div className="font-mono text-[6px] text-muted-foreground">Barbearia · Aberto agora</div>
          </div>
          <span
            className="ml-auto inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] font-mono text-[6px]"
            style={{ background: `${accent}1a`, color: accent, border: `1px solid ${accent}55` }}
          >
            <span className="h-1 w-1 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
            top 3
          </span>
        </div>

        <div className="mock-row flex items-center gap-1" style={{ animationDelay: "0.15s" }}>
          <span className="text-[10px] font-semibold text-foreground">4,9</span>
          <div className="flex items-center gap-[1px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={8} className="fill-current" style={{ color: accent }} />
            ))}
          </div>
          <span className="font-mono text-[7px] text-muted-foreground">(214)</span>
        </div>

        {[
          { l: "Cortes · agenda cheia", w: 92 },
          { l: "Ligações · +38%", w: 78 },
          { l: "Rotas pedidas", w: 62 },
        ].map((r, i) => (
          <div
            key={r.l}
            className="mock-row rounded px-1.5 py-1"
            style={{ background: "rgba(255,255,255,0.03)", animationDelay: `${0.25 + i * 0.12}s` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-foreground">{r.l}</span>
              <span className="font-mono text-[7px]" style={{ color: accent }}>{r.w}%</span>
            </div>
            <div className="mt-[3px] h-[3px] w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{ width: `${r.w}%`, background: accent, boxShadow: `0 0 8px ${accent}88` }}
              />
            </div>
          </div>
        ))}

        <div className="mock-row mt-auto flex items-center gap-1 rounded-md px-1.5 py-1"
          style={{ background: `${accent}14`, border: `1px solid ${accent}44`, animationDelay: "0.7s" }}>
          <Phone size={9} style={{ color: accent }} />
          <span className="text-[8px] text-foreground">
            <strong style={{ color: accent }}>+12</strong> ligações hoje
          </span>
        </div>
      </div>

      {/* Map — estilo Google Maps (dark) */}
      <div
        className="relative overflow-hidden rounded-md border"
        style={{ borderColor: `${accent}55`, background: "#1b1f2a" }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 240 180"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* land */}
          <rect width="240" height="180" fill="#1b1f2a" />

          {/* park */}
          <path d="M0,120 Q30,105 55,118 L70,150 L0,168 Z" fill="#1f3a2a" />
          <path d="M175,0 L240,0 L240,55 Q205,52 188,38 Z" fill="#1f3a2a" />

          {/* river / water */}
          <path
            d="M-10,70 C40,58 70,95 120,80 S200,55 250,72 L250,88 C200,72 160,105 120,96 S40,74 -10,86 Z"
            fill="#0f2038"
          />

          {/* blocks (buildings) */}
          <g fill="#252a37">
            <rect x="14" y="14" width="22" height="16" rx="1.5" />
            <rect x="42" y="10" width="30" height="20" rx="1.5" />
            <rect x="80" y="16" width="18" height="14" rx="1.5" />
            <rect x="108" y="10" width="26" height="20" rx="1.5" />
            <rect x="142" y="14" width="20" height="16" rx="1.5" />
            <rect x="14" y="40" width="30" height="18" rx="1.5" />
            <rect x="52" y="42" width="24" height="16" rx="1.5" />
            <rect x="86" y="40" width="34" height="18" rx="1.5" />
            <rect x="130" y="42" width="22" height="16" rx="1.5" />
            <rect x="162" y="40" width="28" height="18" rx="1.5" />
            <rect x="12" y="108" width="26" height="16" rx="1.5" />
            <rect x="46" y="106" width="20" height="18" rx="1.5" />
            <rect x="140" y="106" width="30" height="18" rx="1.5" />
            <rect x="178" y="108" width="22" height="16" rx="1.5" />
            <rect x="18" y="150" width="24" height="18" rx="1.5" />
            <rect x="50" y="152" width="30" height="16" rx="1.5" />
            <rect x="120" y="150" width="26" height="18" rx="1.5" />
            <rect x="154" y="152" width="34" height="16" rx="1.5" />
            <rect x="196" y="150" width="22" height="18" rx="1.5" />
          </g>

          {/* highway (accent) */}
          <path
            d="M-5,95 C50,80 90,115 130,100 S210,72 250,90"
            stroke={accent}
            strokeOpacity="0.55"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-5,95 C50,80 90,115 130,100 S210,72 250,90"
            stroke="#ffd66b"
            strokeOpacity="0.35"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />

          {/* streets */}
          <g stroke="#3a4152" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <path d="M0,35 L240,35" />
            <path d="M0,65 L240,65" />
            <path d="M0,132 L240,132" />
            <path d="M38,0 L38,180" />
            <path d="M102,0 L102,180" />
            <path d="M170,0 L170,180" />
          </g>
          <g stroke="#4a5162" strokeWidth="0.8" strokeLinecap="round" fill="none">
            <path d="M0,20 L240,20" />
            <path d="M0,50 L240,50" />
            <path d="M0,80 L240,80" />
            <path d="M0,145 L240,145" />
            <path d="M20,0 L20,180" />
            <path d="M70,0 L70,180" />
            <path d="M135,0 L135,180" />
            <path d="M205,0 L205,180" />
          </g>

          {/* street labels */}
          <g fill="#8b93a7" fontFamily="ui-monospace, monospace" fontSize="4.2">
            <text x="6" y="33">Av. Paulista</text>
            <text x="6" y="130">R. Augusta</text>
            <text x="40" y="12" transform="rotate(90 40 12)">R. Bela Cintra</text>
          </g>
        </svg>

        {/* competitor pins */}
        <span className="absolute left-[22%] top-[70%] grid h-3 w-3 place-items-center rounded-full bg-white/25">
          <span className="h-1 w-1 rounded-full bg-white/70" />
        </span>
        <span className="absolute right-[18%] top-[24%] grid h-3 w-3 place-items-center rounded-full bg-white/25">
          <span className="h-1 w-1 rounded-full bg-white/70" />
        </span>
        <span className="absolute left-[70%] top-[62%] grid h-3 w-3 place-items-center rounded-full bg-white/25">
          <span className="h-1 w-1 rounded-full bg-white/70" />
        </span>

        {/* main pin */}
        <div
          className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-1/2"
          style={{ animation: "pulseDot 1.6s ease-in-out infinite" }}
        >
          <span
            className="grid h-6 w-6 place-items-center rounded-full"
            style={{ background: accent, boxShadow: `0 0 14px ${accent}, 0 0 0 4px ${accent}22` }}
          >
            <MapPin size={12} color="#fff" />
          </span>
        </div>

        {/* compass */}
        <div
          className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full border font-mono text-[6px]"
          style={{ borderColor: `${accent}55`, background: "rgba(11,18,32,0.7)", color: accent }}
        >
          N
        </div>

        {/* scale bar */}
        <div className="absolute bottom-1 right-1.5 flex items-center gap-1">
          <span className="h-[2px] w-6 bg-white/60" />
          <span className="font-mono text-[6px] text-white/60">500 m</span>
        </div>

        <div
          className="absolute inset-x-1 bottom-1 mr-14 flex items-center gap-1 rounded px-1.5 py-1"
          style={{ background: "rgba(11,18,32,0.85)", border: `1px solid ${accent}44` }}
        >
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
          />
          <span className="font-mono text-[7px] text-foreground">
            buscando "barbearia perto de mim"
          </span>
        </div>
      </div>
    </div>
  );
}
