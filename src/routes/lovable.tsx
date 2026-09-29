import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LOGO_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Zap,
  Bot,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Mic,
  Code,
  Layers,
  Sparkles,
  Lock,
  CreditCard,
  Crown,
  Loader2,
  Gift,
  BookOpen,
  Smartphone,
  Camera
} from "lucide-react";

const TITLE = "RDG Lovable Extension — Projetos & Prompts sem gastar Créditos";
const DESCRIPTION =
  "Envie mensagens e crie projetos no chat do Lovable sem consumir seus créditos de assinatura. Suporta envio por voz, gravação de áudio e integração de skills.";
const CANONICAL_URL = `${BASE_URL}/lovable`;

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

// Link para a InfinitePay (pode ser atualizado depois)
const CHECKOUT_MENSAL = "#"; 
const CHECKOUT_VITALICIO = "#"; 

export const Route = createFileRoute("/lovable")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: LovableSalesPage,
});

function LovableSalesPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-[#7C4DFF] selection:text-white">
      {/* Background Floating Ambient Icons */}
      <FloatingIcons />

      <main className="relative">
        <Navbar />
        <Hero />
        <MetricsStrip />
        <Differentials />
        <BonusesSection />
        <PricingSection />
      </main>

      <MiniFooter />
    </div>
  );
}

