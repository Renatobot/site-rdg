import { useState } from "react";
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
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Scissors,
  Building2,
  Stethoscope,
  Sparkle,
  Scale,
  Utensils,
  Camera,
  Play
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

// Temas e Conteúdos Específicos por Nicho (Padrão Luxo RDG)
interface NicheConfig {
  accentColor: string;
  badgeBg: string;
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
  barbearia: {
    accentColor: "#C5A059", // Dourado Nobre
    badgeBg: "rgba(197, 160, 89, 0.15)",
    heroTagline: "Estilo & Excelência · desde 2014",
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
  odontologia: {
    accentColor: "#00B4D8", // Azul Odontológico Fluido
    badgeBg: "rgba(0, 180, 216, 0.15)",
    heroTagline: "Tecnologia & Estética Dental",
    titleSpan: "Sorriso",
    titleSuffix: "Incomparável.",
    desc: "Tratamentos odontológicos modernos, alinhadores invisíveis e estética dental em um ambiente acolhedor e humanizado.",
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
      { title: "Alinhadores Invisíveis", desc: "Transforme seu sorriso de forma rápida, discreta e sem brackets metálicos.", price: "Sob Consulta" },
      { title: "Clareamento a Laser Premium", desc: "Dentes brancos e radiantes com segurança máxima já na primeira sessão.", price: "R$ 380" },
      { title: "Facetas & Lentes de Contato", desc: "Harmonização de cor, forma e tamanho com lâminas ultra-finas de porcelana.", price: "Sob Consulta" },
      { title: "Implantes de Carga Imediata", desc: "Reabilitação oral completa para mastigar e sorrir com confiança total.", price: "Sob Consulta" },
      { title: "Limpeza Profunda & Profilaxia", desc: "Remoção de tártaro, jato de bicarbonato e aplicação de flúor protetor.", price: "R$ 180" },
      { title: "Check-up Digital & Raio-X", desc: "Diagnóstico completo com scanner intraoral 3D e prevenção personalizada.", price: "R$ 150" }
    ],
    stats: [
      { label: "Sorrisos Transformados", value: "8k+" },
      { label: "Tecnologia 3D", value: "100%" },
      { label: "Avaliação Google", value: "5.0" },
      { label: "Doutores Especialistas", value: "4" }
    ]
  },
  estetica: {
    accentColor: "#E0A96D", // Champagne & Rosa Dourado
    badgeBg: "rgba(224, 169, 109, 0.15)",
    heroTagline: "Beleza Natural & Rejuvenescimento",
    titleSpan: "Estética",
    titleSuffix: "Avançada.",
    desc: "Protocolos faciais e corporais personalizados para realçar sua autoestima com sofisticação e resultados visíveis.",
    icon: Sparkle,
    heroFallback: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Harmonização Facial", desc: "Preenchimento labial, toxina botulínica e bioestimuladores de colágeno.", price: "Sob Consulta" },
      { title: "Limpeza de Pele Ouro 24k", desc: "Remoção de cravos, peeling ultrassônico e máscara iluminadora de ouro.", price: "R$ 220" },
      { title: "Drenagem Linfática & Modeladora", desc: "Protocolo corporal exclusivo para redução de medidas e eliminação de toxinas.", price: "R$ 160" },
      { title: "Lipo Sem Cortes (Criolipólise)", desc: "Elimine gordura localizada resistente com congelamento controlado de alta eficácia.", price: "R$ 290" },
      { title: "Depilação a Laser Led", desc: "Pele lisa e sem pelos com tecnologia indolor para todos os fototipos.", price: "A partir de R$ 99" }
    ],
    stats: [
      { label: "Procedimentos Realizados", value: "12k+" },
      { label: "Satisfação dos Clientes", value: "99%" },
      { label: "Nota Google Maps", value: "4.9" },
      { label: "Especialistas em Pele", value: "5" }
    ]
  },
  advocacia: {
    accentColor: "#D4AF37", // Dourado Jurídico Nobre
    badgeBg: "rgba(212, 175, 55, 0.15)",
    heroTagline: "Direito Estratégico & Defesa Patrimonial",
    titleSpan: "Advocacia",
    titleSuffix: "Especializada.",
    desc: "Atuação jurídica de alta performance para proteger seus direitos, negócios e patrimônio com sigilo e rapidez.",
    icon: Scale,
    heroFallback: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Direito Empresarial & Contratos", desc: "Elaboração de acordos estratégicos, blindagem corporativa e solução de conflitos.", price: "Sob Consulta" },
      { title: "Direito Trabalhista & Previdenciário", desc: "Defesa ágil de direitos trabalhistas, aposentadorias e revisões de benefícios.", price: "Sob Consulta" },
      { title: "Direito de Família & Sucessões", desc: "Inventários, divórcios, partilha de bens e planejamento sucessório patrimonial.", price: "Sob Consulta" },
      { title: "Direito Cível & Indenizações", desc: "Ações de cobrança, danos morais, contratos imobiliários e revisão contratual.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Casos Vencidos", value: "95%" },
      { label: "Anos de Atuação", value: "15+" },
      { label: "Avaliação Google", value: "5.0" },
      { label: "Advogados Associados", value: "8" }
    ]
  },
  imobiliaria: {
    accentColor: "#E2B857", // Bronze Elegante
    badgeBg: "rgba(226, 184, 87, 0.15)",
    heroTagline: "Imóveis Exclusivos & Oportunidades",
    titleSpan: "Gestão",
    titleSuffix: "Imobiliária.",
    desc: "Compra, venda e locação de residências e imóveis comerciais de médio e alto padrão com segurança jurídica absoluta.",
    icon: Building2,
    heroFallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Venda de Imóveis Selecionados", desc: "Curadoria de casas, apartamentos e terrenos com documentação 100% checada.", price: "Sob Consulta" },
      { title: "Locação com Garantia Total", desc: "Gestão completa de aluguéis com pagamento garantido e vistoria fotográfica.", price: "Sob Consulta" },
      { title: "Avaliação Imobiliária Técnica", desc: "Laudos precisos de mercado para compra, venda e processos judiciais.", price: "Sob Consulta" }
    ],
    stats: [
      { label: "Imóveis Negociados", value: "2.5k+" },
      { label: "Garantia de Locação", value: "100%" },
      { label: "Nota no Google", value: "4.9" },
      { label: "Corretores Credenciados", value: "12" }
    ]
  },
  default: {
    accentColor: "#C5A059",
    badgeBg: "rgba(197, 160, 89, 0.15)",
    heroTagline: "Atendimento VIP & Excelência",
    titleSpan: "Empresa",
    titleSuffix: "Referência.",
    desc: "Compromisso com a satisfação do cliente, agilidade no atendimento e infraestrutura completa preparada para te receber.",
    icon: Sparkles,
    heroFallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744801-30d009c534a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Atendimento Personalizado", desc: "Soluções completas desenhadas exatamente para atender sua necessidade.", price: "Sob Consulta" },
      { title: "Agendamento Prático", desc: "Reserve seu horário de forma rápida pelo WhatsApp com horários flexíveis.", price: "Sob Consulta" },
      { title: "Garantia de Satisfação", desc: "Qualidade superior e compromisso total com o seu resultado final.", price: "Sob Consulta" }
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

  const defaultMsg = encodeURIComponent(`Olá! Vi o site oficial da *${nome}* em ${cidade} e gostaria de agendar um horário.`);
  const waUrl = `https://wa.me/${waNum}?text=${defaultMsg}`;

  // Selecionar configuração temática do nicho
  const catKey = Object.keys(NICHE_CONFIGS).find((k) =>
    categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(k)
  ) || "default";

  const config = NICHE_CONFIGS[catKey] || NICHE_CONFIGS["default"];
  const NicheIcon = config.icon;

  // Priorizar Fotos Reais do Google Maps se disponíveis!
  const heroImage = realGooglePhotos.length > 0 ? realGooglePhotos[0] : config.heroFallback;
  const galleryImages = realGooglePhotos.length > 1 ? realGooglePhotos.slice(1, 7) : config.galleryFallback;

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#C5A059]/30">
      {/* Top Banner de Demonstração Interativa */}
      <div className="bg-[#161616] border-b border-white/10 p-3 text-center text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg sticky top-0 z-50">
        <Sparkles size={14} className="text-[#C5A059] animate-pulse" />
        <span>MODELO DE SITE OFICIAL — GERADO EXCLUSIVAMENTE PARA <strong className="text-[#C5A059]">{nome.toUpperCase()}</strong></span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 px-3 py-1.5 bg-[#C5A059] text-black font-extrabold rounded-lg hover:bg-[#b08d4b] transition-all text-[11px] inline-flex items-center gap-1 shadow"
        >
          <span>Agendar no WhatsApp</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Main Header Estilo Navalha & Co. */}
      <header className="bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/10 px-5 sm:px-8 h-20 flex items-center justify-between sticky top-11 z-40">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-black font-black text-xl shadow-lg"
            style={{ background: config.accentColor }}
          >
            <NicheIcon size={22} />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white tracking-wider uppercase font-serif" style={{ fontFamily: "Playfair Display, serif" }}>
              {nome}
            </h2>
            <p className="text-[10px] text-white/50 uppercase tracking-[0.25em] font-mono">{categoria} • {cidade}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-semibold text-white/70">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Avaliações</a>
          <a href="#localizacao" className="hover:text-white transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-xl flex items-center gap-2"
            style={{ background: config.accentColor, color: "#0F0F0F" }}
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Agendar Horário</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION - ESTILO EDITORIAL DE LUXO */}
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
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white font-serif"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {config.titleSpan}{" "}
              <span className="italic" style={{ color: config.accentColor }}>
                {config.titleSuffix}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-normal">
              {config.desc}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-105 shadow-2xl"
                style={{ background: config.accentColor, color: "#0F0F0F" }}
              >
                <MessageCircle size={18} />
                <span>Agendar Horário no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="group flex items-center gap-3 transition-colors text-white"
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
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10">
              {config.stats.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">{st.label}</div>
                  <span
                    className="block text-2xl sm:text-3xl font-bold font-serif"
                    style={{ color: config.accentColor, fontFamily: "Playfair Display, serif" }}
                  >
                    {st.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Imagem Principal em Proporção 4:5 com Borda Dourada */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-2xl border border-white/10 bg-[#161616]">
              <img
                src={heroImage}
                alt={nome}
                className="w-full h-full object-cover transition duration-700 hover:scale-105 filter brightness-95"
              />

              {/* Card Flutuante de Horário */}
              <div className="absolute bottom-5 left-5 right-5 p-4 shadow-2xl backdrop-blur-md bg-[#161616]/90 border-l-4 rounded-xl border border-white/10" style={{ borderLeftColor: config.accentColor }}>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ color: config.accentColor }}>
                  Próximo Horário Disponível
                </div>
                <div className="text-lg font-serif italic text-white" style={{ fontFamily: "Playfair Display, serif" }}>
                  Hoje, às 17:30
                </div>
              </div>

              {/* Badge de Fotos Reais do Google */}
              {realGooglePhotos.length > 0 && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg bg-black/80 text-white border border-white/20">
                  <Camera size={14} style={{ color: config.accentColor }} />
                  <span className="text-[11px]">Foto Real do Local</span>
                </div>
              )}

              {/* Badge de Nota Google */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-lg bg-white text-black">
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

      {/* SEÇÃO CARDÁPIO DE SERVIÇOS & RITUAIS */}
      <section id="servicos" className="py-20 border-t border-white/10 bg-[#141414] px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                Cardápio de Experiências
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif" style={{ fontFamily: "Playfair Display, serif" }}>
                Nossos Serviços.
              </h2>
              <p className="text-sm text-white/60">
                Escolha a opção desejada para você ou agende pelo WhatsApp com atendimento exclusivo.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-80"
              style={{ color: config.accentColor }}
            >
              <span>Consultar Valores & Agendar</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((srv, idx) => (
              <div
                key={idx}
                className="group p-8 transition backdrop-blur-sm bg-[#1A1A1A] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-white/30"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="text-sm italic font-semibold font-serif"
                      style={{ color: config.accentColor, fontFamily: "Playfair Display, serif" }}
                    >
                      0{idx + 1}.
                    </span>
                    <span
                      className="text-xl font-bold font-serif"
                      style={{ color: config.accentColor, fontFamily: "Playfair Display, serif" }}
                    >
                      {srv.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white" style={{ fontFamily: "Playfair Display, serif" }}>
                    {srv.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed">
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

      {/* GALERIA DE FOTOS (FOTOS REAIS DO GOOGLE MAPS OU HD) */}
      <section id="galeria" className="py-20 border-t border-white/10 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
                Portfólio & Estrutura
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif" style={{ fontFamily: "Playfair Display, serif" }}>
                Nosso Trabalho em {cidade}.
              </h2>
            </div>

            {realGooglePhotos.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Camera size={14} />
                <span>Exibindo Fotos do Google Maps</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((imgUrl, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl aspect-square border border-white/10 relative">
                <img
                  src={imgUrl}
                  alt={`${nome} galeria ${i + 1}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS REALISTAS DO GOOGLE */}
      <section id="depoimentos" className="py-20 border-t border-white/10 bg-[#141414] px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: config.accentColor }}>
              Depoimentos Verificados
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif" style={{ fontFamily: "Playfair Display, serif" }}>
              Quem Passa, Volta.
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 border border-white/10">
              <span className="font-bold text-blue-400">G</span>
              <span>Google Maps · {rating} / 5.0</span>
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span className="text-white/40">({reviews} avaliações)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rafael M.",
                desc: "Cliente Fiel",
                comment: `Atendimento sensacional da equipe da ${nome}! Ambiente impecável e o resultado superou todas as minhas expectativas.`
              },
              {
                name: "Bruno S.",
                desc: "Cliente há 2 anos",
                comment: `Fui para experimentar e virei cliente fixo. Estrutura limpa, pontualidade nos horários e profissionalismo extremo.`
              },
              {
                name: "Carlos Eduardo",
                desc: "Avaliação Google",
                comment: `Melhor lugar da região de ${cidade}. Recomendo de olhos fechados para quem busca qualidade de verdade.`
              }
            ].map((rev, i) => (
              <figure key={i} className="p-8 flex flex-col bg-[#1A1A1A] border border-white/10 rounded-2xl justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, st) => (
                      <Star key={st} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-white/90 italic">
                    "{rev.comment}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-6 border-t border-white/10">
                  <div className="font-bold text-white font-serif" style={{ fontFamily: "Playfair Display, serif" }}>
                    {rev.name}
                  </div>
                  <div className="text-xs text-white/50">{rev.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTATO ESTILO NAVALHA & CO */}
      <footer id="localizacao" className="bg-[#0A0A0A] border-t border-white/10 py-16 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-xs text-white/60">
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base font-serif" style={{ fontFamily: "Playfair Display, serif" }}>
              {nome}
            </h4>
            <p className="leading-relaxed">{config.desc}</p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider">Localização & Contato</h5>
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
            <h5 className="font-bold text-white uppercase tracking-wider">Agendamento Rápido</h5>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-[0.18em] transition-all shadow-xl"
              style={{ background: config.accentColor, color: "#0F0F0F" }}
            >
              <MessageCircle size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} {nome}. Todos os direitos reservados.</p>
          <p>Site de alta conversão desenvolvido pela RDG Digital.</p>
        </div>
      </footer>
    </div>
  );
}
