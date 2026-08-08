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
  Share2,
  Trash2,
  ArrowRight
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
];

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

function generateDemoMockLeads(nichoInput: string, cidadeInput: string): LeadItem[] {
  const cleanNicho = nichoInput || "Estética & Beleza";
  const cleanCidade = cidadeInput || "São Paulo - SP";

  const prefixes = [
    "Clínica Especializada",
    "Estúdio & Espaço",
    "Consultório Central",
    "Centro Integrado",
    "Ateliê & Studio",
    "Espaço VIP",
    "Instituto",
    "Grupo Comercial",
  ];

  const phoneDDD = cleanCidade.includes("Rio") ? "21" : cleanCidade.includes("Belo") ? "31" : cleanCidade.includes("Curitiba") ? "41" : cleanCidade.includes("Salvador") ? "71" : "11";

  return prefixes.map((pref, idx) => {
    const name = `${pref} ${cleanNicho} ${idx % 2 === 0 ? "Prime" : "Master"}`;
    const num = 100 + idx * 140;
    return {
      id: `demo_mock_lead_${idx}_${Date.now()}`,
      name,
      category: cleanNicho,
      address: `Rua das Flores, ${num} - ${cleanCidade}`,
      phone: `+55 ${phoneDDD} 9${8800 + idx * 11}-${1000 + idx * 22}`,
      raw_phone: `55${phoneDDD}9${8800 + idx * 11}${1000 + idx * 22}`,
      rating: Number((4.7 + (idx % 4) * 0.1).toFixed(1)),
      user_ratings_total: 24 + idx * 19,
      has_website: false,
      google_maps_url: `https://maps.google.com/?q=${encodeURIComponent(name + " " + cleanCidade)}`,
      whatsapp_link: `https://wa.me/55${phoneDDD}9${8800 + idx * 11}${1000 + idx * 22}`,
      google_photos_count: 8 + idx * 3,
      editorial_summary: `Estabelecimento local de destaque no segmento de ${cleanNicho} com excelentes avaliações de clientes.`,
      status: idx === 0 ? "novo" : idx === 1 ? "em_contato" : "novo",
    };
  });
}

