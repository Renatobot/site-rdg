import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import { waLink } from "@/lib/site";
import { LeadItem, LeadStatus, getProspeccaoLeadsServerFn, generateMockLeads } from "./api.prospeccao";
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
  HelpCircle
} from "lucide-react";

const TITLE = "Ferramenta de Prospecção B2B Google Maps — RDG Digital";
const DESCRIPTION = "Encontre empresas locais sem website no Google Maps para prospectar e vender sites e landing pages de alta conversão.";
const CANONICAL_URL = `${BASE_URL}/prospeccao`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Quero adquirir minha chave de acesso exclusiva para a Ferramenta de Prospecção B2B Google Maps."
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
];

function ProspeccaoPage() {
  // Autenticação de Rota / Validação de Licença da Ferramenta
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [licenseInputKey, setLicenseInputKey] = useState<string>("");
  const [licenseError, setLicenseError] = useState<string | null>(null);
  const [userClientName, setUserClientName] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"prospectar" | "salvos">("prospectar");
  const [savedViewMode, setSavedViewMode] = useState<"kanban" | "grid">("kanban");

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

  // Drag and Drop Kanban State
  const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<LeadStatus | null>(null);

  // Modal de Prévia Interativa de Site
  const [selectedDemoLead, setSelectedDemoLead] = useState<LeadItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Modal Gerador de Scripts de Abordagem WhatsApp
  const [scriptLead, setScriptLead] = useState<LeadItem | null>(null);
  const [copiedScriptIndex, setCopiedScriptIndex] = useState<number | null>(null);

  // Verificar Chave de Licença de Acesso à Ferramenta de Prospecção
  useEffect(() => {
    const savedLicense = localStorage.getItem("rdg_license_key") || localStorage.getItem("prospeccao_license_key");
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
      setLicenseError("Digite sua chave de acesso para liberar a ferramenta.");
      setIsVerifying(false);
      return;
    }

    setIsVerifying(true);
    setLicenseError(null);

    // Chaves Master / Dev de acesso imediato
    if (cleanKey.startsWith("MAPS-") || cleanKey.startsWith("PROSPECT-") || cleanKey.startsWith("MASTER-") || cleanKey === "RDG-MASTER-PROSPECT") {
      setIsAuthenticated(true);
      setUserClientName("Membro VIP");
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

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const lic = data[0];
          const isExpired = lic.expires_at && new Date(lic.expires_at) < new Date();
          const prodClean = (lic.produto || "").toLowerCase();

          // Verificar se a chave tem acesso especifico a prospeccao ou master
          const hasAccessToProspeccao =
            prodClean.includes("prospeccao") ||
            prodClean.includes("maps") ||
            prodClean.includes("master") ||
            prodClean.includes("full") ||
            lic.is_lifetime ||
            cleanKey.startsWith("MAPS-") ||
            cleanKey.startsWith("IG-"); // Permitir chaves ativas do ecosistema RDG

          if (lic.status && lic.status.toLowerCase() === "inativo") {
            setLicenseError("Esta chave de acesso encontra-se inativa. Fale com o suporte.");
            if (isAutoCheck) localStorage.removeItem("rdg_license_key");
            setIsAuthenticated(false);
          } else if (isExpired) {
            setLicenseError("Sua licença expirou. Faça a renovação com o suporte para continuar prospectando.");
            if (isAutoCheck) localStorage.removeItem("rdg_license_key");
            setIsAuthenticated(false);
          } else if (!hasAccessToProspeccao) {
            setLicenseError("Esta chave pertence a outro software RDG. Adquira o acesso exclusivo ao Software de Prospecção B2B.");
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
            setUserClientName(lic.cliente || "Membro VIP");
            localStorage.setItem("rdg_license_key", cleanKey);
          }
        } else {
          setLicenseError(`Chave "${cleanKey}" não localizada. Verifique e tente novamente.`);
          if (isAutoCheck) localStorage.removeItem("rdg_license_key");
          setIsAuthenticated(false);
        }
      } else {
        // Fallback de permissão se houver falha de rede
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error(e);
      setIsAuthenticated(true);
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
      : "Demonstração ativa. Insira sua chave da Google Places API nas configurações para buscar dados ao vivo do Google.";

    try {
      // Chamada direta da Server Function (TanStack Start RPC)
      const data = await getProspeccaoLeadsServerFn({
        data: {
          nicho: targetNicho,
          cidade: targetCidade,
          apiKey: targetApiKey,
          onlyNoWebsite,
          onlyWithPhotos,
          onlyWithWhatsapp,
          minReviewsCount,
        },
      });

      if (data) {
        fetchedLeads = data.leads || [];
        source = data.source;
        if (data.message) message = data.message;
        if (data.googleStatus) googleStatus = data.googleStatus;
      }
    } catch (err) {
      console.error("Erro na busca de leads via Server Function:", err);
    }

    if (fetchedLeads.length === 0) {
      fetchedLeads = generateMockLeads(targetNicho, targetCidade, onlyNoWebsite);
    }

    const filtered = fetchedLeads.filter((l: LeadItem) => l.rating >= minRating && l.user_ratings_total >= minReviewsCount);
    setLeads(filtered.length > 0 ? filtered : fetchedLeads);
    setSourceInfo({ source, message, googleStatus });
    setIsLoading(false);
  };

  const toggleSaveLead = (lead: LeadItem) => {
    const exists = savedLeads.some((l) => l.id === lead.id);
    let updated: LeadItem[];

    if (exists) {
      updated = savedLeads.filter((l) => l.id !== lead.id);
    } else {
      updated = [...savedLeads, { ...lead, status: lead.status || "novo" }];
    }

    setSavedLeads(updated);
    localStorage.setItem("saved_prospect_leads", JSON.stringify(updated));
  };

  const updateLeadStatus = (leadId: string, newStatus: LeadStatus) => {
    const updated = savedLeads.map((l) => {
      if (l.id === leadId) {
        return { ...l, status: newStatus };
      }
      return l;
    });

    setSavedLeads(updated);
    localStorage.setItem("saved_prospect_leads", JSON.stringify(updated));
  };

  const isSaved = (leadId: string) => savedLeads.some((l) => l.id === leadId);

  const exportToCSV = (leadsToExport: LeadItem[]) => {
    if (leadsToExport.length === 0) return;

    const headers = ["Nome", "Categoria", "Status Kanban", "Avaliação", "Reviews", "Endereço", "Telefone", "WhatsApp", "Instagram URL", "Possui Website", "URL Website"];
    const rows = leadsToExport.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category}"`,
      `"${l.status || "novo"}"`,
      l.rating,
      l.user_ratings_total,
      `"${l.address.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.raw_phone}"`,
      `"${l.instagram_url || ""}"`,
      l.has_website ? "Sim" : "Não",
      `"${l.website_url || ""}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Leads_GoogleMaps_${(nicho || "geral").replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buildDemoUrl = (lead: LeadItem) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("active_demo_lead", JSON.stringify(lead));
      sessionStorage.setItem(`demo_lead_${lead.id}`, JSON.stringify(lead));
    }

    const params = new URLSearchParams({
      place_id: lead.id,
      nome: lead.name,
      categoria: lead.category,
      cidade: cidade || "São Paulo - SP",
      endereco: lead.address,
      phone: lead.phone,
      raw_phone: lead.raw_phone,
      rating: String(lead.rating),
      reviews: String(lead.user_ratings_total),
    });

    if (Array.isArray(lead.photos) && lead.photos.length > 0) {
      params.set("photos", JSON.stringify(lead.photos));
    }
    if (Array.isArray(lead.reviews_list) && lead.reviews_list.length > 0) {
      params.set("reviews_json", JSON.stringify(lead.reviews_list));
    }
    if (Array.isArray(lead.opening_hours) && lead.opening_hours.length > 0) {
      params.set("hours_json", JSON.stringify(lead.opening_hours));
    }
    if (lead.editorial_summary) {
      params.set("summary", lead.editorial_summary);
    }

    return `${window.location.origin}/demo?${params.toString()}`;
  };

  const openDemoPage = (lead: LeadItem) => {
    const demoUrl = buildDemoUrl(lead);
    window.open(demoUrl, "_blank");
  };

  const copyDemoLink = (lead: LeadItem) => {
    const demoUrl = buildDemoUrl(lead);
    navigator.clipboard.writeText(demoUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Gerador de Scripts de Abordagem Customizados
  const getSalesScripts = (lead: LeadItem) => {
    const demoUrl = buildDemoUrl(lead);

    return [
      {
        title: "🔥 Abordagem por Elogio de Nota do Google (Alta Conversão)",
        type: "Direct Pitch",
        text: `Olá! Falei com a equipe do *${lead.name}*?\n\nEstava navegando no Google Maps na região de ${cidade} e notei que vocês têm uma excelente avaliação de ⭐ *${lead.rating} com ${lead.user_ratings_total} depoimentos positivos*, parabéns pelo ótimo trabalho!\n\nPorém, percebi que quando o cliente clica para ver o site de vocês, não há um link oficial para agendar ou ver os serviços.\n\nMontei uma demonstração de site oficial completa e personalizada para o *${lead.name}*, dá uma olhada como ficou incrível:\n👇\n${demoUrl}\n\nConsegue dar uma olhada e me dizer o que achou? Se gostar, ajustamos o que precisar!`,
      },
      {
        title: "💡 Abordagem Consultiva (Foco em Vendas Perdiadas)",
        type: "Consultative",
        text: `Olá! Tudo bem? Meu nome é Renato da RDG Digital.\n\nEstou fazendo um levantamento de empresas referência em ${lead.category} na região e encontrei o *${lead.name}*.\n\nVocês sabiam que hoje muitos clientes buscam no Google e acabam fechando com o concorrente por não encontrarem um site moderno com WhatsApp direto?\n\nPara ajudar vocês a não perderem mais essas vendas, preparei uma prévia de um site de alta conversão exclusivo para o *${lead.name}*:\n🔗 ${demoUrl}\n\nSe tiver 2 minutos, podemos conversar para colocá-lo no ar esta semana!`,
      },
      {
        title: "🚀 Abordagem Rápida e Direta (Vídeo / Demonstração)",
        type: "Quick Offer",
        text: `Olá! Tudo bem?\n\nDesenvolvemos o modelo oficial de site exclusivo para o *${lead.name}* com todas as fotos, avaliações e agendamento pelo WhatsApp.\n\nAcesse a prévia aqui: ${demoUrl}\n\nVocês têm interesse em colocar este site no ar no domínio oficial de vocês hoje?`,
      },
    ];
  };

  // Drag and Drop Event Handlers
  const handleDragStart = (e: React.DragEvent, leadId: string) => {
    e.dataTransfer.setData("text/plain", leadId);
    setDraggedLeadId(leadId);
  };

  const handleDragOver = (e: React.DragEvent, colId: LeadStatus) => {
    e.preventDefault();
    setDragOverCol(colId);
  };

  const handleDrop = (e: React.DragEvent, colId: LeadStatus) => {
    e.preventDefault();
    const leadId = e.dataTransfer.getData("text/plain") || draggedLeadId;
    if (leadId) {
      updateLeadStatus(leadId, colId);
    }
    setDraggedLeadId(null);
    setDragOverCol(null);
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

  // TELA DE BLOQUEIO DE ACESSO & UPSELL DA FERRAMENTA DE PROSPECÇÃO
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between font-sans selection:bg-primary/30">
        <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <a href="/membros" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
            <ArrowLeft size={16} />
            <span>Voltar à Área de Membros</span>
          </a>
          <a
            href={WA_SUPORTE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/20 transition-all"
          >
            <MessageCircle size={14} />
            <span>Suporte no WhatsApp</span>
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
                Software de Prospecção B2B
              </h1>
              <p className="text-xs text-white/60 leading-relaxed">
                Digite sua <strong>Chave de Acesso Exclusiva</strong> da Ferramenta de Prospecção B2B Google Maps para liberar o sistema.
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
                  Chave de Licença do Software (Key)
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
                    <span>Liberar Acesso ao Software</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-5 border-t border-white/10 text-center space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-bold text-white">Ainda não possui o Software de Prospecção?</p>
                <p className="text-[11px] text-white/50">
                  Adquira o acesso vitalício para buscar empresas sem site e gerar demonstrações ao vivo.
                </p>
              </div>

              <a
                href={WA_SUPORTE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Zap size={16} />
                <span>Adquirir Acesso com Desconto no WhatsApp</span>
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

        {/* Banner Informativo de Busca ao Vivo via API */}
        {sourceInfo?.source === "google_api" && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Check size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Busca ao Vivo no Google Maps Concluída</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">ONLINE</span>
                </h4>
                <p className="text-xs text-emerald-200/70">
                  {sourceInfo.message || `Retornados ${leads.length} resultados reais de empresas diretamente da Google Places API.`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Banner Informativo sobre Modo Demo */}
        {sourceInfo?.source === "demo_mock" && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-amber-500/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                <Sparkles size={18} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Modo Demonstração Ativo (Leads Simulados)</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">DEMO</span>
                </h4>
                <p className="text-xs text-amber-200/70">
                  Insira sua chave grátis da <strong>Google Places API</strong> para realizar buscas de empresas ao vivo no Google Maps.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsConfigOpen(true)}
              className="px-4 py-2 bg-amber-500 text-black font-extrabold text-xs rounded-xl hover:bg-amber-400 transition-all shrink-0 flex items-center gap-1.5 shadow"
            >
              <Key size={14} />
              <span>Inserir Chave do Google ($200 Grátis/mês)</span>
            </button>
          </div>
        )}

        {/* Top Controls & Search Card */}
        <div className="bg-[#111218] border border-white/10 rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl">
          {/* Form de Busca */}
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
                  placeholder="Ex: São Paulo - SP, Rio de Janeiro - RJ..."
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="sm:col-span-3 pt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold py-2.5 px-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Buscando...</span>
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    <span>Buscar Leads</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Atalhos Rápidos de Nichos */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/5">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider mr-1">
              Atalhos Rápidos:
            </span>
            {[
              "Imobiliária",
              "Barbearia",
              "Odontologia",
              "Estética",
              "Advocacia",
              "Restaurante",
              "Pet Shop",
            ].map((preset) => (
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

          {/* Barra de Filtros Principais + Botão de Filtros Avançados */}
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

              <button
                type="button"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                  showAdvancedFilters || onlyWithPhotos || onlyWithWhatsapp || minReviewsCount > 0
                    ? "bg-primary/20 text-primary border-primary/40"
                    : "bg-white/5 text-white/70 border-white/10 hover:text-white"
                }`}
              >
                <SlidersHorizontal size={14} />
                <span>Filtros Avançados SaaS</span>
              </button>
            </div>

            {/* Alternador de Abas Principais */}
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

          {/* PAINEL EXPANSÍVEL DE FILTROS AVANÇADOS DE PROSPECÇÃO (SAAS LEVEL) */}
          {showAdvancedFilters && (
            <div className="bg-[#0A0A0A] border border-primary/30 rounded-2xl p-4 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <Filter size={14} />
                  <span>Filtros Avançados de Qualificação de Lead</span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setOnlyWithPhotos(false);
                    setOnlyWithWhatsapp(false);
                    setMinRating(0);
                    setMinReviewsCount(0);
                    if (hasSearched) handleSearch(nicho, cidade);
                  }}
                  className="text-[10px] text-white/40 hover:text-white underline"
                >
                  Limpar Filtros
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {/* Filtro: Apenas com Fotos Reais */}
                <label className="flex items-center gap-2.5 cursor-pointer bg-white/5 p-2.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                  <input
                    type="checkbox"
                    checked={onlyWithPhotos}
                    onChange={(e) => {
                      setOnlyWithPhotos(e.target.checked);
                      if (hasSearched) handleSearch(nicho, cidade);
                    }}
                    className="rounded accent-primary w-4 h-4"
                  />
                  <div className="space-y-0.5">
                    <span className="font-bold text-white flex items-center gap-1">
                      <ImageIcon size={12} className="text-emerald-400" />
                      <span>Fotos no Perfil</span>
                    </span>
                    <p className="text-[10px] text-white/50">Somente empresas com fotos enviadas</p>
                  </div>
                </label>

                {/* Filtro: Apenas com WhatsApp Direto */}
                <label className="flex items-center gap-2.5 cursor-pointer bg-white/5 p-2.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                  <input
                    type="checkbox"
                    checked={onlyWithWhatsapp}
                    onChange={(e) => {
                      setOnlyWithWhatsapp(e.target.checked);
                      if (hasSearched) handleSearch(nicho, cidade);
                    }}
                    className="rounded accent-primary w-4 h-4"
                  />
                  <div className="space-y-0.5">
                    <span className="font-bold text-white flex items-center gap-1">
                      <MessageCircle size={12} className="text-emerald-400" />
                      <span>WhatsApp Direto</span>
                    </span>
                    <p className="text-[10px] text-white/50">Celular identificado para contato</p>
                  </div>
                </label>

                {/* Filtro: Mínimo de Avaliações / Volume de Reviews */}
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-1">
                  <label className="text-[10px] font-bold text-white/60 uppercase block">
                    Volume Mínimo de Reviews:
                  </label>
                  <select
                    value={minReviewsCount}
                    onChange={(e) => {
                      setMinReviewsCount(Number(e.target.value));
                      if (hasSearched) handleSearch(nicho, cidade);
                    }}
                    className="w-full bg-[#111218] border border-white/15 rounded-lg px-2 py-1 text-white font-bold text-xs outline-none"
                  >
                    <option value={0}>Sem mínimo de avaliações</option>
                    <option value={10}>Mais de 10 avaliações</option>
                    <option value={30}>Mais de 30 avaliações (Empresas Ativas)</option>
                    <option value={50}>Mais de 50 avaliações (Líderes Locais)</option>
                    <option value={100}>Mais de 100 avaliações (🔥 Super Lead)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
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
            ) : !hasSearched && leads.length === 0 ? (
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
            ) : leads.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-[#111218] rounded-3xl border border-white/10 p-6">
                <Search size={36} className="text-white/20 mx-auto" />
                <p className="text-base font-bold text-white">Nenhum lead localizado para a busca atual.</p>
                <p className="text-xs text-white/40">Tente buscar digitando o nome do bairro ou cidade próxima.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leads.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    isSaved={isSaved(lead.id)}
                    onToggleSave={() => toggleSaveLead(lead)}
                    onOpenDemoModal={() => setSelectedDemoLead(lead)}
                    onOpenScriptModal={() => setScriptLead(lead)}
                    onOpenDemoPage={() => openDemoPage(lead)}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* TAB 2: MEUS LEADS SALVOS (KANBAN BOARD DRAG & DROP) */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111218] p-4 sm:p-5 rounded-2xl border border-white/10">
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                  <Kanban className="text-primary" size={20} />
                  <span>Painel Kanban de Prospecção (Drag & Drop)</span>
                </h3>
                <p className="text-xs text-white/50">
                  Arraste os cards de empresa entre as colunas para gerenciar o status da sua negociação.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex bg-[#0A0A0A] p-1 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setSavedViewMode("kanban")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                      savedViewMode === "kanban" ? "bg-primary text-black" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Kanban size={14} />
                    <span>Kanban</span>
                  </button>
                  <button
                    onClick={() => setSavedViewMode("grid")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                      savedViewMode === "grid" ? "bg-primary text-black" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Grid size={14} />
                    <span>Lista Cards</span>
                  </button>
                </div>

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

            {savedLeads.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-[#111218] rounded-3xl border border-white/10 p-6">
                <Bookmark size={36} className="text-white/20 mx-auto" />
                <p className="text-base font-bold text-white">Sua lista de leads salvos está vazia.</p>
                <p className="text-xs text-white/40">Clique no ícone de marcador ⭐ nos cards de empresas para salvar seus leads favoritos.</p>
              </div>
            ) : savedViewMode === "kanban" ? (
              /* KANBAN BOARD VIEW */
              <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar items-start">
                {KANBAN_COLUMNS.map((col) => {
                  const colLeads = savedLeads.filter((l) => (l.status || "novo") === col.id);
                  const isOver = dragOverCol === col.id;

                  return (
                    <div
                      key={col.id}
                      onDragOver={(e) => handleDragOver(e, col.id)}
                      onDrop={(e) => handleDrop(e, col.id)}
                      className={`w-72 sm:w-80 shrink-0 bg-[#111218] rounded-2xl border transition-all flex flex-col max-h-[750px] ${
                        isOver ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-white/10"
                      }`}
                    >
                      <div className={`p-4 border-b ${col.headerBorder} flex items-center justify-between bg-[#0A0A0A]/50 rounded-t-2xl`}>
                        <h4 className="font-extrabold text-xs text-white uppercase tracking-wider flex items-center gap-2">
                          <span>{col.title}</span>
                        </h4>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${col.badgeColor}`}>
                          {colLeads.length}
                        </span>
                      </div>

                      <div className="p-3 space-y-3 overflow-y-auto custom-scrollbar flex-1 min-h-[150px]">
                        {colLeads.length === 0 ? (
                          <div className="h-28 border border-dashed border-white/10 rounded-xl flex items-center justify-center text-[11px] text-white/30 text-center p-3">
                            Arraste leads para esta coluna
                          </div>
                        ) : (
                          colLeads.map((lead) => (
                            <div
                              key={lead.id}
                              draggable
                              onDragStart={(e) => handleDragStart(e, lead.id)}
                              className="bg-[#0A0A0A] border border-white/10 hover:border-primary/50 rounded-xl p-4 space-y-3 cursor-grab active:cursor-grabbing transition-all hover:shadow-lg group"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <a
                                  href={lead.google_maps_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Abrir no Google Maps"
                                  className="font-bold text-sm text-white group-hover:text-primary transition-colors line-clamp-1 hover:underline"
                                >
                                  {lead.name}
                                </a>
                                <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-400 shrink-0">
                                  <Star size={10} fill="currentColor" />
                                  <span>{lead.rating}</span>
                                </div>
                              </div>

                              <div className="text-[11px] text-white/60 space-y-1">
                                <p className="truncate">📍 {lead.address}</p>
                                <p className="font-mono text-white/80">📞 {lead.phone}</p>
                              </div>

                              <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                                <select
                                  value={lead.status || "novo"}
                                  onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                                  className="bg-[#111218] border border-white/10 text-[10px] text-white/80 rounded-lg px-2 py-1 outline-none font-bold cursor-pointer"
                                >
                                  {KANBAN_COLUMNS.map((c) => (
                                    <option key={c.id} value={c.id}>
                                      {c.title}
                                    </option>
                                  ))}
                                </select>

                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => setScriptLead(lead)}
                                    title="Gerar Abordagem WhatsApp"
                                    className="p-1.5 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30 rounded-lg"
                                  >
                                    <FileText size={12} />
                                  </button>
                                  <button
                                    onClick={() => setSelectedDemoLead(lead)}
                                    title="Prévia do Site"
                                    className="p-1.5 bg-white/5 hover:bg-white/10 text-primary rounded-lg border border-white/10"
                                  >
                                    <Sparkles size={12} />
                                  </button>
                                  <a
                                    href={lead.whatsapp_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="WhatsApp"
                                    className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
                                  >
                                    <MessageCircle size={12} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedLeads.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    isSaved={true}
                    onToggleSave={() => toggleSaveLead(lead)}
                    onOpenDemoModal={() => setSelectedDemoLead(lead)}
                    onOpenScriptModal={() => setScriptLead(lead)}
                    onOpenDemoPage={() => openDemoPage(lead)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* MODAL CONFIGURAÇÃO CHAVE DE API GOOGLE E TUTORIAL COMPLETO DE $200 GRÁTIS */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-xl w-full space-y-6 relative shadow-2xl my-auto">
            <button
              onClick={() => setIsConfigOpen(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white p-1"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <Key size={20} />
              </div>
              <h3 className="text-xl font-black text-white">Configurar Sua Chave Grátis da Google Places API</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                O Google presenteia <strong>$200 DÓLARES GRATUITOS TODO MÊS</strong> para cada conta do Google Cloud Console. Isso garante mais de 10.000 buscas gratuitas por mês sem custo algum para você!
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

            {/* TUTORIAL PASSO A PASSO ILUSTRADO */}
            <div className="p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl space-y-3 text-xs text-white/80">
              <div className="font-extrabold text-primary flex items-center gap-1.5 text-xs">
                <Info size={14} />
                <span>Passo a Passo Rápido para Criar Sua Chave Grátis:</span>
              </div>
              <ol className="space-y-2 text-white/70 list-decimal list-inside text-xs leading-relaxed">
                <li>
                  Acesse o <strong>Google Cloud Console</strong> (<a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">console.cloud.google.com</a>) e faça login com seu Gmail.
                </li>
                <li>
                  Crie um novo projeto e acesse a seção <strong>APIs e Serviços &gt; Biblioteca</strong>.
                </li>
                <li>
                  Procure por <strong>Places API</strong> e clique no botão verde <strong>ATIVAR</strong>.
                </li>
                <li>
                  Acesse a aba <strong>Credenciais &gt; Criar Credenciais &gt; Chave de API</strong>.
                </li>
                <li>
                  Copie a chave gerada (começa com <code>AIzaSy...</code>) e cole no campo acima!
                </li>
              </ol>
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[11px] text-emerald-300">
                💡 <strong>Dica de Economia:</strong> Com os $200 de saldo grátis renovados mensalmente pelo Google, você pode prospectar diariamente de graça!
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsConfigOpen(false)}
                className="px-4 py-2.5 text-xs font-bold text-white/60 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleSaveApiKey(apiKey)}
                className="px-6 py-2.5 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Salvar Minha Chave
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL GERADOR DE SCRIPTS DE ABORDAGEM WHATSAPP */}
      {scriptLead && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl max-w-2xl w-full flex flex-col relative shadow-2xl my-auto p-6 space-y-6">
            <button
              onClick={() => setScriptLead(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-white p-1"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-black text-white">Scripts de Abordagem de Alta Conversão</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Copie os modelos de mensagem já preenchidos com os dados reais de <strong>{scriptLead.name}</strong> e o link do site pronto.
              </p>
            </div>

            <div className="space-y-4 max-h-[450px] overflow-y-auto custom-scrollbar pr-1">
              {getSalesScripts(scriptLead).map((script, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-primary">{script.title}</h4>
                    <span className="text-[10px] bg-white/5 text-white/60 px-2 py-0.5 rounded-full border border-white/10 font-mono">
                      {script.type}
                    </span>
                  </div>

                  <pre className="text-xs text-white/80 font-sans whitespace-pre-wrap leading-relaxed bg-[#111218] p-3 rounded-xl border border-white/5">
                    {script.text}
                  </pre>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(script.text);
                        setCopiedScriptIndex(idx);
                        setTimeout(() => setCopiedScriptIndex(null), 2000);
                      }}
                      className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl border border-white/10 flex items-center gap-1.5 transition-all"
                    >
                      {copiedScriptIndex === idx ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copiedScriptIndex === idx ? "Copiado!" : "Copiar Texto"}</span>
                    </button>
                    <a
                      href={`https://wa.me/${(scriptLead.raw_phone || "5511988887777").replace(/\D/g, "")}?text=${encodeURIComponent(script.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
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

      {/* MODAL GERADOR E VISUALIZADOR DE PRÉVIA DE SITE REAL INTERATIVO */}
      {selectedDemoLead && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl max-w-3xl w-full flex flex-col relative shadow-2xl my-auto p-6 space-y-6">
            <button
              onClick={() => setSelectedDemoLead(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-white p-1"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-black text-white">Demonstração de Site Real Gerada</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Um site de alta conversão 100% completo com fotos, depoimentos e agendamento foi criado para <strong>{selectedDemoLead.name}</strong>.
              </p>
            </div>

            {/* Preview Box */}
            <div className="bg-gradient-to-br from-[#181928] to-[#0A0A0E] border border-primary/30 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <a
                  href={selectedDemoLead.google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-white font-extrabold text-sm"
                >
                  <Globe size={18} className="text-primary" />
                  <span>{selectedDemoLead.name}</span>
                  <ExternalLink size={14} className="text-white/40" />
                </a>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
                  SITE ONLINE NO AR
                </span>
              </div>

              <div className="text-xs text-white/70 space-y-2">
                <p>📍 <strong>Localização:</strong> {selectedDemoLead.address}</p>
                <p>⭐ <strong>Avaliação Google:</strong> {selectedDemoLead.rating} de 5.0 ({selectedDemoLead.user_ratings_total} avaliações)</p>
                <p>📞 <strong>Contato Direto:</strong> {selectedDemoLead.phone}</p>
                <p>📸 <strong>Instagram:</strong> <a href={selectedDemoLead.instagram_url || `https://www.instagram.com/${selectedDemoLead.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/`} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline font-bold">{selectedDemoLead.instagram_handle || "@empresa"}</a></p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openDemoPage(selectedDemoLead)}
                  className="flex-1 px-4 py-3 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <span>🌐 Abrir Site Completo em Nova Aba</span>
                  <ExternalLink size={14} />
                </button>
                <a
                  href={selectedDemoLead.instagram_url || `https://www.instagram.com/${selectedDemoLead.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-pink-500/20 text-pink-300 font-bold text-xs rounded-xl hover:bg-pink-500/30 border border-pink-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <Instagram size={14} />
                  <span>Abrir Instagram</span>
                </a>
              </div>
            </div>

            {/* Link Copiável para WhatsApp */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block">
                Link do Site de Demonstração para Enviar no WhatsApp:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={buildDemoUrl(selectedDemoLead)}
                  className="flex-1 bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white/80 font-mono outline-none"
                />
                <button
                  onClick={() => copyDemoLink(selectedDemoLead)}
                  className="px-4 py-2.5 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shrink-0 flex items-center gap-1.5"
                >
                  {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedLink ? "Copiado!" : "Copiar Link"}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  const leadToScript = selectedDemoLead;
                  setSelectedDemoLead(null);
                  setScriptLead(leadToScript);
                }}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Zap size={18} />
                <span>Gerar Script de Abordagem Personalizado</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente do Card do Lead
function LeadCard({
  lead,
  isSaved,
  onToggleSave,
  onOpenDemoModal,
  onOpenScriptModal,
  onOpenDemoPage,
}: {
  lead: LeadItem;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenDemoModal: () => void;
  onOpenScriptModal: () => void;
  onOpenDemoPage: () => void;
}) {
  const instaTargetUrl = lead.instagram_url || `https://www.instagram.com/${lead.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/`;
  const photoCount = lead.google_photos_count || lead.photos?.length || 0;
  const isHotLead = !lead.has_website && lead.rating >= 4.7 && lead.user_ratings_total >= 20;

  return (
    <div
      className={`bg-[#111218] border rounded-2xl p-5 space-y-4 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group ${
        isHotLead
          ? "border-amber-500/60 bg-gradient-to-b from-[#16141a] to-[#111218] shadow-amber-500/10"
          : !lead.has_website
          ? "border-amber-500/40 hover:border-amber-500/80"
          : "border-white/10 hover:border-primary/40"
      }`}
    >
      <div className="space-y-3">
        {/* Header do Card: Nome Clicável para Google Maps, Categoria e Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 pr-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-primary transition-colors line-clamp-1">
                <a
                  href={lead.google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir no Google Maps"
                  className="hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{lead.name}</span>
                  <ExternalLink size={14} className="text-white/40 group-hover:text-primary transition-colors" />
                </a>
              </h3>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white/5 text-white/70 border border-white/10">
                {lead.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2.5 py-1 rounded-lg">
            <Star size={13} fill="currentColor" />
            <span className="text-xs font-bold">{lead.rating}</span>
            <span className="text-[10px] text-yellow-300/60">({lead.user_ratings_total})</span>
          </div>
        </div>

        {/* Informações de Endereço & Telefone */}
        <div className="space-y-2 text-xs text-white/70">
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-white/40 shrink-0 mt-0.5" />
            <span className="leading-relaxed line-clamp-2">{lead.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={14} className="text-white/40 shrink-0" />
            <span className="font-mono text-white/90">{lead.phone}</span>
          </div>

          {/* Badges de Qualificação do Lead */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            {isHotLead ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-black text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/50 animate-pulse shadow-md shadow-amber-500/20">
                <Flame size={12} className="text-amber-400" />
                <span>🔥 LEAD ALTA TEMPERATURA (Sem Website + Nota {lead.rating})</span>
              </span>
            ) : !lead.has_website ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-300 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                <Flame size={10} className="text-amber-400" />
                <span>OPORTUNIDADE DE OURO (Sem Website)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                <Globe size={10} />
                <span>Possui Website</span>
              </span>
            )}

            {photoCount > 0 && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <ImageIcon size={10} />
                <span>{photoCount} Fotos do Perfil</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Ações do Card: Marcador + Prévia + Script + WhatsApp */}
      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSave}
            title={isSaved ? "Remover dos Salvos" : "Salvar Lead"}
            className={`p-2 rounded-xl border transition-all ${
              isSaved
                ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                : "bg-white/5 text-white/50 border-white/10 hover:text-white hover:bg-white/10"
            }`}
          >
            {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          </button>

          <button
            onClick={onOpenDemoModal}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 rounded-xl text-xs font-bold transition-all"
          >
            <Sparkles size={14} className="text-primary" />
            <span>Gerar Prévia</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenScriptModal}
            title="Gerar Script de Abordagem"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary/15 hover:bg-primary/25 border border-primary/30 text-primary font-extrabold text-xs rounded-xl transition-all"
          >
            <Zap size={14} />
            <span>Script</span>
          </button>

          <a
            href={instaTargetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir Perfil do Instagram"
            className="inline-flex items-center justify-center p-2 bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/30 text-pink-300 rounded-xl transition-all"
          >
            <Instagram size={14} />
          </a>

          <a
            href={lead.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-600/20 transition-all transform hover:scale-[1.02]"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
