import { useState, useEffect, type CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { waLink, LOGO_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Search,
  Zap,
  ShieldCheck,
  Target,
  MessageCircle,
  TrendingUp,
  Check,
  Lock,
  ArrowRight,
  ChevronDown,
  Play,
  Download,
  Sparkles,
  HelpCircle,
  Star,
  CheckCircle2,
  Cpu,
  Calculator,
  Camera,
  BookOpen,
  Crown,
  Globe,
  MapPin,
  Flame,
  Kanban,
  ImageIcon,
  FileText,
  SlidersHorizontal,
  ExternalLink,
  DollarSign
} from "lucide-react";

const TITLE = "Software de Prospecção B2B Google Maps — RDG Digital";
const DESCRIPTION = "Transforme empresas sem site no Google Maps em clientes no seu WhatsApp. Rastreamento inteligente, gerador de sites de demonstração em 1-clique e scripts de abordagem.";
const CANONICAL_URL = `${BASE_URL}/prospeccao-b2b`;

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

const WA_PLANO_PROSPECCAO_INDIVIDUAL = waLink(
  "Olá, equipe RDG Digital! Quero assinar o Plano Mensal Operator do Software de Prospecção B2B Google Maps por R$ 67/mês."
);
const WA_PLANO_PROSPECCAO_ANUAL = waLink(
  "Olá, equipe RDG Digital! Quero assinar o Plano Anual Agência do Software de Prospecção B2B Google Maps por R$ 497/ano."
);
const WA_DUVIDAS = waLink(
  "Olá, equipe RDG Digital! Tenho dúvidas sobre o Software de Prospecção B2B Google Maps."
);

export const Route = createFileRoute("/prospeccao-b2b")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: ProspeccaoSalesPage,
});

function ProspeccaoSalesPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A]">
      {/* Elementos flutuantes de fundo */}
      <FloatingIcons />

      <main className="relative">
        <Navbar />
        <Hero />
        <MetricsStrip />
        <LiveSoftwareShowcase />
        <HowItWorks />
        <Differentials />
        <ScriptGeneratorShowcase />
        <BonusSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <MiniFooter />
    </div>
  );
}

