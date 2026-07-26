import { useState, type CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { waLink, LOGO_URL, WHATSAPP_URL, CONTACT_EMAIL_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import { Logo } from "@/components/site/Logo";
import {
  Sparkles,
  Camera,
  Check,
  Zap,
  ShieldCheck,
  DollarSign,
  Users,
  Instagram,
  ArrowRight,
  ChevronDown,
  Bot,
  ExternalLink,
  Star,
  CheckCircle2,
  Lock,
  Flame,
  BookOpen,
  Award,
  MessageCircle,
  Layers,
  Globe,
  TrendingUp,
  Briefcase,
  UserCheck,
  Menu,
  X,
  Mail,
} from "lucide-react";

const TITLE = "Pack +700 Prompts IA para Ensaios Fotográficos no Instagram | RDG Digital";
const DESCRIPTION =
  "Gere fotos hiper-realistas de estúdio com IA para o seu perfil ou VENDA ensaios profissionais para terceiros. +700 Prompts Prontos + Botão Direto para o Google Gemini 100% Gratuito. Apenas R$ 29,90/ano.";
const CANONICAL_URL = `${BASE_URL}/prompts`;

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

const WA_COMPRAR = waLink(
  "Olá, RDG Digital! Quero adquirir o Pack com +700 Prompts de IA por apenas R$ 29,90/ano (Plano Anual) com acesso imediato!"
);
const WA_DUVIDAS = waLink(
  "Olá, RDG Digital! Tenho dúvidas sobre como funciona o Pack de +700 Prompts de IA para Ensaios."
);

const GEMINI_URL = "https://gemini.google.com";
const PROMPTS_TOOL_URL = "https://sites.rdgdigital.com.br/prompts";

export const Route = createFileRoute("/prompts")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: PromptsSalesPage,
});

function PromptsSalesPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] overflow-hidden">
      {/* Background Floating Ambient Icons (Exact RDG Style) */}
      <FloatingIcons />

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <MetricsStrip />
        <WhySection />
        <GeminiHighlightSection />
        <BusinessModelsSection />
        <CategoriesShowcase />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- Ambient floating icons (Matching RDG Style) ---------------- */
