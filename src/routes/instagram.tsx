import { useState, useEffect, useRef, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { waLink, LOGO_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import igAvatar from "@/assets/ig-mock/avatar.jpg";
import igPost1 from "@/assets/ig-mock/post1.jpg";
import igPost2 from "@/assets/ig-mock/post2.jpg";
import igPost3 from "@/assets/ig-mock/post3.jpg";
import igPost4 from "@/assets/ig-mock/post4.jpg";
import igPost5 from "@/assets/ig-mock/post5.jpg";
import igPost6 from "@/assets/ig-mock/post6.jpg";
import {
  Instagram,
  ShieldCheck,
  Target,
  Sparkles,
  MessageCircle,
  TrendingUp,
  Users,
  BadgeCheck,
  Search,
  ChevronDown,
  ArrowRight,
  Lock,
  Clock,
  Heart,
  Send,
  Bookmark,
  MoreHorizontal,
  BarChart3,
  FileText,
  Globe,
  MapPin,
  Camera,
  PlayCircle,
  Home,
  PlusSquare,
  User,
  Shirt,
  Dumbbell,
  FlaskConical,
  Scissors,
  Wifi,
  Car,
  Wrench,
  UtensilsCrossed,
} from "lucide-react";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

const TITLE = "Gestão de Instagram para negócios locais — RDG Digital";
const DESCRIPTION =
  "Atraímos o público certo até o seu perfil e conduzimos direto ao seu WhatsApp. Prospecção humanizada, conteúdo estratégico e relatórios mensais.";
const CANONICAL_URL = `${BASE_URL}/instagram`;

const WA_ORCAMENTO = waLink(
  "Olá, RDG! Quero um orçamento personalizado do serviço de gestão de Instagram."
);
const WA_CONVERSA = waLink(
  "Olá, RDG! Gostaria de tirar dúvidas sobre o serviço de gestão de Instagram."
);
const WA_COMBO = waLink(
  "Olá, RDG! Tenho interesse no combo Instagram + Site + Google Meu Negócio."
);

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: InstagramPage,
});

function InstagramPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-foreground">
      {/* subtle animated ambient icons — no gradients */}
      <FloatingIcons />
      <main className="relative">
        <Hero />
        <MetricsStrip />
        <HowItWorks />
        <PhoneShowcase />
        <Differentials />
        <Reports />
        <BeforeAfter />
        <Niches />
        <Testimonials />
        <Combos />
        <FAQ />
        <FinalCTA />
      </main>
      <MiniFooter />
    </div>
  );
}

/* ---------------- Ambient floating icons ---------------- */

