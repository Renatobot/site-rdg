import { useState, useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Download,
  Play,
  CheckCircle2,
  ShieldCheck,
  Zap,
  HelpCircle,
  MessageCircle,
  FileArchive,
  Terminal,
  Sparkles,
  Lock,
  UserCheck,
  Video,
  Key,
  ExternalLink,
  ChevronRight,
  Info,
  LogOut,
  AlertCircle,
  Loader2,
  Camera,
  FileText,
  Clock,
  Crown,
  Copy,
  Check,
  Calculator,
  Flame,
  BookOpen,
  Send,
  Tv,
  Menu,
  X,
  Search,
  Globe,
  MapPin,
  Code,
  ArrowLeft,
  Layers,
  Sparkle
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

  // Script & Robot Generator State
  const [generatorMode, setGeneratorMode] = useState<"abordagem" | "robo">("abordagem");
  const [selectedSegment, setSelectedSegment] = useState<string>("servicos");
  const [selectedRobotStrategy, setSelectedRobotStrategy] = useState<string>("boas_vindas");
  const [customName, setCustomName] = useState<string>("");
  const [customService, setCustomService] = useState<string>("");
  const [customTarget, setCustomTarget] = useState<string>("");
  const [customCity, setCustomCity] = useState<string>("");
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  // Calculadora de ROI State
  const [roiProfiles, setRoiProfiles] = useState<number>(3);
  const [roiDirectsPerProfile, setRoiDirectsPerProfile] = useState<number>(40);
  const [roiConversionRate, setRoiConversionRate] = useState<number>(3);
  const [roiAvgTicket, setRoiAvgTicket] = useState<number>(150);

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
      return { text: "Licença Ativa", badge: "✨ Ativa", isWarning: false };
    }
    if (lic.expires_at) {
      const exp = new Date(lic.expires_at);
      const now = new Date();
      const diffTime = exp.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const dateStr = exp.toLocaleDateString("pt-BR");
      if (diffDays <= 0) {
        return { text: "Expirado", badge: "❌ Expirado", isWarning: true };
      }
      return {
        text: `Vence em ${dateStr} (${diffDays} dias)`,
        badge: `⏳ ${diffDays} dias restantes`,
        isWarning: diffDays <= 5,
      };
    }
    return { text: "Permanente", badge: "✨ Ativa", isWarning: false };
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

  // ROI Calculator Metrics
  const calculatedMetrics = useMemo(() => {
    const dailyTotalDirects = roiProfiles * roiDirectsPerProfile;
    const monthlyTotalDirects = dailyTotalDirects * 30;
    const monthlySales = Math.floor((monthlyTotalDirects * roiConversionRate) / 100);
    const monthlyRevenue = monthlySales * roiAvgTicket;

    return {
      dailyTotalDirects,
      monthlyTotalDirects,
      monthlySales,
      monthlyRevenue,
      recommendedProfiles: roiProfiles,
    };
  }, [roiProfiles, roiDirectsPerProfile, roiConversionRate, roiAvgTicket]);

  // INITIAL SPINNER
  if (isVerifying && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
          <p className="text-sm font-semibold text-muted-foreground">
            Verificando credenciais na nuvem RDG Digital...
          </p>
        </div>
      </div>
    );
  }

  // LOGIN GATE MODAL
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] flex flex-col justify-between">
        <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-primary">RDG</span> Digital
            </span>
          </a>
          <a
            href={WA_SUPORTE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 transition-all"
          >
            <MessageCircle size={14} />
            <span>Suporte VIP</span>
          </a>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 py-12">
          <div className="w-full max-w-md bg-[#111218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center mx-auto mb-3">
                <Lock size={22} />
              </div>
              <h1 className="text-2xl font-extrabold text-white">
                Área de Membros VIP RDG
              </h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Digite a sua <strong>Chave de Licença</strong> enviada no seu WhatsApp para liberar os softwares e treinamentos.
              </p>
            </div>

            {loginError && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-3 text-xs text-rose-300">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Sua Chave de Licença (Key)
                </label>
                <div className="relative">
                  <Key
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value.toUpperCase())}
                    placeholder="IG-XXXX / LOVE-XXXX / MAPS-XXXX"
                    className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white font-mono placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-all uppercase tracking-wider"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Verificando Chave...</span>
                  </>
                ) : (
                  <>
                    <UserCheck size={18} />
                    <span>Entrar na Área de Membros</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                Ainda não comprou ou perdeu sua chave?
              </p>
              <a
                href={WA_SUPORTE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>Falar com o suporte no WhatsApp</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center text-xs text-muted-foreground border-t border-white/5">
          © 2026 RDG Digital. Todos os direitos reservados.
        </footer>
      </div>
    );
  }

  const valInfo = licenseInfo ? getValidityDetails(licenseInfo) : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] scroll-smooth">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/90 border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {viewMode !== "home" && (
              <button
                onClick={() => setViewMode("home")}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <ArrowLeft size={16} />
                <span>Voltar à Área de Membros</span>
              </button>
            )}

            <a href="/membros" onClick={(e) => { e.preventDefault(); setViewMode("home"); }} className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">RDG</span> Digital
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                ÁREA VIP
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {licenseInfo && valInfo && (
              <div className="hidden md:flex flex-col text-right text-xs">
                <div className="flex items-center justify-end gap-2">
                  <span className="font-bold text-white">
                    👤 {licenseInfo.cliente}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full border bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                    {valInfo.badge}
                  </span>
                </div>
                <span className="text-muted-foreground mt-0.5">
                  Licença: <code className="text-primary">{licenseInfo.key}</code>
                </span>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg hover:bg-rose-500/20 transition-all"
              title="Sair / Trocar Chave"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================================================== */}
      {/* VISTA 1: HOME PRINCIPAL DA ÁREA DE MEMBROS (CARDS DOS PRODUTOS + BÔNUS FIXOS) */}
      {/* ==================================================================================== */}
      {viewMode === "home" && (
        <div className="space-y-12 pb-16 animate-[fadeIn_0.3s_ease]">
          {/* Hero Section */}
          <section className="relative pt-10 pb-8 px-4 border-b border-white/5 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
            <div className="max-w-4xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full">
                <CheckCircle2 size={14} />
                <span>BEM-VINDO À SUA ÁREA DE MEMBROS RDG</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Seus Softwares & Treinamentos
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Clique no card do seu produto abaixo para abrir a página dedicada com downloads e tutoriais. Os seus bônus exclusivos continuam fixos logo abaixo!
              </p>
            </div>
          </section>

          {/* SEÇÃO DOS 3 CARDS DE PRODUTOS */}
          <section className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card Product 1: Extensão Instagram */}
              <div className="bg-[#111218] border border-pink-500/30 hover:border-pink-500/60 rounded-3xl p-6 sm:p-7 space-y-5 transition-all shadow-xl hover:shadow-pink-500/10 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      📸
                    </div>
                    <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 uppercase tracking-wider">
                      DISPONÍVEL AGORA
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-xl font-extrabold text-white group-hover:text-pink-400 transition-colors">
                      Extensão Instagram
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      RDG instaPRO: Automação de Directs, extração de leads segmentados e robô de vendas ativados.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setViewMode("instagram")}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 hover:opacity-90 text-white font-extrabold text-xs rounded-xl transition-all shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2"
                >
                  <span>Acessar Módulo Instagram</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Card Product 2: Extensão Lovable */}
              <div className="bg-[#111218] border border-fuchsia-500/30 hover:border-fuchsia-500/60 rounded-3xl p-6 sm:p-7 space-y-5 transition-all shadow-xl hover:shadow-fuchsia-500/10 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-purple-500 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      ⚡
                    </div>
                    <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 uppercase tracking-wider">
                      EM BREVE
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-xl font-extrabold text-white group-hover:text-fuchsia-400 transition-colors">
                      Extensão Lovable
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Automação de prototipagem e desenvolvimento web acelerado no Lovable.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setViewMode("lovable")}
                  className="w-full py-3.5 px-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-lg shadow-fuchsia-600/20 flex items-center justify-center gap-2"
                >
                  <span>Acessar Módulo Lovable</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Card Product 3: Prospecção B2B */}
              <div className="bg-[#111218] border border-blue-500/30 hover:border-blue-500/60 rounded-3xl p-6 sm:p-7 space-y-5 transition-all shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-emerald-500 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      🗺️
                    </div>
                    <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                      EM BREVE
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                      Prospecção Google Maps
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Rastreie empresas sem site no Google Maps e crie a prévia oficial do site em 1-clique.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setViewMode("prospeccao")}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-black font-black text-xs rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <span>Acessar Módulo Prospecção</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* SEÇÃO FIXA DE BÔNUS GLOBAIS DA HOME DA ÁREA DE MEMBROS */}
          <section className="max-w-6xl mx-auto px-4 pt-6 space-y-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Crown size={20} className="text-amber-400" />
              <div>
                <h2 className="text-2xl font-bold text-white">Bônus Exclusivos para Todos os Membros</h2>
                <p className="text-xs text-muted-foreground">Recursos gratuitos já liberados na sua conta.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bônus 1: Plataforma de Cursos */}
              <div className="bg-[#111218] border border-primary/30 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center">
                    <Tv size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                    LIBERADO
                  </span>
                  <h3 className="text-lg font-bold text-white">Plataforma de Cursos RDG</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Treinamentos completos de tráfego pago, edições no CapCut, copy e vendas.
                  </p>
                </div>
                <a
                  href="/cursos"
                  className="w-full py-2.5 bg-primary text-black font-extrabold text-xs rounded-xl text-center hover:bg-primary/90 transition-all"
                >
                  Acessar Cursos RDG
                </a>
              </div>

              {/* Bônus 2: +700 Prompts */}
              <div className="bg-[#111218] border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                    <Camera size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                    +700 PROMPTS DE IA
                  </span>
                  <h3 className="text-lg font-bold text-white">Prompts de IA para Fotografia</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comandos prontos para gerar ensaios fotográficos e criativos realistas no Gemini.
                  </p>
                </div>
                <a
                  href="https://sites.rdgdigital.com.br/prompts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold text-xs rounded-xl text-center hover:bg-amber-500/25 transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span>Biblioteca de Prompts</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Bônus 3: Suporte VIP */}
              <div className="bg-[#111218] border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    SUPORTE VIP
                  </span>
                  <h3 className="text-lg font-bold text-white">Atendimento Direto no WhatsApp</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tire dúvidas técnicas da sua licença e receba auxílio da nossa equipe.
                  </p>
                </div>
                <a
                  href={WA_SUPORTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 text-white font-extrabold text-xs rounded-xl text-center hover:bg-emerald-500 transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span>Chamar no WhatsApp</span>
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ==================================================================================== */}
      {/* VISTA 2: PÁGINA DEDICADA DA EXTENSÃO INSTAGRAM (RDG instaPRO) */}
      {/* ==================================================================================== */}
      {viewMode === "instagram" && (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-[fadeIn_0.3s_ease]">
          {/* Header Módulo Instagram */}
          <div className="bg-gradient-to-br from-pink-950/40 via-[#111218] to-[#0D0E12] border border-pink-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 font-bold text-[10px] rounded-full border border-pink-500/30 uppercase tracking-wider">
                  MÓDULO DEDICADO INSTAGRAM
                </span>
                <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                  <span>Extensão Instagram (RDG instaPRO)</span>
                  <span className="text-2xl">📸</span>
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                  Baixe o instalador oficial, assista ao treinamento em vídeo das 8 aulas, utilize o gerador de scripts e calcule suas metas de vendas.
                </p>
              </div>

              <a
                href={DOWNLOAD_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 text-white font-black text-xs rounded-xl hover:opacity-90 transition-all shadow-xl shadow-pink-500/20 inline-flex items-center gap-2"
              >
                <Download size={18} />
                <span>Baixar Instalador (.ZIP)</span>
              </a>
            </div>
          </div>

          {/* Treinamento em Vídeo Instagram */}
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <h2 className="text-2xl font-bold text-white">Treinamento em Vídeo — Aulas Oficiais</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-[#111218] border border-white/10 rounded-2xl p-4 space-y-3 shadow-2xl">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
                  <iframe
                    src={instagramVideos[activeInstagramVideo].loomUrl}
                    title={instagramVideos[activeInstagramVideo].title}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-1 p-2">
                  <h3 className="text-lg font-bold text-white">{instagramVideos[activeInstagramVideo].title}</h3>
                  <p className="text-xs text-muted-foreground">{instagramVideos[activeInstagramVideo].description}</p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                {instagramVideos.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveInstagramVideo(i)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-4 ${
                      activeInstagramVideo === i
                        ? "bg-pink-500/15 border-pink-500/50 text-white"
                        : "bg-[#111218] border-white/10 text-muted-foreground hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${activeInstagramVideo === i ? "bg-pink-500 text-white" : "bg-white/10 text-white"}`}>
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{v.title}</h4>
                        <span className="text-[10px] text-muted-foreground">{v.duration}</span>
                      </div>
                    </div>
                    <Play size={14} className={activeInstagramVideo === i ? "text-pink-400" : "text-muted-foreground"} />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* E-book PDF Bônus */}
          <section className="bg-gradient-to-r from-indigo-950/40 via-[#111218] to-purple-950/40 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-[10px] rounded-full border border-indigo-500/30 uppercase">
                  📘 E-BOOK VIP EXCLUSIVO DO INSTAGRAM
                </span>
                <h3 className="text-xl font-bold text-white">Manual de Aquecimento & Escala Sem Bloqueios 2026</h3>
                <p className="text-xs text-muted-foreground max-w-xl">
                  Guia completo de boas práticas: saiba a esteira de aquecimento correta para novas contas do Instagram e os limites recomendados por perfil.
                </p>
              </div>
              <a
                href="https://gamma.app/docs/Manual-de-Aquecimento-Escala-Sem-Bloqueios-2026-doflji8lkd3w9bb"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 transition-all shrink-0"
              >
                <BookOpen size={16} />
                <span>Abrir E-Book / PDF Completo</span>
              </a>
            </div>
          </section>
        </main>
      )}

      {/* ==================================================================================== */}
      {/* VISTA 3: PÁGINA DEDICADA DA EXTENSÃO LOVABLE (EM BREVE) */}
      {/* ==================================================================================== */}
      {viewMode === "lovable" && (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-[fadeIn_0.3s_ease]">
          {/* Header Módulo Lovable */}
          <div className="bg-gradient-to-br from-fuchsia-950/40 via-[#111218] to-[#0D0E12] border border-fuchsia-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 font-bold text-[10px] rounded-full border border-fuchsia-500/30 uppercase tracking-wider">
                  <Zap size={14} />
                  <span>EM BREVE — MÓDULO EM DESENVOLVIMENTO</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                  <span>Extensão Lovable</span>
                  <span className="text-2xl">⚡</span>
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                  Página oficial dedicada à Extensão Lovable. Baixe a extensão abaixo enquanto as vídeo aulas oficiais estão sendo gravadas pela nossa equipe!
                </p>
              </div>

              <a
                href={DOWNLOAD_LOVABLE_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-500 text-white font-black text-xs rounded-xl hover:opacity-90 transition-all shadow-xl shadow-fuchsia-500/20 inline-flex items-center gap-2"
              >
                <Download size={18} />
                <span>Baixar Extensão Lovable (.ZIP)</span>
              </a>
            </div>
          </div>

          {/* Card de Aviso "Aulas em Gravação" (Sem repetir vídeos do Instagram) */}
          <section className="bg-[#111218] border border-fuchsia-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 flex items-center justify-center mx-auto">
              <Video size={32} />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-300 font-bold text-xs rounded-full border border-fuchsia-500/20">
                AULAS EM GRAVAÇÃO
              </span>
              <h2 className="text-2xl font-bold text-white">Treinamento do Lovable Liberado em Breve!</h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                As vídeo aulas oficiais de instalação e uso avançado da Extensão Lovable estão sendo produzidas e serão disponibilizadas nesta página.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={DOWNLOAD_LOVABLE_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-600 text-white font-bold text-xs rounded-xl hover:bg-fuchsia-500 transition-all"
              >
                <Download size={16} />
                <span>Baixar Arquivo da Extensão Lovable (.ZIP)</span>
              </a>
            </div>
          </section>
        </main>
      )}

      {/* ==================================================================================== */}
      {/* VISTA 4: PÁGINA DEDICADA DA PROSPECÇÃO B2B GOOGLE MAPS (EM BREVE) */}
      {/* ==================================================================================== */}
      {viewMode === "prospeccao" && (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-[fadeIn_0.3s_ease]">
          {/* Header Módulo Prospecção */}
          <div className="bg-gradient-to-br from-blue-950/40 via-emerald-950/20 to-[#0D0E12] border border-blue-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 font-bold text-[10px] rounded-full border border-blue-500/30 uppercase tracking-wider">
                  <Search size={14} />
                  <span>MÓDULO DEDICADO GOOGLE MAPS</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                  <span>Prospecção B2B (Google Maps)</span>
                  <span className="text-2xl">🗺️</span>
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                  Página oficial dedicada ao Software de Prospecção B2B. Acesse a ferramenta abaixo enquanto as aulas oficiais de prospecção e vendas estão sendo gravadas!
                </p>
              </div>

              <a
                href="/prospeccao"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 text-black font-black text-xs rounded-xl hover:opacity-90 transition-all shadow-xl shadow-blue-500/20 inline-flex items-center gap-2"
              >
                <Search size={18} />
                <span>Abrir Software de Prospecção</span>
              </a>
            </div>
          </div>

          {/* Card de Aviso "Aulas em Gravação" (Sem repetir vídeos do Instagram) */}
          <section className="bg-[#111218] border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
              <Video size={32} />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-300 font-bold text-xs rounded-full border border-blue-500/20">
                AULAS EM GRAVAÇÃO
              </span>
              <h2 className="text-2xl font-bold text-white">Treinamento de Prospecção B2B Liberado em Breve!</h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                As vídeo aulas oficiais de técnicas de prospecção no Google Maps, geração de sites em 1-clique e scripts de abordagem comercial estão em gravação.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/prospeccao"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-emerald-500 text-black font-black text-xs rounded-xl hover:opacity-90 transition-all"
              >
                <Search size={16} />
                <span>Acessar Software de Prospecção B2B Agora</span>
              </a>
            </div>
          </section>
        </main>
      )}

      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>© 2026 RDG Digital. Todos os direitos reservados. Plataforma de Softwares & Treinamentos VIP.</p>
      </footer>
    </div>
  );
}
