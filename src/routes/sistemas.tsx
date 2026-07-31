import { createFileRoute, Link } from "@tanstack/react-router";
import { LOGO_URL } from "@/lib/site";
import { websiteMeta } from "@/lib/seo";
import { Search, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

const TITLE = "Sistemas & Softwares Digitais — RDG Digital";
const DESCRIPTION =
  "Conheça os softwares e soluções digitais da RDG Digital: Automação no Instagram, Prospecção B2B no Google Maps e Gerador de Demonstrações.";

export const Route = createFileRoute("/sistemas")({
  component: SistemasPage,
  head: () => ({
    meta: [
      ...websiteMeta(TITLE, DESCRIPTION, "https://rdgdigital.com.br/sistemas"),
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://rdgdigital.com.br/sistemas" }],
  }),
});

const DECOR_ICONS: { icon: string; top: string; left: string; size: string; rot: string }[] = [
  { icon: "💈", top: "12%", left: "8%", size: "text-4xl", rot: "-12deg" },
  { icon: "💇", top: "22%", left: "82%", size: "text-3xl", rot: "10deg" },
  { icon: "🏋️", top: "70%", left: "10%", size: "text-4xl", rot: "8deg" },
  { icon: "🌐", top: "78%", left: "85%", size: "text-3xl", rot: "-6deg" },
  { icon: "📱", top: "44%", left: "5%", size: "text-3xl", rot: "14deg" },
  { icon: "🤖", top: "55%", left: "88%", size: "text-4xl", rot: "-10deg" },
];

function SistemasPage() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0B1220] px-5 py-12 text-white font-sans">
      {/* Halos radiais */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(0,217,255,0.14), transparent 70%), radial-gradient(50% 40% at 50% 100%, rgba(0,217,255,0.09), transparent 70%)",
        }}
      />

      <div className="w-full max-w-5xl mx-auto space-y-10 z-10 text-center">
        {/* Logo & Header */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={LOGO_URL}
            alt="RDG Digital"
            className="h-16 sm:h-20 w-auto filter drop-shadow-[0_0_20px_rgba(0,217,255,0.5)]"
          />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl">
            Soluções & Softwares <span style={{ color: "#00D9FF" }}>RDG Digital</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
            Desenvolvemos tecnologias proprietárias de automação, prospecção e vendas para impulsionar negócios no ambiente digital.
          </p>
        </div>

        {/* Grid de Sistemas da RDG Digital */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Software 1: Prospecção B2B Google Maps */}
          <div className="bg-gradient-to-b from-[#111A2E] to-[#0A0F1D] border border-[#00D9FF]/30 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-[#00D9FF]/70 transition-all shadow-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 flex items-center justify-center">
              <Search size={24} />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#00D9FF] uppercase tracking-widest bg-[#00D9FF]/10 px-2.5 py-1 rounded-full border border-[#00D9FF]/20">
                PROSPECÇÃO & VENDAS B2B
              </span>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                Software Prospecção Google Maps
              </h2>
              <p className="text-xs text-white/70 leading-relaxed">
                Ferramenta inteligente que rastreia empresas locais sem website, constrói a demonstração do site oficial ao vivo e gera mensagens de abordagem no WhatsApp.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                to="/prospeccao"
                className="px-5 py-2.5 bg-[#00D9FF] text-black font-extrabold text-xs rounded-xl hover:bg-[#00D9FF]/90 transition-all flex items-center gap-2 shadow-lg shadow-[#00D9FF]/20"
              >
                <span>Acessar Prospecção</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Software 2: RDG instaPRO Automação Instagram */}
          <div className="bg-gradient-to-b from-[#1A112E] to-[#0D0A1D] border border-pink-500/30 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-pink-500/70 transition-all shadow-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/15 text-pink-400 border border-pink-500/30 flex items-center justify-center">
              <Cpu size={24} />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
                AUTOMAÇÃO DE REDES SOCIAIS
              </span>
              <h2 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                RDG instaPRO Automação
              </h2>
              <p className="text-xs text-white/70 leading-relaxed">
                Extensão e robô inteligente para capturar seguidores de concorrentes no Instagram e disparar mensagens de Direct com sistema anti-bloqueio Spintax.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                to="/extensao"
                className="px-5 py-2.5 bg-pink-500 text-white font-extrabold text-xs rounded-xl hover:bg-pink-400 transition-all flex items-center gap-2 shadow-lg shadow-pink-500/20"
              >
                <span>Conhecer RDG instaPRO</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Rodapé institucional */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} RDG Digital. Todos os direitos reservados.</p>
          <Link to="/membros" className="hover:text-white transition-colors">Área de Membros VIP</Link>
        </div>
      </div>
    </main>
  );
}
