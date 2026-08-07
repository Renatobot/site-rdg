import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Phone,
  MapPin,
  Star,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
  Scissors,
  Building2,
  Stethoscope,
  Sparkle,
  Scale,
  Utensils,
  Play,
  Dog,
  Palette,
  Dumbbell,
  Wrench,
  ShoppingBag,
  HeartPulse,
  Briefcase,
  Edit3,
  Sliders,
  X,
  Image,
  FileText,
  Check,
  RotateCcw,
  Upload,
  Plus,
  Trash2,
  LayoutTemplate,
  Grid3x3,
  Type,
  Square,
  Bookmark,
  Share2,
  Download,
  Copy,
  Sun,
  Moon,
  Lock
} from "lucide-react";
import { RichTextToolbar } from "@/components/RichTextToolbar";

const TITLE = "Demonstração de Website — RDG Digital";
const DESCRIPTION = "Página de demonstração de site de alta conversão para empresas locais.";
const CANONICAL_URL = `${BASE_URL}/demo`;

export interface DemoSearchParams {
  place_id?: string;
  nome?: string;
  cliente?: string;
  categoria?: string;
  cidade?: string;
  endereco?: string;
  phone?: string;
  telefone?: string;
  raw_phone?: string;
  rating?: string;
  reviews?: string;
  photos?: string;
  reviews_json?: string;
  hours_json?: string;
  summary?: string;
  mode?: string;
}

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const Route = createFileRoute("/demo")({
  validateSearch: (search: Record<string, unknown>): DemoSearchParams => {
    const rawNome = typeof search.nome === "string" && search.nome ? search.nome : typeof search.name === "string" && search.name ? search.name : typeof search.cliente === "string" && search.cliente ? search.cliente : "";
    const rawCategoria = typeof search.categoria === "string" && search.categoria ? search.categoria : typeof search.category === "string" && search.category ? search.category : "";
    const rawEndereco = typeof search.endereco === "string" && search.endereco ? search.endereco : typeof search.address === "string" && search.address ? search.address : "";
    const rawPhone = typeof search.phone === "string" && search.phone ? search.phone : typeof search.telefone === "string" && search.telefone ? search.telefone : "";

    return {
      place_id: typeof search.place_id === "string" ? search.place_id : "",
      nome: rawNome || "Empresa de Destaque",
      categoria: rawCategoria || "Serviços",
      cidade: typeof search.cidade === "string" && search.cidade ? search.cidade : "São Paulo - SP",
      endereco: rawEndereco || "Endereço Principal",
      phone: rawPhone || "+55 11 98888-7777",
      raw_phone: typeof search.raw_phone === "string" ? search.raw_phone : "",
      rating: typeof search.rating === "string" ? search.rating : "5.0",
      reviews: typeof search.reviews === "string" ? search.reviews : "340",
      photos: typeof search.photos === "string" ? search.photos : "",
      reviews_json: typeof search.reviews_json === "string" ? search.reviews_json : "",
      hours_json: typeof search.hours_json === "string" ? search.hours_json : "",
      summary: typeof search.summary === "string" ? search.summary : "",
      mode: typeof search.mode === "string" ? search.mode : undefined,
    };
  },
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: FullSiteDemoPage,
});

import { NICHE_CONFIGS, NicheConfig } from "../config/niches";