function FloatingIcons() {
  const items = [
    { Icon: Camera, top: "6%", left: "4%", d: "0s", s: 22 },
    { Icon: Sparkles, top: "22%", left: "92%", d: "1.2s", s: 20 },
    { Icon: Bot, top: "42%", left: "5%", d: "0.6s", s: 24 },
    { Icon: Flame, top: "65%", left: "91%", d: "1.8s", s: 20 },
    { Icon: Briefcase, top: "82%", left: "6%", d: "0.4s", s: 22 },
    { Icon: Zap, top: "32%", left: "94%", d: "2.2s", s: 18 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block overflow-hidden">
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
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: .3; }
          50% { transform: translateY(-16px) rotate(6deg); opacity: .75; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: .4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes slideUp {
          from { transform: translateY(12px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Header / Navbar (RDG Standard) ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RDG Digital" className="h-8 w-auto object-contain" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-l border-white/10 pl-3">
            pack<span className="text-primary font-bold">PROMPTS</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={PROMPTS_TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Sparkles size={12} className="text-primary" />
            Acessar Biblioteca
          </a>
          <a
            href={WA_COMPRAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
          >
            Comprar R$ 29,90/ano
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Section Eyebrow (RDG Standard) ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
      <Sparkles size={12} /> {children}
    </span>
  );
}

/* ---------------- Hero Section (RDG Standard) ---------------- */
function Hero() {
  return (
    <section className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>BIBLIOTECA & ENSAIOS IA</SectionEyebrow>

        <h1
          className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-[68px]"
          style={{ fontFamily: SERIF }}
        >
          Gere Ensaios Fotográficos com IA ou{" "}
          <em className="text-primary not-italic">venda para seus clientes.</em>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
          Acesse a maior biblioteca com <b>+700 Prompts Prontos</b> para criar fotos hiper-realistas de estúdio. Use no seu perfil para transmitir autoridade ou <b>venda ensaios de R$ 100 a R$ 300</b> usando o <b>Google Gemini 100% Gratuito</b>!
        </p>

        {/* Pricing tag */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3">
          <span className="text-xs text-muted-foreground line-through font-mono">De R$ 97,00</span>
          <span className="text-2xl font-light text-primary" style={{ fontFamily: SERIF }}>
            Por R$ 29,90<span className="text-xs font-sans text-muted-foreground">/ano</span>
          </span>
          <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
            Plano Anual
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WA_COMPRAR}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
          >
            Garantir +700 Prompts por R$ 29,90/ano
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={PROMPTS_TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Acessar Biblioteca
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <Lock size={12} className="text-primary" />
          Acesso Imediato · Direito de Uso Comercial · Suporte a Gemini e Midjourney
        </p>
      </div>
    </section>
  );
}

/* ---------------- Metrics Strip (RDG Standard) ---------------- */
function MetricsStrip() {
  const items = [
    { k: "+700", l: "Prompts Prontos e Testados" },
    { k: "100%", l: "Google Gemini Gratuito" },
    { k: "R$ 29,90", l: "Assinatura Anual" },
    { k: "1-Clique", l: "Cópia Instantânea" },
  ];

  return (
    <section className="border-b border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 px-0 md:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.l}
            className="group relative bg-[#0A0A0A] p-6 text-center transition-colors hover:bg-white/[0.02]"
          >
            <span
              className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-primary"
              style={{ animation: "pulseDot 1.6s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
            />
            <p
              className="text-3xl font-light leading-none text-primary sm:text-4xl"
              style={{ fontFamily: SERIF }}
            >
              {it.k}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {it.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why Section (RDG Standard) ---------------- */
function WhySection() {
  const features = [
    {
      n: "01",
      title: "Cópia Instantânea em 1-Clique",
      desc: "Nossos prompts vêm estruturados. Você busca pelo estilo ou profissão e copia com um único clique.",
    },
    {
      n: "02",
      title: "Fotografia com Textura de Pele Realista",
      desc: "Desenvolvidos especificamente para evitar fotos artificiais ou estouradas, garantindo nitidez e luz de estúdio.",
    },
    {
      n: "03",
      title: "Pronto para o Gemini (Zero Custo)",
      desc: "Acompanha botão direto para o Google Gemini gratuito. Você não precisa pagar mensalidade de Midjourney.",
    },
    {
      n: "04",
      title: "Direito de Uso Comercial e Revenda",
      desc: "Você pode prestar serviços de ensaios fotográficos de IA para terceiros e cobrar de R$ 100 a R$ 300 por ensaio.",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>DIFERENCIAIS EXCLUSIVOS</SectionEyebrow>
          <h2
            className="mt-6 text-3xl font-light leading-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Por Que Esta É a Biblioteca <em className="text-primary not-italic">Mais Completa do Mercado?</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.n}
              className="flex flex-col justify-between border border-white/10 bg-gradient-to-b from-[#14151F] to-[#111218] p-6 hover:border-primary/40 transition-all"
            >
              <div>
                <p className="text-3xl font-light text-primary" style={{ fontFamily: SERIF }}>
                  {f.n}
                </p>
                <h3 className="mt-4 text-base font-light text-foreground">{f.title}</h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gemini Highlight Section (RDG Standard) ---------------- */
function GeminiHighlightSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden border border-primary/30 bg-gradient-to-b from-[#14151F] to-[#0A0A0A] p-8 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                100% GRATUITO E SEM MENSALIDADES
              </span>
              <h2
                className="mt-4 text-3xl font-light leading-tight text-foreground sm:text-4xl"
                style={{ fontFamily: SERIF }}
              >
                Gere Suas Fotos Gratuitamente no <em className="text-primary not-italic">Google Gemini</em>
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                Você não precisa assinar softwares caros como Midjourney ou pagar mensalidades em dólar. Na nossa plataforma, integramos o atalho direto para o <b>Google Gemini Grátis</b>: cole o prompt e receba fotos com nível de revista em segundos!
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={GEMINI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[10px] font-light uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/40"
                >
                  Conhecer o Google Gemini <ExternalLink size={12} />
                </a>
                <a
                  href={WA_COMPRAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0A0A0A] transition-transform hover:scale-[1.02]"
                >
                  Garantir Pack +700 Prompts <ArrowRight size={12} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full border border-white/10 bg-[#0A0A0A] p-6 text-center">
                <p className="text-4xl font-light text-primary" style={{ fontFamily: SERIF }}>
                  Gemini
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Gerador 100% Grátis Integrado
                </p>
                <p className="mt-4 text-xs font-light text-muted-foreground leading-relaxed">
                  Copie o prompt na biblioteca e cole diretamente no chat do Gemini para gerar seus ensaios sem gastar nada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Business Models Section (RDG Standard) ---------------- */
function BusinessModelsSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>DUPLA OPORTUNIDADE</SectionEyebrow>
          <h2
            className="mt-6 text-3xl font-light leading-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Duas Formas Inteligentes de <em className="text-primary not-italic">Utilizar o Pack</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Card 1: Uso Próprio */}
          <div className="border border-white/10 bg-[#111218] p-8 flex flex-col justify-between hover:border-primary/40 transition-all">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                1. PARA SEU PRÓPRIO PERFIL
              </span>
              <h3 className="mt-4 text-2xl font-light text-foreground" style={{ fontFamily: SERIF }}>
                Transmita Autoridade Incontestável no Instagram
              </h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-muted-foreground">
                Fotos profissionais com iluminação de estúdio geram confiança imediata no seu público. Em vez de gastar R$ 1.500 em um ensaio tradicional, gere imagens suas de terno, vestidos sofisticados e cenários de alto padrão.
              </p>

              <ul className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Fotos de perfil marcantes e destaques
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Cenários corporativos, escritórios e viagens
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Economia total de tempo e recursos
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Ideal para:</span>
              <p className="text-xs font-light text-muted-foreground mt-1">
                Médicos, Advogados, Corretores, Mentores e Empreendedores.
              </p>
            </div>
          </div>

          {/* Card 2: Venda para Clientes */}
          <div className="border border-primary/30 bg-[#14151F] p-8 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                2. MONETIZAÇÃO & PRESTAÇÃO DE SERVIÇOS
              </span>
              <h3 className="mt-4 text-2xl font-light text-foreground" style={{ fontFamily: SERIF }}>
                Crie um Serviço de Ensaios Fotográficos com IA
              </h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-muted-foreground">
                Ofereça o pacote de "Ensaio Virtual de IA" para profissionais liberais da sua região. Você cobra de R$ 100 a R$ 300 por ensaio entregue, utiliza os nossos +700 prompts no Gemini gratuito e lucra 100%!
              </p>

              <ul className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Margem de lucro de 100% (gerador grátis)
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Alta demanda no mercado de estética e saúde
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Retorno do investimento no 1º cliente
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Ideal para:</span>
              <p className="text-xs font-light text-muted-foreground mt-1">
                Social Medias, Gestores de Tráfego, Designers e Agências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories Showcase (RDG Standard) ---------------- */
function CategoriesShowcase() {
  const categories = [
    {
      title: "👩 Ensaios Femininos",
      desc: "Moda, maquiagem soft, vestidos de gala, estilo casual chic, iluminação de estúdio e cenários minimalistas.",
      tag: "180+ Prompts",
    },
    {
      title: "👨 Ensaios Masculinos",
      desc: "Estilo executive, ternos sob medida, streetwear premium, ambiente urbano, carros e posicionamento forte.",
      tag: "160+ Prompts",
    },
    {
      title: "💼 Profissões & Autoridade",
      desc: "Médicos de jaleco, Advogados em escritórios renomados, Arquitetos, Corretores de Alto Padrão e Mentores.",
      tag: "200+ Prompts",
    },
    {
      title: "📸 Conceitual & Iluminação",
      desc: "Luz dramática, fotos de capa de revista, estúdio preto & branco, retratos em alta velocidade e efeitos vintage.",
      tag: "160+ Prompts",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>CATEGORIAS PRONTAS</SectionEyebrow>
          <h2
            className="mt-6 text-3xl font-light leading-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Organizado por Estilo para <em className="text-primary not-italic">Facilitar Seu Trabalho</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {categories.map((c, i) => (
            <div
              key={i}
              className="border border-white/10 bg-[#111218] p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-light text-foreground" style={{ fontFamily: SERIF }}>
                  {c.title}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-3 py-1">
                  {c.tag}
                </span>
              </div>
              <p className="mt-3 text-xs font-light text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Comparison Section (RDG Standard) ---------------- */
function ComparisonSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>COMPARAÇÃO FINANCEIRA</SectionEyebrow>
          <h2
            className="mt-6 text-3xl font-light leading-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Ensaio Fotográfico Tradicional vs. <em className="text-primary not-italic">Pack +700 Prompts IA</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Tradicional */}
          <div className="border border-white/10 bg-[#0A0A0A] p-8">
            <h3 className="text-xl font-light text-muted-foreground" style={{ fontFamily: SERIF }}>
              ❌ Ensaio Tradicional
            </h3>
            <ul className="mt-6 space-y-4 text-xs font-light text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-mono">•</span>
                <span>Custo médio: R$ 800,00 a R$ 2.500,00 por sessão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-mono">•</span>
                <span>Aluguel de estúdio, contratação de maquiagem e deslocamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-mono">•</span>
                <span>Demora de 1 a 2 semanas para entrega das fotos tratadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-mono">•</span>
                <span>Quantidade limitada de fotos no pacote</span>
              </li>
            </ul>
          </div>

          {/* Com o Pack */}
          <div className="border border-primary/40 bg-[#14151F] p-8">
            <h3 className="text-xl font-light text-primary" style={{ fontFamily: SERIF }}>
              ✅ Com o Pack +700 Prompts IA
            </h3>
            <ul className="mt-6 space-y-4 text-xs font-light text-foreground">
              <li className="flex items-start gap-2">
                <Check size={14} className="text-primary shrink-0" />
                <span>Investimento Anual de apenas <strong>R$ 29,90/ano</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-primary shrink-0" />
                <span>Gere fotos em casa com o <strong>Google Gemini 100% Grátis</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-primary shrink-0" />
                <span>Fotos prontas em questão de segundos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-primary shrink-0" />
                <span>Fotos ILIMITADAS e direito de vender ensaios para terceiros</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing Section (RDG Standard) ---------------- */
function PricingSection() {
  return (
    <section className="border-b border-white/10 py-24 relative">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="border border-primary/40 bg-gradient-to-b from-[#14151F] to-[#0A0A0A] p-8 sm:p-14 shadow-2xl relative">
          <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            OFERTA DE LANÇAMENTO — 70% OFF
          </span>

          <h2
            className="mt-6 text-4xl font-light text-foreground sm:text-6xl"
            style={{ fontFamily: SERIF }}
          >
            Assinatura Anual do <em className="text-primary not-italic">Pack +700 Prompts</em>
          </h2>

          {/* Pricing Box */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <span className="font-mono text-xs text-muted-foreground line-through">De R$ 97,00</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-4xl font-light text-primary" style={{ fontFamily: SERIF }}>
                R$ 29,90
              </span>
              <span className="font-mono text-xs text-muted-foreground">/ano</span>
            </div>
            <span className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Plano Anual · Apenas R$ 29,90 por ano
            </span>
          </div>

          {/* Checklist */}
          <div className="mt-10 mx-auto max-w-md space-y-3 text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>Acesso Anual à Biblioteca com <strong>+700 Prompts</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>Cópia de prompts em 1-Clique</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>Botão direto para o <strong>Google Gemini (Grátis)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>Licença para <strong>Uso Próprio ou Revenda de Ensaios</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>Suporte via WhatsApp Comercial RDG Digital</span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={WA_COMPRAR}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110"
            >
              Garantir Pack de Prompts por R$ 29,90/ano
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <Lock size={12} className="text-primary" />
            Compra Segura via WhatsApp Comercial RDG Digital
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ Section (RDG Standard) ---------------- */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso pagar alguma assinatura de Inteligência Artificial?",
      a: "Não! Nossa biblioteca possui o atalho direto para o Google Gemini, que é 100% gratuito. Você também pode utilizar no ChatGPT gratuito ou em qualquer outra IA de sua preferência.",
    },
    {
      q: "Posso vender os ensaios gerados para outros clientes?",
      a: "Sim! Você possui autorização comercial para criar ensaios fotográficos de IA para seus clientes e cobrar o valor que desejar (recomendamos entre R$ 100 a R$ 300 por ensaio).",
    },
    {
      q: "Como recebo meu acesso após a compra?",
      a: "Após a confirmação da compra pelo WhatsApp Comercial (R$ 29,90/ano), você receberá o link direto de acesso à biblioteca com todas as categorias liberadas.",
    },
    {
      q: "Os prompts estão em português?",
      a: "Sim! Todos os prompts estão traduzidos e otimizados para rápida cópia em 1-clique.",
    },
    {
      q: "Funciona se eu usar pelo celular?",
      a: "Sim, a biblioteca de prompts e o Google Gemini funcionam perfeitamente tanto no celular (Android/iPhone) quanto no computador.",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <SectionEyebrow>DÚVIDAS FREQUENTES</SectionEyebrow>
          <h2
            className="mt-6 text-3xl font-light leading-tight sm:text-4xl"
            style={{ fontFamily: SERIF }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-white/10 bg-[#111218] transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-light text-foreground"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={
                      "text-primary transition-transform " +
                      (isOpen ? "rotate-180" : "")
                    }
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs font-light text-muted-foreground leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
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

/* ---------------- Final CTA (RDG Standard) ---------------- */
function FinalCTA() {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="text-4xl font-light leading-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Pronto para Ter Fotos Incríveis ou <em className="text-primary not-italic">Faturar com Ensaios de IA?</em>
        </h2>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Garanta seu acesso no Plano Anual por apenas R$ 29,90/ano.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WA_COMPRAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02]"
          >
            Garantir Pack de Prompts (R$ 29,90/ano)
            <ArrowRight size={14} />
          </a>
          <a
            href={WA_DUVIDAS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary/40"
          >
            <MessageCircle size={14} className="text-primary" /> Falar com Atendimento
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer (Exact RDG Standard) ---------------- */
function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { Icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL, external: true },
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com/", external: true },
    { Icon: Mail, label: "E-mail", href: CONTACT_EMAIL_URL, external: false },
  ];

  const navLinks = [
    { label: "Início", to: "/" },
    { label: "Software IG", to: "/extensao" },
    { label: "Sistemas", to: "/#sistemas" },
    { label: "Serviços", to: "/#servicos" },
    { label: "Área de Membros", to: "/membros" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 sm:grid-cols-[1.4fr_1fr_1fr] sm:items-start">
          <div>
            <Logo size="md" />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Tecnologia desenvolvida para impulsionar negócios.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-light uppercase tracking-[0.4em] text-primary">
              Navegação
            </p>
            <ul className="mt-5 flex flex-col divide-y divide-white/10 border-t border-white/10">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block py-2.5 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-start gap-2 sm:justify-end">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center border border-white/15 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Giant typographic mark (RDG Standard) */}
        <div className="mt-20 select-none overflow-hidden border-t border-white/10 pt-12">
          <p
            className="font-light leading-none tracking-tight text-transparent text-[18vw] sm:text-[14vw]"
            aria-hidden
            style={{
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontStyle: "italic",
              WebkitTextStroke: "1px color-mix(in oklab, var(--primary) 40%, transparent)",
            }}
          >
            RDG Digital
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[10px] font-light uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} RDG Digital · Todos os direitos reservados</p>
          <p>Construído no Brasil · 2026</p>
        </div>
      </div>
    </footer>
  );
}
