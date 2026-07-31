import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Phone,
  MapPin,
  Star,
  MessageCircle,
  ShieldCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Award,
  Users,
  ChevronRight,
  ArrowRight,
  Sparkles
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
}

export const Route = createFileRoute("/demo")({
  validateSearch: (search: Record<string, unknown>): DemoSearchParams => {
    return {
      nome: typeof search.nome === "string" ? search.nome : typeof search.cliente === "string" ? search.cliente : "Empresa de Exemplo",
      categoria: typeof search.categoria === "string" ? search.categoria : "Serviços Especializados",
      cidade: typeof search.cidade === "string" ? search.cidade : "São Paulo - SP",
      endereco: typeof search.endereco === "string" ? search.endereco : "",
      phone: typeof search.phone === "string" ? search.phone : typeof search.telefone === "string" ? search.telefone : "+55 11 99999-8888",
      raw_phone: typeof search.raw_phone === "string" ? search.raw_phone : "",
      rating: typeof search.rating === "string" ? search.rating : "4.9",
      reviews: typeof search.reviews === "string" ? search.reviews : "249",
    };
  },
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: FullSiteDemoPage,
});

// Imagens em alta resolução do Unsplash por Categoria
const CATEGORY_IMAGES: Record<string, { hero: string; gallery: string[]; services: { title: string; desc: string }[] }> = {
  imobiliaria: {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Venda & Locação de Imóveis", desc: "Casas, apartamentos e terrenos com curadoria exclusiva e documentação 100% em dia." },
      { title: "Consultoria Imobiliária VIP", desc: "Avaliação imobiliária precisa e auxílio completo em financiamentos bancários." },
      { title: "Gestão de Ativos Imobiliários", desc: "Administração de aluguéis com garantia de pagamento e vistoria detalhada." }
    ]
  },
  barbearia: {
    hero: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Corte de Cabelo Premium", desc: "Técnicas modernas de degradê, tesoura e visagismo personalizado para seu estilo." },
      { title: "Barba com Toalha Quente", desc: "Alinhamento com navalha, hidratação profunda e ritual relaxante de toalha quente." },
      { title: "Dia do Noivo & Pacotes VIP", desc: "Espaço exclusivo com bebidas premium, sinuca e atendimento personalizado." }
    ]
  },
  odontologia: {
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Alinhadores Invisíveis", desc: "Tecnologia ortodôntica moderna e discreta para transformar seu sorriso rapidamente." },
      { title: "Clareamento Dental Laser", desc: "Procedimento seguro e eficaz para dentes brancos e brilhantes já na 1ª sessão." },
      { title: "Implantes & Facetas", desc: "Reabilitação oral completa com próteses estéticas de alta durabilidade." }
    ]
  },
  estetica: {
    hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Harmonização Facial", desc: "Preenchimento labial, toxina botulínica e bioestimuladores de colágeno." },
      { title: "Limpeza de Pele Profunda", desc: "Remoção de impurezas, peeling de diamante e hidratação com ouro." },
      { title: "Massagem Modeladora & Drenagem", desc: "Protocolos corporais exclusivos para redução de medidas e retenção." }
    ]
  },
  advocacia: {
    hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Direito Empresarial & Cível", desc: "Blindagem patrimonial, contratos estratégicos e assessoria jurídica contínua." },
      { title: "Direito Trabalhista", desc: "Defesa de direitos de colaboradores e prevenção de passivos corporativos." },
      { title: "Consultoria & Pareceres", desc: "Análise prévia de riscos e representação ágil em processos judiciais." }
    ]
  },
  default: {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744801-30d009c534a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Atendimento Personalizado VIP", desc: "Equipe especializada pronta para entender e resolver sua necessidade." },
      { title: "Agendamento Prático e Rápido", desc: "Reserve seu horário online ou fale conosco direto pelo WhatsApp." },
      { title: "Garantia de Satisfação 100%", desc: "Compromisso com prazos, qualidade superior e excelência no serviço." }
    ]
  }
};