function FloatingIcons() {
  const items = [
    { Icon: Search, top: "8%", left: "5%", d: "0s", s: 22 },
    { Icon: MapPin, top: "24%", left: "90%", d: "1.2s", s: 20 },
    { Icon: Zap, top: "45%", left: "4%", d: "0.6s", s: 24 },
    { Icon: Globe, top: "68%", left: "92%", d: "1.8s", s: 20 },
    { Icon: Kanban, top: "85%", left: "7%", d: "0.4s", s: 22 },
    { Icon: Sparkles, top: "35%", left: "94%", d: "2.2s", s: 18 },
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

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RDG Digital" className="h-8 w-auto object-contain" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-l border-white/10 pl-3">
            PROSPECÇÃO <span className="text-primary font-bold">B2B</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#planos"
            className="hidden sm:inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Ver Planos
          </a>
          <a
            href={WA_PLANO_PROSPECCAO_ANUAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-5 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110 font-bold"
          >
            Testar Agora
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
      <Sparkles size={12} /> {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>SOFTWARE DE PROSPECÇÃO B2B GOOGLE MAPS</SectionEyebrow>

        <h1
          className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-[68px]"
          style={{ fontFamily: SERIF }}
        >
          Transforme empresas sem site no Google Maps em{" "}
          <em className="text-primary not-italic">clientes no seu WhatsApp.</em>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
          O <b>Software de Prospecção B2B</b> rastreia negócios locais em qualquer cidade, gera a demonstração de um site profissional ao vivo em 1-clique e cria mensagens de abordagem impossíveis de ignorar.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#planos"
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110 font-bold"
          >
            Garantir Minha Licença
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/prospeccao"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Abrir Demonstração Ao Vivo
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <Lock size={12} className="text-primary" />
          Busca de Leads em Tempo Real · $200/mês de Saldo Grátis no Google
        </p>
      </div>
    </section>
  );
}

function MetricsStrip() {
  const items = [
    { k: "+10.000", l: "Buscas grátis/mês no Google" },
    { k: "1-Clique", l: "Gerador de Sites ao Vivo" },
    { k: "100%", l: "Filtro de Empresas Sem Site" },
    { k: "CRM", l: "Kanban Drag & Drop Integrado" },
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

function LiveSoftwareShowcase() {
  const [activeTab, setActiveTab] = useState<"busca" | "demo" | "scripts">("busca");

  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionEyebrow>PAINEL DO SOFTWARE DE PROSPECÇÃO</SectionEyebrow>
            <h2
              className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: SERIF }}
            >
              Conheça o sistema por dentro.
            </h2>
            <p className="mt-6 text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
              A ferramenta mapeia estabelecimentos locais, extrai telefones e avaliações reais e cria o site do cliente na hora para você fechar contratos de R$ 500 a R$ 2.500.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Filtro inteligente de empresas que NÃO possuem website.",
                "Criação automática do site em tempo real com fotos do local.",
                "Gerador de mensagens persuasivas para enviar no WhatsApp.",
                "Kanban CRM visual para organizar a esteira de vendas.",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-light text-foreground/85">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("busca")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
                  activeTab === "busca" ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Busca de Leads
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("demo")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
                  activeTab === "demo" ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Sites de Demonstração
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scripts")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
                  activeTab === "scripts" ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Scripts WhatsApp
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden border border-white/20 bg-[#0B0F19] text-slate-100 shadow-2xl rounded-lg">
              <div className="flex items-center justify-between bg-[#070A12] px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-3 font-mono text-[11px] text-slate-300 font-semibold flex items-center gap-2">
                    <img src={LOGO_URL} alt="RDG" className="h-4 w-auto" />
                    Software Prospecção B2B v2.0 — Google Maps
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE & AO VIVO
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-3 bg-[#0E1322] border-b border-white/10">
                <div className="flex items-center gap-2 bg-[#141A2E] p-2.5 border border-white/5 rounded">
                  <span className="text-base">📍</span>
                  <div className="text-[10px] leading-tight">
                    <span className="text-slate-400 block font-mono">Ficha Google Maps</span>
                    <span className="text-emerald-400 font-bold">● Conectado API</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#141A2E] p-2.5 border border-white/5 rounded">
                  <span className="text-base">🔥</span>
                  <div className="text-[10px] leading-tight">
                    <span className="text-slate-400 block font-mono">Filtro sem Website</span>
                    <span className="text-amber-400 font-bold">● Ativo no Topo</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#141A2E] p-2.5 border border-white/5 rounded">
                  <span className="text-base">🌐</span>
                  <div className="text-[10px] leading-tight">
                    <span className="text-slate-400 block font-mono">Gerador de Site</span>
                    <span className="text-sky-400 font-bold">Pronto 1-Clique</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4 min-h-[340px]">
                {activeTab === "busca" && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                    <div className="bg-[#141A2E] border border-white/10 p-4 rounded-lg space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-[#0A0A0A] p-2.5 rounded border border-white/10 text-xs">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Nicho:</span>
                          <span className="font-bold text-white">Barbearia / Odontologia</span>
                        </div>
                        <div className="bg-[#0A0A0A] p-2.5 rounded border border-white/10 text-xs">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Cidade:</span>
                          <span className="font-bold text-white">Rio de Janeiro - RJ</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 size={14} /> 6 Empresas sem Website Encontradas
                        </span>
                        <span className="text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded text-[10px] font-mono">
                          OPORTUNIDADE DE OURO
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#141A2E] border border-amber-500/40 p-4 rounded-lg space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-white text-sm">Barbearia Santo Agostinho</h4>
                          <p className="text-xs text-slate-400">R. Voluntários da Pátria - Botafogo, Rio de Janeiro</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded">
                          <Star size={12} fill="currentColor" /> 4.8 (142 reviews)
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                        <button type="button" className="px-3 py-1.5 bg-primary text-black font-extrabold text-xs rounded flex items-center gap-1">
                          <Sparkles size={12} /> Gerar Prévia do Site
                        </button>
                        <button type="button" className="px-3 py-1.5 bg-emerald-600 text-white font-extrabold text-xs rounded flex items-center gap-1">
                          <MessageCircle size={12} /> WhatsApp Script
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "demo" && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                    <div className="bg-gradient-to-r from-sky-950/60 to-indigo-950/60 border border-sky-500/30 p-4 rounded-lg space-y-3">
                      <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                        🌐 DEMONSTRAÇÃO GERADA EM TEMPO REAL
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        Site Profissional Completo com Fotos, Depoimentos e GPS
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Ao clicar em "Gerar Prévia", o software compõe a página oficial da empresa sem expor nenhuma referência técnica. Você pode enviar a URL direta no WhatsApp do proprietário!
                      </p>

                      <div className="p-3 bg-[#0A0A0A] border border-white/10 rounded font-mono text-xs text-slate-300 flex items-center justify-between">
                        <span className="truncate">https://rdgdigital.com.br/demo?nome=Barbearia+Santo+Agostinho</span>
                        <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">ONLINE</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "scripts" && (
                  <div className="space-y-3 animate-[fadeIn_0.3s_ease]">
                    <div className="bg-[#141A2E] border border-white/10 p-4 rounded-lg space-y-2">
                      <span className="text-[10px] font-mono text-primary font-bold uppercase">
                        💬 SCRIPT DE ABORDAGEM CUSTOMIZADO
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans bg-[#0A0A0A] p-3 rounded border border-white/5">
                        "Olá! Notei que a <strong>Barbearia Santo Agostinho</strong> possui uma nota incrível no Google (4.8 com 142 depoimentos), porém não há um site para agendamentos. Criei uma demonstração de site oficial exclusiva para vocês: [LINK_DO_SITE]. O que achou?"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Digite o Nicho & Cidade",
      desc: "Escolha qualquer segmento (Barbearias, Odontologia, Imobiliárias) e a região desejada.",
    },
    {
      n: "02",
      title: "Filtro de Empresas Sem Site",
      desc: "O sistema destaca em pouquíssimos segundos todos os estabelecimentos que NÃO possuem website.",
    },
    {
      n: "03",
      title: "Gerador de Site em 1-Clique",
      desc: "Clique para criar um site profissional ao vivo preenchido com as fotos e depoimentos reais da empresa.",
    },
    {
      n: "04",
      title: "Envio de Abordagem no WhatsApp",
      desc: "Envie o modelo pronto junto com os scripts comerciais da RDG e feche contratos mensais de R$ 500 a R$ 2.500.",
    },
  ];

  return (
    <section id="como-funciona" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>PASSO A PASSO DA PROSPECÇÃO</SectionEyebrow>

        <h2
          className="mx-auto mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Como fechar novos clientes de sites todos os dias em 4 etapas simples.
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((st) => (
            <div key={st.n} className="border border-white/10 bg-white/[0.02] p-8 text-left transition-colors hover:border-primary/40">
              <span className="font-mono text-xs text-primary">{st.n}.</span>
              <h3 className="mt-4 text-xl font-light text-foreground" style={{ fontFamily: SERIF }}>
                {st.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-muted-foreground">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    {
      title: "Busca Direta na API do Google Maps",
      desc: "Dados 100% atualizados ao vivo em qualquer cidade do Brasil.",
    },
    {
      title: "Saldo Grátis de $200/mês no Google",
      desc: "Tutorial passo a passo mostrando como ter mais de 10.000 buscas gratuitas todo mês sem gastar nada.",
    },
    {
      title: "Painel Kanban CRM Integrado",
      desc: "Arraste os cards de empresa entre 'Novos Leads', 'Proposta Enviada' e 'Cliente Fechado'.",
    },
    {
      title: "White-Label Total para o Cliente",
      desc: "As demonstrações geradas têm aparência de um site profissional já pronto para o cliente publicar.",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28 bg-[#0B0D14]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>RECURSOS EXCLUSIVOS</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-light sm:text-4xl lg:text-5xl" style={{ fontFamily: SERIF }}>
            Por que este é o software de prospecção B2B definitivo.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} className="border border-white/10 p-6 bg-[#0A0A0A] space-y-3">
              <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                <Check size={18} />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScriptGeneratorShowcase() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionEyebrow>SCRIPTS COMERCIAIS INTEGRADOS</SectionEyebrow>
            <h2 className="text-3xl font-light sm:text-4xl lg:text-5xl" style={{ fontFamily: SERIF }}>
              Mensagens de abordagem prontas para o WhatsApp.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O software já gera 3 variações de texto persuasivos pré-preenchidos com o nome da empresa, nota no Google e o link do site pronto. Basta clicar em <b>"Enviar no WhatsApp"</b>!
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#111218] border border-white/10 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-primary flex items-center gap-2">
                <Zap size={16} /> Script de Alta Conversão #1
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                PRONTO P/ DISPARO
              </span>
            </div>

            <p className="text-xs text-white/90 leading-relaxed font-sans bg-[#0A0A0A] p-4 rounded-xl border border-white/5">
              "Olá! Falei com a equipe da <strong>Barbearia Santo Agostinho</strong>?<br /><br />
              Estava navegando no Google Maps e vi que vocês possuem uma avaliação sensacional de <strong>⭐ 4.8 com 142 depoimentos positivos</strong>, parabéns!<br /><br />
              Porém, vi que não há um site oficial de agendamento vinculado ao perfil. Montei uma demonstração de site exclusiva para vocês:<br />
              👇<br />
              https://rdgdigital.com.br/demo?nome=Barbearia+Santo+Agostinho<br /><br />
              Conseguem dar uma olhada e me dizer o que acharam?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  const bonuses = [
    {
      badge: "LIBERADO",
      badgeColor: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
      title: "Plataforma de Cursos RDG",
      desc: "Treinamentos completos de tráfego pago, edições no CapCut, copy e vendas.",
    },
    {
      badge: "+700 PROMPTS DE IA",
      badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      title: "Prompts de IA para Fotografia",
      desc: "700+ prompts de referências prontas para transformar um retrato comum em ensaio autoral. Escolha um enquadramento, copie o prompt e leve para o seu gerador preferido.",
    },
    {
      badge: "SUPORTE VIP",
      badgeColor: "text-[#25D366] border-[#25D366]/30 bg-[#25D366]/10",
      title: "Atendimento no WhatsApp",
      desc: "Tire dúvidas técnicas da sua licença e receba auxílio direto da equipe.",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>PACOTE DE BÔNUS EXCLUSIVOS</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-light sm:text-4xl lg:text-5xl" style={{ fontFamily: SERIF }}>
          Tudo o que você precisa para escalar sua operação B2B.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 text-left">
          {bonuses.map((b, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-2xl bg-[#0F1117] space-y-4 hover:border-white/20 transition-all shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <span className={`inline-block text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border ${b.badgeColor}`}>
                  {b.badge}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">{b.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing Section (Plano Mensal R$ 97 + Plano Anual R$ 497) ---------------- */

function PricingSection() {
  return (
    <section id="planos" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>PLANOS DE LICENÇA DE ACESSO</SectionEyebrow>

        <h2
          className="mx-auto mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Escolha o plano ideal para a sua estrutura de prospecção.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto text-left">
          {/* Plano Mensal Operator */}
          <div className="border border-white/10 bg-[#0A0A0A] p-8 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div className="space-y-4">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">PLANO MENSAL</span>
              <h3 className="text-2xl font-light text-white" style={{ fontFamily: SERIF }}>Licença Mensal Operator</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-light text-primary" style={{ fontFamily: SERIF }}>R$ 67</span>
                <span className="text-xs text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-foreground/80">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Acesso Completo ao Software Prospecção B2B</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Gerador de Sites de Demonstração em 1-Clique</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Painel Kanban CRM Integrado</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Personalização de Fotos & Capa com Upload Próprio</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Script Generator Comercial para WhatsApp</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Exportação Ilimitada em Formato CSV</li>
              </ul>
            </div>

            <a
              href={WA_PLANO_PROSPECCAO_INDIVIDUAL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 text-center bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all"
            >
              Assinar Plano Mensal (R$ 67/mês)
            </a>
          </div>

          {/* Plano Anual Agência (R$ 497/ano - Destaque) */}
          <div className="border border-primary bg-gradient-to-b from-[#181928] to-[#0A0A0A] p-8 space-y-6 flex flex-col justify-between relative shadow-2xl">
            <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-black font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow">
              🔥 MELHOR CUSTO-BENEFÍCIO (ANUIDADE)
            </span>

            <div className="space-y-4">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">PLANO ANUAL AGÊNCIA</span>
              <h3 className="text-2xl font-light text-white" style={{ fontFamily: SERIF }}>Licença Anual Completa</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-light text-primary" style={{ fontFamily: SERIF }}>R$ 497</span>
                <span className="text-xs text-muted-foreground">/ano</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-foreground/90">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> <strong>Licença de Acesso Valida por 1 Ano Inteiro</strong></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Buscas Ilimitadas no Google Maps</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Gerador de Sites de Demonstração Ilimitados</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Todos os 3 Bônus Exclusivos Inclusos</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Suporte VIP Prioritário no WhatsApp</li>
              </ul>
            </div>

            <a
              href={WA_PLANO_PROSPECCAO_ANUAL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 text-center bg-primary hover:bg-primary/90 text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-primary/20"
            >
              Garantir Licença Anual (R$ 497/ano)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Preciso ter conhecimento técnico em programação?",
      a: "Não! O software faz todo o trabalho duro automaticamente. Você digita a cidade e o nicho e o sistema constrói o site e gera os textos de vendas.",
    },
    {
      q: "Qual é o custo com a API do Google?",
      a: "O Google dá $200 dólares de saldo grátis TODO MÊS para cada conta. Isso equivale a mais de 10.000 buscas grátis mensais. O seu custo é zero!",
    },
    {
      q: "O cliente final vê que o site foi gerado por um robô?",
      a: "Não. A página de demonstração é 100% limpa e white-label, parecendo um site profissional já pronto para ser publicado no domínio do cliente.",
    },
    {
      q: "Quanto posso cobrar por cada site que vender?",
      a: "Os valores praticados no mercado para sites locais com WhatsApp variam de R$ 500 a R$ 2.500. Vendendo apenas 1 site você já recupera todo o investimento na ferramenta!",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <SectionEyebrow>PERGUNTAS FREQUENTES</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-light sm:text-4xl" style={{ fontFamily: SERIF }}>
            Dúvidas Frequentes sobre o Software Prospecção B2B
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 p-6 bg-[#0A0A0A] space-y-2">
              <h3 className="text-base font-bold text-white">{faq.q}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 text-center border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <h2 className="text-3xl sm:text-5xl font-light text-white" style={{ fontFamily: SERIF }}>
          Pronto para prospectar e vender sites todos os dias?
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Adquira agora a sua licença e comece a rastrear empresas sem site no Google Maps em menos de 5 minutos.
        </p>

        <a
          href={WA_PLANO_PROSPECCAO_ANUAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-black shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
        >
          <span>Garantir Licença Anual no WhatsApp</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function MiniFooter() {
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground border-t border-white/5">
      <p>© {new Date().getFullYear()} RDG Digital. Todos os direitos reservados. Software de Prospecção B2B Google Maps.</p>
    </footer>
  );
}
