import { createFileRoute, Link } from "@tanstack/react-router";
import { waLink, LOGO_URL } from "@/lib/site";
import { websiteMeta } from "@/lib/seo";
import { Search, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Cpu, Globe, Lock } from "lucide-react";

const TITLE = "Sistemas & Softwares Digitais — RDG Digital";
const DESCRIPTION =
  "Conheça os softwares e soluções digitais da RDG Digital: Automação no Instagram, Prospecção B2B no Google Maps e Gerador de Demonstrações.";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

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

function SistemasPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] flex flex-col justify-between">
      {/* Top Navbar Header (Idêntico ao Screenshot 1 /extensao) */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="RDG Digital" className="h-8 w-auto object-contain" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-l border-white/10 pl-3">
              SOLUÇÕES <span className="text-primary font-bold">DIGITAIS</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/membros"
              className="hidden sm:inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
            >
              Área de Membros
            </Link>
            <Link
              to="/prospeccao-b2b"
              className="inline-flex items-center gap-2 bg-primary px-5 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-[#0A0A0A] transition-transform hover:scale-[1.02] hover:brightness-110 font-bold"
            >
              Conhecer Softwares
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-36 pb-20 px-4 max-w-6xl mx-auto w-full space-y-16 text-center">
        {/* Header Hero */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            <Sparkles size={12} /> ECOSSISTEMA DE SOFTWARES RDG DIGITAL
          </span>

          <h1
            className="text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl text-white"
            style={{ fontFamily: SERIF }}
          >
            Soluções & Softwares <em className="text-primary not-italic">RDG Digital</em>
          </h1>

          <p className="text-sm sm:text-base font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Desenvolvemos tecnologias proprietárias de automação, prospecção e vendas para impulsionar negócios no ambiente digital com máxima eficiência.
          </p>
        </div>

        {/* Grid de Sistemas da RDG Digital (Formatado no mesmo padrão de Screenshot 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {/* Software 1: Prospecção B2B Google Maps */}
          <div className="border border-white/10 bg-[#0A0A0A] p-8 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-colors relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                <Search size={24} />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary block">
                PROSPECÇÃO & VENDAS B2B
              </span>

              <h2 className="text-2xl font-light text-white group-hover:text-primary transition-colors" style={{ fontFamily: SERIF }}>
                Software Prospecção Google Maps
              </h2>

              <p className="text-xs font-light leading-relaxed text-muted-foreground">
                Ferramenta inteligente que rastreia empresas locais sem website, constrói a demonstração do site oficial ao vivo em 1-clique e gera mensagens de abordagem no WhatsApp.
              </p>

              <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-foreground/80">
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-primary" /> Rastreamento de Leads sem Website</li>
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-primary" /> Gerador de Sites de Demonstração em Tempo Real</li>
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-primary" /> $200/mês de Crédito Grátis no Google</li>
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/prospeccao-b2b"
                className="w-full sm:w-auto flex-1 py-3.5 px-6 bg-primary text-black font-extrabold text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                <span>Conhecer Software</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/prospeccao"
                className="w-full sm:w-auto py-3.5 px-5 border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-widest transition-all text-center"
              >
                Abrir Sistema
              </Link>
            </div>
          </div>

          {/* Software 2: RDG instaPRO Automação Instagram */}
          <div className="border border-white/10 bg-[#0A0A0A] p-8 space-y-6 flex flex-col justify-between hover:border-pink-500/40 transition-colors relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center">
                <Cpu size={24} />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-pink-400 block">
                AUTOMAÇÃO DE REDES SOCIAIS
              </span>

              <h2 className="text-2xl font-light text-white group-hover:text-pink-400 transition-colors" style={{ fontFamily: SERIF }}>
                RDG instaPRO Automação
              </h2>

              <p className="text-xs font-light leading-relaxed text-muted-foreground">
                Extensão e robô inteligente para capturar seguidores de concorrentes no Instagram e disparar mensagens de Direct com sistema anti-bloqueio Spintax.
              </p>

              <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-foreground/80">
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-pink-400" /> Piloto Automático 24/7</li>
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-pink-400" /> Sistema Spintax Anti-Bloqueio</li>
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-pink-400" /> Instalador em 1-Clique para Windows</li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to="/extensao"
                className="w-full py-3.5 px-6 bg-pink-500 hover:bg-pink-400 text-white font-extrabold text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20"
              >
                <span>Conhecer RDG instaPRO</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} RDG Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