function AnimatedSection({ children, animation, className, id, style }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animation || animation === "none") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animation]);

  if (!animation || animation === "none") {
    return <section id={id} className={className} style={style}>{children}</section>;
  }

  let animClass = "transition-all duration-1000 ease-out";
  if (animation === "fade") animClass += isVisible ? " opacity-100" : " opacity-0";
  if (animation === "slide") animClass += isVisible ? " opacity-100 translate-y-0" : " opacity-0 translate-y-16";
  if (animation === "zoom") animClass += isVisible ? " opacity-100 scale-100" : " opacity-0 scale-95";

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className} ${animClass}`}
      style={style}
    >
      {children}
    </section>
  );
}

function FullSiteDemoPage() {
  const search = Route.useSearch();
  const [storedLead, setStoredLead] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string>((search as any).color || "gold");
  const [isSavedLocally, setIsSavedLocally] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("demo") === "true" || params.get("mode") === "demo") return true;
    }
    return (search as any)?.demo === "true" || (search as any)?.mode === "demo";
  });

  const [showDemoShareLock, setShowDemoShareLock] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("demo") === "true" || params.get("mode") === "demo") {
        setIsDemoMode(true);
      }
    }
  }, [search]);

  // NEW SITE BUILDER ADVANCED STATES
  const [typography, setTypography] = useState<"modern" | "serif" | "mono">((search as any).font || "modern");
  const [buttonStyle, setButtonStyle] = useState<"rounded" | "square" | "outline" | "neon">((search as any).btn || "rounded");
  const [themeMode, setThemeMode] = useState<"dark" | "light" | "glass">((search as any).theme || "dark");
  const [socialLinks, setSocialLinks] = useState({ instagram: "", tiktok: "", facebook: "" });
  const [visibleSections, setVisibleSections] = useState({ 
    hero: true, servicos: true, galeria: true, depoimentos: true, cardapio: false 
  });
  const [customBlocks, setCustomBlocks] = useState<any[]>([]);
  const [logoImage, setLogoImage] = useState<string>("");
  const [animationStyle, setAnimationStyle] = useState<"none" | "fade" | "slide" | "zoom">("fade");

  // Painel de Edição ao Vivo (Customizer Drawer)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [activeEditorTab, setActiveEditorTab] = useState<"textos" | "imagens" | "servicos" | "cores" | "layout" | "design" | "cardapio">("textos");

  // Global Edit Mode (WYSIWYG)
  const [isGlobalEditMode, setIsGlobalEditMode] = useState<boolean>(false);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("editModeChanged", { detail: isGlobalEditMode }));
  }, [isGlobalEditMode]);

  // Custom Editable Override States
  const [editNome, setEditNome] = useState<string>("");
  const [editHeroTitleHtml, setEditHeroTitleHtml] = useState<string>("");
  const [editSummaryHtml, setEditSummaryHtml] = useState<string>("");
  const [editHeroTaglineHtml, setEditHeroTaglineHtml] = useState<string>("");
  const [editCategoria, setEditCategoria] = useState<string>("");
  const [editCidade, setEditCidade] = useState<string>("");
  const [editEndereco, setEditEndereco] = useState<string>("");
  const [editPhone, setEditPhone] = useState<string>("");
  const [editRating, setEditRating] = useState<string>("");
  const [editReviews, setEditReviews] = useState<string>("");
  const [editSummary, setEditSummary] = useState<string>("");
  const [editTagline, setEditTagline] = useState<string>("");
  const [editHeroImage, setEditHeroImage] = useState<string>("");
  const [editGalleryImages, setEditGalleryImages] = useState<string[]>([]);
  const [editServices, setEditServices] = useState<{ title: string; desc: string; price: string }[] | null>(null);
  const [editWaMsg, setEditWaMsg] = useState<string>("");
  const [editBtnHeroText, setEditBtnHeroText] = useState<string>("");
  const [editBtnHeaderText, setEditBtnHeaderText] = useState<string>("");
  const [editBtnServiceText, setEditBtnServiceText] = useState<string>("");
  const [editBtnFooterText, setEditBtnFooterText] = useState<string>("");

  // Apenas exibe a tela de carregamento/geração se for a primeira geração (mode === 'generate' ou 'preview' ou generate=true)
  // Para o cliente final (mode === 'view' ou link do WhatsApp/compartilhado), NÃO exibe a tela de carregamento!
  const shouldShowLoadingScreen = search.mode === "generate" || search.mode === "preview" || (search as any).generate === "true" || (search as any).isGenerating === "true";
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(shouldShowLoadingScreen);
  const [aiStepMessage, setAiStepMessage] = useState<string>("🧠 Analisando o nicho e dados do negócio...");
  const [aiProgressPercent, setAiProgressPercent] = useState<number>(15);
  const [customColorHex, setCustomColorHex] = useState<string>((search as any).custom_color || "");

  const defaultNome = storedLead?.name || search.nome || search.cliente || "Empresa de Destaque";
  const defaultRawCategoria = storedLead?.category || search.categoria || "Empresa";
  const defaultCidade = search.cidade || "São Paulo - SP";
  const defaultEndereco = storedLead?.address || search.endereco || `Rua Principal, 1500 - ${defaultCidade}`;
  const defaultPhone = storedLead?.phone || search.phone || search.telefone || "+55 11 98888-7777";
  const defaultRating = storedLead?.rating || search.rating || "5.0";
  const defaultReviews = storedLead?.user_ratings_total || search.reviews || "340";

  const nome = editNome || defaultNome;
  const rawCategoria = editCategoria || defaultRawCategoria;
  const cidade = editCidade || defaultCidade;
  const endereco = editEndereco || defaultEndereco;
  const phone = editPhone || defaultPhone;
  const rawPhone = phone.replace(/\D/g, "");
  const waNum = rawPhone.length > 5 ? (rawPhone.startsWith("55") ? rawPhone : `55${rawPhone}`) : "5511988887777";
  const rating = editRating || defaultRating;
  const reviews = editReviews || defaultReviews;

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("active_demo_lead");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed) {
            setStoredLead(parsed);
          }
        }
      } catch (e) {
        console.error("Erro ao carregar lead do sessionStorage:", e);
      }
    }
  }, []);

  // Efeito de Carregamento Interativo com IA Gratuita
  useEffect(() => {
    if (!shouldShowLoadingScreen) {
      setIsGeneratingAi(false);
      return;
    }

    let isMounted = true;
    let timer1: any, timer2: any, timer3: any, timer4: any;

    const runAiGeneration = async () => {
      setAiProgressPercent(25);
      setAiStepMessage("Analisando segmento comercial & paleta de cores...");

      timer1 = setTimeout(() => {
        if (!isMounted) return;
        setAiProgressPercent(55);
        setAiStepMessage("Estruturando banner principal e serviços em alta definição...");
      }, 1200);

      timer2 = setTimeout(() => {
        if (!isMounted) return;
        setAiProgressPercent(85);
        setAiStepMessage("Carregando acervo de fotos HD do setor...");
      }, 2400);

      timer3 = setTimeout(() => {
        if (!isMounted) return;
        setAiProgressPercent(100);
        setAiStepMessage("Finalizando personalização e botão de atendimento...");
      }, 3600);

      // Consulta a IA Gratuita da Pollinations.ai em background sem travar
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s max

        const promptText = `Escreva um resumo comercial curto de 2 frases em português para a empresa "${defaultNome}" do segmento de "${defaultRawCategoria}" na cidade de "${defaultCidade}".`;
        
        const res = await fetch(`https://text.pollinations.ai/${encodeURIComponent(promptText)}`, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const text = await res.text();
          if (text && text.length > 20 && isMounted) {
            setEditSummary(text.trim());
          }
        }
      } catch (e) {
        console.log("IA Pollinations fallback ativado (usando dados de nicho pré-configurados)");
      }

      timer4 = setTimeout(() => {
        if (!isMounted) return;
        setIsGeneratingAi(false);
      }, 4800);
    };

    runAiGeneration();

    return () => {
      isMounted = false;
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleRegenerateWithAi = async () => {
    setIsGeneratingAi(true);
    setAiProgressPercent(20);
    setAiStepMessage("✨ Conectando com IA Gratuita (Pollinations)...");

    setTimeout(() => {
      setAiProgressPercent(50);
      setAiStepMessage("✍️ Gerando novas frases e apresentações com IA...");
    }, 1000);

    setTimeout(() => {
      setAiProgressPercent(80);
      setAiStepMessage("🎨 Gerando novas fotos exclusivas em HD com IA...");
    }, 2200);

        try {
      // 🔑 PIXABAY API - Banco de Imagens Oficial
      const pixabayKey = "56751364-1ce5ed59a7a46bca79fc7e359";
      
      let searchQuery = displayCategory;
      if (catKey === "acai") searchQuery = "acai bowl berry";
      else if (catKey === "hamburgueria") searchQuery = "burger hamburger";
      else if (catKey === "pizzaria") searchQuery = "pizza slice";
      else if (catKey === "pastelaria") searchQuery = "empanada pastry snack";
      else if (catKey === "odontologia") searchQuery = "dentist smile teeth";
      else if (catKey === "advocacia") searchQuery = "lawyer justice suit";
      else if (catKey === "barbearia") searchQuery = "barbershop beard";
      else if (catKey === "petshop") searchQuery = "dog cat pet";
      else if (catKey === "estetica") searchQuery = "spa beauty facial";
      else if (catKey === "saude") searchQuery = "doctor clinic";
      else if (catKey === "oficina") searchQuery = "car mechanic garage";
      
      const res = await fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&per_page=15`);
      
      if (res.ok) {
        const data = await res.json();
        if (data.hits && data.hits.length >= 5) {
          // Embaralhar resultados para não ficar sempre igual
          const hits = [...data.hits].sort(() => 0.5 - Math.random());
          setEditHeroImage(hits[0].largeImageURL);
          setEditGalleryImages([
            hits[1].largeImageURL,
            hits[2].largeImageURL,
            hits[3].largeImageURL,
            hits[4].largeImageURL
          ]);
        } else {
          // Fallback nativo
          console.log("Poucas imagens no Pixabay para", searchQuery);
        }
      }
    } catch (e) {
      console.log("Erro no Pixabay:", e);
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const promptText = `Crie uma frase de destaque (tagline) curta e marcante de 1 linha para o site da empresa "${nome}" do segmento "${rawCategoria}".`;
      const res = await fetch(`https://text.pollinations.ai/${encodeURIComponent(promptText)}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const text = await res.text();
        if (text && text.length > 5) {
          setEditTagline(text.replace(/["']/g, "").trim());
        }
      }
    } catch (e) {
      console.log("IA fallback ativado");
    }

    setTimeout(() => {
      setAiProgressPercent(100);
      setIsGeneratingAi(false);
    }, 3500);
  };
  const googleMapsUrl = storedLead?.google_maps_url || `https://www.google.com/maps/search/${encodeURIComponent(nome + " " + cidade)}`;
  const activeApiKey = (search as any).api_key || (typeof window !== "undefined" ? localStorage.getItem("google_places_api_key") : "") || "";

  let rawPhotoRefs: string[] = storedLead?.photos || [];
  if (rawPhotoRefs.length === 0 && search.photos) {
    try {
      const parsed = JSON.parse(search.photos);
      if (Array.isArray(parsed) && parsed.length > 0) {
        rawPhotoRefs = parsed;
      }
    } catch (e) {}
  }

  let realGooglePhotos: string[] = [];
  if (rawPhotoRefs.length > 0) {
    realGooglePhotos = rawPhotoRefs.map((p) => {
      if (!p || p.includes("1590301157890-4810ed352733")) return "";
      if (p.startsWith("http://") || p.startsWith("https://")) return p;
      if (activeApiKey) {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${p}&key=${activeApiKey}`;
      }
      return "";
    }).filter(Boolean);
  }

  // RECONHECIMENTO ULTRA-EXATO E COMPLETO DE NICHO COMBINANDO NOME E CATEGORIA
  const fullSearchStr = `${rawCategoria} ${nome} ${search.categoria || ""} ${search.nome || ""}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let catKey = "default";
  if (
    fullSearchStr.includes("acai") ||
    fullSearchStr.includes("açai") ||
    fullSearchStr.includes("sorvet") ||
    fullSearchStr.includes("gelato") ||
    fullSearchStr.includes("paleta") ||
    fullSearchStr.includes("frozen")
  ) {
    catKey = "acai";
  } else if (
    fullSearchStr.includes("chaveir") ||
    fullSearchStr.includes("chave") ||
    fullSearchStr.includes("fechadur")
  ) {
    catKey = "chaveiro";
  } else if (
    fullSearchStr.includes("hamburg") ||
    fullSearchStr.includes("burguer") ||
    fullSearchStr.includes("burger") ||
    fullSearchStr.includes("smash")
  ) {
    catKey = "hamburgueria";
  } else if (
    fullSearchStr.includes("pizz") ||
    fullSearchStr.includes("pizzaria") ||
    fullSearchStr.includes("calzone")
  ) {
    catKey = "pizzaria";
  } else if (
    fullSearchStr.includes("pastel") ||
    fullSearchStr.includes("salgado") ||
    fullSearchStr.includes("caldo de cana")
  ) {
    catKey = "pastelaria";
  } else if (
    fullSearchStr.includes("yakissoba") ||
    fullSearchStr.includes("yakisoba") ||
    fullSearchStr.includes("chines") ||
    fullSearchStr.includes("wok") ||
    fullSearchStr.includes("rolinho") ||
    fullSearchStr.includes("chop suey")
  ) {
    catKey = "yakissoba";
  } else if (
    fullSearchStr.includes("sushi") ||
    fullSearchStr.includes("japa") ||
    fullSearchStr.includes("temaki") ||
    fullSearchStr.includes("sashimi") ||
    fullSearchStr.includes("poke") ||
    fullSearchStr.includes("niguiri")
  ) {
    catKey = "sushi";
  } else if (
    fullSearchStr.includes("confeitar") ||
    fullSearchStr.includes("docer") ||
    fullSearchStr.includes("bolo") ||
    fullSearchStr.includes("torta") ||
    fullSearchStr.includes("panificad")
  ) {
    catKey = "confeitaria";
  } else if (
    fullSearchStr.includes("açaí") ||
    fullSearchStr.includes("acai") ||
    fullSearchStr.includes("açai") ||
    fullSearchStr.includes("açaiteria") ||
    fullSearchStr.includes("acaiteria")
  ) {
    catKey = "acai";
  } else if (
    fullSearchStr.includes("churrasc") ||
    fullSearchStr.includes("espet") ||
    fullSearchStr.includes("steakhous") ||
    fullSearchStr.includes("parrilla") ||
    fullSearchStr.includes("assados")
  ) {
    catKey = "churrascaria";
  } else if (
    fullSearchStr.includes("advogad") ||
    fullSearchStr.includes("advocac") ||
    fullSearchStr.includes("direit") ||
    fullSearchStr.includes("jurid") ||
    fullSearchStr.includes("law") ||
    fullSearchStr.includes("oab")
  ) {
    catKey = "advocacia";
  } else if (
    fullSearchStr.includes("barbea") ||
    fullSearchStr.includes("barber") ||
    fullSearchStr.includes("cabelo masculino") ||
    fullSearchStr.includes("navalha")
  ) {
    catKey = "barbearia";
  } else if (
    fullSearchStr.includes("odonto") ||
    fullSearchStr.includes("denti") ||
    fullSearchStr.includes("sorriso") ||
    fullSearchStr.includes("ortodon") ||
    fullSearchStr.includes("implant")
  ) {
    catKey = "odontologia";
  } else if (
    fullSearchStr.includes("estetic") ||
    fullSearchStr.includes("beauty") ||
    fullSearchStr.includes("salon") ||
    fullSearchStr.includes("micro") ||
    fullSearchStr.includes("pigmentac") ||
    fullSearchStr.includes("spa") ||
    fullSearchStr.includes("beleza") ||
    fullSearchStr.includes("harmoniz") ||
    fullSearchStr.includes("salao") ||
    fullSearchStr.includes("cabel") ||
    fullSearchStr.includes("unha") ||
    fullSearchStr.includes("sobrancelha") ||
    fullSearchStr.includes("maquiag")
  ) {
    catKey = "estetica";
  } else if (
    fullSearchStr.includes("medic") ||
    fullSearchStr.includes("dermatolog") ||
    fullSearchStr.includes("pediatr") ||
    fullSearchStr.includes("cardiolog") ||
    fullSearchStr.includes("oftalmo") ||
    fullSearchStr.includes("ortoped") ||
    fullSearchStr.includes("ginecolog") ||
    fullSearchStr.includes("psicolog") ||
    fullSearchStr.includes("terap") ||
    fullSearchStr.includes("fisioter") ||
    fullSearchStr.includes("nutri") ||
    fullSearchStr.includes("saude") ||
    fullSearchStr.includes("hospital") ||
    fullSearchStr.includes("clinica")
  ) {
    catKey = "saude";
  } else if (
    fullSearchStr.includes("pet") ||
    fullSearchStr.includes("vet") ||
    fullSearchStr.includes("animal") ||
    fullSearchStr.includes("canin") ||
    fullSearchStr.includes("banho e tosa")
  ) {
    catKey = "petshop";
  } else if (
    fullSearchStr.includes("tatuag") ||
    fullSearchStr.includes("tattoo") ||
    fullSearchStr.includes("piercing")
  ) {
    catKey = "tatuagem";
  } else if (
    fullSearchStr.includes("imobil") ||
    fullSearchStr.includes("corret") ||
    fullSearchStr.includes("imovel") ||
    fullSearchStr.includes("imoveis") ||
    fullSearchStr.includes("arquitet") ||
    fullSearchStr.includes("construt")
  ) {
    catKey = "imobiliaria";
  } else if (
    fullSearchStr.includes("academ") ||
    fullSearchStr.includes("crossfit") ||
    fullSearchStr.includes("fitness") ||
    fullSearchStr.includes("personal") ||
    fullSearchStr.includes("pilates")
  ) {
    catKey = "academia";
  } else if (
    fullSearchStr.includes("mecanic") ||
    fullSearchStr.includes("oficin") ||
    fullSearchStr.includes("auto") ||
    fullSearchStr.includes("funilar") ||
    fullSearchStr.includes("carro")
  ) {
    catKey = "oficina";
  } else if (
    fullSearchStr.includes("restauran") ||
    fullSearchStr.includes("bistro") ||
    fullSearchStr.includes("comida") ||
    fullSearchStr.includes("gourmet") ||
    fullSearchStr.includes("bar") ||
    fullSearchStr.includes("boteco") ||
    fullSearchStr.includes("lanchon") ||
    fullSearchStr.includes("cafe") ||
    fullSearchStr.includes("padar") ||
    fullSearchStr.includes("pub") ||
    fullSearchStr.includes("food")
  ) {
    catKey = "restaurante";
  }

  // Dynamic fallback for generated niches
  if (catKey === "default") {
    const normalizedSearch = fullSearchStr.replace(/[^a-z0-9]/g, "");
    for (const key of Object.keys(NICHE_CONFIGS)) {
      if (key !== "default" && normalizedSearch.includes(key)) {
        catKey = key;
        break;
      }
    }
  }

  const baseConfig = NICHE_CONFIGS[catKey] || NICHE_CONFIGS["default"];

  // Paletas de Cores Rápidas Expandidas
  const colorPalettes: Record<string, { accent: string; badgeBg: string; border: string }> = {
    gold: { accent: "#D97706", badgeBg: "rgba(217, 119, 6, 0.15)", border: "rgba(217, 119, 6, 0.3)" },
    blue: { accent: "#2563EB", badgeBg: "rgba(37, 99, 235, 0.15)", border: "rgba(37, 99, 235, 0.3)" },
    emerald: { accent: "#059669", badgeBg: "rgba(5, 150, 105, 0.15)", border: "rgba(5, 150, 105, 0.3)" },
    purple: { accent: "#7C3AED", badgeBg: "rgba(124, 58, 237, 0.15)", border: "rgba(124, 58, 237, 0.3)" },
    pink: { accent: "#DB2777", badgeBg: "rgba(219, 39, 119, 0.15)", border: "rgba(219, 39, 119, 0.3)" },
    red: { accent: "#DC2626", badgeBg: "rgba(220, 38, 38, 0.15)", border: "rgba(220, 38, 38, 0.3)" },
    cyan: { accent: "#06B6D4", badgeBg: "rgba(6, 182, 212, 0.15)", border: "rgba(6, 182, 212, 0.3)" },
    orange: { accent: "#EA580C", badgeBg: "rgba(234, 88, 12, 0.15)", border: "rgba(234, 88, 12, 0.3)" },
    indigo: { accent: "#4F46E5", badgeBg: "rgba(79, 70, 229, 0.15)", border: "rgba(79, 70, 229, 0.3)" },
    teal: { accent: "#0D9488", badgeBg: "rgba(13, 148, 136, 0.15)", border: "rgba(13, 148, 136, 0.3)" },
    rose: { accent: "#E11D48", badgeBg: "rgba(225, 29, 72, 0.15)", border: "rgba(225, 29, 72, 0.3)" },
    amber: { accent: "#F59E0B", badgeBg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.3)" },
    violet: { accent: "#8B5CF6", badgeBg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.3)" }
  };

  const selectedAccent = (customColorHex && (customColorHex.startsWith("#") || customColorHex.startsWith("rgb")))
    ? customColorHex
    : (colorPalettes[selectedColor] ? colorPalettes[selectedColor].accent : "#D97706");

  const currentPalette = {
    accent: selectedAccent,
    badgeBg: `${selectedAccent}26`,
    border: `${selectedAccent}4D`,
  };

  // Aplica a cor selecionada e o modo Claro/Escuro em toda a página sobrepondo o NicheConfig base
  const isLight = themeMode === "light";
  const config = {
    ...baseConfig,
    bgColor: isLight ? "#F8FAFC" : baseConfig.bgColor,
    surfaceColor: isLight ? "#FFFFFF" : baseConfig.surfaceColor,
    cardBg: isLight ? "#FFFFFF" : baseConfig.cardBg,
    textColor: isLight ? "#0F172A" : baseConfig.textColor,
    mutedTextColor: isLight ? "#475569" : baseConfig.mutedTextColor,
    accentColor: currentPalette.accent,
    borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : currentPalette.border,
    accentText: "#FFFFFF"
  };

  const NicheIcon = config.icon;

  const isGenericCategory = !rawCategoria || ["establishment", "point_of_interest", "local_business", "store", "food", "health", "finance", "service", "gmn"].includes(rawCategoria.toLowerCase().trim());
  const displayCategory = isGenericCategory ? config.prettyCategoryName : rawCategoria;

  const defaultBusinessSummary = storedLead?.editorial_summary || search.summary || `${nome} é uma das empresas de ${displayCategory} mais prestigiadas da região de ${cidade}, destacando-se pela excelência no atendimento com nota ${rating} e ${reviews} avaliações positivas de clientes.`;
  const businessSummary = editSummary || defaultBusinessSummary;

  const CURATED_NICHE_PHOTOS: Record<string, { hero: string; gallery: string[] }> = {
    odontologia: {
      hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      ],
    },
    advocacia: {
      hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      ],
    },
    estetica: {
      hero: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512290900673-700200889278?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
      ],
    },
    saude: {
      hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      ],
    },
    barbearia: {
      hero: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517832606589-715069686846?auto=format&fit=crop&w=800&q=80",
      ],
    },
    imobiliaria: {
      hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      ],
    },
    restaurante: {
      hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
      ],
    },
    churrascaria: {
      hero: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
      ],
    },
    oficina: {
      hero: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80",
      ],
    },
    academia: {
      hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      ],
    },
    petshop: {
      hero: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
      ],
    },
    tatuagem: {
      hero: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565058384573-03067e2a9667?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=800&q=80",
      ],
    },
    contabilidade: {
      hero: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
      ],
    },
    default: {
      hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      ],
    },
  };

  const sanitizePhotoUrl = (url: string) => {
    if (!url) return "";
    if (
      url.includes("pollinations.ai") ||
      url.includes("1590301157890") ||
      url.includes("1541781774459") ||
      url.includes("1519671482749") ||
      url.includes("1563805042") ||
      url.includes("1517248135467") ||
      url.includes("1555396273") ||
      url.includes("1550966871")
    ) {
      return "";
    }
    return url;
  };

  const curatedKey = CURATED_NICHE_PHOTOS[catKey] ? catKey : "default";
  const curatedPhotos = CURATED_NICHE_PHOTOS[curatedKey];

  // IMPORTANT: Do not use realGooglePhotos to avoid charging the user's Google Places API billing!
  const defaultHeroImage = sanitizePhotoUrl(storedLead?.customHeroPhoto) 
    || sanitizePhotoUrl((search as any).hero_photo) 
    || sanitizePhotoUrl(config.heroFallback)
    || curatedPhotos.hero;
  const heroImage = sanitizePhotoUrl(editHeroImage) || defaultHeroImage;

  const defaultGalleryImages = (storedLead?.customGalleryPhotos && storedLead.customGalleryPhotos.length > 0)
    ? storedLead.customGalleryPhotos.map(sanitizePhotoUrl).filter(Boolean)
    : (config.galleryFallback && config.galleryFallback.some(url => !url.includes("pollinations.ai"))
      ? config.galleryFallback.map(sanitizePhotoUrl).filter(Boolean)
      : curatedPhotos.gallery);
  const galleryImages = (editGalleryImages.length > 0 ? editGalleryImages.map(sanitizePhotoUrl).filter(Boolean) : (defaultGalleryImages.length > 0 ? defaultGalleryImages : curatedPhotos.gallery));


  const heroTagline = editTagline || config.heroTagline;

  const handleHeroFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setEditHeroImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryFileUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const currentList = editGalleryImages.length > 0 ? [...editGalleryImages] : [...defaultGalleryImages];
          currentList[index] = event.target.result as string;
          setEditGalleryImages(currentList);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddGalleryPhoto = () => {
    const currentList = editGalleryImages.length > 0 ? [...editGalleryImages] : [...defaultGalleryImages];
    currentList.push("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80");
    setEditGalleryImages(currentList);
  };

  const handleRemoveGalleryPhoto = (index: number) => {
    const currentList = editGalleryImages.length > 0 ? [...editGalleryImages] : [...defaultGalleryImages];
    if (currentList.length <= 1) return;
    const updated = currentList.filter((_, i) => i !== index);
    setEditGalleryImages(updated);
  };

  const handleResetCustomizations = () => {
    setEditNome("");
    setEditCategoria("");
    setEditCidade("");
    setEditEndereco("");
    setEditPhone("");
    setEditRating("");
    setEditReviews("");
    setEditSummary("");
    setEditTagline("");
    setEditHeroImage("");
    setEditGalleryImages([]);
    setEditServices(null);
    setCustomColorHex("");
    setSelectedColor("gold");
    setTypography("modern");
    setButtonStyle("rounded");
    setThemeMode("dark");
    setSocialLinks({ instagram: "", tiktok: "", facebook: "" });
    setVisibleSections({ hero: true, servicos: true, galeria: true, depoimentos: true, cardapio: false });
    setCustomBlocks([]);
  };

  // Função para salvar a prévia localmente
  const handleSavePreviewLocally = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("rdg_saved_previews") || "[]");
      const newEntry = {
        id: storedLead?.id || `preview_${Date.now()}`,
        name: nome,
        category: displayCategory,
        phone,
        address: endereco,
        city: cidade,
        rating,
        reviews,
        savedAt: new Date().toISOString(),
        urlParams: {
          ...search,
          nome,
          categoria: rawCategoria,
          cidade,
          endereco,
          phone,
          hero_photo: heroImage,
          photos: JSON.stringify(galleryImages),
          custom_color: selectedAccent,
          summary: businessSummary,
        },
      };
      const updated = [newEntry, ...existing.filter((item: any) => item && item.id !== newEntry.id && item.name !== nome)];
      localStorage.setItem("rdg_saved_previews", JSON.stringify(updated));
      setIsSavedLocally(true);
      setTimeout(() => setIsSavedLocally(false), 3000);
    } catch (e) {
      console.error("Erro ao salvar prévia:", e);
    }
  };

  // Função para copiar Prompt estruturado para a RDG AI
  const handleCopyRdgAiPrompt = () => {
    const promptText = `Crie um site profissional e responsivo para a empresa "${nome}" do segmento de ${displayCategory} localizada em ${cidade}.
Informações Oficiais:
- Nome: ${nome}
- Categoria: ${displayCategory}
- Telefone / WhatsApp: ${phone}
- Endereço: ${endereco}
- Avaliação: Nota ${rating} estrelas com ${reviews} avaliações no Google.

Estrutura do Site:
1. Seção Hero (Topo) com chamada persuasiva e botão direto para WhatsApp.
2. Galeria de fotos profissionais do espaço e trabalhos.
3. Seção de Serviços e diferenciais com botão de agendamento.
4. Depoimentos de clientes e Mapa de localização interativo.
5. Rodapé com direitos autorais e links de contato.

Use paleta de cores escura e moderna com cor de destaque ${currentPalette.accent}.`;

    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 3000);
  };

  const handleSharePreview = () => {
    try {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set("nome", nome);
      url.searchParams.set("categoria", rawCategoria);
      url.searchParams.set("cidade", cidade);
      url.searchParams.set("endereco", endereco);
      url.searchParams.set("phone", phone);
      url.searchParams.set("color", selectedColor);
      url.searchParams.set("theme", themeMode);
      url.searchParams.set("font", typography);
      url.searchParams.set("btn", buttonStyle);
      url.searchParams.set("mode", "view"); // Esconde o painel do editor para o cliente final
      
      navigator.clipboard.writeText(url.toString());
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch (e) {
      console.error("Erro ao gerar link de compartilhamento:", e);
    }
  };

  // Função para fazer Download do Site HTML5 Completo em 1 clique
  const handleDownloadHtml5 = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${nome} — Site Oficial</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0B0B0F; color: #FFFFFF; }
  </style>
</head>
<body class="bg-[#0B0B0F] text-white min-h-screen">
  <!-- TOPO HERO -->
  <header class="border-b border-white/10 py-4 px-6 flex justify-between items-center bg-[#111218]">
    <h1 class="text-xl font-black tracking-tight" style="color: ${currentPalette.accent}">${nome}</h1>
    <a href="https://wa.me/${waNum}" target="_blank" class="px-5 py-2.5 rounded-full font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-all">
      Falar no WhatsApp
    </a>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-12 space-y-12">
    <!-- HERO SECTION -->
    <section class="text-center space-y-6">
      <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style="background: ${currentPalette.badgeBg}; color: ${currentPalette.accent}">
        ${displayCategory} em ${cidade}
      </span>
      <h2 class="text-4xl sm:text-5xl font-black leading-tight">${nome}</h2>
      <p class="text-sm text-white/70 max-w-2xl mx-auto">${businessSummary}</p>
      <div class="pt-4">
        <a href="https://wa.me/${waNum}" target="_blank" class="px-8 py-4 rounded-2xl font-extrabold text-sm text-black shadow-lg" style="background-color: ${currentPalette.accent}">
          Agendar Atendimento Agora
        </a>
      </div>
    </section>

    <!-- INFORMAÇÕES DE CONTATO -->
    <section class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
      <div class="bg-[#111218] p-5 rounded-2xl border border-white/10 text-center">
        <p class="text-xs text-white/50 font-bold uppercase">Telefone / WhatsApp</p>
        <p class="text-sm font-bold text-white mt-1">${phone}</p>
      </div>
      <div class="bg-[#111218] p-5 rounded-2xl border border-white/10 text-center">
        <p class="text-xs text-white/50 font-bold uppercase">Endereço</p>
        <p class="text-sm font-bold text-white mt-1">${endereco}</p>
      </div>
      <div class="bg-[#111218] p-5 rounded-2xl border border-white/10 text-center">
        <p class="text-xs text-white/50 font-bold uppercase">Avaliação no Google</p>
        <p class="text-sm font-bold text-amber-400 mt-1">★ ${rating} (${reviews} avaliações)</p>
      </div>
    </section>
  </main>

  <footer class="border-t border-white/10 py-6 text-center text-xs text-white/40">
    <p>© ${new Date().getFullYear()} ${nome}. Todos os direitos reservados.</p>
  </footer>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    const nameClean = nome.toLowerCase().replace(/[^a-z0-9]/g, "-");
    link.href = URL.createObjectURL(blob);
    link.download = `site-${nameClean}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  let realReviewsList: any[] = storedLead?.reviews_list || [];
  if (realReviewsList.length === 0 && search.reviews_json) {
    try {
      const parsed: any = JSON.parse(search.reviews_json);
      if (Array.isArray(parsed) && parsed.length > 0) {
        realReviewsList = parsed;
      }
    } catch (e) {}
  }

  let realOpeningHours: string[] = storedLead?.opening_hours || [];
  if (realOpeningHours.length === 0 && search.hours_json) {
    try {
      const parsed: any = JSON.parse(search.hours_json);
      if (Array.isArray(parsed) && parsed.length > 0) {
        realOpeningHours = parsed;
      }
    } catch (e) {}
  }

  const defaultMsg = encodeURIComponent(`Olá! Vi o site oficial da *${nome}* em ${cidade} e gostaria de agendar um atendimento.`);
  const waUrl = `https://wa.me/${waNum}?text=${defaultMsg}`;

  const lowerName = nome.toLowerCase();
  let dynamicServices = config.services;

  if (lowerName.includes("pizz")) {
    dynamicServices = [
      { title: "Pizzas Tradicionais no Forno a Lenha", desc: "Massa de fermentação natural longa, molho artesanal de tomate pelado e ingredientes nobres.", price: "Consulte o Cardápio" },
      { title: "Pizzas Especiais da Casa", desc: "Combinações exclusivas desenvolvidas pela nossa cozinha com bordas recheadas.", price: "Consulte o Cardápio" },
      { title: "Calzones & Entradas Quentes", desc: "Crostinis temperados, calzones recheados e pães da casa assados na hora.", price: "Consulte o Cardápio" },
      { title: "Bebidas & Vinho da Casa", desc: "Carta de vinhos selecionados, refrigerantes e cervejas artesanais geladas.", price: "Consulte o Cardápio" }
    ];
  } else if (lowerName.includes("confeitar") || lowerName.includes("docer") || lowerName.includes("bolo")) {
    dynamicServices = [
      { title: "Bolos de Festa & Tortas Finas", desc: "Receitas artesanais sob encomenda e à pronta entrega com ingredientes de alta confeitaria.", price: "Consulte a Vitrine" },
      { title: "Cafés Especiais & Capuccinos", desc: "Grãos selecionados com torra fresca, prensa francesa e bebidas quentes cremosas.", price: "Consulte a Vitrine" },
      { title: "Salgados Artesanais & Empadas", desc: "Empadas folhadas, quiches de sabores variados e salgados assados no dia.", price: "Consulte a Vitrine" },
      { title: "Doces Tradicionais & Gelatos", desc: "Brigadeiros gourmet, mil-folhas, macarons e sobremesas individuais.", price: "Consulte a Vitrine" }
    ];
  } else if (lowerName.includes("barbea") || lowerName.includes("barber")) {
    dynamicServices = [
      { title: `Corte de Cabelo — ${nome}`, desc: "Corte na tesoura ou máquina com alinhamento de fios e styling profissional.", price: "Agendar Horário" },
      { title: "Barba Completa na Navalha", desc: "Modelagem com toalha quente, óleos hidratantes e pós-barba purificante.", price: "Agendar Horário" },
      { title: "Combo Cabelo + Barba VIP", desc: "Tratamento completo com lavagem, alinhamento e atendimento personalizado.", price: "Agendar Horário" },
      { title: "Pigmentação Capilar & Sobrancelha", desc: "Disfarce de falhas e alinhamento do contorno da barba e sobrancelha.", price: "Agendar Horário" }
    ];
  }

  const activeDynamicServices = (Array.isArray(editServices) && editServices.length > 0)
    ? editServices
    : (Array.isArray(dynamicServices) && dynamicServices.length > 0 ? dynamicServices : [
        { title: "Atendimento Especializado", desc: "Serviço profissional de alta qualidade com agendamento rápido.", price: "Sob Consulta" },
        { title: "Consultoria & Avaliação", desc: "Análise completa das necessidades do cliente com orçamento sem compromisso.", price: "Agendar" }
      ]);

  const handleUpdateServiceTitle = (index: number, newTitle: string) => {
    const list = (editServices || activeDynamicServices).map((s: any, i: number) => i === index ? { ...s, title: newTitle } : s);
    setEditServices(list);
  };

  const handleUpdateServiceDesc = (index: number, newDesc: string) => {
    const list = (editServices || activeDynamicServices).map((s: any, i: number) => i === index ? { ...s, desc: newDesc } : s);
    setEditServices(list);
  };

  const handleUpdateServicePrice = (index: number, newPrice: string) => {
    const list = (editServices || activeDynamicServices).map((s: any, i: number) => i === index ? { ...s, price: newPrice } : s);
    setEditServices(list);
  };

  const handleAddService = () => {
    const list = [...activeDynamicServices];
    list.push({ title: "Novo Serviço", desc: "Descrição do serviço", price: "Sob Consulta" });
    setEditServices(list);
  };

  const handleRemoveService = (index: number) => {
    const list = [...activeDynamicServices];
    if (list.length <= 1) return;
    list.splice(index, 1);
    setEditServices(list);
  };

  const isGlass = themeMode === "glass";
  
  // Theme overrides
  const effectiveBg = isLight ? "#F8FAFC" : (isGlass ? "rgba(15, 20, 30, 0.8)" : config.bgColor);
  const effectiveText = isLight ? "#0F172A" : config.textColor;
  const effectiveCardBg = isLight ? "#FFFFFF" : config.cardBg;
  const effectiveMutedText = isLight ? "#64748B" : config.mutedTextColor;
  const effectiveBorder = isLight ? "rgba(0,0,0,0.1)" : config.borderColor;

  const getButtonStyle = () => {
    const isOutline = buttonStyle === "outline";
    return {
      background: isOutline ? "transparent" : config.accentColor,
      color: isOutline ? config.accentColor : config.accentText,
      borderColor: config.accentColor,
      borderWidth: isOutline ? "2px" : "0px",
      borderRadius: buttonStyle === "square" ? "0px" : buttonStyle === "rounded" ? "9999px" : "12px",
      boxShadow: buttonStyle === "neon" ? `0 0 15px ${config.accentColor}, inset 0 0 5px ${config.accentColor}` : "none"
    };
  };

  return (
    <>
      <RichTextToolbar />
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 relative ${typography === 'serif' ? 'font-serif' : typography === 'mono' ? 'font-mono' : 'font-sans'} ${isGlass ? 'backdrop-blur-xl' : ''}`}
      style={{
        backgroundColor: effectiveBg,
        color: effectiveText,
      }}
    >
      {/* OVERLAY FUTURISTA DE CARREGAMENTO COM IA GRATUITA (POLLINATIONS) */}
      {isGeneratingAi && (
        <div className="fixed inset-0 z-[100] bg-[#07090E] flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none backdrop-blur-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-md w-[92vw] sm:w-full bg-[#0F1117] border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5 sm:space-y-6 backdrop-blur-xl text-center">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 shadow-xl flex items-center justify-center text-white">
                <LayoutTemplate size={28} className="animate-pulse text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 bg-white/5 px-3.5 py-1 rounded-full border border-white/10">
                RDG DESIGN STUDIO
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight pt-1">
                Personalizando Seu Novo Site
              </h2>
              <p className="text-xs text-white/70 font-medium min-h-[36px] flex items-center justify-center transition-all leading-relaxed px-2">
                {aiStepMessage}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-white rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  style={{ width: `${aiProgressPercent}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 px-1">
                <span>MONTAGEM DO LAYOUT</span>
                <span className="font-bold text-white">{aiProgressPercent}%</span>
              </div>
            </div>

            <button
              onClick={() => setIsGeneratingAi(false)}
              className="text-[11px] font-bold text-white/50 hover:text-white transition-colors underline underline-offset-4 pt-1 inline-flex items-center gap-1"
            >
              <span>Visualizar Site Agora</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* FLOATING ACTION BUTTONS (FAB) - CONTROLES DE EDIÇÃO */}
      {search.mode !== "view" && (
        <div className="fixed bottom-4 right-4 sm:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto z-[90] flex sm:flex-col flex-row gap-2.5">
          {/* Botão de Toggle do Modo Edição */}
          <button
            onClick={() => setIsGlobalEditMode(!isGlobalEditMode)}
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all group relative border ${
              isGlobalEditMode 
                ? "bg-purple-600 text-white border-purple-400 hover:bg-purple-500 ring-2 ring-purple-500/30"
                : "bg-[#111218]/90 backdrop-blur-md hover:bg-[#1A1F2E] text-white border-white/10"
            }`}
          >
            <Type size={18} className={isGlobalEditMode ? "animate-pulse" : ""} />
            
            {/* Tooltip Hover */}
            <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#111218] border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              {isGlobalEditMode ? "Sair do Modo Edição" : "Editar Textos na Tela"}
            </div>
          </button>

          {/* Botão de Alternar Modo Claro / Modo Escuro */}
          <button
            onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all group relative bg-[#111218]/90 backdrop-blur-md hover:bg-[#1A1F2E] text-white border border-white/15 hover:scale-105"
            title={themeMode === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
          >
            {themeMode === "dark" ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-emerald-400" />}
            
            {/* Tooltip Hover */}
            <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#111218] border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              {themeMode === "dark" ? "Mudar para Modo Claro ☀️" : "Mudar para Modo Escuro 🌙"}
            </div>
          </button>

          {/* Botão de Edição Completa (Painel Lateral) */}
          <button
            onClick={() => setIsEditorOpen(true)}
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all group relative bg-white text-black hover:bg-gray-100 border border-white/20 hover:scale-105"
          >
            <Sliders size={20} />
            
            {/* Tooltip Hover */}
            <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              Personalizar Design & Imagens
            </div>
          </button>
        </div>
      )}

      {/* Main Header Estilo Personalizado por Nicho */}
      <header
        className="backdrop-blur-md border-b px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between sticky top-11 z-40 transition-colors"
        style={{
          backgroundColor: isLight ? "rgba(255, 255, 255, 0.92)" : "rgba(11, 15, 24, 0.92)",
          borderColor: config.borderColor,
        }}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 max-w-[70%] sm:max-w-none">
          {logoImage ? (
            <img src={logoImage} alt={nome} className="h-9 sm:h-12 object-contain" />
          ) : (
            <>
              <div
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-lg sm:text-xl shadow-lg shrink-0"
                style={{ background: config.accentColor, color: config.accentText }}
              >
                <NicheIcon size={20} />
              </div>
              <div className="min-w-0">
                <h2 className="font-bold text-sm sm:text-xl tracking-wider uppercase truncate">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver localização"
                    className="hover:underline flex items-center gap-1.5 truncate"
                    style={{
                      fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      color: config.textColor,
                    }}
                  >
                    <span className="truncate">{nome}</span>
                  </a>
                </h2>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-mono truncate" style={{ color: config.mutedTextColor }}>
                  {displayCategory} • {cidade}
                </p>
              </div>
            </>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: config.mutedTextColor }}>
          <a href="#servicos" className="hover:opacity-100 transition-opacity">Serviços</a>
          <a href="#galeria" className="hover:opacity-100 transition-opacity">Galeria</a>
          <a href="#depoimentos" className="hover:opacity-100 transition-opacity">Avaliações</a>
          <a href="#localizacao" className="hover:opacity-100 transition-opacity">Horários & Localização</a>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (isGlobalEditMode) e.preventDefault(); }}
            className="px-3 py-2 sm:px-5 sm:py-3 text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.18em] transition-all shadow-xl flex items-center gap-1.5 sm:gap-2 cursor-pointer rounded-xl"
            style={getButtonStyle()}
          >
            <MessageCircle size={15} />
            <span 
              className="outline-none"
              contentEditable={isGlobalEditMode}
              suppressContentEditableWarning
              onBlur={(e) => setEditBtnHeaderText(e.currentTarget.innerHTML)}
              dangerouslySetInnerHTML={{ __html: editBtnHeaderText || "WhatsApp" }}
            />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      {visibleSections.hero && (
      <AnimatedSection id="hero" animation={animationStyle} className="relative overflow-hidden py-10 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-10" style={{ background: config.accentColor }} />
              <span
                contentEditable={isGlobalEditMode} 
                suppressContentEditableWarning
                onBlur={(e) => {
                  setEditTagline(e.currentTarget.innerText);
                  setEditHeroTaglineHtml(e.currentTarget.innerHTML);
                }}
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] outline-none hover:ring-2 ring-white/20 rounded-md px-1 -mx-1" 
                style={{ color: config.accentColor }}
                dangerouslySetInnerHTML={{ __html: editHeroTaglineHtml || heroTagline }}
              />
            </div>

            <h1
              contentEditable={isGlobalEditMode} 
              suppressContentEditableWarning
              onBlur={(e) => {
                setEditNome(e.currentTarget.innerText);
                setEditHeroTitleHtml(e.currentTarget.innerHTML);
              }}
              className="text-3xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] sm:leading-[1.02] tracking-tight outline-none hover:ring-2 ring-white/20 rounded-xl px-2 -mx-2 transition-all"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
              dangerouslySetInnerHTML={{ __html: editHeroTitleHtml || nome }}
            />

            <p 
              contentEditable={isGlobalEditMode} 
              suppressContentEditableWarning
              onBlur={(e) => {
                setEditSummary(e.currentTarget.innerText);
                setEditSummaryHtml(e.currentTarget.innerHTML);
              }}
              className="text-xs sm:text-base leading-relaxed opacity-85 font-normal outline-none hover:ring-2 ring-white/20 rounded-xl px-2 -mx-2 transition-all"
              style={{ color: config.mutedTextColor }}
              dangerouslySetInnerHTML={{ __html: editSummaryHtml || businessSummary }}
            />

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (isGlobalEditMode) e.preventDefault(); }}
                className="px-6 py-3.5 text-xs font-black uppercase tracking-[0.18em] transition-all shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer"
                style={getButtonStyle()}
              >
                <MessageCircle size={17} />
                <span 
                  className="outline-none"
                  contentEditable={isGlobalEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => setEditBtnHeroText(e.currentTarget.innerHTML)}
                  dangerouslySetInnerHTML={{ __html: editBtnHeroText || "Agendar Atendimento" }}
                />
              </a>

              <a
                href="#servicos"
                className="px-5 py-3.5 border rounded-xl text-xs font-bold uppercase tracking-[0.18em] transition-all hover:bg-white/5 flex items-center justify-center gap-2"
                style={{ borderColor: config.borderColor, color: config.textColor }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${config.accentColor}25`, color: config.accentColor }}>
                  <Play size={12} className="fill-current ml-0.5" />
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Ver Especialidades</span>
              </a>
            </div>

            {/* Contador de Métricas Reais */}
            <div className="pt-6 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t" style={{ borderColor: config.borderColor }}>
              <div className="space-y-1">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]" style={{ color: config.mutedTextColor }}>
                  Avaliação Média
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl sm:text-3xl font-bold hover:underline"
                  style={{
                    color: config.accentColor,
                    fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  }}
                >
                  ⭐ {rating}
                </a>
              </div>

              <div className="space-y-1">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]" style={{ color: config.mutedTextColor }}>
                  Total de Reviews
                </div>
                <span
                  className="block text-xl sm:text-3xl font-bold"
                  style={{
                    color: config.textColor,
                    fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  }}
                >
                  {reviews}+
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]" style={{ color: config.mutedTextColor }}>
                  Pontualidade
                </div>
                <span
                  className="block text-xl sm:text-3xl font-bold"
                  style={{
                    color: config.accentColor,
                    fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  }}
                >
                  100%
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]" style={{ color: config.mutedTextColor }}>
                  Localização
                </div>
                <span
                  className="block text-xs sm:text-sm font-bold truncate pt-1"
                  style={{
                    color: config.textColor,
                  }}
                >
                  {cidade}
                </span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: CARD DE IMAGEM COM AMBIENT BLUR E OBJECT-CONTAIN (ENQUADRAMENTO PERFEITO SEM CORTES) */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative w-full h-[260px] xs:h-[320px] sm:h-[460px] lg:h-[540px] overflow-hidden shadow-2xl rounded-2xl border flex items-center justify-center p-2"
              style={{
                borderColor: config.borderColor,
                backgroundColor: config.surfaceColor,
              }}
            >
              {/* Fundo Desfocado Ambiental para Preenchimento Elegante das Bordas */}
              <img
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-45 scale-125 pointer-events-none"
              />

              {/* Imagem Principal Enquadrada sem Cortar Flyers ou Rostos */}
              <img
                src={heroImage}
                alt={nome}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = config.heroFallback;
                }}
                className="relative z-10 w-full h-full object-contain rounded-xl transition duration-500 hover:scale-[1.02] filter drop-shadow-2xl"
              />

              {realOpeningHours.length > 0 && (
                <div
                  className="absolute bottom-4 left-4 right-4 z-20 p-3.5 shadow-2xl backdrop-blur-md rounded-xl border border-l-4"
                  style={{
                    backgroundColor: "rgba(11, 15, 24, 0.92)",
                    borderColor: config.borderColor,
                    borderLeftColor: config.accentColor,
                    color: "#FFFFFF",
                  }}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5 flex items-center gap-1.5" style={{ color: config.accentColor }}>
                    <Clock size={12} />
                    <span>Horário de Atendimento</span>
                  </div>
                  <div className="text-xs font-semibold truncate">
                    {realOpeningHours[0]}
                  </div>
                </div>
              )}

              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-lg bg-white text-black border border-black/10">
                <span className="font-extrabold text-amber-500">⭐ {rating}</span>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      )}

      {/* SEÇÃO DE SERVIÇOS & ESPECIALIDADES */}
      {visibleSections.servicos && (
      <AnimatedSection
        id="servicos"
        animation={animationStyle}
        className="py-20 border-t px-5 sm:px-8 transition-colors"
        style={{
          backgroundColor: effectiveCardBg,
          borderColor: effectiveBorder,
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div
                contentEditable
                suppressContentEditableWarning
                className="text-[10px] font-bold uppercase tracking-[0.35em] outline-none hover:ring-2 ring-white/20 rounded px-1"
                style={{ color: config.accentColor }}
              >
                Destaques & Especialidades
              </div>
              <h2
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEditNome(e.currentTarget.innerText.replace(/^Serviços de\s*/i, "").replace(/\.$/, ""))}
                className="text-4xl sm:text-5xl font-bold outline-none hover:ring-2 ring-white/20 rounded-xl px-1 transition-all cursor-text"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                Serviços de {nome}.
              </h2>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-sm outline-none hover:ring-2 ring-white/20 rounded px-1 transition-all cursor-text"
                style={{ color: config.mutedTextColor }}
              >
                Confira o atendimento oferecido e solicite informações no WhatsApp.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { if (isGlobalEditMode) e.preventDefault(); }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-80 cursor-pointer"
              style={{ color: config.accentColor }}
            >
              <span
                className="outline-none"
                contentEditable={isGlobalEditMode}
                suppressContentEditableWarning
                onBlur={(e) => setEditBtnServiceText(e.currentTarget.innerHTML)}
                dangerouslySetInnerHTML={{ __html: editBtnServiceText || "Solicitar Atendimento" }}
              />
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeDynamicServices.map((srv: any, idx: number) => (
              <div
                key={idx}
                className="group p-6 transition backdrop-blur-sm rounded-2xl flex flex-col justify-between border shadow-lg"
                style={{
                  backgroundColor: config.cardBg,
                  borderColor: config.borderColor,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="text-sm italic font-semibold"
                      style={{
                        color: config.accentColor,
                        fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      }}
                    >
                      0{idx + 1}.
                    </span>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleUpdateServicePrice(idx, e.currentTarget.innerText)}
                      className="text-xs font-bold px-2 py-1 rounded bg-white/5 border outline-none hover:ring-2 ring-white/30 cursor-text"
                      style={{
                        color: config.accentColor,
                        borderColor: config.borderColor,
                      }}
                    >
                      {srv.price}
                    </span>
                  </div>

                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleUpdateServiceTitle(idx, e.currentTarget.innerText)}
                    className="text-lg font-bold outline-none hover:ring-2 ring-white/20 rounded px-1 transition-all cursor-text"
                    style={{
                      fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      color: config.textColor,
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleUpdateServiceDesc(idx, e.currentTarget.innerText)}
                    className="text-xs leading-relaxed outline-none hover:ring-2 ring-white/20 rounded px-1 transition-all cursor-text"
                    style={{ color: config.mutedTextColor }}
                  >
                    {srv.desc}
                  </p>
                </div>

                <div
                  className="mt-6 h-[2px] w-8 group-hover:w-full transition-all duration-500"
                  style={{ background: config.accentColor }}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      )}
      {/* GALERIA DE FOTOS REAIS */}
      {visibleSections.galeria && (
      <AnimatedSection id="galeria" animation={animationStyle} className="py-20 border-t px-5 sm:px-8" style={{ borderColor: config.borderColor }}>
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div
                contentEditable
                suppressContentEditableWarning
                className="text-[10px] font-bold uppercase tracking-[0.35em] outline-none hover:ring-2 ring-white/20 rounded px-1"
                style={{ color: config.accentColor }}
              >
                Portfólio & Estrutura
              </div>
              <h2
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEditNome(e.currentTarget.innerText.replace(/^Espaço & Galeria -\s*/i, "").replace(/\.$/, ""))}
                className="text-4xl sm:text-5xl font-bold outline-none hover:ring-2 ring-white/20 rounded-xl px-1 transition-all cursor-text"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                Espaço & Galeria - {nome}.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((imgUrl: string, i: number) => (
              <div key={i} className="group overflow-hidden rounded-2xl aspect-square border relative shadow-md bg-black/40 flex items-center justify-center p-1" style={{ borderColor: config.borderColor }}>
                <img
                  src={imgUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-35 scale-110 pointer-events-none"
                />
                <img
                  src={imgUrl}
                  alt={`${nome} foto ${i + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = config.galleryFallback[i % config.galleryFallback.length];
                  }}
                  className="relative z-10 w-full h-full object-cover rounded-xl transition duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      )}

      {/* REVIEWS E DEPOIMENTOS REAIS DE CLIENTES */}
      {visibleSections.depoimentos && (
      <AnimatedSection
        id="depoimentos"
        animation={animationStyle}
        className="py-20 border-t px-5 sm:px-8 transition-colors"
        style={{
          backgroundColor: config.surfaceColor,
          borderColor: config.borderColor,
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div
              contentEditable
              suppressContentEditableWarning
              className="text-[10px] font-bold uppercase tracking-[0.35em] outline-none hover:ring-2 ring-white/20 rounded px-1"
              style={{ color: config.accentColor }}
            >
              Depoimentos Verificados
            </div>
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setEditNome(e.currentTarget.innerText.replace(/^O que dizem sobre\s*/i, "").replace(/\.$/, ""))}
              className="text-4xl sm:text-5xl font-bold outline-none hover:ring-2 ring-white/20 rounded-xl px-1 transition-all cursor-text"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              O que dizem sobre {nome}.
            </h2>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border"
              style={{
                backgroundColor: config.cardBg,
                borderColor: config.borderColor,
                color: config.textColor,
              }}
            >
              <span>Avaliação {rating} / 5.0</span>
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span style={{ color: config.mutedTextColor }}>({reviews} avaliações verificadas)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(realReviewsList.length > 0 ? realReviewsList.slice(0, 3) : [
              {
                author_name: "Cliente Verificado",
                rating: 5,
                text: `Atendimento impecável da equipe da ${nome}! Estrutura muito limpa, moderna e localização excelente em ${cidade}.`,
                relative_time_description: "recente"
              },
              {
                author_name: "Mariana Costa",
                rating: 5,
                text: `Superou todas as minhas expectativas. Pontualidade nos horários e atendimento totalmente profissional.`,
                relative_time_description: "há 2 semanas"
              },
              {
                author_name: "Carlos Eduardo",
                rating: 5,
                text: `Uma das melhores opções da região de ${cidade}. Recomendo a todos!`,
                relative_time_description: "há 1 mês"
              }
            ]).map((rev, i) => (
              <figure
                key={i}
                className="p-8 flex flex-col rounded-2xl justify-between border relative shadow-md"
                style={{
                  backgroundColor: config.cardBg,
                  borderColor: config.borderColor,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: rev.rating || 5 }).map((_, st) => (
                        <Star key={st} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono" style={{ color: config.mutedTextColor }}>
                      {rev.relative_time_description || "Verificado"}
                    </span>
                  </div>
                  <blockquote
                    contentEditable
                    suppressContentEditableWarning
                    className="text-xs leading-relaxed italic outline-none hover:ring-2 ring-white/20 rounded p-1 cursor-text"
                    style={{ color: config.textColor }}
                  >
                    "{rev.text}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-6 border-t flex items-center justify-between" style={{ borderColor: config.borderColor }}>
                  <div>
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      className="font-bold text-sm outline-none hover:ring-2 ring-white/20 rounded px-1 cursor-text"
                      style={{
                        fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                        color: config.textColor,
                      }}
                    >
                      {rev.author_name}
                    </div>
                    <div className="text-[10px]" style={{ color: config.mutedTextColor }}>Cliente Verificado</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </AnimatedSection>
      )}

      {/* CARDÁPIO / CATÁLOGO DIGITAL */}
      {visibleSections.cardapio && customBlocks.length > 0 && (
      <AnimatedSection
        id="cardapio"
        animation={animationStyle}
        className="py-20 border-t px-5 sm:px-8 transition-colors"
        style={{
          backgroundColor: effectiveBg,
          borderColor: effectiveBorder,
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.35em] rounded px-1"
              style={{ color: config.accentColor }}
            >
              Catálogo de Produtos & Cardápio
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold rounded-xl px-1 transition-all"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              Nossas Opções
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {customBlocks.map((block: any, idx: number) => (
              <div
                key={idx}
                className="group p-0 overflow-hidden transition backdrop-blur-sm rounded-2xl flex flex-col justify-between border shadow-lg"
                style={{
                  backgroundColor: effectiveCardBg,
                  borderColor: effectiveBorder,
                }}
              >
                {block.image && (
                  <div className="w-full aspect-video overflow-hidden border-b" style={{ borderColor: effectiveBorder }}>
                    <img src={block.image} alt={block.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div className="space-y-2">
                    <h3
                      className="text-lg font-bold"
                      style={{
                        fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                        color: config.textColor,
                      }}
                    >
                      {block.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: config.mutedTextColor }}>
                      {block.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-extrabold" style={{ color: config.accentColor }}>{block.price}</span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-wider transition-all shadow-md"
                      style={getButtonStyle()}
                    >
                      <span>{block.btnText || "Comprar"}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      )}

      {/* FOOTER & LOCALIZAÇÃO COM MAPA INTERATIVO EMBUTIDO */}
      <footer id="localizacao" className="border-t py-16 px-5 sm:px-8" style={{ borderColor: config.borderColor }}>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-xs" style={{ color: config.mutedTextColor }}>
            <div className="md:col-span-4 space-y-3">
              <h4
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEditNome(e.currentTarget.innerText)}
                className="font-bold text-base outline-none hover:ring-2 ring-white/20 rounded px-1 cursor-text"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                {nome}
              </h4>
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEditSummary(e.currentTarget.innerText)}
                className="leading-relaxed outline-none hover:ring-2 ring-white/20 rounded p-1 cursor-text"
              >
                {businessSummary}
              </p>
            </div>

            <div className="md:col-span-5 space-y-3">
              <h5 className="font-bold uppercase tracking-wider" style={{ color: config.textColor }}>LOCALIZAÇÃO & HORÁRIOS</h5>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: config.accentColor }} />
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setEditEndereco(e.currentTarget.innerText)}
                  className="outline-none hover:ring-2 ring-white/20 rounded px-1 cursor-text"
                >
                  {endereco}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" style={{ color: config.accentColor }} />
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setEditPhone(e.currentTarget.innerText)}
                  className="outline-none hover:ring-2 ring-white/20 rounded px-1 cursor-text"
                >
                  {phone}
                </span>
              </p>

              {realOpeningHours.length > 0 && (
                <div className="pt-2 space-y-1 border-t" style={{ borderColor: config.borderColor }}>
                  <p className="font-bold text-[11px] flex items-center gap-1" style={{ color: config.textColor }}>
                    <Clock size={12} style={{ color: config.accentColor }} />
                    <span>Horários de Atendimento:</span>
                  </p>
                  <div className="space-y-0.5 text-[10px]">
                    {realOpeningHours.slice(0, 4).map((h, idx) => (
                      <p key={idx}>{h}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-3 space-y-4 md:text-right">
              <h5 className="font-bold uppercase tracking-wider" style={{ color: config.textColor }}>Atendimento Rápido</h5>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (isGlobalEditMode) e.preventDefault(); }}
                className="inline-flex items-center gap-2 px-6 py-3 font-black uppercase tracking-[0.18em] transition-all shadow-xl cursor-pointer"
                style={getButtonStyle()}
              >
                <MessageCircle size={16} />
                <span
                  className="outline-none"
                  contentEditable={isGlobalEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => setEditBtnFooterText(e.currentTarget.innerHTML)}
                  dangerouslySetInnerHTML={{ __html: editBtnFooterText || "Falar no WhatsApp" }}
                />
              </a>
              
              <div className="pt-4 flex flex-col md:items-end gap-3">
                <h5 className="font-bold uppercase tracking-wider text-[10px]" style={{ color: config.textColor }}>Redes Sociais</h5>
                <div className="flex items-center gap-2">
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border hover:scale-110 transition-transform" style={{ borderColor: config.borderColor, color: config.accentColor }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  )}
                  {socialLinks.tiktok && (
                    <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border hover:scale-110 transition-transform" style={{ borderColor: config.borderColor, color: config.accentColor }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border hover:scale-110 transition-transform" style={{ borderColor: config.borderColor, color: config.accentColor }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* MAPA EMBUTIDO INTERATIVO */}
          <div className="space-y-3 pt-6 border-t" style={{ borderColor: config.borderColor }}>
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: config.textColor }}>
                <MapPin size={14} style={{ color: config.accentColor }} />
                <span>Mapa de Localização — {nome}</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold hover:underline"
                style={{ color: config.accentColor }}
              >
                <span>Como Chegar (Abrir no GPS)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="w-full h-64 rounded-2xl overflow-hidden border shadow-xl relative" style={{ borderColor: config.borderColor, backgroundColor: config.cardBg }}>
              <iframe
                title={`Mapa da ${nome}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(nome + ", " + endereco)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </div>

          {/* CRÉDITO PROFISSIONAL DE DESENVOLVIMENTO RDG DIGITAL */}
          <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]" style={{ borderColor: config.borderColor, color: config.mutedTextColor }}>
            <p>© {new Date().getFullYear()} {nome}. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5 font-medium">
              <span>Site profissional desenvolvido por</span>
              <a
                href="https://www.rdgdigital.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold hover:underline inline-flex items-center gap-1 transition-colors"
                style={{ color: config.accentColor }}
              >
                <span>RDG Digital</span>
                <ArrowUpRight size={12} />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>

      {/* PAINEL LATERAL DE PERSONALIZAÇÃO AO VIVO DO SITE (LIVE CUSTOMIZER DRAWER) */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm transition-all animate-in fade-in duration-200">
          <div className="w-full max-w-[420px] sm:max-w-md bg-[#111111] text-white h-full flex flex-col border-l border-white/10 shadow-2xl overflow-hidden">
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/5 bg-[#111111] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Sliders size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white">Editor & Opções do Site</h3>
                    <p className="text-[11px] text-white/50">Personalize o design e exporte</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditorOpen(false)}
                  className="p-2 rounded-xl bg-transparent hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                  title="Fechar painel"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Toolbar de Ações Rápidas (Salvar, Compartilhar, HTML5, Prompt, IA) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <button
                  onClick={handleSavePreviewLocally}
                  className={`px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all flex items-center justify-center gap-1.5 border ${
                    isSavedLocally
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
                  }`}
                  title="Salvar prévia em Minhas Prévias"
                >
                  <Bookmark size={13} />
                  <span>{isSavedLocally ? "Salvo!" : "Salvar"}</span>
                </button>

                <button
                  onClick={handleSharePreview}
                  className={`px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all flex items-center justify-center gap-1.5 border ${
                    copiedLink
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
                  }`}
                  title="Copiar link da prévia para o cliente"
                >
                  <Share2 size={13} />
                  <span>{copiedLink ? "Copiado!" : "Link"}</span>
                </button>

                <button
                  onClick={handleDownloadHtml5}
                  className="px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                  title="Baixar código HTML5 do site"
                >
                  <Download size={13} />
                  <span>HTML5</span>
                </button>

                <button
                  onClick={handleCopyRdgAiPrompt}
                  className={`px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all flex items-center justify-center gap-1.5 border ${
                    copiedPrompt
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
                  }`}
                  title="Copiar Prompt de criação para RDG AI"
                >
                  <Copy size={13} />
                  <span>{copiedPrompt ? "Copiado!" : "Prompt"}</span>
                </button>
              </div>
            </div>

            {/* Drawer Tabs Header */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-white/5 bg-[#161616] p-2 gap-1.5 shrink-0">
              <button
                onClick={() => setActiveEditorTab("layout")}
                className={`flex-none px-3.5 py-2 text-[11px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "layout"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutTemplate size={14} />
                <span>Layout</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("design")}
                className={`flex-none px-3.5 py-2 text-[11px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "design"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Palette size={14} />
                <span>Design</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("textos")}
                className={`flex-none px-3.5 py-2 text-[11px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "textos"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <FileText size={14} />
                <span>Textos</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("imagens")}
                className={`flex-none px-3.5 py-2 text-[11px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "imagens"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Image size={14} />
                <span>Fotos</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("servicos")}
                className={`flex-none px-3.5 py-2 text-[11px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "servicos"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Sliders size={14} />
                <span>Serviços</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("cardapio")}
                className={`flex-none px-3.5 py-2 text-[11px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "cardapio"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Grid3x3 size={14} />
                <span>Cardápio</span>
              </button>
            </div>

            {/* Drawer Body - Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs">
              {activeEditorTab === "layout" && (
                <div className="space-y-4">
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-4">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                      👁️ Visibilidade das Seções
                    </label>
                    <div className="space-y-3">
                      {Object.entries({
                        hero: "Seção Principal (Capa)",
                        servicos: "Serviços / Especialidades",
                        galeria: "Galeria de Fotos",
                        depoimentos: "Depoimentos (Google)",
                        cardapio: "Cardápio / Catálogo Digital"
                      }).map(([key, label]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-white/80 font-bold">{label}</span>
                          <button
                            onClick={() => setVisibleSections(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${visibleSections[key as keyof typeof visibleSections] ? 'bg-amber-500' : 'bg-white/20'}`}
                          >
                            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${visibleSections[key as keyof typeof visibleSections] ? 'translate-x-5' : 'translate-x-1'}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeEditorTab === "textos" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Nome da Empresa</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setEditNome(e.target.value)}
                      className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                      placeholder="Ex: Clinica Sorriso Perfeito"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Categoria / Nicho</label>
                    <input
                      type="text"
                      value={rawCategoria}
                      onChange={(e) => setEditCategoria(e.target.value)}
                      className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                      placeholder="Ex: Odontologia Estética"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Cidade</label>
                      <input
                        type="text"
                        value={cidade}
                        onChange={(e) => setEditCidade(e.target.value)}
                        className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                        placeholder="Ex: São Paulo - SP"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Telefone / WhatsApp</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                        placeholder="Ex: +55 11 99999-8888"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-amber-400 mb-1">
                      💬 Mensagem Personalizada do WhatsApp (Ao Clicar no Botão)
                    </label>
                    <input
                      type="text"
                      value={editWaMsg}
                      onChange={(e) => setEditWaMsg(e.target.value)}
                      className="w-full bg-[#1A1F2E] border border-amber-500/30 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                      placeholder="Ex: Olá! Vi o site e gostaria de agendar atendimento."
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Endereço Completo</label>
                    <input
                      type="text"
                      value={endereco}
                      onChange={(e) => setEditEndereco(e.target.value)}
                      className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                      placeholder="Ex: Av. Paulista, 1000 - Bela Vista"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Frase de Destaque (Tagline)</label>
                    <input
                      type="text"
                      value={heroTagline}
                      onChange={(e) => setEditTagline(e.target.value)}
                      className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                      placeholder="Ex: Atendimento VIP & Estrutura Moderna"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Resumo Comercial do Site</label>
                    <textarea
                      rows={4}
                      value={businessSummary}
                      onChange={(e) => setEditSummary(e.target.value)}
                      className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none resize-none"
                      placeholder="Escreva a apresentação da empresa..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Nota no Google</label>
                      <input
                        type="text"
                        value={rating}
                        onChange={(e) => setEditRating(e.target.value)}
                        className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                        placeholder="5.0"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-1">Nº de Avaliações</label>
                      <input
                        type="text"
                        value={reviews}
                        onChange={(e) => setEditReviews(e.target.value)}
                        className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                        placeholder="340"
                      />
                    </div>
                  </div>

                  {/* NOVOS CONTROLES: TEXTOS DE BOTÕES E REDES SOCIAIS */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                      🖱️ Textos dos Botões
                    </label>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">Botão Principal (Capa)</label>
                        <input
                          type="text"
                          value={editBtnHeroText}
                          onChange={(e) => setEditBtnHeroText(e.target.value)}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                          placeholder="Ex: Agendar Atendimento"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">Botão do Rodapé</label>
                        <input
                          type="text"
                          value={editBtnFooterText}
                          onChange={(e) => setEditBtnFooterText(e.target.value)}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                          placeholder="Ex: Falar com Especialista"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                      📱 Redes Sociais
                    </label>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">Instagram (URL)</label>
                        <input
                          type="text"
                          value={socialLinks.instagram}
                          onChange={(e) => setSocialLinks(prev => ({ ...prev, instagram: e.target.value }))}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                          placeholder="https://instagram.com/seu.perfil"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">TikTok (URL)</label>
                        <input
                          type="text"
                          value={socialLinks.tiktok}
                          onChange={(e) => setSocialLinks(prev => ({ ...prev, tiktok: e.target.value }))}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                          placeholder="https://tiktok.com/@seu.perfil"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">Facebook (URL)</label>
                        <input
                          type="text"
                          value={socialLinks.facebook}
                          onChange={(e) => setSocialLinks(prev => ({ ...prev, facebook: e.target.value }))}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-medium focus:border-amber-400 outline-none"
                          placeholder="https://facebook.com/seu.perfil"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {activeEditorTab === "imagens" && (
                <div className="space-y-5">
                  {/* Logo Image */}
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-3">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                      🏢 Logomarca (Opcional)
                    </label>
                    
                    {logoImage && (
                      <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2 flex items-center justify-center">
                        <img src={logoImage} alt="Logo" className="h-full w-auto object-contain" />
                        <button
                          onClick={() => setLogoImage("")}
                          className="absolute top-1 right-1 p-1 bg-red-500/80 hover:bg-red-500 text-white rounded-full transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}

                    <div className="space-y-2">
                      <input
                        type="text"
                        value={logoImage}
                        onChange={(e) => setLogoImage(e.target.value)}
                        className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white text-xs font-mono focus:border-amber-400 outline-none"
                        placeholder="URL da Logomarca (ou Upload abaixo)"
                      />

                      <label className="flex items-center justify-center gap-2 p-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-xl text-xs font-bold cursor-pointer transition-colors border border-dashed border-amber-500/30">
                        <Upload size={14} />
                        <span>📁 Upload Local da Logo</span>
                        <input type="file" accept="image/*" onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            try {
                              const b64 = await convertFileToBase64(file);
                              setLogoImage(b64);
                            } catch(e) {}
                          }
                        }} className="hidden" />
                      </label>
                    </div>
                  </div>

                  {/* Foto Hero */}
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-3">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                      🖼️ Foto Principal de Capa (Hero Image)
                    </label>
                    
                    {heroImage && (
                      <div className="relative h-36 rounded-xl overflow-hidden border border-white/10 bg-black/40">
                        <img src={heroImage} alt="Hero Preview" className="w-full h-full object-contain" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editHeroImage}
                        onChange={(e) => setEditHeroImage(e.target.value)}
                        className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white text-xs font-mono focus:border-amber-400 outline-none"
                        placeholder="Cole a URL da foto (https://...)"
                      />

                      <label className="flex items-center justify-center gap-2 p-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-xl text-xs font-bold cursor-pointer transition-colors border border-dashed border-amber-500/30">
                        <Upload size={14} />
                        <span>📁 Enviar Foto do Computador (Upload Local)</span>
                        <input type="file" accept="image/*" onChange={handleHeroFileUpload} className="hidden" />
                      </label>
                    </div>
                  </div>

                  {/* Fotos da Galeria - Sem Limites */}
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                        📸 Fotos da Galeria do Espaço ({galleryImages.length} fotos)
                      </label>
                      <button
                        onClick={handleAddGalleryPhoto}
                        className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-[10px] rounded-lg transition-transform active:scale-95 flex items-center gap-1"
                      >
                        <Plus size={12} />
                        <span>Nova Foto</span>
                      </button>
                    </div>

                    {galleryImages.map((currentImg: string, idx: number) => (
                      <div key={idx} className="p-3 bg-[#1A1F2E] rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase text-white/60">Foto da Galeria #{idx + 1}</span>
                          <div className="flex items-center gap-2">
                            {currentImg && (
                              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                                Carregada
                              </span>
                            )}
                            {galleryImages.length > 1 && (
                              <button
                                onClick={() => handleRemoveGalleryPhoto(idx)}
                                className="p-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
                                title="Remover esta foto"
                              >
                                <Trash2 size={13} />
                              </button>
                            )}
                          </div>
                        </div>

                        {currentImg && (
                          <div className="h-24 rounded-lg overflow-hidden border border-white/10 bg-black/40">
                            <img src={currentImg} alt={`Galeria ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        )}

                        <input
                          type="text"
                          value={editGalleryImages[idx] !== undefined ? editGalleryImages[idx] : currentImg}
                          onChange={(e) => {
                            const newGallery = editGalleryImages.length > 0 ? [...editGalleryImages] : [...galleryImages];
                            newGallery[idx] = e.target.value;
                            setEditGalleryImages(newGallery);
                          }}
                          className="w-full bg-[#111420] border border-white/10 rounded-lg p-2 text-white text-[11px] font-mono focus:border-amber-400 outline-none"
                          placeholder={`Cole a URL da foto ${idx + 1}`}
                        />

                        <label className="flex items-center justify-center gap-1.5 p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-bold cursor-pointer transition-colors border border-dashed border-white/15">
                          <Upload size={12} />
                          <span>Enviar Arquivo Local</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleGalleryFileUpload(idx, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    ))}

                    <button
                      onClick={handleAddGalleryPhoto}
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-amber-400 border border-dashed border-amber-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Plus size={14} />
                      <span>➕ Adicionar Mais uma Foto à Galeria</span>
                    </button>
                  </div>
                </div>
              )}

              {activeEditorTab === "servicos" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-white/60 font-medium">
                      Cadastre quantos serviços ou itens do cardápio quiser ({activeDynamicServices.length} itens):
                    </div>
                    <button
                      onClick={handleAddService}
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-[10px] rounded-lg transition-transform active:scale-95 flex items-center gap-1 shrink-0"
                    >
                      <Plus size={12} />
                      <span>Adicionar Item</span>
                    </button>
                  </div>

                  {activeDynamicServices.map((srv: any, idx: number) => (
                    <div key={idx} className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-3 relative group">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-extrabold uppercase text-amber-400">
                          Item / Serviço #{idx + 1}
                        </div>
                        {activeDynamicServices.length > 1 && (
                          <button
                            onClick={() => handleRemoveService(idx)}
                            className="p-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors flex items-center gap-1 text-[10px] font-bold"
                            title="Remover este item"
                          >
                            <Trash2 size={13} />
                            <span>Remover</span>
                          </button>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Título do Serviço / Prato</label>
                        <input
                          type="text"
                          value={srv?.title || ""}
                          onChange={(e) => {
                            const updated = [...activeDynamicServices];
                            updated[idx] = { ...(updated[idx] || {}), title: e.target.value };
                            setEditServices(updated);
                          }}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs font-bold focus:border-amber-400 outline-none"
                          placeholder="Ex: Pizza Calabresa Especial / Corte Fade"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Descrição Comercial</label>
                        <textarea
                          rows={2}
                          value={srv?.desc || ""}
                          onChange={(e) => {
                            const updated = [...activeDynamicServices];
                            updated[idx] = { ...(updated[idx] || {}), desc: e.target.value };
                            setEditServices(updated);
                          }}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs focus:border-amber-400 outline-none resize-none"
                          placeholder="Descreva o que inclui..."
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Preço / Texto do Botão</label>
                        <input
                          type="text"
                          value={srv?.price || ""}
                          onChange={(e) => {
                            const updated = [...activeDynamicServices];
                            updated[idx] = { ...(updated[idx] || {}), price: e.target.value };
                            setEditServices(updated);
                          }}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs focus:border-amber-400 outline-none"
                          placeholder="Ex: R$ 49,90 ou Agendar Horário"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleAddService}
                    className="w-full py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-dashed border-amber-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Plus size={15} />
                    <span>➕ Adicionar Mais um Serviço / Prato do Cardápio</span>
                  </button>
                </div>
              )}

              {activeEditorTab === "cardapio" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-white/60 font-medium">
                      Crie um Cardápio ou Catálogo Digital ({customBlocks.length} itens):
                    </div>
                    <button
                      onClick={() => {
                        setCustomBlocks([...customBlocks, { title: "Novo Produto", desc: "Descrição do produto", price: "R$ 0,00", image: "", btnText: "Comprar" }]);
                      }}
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-[10px] rounded-lg transition-transform active:scale-95 flex items-center gap-1 shrink-0"
                    >
                      <Plus size={12} />
                      <span>Adicionar</span>
                    </button>
                  </div>

                  {customBlocks.length === 0 && (
                    <div className="text-center p-4 bg-white/5 border border-dashed border-white/20 rounded-xl">
                      <p className="text-[11px] text-white/50">Nenhum item adicionado ao cardápio ainda.</p>
                    </div>
                  )}

                  {customBlocks.map((block: any, idx: number) => (
                    <div key={idx} className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-3 relative group">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-extrabold uppercase text-amber-400">
                          Produto #{idx + 1}
                        </div>
                        <button
                          onClick={() => {
                            const updated = [...customBlocks];
                            updated.splice(idx, 1);
                            setCustomBlocks(updated);
                          }}
                          className="p-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors flex items-center gap-1 text-[10px] font-bold"
                          title="Remover produto"
                        >
                          <Trash2 size={13} />
                          <span>Remover</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Imagem do Produto (URL ou Upload Local)</label>
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={block.image || ""}
                            onChange={(e) => {
                              const updated = [...customBlocks];
                              updated[idx].image = e.target.value;
                              setCustomBlocks(updated);
                            }}
                            className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs focus:border-amber-400 outline-none"
                            placeholder="URL da imagem (https://...)"
                          />
                          <label className="flex items-center justify-center gap-2 p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-xl text-xs font-bold cursor-pointer transition-colors border border-dashed border-amber-500/30">
                            <Upload size={14} />
                            <span>📁 Fazer Upload de Imagem</span>
                            <input type="file" accept="image/*" onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                try {
                                  const b64 = await convertFileToBase64(file);
                                  const updated = [...customBlocks];
                                  updated[idx].image = b64;
                                  setCustomBlocks(updated);
                                } catch(e) {}
                              }
                            }} className="hidden" />
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Nome do Produto</label>
                        <input
                          type="text"
                          value={block.title || ""}
                          onChange={(e) => {
                            const updated = [...customBlocks];
                            updated[idx].title = e.target.value;
                            setCustomBlocks(updated);
                          }}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs font-bold focus:border-amber-400 outline-none"
                          placeholder="Ex: Hambúrguer Artesanal"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Descrição</label>
                        <textarea
                          rows={2}
                          value={block.desc || ""}
                          onChange={(e) => {
                            const updated = [...customBlocks];
                            updated[idx].desc = e.target.value;
                            setCustomBlocks(updated);
                          }}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs focus:border-amber-400 outline-none resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Preço</label>
                          <input
                            type="text"
                            value={block.price || ""}
                            onChange={(e) => {
                              const updated = [...customBlocks];
                              updated[idx].price = e.target.value;
                              setCustomBlocks(updated);
                            }}
                            className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs focus:border-amber-400 outline-none"
                            placeholder="R$ 0,00"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-white/60 mb-1">Texto do Botão</label>
                          <input
                            type="text"
                            value={block.btnText || ""}
                            onChange={(e) => {
                              const updated = [...customBlocks];
                              updated[idx].btnText = e.target.value;
                              setCustomBlocks(updated);
                            }}
                            className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2 text-white text-xs focus:border-amber-400 outline-none"
                            placeholder="Comprar"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      setCustomBlocks([...customBlocks, { title: "Novo Produto", desc: "Descrição do produto", price: "R$ 0,00", image: "", btnText: "Comprar" }]);
                    }}
                    className="w-full py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-dashed border-amber-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Plus size={15} />
                    <span>➕ Adicionar Produto ao Cardápio</span>
                  </button>
                </div>
              )}

              {activeEditorTab === "design" && (
                <div className="space-y-5">
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-2">✨ Efeito de Animação (Scroll)</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { val: "none", label: "Nenhum" },
                          { val: "fade", label: "Fade" },
                          { val: "slide", label: "Slide Up" },
                          { val: "zoom", label: "Zoom" }
                        ].map(anim => (
                          <button
                            key={anim.val}
                            onClick={() => setAnimationStyle(anim.val as any)}
                            className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase border ${animationStyle === anim.val ? 'bg-amber-500 text-black border-amber-500' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}
                          >
                            {anim.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="w-full h-px bg-white/10 my-2"></div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-2">Tema Base</label>
                      <div className="flex gap-2">
                        {["dark", "light", "glass"].map(theme => (
                          <button
                            key={theme}
                            onClick={() => setThemeMode(theme as any)}
                            className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase border ${themeMode === theme ? 'bg-amber-500 text-black border-amber-500' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}
                          >
                            {theme === 'dark' ? 'Escuro' : theme === 'light' ? 'Claro' : 'Vidro'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-2">Tipografia (Fontes)</label>
                      <div className="flex gap-2">
                        {["modern", "serif", "mono"].map(font => (
                          <button
                            key={font}
                            onClick={() => setTypography(font as any)}
                            className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase border ${typography === font ? 'bg-amber-500 text-black border-amber-500' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}
                            style={{ fontFamily: font === 'serif' ? 'serif' : font === 'mono' ? 'monospace' : 'sans-serif' }}
                          >
                            {font === 'modern' ? 'Moderna' : font === 'serif' ? 'Clássica' : 'Tech'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-white/70 mb-2">Estilo dos Botões</label>
                      <div className="flex flex-wrap gap-2">
                        {["rounded", "square", "outline", "neon"].map(btn => (
                          <button
                            key={btn}
                            onClick={() => setButtonStyle(btn as any)}
                            className={`flex-1 min-w-[70px] py-2 rounded-lg text-[10px] font-bold uppercase border ${buttonStyle === btn ? 'bg-amber-500 text-black border-amber-500' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Seletor Customizado por Lápis / Conta-Gotas e Hex */}
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-3">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                      ✏️ Conta-Gotas & Código de Cor Personalizado (HEX)
                    </label>

                    <div className="flex items-center gap-3">
                      {/* Color Picker Native Input */}
                      <label className="relative w-12 h-12 rounded-xl border border-white/20 overflow-hidden cursor-pointer shadow-lg shrink-0 flex items-center justify-center" style={{ backgroundColor: selectedAccent }}>
                        <input
                          type="color"
                          value={selectedAccent.length === 7 ? selectedAccent : "#D97706"}
                          onChange={(e) => setCustomColorHex(e.target.value)}
                          className="w-full h-full opacity-0 cursor-pointer absolute inset-0"
                        />
                        <span className="text-sm">✏️</span>
                      </label>

                      <div className="flex-1 space-y-1">
                        <label className="block text-[10px] font-bold uppercase text-white/50">Digite a numeração Hexadecimal</label>
                        <input
                          type="text"
                          value={customColorHex}
                          onChange={(e) => setCustomColorHex(e.target.value)}
                          className="w-full bg-[#1A1F2E] border border-white/15 rounded-xl p-2.5 text-white font-mono text-xs focus:border-amber-400 outline-none"
                          placeholder="Ex: #FF5722 ou #00D9FF"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Paletas de Presets */}
                  <div className="bg-[#151926] p-4 rounded-2xl border border-white/10 space-y-3">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-white/70">
                      🎨 Paletas Rápidas Pré-Configuradas
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.entries(colorPalettes).map(([key, val]) => (
                        <button
                          key={key}
                          onClick={() => { setSelectedColor(key); setCustomColorHex(""); }}
                          className={`p-2.5 rounded-xl border transition-all flex items-center gap-2.5 ${
                            selectedColor === key && !customColorHex
                              ? "border-white bg-white/10 ring-2 ring-amber-400 font-bold"
                              : "border-white/10 bg-[#1A1F2E] hover:border-white/30 text-white/70"
                          }`}
                        >
                          <div className="w-4 h-4 rounded-full shadow-md shrink-0" style={{ backgroundColor: val.accent }} />
                          <span className="capitalize text-[11px] truncate">{key}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-[#111111] flex items-center justify-end shrink-0">
              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-6 py-2.5 bg-white hover:bg-gray-200 text-black font-bold text-xs rounded-lg shadow-lg transition-transform active:scale-95 flex items-center gap-2"
              >
                <Check size={16} />
                <span>Concluir Edição</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BANNER FIXO DE MODO DEMONSTRAÇÃO NO TOPO DA PÁGINA DEMO */}
      {isDemoMode && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black py-2.5 px-4 font-bold text-xs flex items-center justify-between shadow-2xl border-b border-black/20">
          <div className="flex items-center gap-2.5 mx-auto">
            <span className="bg-black text-amber-300 text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full font-extrabold tracking-wider border border-amber-300/30 shrink-0">
              🧪 MODO DEMONSTRAÇÃO FICTÍCIO
            </span>
            <span className="hidden sm:inline font-sans text-xs">
              Esta é uma pré-visualização de teste. O link oficial de compartilhamento com o cliente é exclusivo para assinantes.
            </span>
          </div>
          <a
            href="/prospeccao-b2b#planos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-black/90 text-amber-400 font-extrabold text-[11px] px-4 py-1.5 rounded-xl uppercase tracking-widest transition-all shrink-0 shadow-md hover:scale-105"
          >
            Garantir Licença (R$ 67/mês)
          </a>
        </div>
      )}

      {/* MARCA D'ÁGUA TRANSLÚCIDA FIXA NO CANTO DA PÁGINA */}
      {isDemoMode && (
        <div className="fixed bottom-4 left-4 z-[9999] bg-black/85 backdrop-blur-md border border-amber-500/40 text-white px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping shrink-0" />
          <span className="text-[11px] tracking-wide">🔒 PRÉVIA DE TESTE — RDG DIGITAL</span>
        </div>
      )}

      {/* MODAL DE BLOQUEIO DE COMPARTILHAMENTO DE LINK NO MODO DEMO */}
      {showDemoShareLock && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[10000] flex items-center justify-center p-4">
          <div className="bg-[#111218] border border-[#38BDF8]/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 relative shadow-2xl">
            <button
              onClick={() => setShowDemoShareLock(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 flex items-center justify-center mx-auto">
              <Lock size={28} />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full border border-[#38BDF8]/20">
                LINK DE CLIENTE BLOQUEADO
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-1">
                Adquira a Licença Oficial para Enviar aos Clientes
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                No <strong>Modo Demonstração Gratuito</strong> os links gerados são fictícios para testes. Adquira sua licença por R$ 67/mês para remover avisos de demo e gerar links limpos e profissionais!
              </p>
            </div>

            <a
              href="/prospeccao-b2b#planos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Garantir Licença (R$ 67/mês)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}




