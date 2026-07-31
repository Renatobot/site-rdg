import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Phone,
  MapPin,
  Star,
  MessageCircle,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Award,
  Users,
  ArrowUpRight,
  Sparkles,
  Scissors,
  Building2,
  Stethoscope,
  Sparkle,
  Scale,
  Utensils,
  Camera,
  Play,
  Dog,
  Palette
} from "lucide-react";

const TITLE = "Demonstração de Website — RDG Digital";
const DESCRIPTION = "Página de demonstração de site de alta conversão para empresas locais.";
const CANONICAL_URL = `${BASE_URL}/demo`;

export interface DemoSearchParams {
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
}

export const Route = createFileRoute("/demo")({
  validateSearch: (search: Record<string, unknown>): DemoSearchParams => {
    return {
      nome: typeof search.nome === "string" ? search.nome : typeof search.cliente === "string" ? search.cliente : "Navalha & Co.",
      categoria: typeof search.categoria === "string" ? search.categoria : "Barbearia",
      cidade: typeof search.cidade === "string" ? search.cidade : "São Paulo - SP",
      endereco: typeof search.endereco === "string" ? search.endereco : "Rua Augusta, 1500 - Consolação, São Paulo - SP",
      phone: typeof search.phone === "string" ? search.phone : typeof search.telefone === "string" ? search.telefone : "+55 11 98888-7777",
      raw_phone: typeof search.raw_phone === "string" ? search.raw_phone : "",
      rating: typeof search.rating === "string" ? search.rating : "5.0",
      reviews: typeof search.reviews === "string" ? search.reviews : "340",
      photos: typeof search.photos === "string" ? search.photos : "",
    };
  },
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: FullSiteDemoPage,
});

// Temas e Estilos Customizados por Nicho (Light vs Dark, Paletas Únicas e Tipografia)
interface NicheConfig {
  isDark: boolean;
  bgColor: string;
  surfaceColor: string;
  cardBg: string;
  textColor: string;
  mutedTextColor: string;
  borderColor: string;
  accentColor: string;
  accentText: string;
  fontSerif: boolean;
  heroTagline: string;
  titleSpan: string;
  titleSuffix: string;
  desc: string;
  icon: any;
  heroFallback: string;
  galleryFallback: string[];
  services: { title: string; desc: string; price: string }[];
  stats: { label: string; value: string }[];
}

