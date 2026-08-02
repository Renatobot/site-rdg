import { useState, useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { waLink, LOGO_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Download,
  Play,
  CheckCircle2,
  Zap,
  MessageCircle,
  Lock,
  UserCheck,
  Video,
  Key,
  ExternalLink,
  ChevronRight,
  LogOut,
  AlertCircle,
  Loader2,
  Camera,
  Tv,
  X,
  Search,
  Globe,
  MapPin,
  ArrowLeft,
  Crown,
  BookOpen,
  Sparkles,
  Copy,
  Check,
  Smartphone,
  Laptop,
  Send,
  Heart,
  Bookmark,
  Users,
  Instagram,
  Star,
  Phone,
  BarChart3,
  Terminal,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const TITLE = "Área de Membros & Treinamentos VIP — RDG Digital";
const DESCRIPTION =
  "Área exclusiva para clientes RDG Digital: Acesse seus softwares, baixe as extensões, assista aos treinamentos em vídeo e acesse bônus exclusivos.";
const CANONICAL_URL = `${BASE_URL}/membros`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Sou aluno da Área de Membros e preciso de suporte com a minha licença ou produto."
);

// Link de Download do Instalador ZIP Instagram (Dropbox Direct 1-Click Download)
const DOWNLOAD_ZIP_URL = "https://www.dropbox.com/scl/fo/dt1wornxoi3o7r8mbvxqa/AHgL-XE1noUweqCiPes0UXc?rlkey=ixkg579ok6lzecx5x1pwndb6w&st=5ebzm8eh&dl=1";

// Link da Pasta da Extensão Lovable no Dropbox
const DOWNLOAD_LOVABLE_ZIP_URL = "https://www.dropbox.com/scl/fo/yr1sv7ggqe1b1en7mhtjx/ANCfO7LWYw_hFaLosB6GrJA?rlkey=pasvz7ehttiusa5g6so28r2d9&st=3q7emobf&dl=1";

interface LicenseData {
  cliente: string;
  key: string;
  max_profiles: number;
  is_lifetime?: boolean;
  expires_at?: string;
  status: string;
  produto?: string;
}

export const Route = createFileRoute("/membros")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: MembrosPage,
});

function MembrosPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [inputKey, setInputKey] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [licenseInfo, setLicenseInfo] = useState<LicenseData | null>(null);

  // Controle de Navegação de Páginas (home, instagram, lovable, prospeccao)
  const [viewMode, setViewMode] = useState<"home" | "instagram" | "lovable" | "prospeccao">("home");

  // Estado das Aulas do Instagram
  const [activeInstagramVideo, setActiveInstagramVideo] = useState<number>(0);

  // Check saved license key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem("rdg_license_key");
    if (savedKey) {
      validateKey(savedKey, true);
    } else {
      setIsVerifying(false);
    }
  }, []);

  const validateKey = async (keyToValidate: string, isAutoCheck = false) => {
    const cleanKey = keyToValidate.trim().toUpperCase();
    if (!cleanKey) {
      setLoginError("Digite a sua chave de licença para acessar.");
      setIsVerifying(false);
      return;
    }

    setIsVerifying(true);
    setLoginError(null);

    // Chaves Master Dev Oficial
    if (cleanKey === "RDG-MASTER" || cleanKey === "RDG-MASTER-PROSPECT-2026") {
      setLicenseInfo({
        cliente: "Administrador RDG Digital",
        key: cleanKey,
        max_profiles: 999,
        is_lifetime: true,
        status: "ativo",
        produto: "master",
      });
      setIsAuthenticated(true);
      localStorage.setItem("rdg_license_key", cleanKey);
      setIsVerifying(false);
      return;
    }

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/licenses?key=eq.${encodeURIComponent(cleanKey)}&select=*`,
        {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro de resposta do servidor de licenças.");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const lic: LicenseData = data[0];
        const isExpired =
          lic.expires_at && new Date(lic.expires_at) < new Date();

        if (
          (lic.status && lic.status.toLowerCase() === "inativo") ||
          isExpired
        ) {
          setLoginError("Esta chave de licença está inativa ou expirada. Fale com o suporte.");
          if (isAutoCheck) localStorage.removeItem("rdg_license_key");
          setIsAuthenticated(false);
        } else {
          setLicenseInfo(lic);
          setIsAuthenticated(true);
          localStorage.setItem("rdg_license_key", cleanKey);
        }
      } else {
        setLoginError(`Chave "${cleanKey}" não foi localizada no banco de dados RDG.`);
        if (isAutoCheck) localStorage.removeItem("rdg_license_key");
        setIsAuthenticated(false);
      }
    } catch (err: any) {
      console.error(err);
      setLoginError("Erro ao conectar com o servidor. Verifique sua conexão com a internet.");
      setIsAuthenticated(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateKey(inputKey);
  };

  const handleLogout = () => {
    localStorage.removeItem("rdg_license_key");
    setIsAuthenticated(false);
    setLicenseInfo(null);
    setInputKey("");
    setLoginError(null);
    setViewMode("home");
  };

  const getValidityDetails = (lic: LicenseData) => {
    if (lic.is_lifetime) {
      return { text: "Licença Ativa", badge: "✨ ATIVA", isWarning: false };
    }
    if (lic.expires_at) {
      const exp = new Date(lic.expires_at);
      const now = new Date();
      const diffTime = exp.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const dateStr = exp.toLocaleDateString("pt-BR");
      if (diffDays <= 0) {
        return { text: "Expirado", badge: "❌ EXPIRADO", isWarning: true };
      }
      return {
        text: `Vence em ${dateStr} (${diffDays} dias)`,
        badge: `⏳ ${diffDays} DIAS RESTANTES`,
        isWarning: diffDays <= 5,
      };
    }
    return { text: "Permanente", badge: "✨ ATIVA", isWarning: false };
  };

  // Vídeo Aulas Exclusivas do Instagram (RDG instaPRO)
  const instagramVideos = [
    {
      id: 0,
      title: "Aula 01: Visão Geral & Boas-Vindas",
      duration: "04:12 min",
      loomUrl: "https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d",
      description: "Apresentação completa do RDG instaPRO, estrutura da ferramenta e como navegar na área de membros.",
    },
    {
      id: 1,
      title: "Aula 02: Como Baixar e Instalar o Robô",
      duration: "08:45 min",
      loomUrl: "https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d",
      description: "Passo a passo para baixar o arquivo .ZIP, descompactar na pasta recomendada e rodar o instalador.",
    },
    {
      id: 2,
      title: "Aula 03: Carregando a Extensão no Chrome",
      duration: "06:30 min",
      loomUrl: "https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d",
      description: "Como ativar o Modo do Desenvolvedor no navegador Chrome e carregar a pasta da extensão.",
    },
    {
      id: 3,
      title: "Aula 04: Configurando Perfis e Intervalos Seguros",
      duration: "11:20 min",
      loomUrl: "https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d",
      description: "Boas práticas antibloqueio: tempo de pausa entre mensagens, limites diários por conta e spintax.",
    },
    {
      id: 4,
      title: "Aula 05: Extração de Leads Segmentados",
      duration: "09:15 min",
      loomUrl: "https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d",
      description: "Como capturar seguidores de concorrentes, hashtags de nicho e publicar listas de contatos alvos.",
    },
    {
      id: 5,
      title: "Aula 06: Automação de Directs e Respostas Freq.",
      duration: "13:00 min",
      loomUrl: "https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d",
      description: "Configurando o disparo automático de mensagens personalizadas com variações de texto em tempo real.",
    },
  ];

  // INITIAL SPINNER
  if (isVerifying && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 font-mono">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            VALIDANDO ACESSO RDG DIGITAL...
          </p>
        </div>
      </div>
    );
  }

  // LOGIN GATE MODAL (ESTILO GEOMÉTRICO RETANGULAR RDG)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-foreground font-sans flex flex-col justify-between selection:bg-primary selection:text-[#0A0A0A]">
        <header className="border-b border-white/10 bg-[#0A0A0A] px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="RDG Digital" className="h-7 w-auto object-contain" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-white/10 pl-3">
              ÁREA VIP <span className="text-primary font-bold">MEMBROS</span>
            </span>
          </a>

          <a
            href={WA_SUPORTE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <MessageCircle size={13} />
            <span>SUPORTE VIP</span>
          </a>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 py-12">
          <div className="w-full max-w-md bg-[#0A0A0A] border border-white/15 p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                <Lock size={12} /> AUTENTICAÇÃO VIP
              </span>
              <h1 className="text-2xl font-light text-white tracking-tight pt-2">
                Acesse sua Área de Membros
              </h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Insira sua chave de licença oficial para desbloquear seus softwares e treinamentos.
              </p>
            </div>

            {loginError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/40 font-mono text-[11px] text-rose-300 flex items-start gap-2.5">
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Chave de Licença (Key)
                </label>
                <div className="relative">
                  <Key
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value.toUpperCase())}
                    placeholder="IG-XXXX / LOVE-XXXX / MAPS-XXXX"
                    className="w-full bg-[#111218] border border-white/15 pl-10 pr-4 py-3 text-xs text-white font-mono placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-all uppercase tracking-[0.15em]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A] font-bold transition-transform hover:scale-[1.01] hover:brightness-110 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>VERIFICANDO CHAVE...</span>
                  </>
                ) : (
                  <>
                    <UserCheck size={16} />
                    <span>ENTRAR NA ÁREA VIP</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                Perdeu ou deseja renovar sua licença?
              </p>
              <a
                href={WA_SUPORTE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary hover:underline"
              >
                <span>FALAR COM SUPORTE NO WHATSAPP</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-t border-white/5">
          © 2026 RDG DIGITAL. TODOS OS DIREITOS RESERVADOS.
        </footer>
      </div>
    );
  }

  const valInfo = licenseInfo ? getValidityDetails(licenseInfo) : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] scroll-smooth">
      
      {/* ══ HEADER BAR GEOMÉTRICO RDG ══ */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md px-4 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {viewMode !== "home" && (
              <button
                onClick={() => setViewMode("home")}
                className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:border-primary hover:text-white"
              >
                <ArrowLeft size={14} />
                <span>VOLTAR</span>
              </button>
            )}

            <a href="/membros" onClick={(e) => { e.preventDefault(); setViewMode("home"); }} className="flex items-center gap-3">
              <img src={LOGO_URL} alt="RDG Digital" className="h-7 w-auto object-contain" />
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-white/10 pl-3">
                PAINEL VIP <span className="text-primary font-bold">MEMBROS</span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {licenseInfo && valInfo && (
              <div className="hidden md:flex items-center gap-3 border border-white/10 bg-[#111218] px-3.5 py-1.5 font-mono text-[10px]">
                <span className="text-white font-bold uppercase tracking-wider">
                  👤 {licenseInfo.cliente}
                </span>
                <span className="text-primary font-bold tracking-widest border-l border-white/10 pl-3">
                  {licenseInfo.key}
                </span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-widest text-[9px]">
                  {valInfo.badge}
                </span>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-rose-400 hover:bg-rose-500/20 transition-all"
              title="Sair / Trocar Chave"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">SAIR</span>
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================================================== */}
      {/* VISTA 1: HOME PRINCIPAL DA ÁREA DE MEMBROS (DESIGN RETANGULAR GEOMÉTRICO RDG) */}
      {/* ==================================================================================== */}
      {viewMode === "home" && (
        <div className="space-y-12 pb-16 animate-[fadeIn_0.3s_ease]">
          
          {/* Hero Section GEOMÉTRICO */}
          <section className="relative border-b border-white/10 pt-10 pb-10 px-4 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto text-center space-y-4">
              <span className="inline-flex items-center gap-2 border border-primary/40 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                <Sparkles size={12} /> BEM-VINDO À SUA ÁREA VIP RDG DIGITAL
              </span>

              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-4xl mx-auto">
                Seus Softwares &amp; <em className="text-primary not-italic">Treinamentos VIP</em>
              </h1>
              <p className="text-xs sm:text-sm font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Selecione o seu produto abaixo para abrir os downloads e tutoriais dedicados. Seus bônus exclusivos continuam acessíveis logo abaixo.
              </p>
            </div>
          </section>

          {/* SEÇÃO DOS CARDS RETANGULARES GEOMÉTRICOS RDG */}
          <section className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* CARD 1: INSTAGRAM (ROSA / MAGENTA ACCENT) */}
              <div className="border border-[#E1306C]/40 bg-[#0A0A0A] hover:border-[#E1306C] transition-all flex flex-col justify-between group">
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E1306C] flex items-center gap-1.5 font-bold">
                      📸 EXTENSÃO INSTAGRAM
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#E1306C]/40 bg-[#E1306C]/10 text-pink-300">
                      DISPONÍVEL
                    </span>
                  </div>

                  {/* Mockup Retangular Estilo Terminal RDG */}
                  <div className="border border-white/10 bg-[#111218] p-3.5 space-y-2 font-mono text-[10px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[#E1306C]">
                      <span>RDG instaPRO v2.4</span>
                      <span className="text-emerald-400">● ATIVO</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      &gt; Automação de Directs &amp; Extração de Leads
                    </p>
                    <div className="flex justify-between text-[9px] text-[#E1306C] pt-1 font-bold">
                      <span>DISPAROS: 420/DIA</span>
                      <span>STATUS: SEGURO</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-xl font-light text-white group-hover:text-[#E1306C] transition-colors">
                      Extensão Instagram (instaPRO)
                    </h2>
                    <p className="text-xs text-foreground/75 leading-relaxed font-light">
                      Robô de automação de Directs, extração de seguidores de concorrentes e funil comercial.
                    </p>

                    <ul className="space-y-1.5 font-mono text-[10px] text-foreground/80 pt-1 border-t border-white/10">
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#E1306C]" />
                        <span>Instalador ZIP do Robô Instagram</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#E1306C]" />
                        <span>8 Vídeo Aulas de Treinamento</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#E1306C]" />
                        <span>E-Book Manual de Aquecimento PDF</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setViewMode("instagram")}
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#E1306C] bg-[#E1306C] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold transition-transform hover:scale-[1.01] hover:brightness-110"
                  >
                    <span>ACESSAR MÓDULO INSTAGRAM</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* CARD 2: LOVABLE (ROXO / VIOLET ACCENT) */}
              <div className="border border-[#7C4DFF]/40 bg-[#0A0A0A] hover:border-[#7C4DFF] transition-all flex flex-col justify-between group">
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C4DFF] flex items-center gap-1.5 font-bold">
                      ⚡ EXTENSÃO LOVABLE
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#7C4DFF]/40 bg-[#7C4DFF]/10 text-purple-300">
                      EM BREVE
                    </span>
                  </div>

                  {/* Mockup Retangular Estilo Terminal RDG */}
                  <div className="border border-white/10 bg-[#111218] p-3.5 space-y-2 font-mono text-[10px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[#7C4DFF]">
                      <span>Lovable Prototyper</span>
                      <span className="text-purple-300">v2.0</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      &gt; Automação de prototipagem acelerada
                    </p>
                    <div className="flex justify-between text-[9px] text-purple-300 pt-1 font-bold">
                      <span>STATUS: EM GRAVAÇÃO</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-xl font-light text-white group-hover:text-[#7C4DFF] transition-colors">
                      Extensão Lovable
                    </h2>
                    <p className="text-xs text-foreground/75 leading-relaxed font-light">
                      Ferramenta de aceleração de desenvolvimento e criação de protótipos web no Lovable.
                    </p>

                    <ul className="space-y-1.5 font-mono text-[10px] text-foreground/80 pt-1 border-t border-white/10">
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#7C4DFF]" />
                        <span>Download da Extensão Lovable</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#7C4DFF]" />
                        <span>Aulas em Gravação (Liberadas em Breve)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setViewMode("lovable")}
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#7C4DFF] bg-[#7C4DFF] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold transition-transform hover:scale-[1.01] hover:brightness-110"
                  >
                    <span>ACESSAR MÓDULO LOVABLE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* CARD 3: PROSPECÇÃO B2B (AZUL / GOOGLE ACCENT) */}
              <div className="border border-[#4285F4]/40 bg-[#0A0A0A] hover:border-[#4285F4] transition-all flex flex-col justify-between group">
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4285F4] flex items-center gap-1.5 font-bold">
                      🗺️ PROSPECÇÃO B2B
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#4285F4]/40 bg-[#4285F4]/10 text-blue-300">
                      EM BREVE
                    </span>
                  </div>

                  {/* Mockup Retangular Estilo Terminal RDG */}
                  <div className="border border-white/10 bg-[#111218] p-3.5 space-y-2 font-mono text-[10px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[#4285F4]">
                      <span>Google Maps Scraper</span>
                      <span className="text-emerald-400">API OK</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      &gt; Filtro de empresas SEM site ativo
                    </p>
                    <div className="flex justify-between text-[9px] text-[#4285F4] pt-1 font-bold">
                      <span>PRÉVIA 1-CLIQUE: ATIVA</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-xl font-light text-white group-hover:text-[#4285F4] transition-colors">
                      Prospecção B2B (Google Maps)
                    </h2>
                    <p className="text-xs text-foreground/75 leading-relaxed font-light">
                      Software de busca de negócios locais sem site e gerador de demonstração em 1-clique.
                    </p>

                    <ul className="space-y-1.5 font-mono text-[10px] text-foreground/80 pt-1 border-t border-white/10">
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#4285F4]" />
                        <span>Acesso ao Software de Prospecção</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={12} className="text-[#4285F4]" />
                        <span>Aulas em Gravação (Liberadas em Breve)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setViewMode("prospeccao")}
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#4285F4] bg-[#4285F4] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] font-bold transition-transform hover:scale-[1.01] hover:brightness-110"
                  >
                    <span>ACESSAR MÓDULO PROSPECÇÃO</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* SEÇÃO DE BÔNUS FIXOS GEOMÉTRICOS RDG */}
          <section className="max-w-6xl mx-auto px-4 pt-8 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 border border-amber-500/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400">
                <Crown size={12} /> BÔNUS EXCLUSIVOS PARA MEMBROS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bônus 1 */}
              <div className="border border-white/10 bg-[#0A0A0A] p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-bold">
                    <Tv size={18} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 inline-block">
                    LIBERADO
                  </span>
                  <h3 className="text-lg font-light text-white">Plataforma de Cursos RDG</h3>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">
                    Treinamentos completos de tráfego pago, edições no CapCut, copy e vendas.
                  </p>
                </div>
                <a
                  href="/cursos"
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white hover:border-primary hover:text-primary transition-all text-center"
                >
                  <span>ACESSAR CURSOS RDG</span>
                </a>
              </div>

              {/* Bônus 2 */}
              <div className="border border-white/10 bg-[#0A0A0A] p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
                    <Camera size={18} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-400 border-b border-amber-500/20 pb-1 inline-block">
                    +700 PROMPTS DE IA
                  </span>
                  <h3 className="text-lg font-light text-white">Prompts de IA para Fotografia</h3>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">
                    Comandos prontos para gerar ensaios fotográficos e criativos no Gemini.
                  </p>
                </div>
                <a
                  href="https://sites.rdgdigital.com.br/prompts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-amber-500/30 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 hover:bg-amber-500/10 transition-all text-center"
                >
                  <span>ABRIR BIBLIOTECA</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Bônus 3 */}
              <div className="border border-white/10 bg-[#0A0A0A] p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
                    <MessageCircle size={18} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 border-b border-emerald-500/20 pb-1 inline-block">
                    SUPORTE VIP
                  </span>
                  <h3 className="text-lg font-light text-white">Atendimento no WhatsApp</h3>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">
                    Tire dúvidas técnicas da sua licença e receba auxílio direto da equipe.
                  </p>
                </div>
                <a
                  href={WA_SUPORTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-emerald-500 bg-emerald-500 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-black font-bold hover:brightness-110 transition-all text-center"
                >
                  <span>CHAMAR NO WHATSAPP</span>
                  <MessageCircle size={13} />
                </a>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* ==================================================================================== */}
      {/* VISTA 2: PÁGINA DEDICADA DA EXTENSÃO INSTAGRAM */}
      {/* ==================================================================================== */}
      {viewMode === "instagram" && (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-[fadeIn_0.3s_ease]">
          <div className="border border-[#E1306C]/40 bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 border border-[#E1306C]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E1306C]">
                  📸 MÓDULO EXCLUSIVO INSTAGRAM
                </span>
                <h1 className="text-3xl font-light text-white">
                  Extensão Instagram (RDG instaPRO)
                </h1>
                <p className="text-xs sm:text-sm font-light text-muted-foreground max-w-2xl">
                  Baixe o instalador oficial, assista ao treinamento das 8 aulas em vídeo e acesse o guia de aquecimento.
                </p>
              </div>

              <a
                href={DOWNLOAD_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E1306C] bg-[#E1306C] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold hover:brightness-110 transition-all"
              >
                <Download size={15} />
                <span>BAIXAR INSTALADOR (.ZIP)</span>
              </a>
            </div>
          </div>

          <section className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <h2 className="text-xl font-light text-white">Treinamento em Vídeo — Aulas Oficiais</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 border border-white/10 bg-[#0A0A0A] p-4 space-y-3">
                <div className="relative aspect-video bg-black border border-white/10">
                  <iframe
                    src={instagramVideos[activeInstagramVideo].loomUrl}
                    title={instagramVideos[activeInstagramVideo].title}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-1 p-2">
                  <h3 className="text-lg font-light text-white">{instagramVideos[activeInstagramVideo].title}</h3>
                  <p className="text-xs text-muted-foreground">{instagramVideos[activeInstagramVideo].description}</p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                {instagramVideos.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveInstagramVideo(i)}
                    className={`w-full p-4 border text-left transition-all flex items-center justify-between gap-4 ${
                      activeInstagramVideo === i
                        ? "border-[#E1306C] bg-[#E1306C]/10 text-white"
                        : "border-white/10 bg-[#0A0A0A] text-muted-foreground hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 flex items-center justify-center font-mono font-bold text-xs ${activeInstagramVideo === i ? "bg-[#E1306C] text-white" : "bg-white/10 text-white"}`}>
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">{v.title}</h4>
                        <span className="font-mono text-[10px] text-muted-foreground">{v.duration}</span>
                      </div>
                    </div>
                    <Play size={13} className={activeInstagramVideo === i ? "text-[#E1306C]" : "text-muted-foreground"} />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="border border-indigo-500/40 bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-400 border border-indigo-500/30 px-3 py-1 inline-block">
                  📘 E-BOOK VIP EXCLUSIVO DO INSTAGRAM
                </span>
                <h3 className="text-xl font-light text-white">Manual de Aquecimento &amp; Escala Sem Bloqueios 2026</h3>
                <p className="text-xs font-light text-muted-foreground max-w-xl">
                  Guia completo de boas práticas: saiba a esteira de aquecimento correta para novas contas do Instagram e os limites recomendados por perfil.
                </p>
              </div>
              <a
                href="https://gamma.app/docs/Manual-de-Aquecimento-Escala-Sem-Bloqueios-2026-doflji8lkd3w9bb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-indigo-500 bg-indigo-600 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold hover:bg-indigo-500 transition-all shrink-0"
              >
                <BookOpen size={15} />
                <span>ABRIR E-BOOK COMPLETO</span>
              </a>
            </div>
          </section>
        </main>
      )}

      {/* ==================================================================================== */}
      {/* VISTA 3: PÁGINA DEDICADA DA EXTENSÃO LOVABLE */}
      {/* ==================================================================================== */}
      {viewMode === "lovable" && (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-[fadeIn_0.3s_ease]">
          <div className="border border-[#7C4DFF]/40 bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 border border-[#7C4DFF]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C4DFF]">
                  ⚡ MÓDULO EXCLUSIVO LOVABLE
                </span>
                <h1 className="text-3xl font-light text-white">
                  Extensão Lovable
                </h1>
                <p className="text-xs sm:text-sm font-light text-muted-foreground max-w-2xl">
                  Página oficial dedicada à Extensão Lovable. Baixe o arquivo da extensão abaixo enquanto o treinamento em vídeo está em gravação.
                </p>
              </div>

              <a
                href={DOWNLOAD_LOVABLE_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#7C4DFF] bg-[#7C4DFF] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold hover:brightness-110 transition-all"
              >
                <Download size={15} />
                <span>BAIXAR EXTENSÃO (.ZIP)</span>
              </a>
            </div>
          </div>

          <section className="border border-[#7C4DFF]/30 bg-[#0A0A0A] p-8 sm:p-12 text-center space-y-5 max-w-3xl mx-auto">
            <div className="w-14 h-14 border border-[#7C4DFF]/40 bg-[#7C4DFF]/10 text-[#7C4DFF] flex items-center justify-center mx-auto">
              <Video size={28} />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C4DFF] border border-[#7C4DFF]/30 px-3 py-1 inline-block">
                AULAS EM GRAVAÇÃO
              </span>
              <h2 className="text-2xl font-light text-white">Treinamento do Lovable Liberado em Breve!</h2>
              <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed font-light">
                As vídeo aulas oficiais de instalação e uso avançado da Extensão Lovable estão sendo produzidas e serão disponibilizadas nesta página.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={DOWNLOAD_LOVABLE_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#7C4DFF] bg-[#7C4DFF] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold hover:brightness-110 transition-all"
              >
                <Download size={15} />
                <span>BAIXAR ARQUIVO DA EXTENSÃO (.ZIP)</span>
              </a>
            </div>
          </section>
        </main>
      )}

      {/* ==================================================================================== */}
      {/* VISTA 4: PÁGINA DEDICADA DA PROSPECÇÃO B2B GOOGLE MAPS */}
      {/* ==================================================================================== */}
      {viewMode === "prospeccao" && (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-[fadeIn_0.3s_ease]">
          <div className="border border-[#4285F4]/40 bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 border border-[#4285F4]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#4285F4]">
                  🗺️ MÓDULO PROSPECÇÃO B2B
                </span>
                <h1 className="text-3xl font-light text-white">
                  Prospecção B2B (Google Maps)
                </h1>
                <p className="text-xs sm:text-sm font-light text-muted-foreground max-w-2xl">
                  Página oficial dedicada ao Software de Prospecção B2B. Acesse a ferramenta abaixo enquanto as aulas oficiais de vendas estão sendo gravadas.
                </p>
              </div>

              <a
                href="/prospeccao"
                className="inline-flex items-center gap-2 border border-[#4285F4] bg-[#4285F4] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] font-bold hover:brightness-110 transition-all"
              >
                <Search size={15} />
                <span>ABRIR SOFTWARE DE PROSPECÇÃO</span>
              </a>
            </div>
          </div>

          <section className="border border-[#4285F4]/30 bg-[#0A0A0A] p-8 sm:p-12 text-center space-y-5 max-w-3xl mx-auto">
            <div className="w-14 h-14 border border-[#4285F4]/40 bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center mx-auto">
              <Video size={28} />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4285F4] border border-[#4285F4]/30 px-3 py-1 inline-block">
                AULAS EM GRAVAÇÃO
              </span>
              <h2 className="text-2xl font-light text-white">Treinamento de Prospecção B2B Liberado em Breve!</h2>
              <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed font-light">
                As vídeo aulas oficiais de técnicas de prospecção no Google Maps, geração de sites em 1-clique e scripts de abordagem comercial estão em gravação.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/prospeccao"
                className="inline-flex items-center gap-2 border border-[#4285F4] bg-[#4285F4] px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] font-bold hover:brightness-110 transition-all"
              >
                <Search size={15} />
                <span>ACESSAR SOFTWARE DE PROSPECÇÃO AGORA</span>
              </a>
            </div>
          </section>
        </main>
      )}

      <footer className="border-t border-white/5 py-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <p>© 2026 RDG DIGITAL. TODOS OS DIREITOS RESERVADOS. PLATAFORMA VIP DE MEMBROS.</p>
      </footer>
    </div>
  );
}
