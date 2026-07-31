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
  MapPin
} from "lucide-react";

const TITLE = "Área de Membros & Treinamento VIP — RDG instaPRO";
const DESCRIPTION =
  "Área exclusiva para clientes RDG instaPRO: Baixe o software instalador, assista aos tutoriais em vídeo, consulte o status da licença e acesse bônus exclusivos.";
const CANONICAL_URL = `${BASE_URL}/membros`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Sou aluno da Área de Membros e preciso de suporte com a minha licença/treinamento."
);

const WA_UPSELL_PROSPECCAO = waLink(
  "Olá! Gostaria de adquirir o acesso ao novo Software de Prospecção B2B Google Maps (R$ 97/mês ou R$ 497/ano)."
);

const DOWNLOAD_ZIP_URL = "https://www.dropbox.com/scl/fo/dt1wornxoi3o7r8mbvxqa/AHgL-XE1noUweqCiPes0UXc?rlkey=ixkg579ok6lzecx5x1pwndb6w&st=5ebzm8eh&dl=1";

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
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [introVideoUrl, setIntroVideoUrl] = useState<string>("https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // Script & Robot Generator Enhanced State
  const [generatorMode, setGeneratorMode] = useState<"abordagem" | "robo">("abordagem");
  const [selectedSegment, setSelectedSegment] = useState<string>("servicos");
  const [selectedRobotStrategy, setSelectedRobotStrategy] = useState<string>("boas_vindas");
  const [customName, setCustomName] = useState<string>("");
  const [customService, setCustomService] = useState<string>("");
  const [customTarget, setCustomTarget] = useState<string>("");
  const [customCity, setCustomCity] = useState<string>("");
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

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

    if (cleanKey.startsWith("MAPS-") || cleanKey.startsWith("PROSPECT-") || cleanKey.startsWith("MASTER-") || cleanKey === "RDG-MASTER-PROSPECT") {
      setLicenseInfo({
        cliente: "Administrador / Membro Master",
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
          <a href="/extensao" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-primary">RDG</span> instaPRO
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
                Área de Membros VIP
              </h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Digite a sua <strong>Chave de Licença</strong> enviada no seu WhatsApp ou E-mail para liberar o acesso ao download e treinamentos.
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
                    placeholder="IG-XXXX-XXXX-XXXX"
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
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all shadow-sm active:scale-95"
              title="Abrir Menu de Conteúdos"
            >
              {isNavOpen ? <X size={16} /> : <Menu size={16} />}
              <span className="hidden sm:inline">Menu de Conteúdos</span>
            </button>

            <a href="/extensao" className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">RDG</span> Digital
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                ACESSO LIBERADO
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

      {/* Hero Section */}
      <section className="relative pt-10 pb-8 px-4 border-b border-white/5 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full">
            <CheckCircle2 size={14} />
            <span>
              BEM-VINDO(A), {licenseInfo?.cliente ? licenseInfo.cliente.toUpperCase() : "MEMBRO VIP"}!
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Área de Membros & Treinamentos RDG Digital
          </h1>
        </div>
      </section>

      {/* BANNER DE UPSELL DA FERRAMENTA DE PROSPECÇÃO B2B (EXIGE COMPRA SEPARADA) */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="bg-gradient-to-r from-[#181928] via-[#111218] to-[#1a1528] border border-primary/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-primary text-black font-extrabold text-[10px] rounded-full uppercase tracking-wider shadow">
                  🔥 SOFTWARE ADICIONAL SAAS
                </span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 font-bold text-[10px] rounded-full border border-amber-500/30">
                  R$ 97/mês ou R$ 497/ano
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                <Search size={28} className="text-primary shrink-0" />
                <span>Software de Prospecção B2B Google Maps</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Ferramenta independente para rastrear empresas sem site no Google Maps, construir a demonstração oficial ao vivo e enviar abordagens comerciais no WhatsApp. <strong>(Vendido separadamente).</strong>
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-2">
              <a
                href="/prospeccao-b2b"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-black text-sm rounded-2xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
              >
                <Lock size={18} />
                <span>Adquirir Licença (R$ 497/ano)</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* DOWNLOAD SECTION (INSTAPRO) */}
        <section id="download" className="relative">
          <div className="bg-gradient-to-br from-[#12131A] to-[#0D0E12] border border-primary/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Baixe o Instalador do Robô RDG instaPRO
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clique no botão ao lado para baixar o pacote oficial compactado contendo o <strong>RDG instaPRO</strong> e a Extensão Chrome.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
                <a
                  href={DOWNLOAD_ZIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/25"
                >
                  <Download size={20} />
                  <span>Baixar Instalador Automático (.ZIP)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OUTROS PRODUTOS & UPSELLS */}
        <section id="outros-produtos" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Crown size={16} />
                <span>OUTRAS SOLUÇÕES & SOFTWARES</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Softwares Digitais RDG
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card Software Prospecção B2B (UPSELL DEDICADO) */}
            <div className="bg-gradient-to-b from-[#181928] to-[#111218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center">
                  <Search size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                  <span>FERRAMENTA SEPARADA</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  Prospecção B2B Google Maps
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Rastreie empresas sem site no Google Maps e gere demonstrações ao vivo. Requer licença de acesso própria (R$ 97/mês ou R$ 497/ano).
                </p>
              </div>

              <a
                href="/prospeccao-b2b"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                <Lock size={14} />
                <span>Adquirir Acesso à Prospecção</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Plataforma de Cursos RDG */}
            <div className="bg-gradient-to-b from-[#1A1628] to-[#10101C] border border-primary/30 rounded-2xl p-6 flex flex-col justify-between transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center">
                  <Tv size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                  <span>DISPONÍVEL NO SEU PLANO</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Plataforma de Cursos RDG
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cursos de tráfego pago, criação de criativos, CapCut e copy.
                </p>
              </div>

              <a
                href="/cursos"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl border border-white/10 transition-all"
              >
                <span>Acessar Cursos</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Pack de Prompts */}
            <div className="bg-gradient-to-b from-[#14151F] to-[#111218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Camera size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                  <span>BIBLIOTECA DE PROMPTS</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Prompts de IA (+700)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Prompts prontos para gerar fotos profissionais com IA.
                </p>
              </div>

              <a
                href="https://sites.rdgdigital.com.br/prompts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-bold text-xs rounded-xl transition-all"
              >
                <span>Acessar Prompts</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>© 2026 RDG Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
