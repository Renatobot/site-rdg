import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import { LeadItem } from "./api.prospeccao";
import {
  Search,
  MapPin,
  Phone,
  Star,
  ExternalLink,
  MessageCircle,
  Bookmark,
  BookmarkCheck,
  Download,
  Key,
  Info,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Loader2,
  Settings,
  X,
  Share2,
  Copy,
  Check,
  Globe,
  Instagram,
  Filter,
  MonitorPlay
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

function ProspeccaoPage() {
  const [activeTab, setActiveTab] = useState<"prospectar" | "salvos">("prospectar");
  const [nicho, setNicho] = useState<string>("Barbearia");
  const [cidade, setCidade] = useState<string>("São Paulo - SP");
  const [onlyNoWebsite, setOnlyNoWebsite] = useState<boolean>(true);
  const [minRating, setMinRating] = useState<number>(4.0);
  const [apiKey, setApiKey] = useState<string>("");
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [savedLeads, setSavedLeads] = useState<LeadItem[]>([]);
  const [sourceInfo, setSourceInfo] = useState<{ source: string; message?: string } | null>(null);

  // Modal de Prévia de Site
  const [selectedDemoLead, setSelectedDemoLead] = useState<LeadItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Carregar chave de API e leads salvos do localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem("google_places_api_key") || "";
    if (savedKey) setApiKey(savedKey);

    const saved = localStorage.getItem("saved_prospect_leads");
    if (saved) {
      try {
        setSavedLeads(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }

    // Fazer uma busca inicial automática de demonstração
    handleSearch("Barbearia", "São Paulo - SP", savedKey, true);
  }, []);

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem("google_places_api_key", key);
    setIsConfigOpen(false);
  };

  const handleSearch = async (
    targetNicho = nicho,
    targetCidade = cidade,
    targetApiKey = apiKey,
    isInitial = false
  ) => {
    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        nicho: targetNicho,
        cidade: targetCidade,
        apiKey: targetApiKey,
        onlyNoWebsite: String(onlyNoWebsite),
      });

      const response = await fetch(`/api/prospeccao?${queryParams.toString()}`);
      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.leads)) {
        // Filtrar por avaliação se configurado
        const filtered = data.leads.filter((l: LeadItem) => l.rating >= minRating);
        setLeads(filtered);
        setSourceInfo({ source: data.source, message: data.message });
      }
    } catch (err) {
      console.error("Erro na busca de leads:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSaveLead = (lead: LeadItem) => {
    const exists = savedLeads.some((l) => l.id === lead.id);
    let updated: LeadItem[];

    if (exists) {
      updated = savedLeads.filter((l) => l.id !== lead.id);
    } else {
      updated = [...savedLeads, lead];
    }

    setSavedLeads(updated);
    localStorage.setItem("saved_prospect_leads", JSON.stringify(updated));
  };

  const isSaved = (leadId: string) => savedLeads.some((l) => l.id === leadId);

  const exportToCSV = (leadsToExport: LeadItem[]) => {
    if (leadsToExport.length === 0) return;

    const headers = ["Nome", "Categoria", "Avaliação", "Reviews", "Endereço", "Telefone", "WhatsApp", "Possui Website", "URL Website"];
    const rows = leadsToExport.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category}"`,
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

  const copyDemoLink = (leadName: string) => {
    const demoUrl = `${window.location.origin}/membros?demo=${encodeURIComponent(leadName)}`;
    navigator.clipboard.writeText(demoUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
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
                  Cadastre sua chave grátis da <strong>Google Places API</strong> para realizar buscas de empresas reais ao vivo no Google Maps.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsConfigOpen(true)}
              className="px-4 py-2 bg-amber-500 text-black font-extrabold text-xs rounded-xl hover:bg-amber-400 transition-all shrink-0 flex items-center gap-1.5"
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
                  placeholder="Ex: Barbearia, Odontologia, Restaurante..."
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
                  placeholder="Ex: Vila Madalena, São Paulo - SP"
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
              "Barbearia",
              "Odontologia",
              "Estética",
              "Advocacia",
              "Restaurante",
              "Imobiliária",
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
                  onChange={(e) => setOnlyNoWebsite(e.target.checked)}
                  className="rounded accent-primary w-4 h-4"
                />
                <span className="font-semibold text-white">Priorizar Empresas Sem Website</span>
              </label>

              <div className="flex items-center gap-2">
                <Filter size={14} className="text-white/40" />
                <span className="text-white/50">Avaliação Mínima:</span>
                <select
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="bg-[#0A0A0A] border border-white/15 rounded-lg px-2.5 py-1 text-white font-bold outline-none"
                >
                  <option value={0}>Todas</option>
                  <option value={4.0}>⭐ 4.0+</option>
                  <option value={4.5}>⭐ 4.5+ (Melhores)</option>
                  <option value={4.8}>⭐ 4.8+ (Excelentes)</option>
                </select>
              </div>
            </div>

            {/* Alternador de Abas */}
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
                <Bookmark size={14} />
                <span>Meus Leads Salvos ({savedLeads.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* LISTAGEM DE LEADS (Cards com Estilo do Print) */}
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
            ) : leads.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-[#111218] rounded-3xl border border-white/10 p-6">
                <Search size={36} className="text-white/20 mx-auto" />
                <p className="text-base font-bold text-white">Nenhum lead localizado nesta região.</p>
                <p className="text-xs text-white/40">Tente buscar por um nicho diferente ou digite outra cidade/bairro.</p>
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
          /* Aba de Leads Salvos */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                <Bookmark className="text-primary" size={18} />
                <span>Meus Leads Salvos</span>
                <span className="text-xs font-normal text-white/50">({savedLeads.length} salvos)</span>
              </h3>

              {savedLeads.length > 0 && (
                <button
                  onClick={() => exportToCSV(savedLeads)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 text-emerald-300 rounded-xl text-xs font-bold hover:bg-emerald-500/25 border border-emerald-500/30 transition-all"
                >
                  <Download size={14} />
                  <span>Baixar CSV</span>
                </button>
              )}
            </div>

            {savedLeads.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-[#111218] rounded-3xl border border-white/10 p-6">
                <Bookmark size={36} className="text-white/20 mx-auto" />
                <p className="text-base font-bold text-white">Sua lista de leads salvos está vazia.</p>
                <p className="text-xs text-white/40">Clique no ícone de marcador ⭐ nos cards de empresas para salvar seus leads favoritos.</p>
              </div>
            ) : (
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

      {/* MODAL GERADOR DE PRÉVIA DE SITE DEMO */}
      {selectedDemoLead && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-xl w-full space-y-6 relative shadow-2xl">
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
              <h3 className="text-xl font-bold text-white">Demonstração de Site Irresistível</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Envie um modelo visual personalizado com as informações exatas da <strong>{selectedDemoLead.name}</strong> para fechar o contrato no WhatsApp.
              </p>
            </div>

            {/* Visual Card Preview do Demo */}
            <div className="bg-gradient-to-br from-[#1A1628] to-[#0A0A0A] border border-primary/30 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <MonitorPlay size={18} className="text-primary" />
                  <span className="font-bold text-sm text-white">{selectedDemoLead.name}</span>
                </div>
                <span className="text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-bold">
                  PRÉVIA PRONTA
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Este modelo traz a logo, endereço no mapa, botões de agendamento no WhatsApp e depoimentos fictícios prontos para apresentar ao dono do estabelecimento.
              </p>
            </div>

            {/* Link Copiável */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block">
                Link da Demonstração para Enviar no WhatsApp:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={`${window.location.origin}/membros?demo=${encodeURIComponent(selectedDemoLead.name)}`}
                  className="flex-1 bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white/80 font-mono outline-none"
                />
                <button
                  onClick={() => copyDemoLink(selectedDemoLead.name)}
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
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle size={16} />
                <span>Enviar Proposta no WhatsApp Agora</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente do Card do Lead (Visual Escuro idêntico à Imagem do Usuário)
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
