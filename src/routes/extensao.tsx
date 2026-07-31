import { useState, useRef, useEffect, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { waLink, LOGO_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Instagram,
  Zap,
  ShieldCheck,
  Target,
  MessageCircle,
  TrendingUp,
  FileSpreadsheet,
  Users,
  Check,
  Lock,
  ArrowRight,
  ChevronDown,
  Bot,
  Play,
  Download,
  Sparkles,
  Layers,
  HelpCircle,
  Star,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Calculator,
  Camera,
  BookOpen,
  Crown,
} from "lucide-react";

const TITLE = "RDG instaPRO — Automação de Instagram com IA & Prospecção Automática";
const DESCRIPTION =
  "Automatize a prospecção no seu Instagram no Piloto Automático: atraia seguidores reais do seu concorrente, envie mensagens no Direct, exporte listas para Meta Ads e venda todos os dias.";
const CANONICAL_URL = `${BASE_URL}/extensao`;

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

const WA_PLANO_INDIVIDUAL = waLink(
  "Olá, RDG Digital! Quero assinar o PLANO INDIVIDUAL (1 Perfil) da RDG instaPRO por R$ 97/mês."
);
const WA_PLANO_AGENCIA = waLink(
  "Olá, RDG Digital! Quero assinar o PLANO AGÊNCIA MULTI (5 Perfis) da RDG instaPRO por R$ 297/mês."
);
const WA_DUVIDAS = waLink(
  "Olá, RDG Digital! Tenho dúvidas sobre o software RDG instaPRO para Windows."
);

export const Route = createFileRoute("/extensao")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: ExtensaoSalesPage,
});

function ExtensaoSalesPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A]">
      {/* Background Floating Ambient Icons */}
      <FloatingIcons />

      <main className="relative">
        <Navbar />
        <Hero />
        <MetricsStrip />
        <PilotoShowcase />
        <HowItWorks />
        <Differentials />
        <MetaAdsIntegration />
        <BonusSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <MiniFooter />
    </div>
  );
}

/* ---------------- Ambient floating icons (Matching RDG Style) ---------------- */