function ProspeccaoPage() {
  const search = Route.useSearch();
  const [showDemoLockModal, setShowDemoLockModal] = useState<boolean>(false);

  const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("demo") === "true" || params.get("mode") === "demo") return true;
    }
    return (search as any)?.demo === "true" || (search as any)?.mode === "demo";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("demo") === "true" || params.get("mode") === "demo") {
        setIsDemoMode(true);
      }
    }
  }, [search]);

  // Autenticação de Rota / Validação de Licença Exclusiva
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [licenseInputKey, setLicenseInputKey] = useState<string>("");
  const [licenseError, setLicenseError] = useState<string | null>(null);
  const [userClientName, setUserClientName] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"prospectar" | "salvos" | "previas" | "kanban">("prospectar");
  const [savedPreviewsList, setSavedPreviewsList] = useState<any[]>([]);

  // Carregar prévias salvas localmente
  const loadSavedPreviews = () => {
    try {
      const list = JSON.parse(localStorage.getItem("rdg_saved_previews") || "[]");
      setSavedPreviewsList(list);
    } catch (e) {
      setSavedPreviewsList([]);
    }
  };

  useEffect(() => {
    loadSavedPreviews();
  }, [activeTab]);

  const handleDeleteSavedPreview = (previewId: string) => {
    try {
      const existing = JSON.parse(localStorage.getItem("rdg_saved_previews") || "[]");
      const updated = existing.filter((item: any) => item && item.id !== previewId && item.name !== previewId);
      localStorage.setItem("rdg_saved_previews", JSON.stringify(updated));
      setSavedPreviewsList(updated);
    } catch (e) {
      console.error(e);
    }
  };

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
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [savedLeads, setSavedLeads] = useState<LeadItem[]>([]);
  const [sourceInfo, setSourceInfo] = useState<{ source: string; message?: string; googleStatus?: string } | null>(null);

  // Modal Gerador de Scripts de Abordagem WhatsApp
  const [scriptLead, setScriptLead] = useState<LeadItem | null>(null);
  const [copiedScriptIndex, setCopiedScriptIndex] = useState<number | null>(null);

  // Modal de Personalização da Prévia do Site com Upload de Fotos
  const [previewModalLead, setPreviewModalLead] = useState<LeadItem | null>(null);
  const [customHeroPhoto, setCustomHeroPhoto] = useState<string>("");
  const [customGalleryPhotos, setCustomGalleryPhotos] = useState<string[]>([]);

  // Verificar Chave de Licença de Acesso à Ferramenta de Prospecção (CHAVE VERIFICADA NO SUPABASE)
  useEffect(() => {
    if (isDemoMode) {
      setIsAuthenticated(true);
      setUserClientName("Visitante (Modo Demonstração)");
      setIsVerifying(false);

      const initialNicho = nicho || "Estética & Beleza";
      const initialCidade = cidade || "São Paulo - SP";
      setNicho(initialNicho);
      setCidade(initialCidade);
      setLeads(generateDemoMockLeads(initialNicho, initialCidade));
      setHasSearched(true);
      setSourceInfo({
        source: "demo_mock",
        message: "Modo Demonstração — Exibindo empresas fictícias para testes ao vivo do gerador de sites.",
      });
      return;
    }

    const savedLicense = localStorage.getItem("prospeccao_license_key") || localStorage.getItem("rdg_license_key");
    if (savedLicense) {
      validateLicenseKey(savedLicense, true);
    } else {
      setIsVerifying(false);
    }

    const savedKey = localStorage.getItem("google_places_api_key") || "";
    if (savedKey) setApiKey(savedKey);

    const savedNicho = localStorage.getItem("prospeccao_last_nicho") || "";
    if (savedNicho) setNicho(savedNicho);

    const savedCidade = localStorage.getItem("prospeccao_last_cidade") || "";
    if (savedCidade) setCidade(savedCidade);

    const savedLastLeads = localStorage.getItem("prospeccao_last_leads");
    if (savedLastLeads) {
      try {
        const parsed = JSON.parse(savedLastLeads);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLeads(parsed);
          setHasSearched(true);
        }
      } catch (e) {
        console.error(e);
      }
    }

    const savedNextToken = localStorage.getItem("prospeccao_last_next_page_token");
    if (savedNextToken) setNextPageToken(savedNextToken);

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
    setNextPageToken(null);

    if (isDemoMode) {
      setTimeout(() => {
        const mockData = generateDemoMockLeads(targetNicho, targetCidade);
        setLeads(mockData);
        setSourceInfo({
          source: "demo_mock",
          message: `Modo Demonstração — Exibindo empresas fictícias para "${targetNicho}" em "${targetCidade}".`,
        });
        setIsLoading(false);
      }, 600);
      return;
    }

    let fetchedLeads: LeadItem[] = [];
    let token: string | null = null;
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
        token = result.nextPageToken || null;
        source = result.source || source;
        message = result.message || message;
        googleStatus = result.googleStatus || "";
      }
    } catch (err: any) {
      console.error("Erro na busca de prospecção:", err);
    } finally {
      setSourceInfo({ source, message, googleStatus });
      setLeads(fetchedLeads);
      setNextPageToken(token);
      setIsLoading(false);

      try {
        localStorage.setItem("prospeccao_last_nicho", targetNicho);
        localStorage.setItem("prospeccao_last_cidade", targetCidade);
        localStorage.setItem("prospeccao_last_leads", JSON.stringify(fetchedLeads));
        if (token) {
          localStorage.setItem("prospeccao_last_next_page_token", token);
        } else {
          localStorage.removeItem("prospeccao_last_next_page_token");
        }
      } catch (e) {
        console.error("Erro ao salvar busca no LocalStorage:", e);
      }
    }
  };

  const handleLoadMore = async () => {
    if (isDemoMode) {
      const moreMock = generateDemoMockLeads(nicho || "Estética", cidade || "São Paulo - SP");
      setLeads((prev) => [...prev, ...moreMock]);
      return;
    }
    if (!nextPageToken || isFetchingMore) return;
    setIsFetchingMore(true);
    try {
      const result = await getProspeccaoLeadsServerFn({
        data: {
          nicho: nicho || "Advocacia",
          cidade: cidade || "São Paulo - SP",
          onlyNoWebsite,
          apiKey,
          pageToken: nextPageToken,
        },
      });

      if (result && Array.isArray(result.leads)) {
        const newLeads = result.leads.filter(
          (newLead) => !leads.some((existing) => existing.id === newLead.id)
        );
        const updatedLeads = [...leads, ...newLeads];
        const newToken = result.nextPageToken || null;
        setLeads(updatedLeads);
        setNextPageToken(newToken);

        try {
          localStorage.setItem("prospeccao_last_leads", JSON.stringify(updatedLeads));
          if (newToken) {
            localStorage.setItem("prospeccao_last_next_page_token", newToken);
          } else {
            localStorage.removeItem("prospeccao_last_next_page_token");
          }
        } catch (e) {
          console.error("Erro ao atualizar LocalStorage ao carregar mais:", e);
        }
      }
    } catch (err) {
      console.error("Erro ao carregar mais leads:", err);
    } finally {
      setIsFetchingMore(false);
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

  const exportToCSV = (leadsToExport: LeadItem[]) => {
    if (isDemoMode) {
      setShowDemoLockModal(true);
      return;
    }
    if (!leadsToExport.length) return;
    const headers = ["Nome", "Categoria", "Telefone", "Sem Website", "Endereço", "Avaliação", "Avaliações Qtd", "Google Maps URL"];
    const rows = leadsToExport.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      l.has_website ? "Não" : "Sim",
      `"${l.address.replace(/"/g, '""')}"`,
      l.rating,
      l.user_ratings_total,
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

  // AÇÃO EXECUTADA AO CLICAR EM "GERAR PRÉVIA" -> ABRE MODAL DE CONFIGURAÇÃO E UPLOAD DE IMAGENS
  const openDemoPage = (lead: LeadItem) => {
    setCustomHeroPhoto("");
    setCustomGalleryPhotos([]);
    setPreviewModalLead(lead);
  };

  const handleUploadHeroImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCustomHeroPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUploadGalleryImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setCustomGalleryPhotos((prev) => [...prev.slice(-3), reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const generateDemoWithCustomization = (lead: LeadItem, useUploadedPhotos = false) => {
    const updatedLead = {
      ...lead,
      customHeroPhoto: useUploadedPhotos && customHeroPhoto ? customHeroPhoto : undefined,
      customGalleryPhotos: useUploadedPhotos && customGalleryPhotos.length > 0 ? customGalleryPhotos : undefined,
    };

    sessionStorage.setItem("active_demo_lead", JSON.stringify(updatedLead));
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
      mode: "generate",
    });

    if (isDemoMode) {
      params.set("demo", "true");
    }
    if (apiKey) params.set("api_key", apiKey);
    window.open(`/demo?${params.toString()}`, "_blank");
    setPreviewModalLead(null);
  };

  const generateWhatsAppScripts = (lead: LeadItem) => {
    const demoUrl = isDemoMode
      ? `https://www.rdgdigital.com.br/demo-ficticia-bloqueada?id=DEMO-${Math.floor(1000 + Math.random() * 9000)}`
      : `${BASE_URL}/demo?name=${encodeURIComponent(lead.name)}&category=${encodeURIComponent(lead.category)}&phone=${encodeURIComponent(lead.phone)}&mode=view`;

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
          {!isDemoMode && (
            <button
              onClick={() => setIsConfigOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white/80 hover:text-white transition-all"
            >
              <Settings size={14} className={apiKey ? "text-emerald-400" : "text-amber-400"} />
              <span className="hidden sm:inline">{apiKey ? "API Configurada" : "Configurar API Google"}</span>
            </button>
          )}

          {savedLeads.length > 0 && (
            <button
              onClick={() => {
                if (isDemoMode) {
                  setShowDemoLockModal(true);
                  return;
                }
                exportToCSV(activeTab === "salvos" ? savedLeads : leads);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold transition-all"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Exportar CSV ({activeTab === "salvos" ? savedLeads.length : leads.length})</span>
            </button>
          )}
        </div>
      </header>

      {/* Top Banner de Modo Demonstração */}
      {isDemoMode && (
        <div className="bg-gradient-to-r from-amber-500/20 via-sky-500/20 to-purple-500/20 border-b border-white/10 px-4 py-2.5 text-center flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto text-xs text-white font-bold">
            <span className="px-2.5 py-0.5 bg-amber-500 text-black text-[10px] font-extrabold uppercase rounded-full shrink-0 shadow">
              🧪 MODO DEMONSTRAÇÃO ATIVO
            </span>
            <span className="hidden sm:inline">Você está testando a pré-visualização do Software B2B. Faça buscas e gere prévias ao vivo!</span>
          </div>
          <a
            href="/prospeccao-b2b#planos"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#38BDF8] text-black font-extrabold text-[11px] rounded-xl hover:brightness-110 transition-all shrink-0 shadow-lg shadow-[#38BDF8]/20"
          >
            <span>Garantir Licença (R$ 67/mês)</span>
            <ArrowRight size={12} />
          </a>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Banner de Erro do Google Cloud */}
        {!isDemoMode && sourceInfo?.source === "google_error" && (
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
        <div className="bg-[#0F1117] border border-white/10 rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl">
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
                  className="w-full bg-[#0A0B10] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 outline-none transition-colors"
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
                  className="w-full bg-[#0A0B10] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="sm:col-span-3 flex items-end">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-5 sm:mt-0 py-3 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-[0.98] disabled:opacity-50 border border-[#38BDF8]/40"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin text-black" /> : <Search size={18} />}
                <span>Buscar Leads</span>
              </button>
            </div>
          </form>

          {/* Preset Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider mr-1">Atalhos Rápidos:</span>
            {["Imobiliária", "Barbearia", "Odontologia", "Estética", "Advocacia", "Restaurante", "Pet Shop"].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setNicho(preset);
                  handleSearch(preset, cidade || "São Paulo - SP");
                }}
                className="px-3 py-1 bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 rounded-lg text-xs font-semibold transition-all"
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-white/5">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyNoWebsite}
                  onChange={(e) => {
                    setOnlyNoWebsite(e.target.checked);
                    if (hasSearched) handleSearch(nicho, cidade);
                  }}
                  className="rounded border-white/20 text-[#38BDF8] focus:ring-[#38BDF8] bg-[#0A0B10] w-4 h-4"
                />
                <span className="font-medium text-white/80">Priorizar Empresas Sem Website</span>
              </label>
            </div>

            <div className="flex bg-[#0A0B10] p-1 rounded-xl border border-[#38BDF8]/25 overflow-x-auto max-w-full whitespace-nowrap">
              <button
                onClick={() => setActiveTab("prospectar")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                  activeTab === "prospectar"
                    ? "bg-[#38BDF8] text-black font-extrabold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Search size={14} />
                <span>Prospectar ({leads.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("salvos")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                  activeTab === "salvos"
                    ? "bg-[#38BDF8] text-black font-extrabold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Bookmark size={14} />
                <span>Meus Leads Salvos ({savedLeads.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("kanban")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                  activeTab === "kanban"
                    ? "bg-[#38BDF8] text-black font-extrabold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Kanban size={14} />
                <span>Painel Kanban CRM</span>
              </button>
              <button
                onClick={() => setActiveTab("previas")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                  activeTab === "previas"
                    ? "bg-[#38BDF8] text-black font-extrabold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Sparkles size={14} />
                <span>Prévias Salvas ({savedPreviewsList.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: PROSPECTAR LEADS */}
        {activeTab === "prospectar" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                <span>Empresas Encontradas</span>
                <span className="text-xs font-normal text-white/50">({leads.length} resultados)</span>
              </h3>
            </div>

            {isLoading ? (
              <div className="py-16 text-center space-y-3 bg-[#111218] rounded-3xl border border-[#38BDF8]/25">
                <Loader2 size={36} className="animate-spin text-[#38BDF8] mx-auto" />
                <p className="text-sm font-bold text-white">Buscando empresas no Google Maps...</p>
                <p className="text-xs text-white/40">Filtrando telefones e perfis sociais do local (dados de texto gratuitos)</p>
              </div>
            ) : leads.length === 0 ? (
              <div className="py-16 text-center space-y-4 bg-[#111218] rounded-3xl border border-[#38BDF8]/25 p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 flex items-center justify-center mx-auto">
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
              <div className="space-y-4">
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

                {nextPageToken ? (
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={isFetchingMore}
                      className="px-6 py-3 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center gap-2 disabled:opacity-50 border border-[#38BDF8]/40"
                    >
                      {isFetchingMore ? (
                        <Loader2 size={16} className="animate-spin text-black" />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                      <span>{isFetchingMore ? "Buscando Mais Empresas no Google..." : "Carregar Mais Leads (Google Maps)"}</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 flex justify-center">
                    <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/50 text-xs font-medium flex items-center gap-2">
                      <Check size={14} className="text-emerald-400" />
                      <span>Todas as empresas do Google Maps para esta região já foram carregadas ({leads.length} resultados)</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MEUS LEADS SALVOS */}
        {activeTab === "salvos" && (
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

        {/* TAB 3: MINHAS PRÉVIAS SALVAS */}
        {activeTab === "previas" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                <span>Minhas Prévias Salvas</span>
                <span className="text-xs font-normal text-white/50">({savedPreviewsList.length} sites salvos)</span>
              </h3>
            </div>

            {savedPreviewsList.length === 0 ? (
              <div className="py-16 text-center space-y-4 bg-[#111218] rounded-3xl border border-white/10 p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center mx-auto">
                  <Sparkles size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">Nenhuma prévia salva ainda</h4>
                  <p className="text-xs text-white/60">
                    Ao abrir a prévia de um site, clique no botão <strong>"💾 Salvar Prévia"</strong> no topo da tela para guardar a demonstração aqui no seu histórico!
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedPreviewsList.map((prev: any, idx: number) => {
                  if (!prev) return null;
                  
                  const rawParams: any = prev.urlParams || {
                    nome: prev.name,
                    categoria: prev.category,
                    phone: prev.phone,
                    address: prev.address,
                    cidade: prev.city || "São Paulo - SP",
                  };
                  
                  const cleanParams: Record<string, string> = {};
                  Object.entries(rawParams).forEach(([k, v]) => {
                    if (v !== undefined && v !== null) {
                      cleanParams[k] = String(v);
                    }
                  });
                  
                  const params = new URLSearchParams(cleanParams);
                  if (apiKey) params.set("api_key", apiKey);

                  const isDateValid = prev.savedAt && !isNaN(new Date(prev.savedAt).getTime());
                  const dateStr = isDateValid ? new Date(prev.savedAt).toLocaleDateString("pt-BR") : "Recente";

                  return (
                    <div key={prev.id || idx} className="bg-[#111218] border border-white/10 rounded-2xl p-5 space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between shadow-xl">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 bg-primary/20 text-primary font-bold text-[10px] rounded-full border border-primary/30 uppercase tracking-wider">
                            {prev.category || "Empresa"}
                          </span>
                          <span className="text-[10px] font-mono text-white/40">
                            {dateStr}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-white truncate">{prev.name || "Sem Nome"}</h4>
                        <p className="text-xs text-white/60 truncate">📍 {prev.address || prev.city || "Não informado"}</p>
                        <p className="text-xs text-white/60">📞 {prev.phone || "Não informado"}</p>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
                        <button
                          onClick={() => window.open(`/demo?${params.toString()}`, "_blank")}
                          className="flex-1 py-2 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow"
                        >
                          <Eye size={14} />
                          <span>Abrir Prévia</span>
                        </button>
                        <button
                          onClick={() => handleDeleteSavedPreview(prev.id || prev.name)}
                          className="p-2 bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/30 rounded-xl text-xs transition-all"
                          title="Excluir Prévia"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: PAINEL KANBAN CRM PIPELINE */}
        {activeTab === "kanban" && (
          <div className="space-y-6">
            {/* Header com Métricas de Vendas do Pipeline */}
            <div className="bg-[#0F1117] border border-[#38BDF8]/20 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Kanban size={20} className="text-[#38BDF8]" />
                  <h3 className="text-xl font-black text-white tracking-tight">Painel Kanban CRM de Vendas B2B</h3>
                </div>
                <p className="text-xs text-white/60">
                  Gerencie seus leads por etapas de prospecção, desde a busca até o fechamento de contrato.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-[#0A0B10] border border-white/10 px-4 py-2 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Total em Pipeline</span>
                  <span className="text-sm font-bold text-white">{savedLeads.length} empresas</span>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block">Clientes Fechados</span>
                  <span className="text-sm font-extrabold text-emerald-400">
                    {savedLeads.filter(l => (l.status || "novo") === "fechado").length} (R$ {savedLeads.filter(l => (l.status || "novo") === "fechado").length * 750}/mês)
                  </span>
                </div>
              </div>
            </div>

            {/* Colunas do Kanban CRM */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 overflow-x-auto pb-4">
              {KANBAN_COLUMNS.map((column) => {
                const columnLeads = savedLeads.filter((l) => (l.status || "novo") === column.id);

                return (
                  <div key={column.id} className={`bg-[#0F1117] border ${column.headerBorder} rounded-2xl p-3.5 space-y-3 min-w-[220px] flex flex-col justify-between shadow-lg`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <span className={`text-[11px] font-black uppercase tracking-wider ${column.badgeColor.split(' ')[1]}`}>
                          {column.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold bg-white/10 px-2 py-0.5 rounded-full text-white">
                          {columnLeads.length}
                        </span>
                      </div>

                      {columnLeads.length === 0 ? (
                        <div className="py-8 text-center border border-dashed border-white/10 rounded-xl">
                          <p className="text-[10px] text-white/30 italic">Nenhum lead aqui</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {columnLeads.map((lead) => (
                            <div key={lead.id} className="bg-[#161924] border border-white/10 p-3 rounded-xl space-y-2.5 shadow-md hover:border-white/20 transition-all">
                              <div className="flex items-start justify-between gap-1">
                                <h5 className="text-xs font-bold text-white truncate leading-snug">{lead.name}</h5>
                                <button
                                  onClick={() => toggleSaveLead(lead)}
                                  className="text-white/40 hover:text-rose-400 transition-colors p-0.5"
                                  title="Remover do Kanban"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>

                              <p className="text-[10px] text-white/50 truncate">📍 {lead.address || "Localização"}</p>
                              <p className="text-[10px] text-white/50 truncate">📞 {lead.phone || "Sem telefone"}</p>

                              {/* Mudar Etapa Dropdown Selector */}
                              <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1">
                                <select
                                  value={lead.status || "novo"}
                                  onChange={(e) => {
                                    const newStage = e.target.value as LeadStatus;
                                    const updated = savedLeads.map((l) => (l.id === lead.id ? { ...l, status: newStage } : l));
                                    setSavedLeads(updated);
                                    localStorage.setItem("saved_prospect_leads", JSON.stringify(updated));
                                  }}
                                  className="w-full bg-[#0B0D14] border border-white/15 rounded-lg px-2 py-1 text-[10px] font-bold text-white/80 focus:border-[#38BDF8] outline-none"
                                >
                                  <option value="novo">📥 Mover: Novo Lead</option>
                                  <option value="em_contato">💬 Mover: Em Contato</option>
                                  <option value="followup">⏳ Mover: Follow-Up</option>
                                  <option value="proposta">🎯 Mover: Proposta</option>
                                  <option value="fechado">✅ Mover: Fechado</option>
                                  <option value="inativo">❌ Mover: Sem Interesse</option>
                                </select>
                              </div>

                              <div className="flex items-center gap-1.5 pt-1">
                                <button
                                  onClick={() => openDemoPage(lead)}
                                  className="flex-1 py-1.5 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-extrabold text-[10px] rounded-lg transition-all flex items-center justify-center gap-1 shadow"
                                >
                                  <Eye size={12} />
                                  <span>Prévia</span>
                                </button>
                                <button
                                  onClick={() => setScriptLead(lead)}
                                  className="flex-1 py-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/30 font-bold text-[10px] rounded-lg transition-all flex items-center justify-center gap-1"
                                >
                                  <MessageCircle size={12} />
                                  <span>Whats</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
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

      {/* MODAL DE PERSONALIZAÇÃO E UPLOAD DE FOTOS DA PRÉVIA */}
      {previewModalLead && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-xl w-full space-y-6 relative shadow-2xl my-auto">
            <button onClick={() => setPreviewModalLead(null)} className="absolute top-5 right-5 text-white/40 hover:text-white p-1">
              <X size={20} />
            </button>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 bg-primary/20 text-primary font-bold text-[10px] rounded-full border border-primary/30 uppercase tracking-wider">
                PERSONALIZAR PRÉVIA DO SITE
              </span>
              <h3 className="text-xl font-black text-white">{previewModalLead.name}</h3>
              <p className="text-xs text-white/60">
                Categoria: <strong className="text-white">{formatCategoryLabel(previewModalLead.category)}</strong> · Cidade: <strong className="text-white">{cidade || "São Paulo - SP"}</strong>
              </p>
            </div>

            {/* Dica amigável */}
            <div className="bg-blue-500/10 border border-blue-500/20 p-3.5 rounded-2xl flex items-start gap-3">
              <Info size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-200/90 leading-relaxed">
                <strong>Opcional:</strong> Você pode baixar as fotos reais da empresa no Instagram ou Google Maps e fazer upload abaixo. Se preferir não enviar nada, basta clicar em <strong>"Gerar Prévia Instantânea"</strong> para usar nossas fotos HD de alta conversão!
              </p>
            </div>

            {/* Áreas de Upload */}
            <div className="space-y-4">
              {/* Foto de Capa (Hero) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/80 flex items-center gap-1.5">
                  <ImageIcon size={14} className="text-primary" />
                  <span>Foto da Capa do Site (Topo / Hero)</span>
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 bg-[#0A0A0A] border border-dashed border-white/20 hover:border-primary/50 p-3.5 rounded-xl cursor-pointer text-center text-xs text-white/70 hover:text-white transition-all flex items-center justify-center gap-2">
                    <Download size={14} />
                    <span>{customHeroPhoto ? "✅ Foto de Capa Selecionada (Clique para alterar)" : "Clique ou arraste a Foto Principal do Topo"}</span>
                    <input type="file" accept="image/*" onChange={handleUploadHeroImage} className="hidden" />
                  </label>
                  {customHeroPhoto && (
                    <button
                      onClick={() => setCustomHeroPhoto("")}
                      className="px-2.5 py-2.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-xl text-xs hover:bg-rose-500/30"
                      title="Remover foto"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Fotos da Galeria */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/80 flex items-center gap-1.5 justify-between">
                  <span className="flex items-center gap-1.5">
                    <ImageIcon size={14} className="text-emerald-400" />
                    <span>Galeria de Trabalhos / Fotos do Espaço</span>
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">({customGalleryPhotos.length}/4 enviadas)</span>
                </label>
                <label className="bg-[#0A0A0A] border border-dashed border-white/20 hover:border-emerald-500/50 p-3.5 rounded-xl cursor-pointer text-center text-xs text-white/70 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Download size={14} />
                  <span>Selecione até 4 fotos reais da empresa</span>
                  <input type="file" accept="image/*" multiple onChange={handleUploadGalleryImage} className="hidden" />
                </label>
                {customGalleryPhotos.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {customGalleryPhotos.map((img, i) => (
                      <div key={i} className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/20">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button
                          onClick={() => setCustomGalleryPhotos((prev) => prev.filter((_, idx) => idx !== i))}
                          className="absolute top-0.5 right-0.5 bg-black/80 text-white p-0.5 rounded-full"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Botoes de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={() => generateDemoWithCustomization(previewModalLead, false)}
                className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all"
              >
                🎨 Gerar com Fotos HD por Nicho
              </button>
              <button
                onClick={() => generateDemoWithCustomization(previewModalLead, true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-1.5"
              >
                <Zap size={14} />
                <span>Gerar Prévia com Minhas Fotos</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CONFIGURAÇÃO CHAVE DE API GOOGLE E TUTORIAL */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 max-w-2xl w-full space-y-6 relative shadow-2xl my-auto">
            <button onClick={() => setIsConfigOpen(false)} className="absolute top-5 right-5 text-white/40 hover:text-white p-1">
              <X size={20} />
            </button>

            <div className="space-y-2">
              <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 font-bold text-[10px] rounded-full border border-emerald-500/30 uppercase tracking-wider">
                CONFIGURAÇÃO GOOGLE CLOUD
              </span>
              <h3 className="text-xl font-black text-white">Como Pegar Sua Chave Grátis da Google Places API</h3>
            </div>

            {/* Banner do Modo Sem Chave */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-2xl flex items-start gap-3">
              <Sparkles size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200/90 leading-relaxed">
                <strong>💡 Não tem chave do Google?</strong> Não tem problema! O software funciona perfeitamente no <strong>Modo Demonstração Sem Chave</strong> para você treinar e prospectar imediatamente sem precisar configurar nada.
              </p>
            </div>

            {/* Passo a Passo Interativo */}
            <div className="space-y-3 bg-[#0A0A0A] p-4 rounded-2xl border border-white/10">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider text-primary">Passo a Passo para Resultados Ao Vivo:</h4>
              
              <div className="space-y-2.5 text-xs text-white/80">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                  <p>
                    Acesse o site oficial do <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-bold">Google Cloud Console</a> e faça login com a sua conta Google.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                  <p>
                    No menu superior, clique em <strong>Selecionar Projeto -&gt; Novo Projeto</strong> (ex: <code>Minha Prospecção B2B</code>) e clique em <strong>Criar</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                  <p>
                    <strong className="text-amber-300">Ativar Faturamento (Obrigatório do Google):</strong> No menu lateral, acesse <strong>Faturamento (Billing)</strong> e vincule uma conta/cartão. <em>O Google exige este cadastro para validar a chave e liberar o limite gratuito mensal (nada será cobrado enquanto estiver no limite grátis).</em>
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">4</span>
                  <p>
                    No menu lateral <strong>APIs e Serviços -&gt; Biblioteca</strong>, pesquise por <strong>Places API</strong> (ou <code>Places API New</code>) e clique no botão verde <strong>Ativar</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">5</span>
                  <p>
                    Vá em <strong>Credenciais -&gt; Criar Credenciais -&gt; Chave de API</strong>. O Google exibirá sua chave gerada (começando com <code>AIzaSy...</code>).
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">6</span>
                  <p>
                    Copie a chave, cole no campo abaixo e clique em <strong>Salvar Minha Chave</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Input da Chave */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/80 uppercase">Cole Sua Chave de API Google (Places API)</label>
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
                Fechar
              </button>
              <button onClick={() => handleSaveApiKey(apiKey)} className="px-6 py-2.5 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Salvar Minha Chave
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE BLOQUEIO DE RECURSO NO MODO DEMONSTRAÇÃO */}
      {showDemoLockModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#111218] border border-[#38BDF8]/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 relative shadow-2xl">
            <button
              onClick={() => setShowDemoLockModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 flex items-center justify-center mx-auto">
              <Lock size={28} />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full border border-[#38BDF8]/20">
                RECURSO EXCLUSIVO PARA LICENCIADOS
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-1">
                Disparos de Mensagens & CSV Ilimitado
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Você está no <strong>Modo Demonstração Gratuito</strong>. Adquira sua licença oficial por apenas R$ 67/mês para realizar disparos reais no WhatsApp, buscas ao vivo no Google Maps e exportação em CSV!
              </p>
            </div>

            <a
              href="/prospeccao-b2b#planos"
              className="w-full py-3.5 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Garantir Licença (R$ 67/mês)</span>
              <ArrowRight size={14} />
            </a>
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
  const cleanName = lead.name.split('-')[0].split('|')[0].trim();
  const instaSearchUrl = lead.instagram_url || `https://www.google.com/search?q=site:instagram.com+${encodeURIComponent(cleanName)}`;

  return (
    <div className="bg-[#0F1117] border border-white/10 rounded-2xl p-5 space-y-4 hover:border-white/25 transition-all flex flex-col justify-between shadow-lg">
      <div className="space-y-3">
        {/* Titulo e Avaliação */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="px-2.5 py-1 bg-white/5 text-white/60 text-[10px] font-medium rounded-md border border-white/10 uppercase tracking-wider mb-1.5 inline-block font-mono">
              {formatCategoryLabel(lead.category)}
            </span>
            <h3 className="font-bold text-base text-white hover:text-blue-400 transition-colors">
              <a href={lead.google_maps_url} target="_blank" rel="noopener noreferrer">
                {lead.name}
              </a>
            </h3>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20 shrink-0">
            <Star size={13} fill="currentColor" />
            <span>{lead.rating || "4.8"}</span>
            <span className="text-[10px] text-white/40">({lead.user_ratings_total || 12})</span>
          </div>
        </div>

        {/* Endereço e Telefone */}
        <div className="space-y-1.5 text-xs text-white/70">
          <p className="flex items-start gap-2">
            <MapPin size={14} className="text-white/40 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{lead.address}</span>
          </p>
          <p className="font-mono text-white/90 flex items-center gap-2">
            <Phone size={14} className="text-emerald-400 shrink-0" />
            <span>{lead.phone}</span>
          </p>
        </div>

          {/* Tag de Oportunidade */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {!lead.has_website ? (
              <span className="px-2.5 py-1 bg-amber-500/10 text-amber-300 text-[10px] font-semibold rounded-md border border-amber-500/20 flex items-center gap-1.5">
                <Flame size={12} className="text-amber-400" />
                <span>Sem Website Registrado</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 text-[10px] font-semibold rounded-md border border-emerald-500/20 flex items-center gap-1.5">
                <Globe size={12} />
                <span>Possui Website</span>
              </span>
            )}
          </div>
      </div>

      {/* Botões de Ação Completa */}
      <div className="pt-3.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {/* Salvar Lead */}
          <button
            onClick={onToggleSave}
            className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-white/70 hover:text-white border border-white/10 transition-all"
            title={isSaved ? "Remover dos Salvos" : "Salvar Lead"}
          >
            {isSaved ? <BookmarkCheck size={16} className="text-amber-400" /> : <Bookmark size={16} />}
          </button>

          {/* Instagram Link */}
          <a
            href={instaSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 rounded-xl transition-all"
            title="Buscar no Instagram"
          >
            <Instagram size={16} />
          </a>

          {/* Google Maps Link */}
          <a
            href={lead.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 rounded-xl transition-all"
            title="Abrir no Google Maps"
          >
            <MapPin size={16} />
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Gerar Prévia */}
          <button
            onClick={onOpenDemoPage}
            className="px-4 py-2 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-extrabold text-xs rounded-xl transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center gap-1.5 active:scale-95 border border-[#38BDF8]/50"
          >
            <Eye size={14} />
            <span>Gerar Prévia</span>
          </button>

          {/* Botão de WhatsApp */}
          <button
            onClick={onOpenScriptModal}
            className="px-4 py-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/35 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
