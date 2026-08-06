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
  Square
} from "lucide-react";

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

  // Custom Editable Override States
  const [editNome, setEditNome] = useState<string>("");
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

  // Estados da IA Gratuita (Pollinations.ai) & Tela de Carregamento Futurista
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(true);
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
    let isMounted = true;
    let timer1: any, timer2: any, timer3: any, timer4: any;

    const runAiGeneration = async () => {
      setAiProgressPercent(25);
      setAiStepMessage("🧠 Analisando nicho e inteligência comercial...");

      timer1 = setTimeout(() => {
        if (!isMounted) return;
        setAiProgressPercent(55);
        setAiStepMessage("✍️ Escrevendo apresentação & copy persuasiva com IA...");
      }, 1500);

      timer2 = setTimeout(() => {
        if (!isMounted) return;
        setAiProgressPercent(85);
        setAiStepMessage("🎨 Otimizando imagens em HD & paleta de cores exclusiva...");
      }, 3000);

      timer3 = setTimeout(() => {
        if (!isMounted) return;
        setAiProgressPercent(100);
        setAiStepMessage("⚡ Finalizando estrutura do site e WhatsApp...");
      }, 4200);

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

    const randomSeed = Math.floor(Math.random() * 999999);
    
    let aiHeroPrompt = `${nome} ${displayCategory} profissional, fotografia em alta resolução, 8k`;
    let aiGalleryPrompts = [
      `${displayCategory} produto 1, fotografia profissional, 8k`,
      `${displayCategory} produto 2, detalhes e qualidade premium, 8k`,
      `${displayCategory} produto 3, ambiente e atendimento de excelência, 8k`,
      `${displayCategory} produto 4, especialidade da casa, 8k`
    ];

    if (catKey === "acai") {
      aiHeroPrompt = `delicious purple acai bowl gourmet with fresh strawberries, sliced bananas, blueberries and powdered milk, professional food photography, 8k, vibrant deep purple acai color`;
      aiGalleryPrompts = [
        `purple acai bowl topped with milk powder, strawberries and granola, top view food photography, 8k, acai berry bowl`,
        `purple acai cup in transparent cup with condensed milk, peanuts and banana toppings, acai smoothie bowl, 8k`,
        `gourmet purple acai bowl with fresh sliced strawberries, kiwi, blueberries and honey, food photography, 8k`,
        `traditional Brazilian acai bowl with paçoca, granola and sliced bananas, 8k, acai palm fruit bowl`
      ];
    } else if (catKey === "hamburgueria") {
      aiHeroPrompt = `juicy artisan gourmet burger with melted cheddar cheese, bacon and brioche bun, professional food photography, 8k`;
      aiGalleryPrompts = [
        `double smash burger with melted cheese and crispy bacon, 8k`,
        `french fries with cheddar cheese and bacon bits, 8k`,
        `creamy chocolate milkshake with whipped cream, 8k`,
        `gourmet burger set with onion rings, 8k`
      ];
    } else if (catKey === "pizzaria") {
      aiHeroPrompt = `freshly baked woodfired pizza with melted mozzarella cheese and pepperoni, food photography, 8k`;
      aiGalleryPrompts = [
        `slice of pizza being lifted with melting cheese, 8k`,
        `artisan italian pizza with basil and tomatoes, 8k`,
        `stuffed calzone pizza, 8k`,
        `sweet chocolate pizza with strawberries, 8k`
      ];
    } else if (catKey === "pastelaria") {
      aiHeroPrompt = `brazilian pastel de feira fried pastry food photography crispy delicious 8k`;
      aiGalleryPrompts = [
        `brazilian pastel de feira com caldo de cana food photography 8k`,
        `salgados coxinha kibe fried brazilian snacks food photography 8k`,
        `pastel doce chocolate morango fried pastry sweet 8k`,
        `pastelaria ambiente brazilian street food 8k`
      ];
    }

    const newAiHero = `https://image.pollinations.ai/prompt/${encodeURIComponent(aiHeroPrompt)}?width=1000&height=700&nologo=true&seed=${randomSeed}`;
    const newAiGallery = aiGalleryPrompts.map((p, i) => `https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?width=800&height=600&nologo=true&seed=${randomSeed + i + 1}`);

    setEditHeroImage(newAiHero);
    setEditGalleryImages(newAiGallery);

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

  // Aplica a cor selecionada em toda a página sobrepondo o NicheConfig base
  const config = {
    ...baseConfig,
    accentColor: currentPalette.accent,
    borderColor: currentPalette.border,
    accentText: "#FFFFFF"
  };

  const NicheIcon = config.icon;

  const isGenericCategory = !rawCategoria || ["establishment", "point_of_interest", "local_business", "store", "food", "health", "finance", "service", "gmn"].includes(rawCategoria.toLowerCase().trim());
  const displayCategory = isGenericCategory ? config.prettyCategoryName : rawCategoria;

  const defaultBusinessSummary = storedLead?.editorial_summary || search.summary || `${nome} é uma das empresas de ${displayCategory} mais prestigiadas da região de ${cidade}, destacando-se pela excelência no atendimento com nota ${rating} e ${reviews} avaliações positivas de clientes.`;
  const businessSummary = editSummary || defaultBusinessSummary;

  const sanitizePhotoUrl = (url: string) => {
    if (!url) return "";
    if (
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

  // IMPORTANT: Do not use realGooglePhotos to avoid charging the user's Google Places API billing!
  const defaultHeroImage = sanitizePhotoUrl(storedLead?.customHeroPhoto) 
    || sanitizePhotoUrl((search as any).hero_photo) 
    || config.heroFallback;
  const heroImage = sanitizePhotoUrl(editHeroImage) || defaultHeroImage;

  const defaultGalleryImages = (storedLead?.customGalleryPhotos && storedLead.customGalleryPhotos.length > 0)
    ? storedLead.customGalleryPhotos.map(sanitizePhotoUrl).filter(Boolean)
    : config.galleryFallback;
  const galleryImages = (editGalleryImages.length > 0 ? editGalleryImages.map(sanitizePhotoUrl).filter(Boolean) : defaultGalleryImages);


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

  const isLight = themeMode === "light";
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
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 relative ${typography === 'serif' ? 'font-serif' : typography === 'mono' ? 'font-mono' : 'font-sans'} ${isGlass ? 'backdrop-blur-xl' : ''}`}
      style={{
        backgroundColor: effectiveBg,
        color: effectiveText,
      }}
    >
      {/* OVERLAY FUTURISTA DE CARREGAMENTO COM IA GRATUITA (POLLINATIONS) */}
      {isGeneratingAi && (
        <div className="fixed inset-0 z-[100] bg-[#07090E] flex flex-col items-center justify-center p-6 text-center select-none backdrop-blur-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-md w-full bg-[#111625]/90 border border-white/15 p-8 rounded-3xl shadow-2xl space-y-6 backdrop-blur-md">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500 to-purple-600 animate-ping opacity-25" />
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-purple-600 p-0.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0E17] rounded-[14px] flex items-center justify-center">
                  <Sparkles size={32} className="text-amber-400 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                RDG AI Engine (Grátis)
              </span>
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                Gerando Prévia Profissional
              </h2>
              <p className="text-xs text-white/70 font-medium min-h-[36px] flex items-center justify-center transition-all">
                {aiStepMessage}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-purple-500 rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                  style={{ width: `${aiProgressPercent}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-white/50 px-1">
                <span>INTELIGÊNCIA DE NICHO</span>
                <span className="font-bold text-amber-400">{aiProgressPercent}%</span>
              </div>
            </div>

            <button
              onClick={() => setIsGeneratingAi(false)}
              className="text-[11px] font-bold text-white/40 hover:text-white transition-colors underline underline-offset-4 pt-2"
            >
              Pular aguardo & abrir prévia agora ⚡
            </button>
          </div>
        </div>
      )}

      {/* TOP CONTROL BAR DE DEMONSTRAÇÃO E FERRAMENTAS DO PROSPECTOR */}
      {search.mode !== "view" && (
      <div
        className="p-2 sm:p-2.5 px-3 sm:px-4 text-xs font-bold flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 shadow-xl sticky top-0 z-50 transition-colors border-b"
        style={{
          backgroundColor: "#0B0E17",
          color: "#FAFAFA",
          borderColor: currentPalette.border,
        }}
      >
        {/* Linha 1 no mobile: Nome + Cores */}
        <div className="flex items-center justify-between gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 truncate">
            <Sparkles size={13} className="animate-pulse shrink-0" style={{ color: currentPalette.accent }} />
            <span className="truncate text-[11px] sm:text-xs">
              PRÉVIA: <strong style={{ color: currentPalette.accent }}>{nome.toUpperCase()}</strong>
            </span>
          </div>

          {/* Seletor de Cores */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 shrink-0">
            <span className="text-[9px] text-white/50 px-1 font-mono uppercase hidden sm:inline">Cor:</span>
            {Object.entries(colorPalettes).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setSelectedColor(key)}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-transform ${selectedColor === key ? "scale-125 ring-2 ring-white" : "hover:scale-110 opacity-70"}`}
                style={{ backgroundColor: val.accent }}
                title={`Trocar cor para ${key}`}
              />
            ))}
          </div>
        </div>

        {/* Linha 2 no mobile: Botões de Ação Scrolláveis Horizontalmente sem Quebra */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-none w-full sm:w-auto justify-start sm:justify-end">
          {/* Botão para Gerar/Melhorar com IA Gratuita */}
          <button
            onClick={handleRegenerateWithAi}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center gap-1 bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 shrink-0"
            title="Reescrever textos e melhorar o site com IA Gratuita (Pollinations)"
          >
            <Sparkles size={12} className="text-purple-300 animate-pulse" />
            <span>✨ Re-gerar com IA</span>
          </button>

          {/* Botão de Edição e Personalização Completa */}
          <button
            onClick={() => setIsEditorOpen(true)}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-extrabold transition-all flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 active:scale-95 shrink-0"
            title="Abrir painel para editar textos, fotos, serviços e dados do site"
          >
            <Edit3 size={12} />
            <span>✏️ Editar <span className="hidden sm:inline">Site / Fotos</span></span>
          </button>

          {/* Salvar nas Minhas Prévias */}
          <button
            onClick={handleSavePreviewLocally}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center gap-1 border shrink-0 ${
              isSavedLocally
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-white/10 hover:bg-white/20 text-white border-white/15"
            }`}
          >
            <span>{isSavedLocally ? "✓ Salvo" : "💾 Salvar"}</span>
          </button>

          {/* Copiar Prompt para RDG AI */}
          <button
            onClick={handleCopyRdgAiPrompt}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center gap-1 border shrink-0 ${
              copiedPrompt
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border-purple-500/40"
            }`}
          >
            <span>{copiedPrompt ? "✓ Copiado!" : "📋 Prompt AI"}</span>
          </button>

          {/* Compartilhar Link da Prévia */}
          <button
            onClick={handleSharePreview}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center gap-1 border shrink-0 ${
              copiedLink
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border-blue-500/40"
            }`}
            title="Copiar link com as configurações para enviar ao cliente"
          >
            <span>{copiedLink ? "✓ Link Copiado!" : "🔗 Compartilhar"}</span>
          </button>

          {/* Baixar Site HTML5 */}
          <button
            onClick={handleDownloadHtml5}
            className="px-2.5 sm:px-3.5 py-1.5 font-extrabold rounded-lg transition-all text-[10px] sm:text-[11px] flex items-center gap-1 shadow-lg shadow-emerald-600/20 bg-emerald-600 hover:bg-emerald-500 text-white shrink-0"
          >
            <span>📥 HTML5</span>
          </button>
        </div>
      </div>
      )}

      {/* Main Header Estilo Personalizado por Nicho */}
      <header
        className="backdrop-blur-md border-b px-5 sm:px-8 h-20 flex items-center justify-between sticky top-11 z-40 transition-colors"
        style={{
          backgroundColor: "rgba(11, 15, 24, 0.92)",
          borderColor: config.borderColor,
        }}
      >
        <div className="flex items-center gap-3">
          {logoImage ? (
            <img src={logoImage} alt={nome} className="h-10 sm:h-12 object-contain" />
          ) : (
            <>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-xl shadow-lg"
                style={{ background: config.accentColor, color: config.accentText }}
              >
                <NicheIcon size={22} />
              </div>
              <div>
                <h2 className="font-bold text-xl tracking-wider uppercase">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver localização"
                    className="hover:underline flex items-center gap-1.5"
                    style={{
                      fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      color: config.textColor,
                    }}
                  >
                    <span>{nome}</span>
                  </a>
                </h2>
                <p className="text-[10px] uppercase tracking-[0.25em] font-mono" style={{ color: config.mutedTextColor }}>
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

        <div className="flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all shadow-xl flex items-center gap-2"
            style={getButtonStyle()}
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">
              {editBtnHeaderText || "Falar no WhatsApp"}
            </span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      {visibleSections.hero && (
      <AnimatedSection id="hero" animation={animationStyle} className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10" style={{ background: config.accentColor }} />
              <span 
                contentEditable 
                suppressContentEditableWarning
                onBlur={(e) => setEditTagline(e.currentTarget.innerText)}
                className="text-xs font-bold uppercase tracking-[0.35em] outline-none hover:ring-2 ring-white/20 rounded-md px-1 -mx-1" 
                style={{ color: config.accentColor }}
              >
                {heroTagline}
              </span>
            </div>

            <h1
              contentEditable 
              suppressContentEditableWarning
              onBlur={(e) => setEditNome(e.currentTarget.innerText)}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight outline-none hover:ring-2 ring-white/20 rounded-xl px-2 -mx-2 transition-all"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              {nome} <span className="italic" style={{ color: config.accentColor }}>{cidade}.</span>
            </h1>

            <p 
              contentEditable 
              suppressContentEditableWarning
              onBlur={(e) => setEditSummary(e.currentTarget.innerText)}
              className="text-base sm:text-lg max-w-xl leading-relaxed font-normal outline-none hover:ring-2 ring-white/20 rounded-xl px-2 -mx-2 transition-all" 
              style={{ color: config.mutedTextColor }}
            >
              {businessSummary}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-105 shadow-2xl"
                style={getButtonStyle()}
              >
                <MessageCircle size={18} />
                <span>
                  {editBtnHeroText || "Agendar Atendimento"}
                </span>
              </a>

              <a
                href="#servicos"
                className="group flex items-center gap-3 transition-colors"
                style={{ color: config.textColor }}
              >
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center border transition-transform group-hover:scale-105"
                  style={{ borderColor: config.accentColor, color: config.accentColor }}
                >
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Ver Especialidades</span>
              </a>
            </div>

            {/* Contador de Métricas Reais */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t" style={{ borderColor: config.borderColor }}>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: config.mutedTextColor }}>
                  Avaliação Média
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl sm:text-3xl font-bold hover:underline"
                  style={{
                    color: config.accentColor,
                    fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  }}
                >
                  ⭐ {rating}
                </a>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: config.mutedTextColor }}>
                  Total de Reviews
                </div>
                <span
                  className="block text-2xl sm:text-3xl font-bold"
                  style={{
                    color: config.accentColor,
                    fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  }}
                >
                  {reviews}+
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: config.mutedTextColor }}>
                  Pontualidade
                </div>
                <span
                  className="block text-2xl sm:text-3xl font-bold"
                  style={{
                    color: config.accentColor,
                    fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  }}
                >
                  100%
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: config.mutedTextColor }}>
                  Localização
                </div>
                <span
                  className="block text-sm font-bold truncate pt-1"
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
              className="relative w-full h-[460px] sm:h-[540px] overflow-hidden shadow-2xl rounded-2xl border flex items-center justify-center p-2"
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
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-80"
              style={{ color: config.accentColor }}
            >
              <span>
                {editBtnServiceText || "Solicitar Atendimento"}
              </span>
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
                onBlur={(e) => setEditNome(e.currentTarget.innerText.replace(/^Espaço & Galeria de\s*/i, "").replace(/\.$/, ""))}
                className="text-4xl sm:text-5xl font-bold outline-none hover:ring-2 ring-white/20 rounded-xl px-1 transition-all cursor-text"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                Espaço & Galeria de {nome}.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((imgUrl, i) => (
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
                className="inline-flex items-center gap-2 px-6 py-3 font-black uppercase tracking-[0.18em] transition-all shadow-xl"
                style={getButtonStyle()}
              >
                <MessageCircle size={16} />
                <span>{editBtnFooterText || "Falar no WhatsApp"}</span>
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
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-sm transition-all animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#0F121C] text-white h-full flex flex-col border-l border-white/15 shadow-2xl overflow-hidden">
            {/* Drawer Header */}
            <div className="p-4 px-5 border-b border-white/10 flex items-center justify-between bg-[#151926]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Edit3 size={16} />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">Editar & Personalizar Prévia</h3>
                  <p className="text-[10px] text-white/50">Edite textos, fotos e serviços em tempo real</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                title="Fechar painel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Tabs Header */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-white/10 bg-[#0B0D14] p-1.5 gap-1 shrink-0">
              <button
                onClick={() => setActiveEditorTab("layout")}
                className={`flex-none px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "layout"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutTemplate size={13} />
                <span>Layout</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("design")}
                className={`flex-none px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "design"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Palette size={13} />
                <span>Design</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("textos")}
                className={`flex-none px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "textos"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <FileText size={13} />
                <span>Textos</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("imagens")}
                className={`flex-none px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "imagens"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Image size={13} />
                <span>Fotos</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("servicos")}
                className={`flex-none px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "servicos"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Sliders size={13} />
                <span>Serviços</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("cardapio")}
                className={`flex-none px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "cardapio"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Grid3x3 size={13} />
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

            {/* Drawer Footer */}
            <div className="p-4 px-5 border-t border-white/10 bg-[#151926] flex items-center justify-between gap-3">
              <button
                onClick={handleResetCustomizations}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white/60 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
              >
                <RotateCcw size={14} />
                <span>Resetar Edições</span>
              </button>

              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-1.5"
              >
                <Check size={15} />
                <span>Salvar & Ver Prévia</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

