import { createFileRoute, useSearch } from "@tanstack/react-router";
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
  ExternalLink
} from "lucide-react";

const TITLE = "Demonstração de Website — RDG Digital";
const DESCRIPTION = "Página de demonstração de site de alta conversão para empresas locais.";
const CANONICAL_URL = `${BASE_URL}/demo`;

export const Route = createFileRoute("/demo")({
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
  const search = useSearch({ strict: false }) as Record<string, string>;

  const nome = search.nome || search.cliente || "Empresa de Exemplo";
  const categoria = search.categoria || "Serviços Especializados";
  const cidade = search.cidade || "São Paulo - SP";
  const endereco = search.endereco || `Rua Principal, 100 - ${cidade}`;
  const phone = search.phone || search.telefone || "+55 11 99999-8888";
  const rawPhone = (search.raw_phone || phone).replace(/\D/g, "");
  const waNum = rawPhone.startsWith("55") ? rawPhone : `55${rawPhone}`;
  const rating = search.rating || "4.9";
  const reviews = search.reviews || "249";

  const defaultMsg = encodeURIComponent(`Olá! Vi o site oficial da *${nome}* e gostaria de agendar um atendimento.`);
  const waUrl = `https://wa.me/${waNum}?text=${defaultMsg}`;

  // Selecionar conjunto de imagens por categoria
  const catKey = Object.keys(CATEGORY_IMAGES).find((k) =>
    categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(k)
  ) || "default";

  const assets = CATEGORY_IMAGES[catKey];

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

        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-white/70">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
          <a href="#avaliacoes" className="hover:text-primary transition-colors">Avaliações</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <MessageCircle size={16} />
          <span className="hidden sm:inline">Agendar no WhatsApp</span>
        </a>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[550px] sm:min-h-[650px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={assets.hero}
            alt={nome}
            className="w-full h-full object-cover object-center filter brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080D] via-[#07080D]/70 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-black uppercase tracking-wider">
            <Award size={14} />
            <span>Excelência & Referência em {categoria}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none drop-shadow-lg">
            {nome}
          </h1>

          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Atendimento personalizado, estrutura moderna e profissionais altamente treinados para garantir a sua total satisfação em {cidade}.
          </p>

          {/* Rating Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-yellow-500/30 px-4 py-2 rounded-2xl text-xs font-bold text-yellow-400 shadow-xl">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span>{rating} de 5.0</span>
              <span className="text-white/40">({reviews} avaliações no Google Maps)</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm rounded-2xl shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              <span>Falar Conosco no WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              <span>Conhecer Nossos Serviços</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0E0F17] border-b border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-primary">10+ Anos</div>
            <div className="text-xs text-white/50 font-medium">De Tradição & Qualidade</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">+2.500</div>
            <div className="text-xs text-white/50 font-medium">Clientes Atendidos</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-yellow-400">{rating} / 5.0</div>
            <div className="text-xs text-white/50 font-medium">Nota no Google Maps</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">100% VIP</div>
            <div className="text-xs text-white/50 font-medium">Atendimento Personalizado</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 px-6 max-w-6xl mx-auto space-y-10 w-full">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="text-3xl font-black text-white tracking-tight">O Que Fazemos por Você</h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto">
            Soluções completas com os melhores materiais, técnicas avançadas e atendimento sob medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#0E0F17] border border-white/10 hover:border-primary/50 rounded-3xl p-6 space-y-4 transition-all hover:shadow-2xl hover:shadow-primary/5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{srv.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{srv.desc}</p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
              >
                <span>Consultar Horários</span>
                <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="galeria" className="py-16 px-6 bg-[#0B0C12] border-y border-white/10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Estrutura & Ambiência</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Conheça Nosso Espaço</h2>
            <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto">
              Ambiente preparado para oferecer o máximo conforto e bem-estar durante seu atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {assets.gallery.map((imgUrl, i) => (
              <div key={i} className="aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-white/10 group relative">
                <img
                  src={imgUrl}
                  alt={`Fotos ${nome} ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white">{nome} — Foto {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Google Reviews Section */}
      <section id="avaliacoes" className="py-16 px-6 max-w-6xl mx-auto space-y-10 w-full">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Depoimentos Reais</span>
          <h2 className="text-3xl font-black text-white tracking-tight">O Que Nossos Clientes Dizem</h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto">
            Avaliações verificadas registradas no Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Lucas Ferreira", text: "Atendimento impecável! Pontualidade, profissionais atenciosos e ambiente de altíssimo nível. Recomendo de olhos fechados!", time: "Há 1 semana" },
            { name: "Mariana Souza", text: "Melhor experiência em " + categoria + " da região. O cuidado com os detalhes faz toda a diferença. Nota 10!", time: "Há 2 semanas" },
            { name: "Carlos Eduardo", text: "Excelente estrutura e comunicação pelo WhatsApp. Fui muito bem atendido e superou minhas expectativas.", time: "Há 1 mês" }
          ].map((rev, i) => (
            <div key={i} className="bg-[#0E0F17] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center border border-primary/30">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                    <span className="text-[10px] text-white/40">{rev.time} • Google Review</span>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-white/70 italic leading-relaxed">"{rev.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map & Location Section */}
      <section id="contato" className="py-16 px-6 bg-[#0A0B10] border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Localização & Contato</span>
              <h2 className="text-3xl font-black text-white">Venha nos Visitar</h2>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Estamos estrategicamente localizados para facilitar seu acesso. Venha tomar um café conosco!
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3 bg-[#11121C] p-4 rounded-2xl border border-white/10">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Endereço Completo:</h4>
                  <p className="text-white/70">{endereco}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#11121C] p-4 rounded-2xl border border-white/10">
                <Phone size={20} className="text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Telefone & WhatsApp:</h4>
                  <p className="text-white/70 font-mono">{phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#11121C] p-4 rounded-2xl border border-white/10">
                <Clock size={20} className="text-yellow-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Horário de Funcionamento:</h4>
                  <p className="text-white/70">Segunda a Sábado: 08:00 às 20:00</p>
                </div>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Chamar no WhatsApp Agora</span>
            </a>
          </div>

          {/* Card Visual de Localização */}
          <div className="bg-[#11121C] border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="aspect-video bg-black/50 rounded-2xl overflow-hidden relative border border-white/10 flex items-center justify-center">
              <img
                src={assets.hero}
                alt="Mapa da empresa"
                className="w-full h-full object-cover opacity-40 blur-xs"
              />
              <div className="absolute text-center space-y-2 p-4 bg-black/70 backdrop-blur-md rounded-2xl border border-white/10">
                <MapPin size={32} className="text-primary mx-auto animate-bounce" />
                <h4 className="font-bold text-sm text-white">{nome}</h4>
                <p className="text-[11px] text-white/70">{endereco}</p>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(nome + " " + endereco)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline pt-1"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#040407] border-t border-white/10 py-8 px-6 text-center text-xs text-white/40 space-y-2">
        <p>© 2026 {nome}. Todos os direitos reservados.</p>
        <p className="text-[10px] opacity-60">Página de demonstração desenvolvida por RDG Digital • Tecnologia & Performance B2B</p>
      </footer>
    </div>
  );
}