function FullSiteDemoPage() {
  const search = Route.useSearch();

  const nome = search.nome || search.cliente || "Empresa de Exemplo";
  const categoria = search.categoria || "Serviços Especializados";
  const cidade = search.cidade || "São Paulo - SP";
  const endereco = search.endereco || `Rua Principal, 100 - ${cidade}`;
  const phone = search.phone || search.telefone || "+55 11 99999-8888";
  const rawPhone = (search.raw_phone || phone).replace(/\D/g, "");
  const waNum = rawPhone.length > 5 ? (rawPhone.startsWith("55") ? rawPhone : `55${rawPhone}`) : "5511999998888";
  const rating = search.rating || "4.9";
  const reviews = search.reviews || "249";

  const defaultMsg = encodeURIComponent(`Olá! Vi o site oficial da *${nome}* e gostaria de agendar um atendimento.`);
  const waUrl = `https://wa.me/${waNum}?text=${defaultMsg}`;

  // Selecionar conjunto de imagens por categoria
  const catKey = Object.keys(CATEGORY_IMAGES).find((k) =>
    categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(k)
  ) || "default";

  const assets = CATEGORY_IMAGES[catKey] || CATEGORY_IMAGES["default"];

  return (
    <div className="min-h-screen bg-[#07080D] text-white flex flex-col font-sans selection:bg-primary/30">
      {/* Top Banner de Demonstração Interativa */}
      <div className="bg-gradient-to-r from-amber-500 via-primary to-emerald-500 p-2.5 text-center text-xs font-black text-black flex items-center justify-center gap-2 shadow-lg sticky top-0 z-50">
        <Sparkles size={14} className="animate-pulse" />
        <span>PÁGINA DE DEMONSTRAÇÃO EXCLUSIVA — CRIADA PARA {nome.toUpperCase()}</span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-3 py-1 bg-black text-white font-extrabold rounded-lg hover:bg-black/80 transition-all text-[11px] inline-flex items-center gap-1"
        >
          <span>Falar com Consultor</span>
          <ArrowRight size={12} />
        </a>
      </div>

      {/* Main Header */}
      <header className="bg-[#0E0F17]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-9 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-black font-black text-lg flex items-center justify-center shadow-lg shadow-primary/20">
            {nome.charAt(0)}
          </div>
          <div>
            <h2 className="font-black text-lg text-white tracking-tight leading-tight">{nome}</h2>
            <p className="text-[11px] text-white/50">{categoria} • {cidade}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white bg-white/5 px-3 py-2 rounded-xl border border-white/10"
          >
            <Phone size={14} className="text-primary" />
            <span>{phone}</span>
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-1.5"
          >
            <MessageCircle size={14} />
            <span>Agendar WhatsApp</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.hero}
            alt={nome}
            className="w-full h-full object-cover object-center filter brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080D] via-[#07080D]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-white/90 shadow-xl">
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            <span>{rating} no Google Maps ({reviews} avaliações de clientes)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Excelência e Qualidade em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-amber-300">{categoria}</span>
          </h1>

          <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
            Atendimento especializado, infraestrutura moderna e compromisso total com a sua satisfação em <strong>{cidade}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-black text-sm rounded-2xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Falar Diretamente pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* RECURSOS & DIFERENCIAIS */}
      <section className="py-12 bg-[#0E0F17] border-y border-white/10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2 border border-primary/20">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-extrabold text-sm text-white">Garantia de Qualidade</h4>
            <p className="text-[11px] text-white/50">Profissionais certificados</p>
          </div>

          <div className="space-y-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2 border border-emerald-500/20">
              <Clock size={20} />
            </div>
            <h4 className="font-extrabold text-sm text-white">Atendimento Ágil</h4>
            <p className="text-[11px] text-white/50">Sem filas ou esperas</p>
          </div>

          <div className="space-y-1">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/20">
              <Award size={20} />
            </div>
            <h4 className="font-extrabold text-sm text-white">⭐ {rating} de 5.0</h4>
            <p className="text-[11px] text-white/50">Avaliado no Google</p>
          </div>

          <div className="space-y-1">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-2 border border-cyan-500/20">
              <Users size={20} />
            </div>
            <h4 className="font-extrabold text-sm text-white">+{reviews} Atendimentos</h4>
            <p className="text-[11px] text-white/50">Clientes satisfeitos</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS EXCLUSIVOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Nossos Serviços Exclusivos
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Soluções Sob Medida para Você
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#0E0F17] border border-white/10 hover:border-primary/50 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary font-black text-lg flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="font-extrabold text-lg text-white group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 border-t border-white/5 text-xs font-bold text-primary hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Saber Mais / Agendar</span>
                <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA DE FOTOS DO ESPAÇO */}
      <section className="py-16 bg-[#0E0F17] border-y border-white/10 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-3xl font-black text-white">Conheça Nossa Estrutura</h3>
            <p className="text-xs text-white/50">Ambiente preparado para oferecer o máximo conforto e segurança</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {assets.gallery.map((img, idx) => (
              <div key={idx} className="h-64 rounded-2xl overflow-hidden border border-white/10 group relative">
                <img
                  src={img}
                  alt={`${nome} galeria ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS REALISTAS DO GOOGLE */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-yellow-400 uppercase tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
            Avaliações Verificadas no Google
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Ricardo Fonseca",
              comment: `Atendimento impecável da equipe da ${nome}! Prazos cumpridos rigorosamente e resultado superou as expectativas.`,
              stars: 5,
              date: "Há 2 semanas"
            },
            {
              name: "Fernanda Lima",
              comment: "Melhor atendimento da região de " + cidade + ". Estrutura muito limpa, moderna e profissionais muito atenciosos.",
              stars: 5,
              date: "Há 1 mês"
            },
            {
              name: "Lucas Mendes",
              comment: "Excelência do início ao fim. Recomendo de olhos fechados!",
              stars: 5,
              date: "Há 3 semanas"
            }
          ].map((rev, idx) => (
            <div key={idx} className="bg-[#0E0F17] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-white/40">{rev.date}</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed italic">"{rev.comment}"</p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white font-bold text-[10px] flex items-center justify-center">
                  {rev.name.charAt(0)}
                </div>
                <span className="text-xs font-bold text-white">{rev.name}</span>
                <CheckCircle2 size={12} className="text-emerald-400 ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CONTATO */}
      <footer className="bg-[#07080D] border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs text-white/50">
          <div className="space-y-1">
            <h4 className="font-bold text-white text-sm">{nome}</h4>
            <p>📍 {endereco}</p>
            <p>📞 {phone}</p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-500 text-black font-black rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Falar com Atendimento</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
