import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
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
  Trash2
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
}

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
    };
  },
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: FullSiteDemoPage,
});

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
  prettyCategoryName: string;
  heroFallback: string;
  galleryFallback: string[];
  services: { title: string; desc: string; price: string }[];
  stats: { label: string; value: string }[];
}


const NICHE_CONFIGS: Record<string, NicheConfig> = {

  // ADVOCACIA & JURÍDICO (Imperial Gold & Deep Executive Navy/Onyx)
  advocacia: {
    isDark: true,
    bgColor: "#090D16",
    surfaceColor: "#111827",
    cardBg: "#172033",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(212, 175, 55, 0.25)",
    accentColor: "#D4AF37",
    accentText: "#090D16",
    fontSerif: true,
    heroTagline: "Direito Estratégico & Assessoria Jurídica",
    titleSpan: "Advocacia",
    titleSuffix: "Especializada.",
    desc: "Atuação jurídica rigorosa e ágil para resguardar seus direitos, contornar riscos e defender seu patrimônio com discrição.",
    icon: Scale,
    prettyCategoryName: "Advocacia Especializada",
    heroFallback: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Direito Empresarial & Contratos", desc: "Consultoria preventiva, elaboração de acordos societários e proteção jurídica.", price: "Agendar Consulta" },
      { title: "Direito de Família & Sucessões", desc: "Inventários extrajudiciais rápidos, partilhas de bens e planejamento familiar.", price: "Agendar Consulta" },
      { title: "Direito Previdenciário & Benefícios", desc: "Concessão e revisão de aposentadorias e benefícios junto ao INSS.", price: "Agendar Consulta" },
      { title: "Direito Civil & Patrimonial", desc: "Ações indenizatórias, contratos imobiliários e defesa patrimonial.", price: "Agendar Consulta" }
    ],
    stats: [
      { label: "Êxito nos Casos", value: "95%" },
      { label: "Anos de Mercado", value: "15+" },
      { label: "Satisfação dos Clientes", value: "5.0" },
      { label: "Advogados Sênior", value: "6" }
    ]
  },

  // RESTAURANTE, BAR, BISTRÔ & GASTRONOMIA (Terracotta Flame & Copper Gold)
  restaurante: {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#FAFAFA",
    mutedTextColor: "#A1A1AA",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#000000",
    fontSerif: true,
    heroTagline: "Alta Gastronomia & Experiência Única",
    titleSpan: "Sabores",
    titleSuffix: "Inesquecíveis.",
    desc: "Ingredientes selecionados, pratos autorais e um ambiente acolhedor preparado para proporcionar momentos inesquecíveis.",
    icon: Utensils,
    prettyCategoryName: "Bar & Gastronomia",
    heroFallback: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Pratos Especiais da Casa", desc: "Receitas tradicionais elaboradas com ingredientes frescos e seleção especial do Chef.", price: "Consulte o Cardápio" },
      { title: "Menu Degustação & Entradas", desc: "Porções exclusivas, tábuas de frios e entradas quentes preparadas no dia.", price: "Consulte o Cardápio" },
      { title: "Carta de Vinhos & Bebidas", desc: "Drinkeria autoral, sucos naturais e seleção de vinhos nacionais e importados.", price: "Consulte o Cardápio" },
      { title: "Sobremesas Artesanais", desc: "Doces caseiros, gelatos e receitas exclusivas para finalizar sua refeição.", price: "Consulte o Cardápio" }
    ],
    stats: [
      { label: "Anos de Tradição", value: "10+" },
      { label: "Pratos Servidos", value: "30k+" },
      { label: "Avaliação Média", value: "4.9" },
      { label: "Chefs de Cozinha", value: "4" }
    ]
  },

  // BARBEARIA (Midnight Onyx & Brass Gold)
  barbearia: {
    isDark: true,
    bgColor: "#0A0A0A",
    surfaceColor: "#121212",
    cardBg: "#1A1A1A",
    textColor: "#F5F5F5",
    mutedTextColor: "#9CA3AF",
    borderColor: "rgba(212, 175, 55, 0.2)",
    accentColor: "#D4AF37",
    accentText: "#0F0F0F",
    fontSerif: true,
    heroTagline: "Estilo & Tradição · Corte & Barba",
    titleSpan: "Barbearia",
    titleSuffix: "Premium.",
    desc: "Redefinindo o cuidado masculino com técnicas clássicas, atmosfera exclusiva e uma equipe apaixonada pelo detalhe.",
    icon: Scissors,
    prettyCategoryName: "Barbearia Premium",
    heroFallback: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Corte Clássico & Fade", desc: "Corte na tesoura e máquina, finalizado com lavagem especial e styling.", price: "Agendar Horário" },
      { title: "Barba com Toalha Quente", desc: "Modelagem com navalha, óleos essenciais e protocolo relaxante com toalha quente.", price: "Agendar Horário" },
      { title: "Combo Grooming VIP", desc: "Corte completo + Barba na navalha + Sobrancelha + Bebida cortesia.", price: "Agendar Horário" },
      { title: "Pigmentação & Camuflagem", desc: "Disfarce natural de falhas e alinhamento de fios com alta precisão.", price: "Agendar Horário" }
    ],
    stats: [
      { label: "Anos de Tradição", value: "8+" },
      { label: "Clientes Atendidos", value: "15k+" },
      { label: "Avaliação dos Clientes", value: "5.0" },
      { label: "Barbeiros Master", value: "6" }
    ]
  },

  // ODONTOLOGIA (Tech Cyan Dark Mode)
  odontologia: {
    isDark: true,
    bgColor: "#0B132B",
    surfaceColor: "#1C2541",
    cardBg: "#1C2541",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(0, 217, 255, 0.25)",
    accentColor: "#00D9FF",
    accentText: "#0B132B",
    fontSerif: false,
    heroTagline: "Odontologia Digital & Estética Humanizada",
    titleSpan: "Sorrisos",
    titleSuffix: "Radiantes.",
    desc: "Tecnologia de ponta, alinhadores invisíveis e procedimentos indolores em um ambiente aconchegante projetado para você.",
    icon: Stethoscope,
    prettyCategoryName: "Clínica Odontológica",
    heroFallback: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Alinhadores Invisíveis 3D", desc: "Correção ortodôntica ultradiscreta, rápida e sem fios metálicos incômodos.", price: "Sob Consulta" },
      { title: "Clareamento Dental Laser", desc: "Dentes visivelmente mais brancos e brilhantes com tecnologia sem sensibilidade.", price: "Sob Consulta" },
      { title: "Implantes & Reabilitação Oral", desc: "Recupere dentes perdidos com estabilidade e estética totalmente natural.", price: "Sob Consulta" },
      { title: "Limpeza Preventiva & Profilaxia", desc: "Remoção de placa, jato purificador e polimento dental com aplicação de flúor.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Pacientes Atendidos", value: "8.5k+" },
      { label: "Aprovação", value: "5.0" },
      { label: "Scanner 3D", value: "100%" },
      { label: "Doutores Especialistas", value: "5" }
    ]
  },

  // SAÚDE & MÉDICOS (Slate Navy & Emerald Teal)
  saude: {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#0F172A",
    fontSerif: false,
    heroTagline: "Medicina Preventiva & Diagnóstico Avançado",
    titleSpan: "Saúde &",
    titleSuffix: "Bem-Estar.",
    desc: "Consultas especializadas, exames de alta precisão e atendimento humanizado para cuidar do seu bem mais precioso.",
    icon: HeartPulse,
    prettyCategoryName: "Clínica Médica",
    heroFallback: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Consulta Médica Especializada", desc: "Avaliação completa com escuta atenta e plano de tratamento personalizado.", price: "Agendar Consulta" },
      { title: "Exames Preventivos & Check-up", desc: "Monitoramento de indicadores de saúde com tecnologia de diagnóstico precisa.", price: "Agendar Consulta" }
    ],
    stats: [
      { label: "Pacientes Atendidos", value: "12k+" },
      { label: "Atendimento Humanizado", value: "100%" },
      { label: "Nota Média", value: "5.0" },
      { label: "Médicos Especialistas", value: "8" }
    ]
  },

  // ESTÉTICA & SPA (Velvet Dark & Rose Gold Silk)
  estetica: {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#FAF5F7",
    mutedTextColor: "#B8A7AF",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#161217",
    fontSerif: true,
    heroTagline: "Beleza Natural & Rejuvenescimento",
    titleSpan: "Estética",
    titleSuffix: "Exclusiva.",
    desc: "Protocolos faciais e corporais avançados desenhados para desacelerar o tempo e realçar sua beleza com naturalidade.",
    icon: Sparkle,
    prettyCategoryName: "Clínica de Estética & SPA",
    heroFallback: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Harmonização Facial & Botox", desc: "Suavização de linhas de expressão e preenchimento labial com contornos delicados.", price: "Sob Consulta" },
      { title: "Limpeza de Pele Ouro 24k", desc: "Esfoliação biológica, extração indolor e hidratação profunda com ativos nobres.", price: "Sob Consulta" },
      { title: "Drenagem Linfática & SPA", desc: "Massagem corporal desintoxicante para eliminação de retenção e relaxamento profundo.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Procedimentos", value: "14k+" },
      { label: "Satisfação dos Clientes", value: "99.4%" },
      { label: "Nota dos Clientes", value: "4.9" },
      { label: "Especialistas", value: "6" }
    ]
  },

  // PET SHOP & VETERINÁRIA (Warm Charcoal & Coral Orange)
  petshop: {
    isDark: true,
    bgColor: "#141210",
    surfaceColor: "#1C1A17",
    cardBg: "#24211D",
    textColor: "#FAFAF9",
    mutedTextColor: "#A8A29E",
    borderColor: "rgba(249, 115, 22, 0.25)",
    accentColor: "#F97316",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Carinho & Saúde para seu Melhor Amigo",
    titleSpan: "Cuidado",
    titleSuffix: "Especial de Pet.",
    desc: "Banho & tosa humanizado, consultas veterinárias preventivas e produtos selecionados para a felicidade do seu filhote.",
    icon: Dog,
    prettyCategoryName: "Pet Shop & Veterinária",
    heroFallback: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Banho & Tosa Spa Humanizado", desc: "Shampoo hipoalergênico, secagem silenciosa e hidratação sem estresse pro pet.", price: "Agendar Banho" },
      { title: "Consulta Veterinária Geral", desc: "Exame clínico preventivo, auscultação e acompanhamento de saúde contínuo.", price: "Agendar Consulta" }
    ],
    stats: [
      { label: "Pets Atendidos", value: "6.2k+" },
      { label: "Amor & Carinho", value: "100%" },
      { label: "Satisfação", value: "5.0" },
      { label: "Vets de Plantão", value: "3" }
    ]
  },

  // TATUAGEM & PIERCING (Crimson Obsidian & Ruby Red)
  tatuagem: {
    isDark: true,
    bgColor: "#0A0A0A",
    surfaceColor: "#121212",
    cardBg: "#171717",
    textColor: "#FAFAFA",
    mutedTextColor: "#A3A3A3",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Arte na Pele & Biossegurança Absoluta",
    titleSpan: "Studio de",
    titleSuffix: "Tattoo.",
    desc: "Tatuagens autorais, traços finos, cobertura de cicatrizes e body piercing com materiais 100% descartáveis e esterilizados.",
    icon: Palette,
    prettyCategoryName: "Studio de Tattoo & Piercing",
    heroFallback: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Tatuagem Autoral Fine Line", desc: "Traços ultrafinos, sombras suaves e projetos exclusivos desenvolvidos sob medida.", price: "Sob Orçamento" },
      { title: "Body Piercing & Joalheria", desc: "Perfurações com agulha americana cateter e joias biomédicas de titânio F136.", price: "Sob Orçamento" }
    ],
    stats: [
      { label: "Tattoos Aplicadas", value: "9k+" },
      { label: "Biossegurança", value: "100%" },
      { label: "Nota Média", value: "5.0" },
      { label: "Tatuadores Residentes", value: "4" }
    ]
  },

  // IMOBILIÁRIA (Architecture Charcoal & Amber Gold)
  imobiliaria: {
    isDark: true,
    bgColor: "#111827",
    surfaceColor: "#1F2937",
    cardBg: "#1F2937",
    textColor: "#F9FAFB",
    mutedTextColor: "#9CA3AF",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#111827",
    fontSerif: false,
    heroTagline: "Imóveis de Alto Padrão & Oportunidades",
    titleSpan: "Soluções",
    titleSuffix: "Imobiliárias.",
    desc: "Compra, venda e administração de aluguéis com vistoria rigorosa e assessoria de financiamento do início ao fim.",
    icon: Building2,
    prettyCategoryName: "Assessoria Imobiliária",
    heroFallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Curadoria de Venda de Imóveis", desc: "Casas em condomínio e apartamentos com documentação juridicamente aprovada.", price: "Sob Consulta" },
      { title: "Gestão de Locação com Garantia", desc: "Administração sem dor de cabeça com garantia pontual do valor do aluguel.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Imóveis Vendidos", value: "3k+" },
      { label: "Contratos de Aluguel", value: "100%" },
      { label: "Nota Média", value: "4.9" },
      { label: "Corretores CRECI", value: "14" }
    ]
  },

  // ACADEMIAS & FITNESS (Kinetic Dark & Electric Emerald)
  academia: {
    isDark: true,
    bgColor: "#0A0A0E",
    surfaceColor: "#13131A",
    cardBg: "#1A1A24",
    textColor: "#F4F4F6",
    mutedTextColor: "#A1A1AA",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#0A0A0E",
    fontSerif: false,
    heroTagline: "Treino de Alta Performance & Saúde",
    titleSpan: "Evolução",
    titleSuffix: "Física.",
    desc: "Equipamentos modernos, acompanhamento com personal trainers e ambiente motivador para você superar seus limites.",
    icon: Dumbbell,
    prettyCategoryName: "Academia & Centro Fitness",
    heroFallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Musculação & Cardio de Elite", desc: "Área de pesos livres completa, esteiras com tela e aparelhos biomecânicos.", price: "Conhecer Planos" },
      { title: "Aulas em Grupo & Funcional", desc: "Treinos dinâmicos de alta intensidade para queima calórica e condicionamento.", price: "Conhecer Planos" }
    ],
    stats: [
      { label: "Alunos Ativos", value: "2.4k+" },
      { label: "Resultado", value: "100%" },
      { label: "Nota Média", value: "4.9" },
      { label: "Professores", value: "8" }
    ]
  },

  // OFICINAS & AUTOMOTIVO (Carbon Steel & Racing Orange)
  oficina: {
    isDark: true,
    bgColor: "#111115",
    surfaceColor: "#1A1A20",
    cardBg: "#22222A",
    textColor: "#FAFAFA",
    mutedTextColor: "#A1A1AA",
    borderColor: "rgba(255, 87, 34, 0.25)",
    accentColor: "#FF5722",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Manutenção Preventiva & Diagnóstico Computadorizado",
    titleSpan: "Centro",
    titleSuffix: "Automotivo.",
    desc: "Mecânica de precisão, alinhamento 3D, funilaria e revisão completa com peças de garantia e scanner avançado.",
    icon: Wrench,
    prettyCategoryName: "Centro Automotivo & Oficina",
    heroFallback: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Revisão Geral & Scanner", desc: "Análise computadorizada do motor, injeção eletrônica e sistema de freios.", price: "Solicitar Orçamento" },
      { title: "Troca de Óleo & Filtros", desc: "Lubrificantes sintéticos de especificação original para preservar o motor.", price: "Solicitar Orçamento" }
    ],
    stats: [
      { label: "Veículos Revisados", value: "12k+" },
      { label: "Garantia nas Peças", value: "100%" },
      { label: "Avaliação", value: "4.9" },
      { label: "Mecânicos Certificados", value: "5" }
    ]
  },

  // AÇAITERIA & GELATERIA (Deep Purple & Vibrant Violet)
  acai: {
    isDark: true,
    bgColor: "#0F0A1A",
    surfaceColor: "#181028",
    cardBg: "#221738",
    textColor: "#FAFAFA",
    mutedTextColor: "#C4B5FD",
    borderColor: "rgba(168, 85, 247, 0.3)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Açaí Puríssimo & Taças Especiais Gourmet",
    titleSpan: "Açaí &",
    titleSuffix: "Sabor Gelado.",
    desc: "Açaí batido na hora, cremoso e sem gelo, com combinações ilimitadas de acompanhamentos, frutas frescas e cremes artesanais.",
    icon: Utensils,
    prettyCategoryName: "Açaíeria & Gelateria Gourmet",
    heroFallback: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553978297-62a7a35e3d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Copo de Açaí Tradicional (Monte o Seu)", desc: "Açaí puro batido na hora com acompanhamentos ilimitados (Ninho, Granola, Paçoca e Frutas).", price: "A partir de R$ 14,90" },
      { title: "Taça Gourmet Ninho & Nutella", desc: "Taça vulcão decorada com Nutella pura, morangos frescos, Leite Ninho e sorvete artesanal.", price: "A partir de R$ 24,90" },
      { title: "Barca de Açaí Especial da Casa", desc: "Barca familiar de 1 Litro recheada com frutas, chocoball, Bis, KitKat e cobertura à escolha.", price: "A partir de R$ 49,90" },
      { title: "Sorvetes & Gelatos Artesanais", desc: "Casquinhas e potes com sabores variados de gelato italiano e picolés recheados.", price: "A partir de R$ 8,00" }
    ],
    stats: [
      { label: "Copos Servidos", value: "50k+" },
      { label: "Frutas Frescas", value: "100%" },
      { label: "Nota Média", value: "4.9" },
      { label: "Opções de Toppings", value: "30+" }
    ]
  },

  // HAMBURGUERIA & BURGER (Charcoal Dark & Flame Orange)
  hamburgueria: {
    isDark: true,
    bgColor: "#0D0B0A",
    surfaceColor: "#1A1513",
    cardBg: "#241D1A",
    textColor: "#FAFAFA",
    mutedTextColor: "#A8A29E",
    borderColor: "rgba(234, 88, 12, 0.3)",
    accentColor: "#EA580C",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Smash Burgers & Blend 100% Nelore",
    titleSpan: "Hamburgueria",
    titleSuffix: "Artesanal.",
    desc: "Hambúrgueres suculentos grelhados na chama, pão brioche selado na manteiga e molhos autorais preparados todos os dias.",
    icon: Utensils,
    prettyCategoryName: "Hamburgueria Artesanal & Burger",
    heroFallback: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Burgers Gourmet Especiais", desc: "Blend de 180g no pão brioche com queijo cheddar fatiado, bacon crocante e maionese verde.", price: "Consulte o Cardápio" },
      { title: "Smash Burgers Duplo", desc: "Dois discos de 90g prensados na chapa bem quente com borda crocante e queijo derretido.", price: "Consulte o Cardápio" },
      { title: "Porções de Batata & Rings", desc: "Batata rústica com cheddar e bacon, anéis de cebola empanados e nuggets artesanais.", price: "Consulte o Cardápio" },
      { title: "Milkshakes Kremosos", desc: "Milkshakes de Nutella, Ovomaltine e Morango com chantilly e calda artesanal.", price: "Consulte o Cardápio" }
    ],
    stats: [
      { label: "Burgers Vendidos", value: "40k+" },
      { label: "Carne 100% Fresca", value: "100%" },
      { label: "Avaliação Média", value: "4.9" },
      { label: "Molhos Próprios", value: "8" }
    ]
  },

  // PIZZARIA (Woodfired Dark & Brick Red)
  pizzaria: {
    isDark: true,
    bgColor: "#0F0B09",
    surfaceColor: "#1C1410",
    cardBg: "#281D17",
    textColor: "#FAFAFA",
    mutedTextColor: "#A8A29E",
    borderColor: "rgba(220, 38, 38, 0.3)",
    accentColor: "#DC2626",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Massa Fermentada & Forno a Lenha",
    titleSpan: "Pizzas",
    titleSuffix: "Artesanais.",
    desc: "Massa de longa fermentação natural, molho artesanal de tomates italianos pelados e ingredientes de primeira qualidade assados na pedra.",
    icon: Utensils,
    prettyCategoryName: "Pizzaria & Forno a Lenha",
    heroFallback: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Pizzas Tradicionais & Nobres", desc: "Calabresa, Muçarela, Portuguesa e Frango com Catupiry Original assadas no forno a lenha.", price: "Consulte o Cardápio" },
      { title: "Pizzas Especiais da Casa", desc: "Sabores autorais com bordas recheadas de Catupiry, Cheddar ou Cream Cheese artesanal.", price: "Consulte o Cardápio" },
      { title: "Calzones & Entradas Quentes", desc: "Crostinis de alho e ervas, calzones gigantes recheados e focaccias italianas.", price: "Consulte o Cardápio" },
      { title: "Pizzas Doces & Sobremesas", desc: "Pizza de Brigadeiro com Morango, Romeu & Julieta e Nutella com Banana polvilhada de canela.", price: "Consulte o Cardápio" }
    ],
    stats: [
      { label: "Pizzas Assadas", value: "60k+" },
      { label: "Massa Fermentada", value: "24h" },
      { label: "Nota dos Clientes", value: "4.9" },
      { label: "Sabores Únicos", value: "45+" }
    ]
  },

  // SUSHI & JAPONÊS (Midnight Onyx & Cherry Crimson)
  sushi: {
    isDark: true,
    bgColor: "#090B0E",
    surfaceColor: "#11161D",
    cardBg: "#19212B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(225, 29, 72, 0.3)",
    accentColor: "#E11D48",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Culinária Oriental Fresca & Rodízio VIP",
    titleSpan: "Sushi &",
    titleSuffix: "Culinária Japonesa.",
    desc: "Cortes de salmão fresco do dia, niguiris artesanais, temakis crocantes e entradas quentes servidas no melhor padrão de qualidade.",
    icon: Utensils,
    prettyCategoryName: "Restaurante Japonês & Sushi Bar",
    heroFallback: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Combos & Barcas de Salmão", desc: "Seleção com Sashimis, Niguiris, Uramakis e Djois com salmão maçaricado e tarê.", price: "Consulte o Cardápio" },
      { title: "Temakis Especiais Crocantes", desc: "Temakis montados na hora com alga nori crocante, cream cheese e peixe fresco em cubos.", price: "Consulte o Cardápio" },
      { title: "Hot Rolls & Entradas Quentes", desc: "Shimeji na manteiga, Harumaki de queijo, Gyoza e Hot Rolls crocantes com cream cheese.", price: "Consulte o Cardápio" },
      { title: "Poke Bowls Personalizados", desc: "Tigelas havaianas refrescantes com base de arroz japonês, salmão, abacate e sunomono.", price: "Consulte o Cardápio" }
    ],
    stats: [
      { label: "Combos Entregues", value: "25k+" },
      { label: "Peixes Frescos", value: "100%" },
      { label: "Avaliação Média", value: "4.9" },
      { label: "Sushimen Experts", value: "5" }
    ]
  },

  // YAKISSOBA & COMIDA CHINESA (Vermelho & Dourado Oriental)
  yakissoba: {
    isDark: true,
    bgColor: "#0E0A06",
    surfaceColor: "#1A1008",
    cardBg: "#261710",
    textColor: "#FAFAFA",
    mutedTextColor: "#D4A574",
    borderColor: "rgba(220, 38, 38, 0.35)",
    accentColor: "#DC2626",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "O Melhor Yakissoba da Cidade",
    titleSpan: "Yakissoba",
    titleSuffix: "Autêntico.",
    desc: "Macarrão oriental refogado no wok com legumes frescos, frango ou carne, molho shoyu especial da casa e muito sabor.",
    icon: Utensils,
    prettyCategoryName: "Restaurante Oriental & Chinês",
    heroFallback: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Yakissoba Tradicional no Wok", desc: "Macarrão refogado com frango, legumes frescos e molho shoyu especial da casa.", price: "Consulte o Cardápio" },
      { title: "Yakissoba de Carne & Frutos do Mar", desc: "Versão premium com carne macia, camarão e mix de legumes salteados na chapa.", price: "Consulte o Cardápio" },
      { title: "Arroz Chop Suey & Especialidades", desc: "Arroz frito com legumes, ovos mexidos, frango e temperos orientais exclusivos.", price: "Consulte o Cardápio" },
      { title: "Entradas Orientais & Rolinho Primavera", desc: "Rolinho primavera crocante, frango à xangai e sopas orientais quentinhas.", price: "Consulte o Cardápio" }
    ],
    stats: [
      { label: "Pratos Servidos", value: "20k+" },
      { label: "Molho Especial", value: "100%" },
      { label: "Nota no Google", value: "4.9" },
      { label: "Anos de Tradição", value: "10+" }
    ]
  },

  // CHAVEIRO & SERVIÇOS TÉCNICOS (Steel Navy & Amber Gold)
  chaveiro: {
    isDark: true,
    bgColor: "#0B0E14",
    surfaceColor: "#141A24",
    cardBg: "#1C2432",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.3)",
    accentColor: "#F59E0B",
    accentText: "#000000",
    fontSerif: false,
    heroTagline: "Chaveiro 24 Horas & Segurança Residencial",
    titleSpan: "Chaveiro",
    titleSuffix: "Especializado 24h.",
    desc: "Atendimento emergencial com rapidez para abertura de portas, cópia de chaves codificadas de veículos e instalação de fechaduras digitais.",
    icon: Wrench,
    prettyCategoryName: "Serviços de Chaveiro 24 Horas",
    heroFallback: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Abertura Emergencial 24h", desc: "Socorro rápido para residências, comércios e veículos sem danificar a fechadura.", price: "Chamar no WhatsApp" },
      { title: "Chaves Codificadas de Veículos", desc: "Cópia e programação de chaves com alarme, transponder e canivete para todos os carros.", price: "Solicitar Orçamento" },
      { title: "Instalação de Fechaduras Digitais", desc: "Modernização de portas com fechaduras biométricas, com senha e cartão de aproximação.", price: "Solicitar Orçamento" },
      { title: "Cópia de Chaves Simples & Tetra", desc: "Duplicação imediata de chaves residenciais, de cadeados, cofres e portas de aço.", price: "Consulte Valores" }
    ],
    stats: [
      { label: "Atendimentos 24h", value: "10k+" },
      { label: "Chegada Rápida", value: "20 min" },
      { label: "Nota no Google", value: "5.0" },
      { label: "Técnicos de Plantão", value: "4" }
    ]
  },

  // CONFEITARIA & PADARIA (Plum Velvet & Violet Silk)
  confeitaria: {
    isDark: true,
    bgColor: "#140D12",
    surfaceColor: "#20141D",
    cardBg: "#2B1A27",
    textColor: "#FAFAFA",
    mutedTextColor: "#D8B4FE",
    borderColor: "rgba(217, 70, 239, 0.3)",
    accentColor: "#D946EF",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Bolos Artesanais & Doces Finos sob Encomenda",
    titleSpan: "Confeitaria",
    titleSuffix: "Artesanal.",
    desc: "Bolos decorados para festas, tortas geladas, docinhos gourmet e receitas de família preparadas com ingredientes nobres.",
    icon: Sparkle,
    prettyCategoryName: "Confeitaria & Doceria Gourmet",
    heroFallback: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559620192-032c4bc46ee8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Bolos de Festa Personalizados", desc: "Bolos de aniversário e casamento com recheios cremosos de Leite Ninho, Brigadeiro e Frutas.", price: "Fazer Encomenda" },
      { title: "Doces Finos & Brigadeiros Gourmet", desc: "Cento de brigadeiros de pistache, churros, belga e caixinhas presenteáveis decoradas.", price: "Fazer Encomenda" },
      { title: "Tortas Geladas & Pavês", desc: "Torta holandesa, torta de limão siciliano, banoffee e pavês caseiros em fatias.", price: "Consulte a Vitrine" },
      { title: "Cafés Especiais & Salgados", desc: "Cappuccinos artesanais, quiches folhadas e empadões assados frescos no dia.", price: "Consulte a Vitrine" }
    ],
    stats: [
      { label: "Bolos Entregues", value: "8k+" },
      { label: "Ingredientes Nobres", value: "100%" },
      { label: "Nota dos Clientes", value: "5.0" },
      { label: "Confeiteiras", value: "4" }
    ]
  },

  // CHURRASCARIA & ESPETARIA (Ember Charcoal & Flame Orange)
  churrascaria: {
    isDark: true,
    bgColor: "#0E0B09",
    surfaceColor: "#1B1410",
    cardBg: "#271C17",
    textColor: "#FAFAFA",
    mutedTextColor: "#A8A29E",
    borderColor: "rgba(234, 88, 12, 0.3)",
    accentColor: "#EA580C",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Cortes Nobres & Parrilla na Brasa",
    titleSpan: "Churrasco",
    titleSuffix: "Premium.",
    desc: "Picanha sul-americana, costela assada no fogo de chão por 12 horas, fraldinha e espetinhos gourmet temperados com sal de parrilla.",
    icon: Utensils,
    prettyCategoryName: "Churrascaria & Espetaria",
    heroFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Rodízio de Carnes Nobres", desc: "Picanha no espeto, Ancho, Prime Rib, Costela de Chão, Cupim e Linguiças artesanais.", price: "Consulte o Cardápio" },
      { title: "Espetinhos Gourmet Individual", desc: "Espetos de carne de sol, frango com bacon, queijo coalho com melaço e medalhão.", price: "Consulte o Cardápio" },
      { title: "Buffet Completo de Saladas & Acompanhamentos", desc: "Arroz carreteiro, feijão tropeiro, farofa crocante da casa e maionese tradicional.", price: "Consulte o Cardápio" },
      { title: "Marmitex & Chapa Executiva", desc: "Almoço reforçado na marmita com carnes assadas na brasa e entrega rápida.", price: "Consulte o Cardápio" }
    ],
    stats: [
      { label: "Clientes Atendidos", value: "35k+" },
      { label: "Carnes Selecionadas", value: "100%" },
      { label: "Nota dos Clientes", value: "4.9" },
      { label: "Churrasqueiros", value: "5" }
    ]
  },

  // DEFAULT / FALLBACK GERAL (RDG Dark Mode Elegante com Cyan Neon)
  default: {
    isDark: true,
    bgColor: "#0A0A0A",
    surfaceColor: "#121212",
    cardBg: "#181818",
    textColor: "#FFFFFF",
    mutedTextColor: "#A1A1AA",
    borderColor: "rgba(0, 217, 255, 0.25)",
    accentColor: "#00D9FF",
    accentText: "#0A0A0A",
    fontSerif: false,
    heroTagline: "Atendimento VIP & Estrutura Moderna",
    titleSpan: "Empresa",
    titleSuffix: "Referência.",
    desc: "Compromisso com a satisfação do cliente, agilidade no atendimento e infraestrutura completa em localização privilegiada.",
    icon: Briefcase,
    prettyCategoryName: "Empresa de Destaque",
    heroFallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Atendimento Sob Medida", desc: "Soluções completas desenhadas exatamente para atender sua necessidade com excelência.", price: "Solicitar Informações" },
      { title: "Agendamento Prático no WhatsApp", desc: "Reserve seu horário de forma rápida com agilidade e flexibilidade.", price: "Solicitar Informações" }
    ],
    stats: [
      { label: "Clientes Atendidos", value: "5k+" },
      { label: "Satisfação dos Clientes", value: "5.0" },
      { label: "Pontualidade", value: "100%" },
      { label: "Equipe Qualificada", value: "5" }
    ]
  }
};