const NICHE_CONFIGS: Record<string, NicheConfig> = {
  // BARBEARIA (Dark, Gold, Classy Serif)
  barbearia: {
    isDark: true,
    bgColor: "#0F0F0F",
    surfaceColor: "#161616",
    cardBg: "#1A1A1A",
    textColor: "#F5F5F5",
    mutedTextColor: "#9CA3AF",
    borderColor: "rgba(255, 255, 255, 0.1)",
    accentColor: "#C5A059",
    accentText: "#0F0F0F",
    fontSerif: true,
    heroTagline: "Estilo & Tradição · desde 2014",
    titleSpan: "Barbearia",
    titleSuffix: "Premium.",
    desc: "Redefinindo o cuidado masculino com técnicas clássicas, atmosfera exclusiva e uma equipe apaixonada pelo detalhe.",
    icon: Scissors,
    heroFallback: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Corte Clássico & Fade", desc: "Corte na tesoura e máquina, finalizado com lavagem especial e styling.", price: "R$ 55" },
      { title: "Barba com Toalha Quente", desc: "Modelagem com navalha, óleos essenciais e protocolo relaxante com toalha quente.", price: "R$ 45" },
      { title: "Combo Grooming VIP", desc: "Corte completo + Barba na navalha + Sobrancelha + Bebida cortesia.", price: "R$ 90" },
      { title: "Pigmentação & Camuflagem", desc: "Disfarce natural de falhas e alinhamento de fios com alta precisão.", price: "R$ 65" },
      { title: "Tratamento Capilar & Scalp", desc: "Esfoliação de couro cabeludo, hidratação profunda e prevenção de queda.", price: "R$ 70" },
      { title: "Corte Infantil Especial", desc: "Atendimento com paciência, técnica e experiência divertida para o pequeno.", price: "R$ 40" }
    ],
    stats: [
      { label: "Anos de Tradição", value: "10+" },
      { label: "Clientes Atendidos", value: "15k+" },
      { label: "Nota Google Maps", value: "5.0" },
      { label: "Especialistas", value: "6" }
    ]
  },

  // ODONTOLOGIA & CLÍNICAS (Clean Light, Medical Cyan, Modern Sans)
  odontologia: {
    isDark: false,
    bgColor: "#F8FAFC",
    surfaceColor: "#FFFFFF",
    cardBg: "#FFFFFF",
    textColor: "#0F172A",
    mutedTextColor: "#475569",
    borderColor: "rgba(15, 23, 42, 0.08)",
    accentColor: "#0284C7", // Azul Oceano Clean
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Odontologia Digital & Estética Humanizada",
    titleSpan: "Sorrisos",
    titleSuffix: "Radiantes.",
    desc: "Tecnologia de ponta, alinhadores invisíveis e procedimentos indolores em um ambiente aconchegante projetado para você.",
    icon: Stethoscope,
    heroFallback: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Alinhadores Invisíveis 3D", desc: "Correção ortodôntica ultradiscreta, rápida e sem fios metálicos incômodos.", price: "Sob Consulta" },
      { title: "Clareamento Dental Laser", desc: "Dentes visivelmente mais brancos e brilhantes com tecnologia sem sensibilidade.", price: "R$ 390" },
      { title: "Lentes de Contato em Porcelana", desc: "Harmonização de formato e cor dos dentes com lâminas cerâmicas de alta resistência.", price: "Sob Consulta" },
      { title: "Implantes & Carga Imediata", desc: "Recupere dentes perdidos com estabilidade e estética totalmente natural.", price: "Sob Consulta" },
      { title: "Limpeza Preventiva & Profilaxia", desc: "Remoção de placa, jato purificador e polimento dental com aplicação de flúor.", price: "R$ 180" },
      { title: "Check-up Pré-operatório & Raio-X", desc: "Avaliação intraoral completa com scanner digital 3D sem moldagens de massa.", price: "R$ 150" }
    ],
    stats: [
      { label: "Pacientes Atendidos", value: "8.5k+" },
      { label: "Aprovação Google", value: "5.0" },
      { label: "Scanner 3D", value: "100%" },
      { label: "Doutores Especialistas", value: "5" }
    ]
  },

  // ESTÉTICA & SPA (Soft Nude Rose Gold, Warm Elegance)
  estetica: {
    isDark: false,
    bgColor: "#FAF7F2",
    surfaceColor: "#FFFFFF",
    cardBg: "#FFFFFF",
    textColor: "#2B2625",
    mutedTextColor: "#6E6562",
    borderColor: "rgba(43, 38, 37, 0.08)",
    accentColor: "#C58882", // Rose Gold Sofisticado
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Beleza Natural & Rejuvenescimento",
    titleSpan: "Estética",
    titleSuffix: "Exclusiva.",
    desc: "Protocolos faciais e corporais avançados desenhados para desacelerar o tempo e realçar sua beleza com naturalidade.",
    icon: Sparkle,
    heroFallback: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Harmonização Facial & Botox", desc: "Suavização de linhas de expressão e preenchimento labial com contornos delicados.", price: "Sob Consulta" },
      { title: "Limpeza de Pele Ouro 24k", desc: "Esfoliação biológica, extração indolor e hidratação profunda com ativos nobres.", price: "R$ 230" },
      { title: "Drenagem Linfática & SPA", desc: "Massagem corporal desintoxicante para eliminação de retenção e relaxamento profundo.", price: "R$ 170" },
      { title: "Criolipólise & Lipo Sem Cortes", desc: "Redução de medidas e eliminação de gordura localizada com congelamento preciso.", price: "R$ 290" },
      { title: "Depilação a Laser Indolor", desc: "Pele macia e livre de pelos com tecnologia de resfriamento constante.", price: "A partir de R$ 99" }
    ],
    stats: [
      { label: "Procedimentos", value: "14k+" },
      { label: "Satisfação dos Clientes", value: "99.4%" },
      { label: "Avaliação Google", value: "4.9" },
      { label: "Especialistas", value: "6" }
    ]
  },

  // PET SHOP & VETERINÁRIA (Light Warm, Friendly Coral & Emerald)
  petshop: {
    isDark: false,
    bgColor: "#FFFBF5",
    surfaceColor: "#FFFFFF",
    cardBg: "#FFFFFF",
    textColor: "#1C1917",
    mutedTextColor: "#57534E",
    borderColor: "rgba(28, 25, 23, 0.08)",
    accentColor: "#F97316", // Coral Amigável
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Carinho & Saúde para seu Melhor Amigo",
    titleSpan: "Cuidado",
    titleSuffix: "Especial de Pet.",
    desc: "Banho & tosa humanizado, consultas veterinárias preventivas e produtos selecionados para a felicidade do seu filhote.",
    icon: Dog,
    heroFallback: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Banho & Tosa Spa Humanizado", desc: "Shampoo hipoalergênico, secagem silenciosa e hidratação sem estresse pro pet.", price: "A partir de R$ 65" },
      { title: "Consulta Veterinária Geral", desc: "Exame clínico preventivo, auscultação e acompanhamento de saúde contínuo.", price: "R$ 150" },
      { title: "Vacinação Importada & Vermifugação", desc: "Protocolo completo de imunização com vacinas éticas mantidas sob refrigeração rígida.", price: "R$ 90" },
      { title: "Tosa de Raça & Tesoura", desc: "Acabamento artesanal respeitando os padrões de beleza da raça do seu cão.", price: "R$ 95" }
    ],
    stats: [
      { label: "Pets Atendidos", value: "6.2k+" },
      { label: "Amor & Carinho", value: "100%" },
      { label: "Nota no Google", value: "5.0" },
      { label: "Vets de Plantão", value: "3" }
    ]
  },

  // TATUAGEM & PIERCING (Dark Gothic, Crimson Red)
  tatuagem: {
    isDark: true,
    bgColor: "#0A0A0A",
    surfaceColor: "#121212",
    cardBg: "#171717",
    textColor: "#FAFAFA",
    mutedTextColor: "#A3A3A3",
    borderColor: "rgba(255, 255, 255, 0.12)",
    accentColor: "#E63946", // Vermelho Carmim Autêntico
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Arte na Pele & Biossegurança Absoluta",
    titleSpan: "Studio de",
    titleSuffix: "Tattoo.",
    desc: "Tatuagens autorais, traços finos, cobertura de cicatrizes e body piercing com materiais 100% descartáveis e esterilizados.",
    icon: Palette,
    heroFallback: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590201844898-1e4a52003c4f?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Tatuagem Autoral Fine Line", desc: "Traços ultrafinos, sombras suaves e projetos exclusivos desenvolvidos sob medida.", price: "Sob Orçamento" },
      { title: "Cover-Up (Cobertura de Tattoo)", desc: "Transforme tatuagens antigas ou cicatrizes em obras de arte renovadas.", price: "Sob Orçamento" },
      { title: "Body Piercing & Joalheria Titânio", desc: "Perfurações com agulha americana cateter e joias biomédicas de titânio F136.", price: "A partir de R$ 90" }
    ],
    stats: [
      { label: "Tattoos Aplicadas", value: "9k+" },
      { label: "Biossegurança", value: "100%" },
      { label: "Nota Google Maps", value: "5.0" },
      { label: "Tatuadores Residentes", value: "4" }
    ]
  },

  // ADVOCACIA & CONSULTORIA JURÍDICA (Deep Imperial Navy, Gold)
  advocacia: {
    isDark: true,
    bgColor: "#0B132B", // Navy Imperial Profundo
    surfaceColor: "#1C2541",
    cardBg: "#1C2541",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(255, 255, 255, 0.12)",
    accentColor: "#D4AF37", // Ouro Jurídico
    accentText: "#0B132B",
    fontSerif: true,
    heroTagline: "Direito Estratégico & Blindagem Patrimonial",
    titleSpan: "Advocacia",
    titleSuffix: "Especializada.",
    desc: "Atuação jurídica rigorosa e ágil para resguardar seus direitos, contornar riscos e defender seu patrimônio com discrição.",
    icon: Scale,
    heroFallback: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Direito Empresarial & Contratos", desc: "Consultoria preventiva, elaboração de acordos societários e proteção jurídica de marcas.", price: "Sob Consulta" },
      { title: "Direito Trabalhista & Previdência", desc: "Defesa técnica contra passivos corporativos e requerimentos ágeis de aposentadorias.", price: "Sob Consulta" },
      { title: "Direito de Família & Sucessões", desc: "Inventários extrajudiciais rápidos, partilhas de bens e planejamento de holdings.", price: "Sob Consulta" },
      { title: "Direito Cível & Imobiliário", desc: "Ações de usucapião, rescisões contratuais e indenizações de alto valor.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Êxito nos Casos", value: "95%" },
      { label: "Anos de Mercado", value: "16+" },
      { label: "Avaliação Google", value: "5.0" },
      { label: "Advogados Sênior", value: "7" }
    ]
  },

  // IMOBILIÁRIA (Clean Executive Light, Slate Navy & Bronze)
  imobiliaria: {
    isDark: false,
    bgColor: "#F8FAFC",
    surfaceColor: "#FFFFFF",
    cardBg: "#FFFFFF",
    textColor: "#0F172A",
    mutedTextColor: "#475569",
    borderColor: "rgba(15, 23, 42, 0.08)",
    accentColor: "#D97706", // Âmbar Bronze
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Imóveis de Alto Padrão & Oportunidades",
    titleSpan: "Soluções",
    titleSuffix: "Imobiliárias.",
    desc: "Compra, venda e administração de aluguéis com vistoria rigorosa e assessoria de financiamento do início ao fim.",
    icon: Building2,
    heroFallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Curadoria de Venda de Imóveis", desc: "Casas em condomínio e apartamentos com documentação juridicamente aprovada.", price: "Sob Consulta" },
      { title: "Gestão de Locação com Garantia", desc: "Administração sem dor de cabeça com garantia pontual do valor do aluguel.", price: "Sob Consulta" },
      { title: "Avaliação Mercadológica Técnica", desc: "Laudos precisos de preço justo de venda para inventários e investidores.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Imóveis Vendidos", value: "3k+" },
      { label: "Contratos de Aluguel", value: "100%" },
      { label: "Nota Google Maps", value: "4.9" },
      { label: "Corretores CRECI", value: "14" }
    ]
  },

  // FALLBACK GERAL (Clean Executive)
  default: {
    isDark: false,
    bgColor: "#F8FAFC",
    surfaceColor: "#FFFFFF",
    cardBg: "#FFFFFF",
    textColor: "#0F172A",
    mutedTextColor: "#475569",
    borderColor: "rgba(15, 23, 42, 0.08)",
    accentColor: "#0284C7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Atendimento VIP & Infraestrutura Completa",
    titleSpan: "Empresa",
    titleSuffix: "Referência.",
    desc: "Compromisso com a satisfação do cliente, agilidade no atendimento e estrutura moderna preparada para te receber.",
    icon: Sparkles,
    heroFallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744801-30d009c534a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Atendimento Sob Medida", desc: "Soluções completas desenhadas exatamente para atender sua necessidade.", price: "Sob Consulta" },
      { title: "Agendamento Prático", desc: "Reserve seu horário de forma rápida pelo WhatsApp com flexibilidade.", price: "Sob Consulta" },
      { title: "Garantia de Qualidade", desc: "Excelência comprovada e compromisso com os melhores resultados.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Clientes Atendidos", value: "5k+" },
      { label: "Nota Google Maps", value: "5.0" },
      { label: "Pontualidade", value: "100%" },
      { label: "Equipe Qualificada", value: "5" }
    ]
  }
};