function FloatingIcons() {
  const items = [
    { Icon: Bot, top: "15%", left: "5%", d: "0s", s: 22 },
    { Icon: Zap, top: "25%", left: "85%", d: "1.2s", s: 20 },
    { Icon: Code, top: "55%", left: "8%", d: "0.6s", s: 24 },
    { Icon: Mic, top: "68%", left: "90%", d: "1.8s", s: 20 },
    { Icon: Sparkles, top: "85%", left: "15%", d: "0.4s", s: 22 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block overflow-hidden">
      {items.map((it, i) => (
        <it.Icon
          key={i}
          size={it.s}
          className="absolute text-[#7C4DFF]/15 animate-[floatY_8s_ease-in-out_infinite]"
          style={{ top: it.top, left: it.left, animationDelay: it.d }}
        />
      ))}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: .3; }
          50% { transform: translateY(-16px) rotate(6deg); opacity: .75; }
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
            LOVABLE <span className="text-[#7C4DFF] font-bold">PRO</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 bg-[#7C4DFF] px-5 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.02] hover:brightness-110 font-medium"
          >
            Garantir Acesso
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-[#7C4DFF]/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#7C4DFF]">
      <Sparkles size={12} /> {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionEyebrow>EXTENSÃO EXCLUSIVA LOVABLE</SectionEyebrow>

        <h1
          className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-[68px]"
          style={{ fontFamily: SERIF }}
        >
          Crie projetos e envie mensagens <em className="text-[#7C4DFF] not-italic">sem gastar seus créditos.</em>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
          A <b>RDG Lovable Extension</b> permite que você utilize o poder máximo da inteligência artificial no navegador, injetando prompts por voz, áudio e skills, totalmente bypassando os limites de uso da assinatura padrão.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#planos"
            className="group inline-flex items-center gap-3 bg-[#7C4DFF] px-8 py-4 text-[11px] font-light uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.02] hover:brightness-110 font-medium"
          >
            Escolher Meu Plano
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <Lock size={12} className="text-[#7C4DFF]" />
          Integração nativa no painel do navegador · Download imediato
        </p>

        {/* Vídeo Demonstrativo Loom */}
        <div className="mt-16 w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.loom.com/embed/b1d77e707dc84f5c8f3e67d2c92ba5ab"
            frameBorder="0"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="Demonstração da Extensão Lovable"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function MetricsStrip() {
  const items = [
    { k: "∞", l: "Projetos Ilimitados" },
    { k: "🎙️", l: "Comandos por Voz" },
    { k: "100%", l: "Seguro e Nativo" },
    { k: "24/7", l: "Suporte e Atualizações" },
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
            <p
              className="text-3xl font-light leading-none text-[#7C4DFF] sm:text-4xl"
              style={{ fontFamily: SERIF }}
            >
              {it.k}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {it.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Differentials() {
  const differentials = [
    {
      Icon: Zap,
      title: "Uso Ilimitado",
      desc: "Desenvolva e converse com a IA sem se preocupar com os créditos diários da sua conta.",
    },
    {
      Icon: Mic,
      title: "Comandos de Voz",
      desc: "Grave áudios ou dite mensagens diretamente para a IA criar seus códigos e interfaces rapidamente.",
    },
    {
      Icon: Layers,
      title: "Integração de Skills",
      desc: "Injete bases de conhecimento, contextos e regras pré-definidas para acelerar o desenvolvimento.",
    },
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionEyebrow>RECURSOS DA EXTENSÃO</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          Tudo que você precisa para programar mais rápido.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className="group bg-[#0A0A0A] p-7 transition-colors hover:bg-white/[0.02]"
              style={{ animation: `slideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <d.Icon
                size={20}
                className="text-[#7C4DFF] transition-transform group-hover:scale-110"
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

function BonusesSection() {
  const bonuses = [
    {
      Icon: BookOpen,
      title: "Cursos da RDG",
      desc: "Acesso completo a todas as gravações e aulas de atualização do nosso ecossistema.",
      value: "Bônus Inestimável"
    },
    {
      Icon: Smartphone,
      title: "95 Aplicativos Prontos",
      desc: "Uma galeria com dezenas de aplicativos já montados e validados, prontos para você copiar os prompts, colar e enviar.",
      value: "R$ 497"
    },
    {
      Icon: Camera,
      title: "Ensaio Fotográfico IA",
      desc: "Mais de 700 prompts profissionais para criar ensaios fotográficos ultrarrealistas e vender esse serviço.",
      value: "R$ 297"
    }
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28 bg-[#111218] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7C4DFF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <SectionEyebrow>BÔNUS EXCLUSIVOS</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: SERIF }}
        >
          O que mais você leva hoje?
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {bonuses.map((b, i) => (
            <div
              key={b.title}
              className="group relative border border-white/10 bg-[#0A0A0A] p-7 transition-all hover:border-[#7C4DFF]/50 hover:bg-[#7C4DFF]/5"
              style={{ animation: `slideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <div className="absolute top-0 right-0 bg-[#7C4DFF] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                BÔNUS
              </div>
              <b.Icon
                size={24}
                className="text-emerald-400 mb-4 transition-transform group-hover:scale-110 group-hover:text-[#7C4DFF]"
              />
              <h3
                className="text-xl font-light leading-tight text-white"
                style={{ fontFamily: SERIF }}
              >
                {b.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [isLoading, setIsLoading] = useState<"mensal" | "vitalicio" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"mensal" | "vitalicio" | null>(null);
  const [customerEmail, setCustomerEmail] = useState("");

  const openCheckoutModal = (plan: "mensal" | "vitalicio") => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan || !customerEmail) return;

    setIsLoading(selectedPlan);
    try {
      const baseUrl = window.location.origin;
      const randomCode = Math.random().toString(36).substring(2, 10).toUpperCase();
      const novaChave = `LVB-${randomCode}`;

      // JSON no formato exigido pela InfinitePay
      const payload = {
        handle: "sua_infinite_tag",
        // Redireciona o cliente de volta pro site já com a chave na URL!
        redirect_url: `${baseUrl}/retorno?chave=${novaChave}`, 
        webhook_url: `${baseUrl}/api/webhook-infinitepay`,
        // NSU agora carrega a chave, o plano e o email
        order_nsu: `${novaChave}_${selectedPlan.toUpperCase()}_${customerEmail}`,
        items: [
          {
            quantity: 1,
            price: selectedPlan === "mensal" ? 6999 : 14999,
            description: selectedPlan === "mensal" ? "Extensão Lovable - Plano Mensal" : "Extensão Lovable - Plano Vitalício"
          }
        ]
      };

      // Chamando a nossa própria API na Vercel para evitar bloqueio de CORS e proteger a chave
      const API_URL = "/api/create-checkout"; 

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      
      if (data && data.url) {
        window.location.href = data.url;
      } else {
        alert("Erro ao gerar link de pagamento (Verifique o console).");
        console.error("Resposta InfinitePay:", data);
        setIsLoading(null);
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
      alert("Erro ao conectar com a InfinitePay.");
      setIsLoading(null);
    }
  };

  return (
    <section id="planos" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <SectionEyebrow>PLANOS DISPONÍVEIS</SectionEyebrow>
          <h2
            className="mt-4 text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Escolha o acesso ideal para você.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Plano Mensal */}
          <div className="relative border border-white/10 bg-[#111218] p-8 transition-colors hover:border-[#7C4DFF]/50">
            <h3 className="font-mono text-sm uppercase tracking-widest text-white">Plano Mensal</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-light text-white" style={{ fontFamily: SERIF }}>R$ 69,99</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/mês</span>
            </div>
            <p className="mt-4 text-xs font-light text-foreground/80 leading-relaxed">
              Acesso completo à Extensão Lovable com atualizações contínuas enquanto durar a assinatura.
            </p>

            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {["Uso ilimitado sem consumir créditos", "Comandos por voz e áudio", "Atualizações mensais"].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-light text-foreground/85">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#7C4DFF]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openCheckoutModal("mensal")}
              disabled={isLoading !== null}
              className="mt-8 flex w-full items-center justify-center gap-2 border border-[#7C4DFF]/40 bg-[#7C4DFF]/10 py-3 text-center font-mono text-[11px] uppercase tracking-widest text-[#7C4DFF] hover:bg-[#7C4DFF]/20 transition-colors disabled:opacity-50"
            >
              {isLoading === "mensal" ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <CreditCard size={14} />
              )}
              {isLoading === "mensal" ? "Gerando Checkout..." : "Assinar Mensal"}
            </button>
          </div>

          {/* Plano Vitalício */}
          <div className="relative border border-[#7C4DFF] bg-[#111218] p-8 shadow-[0_0_40px_-10px_rgba(124,77,255,0.2)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C4DFF] px-4 py-1 font-mono text-[9px] uppercase tracking-widest text-white font-bold">
              MAIS VANTAJOSO
            </div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#7C4DFF]">Plano Vitalício</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-light text-white" style={{ fontFamily: SERIF }}>R$ 149,99</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Único</span>
            </div>
            <p className="mt-4 text-xs font-light text-foreground/80 leading-relaxed">
              Pagamento único. Acesso garantido e sem mensalidades futuras.
            </p>
            
            <div className="mt-3 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded text-[10px] text-amber-200/90 leading-relaxed font-mono">
              <span className="block font-bold mb-1">OBSERVAÇÃO IMPORTANTE:</span>
              Como se trata de um método, nós garantimos o funcionamento enquanto o método estiver funcionando.
            </div>

            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {["Pagamento Único (Sem mensalidade)", "Uso ilimitado sem consumir créditos", "Comandos por voz e áudio", "Atualizações incluídas"].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-light text-foreground/85">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#7C4DFF]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openCheckoutModal("vitalicio")}
              disabled={isLoading !== null}
              className="mt-8 flex w-full items-center justify-center gap-2 bg-[#7C4DFF] py-3 text-center font-mono text-[11px] uppercase tracking-widest text-white hover:brightness-110 transition-all font-bold disabled:opacity-50"
            >
              {isLoading === "vitalicio" ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Crown size={14} />
              )}
              {isLoading === "vitalicio" ? "Gerando Checkout..." : "Garantir Vitalício"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal de E-mail para Checkout */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#111218] border border-white/10 w-full max-w-md p-6 sm:p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              ✕
            </button>
            <div className="text-center space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C4DFF] border border-[#7C4DFF]/30 px-3 py-1 bg-[#7C4DFF]/10">
                PASSO 1 DE 2
              </span>
              <h3 className="text-2xl font-light text-white pt-2" style={{ fontFamily: SERIF }}>
                Para onde enviamos seu acesso?
              </h3>
              <p className="text-xs text-foreground/70 font-light leading-relaxed">
                Digite o seu melhor e-mail abaixo. A chave de licença oficial da extensão será enviada automaticamente para ele após a compra.
              </p>
            </div>

            <form onSubmit={handleCheckout} className="mt-8 space-y-4">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase text-muted-foreground">E-mail Principal</label>
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder="seu.email@exemplo.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7C4DFF] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={!customerEmail || isLoading !== null}
                className="w-full flex items-center justify-center gap-2 bg-[#7C4DFF] py-3.5 text-center font-mono text-[11px] uppercase tracking-widest text-white hover:brightness-110 transition-all font-bold disabled:opacity-50"
              >
                {isLoading !== null ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <ArrowRight size={16} />
                )}
                {isLoading !== null ? "Gerando Checkout..." : "Ir para o Pagamento"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Botão de WhatsApp Flutuante */}
      <a
        href="https://wa.me/5521920078469"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-110 transition-transform hover:bg-emerald-400"
        title="Dúvidas? Fale no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}

function MiniFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RDG Digital" className="h-6 w-auto opacity-50 grayscale" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            © 2026 RDG Digital. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
