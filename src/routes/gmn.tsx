import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { waLink, LOGO_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  MapPin,
  Star,
  Phone,
  Navigation,
  Camera,
  MessageCircle,
  Search,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Clock,
  Sparkles,
  Compass,
  Users,
  Instagram,
  Globe,
  BadgeCheck,
  Check,
  X,
  Quote,
} from "lucide-react";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";
const ACCENT = "#4285F4";

const TITLE = "Google Meu Negócio para negócios locais — RDG Digital";
const DESCRIPTION =
  "Ficha otimizada, gestão de avaliações e postagens semanais. Apareça no topo do Maps e das buscas 'perto de mim', com cliente decidido a comprar.";
const CANONICAL_URL = `${BASE_URL}/gmn`;

const WA_ORCAMENTO = waLink(
  "Olá, RDG! Quero um orçamento personalizado do serviço de Google Meu Negócio."
);
const WA_CONVERSA = waLink(
  "Olá, RDG! Gostaria de tirar dúvidas sobre o serviço de Google Meu Negócio."
);
const WA_COMBO = waLink(
  "Olá, RDG! Tenho interesse no combo Instagram + Site + Google Meu Negócio."
);

const FAQS = [
  {
    q: "Em quanto tempo começo a aparecer no topo?",
    a: "Depende da concorrência do seu bairro e da maturidade da ficha. Ajustes iniciais surtem efeito em 2 a 6 semanas; o topo do pack local costuma vir entre o 2º e o 4º mês de gestão contínua.",
  },
  {
    q: "Preciso ter loja física?",
    a: "Sim, o Google Meu Negócio exige um endereço verificável. Prestadores de serviço que vão até o cliente também podem cadastrar 'área de atendimento' em vez de exibir o endereço.",
  },
  {
    q: "Vocês respondem as avaliações negativas?",
    a: "Sim. Toda avaliação é respondida — com tom da marca, empatia e sem confronto. Uma resposta bem feita converte visitante indeciso em cliente.",
  },
  {
    q: "E se eu não tiver muitas fotos?",
    a: "Orientamos exatamente quais fotos tirar (fachada, interior, equipe, produtos) e como enviá-las. Para negócios que precisam, indicamos parceiros locais de fotografia.",
  },
  {
    q: "Vocês garantem 1º lugar no Google?",
    a: "Ninguém sério garante posição — nem nós, nem o Google. O que garantimos é execução técnica, monitoramento constante e transparência total no relatório mensal.",
  },
  {
    q: "Posso contratar junto com Instagram e site?",
    a: "Sim, e é o cenário ideal. O combo dos 3 canais tem condição especial — clique em 'Quero presença nos 3 canais' e falamos com você.",
  },
  {
    q: "Quanto custa o serviço de Google Meu Negócio?",
    a: "O investimento começa a partir de R$ 297/Implementação + mensalidade a combinar e é ajustado conforme concorrência da região, número de unidades e volume de avaliações. Enviamos o orçamento personalizado em até 24h no WhatsApp.",
  },
];

const JSONLD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const JSONLD_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gestão de Google Meu Negócio (Google Business Profile)",
  provider: {
    "@type": "LocalBusiness",
    name: "RDG Digital",
    url: BASE_URL,
    telephone: "+55 21 92007-8469",
    email: "contato@rdgdigital.com.br",
    areaServed: "BR",
  },
  areaServed: "BR",
  description: DESCRIPTION,
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: "397",
    availability: "https://schema.org/InStock",
    url: CANONICAL_URL,
  },
};

export const Route = createFileRoute("/gmn")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(JSONLD_FAQ) },
      { type: "application/ld+json", children: JSON.stringify(JSONLD_SERVICE) },
    ],
  }),
  component: GMNPage,
});

function GMNPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] pb-24 text-foreground sm:pb-0">
      <FloatingIcons />
      <main className="relative">
        <Hero />
        <MetricsStrip />
        <SocialProof />
        <BeforeAfter />
        <HowItWorks />
        <Differentials />
        <Niches />
        <Objections />
        <Combo />
        <FAQ />
        <FinalCTA />
      </main>
      <MiniFooter />
      <StickyMobileCTA />
    </div>
  );
}

/* ---------------- Ambient icons ---------------- */
function FloatingIcons() {
  const items = [
    { Icon: MapPin, top: "10%", left: "6%", d: "0s", s: 22 },
    { Icon: Star, top: "22%", left: "88%", d: "1.2s", s: 20 },
    { Icon: Navigation, top: "48%", left: "4%", d: "0.6s", s: 24 },
    { Icon: Phone, top: "70%", left: "92%", d: "1.8s", s: 18 },
    { Icon: Compass, top: "86%", left: "10%", d: "0.4s", s: 22 },
    { Icon: Sparkles, top: "36%", left: "94%", d: "2.2s", s: 16 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      {items.map((it, i) => (
        <it.Icon
          key={i}
          size={it.s}
          className="absolute animate-[floatY_8s_ease-in-out_infinite]"
          style={{ top: it.top, left: it.left, animationDelay: it.d, color: `${ACCENT}30` }}
        />
      ))}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); opacity: .35; }
          50% { transform: translateY(-18px); opacity: .8; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: .4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes radar {
          0% { transform: scale(0.4); opacity: .8; }
          100% { transform: scale(2.2); opacity: 0; }
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
          <span
            className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ borderColor: `${ACCENT}55`, color: ACCENT }}
          >
            <MapPin size={12} /> Google Meu Negócio
          </span>

          <h1
            className="mt-8 text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-[64px]"
            style={{ fontFamily: SERIF }}
          >
            Quando alguém busca
            <br />
            <em className="not-italic" style={{ color: ACCENT }}>
              perto de mim,
            </em>{" "}
            você aparece primeiro.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg lg:mx-0">
            Ficha profissional, fotos que vendem, avaliações respondidas e
            postagens semanais. Seu negócio ganha posição no Maps, no pack
            local e nas buscas do Google — trazendo gente decidida a comprar
            agora.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Quero um orçamento
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
              style={{ borderColor: `${ACCENT}33` }}
            >
              Ver o método
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <ShieldCheck size={12} style={{ color: ACCENT }} />
            Gestão dentro das diretrizes do Google
          </p>
        </div>

        {/* Google Business Profile mock */}
        <div className="mx-auto w-full max-w-[360px]">
          <BusinessCard />
        </div>
      </div>
    </section>
  );
}

