import { createFileRoute, Link } from "@tanstack/react-router";
import { websiteMeta } from "@/lib/seo";
import { waLink, LOGO_URL } from "@/lib/site";
import {
  Code2,
  Sparkles,
  MessageSquare,
  ImageIcon,
  Mic,
  Key,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  LayoutDashboard,
  FileText,
  Video,
  Play,
  Cpu,
  Layers,
  Bot,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const TITLE = "RDG AI — A Plataforma Completa de Inteligência Artificial & Criador de Apps";
const DESCRIPTION =
  "Crie aplicativos, sites, sistemas, dashboards e e-books com IA. Acesse Multi-IA Chat (GPT-5.6, Claude 3.7, Gemini 3.6), Gerador de Imagens 4K, Vozes Realistas e Rotação de Chaves de API.";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

export const Route = createFileRoute("/rdg-ai")({
  component: RdgAiSalesPage,
  head: () => ({
    meta: [
      ...websiteMeta(TITLE, DESCRIPTION, "https://rdgdigital.com.br/rdg-ai"),
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://rdgdigital.com.br/rdg-ai" }],
  }),
});

function RdgAiSalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-foreground font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Background Glow Aurora */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute top-[30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[150px]" />
      </div>

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#070709]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="RDG Digital" className="h-8 w-auto object-contain" />
            <span className="border-l border-white/10 pl-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              RDG <span className="font-bold text-cyan-400">AI PLATAFORMA</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://rdgdigital.com.br/rdg_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
            >
              Acessar Plataforma
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:brightness-110"
            >
              <span>Ver Planos</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24">
        {/* ── HERO SECTION ──────────────────────────────────────────────── */}
        <section className="px-4 text-center sm:px-6 max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            A Suíte de Inteligência Artificial Mais Completa do Brasil
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08]"
            style={{ fontFamily: SERIF }}
          >
            Crie Aplicativos, Sites, Imagens 4K & Vozes Realistas <br />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent font-normal">
              Tudo em Uma Única Plataforma
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg font-light text-zinc-300 leading-relaxed">
            Esqueça pagar mensalidades para 5 ferramentas diferentes. Com a plataforma <strong className="text-white font-medium">RDG AI</strong>, você tem o criador de apps mais avançado do mercado, chats com os modelos mais poderosos do mundo, gerador de imagens 4K e estúdio de áudio com vozes hiper-realistas.
          </p>

          {/* CTAs do Hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#planos"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-[1.03] transition-all flex items-center justify-center gap-3"
            >
              <span>Garantir Meu Acesso Agora</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="https://rdgdigital.com.br/rdg_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Testar Painel Grátis</span>
              <Play size={14} className="fill-current text-cyan-400" />
            </a>
          </div>

          {/* Badges de Confiança */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Sem fidelidade</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Leitor de PDF & E-books</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Suporte a Vídeos & Voz</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Rotação Multi-Chaves</span>
          </div>

          {/* VSL / Demo Visual Mockup */}
          <div className="pt-10 relative max-w-5xl mx-auto">
            <div className="rounded-3xl border border-white/15 bg-zinc-950/80 p-3 shadow-2xl shadow-violet-950/50 backdrop-blur-2xl overflow-hidden group">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-zinc-900/60 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">rdgdigital.com.br/rdg_ai</span>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">AO VIVO</span>
              </div>
              <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-black flex items-center justify-center group">
                <img
                  src="https://image.pollinations.ai/prompt/futuristic%20dashboard%20ui%20ai%20code%20builder%20dark%20theme%20neon%20violet%20cyan%20glassmorphism?width=1200&height=675&nologo=true"
                  alt="RDG AI Dashboard Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center backdrop-blur-md shadow-2xl shadow-cyan-500/50 animate-pulse">
                    <Play size={36} className="text-cyan-300 ml-1 fill-current" />
                  </div>
                  <h3 className="text-lg font-bold text-white mt-4">RDG AI em Ação</h3>
                  <p className="text-xs text-zinc-300 max-w-md">Veja como gerar aplicativos, landing pages, imagens 4K e vozes realistas com apenas um comando.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DESTASQUE DO CARRO-CHEFE: RDG BUILDER ───────────────────────── */}
        <section className="mt-32 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-950/40 via-zinc-950/60 to-zinc-950/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/30">
                <Code2 size={28} />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">O CARRO-CHEFE</span>
                <h2 className="text-3xl sm:text-4xl font-light text-white" style={{ fontFamily: SERIF }}>RDG Builder — Criador de Apps & Sites por IA</h2>
              </div>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
              Digite o que você quer ou envie um arquivo e veja o RDG Builder construir aplicações completas, responsivas e prontas para o ar em segundos.
            </p>

            {/* Grid de Capacidades do Builder */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-violet-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 text-violet-300 flex items-center justify-center mb-4">
                  <FileText size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Leitor de PDFs & E-books</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Suba PDFs de receitas, livros ou manuais. A IA extrai o texto real página por página e monta o app/site com o conteúdo exato.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-cyan-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
                  <Video size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Vídeos no Fundo & Hero</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Gere hero sections com vídeos de fundo cinematográficos, players no cabeçalho ou iFrames do YouTube para landing pages de alta conversão.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Mic size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Comandos por Voz & Magic Prompt</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fale diretamente pelo microfone e use a função Magic Prompt para expandir ideias simples em prompts de nível sênior automaticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MÓDULOS DA SUÍTE RDG AI ────────────────────────────────────── */}
        <section className="mt-32 px-4 sm:px-6 max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">A SUÍTE COMPLETA</span>
            <h2 className="text-3xl sm:text-5xl font-light text-white" style={{ fontFamily: SERIF }}>
              Todos os Módulos que Você Precisa em um Só Painel
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
              Sem necessidade de trocar de site ou gerenciar 5 assinaturas. Tudo integrado e pronto para uso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Módulo 1: Multi-IA Chat */}
            <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl font-light text-white group-hover:text-cyan-400 transition-colors" style={{ fontFamily: SERIF }}>
                  Multi-IA Chat Unificado
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Converse no mesmo lugar com os modelos mais avançados da atualidade: <strong className="text-zinc-200 font-medium">GPT-5.6 Sol, Claude 3.7 Sonnet, Fable 5, Claude Opus 4.8, Gemini 3.6 Flash e Llama</strong>.
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Suporte a OCR e Análise de Arquivos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Troca de modelo em 1 clique</li>
                </ul>
              </div>
            </div>

            {/* Módulo 2: Gerador de Imagens 4K */}
            <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 hover:border-violet-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20 flex items-center justify-center">
                  <ImageIcon size={24} />
                </div>
                <h3 className="text-2xl font-light text-white group-hover:text-violet-400 transition-colors" style={{ fontFamily: SERIF }}>
                  Gerador de Imagens 4K
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Crie artes, logotipos, fotos de produtos e ilustrações em <strong className="text-zinc-200 font-medium">4K Ultra-Realistas</strong> com geradores de última geração.
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-violet-400" /> Estilos fotorrealistas e 3D</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-violet-400" /> Download em altíssima resolução</li>
                </ul>
              </div>
            </div>

            {/* Módulo 3: Áudio e Vozes Realistas */}
            <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <Mic size={24} />
                </div>
                <h3 className="text-2xl font-light text-white group-hover:text-emerald-400 transition-colors" style={{ fontFamily: SERIF }}>
                  Áudio & Vozes Realistas
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Gere narrações com <strong className="text-zinc-200 font-medium">Vozes Hiper-Realistas</strong> de qualidade humana e transcreva arquivos de áudio longos em segundos.
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Narração para vídeos e anúncios</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Transcrição automática de reuniões</li>
                </ul>
              </div>
            </div>

            {/* Módulo 4: Rotação Multi-Key */}
            <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 hover:border-amber-500/40 transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                    <Key size={12} /> ECONOMIA EXTREMA
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: SERIF }}>
                    Central de Chaves com Rotação Ilimitada
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Cadastre múltiplas chaves de API próprias (Gemini, Groq, OpenAI, Anthropic, SiliconFlow). O RDG AI alterna automaticamente entre as chaves quando os limites de cota forem atingidos — garantindo uso ininterrupto sem pagar mensalidades absurdas por token.
                  </p>
                </div>
                <div className="shrink-0 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-amber-400 block">Até 90%</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-medium">de Economia Real</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TABELA DE PREÇOS (PRICING) ─────────────────────────────────── */}
        <section id="planos" className="mt-32 px-4 sm:px-6 max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">PLANOS & INVESTIMENTO</span>
            <h2 className="text-3xl sm:text-5xl font-light text-white" style={{ fontFamily: SERIF }}>
              Escolha o Plano Perfeito para o Seu Ritmo
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
              Cancele ou altere quando quiser. Sem contratos engessados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
            {/* Plano Grátis */}
            <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 flex flex-col justify-between relative">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">DEGUSTAÇÃO</span>
                  <h3 className="text-2xl font-light text-white mt-1" style={{ fontFamily: SERIF }}>Grátis</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">R$ 0</span>
                    <span className="text-xs text-zinc-400">/para sempre</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/10 pt-4">
                  Perfeito para conhecer o sistema e testar recursos básicos com o Motor RDG Grátis.
                </p>

                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> RDG Builder (Projetos básicos)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Multi-IA Chat (Motor RDG Grátis)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Gerador de Imagens básico</li>
                  <li className="flex items-center gap-2 text-zinc-500"><span className="w-3.5 h-3.5 rounded-full border border-zinc-600 flex items-center justify-center text-[9px]">✕</span> Sem cadastro de chaves de API</li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://rdgdigital.com.br/rdg_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-wider transition-all text-center block"
                >
                  Começar Grátis
                </a>
              </div>
            </div>

            {/* Plano Starter */}
            <div className="rounded-3xl border border-white/15 bg-zinc-950/80 p-8 flex flex-col justify-between relative">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">STARTER</span>
                  <h3 className="text-2xl font-light text-white mt-1" style={{ fontFamily: SERIF }}>Iniciante</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">R$ 67</span>
                    <span className="text-xs text-zinc-400">/mês</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/10 pt-4">
                  Ideal para quem quer usar suas próprias chaves de API com cota grátis dos provedores.
                </p>

                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> <strong className="text-white">RDG Builder Completo</strong> (PDFs, Vídeos & Voz)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Multi-IA Chat (GPT-5.6, Claude 3.7, Gemini)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Gerador de Imagens 4K & Vozes Realistas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Conecta até <strong className="text-white">1 chave por provedor</strong></li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={waLink("Olá! Quero assinar o plano Starter (R$ 67/mês) do RDG AI.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold text-xs uppercase tracking-wider transition-all text-center block"
                >
                  Assinar Starter
                </a>
              </div>
            </div>

            {/* Plano Pro / Agência (RECOMENDADO) */}
            <div className="rounded-3xl border-2 border-gradient-to-r border-violet-500 bg-gradient-to-b from-violet-950/40 via-zinc-950 to-zinc-950 p-8 flex flex-col justify-between relative shadow-2xl shadow-violet-500/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                MAIS POPULAR & RECOMENDADO
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-widest font-bold">PLANO PRO / AGÊNCIA</span>
                  <h3 className="text-2xl font-light text-white mt-1" style={{ fontFamily: SERIF }}>Ilimitado</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white">R$ 97</span>
                    <span className="text-xs text-zinc-400">/mês</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed border-t border-white/10 pt-4">
                  Para criadores, agências e devs que buscam rotação ilimitada de chaves e produção em massa.
                </p>

                <ul className="space-y-3 text-xs text-zinc-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> <strong className="text-white">RDG Builder Pro Ilimitado</strong></li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> <strong className="text-white">ROTAÇÃO ILIMITADA DE CHAVES</strong> por provedor</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Leitor de PDF, E-books & Vídeos 100% Liberados</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Gerador de Imagens 4K & Vozes Realistas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Suporte Prioritário VIP no WhatsApp</li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={waLink("Olá! Quero assinar o plano PRO ILIMITADO (R$ 97/mês) do RDG AI.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-violet-500/30 hover:scale-[1.02] transition-all text-center block"
                >
                  Assinar Plano Pro (R$ 97/mês)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <section className="mt-32 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">TIRA-DÚVIDAS</span>
            <h2 className="text-3xl sm:text-4xl font-light text-white" style={{ fontFamily: SERIF }}>
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Preciso saber programar para usar o RDG Builder?",
                a: "Não! O RDG Builder foi desenhado para criar aplicações completas usando linguagem natural. Basta escrever o que deseja ou anexar um PDF/vídeo que a IA programa o HTML, CSS e JavaScript completo."
              },
              {
                q: "Como funciona a Rotação de Chaves de API?",
                a: "Provedores como o Google Gemini oferecem cotas gratuitas generosas. No RDG AI você pode cadastrar várias chaves. Quando uma chave atinge o limite do dia, o sistema alterna automaticamente para a próxima chave sem parar sua produção."
              },
              {
                q: "O código gerado no RDG Builder é meu?",
                a: "Sim! Em 1 clique você pode baixar o arquivo HTML completo e hospedá-lo no seu próprio servidor, Vercel, Netlify ou enviar para o seu cliente."
              },
              {
                q: "Como funciona o leitor de PDF e E-books?",
                a: "Você anexa seu PDF (ex: livro de receitas, manual ou apresentação) e nosso motor extrai o texto real página por página, instruindo a IA a estruturar o site com base no conteúdo exato do seu documento."
              }
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-950/60 overflow-hidden transition-colors">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-cyan-400" : "text-zinc-500"}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-300 font-light border-t border-white/5 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
        <section className="mt-32 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-violet-950/50 via-zinc-950 to-cyan-950/50 p-10 sm:p-16 space-y-6 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-light text-white" style={{ fontFamily: SERIF }}>
              Pronto para Transformar Suas Ideias em Apps e Mídias?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Junte-se a criadores, desenvolvedores e empresários que estão economizando tempo e dinheiro com a suíte RDG AI.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink("Olá! Gostaria de tirar dúvidas sobre o RDG AI e escolher meu plano.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://rdgdigital.com.br/rdg_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
              >
                Acessar Plataforma
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070709] py-8 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} RDG Digital. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-zinc-400">
            <Link to="/" className="hover:text-white transition-colors">RDG Digital Home</Link>
            <Link to="/sistemas" className="hover:text-white transition-colors">Sistemas</Link>
            <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
