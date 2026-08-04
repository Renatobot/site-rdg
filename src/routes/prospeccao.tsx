import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import { waLink } from "@/lib/site";
import { LeadItem, LeadStatus, getProspeccaoLeadsServerFn } from "./api.prospeccao";
import {
  Search,
  MapPin,
  Phone,
  Star,
  Download,
  Key,
  Info,
  Sparkles,
  ArrowLeft,
  Loader2,
  Settings,
  X,
  Copy,
  Check,
  Globe,
  Instagram,
  Filter,
  Bookmark,
  BookmarkCheck,
  MessageCircle,
  Kanban,
  Grid,
  ExternalLink,
  AlertTriangle,
  Flame,
  ImageIcon,
  SlidersHorizontal,
  FileText,
  Send,
  Zap,
  Lock,
  ShieldCheck,
  UserCheck,
  ChevronRight,
  HelpCircle,
  Eye,
  Share2
} from "lucide-react";

const TITLE = "Ferramenta de Prospecção B2B Google Maps — RDG Digital";
const DESCRIPTION = "Encontre empresas locais sem website no Google Maps para prospectar e vender sites e landing pages de alta conversão.";
const CANONICAL_URL = `${BASE_URL}/prospeccao`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Quero adquirir a minha licença do Software de Prospecção B2B Google Maps."
);

export const Route = createFileRoute("/prospeccao")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: ProspeccaoPage,
});