function FloatingIcons() {
  const items = [
    { Icon: Instagram, top: "8%", left: "5%", d: "0s", s: 22 },
    { Icon: Bot, top: "24%", left: "90%", d: "1.2s", s: 20 },
    { Icon: Zap, top: "45%", left: "4%", d: "0.6s", s: 24 },
    { Icon: Target, top: "68%", left: "92%", d: "1.8s", s: 20 },
    { Icon: FileSpreadsheet, top: "85%", left: "7%", d: "0.4s", s: 22 },
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

/* ---------------- Header / Navbar ---------------- */

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RDG Digital" className="h-8 w-auto object-contain" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-l border-white/10 pl-3">
            insta<span className="text-primary font-bold">PRO</span>
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
            href={WA_PLANO_AGENCIA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-5 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110 font-medium"
          >
            Testar Agora
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Section Eyebrow Component ---------------- */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
      <Sparkles size={12} /> {children}
    </span>
  );
}

/* ---------------- Hero Section ---------------- */

function Hero() {
  return (
    <section className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>SOFTWARE DE AUTOMAÇÃO INTELIGENTE</SectionEyebrow>

        <h1
          className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-[68px]"
          style={{ fontFamily: SERIF }}
        >
          Transforme os seguidores do seu concorrente em{" "}
          <em className="text-primary not-italic">clientes no seu WhatsApp.</em>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
          O <b>RDG instaPRO</b> é a automação no <b>Piloto Automático</b> que mapeia o público mais quente do seu nicho, interage de forma humana e dispara Directs personalizados 24h por dia — respeitando os limites e com instalador simplificado.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#planos"
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110 font-medium"
          >
            Garantir Minha Licença
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Como Funciona o Piloto
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <Lock size={12} className="text-primary" />
          Operação em ritmo humano · Instalador Automático para Windows (1-Click)
        </p>
      </div>
    </section>
  );
}

/* ---------------- Metrics Strip ---------------- */

function MetricsStrip() {
  const items = [
    { k: "1 a 5", l: "Perfis alvos por ciclo" },
    { k: "24/7", l: "Piloto Automático ativo" },
    { k: "100%", l: "Filtro anti-fake inteligente" },
    { k: "CSV", l: "Exportador Meta Ads" },
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

/* ---------------- Piloto Automático Spotlight Showcase with REAL Extension UI ---------------- */

function PilotoShowcase() {
  const [activeTab, setActiveTab] = useState<"piloto" | "shield" | "direct" | "ia">("piloto");

  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionEyebrow>PAINEL REAL DA EXTENSÃO</SectionEyebrow>
            <h2
              className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: SERIF }}
            >
              Conheça a interface do seu novo assistente de vendas.
            </h2>
            <p className="mt-6 text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
              A extensão se integra diretamente ao seu navegador. Veja abaixo exatamente a interface real do <b>RDG instaPRO</b> com o Escudo Anti-Block e o Piloto Automático ativados.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Navegação por abas organizadas (Piloto, Prospecção IA, Direct).",
                "Escudo Anti-Block nativo com pausas automáticas para café.",
                "Adição de perfis alvos com 1 clique direto no Instagram.",
                "Relatório de interações e mensagens em tempo real.",
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
                onClick={() => setActiveTab("piloto")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
                  activeTab === "piloto" ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Aba Piloto Automático
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("shield")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
                  activeTab === "shield" ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Escudo Anti-Block
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("direct")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
                  activeTab === "direct" ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Directs & Filtros
              </button>
            </div>
          </div>

          {/* Authentic Real Extension Interface Replica */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden border border-white/20 bg-[#0B0F19] text-slate-100 shadow-2xl rounded-lg">
              {/* Chrome Extension Top Frame Bar */}
              <div className="flex items-center justify-between bg-[#070A12] px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-3 font-mono text-[11px] text-slate-300 font-semibold flex items-center gap-2">
                    <img src={LOGO_URL} alt="RDG" className="h-4 w-auto" />
                    RDG instaPRO v3.4 — Extensão Chrome
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LICENÇA ATIVA
                </div>
              </div>

              {/* Status Header Cards (Matching real rdg.html) */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-[#0E1322] border-b border-white/10">
                <div className="flex items-center gap-2 bg-[#141A2E] p-2.5 border border-white/5 rounded">
                  <span className="text-base">💌</span>
                  <div className="text-[10px] leading-tight">
                    <span className="text-slate-400 block font-mono">Motor Direct</span>
                    <span className="text-emerald-400 font-bold">● Ativo / Seguro</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#141A2E] p-2.5 border border-white/5 rounded">
                  <span className="text-base">🛡️</span>
                  <div className="text-[10px] leading-tight">
                    <span className="text-slate-400 block font-mono">Proteção Anti-Block</span>
                    <span className="text-emerald-400 font-bold">● Risco Baixo (100%)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#141A2E] p-2.5 border border-white/5 rounded">
                  <span className="text-base">⚡</span>
                  <div className="text-[10px] leading-tight">
                    <span className="text-slate-400 block font-mono">Velocidade</span>
                    <span className="text-amber-400 font-bold">Modo Humanizado</span>
                  </div>
                </div>
              </div>

              {/* Extension Nav Tabs Bar */}
              <div className="flex items-center gap-1 px-3 pt-2 bg-[#070A12] border-b border-white/10 overflow-x-auto text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("piloto")}
                  className={`px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === "piloto" ? "border-sky-400 text-sky-300 font-bold bg-sky-950/40" : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  🤖 Piloto Automático
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("shield")}
                  className={`px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === "shield" ? "border-emerald-400 text-emerald-300 font-bold bg-emerald-950/40" : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  🛡️ Escudo & Aquecimento
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("direct")}
                  className={`px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === "direct" ? "border-amber-400 text-amber-300 font-bold bg-amber-950/40" : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  💬 Direct em Massa
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ia")}
                  className={`px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === "ia" ? "border-purple-400 text-purple-300 font-bold bg-purple-950/40" : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  🚀 Prospecção IA
                </button>
              </div>

              {/* Extension Screen Contents */}
              <div className="p-4 sm:p-6 space-y-4 min-h-[340px]">
                {activeTab === "piloto" && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                    {/* Hero Card */}
                    <div className="bg-gradient-to-r from-sky-950/60 to-indigo-950/60 border border-sky-500/30 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold">🤖 RDG PILOTO AUTOMÁTICO</span>
                          <h4 className="text-base font-bold text-slate-100 mt-0.5">Prospecção inteligente ativa no piloto automático</h4>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40 rounded font-bold">
                          1 a 5 Perfis Alvo
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        O Piloto Automático usa IA para montar sua fila de prospecção, interagir com até 200 pessoas por perfil concorrente e disparar o Direct — tudo dentro dos limites de segurança.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <button type="button" className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold rounded shadow hover:brightness-110 flex items-center gap-1.5">
                          <Play size={13} fill="currentColor" /> Rodar Piloto Automático
                        </button>
                        <button type="button" className="px-3 py-2 bg-slate-800 text-slate-300 text-xs font-medium rounded border border-white/10">
                          ⏹ Parar
                        </button>
                        <button type="button" className="px-3 py-2 bg-slate-800 text-slate-300 text-xs font-medium rounded border border-white/10">
                          ↺ Limpar Tudo
                        </button>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-[#141A2E] p-3 border border-white/5 rounded">
                        <span className="text-xl font-bold text-sky-400 block font-mono">1 / 5</span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 mt-1 block">Perfis Concorrentes</span>
                      </div>
                      <div className="bg-[#141A2E] p-3 border border-white/5 rounded">
                        <span className="text-xl font-bold text-sky-400 block font-mono">148</span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 mt-1 block">Interações Salvas</span>
                      </div>
                      <div className="bg-[#141A2E] p-3 border border-white/5 rounded">
                        <span className="text-xl font-bold text-sky-400 block font-mono">184</span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 mt-1 block">Pessoas Mapeadas</span>
                      </div>
                      <div className="bg-[#141A2E] p-3 border border-white/5 rounded">
                        <span className="text-xl font-bold text-emerald-400 block font-mono">42</span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 mt-1 block">Envios de Direct</span>
                      </div>
                    </div>

                    {/* Active Target Profile List */}
                    <div className="bg-[#141A2E] p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-bold text-slate-200">Perfis Concorrentes Mapeados (Etapa 1)</span>
                        <span className="text-[10px] font-mono text-emerald-400">✓ 1 Perfil Concorrente Ativo</span>
                      </div>
                      <div className="flex items-center justify-between bg-[#0B0F19] p-3 border border-emerald-500/30 rounded">
                        <div className="flex items-center gap-2.5">
                          <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 text-slate-950 font-bold flex items-center justify-center text-xs">
                            @C
                          </span>
                          <div>
                            <p className="text-xs font-bold text-slate-100">@concorrente_oficial</p>
                            <p className="text-[10px] text-slate-400">184 curtidores e comentadores mapeados</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono rounded">No Piloto</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "shield" && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                    <div className="bg-gradient-to-r from-emerald-950/60 to-slate-950/80 border border-emerald-500/40 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🛡️</span>
                          <div>
                            <h4 className="text-sm font-bold text-emerald-200">Escudo Anti-Block & Aquecimento RDG</h4>
                            <p className="text-[11px] text-slate-300">Proteção inteligente com simulação de comportamento humano e pausas automáticas.</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40 rounded uppercase font-bold">
                          100% SEGURO
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 bg-[#0B0F19] p-3 border border-white/5 rounded">
                        <div className="flex items-center gap-2 text-xs text-slate-200">
                          <span>☕ Pausa para Café:</span>
                          <span className="text-sky-300 font-bold">10 min</span> a cada <span className="text-emerald-300 font-bold">30 ações</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-200">
                          <span>Status do Escudo:</span>
                          <span className="text-emerald-400 font-bold">● Operação Humanizada</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "direct" && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                    <div className="bg-[#141A2E] p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <MessageCircle size={14} /> Etapa 2: Sua Mensagem de Conversão (Direct)
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Salva no Piloto</span>
                      </div>
                      <div className="bg-[#0B0F19] p-3 border border-white/10 text-xs font-mono text-slate-300 leading-relaxed rounded">
                        "Olá {`{nome}`}! Vi que você acompanha conteúdos sobre estética. Tenho uma condição exclusiva no WhatsApp para novos clientes essa semana. Posso te enviar o link?"
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "ia" && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                    <div className="bg-[#141A2E] p-4 border border-purple-500/30 rounded-lg">
                      <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                        🚀 Busca Inteligente por Palavra-Chave (1-Click)
                      </span>
                      <p className="text-xs text-slate-300 mt-1">Digite o termo do seu nicho e o assistente localiza perfis de potenciais clientes no Instagram:</p>
                      <div className="mt-3 flex gap-2">
                        <input
                          type="text"
                          readOnly
                          value="Estética Facial, Harmonização"
                          className="w-full bg-[#0B0F19] border border-white/10 px-3 py-2 text-xs font-mono text-slate-200 rounded"
                        />
                        <button type="button" className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded">
                          Buscar IA
                        </button>
                      </div>
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

/* ---------------- How It Works (3 Steps) ---------------- */

const steps = [
  {
    n: "01",
    Icon: Target,
    title: "Conectar & Escolher Alvos",
    desc: "Instale a extensão no seu navegador com 1 clique (ou use nosso instalador Windows). Adicione de 1 a 5 perfis dos seus principais concorrentes.",
  },
  {
    n: "02",
    Icon: ShieldCheck,
    title: "Filtros Anti-Fake Inteligentes",
    desc: "O software lê o público do concorrente e descarta perfis sem foto, fakes ou inativos. Apenas pessoas reais e engajadas entram na sua esteira.",
  },
  {
    n: "03",
    Icon: Bot,
    title: "Aquecimento & Direct 24/7",
    desc: "A extensão interage com cada pessoa (curte postagens, vê stories) em velocidade humana e envia uma mensagem personalizada no Direct com seu link do WhatsApp.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>MÉTODO AUTOMATIZADO</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Três passos simples para colocar o Instagram vendendo.
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
                  Etapa {s.n}
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
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentials ---------------- */

const differentials = [
  {
    Icon: Cpu,
    title: "Piloto Automático 24/7",
    desc: "Deixe a ferramenta trabalhando em segundo plano enquanto você atende clientes ou dorme. Interações contínuas e seguras.",
  },
  {
    Icon: ShieldCheck,
    title: "Proteção Anti-Bloqueio",
    desc: "Pausas randômicas e controle de limites diários imitam perfeitamente o ritmo de digitação de um ser humano.",
  },
  {
    Icon: FileSpreadsheet,
    title: "Exportação em CSV",
    desc: "Exporte em 1 clique toda a lista de contatos capturados para criar públicos de Lookalike no Meta Ads (Facebook/Instagram).",
  },
  {
    Icon: MessageCircle,
    title: "Sequência de Directs",
    desc: "Dispare mensagens de boas-vindas com gatilhos mentais e links direto para o seu atendimento no WhatsApp.",
  },
  {
    Icon: Users,
    title: "Gestão Multi-Perfil",
    desc: "No Plano Agência, você pode cadastrar e alternar facilmente entre até 5 contas do Instagram no mesmo instalador.",
  },
  {
    Icon: Download,
    title: "Instalador Windows (1-Click)",
    desc: "Esqueça instalações complicadas. No Plano Agência enviamos o instalador pronto para uso com navegador portátil.",
  },
];

function Differentials() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>RECURSOS EXCLUSIVOS</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Engenharia pensada para escala e segurança.
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

/* ---------------- Meta Ads CSV Feature Section ---------------- */

function MetaAdsIntegration() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <SectionEyebrow>INTEGRAÇÃO META ADS</SectionEyebrow>
          <h2
            className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Exporte as listas em CSV e barateie seus anúncios pagos.
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
            Quer fazer tráfego pago ultra direcionado? O <b>RDG instaPRO</b> permite exportar em CSV os perfis mapeados do seu concorrente. Suba no Gerenciador de Anúncios da Meta e crie Públicos Personalizados ou Semelhantes (Lookalike) pagando muito menos por clique.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Exportação rápida no formato compatível com Meta Ads.",
              "Crie anúncios direcionados especificamente para quem segue seus concorrentes.",
              "Reduza o Custo por Clique (CPC) criando públicos hiper-segmentados.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm font-light text-foreground/85">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-white/10 bg-[#0A0A0A] p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <FileSpreadsheet size={16} className="text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Exportador CSV Meta Ads
              </span>
            </div>
            <span className="font-mono text-[10px] text-primary">Pronto para Download</span>
          </div>

          <div className="mt-6 space-y-3 font-mono text-xs text-muted-foreground">
            <div className="flex justify-between border-b border-white/5 py-2">
              <span>Username</span>
              <span>Status</span>
              <span>Ação</span>
            </div>
            <div className="flex justify-between py-2 text-foreground/90">
              <span>@clinica_estetica_sp</span>
              <span className="text-green-400">Qualificado</span>
              <span className="text-primary">Mapeado</span>
            </div>
            <div className="flex justify-between py-2 text-foreground/90">
              <span>@dr_ricardo_dermatologia</span>
              <span className="text-green-400">Qualificado</span>
              <span className="text-primary">Mapeado</span>
            </div>
            <div className="flex justify-between py-2 text-foreground/90">
              <span>@barbearia_vip_centro</span>
              <span className="text-green-400">Qualificado</span>
              <span className="text-primary">Mapeado</span>
            </div>
          </div>

          <a
            href={WA_PLANO_AGENCIA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 border border-primary/40 bg-primary/10 py-3 text-center font-mono text-[11px] uppercase tracking-widest text-primary hover:bg-primary/20 transition-colors"
          >
            <Download size={14} /> Baixar Demonstração CSV
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Bonus Section ---------------- */

function BonusSection() {
  const bonuses = [
    {
      badge: "BÔNUS #1 • FERRAMENTA INTERATIVA",
      title: "Gerador de Scripts de Abordagem no Direct",
      val: "R$ 197",
      desc: "Ferramenta nativa na Área de Membros que gera mensagens de alta conversão adaptadas ao seu nicho com 1-Clique.",
      Icon: Sparkles,
      iconColor: "text-amber-400",
      bgColor: "from-amber-500/10 via-[#111218] to-[#111218]",
      borderColor: "border-amber-500/30",
    },
    {
      badge: "BÔNUS #2 • CALCULADORA INTERATIVA",
      title: "Calculadora de Prospecção & Metas de Vendas",
      val: "R$ 147",
      desc: "Simule seu faturamento ideal, descubra quantos diretos enviar por dia e quantos perfis utilizar para bater suas metas.",
      Icon: Calculator,
      iconColor: "text-emerald-400",
      bgColor: "from-emerald-500/10 via-[#111218] to-[#111218]",
      borderColor: "border-emerald-500/30",
    },
    {
      badge: "BÔNUS #3 • BIBLIOTECA VIP",
      title: "Pack de Prompts IA para Fotografias & Ensaios",
      val: "R$ 197",
      desc: "Acesso à nossa biblioteca VIP com mais de 700+ prompts prontos para gerar fotos de alta qualidade e posicionamento de marca.",
      Icon: Camera,
      iconColor: "text-indigo-400",
      bgColor: "from-indigo-500/10 via-[#111218] to-[#111218]",
      borderColor: "border-indigo-500/30",
    },
    {
      badge: "BÔNUS #4 • E-BOOK VIP",
      title: "Manual de Aquecimento & Escala Sem Bloqueios 2026",
      val: "R$ 156",
      desc: "Guia completo com as regras atualizadas de aquecimento de conta no Instagram para escalar disparos com 100% de segurança.",
      Icon: BookOpen,
      iconColor: "text-purple-400",
      bgColor: "from-purple-500/10 via-[#111218] to-[#111218]",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28 bg-gradient-to-b from-[#0D0E12] via-[#0A0A0A] to-[#0A0A0A] relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
            <Crown size={14} />
            <span>BÔNUS EXCLUSIVOS (DE R$ 697 POR R$ 0)</span>
          </div>

          <h2
            className="text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl text-white"
            style={{ fontFamily: SERIF }}
          >
            Ao garantir o RDG instaPRO hoje, você leva 4 Bônus VIP na Área de Membros.
          </h2>

          <p className="text-base font-light leading-relaxed text-muted-foreground">
            Todas essas ferramentas e recursos estão liberados imediatamente após o seu acesso na Área de Membros.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${b.bgColor} border ${b.borderColor} p-8 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-white/30 transition-all`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    {b.badge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground line-through">
                    {b.val}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${b.iconColor} shrink-0`}>
                    <b.Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>Incluso Grátis na Área de Membros</span>
                </span>
                <span className="text-white/40 font-mono text-[10px]">100% LIBERADO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing Section ---------------- */

function PricingSection() {
  return (
    <section id="planos" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>PLANOS E ASSINATURAS</SectionEyebrow>
          <h2
            className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Escolha o plano ideal para a sua operação.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-muted-foreground">
            Sem fidelidade nem multas. Cancele quando quiser. Suporte humano no WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Plano Individual */}
          <div className="relative border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                PLANO INDIVIDUAL
              </span>
              <h3 className="mt-3 text-2xl font-light" style={{ fontFamily: SERIF }}>
                1 Perfil Instagram
              </h3>
              <p className="mt-2 text-xs font-light text-muted-foreground">
                Perfeito para profissionais autônomos, médicos, advogados ou pequenos negócios.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground font-mono">R$</span>
                <span className="text-5xl font-light text-foreground" style={{ fontFamily: SERIF }}>97</span>
                <span className="text-xs font-mono text-muted-foreground">/ mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                {[
                  "1 Conta de Instagram vinculada",
                  "Piloto Automático ativado 24/7",
                  "Mapeamento de até 5 concorrentes",
                  "Filtro anti-fake inteligente",
                  "Disparo de Direct automático",
                  "Extensão para Google Chrome",
                  "Todos os 4 Bônus VIP na Área de Membros",
                  "Suporte padrão via WhatsApp",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-light text-foreground/85">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WA_PLANO_INDIVIDUAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/90 hover:border-primary/40 hover:text-foreground transition-colors"
            >
              Assinar Plano Individual
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Plano Agência Multi (RECOMENDADO / DESTACADO) */}
          <div className="relative border-2 border-primary/60 bg-[#0D0E14] p-8 flex flex-col justify-between shadow-2xl hover:border-primary transition-all">
            <span className="absolute -top-3.5 right-6 bg-primary px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A] font-bold">
              ⭐ MAIS VENDIDO (RECOMENDADO)
            </span>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                PLANO AGÊNCIA MULTI
              </span>
              <h3 className="mt-3 text-2xl font-light text-primary" style={{ fontFamily: SERIF }}>
                Até 5 Perfis + Instalador Windows
              </h3>
              <p className="mt-2 text-xs font-light text-muted-foreground">
                Para agências, gestores de tráfego ou quem gerencia múltiplas contas.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground font-mono">R$</span>
                <span className="text-5xl font-light text-primary" style={{ fontFamily: SERIF }}>297</span>
                <span className="text-xs font-mono text-muted-foreground">/ mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                {[
                  "Até 5 Contas de Instagram simultâneas",
                  "Instalador Automático Windows (1-Click)",
                  "Alternância rápida de perfis no instalador",
                  "Piloto Automático em todas as contas",
                  "Exportador de listas em CSV (Meta Ads)",
                  "Filtros avançados de engajamento",
                  "Todos os 4 Bônus VIP na Área de Membros",
                  "Suporte VIP prioritário 1-a-1 no WhatsApp",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-light text-foreground/90">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WA_PLANO_AGENCIA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] hover:brightness-110 transition-all font-semibold"
            >
              Assinar Plano Agência Multi
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ Accordion ---------------- */

const faqs = [
  {
    q: "Preciso deixar o computador ligado para o Piloto Automático funcionar?",
    a: "Sim, como a extensão executa as ações em tempo real a partir do seu próprio navegador para imitar o comportamento humano natural e evitar bloqueios, o navegador precisa estar aberto.",
  },
  {
    q: "Há risco de bloqueio ou banimento da minha conta?",
    a: "O RDG instaPRO opera dentro dos limites de segurança do Instagram, utilizando intervalos randômicos e pausas de descanso. Diferente de bots antigos, ele atua no ritmo humano.",
  },
  {
    q: "Como funciona o Instalador Automático para Windows?",
    a: "No Plano Agência (R$ 297/mês), enviamos um executável exclusivo que instala a extensão e o navegador portátil configurados em 1 clique na sua máquina, sem precisar fazer nada manual.",
  },
  {
    q: "Posso mudar de plano mais tarde?",
    a: "Com certeza! Você pode começar com o Plano Individual (R$ 97) e migrar para o Plano Agência (R$ 297) a qualquer momento solicitando ao suporte.",
  },
  {
    q: "Como recebo o acesso após assinar?",
    a: "Assim que a assinatura for confirmada, nossa equipe envia sua Chave de Licença e o link de download imediatamente pelo WhatsApp com o passo a passo completo.",
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <SectionEyebrow>DÚVIDAS FREQUENTES</SectionEyebrow>
          <h2
            className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left group"
                >
                  <span
                    className="text-xl font-light text-foreground/90 group-hover:text-primary transition-colors"
                    style={{ fontFamily: SERIF }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA Banner ---------------- */

function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <SectionEyebrow>PROSPECÇÃO AUTOMÁTICA RDG</SectionEyebrow>

        <h2
          className="mt-6 text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          Pronto para automatizar a atração de clientes do seu Instagram?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base font-light text-muted-foreground">
          Junte-se às empresas que já utilizam o software da RDG Digital para gerar novos leads e vendas no piloto automático.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WA_PLANO_AGENCIA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110 font-medium"
          >
            Falar no WhatsApp & Assinar
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WA_DUVIDAS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Tirar Dúvidas com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mini Footer ---------------- */

function MiniFooter() {
  return (
    <footer className="py-8 bg-[#0A0A0A] text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="RDG Digital" className="h-5 w-auto" />
          <span>RDG Digital © 2026</span>
        </div>
        <p>RDG instaPRO — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