function FullSiteDemoPage() {
  const search = Route.useSearch();
  const [storedLead, setStoredLead] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string>("gold");
  const [isSavedLocally, setIsSavedLocally] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  // Painel de Edição ao Vivo (Customizer Drawer)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [activeEditorTab, setActiveEditorTab] = useState<"textos" | "imagens" | "servicos" | "cores">("textos");

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


  return (
    <div
      className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative"
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
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

          {/* Baixar Site HTML5 */}
          <button
            onClick={handleDownloadHtml5}
            className="px-2.5 sm:px-3.5 py-1.5 font-extrabold rounded-lg transition-all text-[10px] sm:text-[11px] flex items-center gap-1 shadow-lg shadow-emerald-600/20 bg-emerald-600 hover:bg-emerald-500 text-white shrink-0"
          >
            <span>📥 HTML5</span>
          </button>
        </div>
      </div>

      {/* Main Header Estilo Personalizado por Nicho */}
      <header
        className="backdrop-blur-md border-b px-5 sm:px-8 h-20 flex items-center justify-between sticky top-11 z-40 transition-colors"
        style={{
          backgroundColor: "rgba(11, 15, 24, 0.92)",
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
            className="px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all shadow-xl rounded-xl flex items-center gap-2"
            style={{ background: config.accentColor, color: config.accentText }}
          >
            <MessageCircle size={15} />
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setEditBtnHeaderText(e.currentTarget.innerText)}
              className="hidden sm:inline outline-none hover:ring-1 ring-white/40 rounded px-1"
            >
              {editBtnHeaderText || "Falar no WhatsApp"}
            </span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8">
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
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-105 shadow-2xl rounded-xl"
                style={{ background: config.accentColor, color: config.accentText }}
              >
                <MessageCircle size={18} />
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setEditBtnHeroText(e.currentTarget.innerText)}
                  className="outline-none hover:ring-1 ring-white/40 rounded px-1"
                >
                  {editBtnHeroText || "Agendar Atendimento no WhatsApp"}
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
      </section>

      {/* SEÇÃO DE SERVIÇOS & ESPECIALIDADES */}
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
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEditBtnServiceText(e.currentTarget.innerText)}
                className="outline-none hover:ring-1 ring-white/40 rounded px-1 cursor-text"
              >
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
      </section>

      {/* GALERIA DE FOTOS REAIS */}
      <section id="galeria" className="py-20 border-t px-5 sm:px-8" style={{ borderColor: config.borderColor }}>
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
      </section>

      {/* REVIEWS E DEPOIMENTOS REAIS DE CLIENTES */}
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
      </section>

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
                className="inline-flex items-center gap-2 px-6 py-3 font-black uppercase tracking-[0.18em] transition-all shadow-xl rounded-xl"
                style={{ background: config.accentColor, color: config.accentText }}
              >
                <MessageCircle size={16} />
                <span>Falar no WhatsApp</span>
              </a>
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
            <div className="flex border-b border-white/10 bg-[#0B0D14] p-1.5 gap-1">
              <button
                onClick={() => setActiveEditorTab("textos")}
                className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
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
                className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
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
                className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "servicos"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Sliders size={13} />
                <span>Serviços</span>
              </button>
              <button
                onClick={() => setActiveEditorTab("cores")}
                className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeEditorTab === "cores"
                    ? "bg-amber-500 text-black shadow-md font-extrabold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Palette size={13} />
                <span>Cores</span>
              </button>
            </div>

            {/* Drawer Body - Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs">
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
                </div>
              )}

              {activeEditorTab === "imagens" && (
                <div className="space-y-5">
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

              {activeEditorTab === "cores" && (
                <div className="space-y-5">
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
    </div>
  );
}