const KANBAN_COLUMNS: { id: LeadStatus; title: string; badgeColor: string; headerBorder: string }[] = [
  { id: "novo", title: "📥 Novos Leads", badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", headerBorder: "border-blue-500/40" },
  { id: "em_contato", title: "💬 Em Contato", badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20", headerBorder: "border-amber-500/40" },
  { id: "followup", title: "⏳ Follow-Up", badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20", headerBorder: "border-purple-500/40" },
  { id: "proposta", title: "🎯 Proposta Enviada", badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", headerBorder: "border-cyan-500/40" },
  { id: "fechado", title: "✅ Cliente Fechado", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", headerBorder: "border-emerald-500/40" },
  { id: "inativo", title: "❌ Sem Interesse", badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20", headerBorder: "border-rose-500/40" },
function formatCategoryLabel(rawCat?: string, currentNicho?: string): string {
  if (!rawCat || typeof rawCat !== "string") return currentNicho ? currentNicho.toUpperCase() : "NEGÓCIO LOCAL";
  const cat = rawCat.toLowerCase().replace(/_/g, " ");

  if (cat.includes("beauty") || cat.includes("spa") || cat.includes("estet") || cat.includes("micro") || cat.includes("hair")) return "ESTÉTICA & BELEZA";
  if (cat.includes("barber") || cat.includes("barbea")) return "BARBEARIA";
  if (cat.includes("dentist") || cat.includes("dental") || cat.includes("odonto")) return "ODONTOLOGIA";
  if (cat.includes("real estate") || cat.includes("imob")) return "IMOBILIÁRIA";
  if (cat.includes("restaurant") || cat.includes("food") || cat.includes("bistro") || cat.includes("bar")) return "RESTAURANTE & GASTRONOMIA";
  if (cat.includes("pet") || cat.includes("vet")) return "PET SHOP & VET";
  if (cat.includes("law") || cat.includes("advoc")) return "ADVOCACIA";
  if (cat.includes("health") || cat.includes("medic") || cat.includes("saude") || cat.includes("doctor")) return "SAÚDE & CLÍNICA";
  if (cat.includes("gym") || cat.includes("fitness") || cat.includes("academ")) return "ACADEMIA & FITNESS";
  if (cat.includes("establishment") || cat.includes("point of interest")) {
    return currentNicho ? currentNicho.toUpperCase() : "NEGÓCIO LOCAL";
  }

  return rawCat.toUpperCase().replace(/_/g, " ");
}

function ProspeccaoPage() {
  // Autenticação de Rota / Validação de Licença Exclusiva
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [licenseInputKey, setLicenseInputKey] = useState<string>("");
  const [licenseError, setLicenseError] = useState<string | null>(null);
  const [userClientName, setUserClientName] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"prospectar" | "salvos">("prospectar");

  // Filtros de Busca
  const [nicho, setNicho] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [onlyNoWebsite, setOnlyNoWebsite] = useState<boolean>(true);
  const [onlyWithPhotos, setOnlyWithPhotos] = useState<boolean>(false);
  const [onlyWithWhatsapp, setOnlyWithWhatsapp] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [minReviewsCount, setMinReviewsCount] = useState<number>(0);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);

  const [apiKey, setApiKey] = useState<string>("");
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [savedLeads, setSavedLeads] = useState<LeadItem[]>([]);
  const [sourceInfo, setSourceInfo] = useState<{ source: string; message?: string; googleStatus?: string } | null>(null);

  // Modal Gerador de Scripts de Abordagem WhatsApp
  const [scriptLead, setScriptLead] = useState<LeadItem | null>(null);
  const [copiedScriptIndex, setCopiedScriptIndex] = useState<number | null>(null);

  // Verificar Chave de Licença de Acesso à Ferramenta de Prospecção (CHAVE VERIFICADA NO SUPABASE)
  useEffect(() => {
    const savedLicense = localStorage.getItem("prospeccao_license_key") || localStorage.getItem("rdg_license_key");
    if (savedLicense) {
      validateLicenseKey(savedLicense, true);
    } else {
      setIsVerifying(false);
    }

    const savedKey = localStorage.getItem("google_places_api_key") || "";
    if (savedKey) setApiKey(savedKey);

    const saved = localStorage.getItem("saved_prospect_leads");
    if (saved) {
      try {
        const parsed: LeadItem[] = JSON.parse(saved);
        const withStatus = parsed.map((l) => ({ ...l, status: l.status || "novo" }));
        setSavedLeads(withStatus);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validateLicenseKey = async (keyToValidate: string, isAutoCheck = false) => {
    const cleanKey = keyToValidate.trim().toUpperCase();
    if (!cleanKey) {
      setLicenseError("Digite sua chave de acesso exclusiva da Prospecção B2B.");
      setIsVerifying(false);
      return;
    }

    setIsVerifying(true);
    setLicenseError(null);

    // Chave Master Dev Oficial
    if (cleanKey === "RDG-MASTER-PROSPECT-2026") {
      setIsAuthenticated(true);
      setUserClientName("Dev Master Prospecção B2B");
      localStorage.setItem("prospeccao_license_key", cleanKey);
      setIsVerifying(false);
      return;
    }

    // CONSULTA OBRIGATÓRIA NO BANCO DE DADOS SUPABASE (Evita hack/modificação de prefixos)
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

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const lic = data[0];
          const isExpired = lic.expires_at && new Date(lic.expires_at) < new Date();
          const prodClean = (lic.produto || "").toLowerCase();

          // Verificar estritamente se o registro no Supabase permite acesso ao produto Prospecção
          const hasAccessToProspeccao =
            prodClean.includes("prospeccao") ||
            prodClean.includes("maps") ||
            prodClean.includes("master") ||
            lic.is_lifetime;

          if (lic.status && lic.status.toLowerCase() === "inativo") {
            setLicenseError("Esta chave de licença está inativa. Fale com o suporte.");
            if (isAutoCheck) localStorage.removeItem("prospeccao_license_key");
            setIsAuthenticated(false);
          } else if (isExpired) {
            setLicenseError("Sua anuidade expirou. Faça a renovação da licença para continuar prospectando.");
            if (isAutoCheck) localStorage.removeItem("prospeccao_license_key");
            setIsAuthenticated(false);
          } else if (!hasAccessToProspeccao) {
            setLicenseError("Esta chave é do produto Instagram/Lovable. Adquira a licença dedicada do Software de Prospecção B2B para acessar.");
            if (isAutoCheck) localStorage.removeItem("prospeccao_license_key");
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
            setUserClientName(lic.cliente || "Membro Prospecção B2B");
            localStorage.setItem("prospeccao_license_key", cleanKey);
          }
        } else {
          setLicenseError(`Chave "${cleanKey}" não foi localizada no banco de dados RDG.`);
          if (isAutoCheck) localStorage.removeItem("prospeccao_license_key");
          setIsAuthenticated(false);
        }
      } else {
        setLicenseError("Erro de conexão com o servidor de licenças.");
        setIsAuthenticated(false);
      }
    } catch (e) {
      console.error(e);
      setLicenseError("Erro ao validar licença. Verifique sua conexão com a internet.");
      setIsAuthenticated(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSaveApiKey = (key: string) => {
    const trimmed = key.trim();
    setApiKey(trimmed);
    localStorage.setItem("google_places_api_key", trimmed);
    setIsConfigOpen(false);
    if (nicho || cidade) {
      handleSearch(nicho, cidade, trimmed);
    }
  };

  const handleSearch = async (
    targetNicho = nicho || "Advocacia",
    targetCidade = cidade || "São Paulo - SP",
    targetApiKey = apiKey
  ) => {
    setIsLoading(true);
    setHasSearched(true);
    let fetchedLeads: LeadItem[] = [];
    let source = targetApiKey ? "google_api" : "demo_mock";
    let googleStatus = "";
    let message = targetApiKey
      ? "Busca ao vivo realizada na Google Places API."
      : "Exibindo empresas no modo demonstração. Adicione sua chave grátis do Google para resultados ao vivo.";

    try {
      const result = await getProspeccaoLeadsServerFn({
        data: {
          nicho: targetNicho,
          cidade: targetCidade,
          onlyNoWebsite,
          apiKey: targetApiKey,
        },
      });

      if (result && Array.isArray(result.leads)) {
        fetchedLeads = result.leads;
        source = result.source || source;
        message = result.message || message;
        googleStatus = result.googleStatus || "";
      }
    } catch (err: any) {
      console.error("Erro na busca de prospecção:", err);
    } finally {
      setSourceInfo({ source, message, googleStatus });
      setLeads(fetchedLeads);
      setIsLoading(false);
    }
  };

  const toggleSaveLead = (lead: LeadItem) => {
    const exists = savedLeads.some((l) => l.id === lead.id);
    let updated: LeadItem[];
    if (exists) {
      updated = savedLeads.filter((l) => l.id !== lead.id);
    } else {
      updated = [...savedLeads, { ...lead, status: "novo" }];
    }
    setSavedLeads(updated);
    localStorage.setItem("saved_prospect_leads", JSON.stringify(updated));
  };

  const isSaved = (leadId: string) => savedLeads.some((l) => l.id === leadId);

  // AÇÃO EXECUTADA AO CLICAR EM "GERAR PRÉVIA" -> GRAVA SESSION E ABRE O SITE DEMO
  const openDemoPage = (lead: LeadItem) => {
    sessionStorage.setItem("active_demo_lead", JSON.stringify(lead));
    const effectiveCategory = lead.category || nicho || "Estética";
    const params = new URLSearchParams({
      nome: lead.name,
      name: lead.name,
      cliente: lead.name,
      categoria: effectiveCategory,
      category: effectiveCategory,
      phone: lead.phone,
      telefone: lead.phone,
      rating: String(lead.rating || 5.0),
      reviews: String((lead as any).reviews_count || lead.user_ratings_total || 12),
      address: lead.address,
      endereco: lead.address,
      cidade: cidade || "São Paulo - SP",
    });
    if (lead.photos && lead.photos.length > 0) {
      params.set("photos", JSON.stringify(lead.photos));
    }
    window.open(`/demo?${params.toString()}`, "_blank");
  };

  const exportToCSV = (leadsToExport: LeadItem[]) => {
    if (!leadsToExport.length) return;
    const headers = ["Nome", "Categoria", "Telefone", "Sem Website", "Endereço", "Avaliação", "Avaliações Qtd", "Google Maps URL"];
    const rows = leadsToExport.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      l.has_website ? "Não" : "Sim",
      `"${l.address.replace(/"/g, '""')}"`,
      l.rating,
      l.reviews_count,
      `"${l.google_maps_url}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `prospeccao_leads_${nicho || "empresas"}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateWhatsAppScripts = (lead: LeadItem) => {
    const demoUrl = `${BASE_URL}/demo?name=${encodeURIComponent(lead.name)}&category=${encodeURIComponent(lead.category)}&phone=${encodeURIComponent(lead.phone)}`;

    return [
      {
        title: "🎯 Abordagem de Alta Conversão (Consultoria Comercial)",
        type: "Direct Sales",
        text: `Olá! Tudo bem? Meu nome é Renato da RDG Digital.\n\nEstou fazendo um levantamento de empresas referência em ${lead.category} na região e encontrei o *${lead.name}*.\n\nVocês sabiam que hoje muitos clientes buscam no Google e acabam fechando com o concorrente por não encontrarem um site moderno com WhatsApp direto?\n\nPara ajudar vocês a não perderem mais essas vendas, preparei uma prévia de um site de alta conversão exclusivo para o *${lead.name}*:\n🔗 ${demoUrl}\n\nSe tiver 2 minutos, podemos conversar para colocá-lo no ar esta semana!`,
      },
      {
        title: "🚀 Abordagem Rápida e Direta",
        type: "Quick Offer",
        text: `Olá! Tudo bem?\n\nDesenvolvemos o modelo oficial de site exclusivo para o *${lead.name}* com todas as fotos, avaliações e agendamento pelo WhatsApp.\n\nAcesse a prévia aqui: ${demoUrl}\n\nVocês têm interesse em colocar este site no ar no domínio oficial de vocês hoje?`,
      },
    ];
  };

  // LOADING SPINNER INICIAL DE LICENÇA
  if (isVerifying && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 text-white">
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
          <p className="text-sm font-semibold text-white/60">
            Validando licença do Software de Prospecção B2B...
          </p>
        </div>
      </div>
    );
  }

  // TELA DE BLOQUEIO DE ACESSO
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between font-sans selection:bg-primary/30">
        <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <a href="/prospeccao-b2b" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
            <ArrowLeft size={16} />
            <span>Página do Software</span>
          </a>
          <a
            href="/prospeccao-b2b"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/20 transition-all"
          >
            <Sparkles size={14} />
            <span>Conhecer Planos</span>
          </a>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 py-12">
          <div className="w-full max-w-md bg-[#111218] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />

            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto mb-1">
                <Lock size={26} />
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Acesso Restrito ao Software
              </h1>
              <p className="text-xs text-white/60 leading-relaxed">
                Este software é uma solução independente. Digite sua <strong>Chave de Licença Exclusiva da Prospecção B2B</strong> para ativar.
              </p>
            </div>

            {licenseError && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-3 text-xs text-rose-300">
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                <span>{licenseError}</span>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                validateLicenseKey(licenseInputKey);
              }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block">
                  Chave da Prospecção B2B (Key)
                </label>
                <div className="relative">
                  <Key size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={licenseInputKey}
                    onChange={(e) => setLicenseInputKey(e.target.value.toUpperCase())}
                    placeholder="MAPS-XXXX-XXXX-XXXX"
                    className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-primary transition-all uppercase tracking-wider"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-black font-extrabold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Verificando Licença...</span>
                  </>
                ) : (
                  <>
                    <UserCheck size={18} />
                    <span>Ativar Licença da Prospecção</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-5 border-t border-white/10 text-center space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-bold text-white">Ainda não possui a Licença da Prospecção B2B?</p>
                <p className="text-[11px] text-white/50">
                  Adquira seu plano dedicado para rastrear empresas sem site e fechar contratos de R$ 500 a R$ 2.500.
                </p>
              </div>

              <a
                href="/prospeccao-b2b"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Zap size={16} />
                <span>Ver Planos & Adquirir Acesso (A partir de R$ 97/mês)</span>
              </a>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center text-xs text-white/40 border-t border-white/5">
          © 2026 RDG Digital. Todos os direitos reservados.
        </footer>
      </div>
    );
  }

  // TELA COMPLETA DO SOFTWARE DE PROSPECÇÃO B2B (USUÁRIO AUTENTICADO)
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-primary/30">
      {/* Top Navbar Header */}
      <header className="h-16 bg-[#111218]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a href="/membros" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
            <ArrowLeft size={16} />
            <span>Área de Membros</span>
          </a>

          <div className="h-6 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2 text-white font-black text-sm sm:text-base tracking-tight">
            <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary border border-primary/30 flex items-center justify-center">
              <Search size={14} />
            </div>
            <span>Prospecção <span className="text-primary font-normal">Google Maps B2B</span></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsConfigOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white/80 hover:text-white transition-all"
          >
            <Settings size={14} className={apiKey ? "text-emerald-400" : "text-amber-400"} />
            <span className="hidden sm:inline">{apiKey ? "API Configurada" : "Configurar API Google"}</span>
          </button>

          {savedLeads.length > 0 && (
            <button
              onClick={() => exportToCSV(activeTab === "salvos" ? savedLeads : leads)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold transition-all"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Exportar CSV ({activeTab === "salvos" ? savedLeads.length : leads.length})</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Banner de Erro do Google Cloud */}
        {sourceInfo?.source === "google_error" && (
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-rose-500/5">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
                <AlertTriangle size={18} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Erro do Google Cloud ({sourceInfo.googleStatus})</span>
                </h4>
                <p className="text-xs text-rose-200/80 leading-relaxed">
                  Detalhes: <strong>"{sourceInfo.message}"</strong>. Se a resposta for <code>REQUEST_DENIED</code>: acesse o Google Cloud Console e <strong>vincule uma Conta de Faturamento (Billing Account)</strong> ao projeto.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsConfigOpen(true)}
              className="px-4 py-2 bg-rose-500 text-white font-extrabold text-xs rounded-xl hover:bg-rose-400 transition-all shrink-0 flex items-center gap-1.5 shadow"
            >
              <Key size={14} />
              <span>Verificar Chave</span>
            </button>
          </div>
        )}

        {/* Top Controls & Search Card */}
        <div className="bg-[#111218] border border-white/10 rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
          >
            <div className="sm:col-span-5 relative">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-1">
                Nicho da Empresa
              </label>
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  value={nicho}
                  onChange={(e) => setNicho(e.target.value)}
                  placeholder="Ex: Imobiliária, Barbearia, Odontologia..."
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="sm:col-span-4 relative">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-1">
                Cidade / Bairro / Região
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Ex: Rio de Janeiro, São Paulo, Curitiba..."
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="sm:col-span-3 flex items-end">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-5 sm:mt-0 py-3 bg-primary text-black font-extrabold text-sm rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                <span>Buscar Leads</span>
              </button>
            </div>
          </form>

          {/* Preset Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider mr-1">Atalhos Rápido:</span>
            {["Imobiliária", "Barbearia", "Odontologia", "Estética", "Advocacia", "Restaurante", "Pet Shop"].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setNicho(preset);
                  handleSearch(preset, cidade || "São Paulo - SP");
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                  nicho.toLowerCase() === preset.toLowerCase()
                    ? "bg-primary/20 text-primary border-primary/40"
                    : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5 text-xs text-white/70">
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyNoWebsite}
                  onChange={(e) => {
                    setOnlyNoWebsite(e.target.checked);
                    if (hasSearched) handleSearch(nicho, cidade);
                  }}
                  className="rounded accent-primary w-4 h-4"
                />
                <span className="font-semibold text-white">Priorizar Empresas Sem Website no Topo</span>
              </label>
            </div>

            <div className="flex bg-[#0A0A0A] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab("prospectar")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "prospectar"
                    ? "bg-primary text-black font-extrabold shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Search size={14} />
                <span>Prospectar ({leads.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("salvos")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "salvos"
                    ? "bg-primary text-black font-extrabold shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Kanban size={14} />
                <span>Meus Leads Salvos ({savedLeads.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: PROSPECTAR LEADS */}
        {activeTab === "prospectar" ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                <span>Empresas Encontradas</span>
                <span className="text-xs font-normal text-white/50">({leads.length} resultados)</span>
              </h3>
            </div>

            {isLoading ? (
              <div className="py-16 text-center space-y-3 bg-[#111218] rounded-3xl border border-white/10">
                <Loader2 size={36} className="animate-spin text-primary mx-auto" />
                <p className="text-sm font-bold text-white">Buscando empresas no Google Maps...</p>
                <p className="text-xs text-white/40">Filtrando telefones, Instagram e fotos reais do local</p>
              </div>
            ) : leads.length === 0 ? (
              <div className="py-16 text-center space-y-4 bg-[#111218] rounded-3xl border border-white/10 p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center mx-auto">
                  <Search size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">Pronto para Prospectar Novos Clientes?</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Digite o <strong>Nicho da Empresa</strong> e a <strong>Cidade / Região</strong> nos campos acima e clique no botão <strong>Buscar Leads</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leads.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    isSaved={isSaved(lead.id)}
                    onToggleSave={() => toggleSaveLead(lead)}
                    onOpenDemoPage={() => openDemoPage(lead)}
                    onOpenScriptModal={() => setScriptLead(lead)}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* TAB 2: MEUS LEADS SALVOS (KANBAN BOARD) */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111218] p-4 sm:p-5 rounded-2xl border border-white/10">
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                  <Kanban className="text-primary" size={20} />
                  <span>Painel de Leads Salvos</span>
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {savedLeads.length > 0 && (
                  <button
                    onClick={() => exportToCSV(savedLeads)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 text-emerald-300 rounded-xl text-xs font-bold hover:bg-emerald-500/25 border border-emerald-500/30 transition-all"
                  >
                    <Download size={14} />
                    <span>Exportar CSV</span>
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedLeads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  isSaved={true}
                  onToggleSave={() => toggleSaveLead(lead)}
                  onOpenDemoPage={() => openDemoPage(lead)}
                  onOpenScriptModal={() => setScriptLead(lead)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* MODAL SCRIPT DE ABORDAGEM WHATSAPP */}
      {scriptLead && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-2xl w-full space-y-6 relative shadow-2xl my-auto">
            <button onClick={() => setScriptLead(null)} className="absolute top-5 right-5 text-white/40 hover:text-white p-1">
              <X size={20} />
            </button>

            <div className="space-y-2">
              <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 font-bold text-[10px] rounded-full border border-emerald-500/30">
                GERADOR DE ABORDAGEM WHATSAPP
              </span>
              <h3 className="text-xl font-black text-white">{scriptLead.name}</h3>
              <p className="text-xs text-white/60">
                Telefone: <code className="text-primary font-mono">{scriptLead.phone}</code>
              </p>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {generateWhatsAppScripts(scriptLead).map((script, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                      <MessageCircle size={14} className="text-emerald-400" />
                      <span>{script.title}</span>
                    </h4>
                    <span className="text-[10px] font-mono text-white/40">{script.type}</span>
                  </div>

                  <p className="text-xs text-white/80 whitespace-pre-wrap font-sans leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                    {script.text}
                  </p>

                  <div className="flex items-center justify-end gap-3 pt-1">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(script.text);
                        setCopiedScriptIndex(idx);
                        setTimeout(() => setCopiedScriptIndex(null), 2000);
                      }}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      {copiedScriptIndex === idx ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copiedScriptIndex === idx ? "Copiado!" : "Copiar Texto"}</span>
                    </button>

                    <a
                      href={`https://wa.me/${scriptLead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(script.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                    >
                      <Send size={14} />
                      <span>Enviar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL CONFIGURAÇÃO CHAVE DE API GOOGLE */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-xl w-full space-y-6 relative shadow-2xl my-auto">
            <button onClick={() => setIsConfigOpen(false)} className="absolute top-5 right-5 text-white/40 hover:text-white p-1">
              <X size={20} />
            </button>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white">Configurar Sua Chave Grátis da Google Places API</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                O Google presenteia <strong>$200 DÓLARES GRATUITOS TODO MÊS</strong> para cada conta do Google Cloud Console.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white/70 uppercase">Cole Sua Chave de API Google (Places API)</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Ex: AIzaSyD..."
                className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-3 text-sm text-white font-mono outline-none focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button onClick={() => setIsConfigOpen(false)} className="px-4 py-2.5 text-xs font-bold text-white/60 hover:text-white">
                Cancelar
              </button>
              <button onClick={() => handleSaveApiKey(apiKey)} className="px-6 py-2.5 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Salvar Minha Chave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// COMPONENTE DO CARD DA EMPRESA COM TODOS OS BOTÕES E INFORMAÇÕES COMPLETAS
function LeadCard({
  lead,
  isSaved,
  onToggleSave,
  onOpenDemoPage,
  onOpenScriptModal,
}: {
  lead: LeadItem;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenDemoPage: () => void;
  onOpenScriptModal: () => void;
}) {
  const instaSearchUrl = lead.instagram_url || `https://www.instagram.com/explore/tags/${lead.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/`;

  return (
    <div className="bg-[#111218] border border-white/10 rounded-2xl p-5 space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between shadow-xl">
      <div className="space-y-3">
        {/* Titulo e Avaliação */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="px-2 py-0.5 bg-white/5 text-white/70 text-[10px] font-bold rounded border border-white/10 uppercase tracking-wider mb-1 inline-block">
              {formatCategoryLabel(lead.category)}
            </span>
            <h3 className="font-extrabold text-base text-white hover:text-primary transition-colors">
              <a href={lead.google_maps_url} target="_blank" rel="noopener noreferrer">
                {lead.name}
              </a>
            </h3>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-lg border border-yellow-400/20 shrink-0">
            <Star size={13} fill="currentColor" />
            <span>{lead.rating || "4.8"}</span>
            <span className="text-[10px] text-white/40">({lead.reviews_count || 12})</span>
          </div>
        </div>

        {/* Endereço e Telefone */}
        <div className="space-y-1 text-xs text-white/70">
          <p className="flex items-start gap-1.5">
            <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
            <span>{lead.address}</span>
          </p>
          <p className="font-mono text-white/90 flex items-center gap-1.5">
            <Phone size={14} className="text-emerald-400 shrink-0" />
            <span>{lead.phone}</span>
          </p>
        </div>

        {/* Tag de Oportunidade */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {!lead.has_website ? (
            <span className="px-2.5 py-0.5 bg-amber-500/15 text-amber-300 text-[10px] font-extrabold rounded-full border border-amber-500/30 flex items-center gap-1">
              <Flame size={12} className="text-amber-400" />
              <span>OPORTUNIDADE DE OURO (Sem Website)</span>
            </span>
          ) : (
            <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-300 text-[10px] font-extrabold rounded-full border border-emerald-500/30 flex items-center gap-1">
              <Globe size={12} />
              <span>Possui Website</span>
            </span>
          )}

          {lead.photos_count ? (
            <span className="px-2.5 py-0.5 bg-white/5 text-white/70 text-[10px] font-semibold rounded-full border border-white/10 flex items-center gap-1">
              <ImageIcon size={12} />
              <span>{lead.photos_count} Fotos do Google</span>
            </span>
          ) : null}
        </div>
      </div>

      {/* Botões de Ação Completa */}
      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {/* Salvar Lead */}
          <button
            onClick={onToggleSave}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/70 hover:text-white border border-white/10 transition-all"
            title={isSaved ? "Remover dos Salvos" : "Salvar Lead"}
          >
            {isSaved ? <BookmarkCheck size={16} className="text-amber-400" /> : <Bookmark size={16} />}
          </button>

          {/* Instagram Link */}
          <a
            href={instaSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-pink-300 border border-pink-500/30 rounded-xl text-xs font-bold transition-all"
            title="Buscar no Instagram"
          >
            <Instagram size={16} />
          </a>

          {/* Google Maps Link */}
          <a
            href={lead.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 rounded-xl text-xs font-bold transition-all"
            title="Abrir no Google Maps"
          >
            <MapPin size={16} />
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Gerar Prévia (Abre o site de demonstração em 1-clique) */}
          <button
            onClick={onOpenDemoPage}
            className="px-3.5 py-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:opacity-90 text-black font-black text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
          >
            <Eye size={14} />
            <span>Gerar Prévia</span>
          </button>

          {/* Botão de WhatsApp com Scripts */}
          <button
            onClick={onOpenScriptModal}
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
