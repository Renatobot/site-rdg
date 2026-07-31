import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import { LeadItem, LeadStatus, generateMockLeads } from "./api.prospeccao";
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
  ExternalLink
} from "lucide-react";

const TITLE = "Ferramenta de Prospecção B2B Google Maps — RDG Digital";
const DESCRIPTION = "Encontre empresas locais sem website no Google Maps para prospectar e vender sites e landing pages de alta conversão.";
const CANONICAL_URL = `${BASE_URL}/prospeccao`;

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
  const [activeTab, setActiveTab] = useState<"prospectar" | "salvos">("prospectar");
  const [savedViewMode, setSavedViewMode] = useState<"kanban" | "grid">("kanban");

  const [nicho, setNicho] = useState<string>("Imobiliária");
  const [cidade, setCidade] = useState<string>("São Paulo - SP");
  const [onlyNoWebsite, setOnlyNoWebsite] = useState<boolean>(true);
  const [minRating, setMinRating] = useState<number>(4.0);
  const [apiKey, setApiKey] = useState<string>("");
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [savedLeads, setSavedLeads] = useState<LeadItem[]>([]);
  const [sourceInfo, setSourceInfo] = useState<{ source: string; message?: string } | null>(null);

  // Drag and Drop Kanban State
  const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<LeadStatus | null>(null);

  // Modal de Prévia Interativa de Site
  const [selectedDemoLead, setSelectedDemoLead] = useState<LeadItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Carregar chave de API e leads salvos do localStorage
  useEffect(() => {
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

    handleSearch("Imobiliária", "São Paulo - SP", savedKey);
  }, []);

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem("google_places_api_key", key);
    setIsConfigOpen(false);
    handleSearch(nicho, cidade, key);
  };

  const handleSearch = async (
    targetNicho = nicho,
    targetCidade = cidade,
    targetApiKey = apiKey
  ) => {
    setIsLoading(true);
    let fetchedLeads: LeadItem[] = [];
    let source = "demo_mock";
    let message = "Demonstração ativa. Insira sua chave da Google Places API nas configurações para buscar dados ao vivo do Google.";

    try {
      const queryParams = new URLSearchParams({
        nicho: targetNicho,
        cidade: targetCidade,
        apiKey: targetApiKey,
        onlyNoWebsite: String(onlyNoWebsite),
      });

      const response = await fetch(`/api/prospeccao?${queryParams.toString()}`);
      if (response.ok) {
        const data = await response.json();
        if (data.status === "success" && Array.isArray(data.leads) && data.leads.length > 0) {
          fetchedLeads = data.leads;
          source = data.source;
          message = data.message;
        }
      }
    } catch (err) {
      console.error("Erro na busca de leads via API:", err);
    }

    if (fetchedLeads.length === 0) {
      fetchedLeads = generateMockLeads(targetNicho, targetCidade, onlyNoWebsite);
    }

    const filtered = fetchedLeads.filter((l: LeadItem) => l.rating >= minRating);
    setLeads(filtered.length > 0 ? filtered : fetchedLeads);
    setSourceInfo({ source, message });
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

    const headers = ["Nome", "Categoria", "Status Kanban", "Avaliação", "Reviews", "Endereço", "Telefone", "WhatsApp", "Possui Website", "URL Website"];
    const rows = leadsToExport.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category}"`,
      `"${l.status || "novo"}"`,
      l.rating,
      l.user_ratings_total,
      `"${l.address.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.raw_phone}"`,
      l.has_website ? "Sim" : "Não",
      `"${l.website_url || ""}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Leads_GoogleMaps_${nicho.replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buildDemoUrl = (lead: LeadItem) => {
    const params = new URLSearchParams({
      nome: lead.name,
      categoria: lead.category,
      cidade: cidade,
      endereco: lead.address,
      phone: lead.phone,
      raw_phone: lead.raw_phone,
      rating: String(lead.rating),
      reviews: String(lead.user_ratings_total),
    });
    return `${window.location.origin}/demo?${params.toString()}`;
  };

  const copyDemoLink = (lead: LeadItem) => {
    const demoUrl = buildDemoUrl(lead);
    navigator.clipboard.writeText(demoUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
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
        {/* Banner Informativo sobre a Busca */}
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
              <span>Inserir Chave do Google</span>
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
                  placeholder="Ex: São Paulo - SP, Vila Madalena..."
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
                  handleSearch(preset, cidade);
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

          {/* Filtros Secundários */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5 text-xs text-white/70">
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyNoWebsite}
                  onChange={(e) => {
                    setOnlyNoWebsite(e.target.checked);
                    handleSearch(nicho, cidade);
                  }}
                  className="rounded accent-primary w-4 h-4"
                />
                <span className="font-semibold text-white">Priorizar Empresas Sem Website</span>
              </label>

              <div className="flex items-center gap-2">
                <Filter size={14} className="text-white/40" />
                <span className="text-white/50">Avaliação Mínima:</span>
                <select
                  value={minRating}
                  onChange={(e) => {
                    setMinRating(Number(e.target.value));
                    handleSearch(nicho, cidade);
                  }}
                  className="bg-[#0A0A0A] border border-white/15 rounded-lg px-2.5 py-1 text-white font-bold outline-none"
                >
                  <option value={0}>Todas</option>
                  <option value={4.0}>⭐ 4.0+</option>
                  <option value={4.5}>⭐ 4.5+ (Melhores)</option>
                  <option value={4.8}>⭐ 4.8+ (Excelentes)</option>
                </select>
              </div>
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
                <p className="text-xs text-white/40">Filtrando telefones e presenças digitais</p>
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
                                <h5 className="font-bold text-sm text-white group-hover:text-primary transition-colors line-clamp-1">
                                  {lead.name}
                                </h5>
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
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* MODAL CONFIGURAÇÃO CHAVE DE API GOOGLE */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-lg w-full space-y-6 relative shadow-2xl">
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
              <h3 className="text-xl font-bold text-white">Configurar Google Places API Key</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Insira sua chave de API do Google Cloud para realizar buscas ao vivo diretamente no banco de dados do Google Maps.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white/70 uppercase">Sua Chave de API Google (Places API)</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Ex: AIzaSyD..."
                className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-3 text-sm text-white font-mono outline-none focus:border-primary"
              />
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2 text-xs text-white/70">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Info size={14} className="text-primary" />
                <span>Como conseguir sua chave em 2 minutos:</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-white/60 leading-relaxed">
                <li>Acesse o <strong>Google Cloud Console</strong> (console.cloud.google.com).</li>
                <li>Crie um projeto e ative a **Places API**.</li>
                <li>Gere uma chave de API na aba de Credenciais (Receba $200 dólares de saldo grátis todo mês).</li>
              </ol>
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
                Salvar Chave
              </button>
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
                <div className="flex items-center gap-2">
                  <MonitorPlay size={18} className="text-primary" />
                  <span className="font-extrabold text-sm text-white">{selectedDemoLead.name}</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
                  SITE ONLINE
                </span>
              </div>

              <div className="text-xs text-white/70 space-y-2">
                <p>📍 <strong>Localização:</strong> {selectedDemoLead.address}</p>
                <p>⭐ <strong>Avaliação Google:</strong> {selectedDemoLead.rating} de 5.0 ({selectedDemoLead.user_ratings_total} avaliações)</p>
                <p>📞 <strong>Contato Direto:</strong> {selectedDemoLead.phone}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildDemoUrl(selectedDemoLead)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  <span>🌐 Abrir Site Completo em Nova Aba</span>
                  <ExternalLink size={14} />
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
              <a
                href={selectedDemoLead.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle size={18} />
                <span>Enviar Proposta com o Link no WhatsApp</span>
              </a>
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
}: {
  lead: LeadItem;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenDemoModal: () => void;
}) {
  return (
    <div className="bg-[#111218] border border-white/10 hover:border-primary/40 rounded-2xl p-5 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between group">
      <div className="space-y-3">
        {/* Header do Card: Nome, Categoria e Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 pr-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-primary transition-colors line-clamp-1">
                {lead.name}
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

          {/* Status do Instagram / Site */}
          <div className="flex items-center gap-2 pt-1">
            {lead.has_website ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                <Globe size={10} />
                <span>Possui Website</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                <Globe size={10} />
                <span>Não possui Website</span>
              </span>
            )}

            {lead.has_instagram ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-pink-400 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/20">
                <Instagram size={10} />
                <span>Instagram Ativo</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                <Instagram size={10} />
                <span>Não possui Instagram</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Ações do Card */}
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

        <a
          href={lead.whatsapp_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-600/20 transition-all transform hover:scale-[1.02]"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