function FloatingIcons() {
  const items = [
    { Icon: Heart, top: "8%", left: "6%", d: "0s", s: 22 },
    { Icon: MessageCircle, top: "22%", left: "88%", d: "1.2s", s: 20 },
    { Icon: Instagram, top: "48%", left: "4%", d: "0.6s", s: 26 },
    { Icon: Send, top: "70%", left: "92%", d: "1.8s", s: 18 },
    { Icon: Bookmark, top: "86%", left: "10%", d: "0.4s", s: 20 },
    { Icon: Sparkles, top: "36%", left: "94%", d: "2.2s", s: 16 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      {items.map((it, i) => (
        <it.Icon
          key={i}
          size={it.s}
          className="absolute text-primary/15 animate-[floatY_8s_ease-in-out_infinite]"
          style={{ top: it.top, left: it.left, animationDelay: it.d }}
        />
      ))}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: .35; }
          50% { transform: translateY(-18px) rotate(6deg); opacity: .8; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: .4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes barGrow {
          from { transform: scaleY(0.05); }
          to { transform: scaleY(1); }
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes typing {
          0% { opacity: .3; } 50% { opacity: 1; } 100% { opacity: .3; }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative border-b border-white/10 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            <Instagram size={12} /> Gestão de Instagram
          </span>

          <h1
            className="mt-8 text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-[64px]"
            style={{ fontFamily: SERIF }}
          >
            O público certo,
            <br />
            <em className="text-primary not-italic">chegando até você.</em>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg lg:mx-0">
            Levamos até o seu Instagram pessoas reais do seu nicho e região —
            interagimos com elas de forma humana e conduzimos ao seu Direct
            e WhatsApp. Todos os meses, você recebe um relatório com os
            números do perfil.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
            >
              Quero um orçamento
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
            >
              Ver o método
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <Lock size={12} className="text-primary" />
            Operação dentro das diretrizes do Instagram
          </p>
        </div>

        {/* Phone mockup */}
        <div className="mx-auto w-full max-w-[320px]">
          <PhoneFrame>
            <ProfileScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Metrics strip (ranges, not promises) ---------------- */

function MetricsStrip() {
  const items = [
    { kind: "range" as const, from: 100, to: 1000, suffix: "+", l: "novos seguidores/mês¹" },
    { kind: "text" as const, k: "24/7", l: "operação em ritmo humano" },
    { kind: "text" as const, k: "Mensal", l: "relatório completo do perfil" },
    { kind: "count" as const, from: 0, to: 0, k: "0", l: "bot no seu público" },
  ];
  return (
    <section className="border-b border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 px-0 md:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.l}
            className="group relative bg-[#0A0A0A] p-6 text-center transition-colors hover:bg-white/[0.02]"
            style={{ animation: `slideUp 0.6s ease ${i * 0.12}s both` }}
          >
            <span
              className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-primary"
              style={{ animation: "pulseDot 1.6s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
            />
            <p
              className="text-2xl font-light leading-none text-primary sm:text-3xl"
              style={{ fontFamily: SERIF }}
            >
              {it.kind === "range" ? (
                <>
                  <CountUp to={it.from} delay={i * 120} /> a{" "}
                  <CountUp to={it.to} delay={i * 120 + 200} />
                  {it.suffix}
                </>
              ) : (
                <span className="inline-block transition-transform group-hover:scale-110">
                  {it.k}
                </span>
              )}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {it.l}
            </p>
            <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-500 group-hover:w-2/3" />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-6xl px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
        ¹ Faixa média observada em clientes ativos. O resultado real depende do seu nicho, região e rotina de postagem.
      </p>
    </section>
  );
}

function CountUp({ to, delay = 0, duration = 1400 }: { to: number; delay?: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let cancelled = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const start = performance.now() + delay;
          const tick = (now: number) => {
            if (cancelled) return;
            const t = Math.max(0, Math.min(1, (now - start) / duration));
            const eased = 1 - Math.pow(1 - t, 3);
            setN(Math.round(eased * to));
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, delay, duration]);

  return <span ref={ref}>{n.toLocaleString("pt-BR")}</span>;
}



/* ---------------- How it works ---------------- */

const steps = [
  {
    n: "01",
    Icon: Target,
    title: "Escolha dos alvos",
    desc: "Você indica concorrentes e grandes contas do seu nicho e região. Avaliamos cada perfil para garantir que o público seja real e coerente com o seu negócio.",
  },
  {
    n: "02",
    Icon: Sparkles,
    title: "Interação humana",
    desc: "Curtimos, visualizamos stories e seguimos esse público em ritmo humano — respeitando pausas, limites e o comportamento natural da plataforma.",
  },
  {
    n: "03",
    Icon: MessageCircle,
    title: "Direct que converte",
    desc: "Quem retribui o follow recebe uma mensagem de boas-vindas personalizada com link para o seu WhatsApp, site ou promoção ativa do mês.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Como funciona</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Três movimentos, aplicados com consistência.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group bg-[#0A0A0A] p-8 transition-colors hover:bg-white/[0.02]"
              style={{ animation: `slideUp 0.6s ease ${i * 0.1}s both` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  Passo {s.n}
                </span>
                <s.Icon
                  size={18}
                  className="text-primary transition-transform group-hover:scale-110"
                />
              </div>
              <h3
                className="mt-8 text-2xl font-light leading-tight"
                style={{ fontFamily: SERIF }}
              >
                {s.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Phone showcase (feed + DM) ---------------- */

function PhoneShowcase() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Por dentro do método</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Do primeiro toque à conversa no Direct.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div className="mx-auto w-full max-w-[280px]">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              01 · Feed do alvo
            </p>
            <PhoneFrame>
              <FeedScreen />
            </PhoneFrame>
          </div>
          <div className="mx-auto w-full max-w-[280px]">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              02 · Direct de boas-vindas
            </p>
            <PhoneFrame>
              <DMScreen />
            </PhoneFrame>
          </div>
          <div className="mx-auto w-full max-w-[280px]">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              03 · Insights do perfil
            </p>
            <PhoneFrame>
              <InsightsScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentials ---------------- */

const differentials = [
  {
    Icon: TrendingUp,
    title: "Autoridade preservada",
    desc: "Limpeza contínua dos perfis que não retribuem. A proporção Seguidores × Seguindo fica saudável e transmite credibilidade real ao visitante.",
  },
  {
    Icon: ShieldCheck,
    title: "Operação segura",
    desc: "Interações lentas e humanizadas, dentro dos limites da plataforma. Sem táticas cinzentas, sem histórico de bloqueios em contas ativas.",
  },
  {
    Icon: BadgeCheck,
    title: "Selo de verificação valorizado",
    desc: "Se o seu perfil é verificado, o método rende ainda mais — a confiança do público aumenta a taxa de retorno de forma natural.",
  },
  {
    Icon: Users,
    title: "Público real e local",
    desc: "Nada de bots ou perfis fantasmas. O foco é atrair pessoas de verdade, com interesse genuíno no que você oferece.",
  },
  {
    Icon: Search,
    title: "Curadoria dos alvos",
    desc: "Antes de operar, filtramos os concorrentes indicados. Muitos têm base inflada por bots — descartamos esses e priorizamos os que realmente convertem.",
  },
  {
    Icon: Clock,
    title: "Rotina 24/7",
    desc: "Você atende clientes, dorme, viaja. O trabalho no seu Instagram continua acontecendo em ritmo humano, todos os dias.",
  },
];

function Differentials() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Diferenciais</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Autoridade, segurança e transparência.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className="group bg-[#0A0A0A] p-7 transition-colors hover:bg-white/[0.02]"
              style={{ animation: `slideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <d.Icon
                size={20}
                className="text-primary transition-transform group-hover:scale-110"
              />
              <h3
                className="mt-6 text-xl font-light leading-tight"
                style={{ fontFamily: SERIF }}
              >
                {d.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reports (with chart mockup) ---------------- */

function Reports() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <SectionEyebrow>Relatórios mensais</SectionEyebrow>
          <h2
            className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Você acompanha cada movimento do seu perfil.
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
            Todo mês enviamos um relatório com os principais indicadores do
            seu Instagram: crescimento de seguidores, contas alcançadas,
            interações, salvamentos, mensagens iniciadas e cliques no link
            da bio.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Crescimento de seguidores no período",
              "Alcance e impressões por conteúdo",
              "Interações no Direct e cliques na bio",
              "Comparativo mês a mês",
            ].map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm font-light text-foreground/85">
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <ReportCard />
      </div>
    </section>
  );
}

function ReportCard() {
  const bars = [30, 42, 38, 55, 48, 62, 70, 66, 78, 72, 85, 92];
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            setRunId((n) => n + 1);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // Loop the growth animation gently every ~6s while visible
  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setRunId((n) => n + 1), 6000);
    return () => clearInterval(t);
  }, [visible]);

  // Build a smooth SVG polyline from the bars
  const points = bars
    .map((h, i) => {
      const x = (i / (bars.length - 1)) * 100;
      const y = 100 - h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div
      ref={ref}
      className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] p-6"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Relatório mensal
          </span>
        </div>
        <span className="flex items-center gap-2 font-mono text-[10px] text-primary">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          RDG · 2026
        </span>
      </div>

      <div className="mt-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Crescimento — últimos 12 meses
        </p>

        <div className="relative mt-4 h-32">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-px w-full bg-white/5" />
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={`${runId}-${i}`}
                className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-primary/40 to-primary/90"
                style={{
                  height: `${h}%`,
                  animation: `barGrow 0.9s cubic-bezier(.2,.8,.2,1) ${i * 0.06}s both`,
                }}
              />
            ))}
          </div>

          {/* Animated trend line overlay */}
          <svg
            key={`svg-${runId}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <polyline
              points={points}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{
                strokeDasharray: 260,
                strokeDashoffset: 260,
                animation: "dashDraw 1.6s ease .3s forwards",
                filter: "drop-shadow(0 0 4px hsl(var(--primary) / 0.5))",
              }}
            />
            {bars.map((h, i) => {
              const x = (i / (bars.length - 1)) * 100;
              const y = 100 - h;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="0.9"
                  fill="hsl(var(--primary))"
                  style={{
                    opacity: 0,
                    animation: `dotPop .35s ease ${0.4 + i * 0.06}s forwards`,
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Month labels */}
        <div className="mt-2 flex gap-1.5 font-mono text-[8px] text-muted-foreground/60">
          {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m, i) => (
            <span key={i} className="flex-1 text-center">{m}</span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {[
          { k: "Alcance", v: "+38%" },
          { k: "Direct", v: "+52%" },
          { k: "Cliques na bio", v: "+47%" },
        ].map((s, i) => (
          <div
            key={s.k}
            style={{ animation: `slideUp 0.6s ease ${0.8 + i * 0.12}s both` }}
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              {s.k}
            </p>
            <p
              className="mt-1 text-lg font-light text-primary"
              style={{ fontFamily: SERIF }}
            >
              {s.v}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
        * Números ilustrativos. Cada perfil recebe os próprios dados reais.
      </p>

      <style>{`
        @keyframes dashDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dotPop {
          0% { opacity: 0; transform: scale(0); transform-origin: center; }
          60% { opacity: 1; transform: scale(1.6); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Before / After ---------------- */

function BeforeAfter() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionEyebrow>Antes e depois</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Um perfil que vende começa pela proporção certa.
        </h2>
        <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground">
          A proporção entre seguidores e contas seguidas é uma das primeiras
          leituras que um visitante faz sobre a sua credibilidade.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <StatCard
            variant="before"
            label="Antes"
            title="Perfil sem autoridade, seguindo demais"
            rows={[
              ["Seguidores", "1.200"],
              ["Seguindo", "3.400"],
              ["Proporção Seguidores × Seguindo", "0,35 (baixa)"],
              ["Percepção de autoridade", "Fraca"],
              ["Retorno do público", "Instável"],
            ]}
          />
          <StatCard
            variant="after"
            label="Depois"
            title="Perfil com autoridade e credibilidade"
            rows={[
              ["Seguidores", "4.800"],
              ["Seguindo", "980"],
              ["Proporção Seguidores × Seguindo", "4,9 (saudável)"],
              ["Percepção de autoridade", "Consolidada"],
              ["Retorno do público", "Consistente"],
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  variant,
  label,
  title,
  rows,
}: {
  variant: "before" | "after";
  label: string;
  title: string;
  rows: [string, string][];
}) {
  const isAfter = variant === "after";
  return (
    <div
      className={`border p-7 transition-transform hover:-translate-y-1 ${
        isAfter ? "border-primary/40" : "border-white/10"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex h-6 w-6 items-center justify-center border text-xs ${
            isAfter ? "border-primary/50 text-primary" : "border-white/20 text-muted-foreground"
          }`}
        >
          {isAfter ? "✓" : "–"}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </span>
      </div>
      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {rows.map(([k, v]) => (
          <li key={k} className="flex items-center justify-between py-3">
            <span className="text-sm font-light text-muted-foreground">{k}</span>
            <span
              className={`text-base font-light ${
                isAfter ? "text-primary" : "text-foreground/70"
              }`}
              style={{ fontFamily: SERIF }}
            >
              {v}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-light text-muted-foreground">{title}</p>
    </div>
  );
}

/* ---------------- Combos (Site + GMB) ---------------- */

const combos = [
  {
    Icon: Instagram,
    title: "Gestão de Instagram",
    desc: "Prospecção humanizada, Direct estratégico e relatório mensal.",
  },
  {
    Icon: Globe,
    title: "+ Criação de site",
    desc: "Site premium linkado ao seu perfil, pronto para converter o público que chega do Instagram.",
  },
  {
    Icon: MapPin,
    title: "+ Google Meu Negócio",
    desc: "Cadastro e otimização para o seu negócio aparecer nas buscas locais e no Maps.",
  },
];

const comboPillars = [
  {
    step: "01 / Atração",
    Icon: Instagram,
    title: "Instagram",
    desc: "Onde o desejo desperta. Prospecção humanizada e conteúdo que interrompe o scroll e leva gente certa até o seu perfil.",
    className: "",
  },
  {
    step: "02 / Conversão",
    Icon: Globe,
    title: "Site exclusivo",
    desc: "O porto seguro onde a autoridade se consolida. Ambiente controlado, sem distrações, feito para fechar negócio.",
    className: "md:mt-12",
  },
];

function Combos() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable only for reduced motion; mobile also needs the pinned reveal.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const compute = () => {
      raf = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 1);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal thresholds along the pinned scroll
  const reveal = (start: number, end: number) => {
    const p = Math.min(Math.max((progress - start) / (end - start), 0), 1);
    return p;
  };
  const rCopy = reveal(0.0, 0.15);
  const rP1 = reveal(0.15, 0.35);
  const rP2 = reveal(0.35, 0.55);
  const rP3 = reveal(0.55, 0.78);
  const rLines = reveal(0.55, 0.9);

  const step = (p: number): CSSProperties => ({
    opacity: p,
    transform: `translateY(${(1 - p) * 40}px)`,
    transition: "opacity .15s linear, transform .15s linear",
  });

  const mobileLayer = (enter: number): CSSProperties => {
    const fadeIn = reveal(enter, enter + 0.14);
    const p = fadeIn;
    return {
      opacity: p,
      transform: `translateY(${(1 - p) * 18}px) scale(${0.98 + p * 0.02})`,
      pointerEvents: p > 0.5 ? "auto" : "none",
      transition: "opacity .15s linear, transform .15s linear",
    };
  };

  return (
    <div ref={wrapperRef} className="relative h-[380vh] border-b border-white/10 lg:h-[320vh]">
      <section className="sticky top-0 flex min-h-screen items-start overflow-hidden py-10 sm:py-12 lg:h-screen lg:min-h-[620px] lg:items-center lg:py-0">
        {/* soft radial glow — animated */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/3 translate-x-1/4 rounded-full bg-primary/[0.07] blur-[120px]"
          style={{ animation: "glowPulse 6s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[380px] w-[380px] translate-y-1/3 -translate-x-1/4 rounded-full bg-primary/[0.04] blur-[120px]"
          style={{ animation: "glowPulse 8s ease-in-out 1s infinite" }}
        />

        {/* progress indicator (desktop only) */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
          {[rCopy, rP1, rP2, rP3].map((v, i) => (
            <span
              key={i}
              className="h-8 w-px bg-white/10"
              style={{
                background: `linear-gradient(to bottom, hsl(var(--primary)) ${v * 100}%, hsl(var(--primary) / 0.12) ${v * 100}%)`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-7 px-4 lg:grid-cols-12 lg:items-center lg:gap-20">
          {/* Copy column */}
          <div className="lg:col-span-5" style={step(rCopy)}>
            <SectionEyebrow>Estratégia omnichannel</SectionEyebrow>
            <h2
              className="mt-4 text-[31px] font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:mt-5 lg:text-6xl"
              style={{ fontFamily: SERIF }}
            >
              O cliente busca em{" "}
              <span className="italic">três</span> lugares, mas você só aparece em{" "}
              <span className="text-primary">um</span>?
            </h2>
            <p className="mt-4 max-w-md text-[13px] font-light leading-relaxed text-muted-foreground sm:text-base lg:mt-8">
              A fragmentação da atenção é o maior inimigo do seu lucro. Montamos
              um ecossistema onde cada canal cumpre um papel vital na jornada
              de compra — do primeiro olhar ao "quero contratar agora".
            </p>

            <a
              href={WA_COMBO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 group lg:mt-10"
              style={{ opacity: rP3, pointerEvents: rP3 > 0.5 ? "auto" : "none", transition: "opacity .3s linear" }}
            >
              <span className="relative flex h-14 items-center overflow-hidden bg-primary px-8 text-xs font-medium uppercase tracking-[0.2em] text-[#0A0A0A] transition-colors duration-300 group-hover:bg-primary/90">
                <span className="relative z-10">Quero presença nos 3 canais</span>
                <span
                  aria-hidden
                  className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30"
                  style={{ animation: "ctaShimmer 3.5s ease-in-out infinite" }}
                />
              </span>
              <span className="flex h-14 w-14 items-center justify-center border border-white/15 text-primary transition-colors duration-300 group-hover:border-primary">
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* Ecosystem visual column */}
          <div className="lg:col-span-7">
            <div className="grid gap-3 lg:hidden">
              {[
                {
                  step: "01 / Atração",
                  Icon: Instagram,
                  title: "Instagram",
                  desc: "Prospecção humanizada e conteúdo que interrompe o scroll e leva gente certa até o seu perfil.",
                  style: mobileLayer(0.12),
                },
                {
                  step: "02 / Conversão",
                  Icon: Globe,
                  title: "Site exclusivo",
                  desc: "Ambiente controlado, sem distrações, feito para consolidar autoridade e fechar negócio.",
                  style: mobileLayer(0.36),
                },
                {
                  step: "03 / Captura",
                  Icon: MapPin,
                  title: "Google Meu Negócio",
                  desc: "Ficha otimizada para aparecer nas buscas locais, no Maps e para quem já decidiu comprar.",
                  style: mobileLayer(0.6),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative border border-white/10 bg-[#0A0A0A]/92 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm"
                  style={card.style}
                >
                  <span className="absolute right-4 top-4 flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {card.step}
                  </div>
                  <div className="mt-4 flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/30">
                      <card.Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light leading-tight text-foreground" style={{ fontFamily: SERIF }}>
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative hidden grid-cols-1 gap-4 lg:grid lg:grid-cols-2">
              {comboPillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`group relative border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-primary/40 hover:bg-white/[0.04] ${p.className}`}
                  style={step(i === 0 ? rP1 : rP2)}
                >
                  <span className="absolute right-4 top-4 flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.step}
                  </div>
                  <div className="mt-6 flex h-10 w-10 items-center justify-center border border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/70">
                    <p.Icon size={18} className="text-primary" />
                  </div>
                  <h3
                    className="mt-6 text-2xl font-light text-foreground"
                    style={{ fontFamily: SERIF }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}

              {/* GMN — wide card */}
              <div
                className="group relative border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-primary/40 hover:bg-white/[0.04] md:col-span-2 md:-mt-2 lg:mx-auto lg:w-4/5"
                style={step(rP3)}
              >
                <span className="absolute right-4 top-4 flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  03 / Captura
                </div>
                <div className="mt-6 flex items-start gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/70">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground" style={{ fontFamily: SERIF }}>
                      Google Meu Negócio
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                      Seja encontrado por quem já decidiu comprar e busca por
                      proximidade. Ficha otimizada, fotos, horários e
                      avaliações — presença sólida no Maps e nas buscas locais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated connecting lines */}
              <svg
                aria-hidden
                viewBox="0 0 600 500"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block"
              >
                <path
                  d="M150 120 Q 300 180 300 300"
                  stroke="hsl(var(--primary) / 0.35)"
                  fill="none"
                  strokeWidth="1"
                  style={{ strokeDasharray: 500, strokeDashoffset: 500 * (1 - rLines) }}
                />
                <path
                  d="M450 260 Q 450 400 300 420"
                  stroke="hsl(var(--primary) / 0.35)"
                  fill="none"
                  strokeWidth="1"
                  style={{ strokeDasharray: 500, strokeDashoffset: 500 * (1 - rLines) }}
                />
                {rLines > 0.9 && (
                  <circle r="2.5" fill="hsl(var(--primary))">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="M150 120 Q 300 180 300 300 Q 300 400 450 260"
                    />
                  </circle>
                )}
              </svg>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes glowPulse {
            0%, 100% { opacity: 0.7; transform: translate(25%, -33%) scale(1); }
            50% { opacity: 1; transform: translate(25%, -33%) scale(1.15); }
          }
          @keyframes ctaShimmer {
            0% { transform: translateX(0) skewX(-12deg); }
            60%, 100% { transform: translateX(500%) skewX(-12deg); }
          }
        `}</style>
      </section>
    </div>
  );
}

/* ---------------- Niches ---------------- */

type Niche = {
  step: string;
  title: string;
  Icon: typeof Instagram;
  why: string;
};

const niches: Niche[] = [
  {
    step: "01",
    title: "Moda feminina & infantil",
    Icon: Shirt,
    why: "Compra por impulso movida a desejo visual — o feed vira vitrine e o Direct fecha a venda.",
  },
  {
    step: "02",
    title: "Academias & fitness",
    Icon: Dumbbell,
    why: "Público local decidindo por proximidade e prova social — bairro certo, aluno na porta.",
  },
  {
    step: "03",
    title: "Suplementos & nutrição",
    Icon: FlaskConical,
    why: "Alta recorrência e ticket médio agressivo — cada cliente novo compra muitas vezes.",
  },
  {
    step: "04",
    title: "Lifestyle & beleza",
    Icon: Sparkles,
    why: "Estética manda no clique — conteúdo bem produzido gera desejo e agendamento imediato.",
  },
  {
    step: "05",
    title: "Barbearias & estética",
    Icon: Scissors,
    why: "Serviço 100% local e recorrente — GMN + Instagram enchem a agenda da semana.",
  },
  {
    step: "06",
    title: "Provedores de internet",
    Icon: Wifi,
    why: "Decisão feita por bairro e reputação — dominar a região no digital = migração de plano.",
  },
  {
    step: "07",
    title: "Automóveis & concessionárias",
    Icon: Car,
    why: "Ticket alto compensa ciclo mais longo — um único lead qualificado já paga a operação.",
  },
  {
    step: "08",
    title: "Lanches & food service",
    Icon: UtensilsCrossed,
    why: "Pizza, hambúrguer, açaí, pastel, cachorro-quente — fome + delivery a um clique = pedido no mesmo dia.",
  },
];

function Niches() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Mercado & performance</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          Nichos com maior <br className="hidden sm:block" />
          <span className="italic text-primary">aderência estratégica</span>
        </h2>
        <p className="mt-6 max-w-2xl border-l border-white/10 pl-6 text-base font-light leading-relaxed text-muted-foreground">
          Onde o método costuma performar melhor. <span className="text-foreground/80">Todos os nichos funcionam</span> — o que muda é a proporção e a velocidade do crescimento, de acordo com ticket, recorrência e nível de decisão do público.
        </p>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {niches.map((n, i) => (
            <div
              key={n.title}
              className="group relative flex flex-col overflow-hidden border border-white/5 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04]"
              style={{ animation: `slideUp 0.5s ease ${i * 0.05}s both` }}
            >
              <div className="pointer-events-none absolute right-3 top-3 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-30">
                <n.Icon size={80} strokeWidth={1} className="text-primary" />
              </div>
              <span className="relative z-10 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                {n.step}.
              </span>
              <div className="relative z-10 mt-10 flex flex-1 flex-col">
                <h3
                  className="text-lg font-light leading-tight text-foreground"
                  style={{ fontFamily: SERIF }}
                >
                  {n.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-muted-foreground">
                  {n.why}
                </p>
                <div className="mt-4 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}

          {/* Full-width featured card */}
          <div className="group relative mt-1 flex flex-col items-start justify-between gap-5 border border-primary/25 bg-primary/[0.04] p-7 transition-all duration-500 hover:bg-primary/[0.08] sm:col-span-2 sm:flex-row sm:items-center lg:col-span-4">
            <div className="flex items-start gap-6 sm:items-center">
              <span className="mt-2 font-mono text-[10px] tracking-[0.25em] text-primary/70 sm:mt-0">
                09.
              </span>
              <div>
                <h3
                  className="text-2xl font-light leading-tight text-foreground sm:text-3xl"
                  style={{ fontFamily: SERIF }}
                >
                  Prestadores de serviço locais
                </h3>
                <p className="mt-2 max-w-xl text-sm font-light text-muted-foreground">
                  Encanador, eletricista, chaveiro, dedetizador, assistência técnica — quem precisa procura agora, e quem aparece primeiro fecha.
                </p>
              </div>
            </div>
            <a
              href={WA_COMBO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-3 text-primary transition-transform duration-500 group-hover:translate-x-1"
            >
              <Wrench size={16} className="opacity-70" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                Meu nicho serve?
              </span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ---------------- Testimonials ---------------- */

const testimonials = [
  {
    tag: "B",
    name: "Brand Estilo Único",
    role: "Moda & varejo",
    quote:
      "A prospecção mudou o jogo pra minha loja. Trouxe pessoas realmente interessadas pro perfil sem que eu precisasse passar o dia no celular. Com esse movimento constante, o engajamento cresceu de verdade.",
  },
  {
    tag: "S",
    name: "Serginho Marçal Automóveis",
    role: "Automóveis",
    quote:
      "O atendimento ficou muito mais profissional e a base de seguidores passou a ser de gente que realmente pode comprar. Pra quem é lojista e quer vender sem perder tempo, funciona.",
  },
  {
    tag: "C",
    name: "Claudiane — Loja LIVE!",
    role: "Moda",
    quote:
      "A base de seguidores passou a ter muito mais o perfil da nossa marca. Não é só número: são clientes que compravam na concorrência e hoje compram com a gente.",
  },
  {
    tag: "A",
    name: "Agreste Link",
    role: "Provedor de internet",
    quote:
      "Deu um ritmo novo pro nosso provedor. O novo seguidor recebe o link da promoção no Direct e já cai direto no nosso site. O cliente chega decidido a mudar pra nossa internet.",
  },
];

function Testimonials() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Depoimentos</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          O que os clientes contam.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border border-white/10 p-7 transition-transform hover:-translate-y-1"
            >
              <blockquote
                className="text-lg font-light leading-relaxed text-foreground/90"
                style={{ fontFamily: SERIF }}
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary/40 font-mono text-xs uppercase text-primary">
                  {t.tag}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-light text-foreground">{t.name}</p>
                  <p className="truncate font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "Como funciona a gestão de Instagram da RDG?",
    a: "Fazemos prospecção humanizada de perfis do seu público-alvo, respondemos Direct de forma estratégica, cuidamos da proporção Seguidores × Seguindo e enviamos relatório mensal com os principais indicadores do perfil.",
  },
  {
    q: "É seguro? Meu perfil pode ser bloqueado?",
    a: "Sim, é seguro. Toda interação respeita as diretrizes do Instagram, com ritmo humano, limites e pausas. Operamos sem histórico de bloqueios em contas ativas.",
  },
  {
    q: "Posso continuar postando e usando meu perfil normalmente?",
    a: "Pode. Você continua postando, respondendo Direct e usando o app como sempre. A operação acontece em segundo plano, sem interferir na sua rotina.",
  },
  {
    q: "Quantos seguidores novos posso esperar por mês?",
    a: "A faixa média observada em clientes ativos varia entre 100 e 1000+ novos seguidores por mês, mas isso depende diretamente do seu nicho, da região, da maturidade do perfil e da frequência de postagem. Não trabalhamos com promessa de número fixo.",
  },
  {
    q: "Vou receber relatórios do desempenho?",
    a: "Sim. Todo mês você recebe um relatório com crescimento de seguidores, alcance, impressões, interações no Direct, cliques na bio e comparativo mês a mês.",
  },
  {
    q: "Por que a proporção Seguidores × Seguindo importa?",
    a: "É uma das primeiras leituras que um visitante faz sobre a sua credibilidade. Fazemos limpeza contínua dos perfis que não retribuem, mantendo a proporção saudável e transmitindo autoridade real.",
  },
  {
    q: "Também criam site e cuidam do Google Meu Negócio?",
    a: "Sim. Temos pacotes que combinam gestão de Instagram, criação de site exclusivo e cadastro/otimização do Google Meu Negócio — para o seu cliente te encontrar por qualquer caminho: feed, busca do Google ou Maps.",
  },
  {
    q: "Atendem qualquer nicho?",
    a: "Trabalhamos com moda, academias, suplementos, lifestyle, barbearias, provedores de internet, automóveis e prestadores de serviço locais — entre outros. Se o seu nicho não estiver na lista, fale com a gente pelo WhatsApp.",
  },
  {
    q: "Como funciona o investimento?",
    a: "O orçamento é personalizado para cada cliente, de acordo com o volume de trabalho, os canais envolvidos (só Instagram, ou combo com site e Google Meu Negócio) e o nível de estratégia. Fale com a gente no WhatsApp para receber uma proposta.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
        <h2
          className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          O que costumam perguntar.
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-light leading-snug" style={{ fontFamily: SERIF }}>
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 text-sm font-light leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionEyebrow>Vamos conversar</SectionEyebrow>
        <h2
          className="mt-4 text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          Cada operação é montada sob medida.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
          Conte pra gente sobre o seu nicho, sua região e seus objetivos. Em
          uma conversa rápida no WhatsApp desenhamos a operação certa e
          enviamos um orçamento personalizado — sem pacote engessado.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary px-7 py-3.5 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
          >
            Solicitar orçamento
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WA_CONVERSA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Só tirar dúvidas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mini Footer ---------------- */

function MiniFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Desenvolvido por
        </p>
        <a
          href="https://rdgdigital.com.br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="RDG Digital"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src={LOGO_URL}
            alt="RDG Digital"
            className="h-10 w-auto select-none"
            draggable={false}
            style={{
              filter:
                "drop-shadow(0 4px 14px color-mix(in oklab, var(--primary) 40%, transparent))",
            }}
          />
        </a>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
      {children}
    </p>
  );
}

/* ---------------- Phone mockups ---------------- */

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19] w-full rounded-[36px] border border-white/15 bg-black p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#0B0B0B]">
        {children}
      </div>
    </div>
  );
}

function IGTopBar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-3 pt-8 pb-2">
      <span
        className="text-[13px] font-medium text-foreground"
        style={{ fontFamily: SERIF, fontStyle: "italic" }}
      >
        {title}
      </span>
      <MoreHorizontal size={14} className="text-foreground/60" />
    </div>
  );
}

function IGBottomBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/10 bg-[#0B0B0B] py-2.5">
      {[Home, Search, PlusSquare, Heart, User].map((I, i) => (
        <I key={i} size={14} className={i === 0 ? "text-primary" : "text-foreground/50"} />
      ))}
    </div>
  );
}

function ProfileScreen() {
  const posts = [igPost5, igPost1, igPost4, igPost2, igPost6, igPost3, igPost1, igPost4, igPost5];
  const highlights: { label: string; img: string }[] = [
    { label: "novidades", img: igPost1 },
    { label: "looks", img: igPost5 },
    { label: "bastidores", img: igPost3 },
    { label: "clientes", img: igPost6 },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden">
      <IGTopBar title="studio.serena" />
      <div className="px-3 pt-3 pb-16">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-14 w-14 rounded-full border-2 border-primary p-0.5">
              <img
                src={igAvatar}
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <BadgeCheck size={12} className="absolute -right-0.5 -bottom-0.5 rounded-full bg-black text-primary" />
          </div>
          <div className="flex flex-1 justify-around text-center">
            {[
              ["128", "posts"],
              ["8.4k", "seguidores"],
              ["842", "seguindo"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="text-[11px] font-semibold text-foreground">{n}</p>
                <p className="text-[8px] uppercase tracking-wider text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 space-y-0.5">
          <p className="text-[10px] font-semibold text-foreground">Serena Studio · Moda autoral</p>
          <p className="text-[8.5px] leading-snug text-foreground/70">
            ✨ Peças atemporais em algodão e linho
          </p>
          <p className="text-[8.5px] leading-snug text-foreground/70">
            📍 Recife · envios para todo Brasil
          </p>
          <p className="text-[8.5px] leading-snug text-foreground/70">
            🕊 Coleção outono ↓
          </p>
          <p className="text-[8.5px] font-medium leading-snug text-primary">
            wa.me/serena
          </p>
        </div>

        {/* Story highlights */}
        <div className="mt-3 flex gap-3 overflow-hidden">
          {highlights.map((h) => (
            <div key={h.label} className="flex w-12 shrink-0 flex-col items-center gap-1">
              <div className="h-12 w-12 rounded-full border border-white/25 p-0.5">
                <img
                  src={h.img}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <p className="truncate text-[7px] text-foreground/70">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-2 flex items-center justify-around border-t border-white/10 pt-1.5">
          <span className="h-0.5 w-6 rounded bg-primary" />
        </div>

        {/* Grid */}
        <div className="mt-1.5 grid grid-cols-3 gap-0.5">
          {posts.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden bg-white/5"
              style={{ animation: `slideUp 0.5s ease ${i * 0.04}s both` }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {i % 4 === 1 && (
                <PlayCircle size={10} className="absolute right-1 top-1 text-white/90" />
              )}
            </div>
          ))}
        </div>
      </div>
      <IGBottomBar />
    </div>
  );
}

function FeedScreen() {
  return (
    <div className="relative h-full w-full">
      <IGTopBar title="Instagram" />
      <div className="px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full border border-primary/60 p-0.5">
            <img src={igAvatar} alt="" className="h-full w-full rounded-full object-cover" />
          </div>
          <div>
            <p className="text-[9px] font-semibold text-foreground">studio.serena</p>
            <p className="text-[7px] text-muted-foreground">perfil sugerido · público parecido</p>
          </div>
        </div>
        <div className="mt-2 aspect-square w-full overflow-hidden bg-white/5">
          <img src={igPost5} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="mt-2 flex items-center gap-3">
          <Heart size={13} className="text-primary animate-[pulseDot_1.4s_ease-in-out_infinite]" />
          <MessageCircle size={13} className="text-foreground/70" />
          <Send size={13} className="text-foreground/70" />
          <Bookmark size={13} className="ml-auto text-foreground/70" />
        </div>
        <p className="mt-1 text-[9px] text-foreground/80">
          <span className="font-semibold">seu.negocio</span> curtiu esta publicação
        </p>
        <p className="text-[8px] text-muted-foreground">via RDG · interação humana</p>
      </div>
      <IGBottomBar />
    </div>
  );
}


function DMScreen() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <IGTopBar title="Direct" />
      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
        <div className="h-7 w-7 rounded-full border border-primary/60 p-0.5">
          <img src={igPost2} alt="" className="h-full w-full rounded-full object-cover" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-foreground">novo.seguidor</p>
          <p className="text-[8px] text-primary">ativo agora</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden px-3 py-3">
        <div
          className="max-w-[85%] rounded-2xl rounded-tl-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] leading-snug text-foreground"
          style={{ animation: "slideUp 0.5s ease both" }}
        >
          Oi! Vi que você começou a acompanhar a gente 💛
        </div>
        <div
          className="max-w-[90%] rounded-2xl rounded-tl-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] leading-snug text-foreground"
          style={{ animation: "slideUp 0.5s ease 0.3s both" }}
        >
          Se quiser conhecer os lançamentos e a promoção do mês, é só clicar aqui 👇
        </div>
        <div
          className="max-w-[90%] rounded-2xl rounded-tl-md border border-primary/40 bg-primary/10 px-3 py-2 text-[10px] font-medium text-primary"
          style={{ animation: "slideUp 0.5s ease 0.6s both" }}
        >
          → wa.me/seunegocio
        </div>
        <div
          className="ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-primary px-3 py-2 text-[10px] font-medium text-[#0A0A0A]"
          style={{ animation: "slideUp 0.5s ease 0.9s both" }}
        >
          Quero ver!
        </div>
      </div>
      <div className="border-t border-white/10 px-3 py-2">
        <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
          <span
            className="text-[9px] text-muted-foreground animate-[typing_1.4s_ease-in-out_infinite]"
          >
            digitando…
          </span>
          <Send size={12} className="ml-auto text-primary" />
        </div>
      </div>
    </div>
  );
}

function InsightsScreen() {
  const bars = [40, 55, 48, 65, 72, 60, 80];
  return (
    <div className="relative h-full w-full">
      <IGTopBar title="Insights" />
      <div className="px-3 py-3">
        <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
          Últimos 7 dias
        </p>
        <p
          className="mt-1 text-2xl font-light text-primary"
          style={{ fontFamily: SERIF }}
        >
          +324
        </p>
        <p className="text-[9px] text-muted-foreground">contas alcançadas</p>

        <div className="mt-4 flex h-20 items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 origin-bottom rounded-t bg-primary/70"
              style={{
                height: `${h}%`,
                animation: `barGrow 0.9s ease ${i * 0.08}s both`,
              }}
            />
          ))}
        </div>

        <div className="mt-4 space-y-2 border-t border-white/10 pt-3">
          {[
            [BarChart3, "Alcance", "+38%"],
            [MessageCircle, "Direct", "+52%"],
            [Heart, "Curtidas", "+21%"],
          ].map(([I, k, v], i) => {
            const Icon = I as typeof BarChart3;
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon size={11} className="text-primary" />
                <span className="text-[9px] text-foreground/80">{k as string}</span>
                <span className="ml-auto font-mono text-[9px] text-primary">
                  {v as string}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <IGBottomBar />
    </div>
  );
}
