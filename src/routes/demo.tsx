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
  Briefcase
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
    heroFallback: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
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

  const nome = storedLead?.name || search.nome || search.cliente || "Empresa de Destaque";
  const rawCategoria = storedLead?.category || search.categoria || "Empresa";
  const cidade = search.cidade || "São Paulo - SP";
  const endereco = storedLead?.address || search.endereco || `Rua Principal, 1500 - ${cidade}`;
  const phone = storedLead?.phone || search.phone || search.telefone || "+55 11 98888-7777";
  const rawPhone = (storedLead?.raw_phone || search.raw_phone || phone).replace(/\D/g, "");
  const waNum = rawPhone.length > 5 ? (rawPhone.startsWith("55") ? rawPhone : `55${rawPhone}`) : "5511988887777";
  const rating = storedLead?.rating || search.rating || "5.0";
  const reviews = storedLead?.user_ratings_total || search.reviews || "340";
  const googleMapsUrl = storedLead?.google_maps_url || `https://www.google.com/maps/search/${encodeURIComponent(nome + " " + cidade)}`;

  let realGooglePhotos: string[] = storedLead?.photos || [];
  if (realGooglePhotos.length === 0 && search.photos) {
    try {
      const parsed = JSON.parse(search.photos);
      if (Array.isArray(parsed) && parsed.length > 0) {
        realGooglePhotos = parsed;
      }
    } catch (e) {}
  }

  let realReviewsList: { author_name: string; rating: number; text: string; relative_time_description?: string }[] = storedLead?.reviews_list || [];
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

  // RECONHECIMENTO ULTRA-EXATO E COMPLETO DE NICHO COMBINANDO NOME E CATEGORIA
  const fullSearchStr = `${rawCategoria} ${nome} ${search.categoria || ""} ${search.nome || ""}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let catKey = "default";
  if (
    fullSearchStr.includes("advogad") ||
    fullSearchStr.includes("advocac") ||
    fullSearchStr.includes("direit") ||
    fullSearchStr.includes("jurid") ||
    fullSearchStr.includes("law") ||
    fullSearchStr.includes("oab")
  ) {
    catKey = "advocacia";
  } else if (
    fullSearchStr.includes("restauran") ||
    fullSearchStr.includes("bistro") ||
    fullSearchStr.includes("pizz") ||
    fullSearchStr.includes("hamburg") ||
    fullSearchStr.includes("comida") ||
    fullSearchStr.includes("gourmet") ||
    fullSearchStr.includes("bar") ||
    fullSearchStr.includes("boteco") ||
    fullSearchStr.includes("churrasc") ||
    fullSearchStr.includes("lanchon") ||
    fullSearchStr.includes("cafe") ||
    fullSearchStr.includes("padar") ||
    fullSearchStr.includes("docer") ||
    fullSearchStr.includes("confeitar") ||
    fullSearchStr.includes("sushi") ||
    fullSearchStr.includes("pub") ||
    fullSearchStr.includes("food")
  ) {
    catKey = "restaurante";
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
  }

  const config = NICHE_CONFIGS[catKey] || NICHE_CONFIGS["default"];
  const NicheIcon = config.icon;

  const isGenericCategory = !rawCategoria || ["establishment", "point_of_interest", "local_business", "store", "food", "health", "finance", "service", "gmn"].includes(rawCategoria.toLowerCase().trim());
  const displayCategory = isGenericCategory ? config.prettyCategoryName : rawCategoria;

  const businessSummary = storedLead?.editorial_summary || search.summary || `${nome} é uma das empresas de ${displayCategory} mais prestigiadas da região de ${cidade}, destacando-se pela excelência no atendimento com nota ${rating} e ${reviews} avaliações positivas de clientes.`;

  const heroImage = realGooglePhotos.length > 0 ? realGooglePhotos[0] : config.heroFallback;
  const galleryImages = realGooglePhotos.length > 1 ? realGooglePhotos.slice(1, 9) : config.galleryFallback;

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
          backgroundColor: "#111625",
          color: "#FAFAFA",
          borderBottom: `1px solid ${config.borderColor}`,
        }}
      >
        <Sparkles size={14} className="animate-pulse" style={{ color: config.accentColor }} />
        <span>MODELO DE SITE OFICIAL — GERADO EXCLUSIVAMENTE PARA <strong style={{ color: config.accentColor }}>{nome.toUpperCase()}</strong></span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 px-3.5 py-1.5 font-black rounded-lg transition-all text-[11px] inline-flex items-center gap-1 shadow"
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
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
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
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {nome}
              </a>{" "}
              <span className="italic block" style={{ color: config.accentColor }}>
                {cidade}.
              </span>
            </h1>

            <p className="text-base sm:text-lg max-w-xl leading-relaxed font-normal" style={{ color: config.mutedTextColor }}>
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
                <span>Agendar Atendimento no WhatsApp</span>
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
              <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                Destaques & Especialidades
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                Serviços de {nome}.
              </h2>
              <p className="text-sm" style={{ color: config.mutedTextColor }}>
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
              <span>Solicitar Atendimento</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dynamicServices.map((srv, idx) => (
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
                      className="text-xs font-bold px-2 py-1 rounded bg-white/5 border"
                      style={{
                        color: config.accentColor,
                        borderColor: config.borderColor,
                      }}
                    >
                      {srv.price}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold"
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

      {/* GALERIA DE FOTOS REAIS */}
      <section id="galeria" className="py-20 border-t px-5 sm:px-8" style={{ borderColor: config.borderColor }}>
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                Portfólio & Estrutura
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold"
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
                  <blockquote className="text-xs leading-relaxed italic" style={{ color: config.textColor }}>
                    "{rev.text}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-6 border-t flex items-center justify-between" style={{ borderColor: config.borderColor }}>
                  <div>
                    <div
                      className="font-bold text-sm"
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
                className="font-bold text-base"
                style={{
                  fontFamily: config.fontSerif ? "Playfair Display, Georgia, serif" : "inherit",
                  color: config.textColor,
                }}
              >
                {nome}
              </h4>
              <p className="leading-relaxed">{businessSummary}</p>
            </div>

            <div className="md:col-span-5 space-y-3">
              <h5 className="font-bold uppercase tracking-wider" style={{ color: config.textColor }}>LOCALIZAÇÃO & HORÁRIOS</h5>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: config.accentColor }} />
                <span>{endereco}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" style={{ color: config.accentColor }} />
                <span>{phone}</span>
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
    </div>
  );
}