function BusinessCard() {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
      {/* map preview — estilo Google Maps (dark) */}
      <div
        className="relative h-40 overflow-hidden rounded-md border border-white/10"
        style={{ background: "#1b1f2a" }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 240 180"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="240" height="180" fill="#1b1f2a" />

          {/* parks */}
          <path d="M0,120 Q30,105 55,118 L70,150 L0,168 Z" fill="#1f3a2a" />
          <path d="M175,0 L240,0 L240,55 Q205,52 188,38 Z" fill="#1f3a2a" />

          {/* river */}
          <path
            d="M-10,70 C40,58 70,95 120,80 S200,55 250,72 L250,88 C200,72 160,105 120,96 S40,74 -10,86 Z"
            fill="#0f2038"
          />

          {/* blocks */}
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
            stroke={ACCENT}
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span
            className="absolute inset-0 rounded-full"
            style={{ background: `${ACCENT}44`, animation: "radar 1.8s ease-out infinite" }}
          />
          <span
            className="relative grid h-10 w-10 place-items-center rounded-full"
            style={{ background: ACCENT, boxShadow: `0 0 20px ${ACCENT}` }}
          >
            <MapPin size={18} color="#fff" />
          </span>
        </div>

        {/* compass */}
        <div
          className="absolute right-2 bottom-2 grid h-5 w-5 place-items-center rounded-full border font-mono text-[8px]"
          style={{ borderColor: `${ACCENT}55`, background: "rgba(11,18,32,0.7)", color: ACCENT }}
        >
          N
        </div>

        {/* scale bar */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1">
          <span className="h-[2px] w-8 bg-white/60" />
          <span className="font-mono text-[8px] text-white/60">500 m</span>
        </div>

        <span
          className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full px-2 py-1 font-mono text-[9px]"
          style={{ background: `${ACCENT}20`, color: ACCENT, border: `1px solid ${ACCENT}55` }}
        >
          <span className="h-1 w-1 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
          top 3 · pack local
        </span>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-start gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold"
          style={{ background: `${ACCENT}22`, color: ACCENT, border: `1px solid ${ACCENT}55` }}
        >
          R
        </span>
        <div className="min-w-0">
          <h3
            className="truncate text-lg font-light leading-tight text-foreground"
            style={{ fontFamily: SERIF }}
          >
            RDG Barbearia · Centro
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm font-semibold" style={{ color: ACCENT }}>4,9</span>
            <div className="flex items-center gap-[1px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={11} className="fill-current" style={{ color: ACCENT }} />
              ))}
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">(214 avaliações)</span>
          </div>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Barbearia · Aberto agora · fecha 20:00
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { Icon: Navigation, l: "Rotas" },
          { Icon: Phone, l: "Ligar" },
          { Icon: Globe, l: "Site" },
        ].map((b) => (
          <button
            key={b.l}
            type="button"
            className="flex flex-col items-center gap-1 border border-white/10 py-2 text-[10px] uppercase tracking-widest transition-colors hover:bg-white/[0.03]"
            style={{ color: ACCENT }}
          >
            <b.Icon size={14} />
            <span>{b.l}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Metrics ---------------- */
function MetricsStrip() {
  const items = [
    { kind: "range" as const, from: 30, to: 300, suffix: "%", l: "aumento em ligações¹" },
    { kind: "text" as const, k: "top 3", l: "meta no pack local" },
    { kind: "text" as const, k: "Semanal", l: "postagens e novidades" },
    { kind: "text" as const, k: "100%", l: "avaliações respondidas" },
  ];
  return (
    <section className="border-b border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.l}
            className="group relative bg-[#0A0A0A] p-6 text-center transition-colors hover:bg-white/[0.02]"
            style={{ animation: `slideUp 0.6s ease ${i * 0.12}s both` }}
          >
            <span
              className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full"
              style={{ background: ACCENT, animation: "pulseDot 1.6s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
            />
            <p
              className="text-2xl font-light leading-none sm:text-3xl"
              style={{ fontFamily: SERIF, color: ACCENT }}
            >
              {it.kind === "range" ? (
                <>
                  <CountUp to={it.from} delay={i * 120} /> a{" "}
                  <CountUp to={it.to} delay={i * 120 + 200} />
                  {it.suffix}
                </>
              ) : (
                <span className="inline-block transition-transform group-hover:scale-110">{it.k}</span>
              )}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {it.l}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-6xl px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
        ¹ Faixa média observada em fichas otimizadas nos primeiros 90 dias. Resultado real depende do nicho, região e concorrência local.
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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const t0 = performance.now() + delay;
          const step = (t: number) => {
            const p = Math.max(0, Math.min(1, (t - t0) / duration));
            setN(Math.round(to * p));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, delay, duration]);
  return <span ref={ref}>{n}</span>;
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      Icon: Search,
      title: "Diagnóstico da ficha",
      desc: "Auditoria completa: categoria, palavras-chave, fotos, horários, atributos, produtos e concorrência local do seu bairro.",
    },
    {
      n: "02",
      Icon: Camera,
      title: "Otimização & fotos",
      desc: "Reescrevemos descrição, ajustamos categorias secundárias, subimos fotos profissionais e configuramos serviços e produtos.",
    },
    {
      n: "03",
      Icon: MessageCircle,
      title: "Avaliações & interação",
      desc: "Respondemos cada avaliação com tom da marca, criamos fluxo de pedido de review pós-atendimento e monitoramos reputação.",
    },
    {
      n: "04",
      Icon: TrendingUp,
      title: "Postagens & relatório",
      desc: "Postagens semanais (ofertas, novidades, eventos) e relatório mensal com buscas, ligações, rotas e cliques no site.",
    },
  ];
  return (
    <section id="como-funciona" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Método de gestão</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          Do <span className="italic" style={{ color: ACCENT }}>invisível</span> ao{" "}
          <span style={{ color: ACCENT }}>topo do Maps.</span>
        </h2>
        <p className="mt-6 max-w-2xl border-l border-white/10 pl-6 text-base font-light leading-relaxed text-muted-foreground">
          Quatro frentes rodando todo mês, sem promessas mágicas — só o
          trabalho contínuo que o algoritmo do Google recompensa.
        </p>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative flex flex-col overflow-hidden border border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:bg-white/[0.04]"
              style={{ animation: `slideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <div className="pointer-events-none absolute right-3 top-3 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-30">
                <s.Icon size={80} strokeWidth={1} style={{ color: ACCENT }} />
              </div>
              <span className="relative z-10 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                {s.n}.
              </span>
              <div className="relative z-10 mt-10 flex flex-1 flex-col">
                <h3
                  className="text-lg font-light leading-tight text-foreground"
                  style={{ fontFamily: SERIF }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div
                  className="mt-4 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: ACCENT }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentials ---------------- */
function Differentials() {
  const items = [
    {
      Icon: MapPin,
      title: "Foco no pack local",
      desc: "Trabalhamos os 3 fatores que o Google usa pra ranquear: relevância, distância e destaque. Nada de truque, tudo dentro das diretrizes.",
    },
    {
      Icon: Star,
      title: "Reputação real",
      desc: "Respondemos todas as avaliações — as boas e as ruins. Cliente insatisfeito é oportunidade de mostrar postura ao próximo visitante.",
    },
    {
      Icon: Camera,
      title: "Fotos que vendem",
      desc: "Recomendamos as fotos certas e organizamos por categorias: fachada, interior, equipe, produtos e ambiente. Visual profissional gera clique.",
    },
    {
      Icon: Clock,
      title: "Postagens semanais",
      desc: "Ofertas, novidades e eventos toda semana. Perfil ativo sobe no ranking e cliente entende que o negócio está funcionando de verdade.",
    },
  ];
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Diferenciais</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Uma operação técnica, <em className="italic" style={{ color: ACCENT }}>não um perfil abandonado.</em>
        </h2>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group flex gap-5 border border-white/10 p-7 transition-colors hover:bg-white/[0.02]"
              style={{ animation: `slideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center border transition-transform group-hover:scale-110"
                style={{ borderColor: `${ACCENT}55` }}
              >
                <it.Icon size={18} style={{ color: ACCENT }} />
              </div>
              <div>
                <h3
                  className="text-xl font-light leading-tight text-foreground"
                  style={{ fontFamily: SERIF }}
                >
                  {it.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Niches ---------------- */
function Niches() {
  const niches = [
    { n: "Barbearias & estética", hot: true },
    { n: "Restaurantes & lanches", hot: true },
    { n: "Academias & studios", hot: false },
    { n: "Clínicas & consultórios", hot: false },
    { n: "Provedores de internet", hot: false },
    { n: "Prestadores de serviço", hot: false },
    { n: "Automóveis & oficinas", hot: false },
    { n: "Comércio de bairro", hot: false },
  ];
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Quem se beneficia</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          Todo negócio que <em className="italic" style={{ color: ACCENT }}>depende de cliente da região.</em>
        </h2>
        <p className="mt-6 max-w-2xl border-l border-white/10 pl-6 text-base font-light leading-relaxed text-muted-foreground">
          Se você vende para quem está no bairro, na cidade ou passa em frente
          — o Google é onde a decisão acontece. Nichos marcados com{" "}
          <span style={{ color: ACCENT }}>●</span> costumam ver resultado mais rápido.
        </p>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {niches.map((item, i) => (
            <div
              key={item.n}
              className="group relative flex items-center gap-3 border p-5 transition-colors"
              style={{
                animation: `slideUp 0.5s ease ${i * 0.05}s both`,
                borderColor: item.hot ? `${ACCENT}66` : "rgba(255,255,255,0.1)",
                background: item.hot ? `${ACCENT}0d` : "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center border"
                style={{ borderColor: `${ACCENT}55` }}
              >
                <MapPin size={13} style={{ color: ACCENT }} />
              </div>
              <p className="text-sm font-light leading-tight text-foreground" style={{ fontFamily: SERIF }}>
                {item.n}
              </p>
              {item.hot && (
                <span
                  className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
                  style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Combo ---------------- */
function Combo() {
  const stack = [
    { Icon: Instagram, name: "Instagram", role: "Atração e prospecção" },
    { Icon: Globe, name: "Site exclusivo", role: "Conversão e autoridade" },
    { Icon: MapPin, name: "Google Meu Negócio", role: "Captura da demanda pronta" },
  ];
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <SectionEyebrow>Combo omnichannel</SectionEyebrow>
          <h2
            className="mt-4 text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: SERIF }}
          >
            GMN sozinho funciona.{" "}
            <em className="italic" style={{ color: ACCENT }}>
              Combinado, acelera.
            </em>
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Instagram atrai, o site converte, o Google Meu Negócio captura
            quem já decidiu comprar. Um ecossistema onde cada canal cumpre
            um papel — e o resultado se multiplica.
          </p>
          <a
            href={WA_COMBO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
            style={{ background: ACCENT }}
          >
            Quero presença nos 3 canais
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid gap-3">
          {stack.map((s, i) => (
            <div
              key={s.name}
              className="group flex items-center gap-4 border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
              style={{ animation: `slideUp 0.5s ease ${i * 0.1}s both` }}
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                0{i + 1}.
              </span>
              <div
                className="flex h-11 w-11 items-center justify-center border"
                style={{ borderColor: `${ACCENT}55` }}
              >
                <s.Icon size={18} style={{ color: ACCENT }} />
              </div>
              <div>
                <h3 className="text-lg font-light text-foreground" style={{ fontFamily: SERIF }}>
                  {s.name}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = FAQS;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
        <h2
          className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Antes de <em className="italic" style={{ color: ACCENT }}>tirar dúvidas no WhatsApp.</em>
        </h2>

        <div className="mt-12 border-t border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground"
                >
                  <span
                    className="text-lg font-light leading-snug text-foreground sm:text-xl"
                    style={{ fontFamily: SERIF }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform"
                    style={{ color: ACCENT, transform: isOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-10 text-sm font-light leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href={WA_CONVERSA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
            style={{ borderColor: `${ACCENT}33` }}
          >
            <MessageCircle size={14} /> Ainda tenho dúvidas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT}22, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <SectionEyebrow>Pronto para aparecer</SectionEyebrow>
        <h2
          className="mt-4 text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          O seu cliente já está buscando.{" "}
          <em className="italic" style={{ color: ACCENT }}>
            Você aparece?
          </em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
          Um orçamento em minutos, sem compromisso. Se fizer sentido para o
          seu negócio, começamos no mês seguinte.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
            style={{ background: ACCENT }}
          >
            Quero um orçamento
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WA_COMBO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] transition-colors"
            style={{ borderColor: `${ACCENT}55`, color: ACCENT }}
          >
            <BadgeCheck size={14} /> Combo com Instagram + Site
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mini footer ---------------- */
function MiniFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
        <a href="/" className="inline-flex items-center gap-2">
          <img src={LOGO_URL} alt="RDG Digital" className="h-6 w-auto" />
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} RDG Digital · Google Meu Negócio
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em]"
      style={{ borderColor: `${ACCENT}44`, color: ACCENT }}
    >
      <span className="h-1 w-1 rounded-full" style={{ background: ACCENT }} />
      {children}
    </span>
  );
}

/* ---------------- Sticky mobile CTA ---------------- */
function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0A]/95 p-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={WA_ORCAMENTO}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 px-4 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A]"
        style={{ background: ACCENT }}
      >
        <MessageCircle size={14} />
        Auditoria gratuita no WhatsApp
      </a>
    </div>
  );
}

/* ---------------- Social proof ---------------- */
function SocialProof() {
  const items = [
    {
      quote:
        "Em 3 meses passamos de invisíveis para o top 3 do 'barbearia perto de mim'. As ligações praticamente dobraram.",
      name: "Rafael Mendes",
      role: "Barbearia Old School · Niterói/RJ",
      metric: "+118% ligações",
    },
    {
      quote:
        "A ficha estava abandonada. Depois da otimização e das postagens semanais, viramos referência no bairro.",
      name: "Camila Duarte",
      role: "Studio Pilates Reforma · Tijuca/RJ",
      metric: "+214% rotas",
    },
    {
      quote:
        "Resposta em cada avaliação, fotos profissionais e relatório mensal. Sério e sem enrolação.",
      name: "Diego Barros",
      role: "Hamburgueria Fogo Alto · São Gonçalo/RJ",
      metric: "4,9 ★ (312 reviews)",
    },
  ];
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Prova social</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Negócios locais que <em className="italic" style={{ color: ACCENT }}>saíram do fim da página.</em>
        </h2>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {items.map((it, i) => (
            <figure
              key={it.name}
              className="relative flex flex-col border border-white/10 bg-white/[0.02] p-6"
              style={{ animation: `slideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <Quote size={20} style={{ color: `${ACCENT}88` }} />
              <blockquote className="mt-4 text-sm font-light leading-relaxed text-foreground/85">
                “{it.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-light text-foreground" style={{ fontFamily: SERIF }}>
                      {it.name}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {it.role}
                    </p>
                  </div>
                  <span
                    className="shrink-0 border px-2 py-1 font-mono text-[9px] uppercase tracking-widest"
                    style={{ borderColor: `${ACCENT}55`, color: ACCENT }}
                  >
                    {it.metric}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Depoimentos de clientes RDG Digital · resultados individuais variam por nicho e região.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Before / after ---------------- */
function BeforeAfter() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Antes & depois</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          A diferença entre <em className="italic text-white/50">sumir</em> e{" "}
          <em className="italic" style={{ color: ACCENT }}>aparecer.</em>
        </h2>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {/* Before */}
          <div className="relative border border-white/10 bg-white/[0.02] p-6">
            <span className="inline-flex items-center gap-2 border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <X size={11} /> Antes
            </span>
            <div className="mt-5 space-y-3">
              {[
                { r: "12º", n: "Concorrente A", g: false },
                { r: "13º", n: "Concorrente B", g: false },
                { r: "14º", n: "Seu negócio", me: true },
              ].map((row) => (
                <div
                  key={row.n}
                  className={`flex items-center gap-3 border p-3 ${
                    row.me ? "border-white/20 bg-white/[0.04]" : "border-white/5"
                  }`}
                >
                  <span className="w-8 font-mono text-[11px] text-muted-foreground">{row.r}</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                    <MapPin size={11} className="text-white/60" />
                  </span>
                  <span
                    className={`text-sm font-light ${row.me ? "text-foreground" : "text-muted-foreground"}`}
                    style={{ fontFamily: SERIF }}
                  >
                    {row.n}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Fora do pack local · ninguém encontra
            </p>
          </div>

          {/* After */}
          <div
            className="relative border p-6"
            style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}08` }}
          >
            <span
              className="inline-flex items-center gap-2 border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ borderColor: `${ACCENT}66`, color: ACCENT }}
            >
              <Check size={11} /> Depois
            </span>
            <div className="mt-5 space-y-3">
              {[
                { r: "1º", n: "Seu negócio", me: true },
                { r: "2º", n: "Concorrente A", me: false },
                { r: "3º", n: "Concorrente B", me: false },
              ].map((row) => (
                <div
                  key={row.n}
                  className="flex items-center gap-3 border p-3"
                  style={{
                    borderColor: row.me ? `${ACCENT}66` : "rgba(255,255,255,0.08)",
                    background: row.me ? `${ACCENT}14` : "transparent",
                  }}
                >
                  <span
                    className="w-8 font-mono text-[11px] font-semibold"
                    style={{ color: row.me ? ACCENT : "rgb(148,163,184)" }}
                  >
                    {row.r}
                  </span>
                  <span
                    className="grid h-6 w-6 place-items-center rounded-full"
                    style={{ background: row.me ? ACCENT : "rgba(255,255,255,0.1)" }}
                  >
                    <MapPin size={11} color={row.me ? "#fff" : "rgba(255,255,255,0.6)"} />
                  </span>
                  <span
                    className="text-sm font-light text-foreground"
                    style={{ fontFamily: SERIF }}
                  >
                    {row.n}
                  </span>
                  {row.me && (
                    <span
                      className="ml-auto font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: ACCENT }}
                    >
                      Pack local
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
              Top 3 · cliente decidido chega até você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Objections ---------------- */
function Objections() {
  const items = [
    {
      q: "“Já tenho o perfil, é só cadastrar…”",
      a: "Cadastrar é 5% do trabalho. Ranquear no pack local exige categorias certas, palavras-chave na descrição, produtos, atributos, postagens semanais e resposta a avaliações. Perfil abandonado não vende.",
    },
    {
      q: "“Meu nicho não funciona no Google.”",
      a: "Todo negócio que atende cliente local funciona — muda a velocidade. Fazemos auditoria gratuita da sua ficha e mostramos o volume real de buscas na sua região antes de você decidir.",
    },
    {
      q: "“Achei caro / prefiro fazer eu mesmo.”",
      a: "A partir de R$ 297, com relatório e gestão contínua. Custa menos do que uma campanha paga travada — e o cliente que chega pelo Maps já vem com intenção de comprar hoje.",
    },
    {
      q: "“Vou esperar mais um pouco.”",
      a: "Cada mês fora do top 3 é cliente entrando na porta do concorrente. Autoridade no Google se constrói com tempo — quanto antes começar, mais barato fica ranquear.",
    },
  ];
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>Objeções honestas</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          O que quase todo cliente <em className="italic" style={{ color: ACCENT }}>pergunta antes.</em>
        </h2>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.q}
              className="border border-white/10 bg-white/[0.02] p-6"
              style={{ animation: `slideUp 0.5s ease ${i * 0.06}s both` }}
            >
              <p className="text-lg font-light text-foreground" style={{ fontFamily: SERIF }}>
                {it.q}
              </p>
              <div className="mt-3 flex gap-3 border-l pl-4" style={{ borderColor: `${ACCENT}55` }}>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {it.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Para quem não é */}
        <div className="mt-10 border border-white/10 bg-white/[0.02] p-8">
          <div className="flex items-center gap-3">
            <span
              className="grid h-8 w-8 place-items-center border"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT }}
            >
              <X size={14} />
            </span>
            <h3 className="text-xl font-light text-foreground" style={{ fontFamily: SERIF }}>
              Para quem <em className="italic" style={{ color: ACCENT }}>não é</em>
            </h3>
          </div>
          <ul className="mt-5 grid gap-2 text-sm font-light text-muted-foreground md:grid-cols-2">
            {[
              "Negócios 100% online sem atendimento local.",
              "Quem procura truque, bot ou avaliação falsa.",
              "Quem quer resultado em 48h e não em meses.",
              "Quem não pretende manter o serviço por, no mínimo, 90 dias.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: ACCENT }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