function FullSiteDemoPage() {
  const search = Route.useSearch();

  const nome = search.nome || search.cliente || "Navalha & Co.";
  const categoria = search.categoria || "Barbearia";
  const cidade = search.cidade || "São Paulo - SP";
  const endereco = search.endereco || `Rua Principal, 1500 - ${cidade}`;
  const phone = search.phone || search.telefone || "+55 11 98888-7777";
  const rawPhone = (search.raw_phone || phone).replace(/\D/g, "");
  const waNum = rawPhone.length > 5 ? (rawPhone.startsWith("55") ? rawPhone : `55${rawPhone}`) : "5511988887777";
  const rating = search.rating || "5.0";
  const reviews = search.reviews || "340";

  // Parse de fotos reais capturadas do perfil do Google Maps
  let realGooglePhotos: string[] = [];
  if (search.photos) {
    try {
      const parsed = JSON.parse(search.photos);
      if (Array.isArray(parsed) && parsed.length > 0) {
        realGooglePhotos = parsed;
      }
    } catch (e) {
      console.error("Erro ao ler fotos do Google Maps:", e);
    }
  }

  const defaultMsg = encodeURIComponent(`Olá! Vi o site oficial da *${nome}* em ${cidade} e gostaria de agendar um atendimento.`);
  const waUrl = `https://wa.me/${waNum}?text=${defaultMsg}`;

  // Seleção de Nicho com Mapeamento Inteligente de Palavras-Chave
  const lowerCat = categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  let catKey = "default";
  if (lowerCat.includes("barbea") || lowerCat.includes("cabel") || lowerCat.includes("barber")) {
    catKey = "barbearia";
  } else if (lowerCat.includes("odonto") || lowerCat.includes("denti") || lowerCat.includes("sorriso") || lowerCat.includes("ortodon")) {
    catKey = "odontologia";
  } else if (lowerCat.includes("estetic") || lowerCat.includes("spa") || lowerCat.includes("beleza") || lowerCat.includes("harmoniz")) {
    catKey = "estetica";
  } else if (lowerCat.includes("pet") || lowerCat.includes("vet") || lowerCat.includes("animal") || lowerCat.includes("canin")) {
    catKey = "petshop";
  } else if (lowerCat.includes("tatuag") || lowerCat.includes("tattoo") || lowerCat.includes("piercing")) {
    catKey = "tatuagem";
  } else if (lowerCat.includes("advoc") || lowerCat.includes("direit") || lowerCat.includes("jurid")) {
    catKey = "advocacia";
  } else if (lowerCat.includes("imobil") || lowerCat.includes("corret") || lowerCat.includes("imovel")) {
    catKey = "imobiliaria";
  }

  const config = NICHE_CONFIGS[catKey] || NICHE_CONFIGS["default"];
  const NicheIcon = config.icon;

  // Priorizar Fotos Reais do Google Maps se disponíveis!
  const heroImage = realGooglePhotos.length > 0 ? realGooglePhotos[0] : config.heroFallback;
  const galleryImages = realGooglePhotos.length > 1 ? realGooglePhotos.slice(1, 7) : config.galleryFallback;

  return (
    <div
      className="min-h-screen flex flex-col font-sans transition-colors duration-300"
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
      }}
    >
      {/* Top Banner de Demonstração Interativa */}
      <div
        className="p-3 text-center text-xs font-bold flex items-center justify-center gap-2 shadow-md sticky top-0 z-50 transition-colors"
        style={{
          backgroundColor: config.isDark ? "#161616" : "#E2E8F0",
          color: config.textColor,
          borderBottom: `1px solid ${config.borderColor}`,
        }}
      >
        <Sparkles size={14} className="animate-pulse" style={{ color: config.accentColor }} />
        <span>PÁGINA DEMO CRIADA EXCLUSIVAMENTE PARA <strong style={{ color: config.accentColor }}>{nome.toUpperCase()}</strong></span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 px-3 py-1.5 font-extrabold rounded-lg transition-all text-[11px] inline-flex items-center gap-1 shadow"
          style={{
            backgroundColor: config.accentColor,
            color: config.accentText,
          }}
        >
          <span>Agendar no WhatsApp</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Main Header Estilo Personalizado por Nicho */}
      <header
        className="backdrop-blur-md border-b px-5 sm:px-8 h-20 flex items-center justify-between sticky top-11 z-40 transition-colors"
        style={{
          backgroundColor: config.isDark ? "rgba(15, 15, 15, 0.9)" : "rgba(255, 255, 255, 0.9)",
          borderColor: config.borderColor,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-xl shadow-lg"
            style={{ background: config.accentColor, color: config.accentText }}
          >
            <NicheIcon size={22} />
          </div>
          <div>
            <h2
              className="font-bold text-xl tracking-wider uppercase"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              {nome}
            </h2>
            <p className="text-[10px] uppercase tracking-[0.25em] font-mono" style={{ color: config.mutedTextColor }}>
              {categoria} • {cidade}
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: config.mutedTextColor }}>
          <a href="#servicos" className="hover:opacity-100 transition-opacity">Serviços</a>
          <a href="#galeria" className="hover:opacity-100 transition-opacity">Galeria</a>
          <a href="#depoimentos" className="hover:opacity-100 transition-opacity">Avaliações</a>
          <a href="#localizacao" className="hover:opacity-100 transition-opacity">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-xl rounded-xl flex items-center gap-2"
            style={{ background: config.accentColor, color: config.accentText }}
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Falar com Atendimento</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION - ADAPTADA PARA LIGHT OU DARK ACCENT */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Textos & Botões */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10" style={{ background: config.accentColor }} />
              <span className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                {config.heroTagline}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              {config.titleSpan}{" "}
              <span className="italic" style={{ color: config.accentColor }}>
                {config.titleSuffix}
              </span>
            </h1>

            <p className="text-base sm:text-lg max-w-xl leading-relaxed font-normal" style={{ color: config.mutedTextColor }}>
              {config.desc}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-105 shadow-2xl rounded-xl"
                style={{ background: config.accentColor, color: config.accentText }}
              >
                <MessageCircle size={18} />
                <span>Agendar Horário no WhatsApp</span>
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
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Ver Serviços</span>
              </a>
            </div>

            {/* Contador de Métricas */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t" style={{ borderColor: config.borderColor }}>
              {config.stats.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: config.mutedTextColor }}>
                    {st.label}
                  </div>
                  <span
                    className="block text-2xl sm:text-3xl font-bold"
                    style={{
                      color: config.accentColor,
                      fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                    }}
                  >
                    {st.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Imagem Principal 4:5 */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-2xl border"
              style={{
                borderColor: config.borderColor,
                backgroundColor: config.surfaceColor,
              }}
            >
              <img
                src={heroImage}
                alt={nome}
                className="w-full h-full object-cover transition duration-700 hover:scale-105 filter brightness-95"
              />

              {/* Card Flutuante de Horário */}
              <div
                className="absolute bottom-5 left-5 right-5 p-4 shadow-2xl backdrop-blur-md rounded-xl border border-l-4"
                style={{
                  backgroundColor: config.isDark ? "rgba(22, 22, 22, 0.85)" : "rgba(255, 255, 255, 0.85)",
                  borderColor: config.borderColor,
                  borderLeftColor: config.accentColor,
                  color: config.textColor,
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ color: config.accentColor }}>
                  Próximo Horário Disponível
                </div>
                <div className="text-lg font-serif italic" style={{ fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit" }}>
                  Hoje, às 17:30
                </div>
              </div>

              {/* Badge de Fotos Reais do Google */}
              {realGooglePhotos.length > 0 && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg bg-black/80 text-white border border-white/20">
                  <Camera size={14} style={{ color: config.accentColor }} />
                  <span className="text-[11px]">Foto Real do Google</span>
                </div>
              )}

              {/* Badge de Nota Google */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-lg bg-white text-black border border-black/10">
                <span className="text-blue-600 font-black">G</span>
                <span>{rating}</span>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CARDÁPIO DE SERVIÇOS */}
      <section
        id="servicos"
        className="py-20 border-t px-5 sm:px-8 transition-colors"
        style={{
          backgroundColor: config.surfaceColor,
          borderColor: config.borderColor,
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                Catálogo de Serviços
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                Nossos Serviços.
              </h2>
              <p className="text-sm" style={{ color: config.mutedTextColor }}>
                Confira os procedimentos oferecidos e agende com atendimento prioritário no WhatsApp.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-80"
              style={{ color: config.accentColor }}
            >
              <span>Consultar / Agendar</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((srv, idx) => (
              <div
                key={idx}
                className="group p-8 transition backdrop-blur-sm rounded-2xl flex flex-col justify-between border"
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
                      className="text-xl font-bold"
                      style={{
                        color: config.accentColor,
                        fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      }}
                    >
                      {srv.price}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold"
                    style={{
                      fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      color: config.textColor,
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p className="text-xs leading-relaxed" style={{ color: config.mutedTextColor }}>
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
      </section>

      {/* GALERIA DE FOTOS */}
      <section id="galeria" className="py-20 border-t px-5 sm:px-8" style={{ borderColor: config.borderColor }}>
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                Portfólio & Espaço
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                Nosso Trabalho em {cidade}.
              </h2>
            </div>

            {realGooglePhotos.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-600 border border-emerald-500/30">
                <Camera size={14} />
                <span>Exibindo Fotos Reais do Google Maps</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((imgUrl, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl aspect-square border relative" style={{ borderColor: config.borderColor }}>
                <img
                  src={imgUrl}
                  alt={`${nome} galeria ${i + 1}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS REALISTAS DO GOOGLE */}
      <section
        id="depoimentos"
        className="py-20 border-t px-5 sm:px-8 transition-colors"
        style={{
          backgroundColor: config.surfaceColor,
          borderColor: config.borderColor,
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
              Depoimentos Verificados
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              Quem Passa, Aprova.
            </h2>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border"
              style={{
                backgroundColor: config.cardBg,
                borderColor: config.borderColor,
                color: config.textColor,
              }}
            >
              <span className="font-bold text-blue-600">G</span>
              <span>Google Maps · {rating} / 5.0</span>
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span style={{ color: config.mutedTextColor }}>({reviews} avaliações)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rafael M.",
                desc: "Cliente Fiel",
                comment: `Atendimento impecável da equipe da ${nome}! Estrutura muito limpa, moderna e resultados incríveis.`
              },
              {
                name: "Mariana Costa",
                desc: "Avaliação Google Maps",
                comment: `Superou todas as minhas expectativas. Pontualidade nos horários e atendimento totalmente atencioso.`
              },
              {
                name: "Carlos Eduardo",
                desc: "Cliente de " + cidade,
                comment: `Melhor opção da região de ${cidade}. Recomendo de olhos fechados!`
              }
            ].map((rev, i) => (
              <figure
                key={i}
                className="p-8 flex flex-col rounded-2xl justify-between border"
                style={{
                  backgroundColor: config.cardBg,
                  borderColor: config.borderColor,
                }}
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, st) => (
                      <Star key={st} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed italic" style={{ color: config.textColor }}>
                    "{rev.comment}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-6 border-t" style={{ borderColor: config.borderColor }}>
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                      color: config.textColor,
                    }}
                  >
                    {rev.name}
                  </div>
                  <div className="text-xs" style={{ color: config.mutedTextColor }}>{rev.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTATO */}
      <footer id="localizacao" className="border-t py-16 px-5 sm:px-8" style={{ borderColor: config.borderColor }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-xs" style={{ color: config.mutedTextColor }}>
          <div className="space-y-3">
            <h4
              className="font-bold text-base"
              style={{
                fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                color: config.textColor,
              }}
            >
              {nome}
            </h4>
            <p className="leading-relaxed">{config.desc}</p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider" style={{ color: config.textColor }}>Localização & Contato</h5>
            <p className="flex items-center gap-2">
              <MapPin size={14} style={{ color: config.accentColor }} />
              <span>{endereco}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} style={{ color: config.accentColor }} />
              <span>{phone}</span>
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <h5 className="font-bold uppercase tracking-wider" style={{ color: config.textColor }}>Agendamento Rápido</h5>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-[0.18em] transition-all shadow-xl rounded-xl"
              style={{ background: config.accentColor, color: config.accentText }}
            >
              <MessageCircle size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]" style={{ borderColor: config.borderColor, color: config.mutedTextColor }}>
          <p>© {new Date().getFullYear()} {nome}. Todos os direitos reservados.</p>
          <p>Site profissional desenvolvido pela RDG Digital.</p>
        </div>
      </footer>
    </div>
  );
}
