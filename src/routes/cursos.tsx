import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Play,
  Video,
  Clock,
  BookOpen,
  ChevronLeft,
  Loader2,
  Menu,
  X,
  Lock,
  ArrowLeft,
  ChevronDown,
  MonitorPlay,
  ExternalLink,
  Search
} from "lucide-react";
import { waLink } from "@/lib/site";

const TITLE = "Plataforma de Cursos — RDG Digital";
const DESCRIPTION = "Acesse todos os treinamentos e bônus em vídeo da RDG Digital em uma plataforma premium.";
const CANONICAL_URL = `${BASE_URL}/cursos`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Sou aluno e preciso de suporte com meu acesso à plataforma de cursos."
);

interface LicenseData {
  cliente: string;
  key: string;
  max_profiles: number;
  is_lifetime?: boolean;
  expires_at?: string;
  status: string;
  produto?: string;
}

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: CursosPage,
});

const COURSES = [
  {
    id: "google-ads",
    title: "Google Ads para Negócios",
    description: "Aprenda a dominar o Google Ads e crie campanhas de alta conversão para o seu negócio ou clientes.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    modules: [
      {
        title: "Google Ads (Atualizado)",
        videos: [
          { 
            id: "aula-1", 
            title: "1 • Google ADS para Vender", 
            duration: "~", 
            url: "https://drive.google.com/file/d/1ecsHD3DUV368u7PFjoYjLs8mnpjwrrzL/preview",
            description: (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><Search size={18} /></span>
                  <h4 className="font-bold text-white text-lg">Aula — Introdução ao Google ADS</h4>
                </div>
                <p className="text-white/70 leading-relaxed text-sm">
                  <span className="text-yellow-400 font-bold">💡 A segunda opção</span> para quem deseja anunciar na internet é o Google ADS, ideal para alcançar pessoas que já estão pesquisando ativamente pelo seu produto.
                </p>
                <p className="text-white/70 leading-relaxed text-sm">
                  <span className="text-red-400 font-bold">🎯 Concorrente direto</span> do Facebook ADS e do Bing ADS (este último pouco utilizado), o Google é poderoso para alcançar leads com <strong className="text-white">intenção real de compra!</strong>
                </p>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">🌐</span>
                    <strong className="text-white">Crie sua Conta no Google ADS:</strong>
                  </div>
                  <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex w-fit items-center gap-1 font-bold">
                    ➡️ Acesse aqui o Google ADS <ExternalLink size={12} />
                  </a>
                </div>
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                  <p className="text-sm text-primary/90">
                    <strong className="text-primary">🔎 Dica:</strong> Comece com campanhas simples de pesquisa, usando palavras-chave relacionadas ao seu produto. O segredo é entender a intenção do usuário e oferecer a solução certa!
                  </p>
                </div>
              </div>
            )
          },
          { 
            id: "aula-2", 
            title: "2 • Anunciando para Vender mais no Google ADS", 
            duration: "~", 
            url: "https://drive.google.com/file/d/1z1TsxPdetaxAMG0XKp3QVU8QKqa1jpgn/preview",
            description: (
              <div className="space-y-4 text-sm text-white/80">
                <p>
                  Nesta aula ensino você a criar sua campanha sem muita firula, até porque <strong className="text-primary">o simples converte!</strong> E no Google ADS se vende muito bem.
                </p>
              </div>
            )
          },
          { 
            id: "aula-3", 
            title: "3 • Instalação do Pixel Tag Google por Objetivo", 
            duration: "~", 
            url: "https://drive.google.com/file/d/1bfZrrbmFI4Gt4l12PVnlKjx_rQahQ1xK/preview",
            description: (
              <div className="space-y-4 text-sm text-white/80">
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                  <p className="text-red-100">
                    <strong className="text-red-400 block mb-1">⚠️ Nota importante:</strong> 
                    Deixo uma nota neste vídeo que no meio dele precisei gravar uma parte e adicionar, pois usei o Pixel que criei para Kiwify dentro do site, por isso siga prestando bastante atenção neste vídeo.
                  </p>
                </div>
                <p>
                  Essa configuração instalada corretamente é o <strong className="text-white">foco de boas vendas</strong> no Google ADS.
                </p>
              </div>
            )
          },
          { 
            id: "aula-4", 
            title: "4 • Quando Aumentar o Orçamento no Google AD", 
            duration: "~", 
            url: "https://drive.google.com/file/d/1i-0e8bMefxTRftnOAEarinr6r6vz-LQs/preview",
            description: (
              <div className="space-y-4 text-sm text-white/80">
                <p>
                  A decisão de aumentar o orçamento da sua campanha no Google Ads é uma estratégia crucial para impulsionar o desempenho e maximizar os resultados. Existem alguns indicadores importantes a serem considerados antes de dar esse passo significativo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <strong className="text-cyan-400 block mb-1">📈 Desempenho Atual:</strong>
                    Avalie o desempenho atual da sua campanha. Se estiver alcançando consistentemente os objetivos e proporcionando um retorno positivo sobre o investimento, pode ser um sinal de que aumentar o orçamento é uma decisão acertada.
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <strong className="text-green-400 block mb-1">💰 Margem de Lucro:</strong>
                    Considere a margem de lucro do seu produto ou serviço. Se a campanha está gerando vendas com uma margem de lucro saudável, é mais viável aumentar o orçamento para capturar mais oportunidades de negócios.
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <strong className="text-orange-400 block mb-1">📅 Sazonalidade:</strong>
                    Leve em conta a sazonalidade do seu negócio. Em períodos de alta demanda ou eventos sazonais, aumentar o orçamento pode ser uma estratégia eficaz.
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <strong className="text-red-400 block mb-1">⚔️ Concorrência:</strong>
                    Observe a concorrência. Se os concorrentes estão intensificando suas campanhas, pode ser necessário aumentar o orçamento para manter sua posição e visibilidade.
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-primary/20 bg-primary/5">
                    <strong className="text-primary block mb-1">🎯 Custo por Conversão:</strong>
                    Analise o custo por conversão. Se o custo por conversão estiver dentro das suas metas e o aumento do orçamento resultar em um custo por conversão ainda mais favorável, pode ser uma indicação para investir mais.
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <strong className="text-blue-400 block mb-1">🧪 Testes e Otimizações:</strong>
                    Antes de aumentar o orçamento de forma significativa, certifique-se de ter realizado testes e otimizações na campanha atual.
                  </div>
                </div>
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl mt-4">
                  <p className="text-indigo-100">
                    <strong className="text-indigo-400">Nota Especial:</strong> Lembre-se de que o aumento do orçamento deve ser uma decisão baseada em dados. Monitorar continuamente o desempenho da campanha e ajustar conforme necessário é essencial para garantir que cada investimento no Google Ads contribua para o crescimento e sucesso das suas vendas.
                  </p>
                </div>
              </div>
            )
          },
          { 
            id: "aula-5", 
            title: "5 • Negative Palavras Chaves e Venda Mais", 
            duration: "~", 
            url: "https://drive.google.com/file/d/1kMHe1K57lvzf-bxqhd1EFwrf5wwUND3c/preview",
            description: (
              <div className="space-y-4 text-sm text-white/80">
                <p>
                  <strong className="text-white">Palavras-chave negativas desempenham um papel crucial</strong> nas campanhas de Google Ads, proporcionando uma maneira eficaz de refinar a segmentação e direcionar o público desejado. Ao adicionar termos específicos que não estão alinhados com o propósito da campanha, é possível evitar que os anúncios sejam exibidos para usuários cujas intenções não correspondem aos produtos ou serviços oferecidos.
                </p>
                <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r-xl">
                  <p>
                    Ao incorporar palavras-chave negativas, você vai <strong className="text-green-400">economizar recursos financeiros</strong>, direcionando seus investimentos para públicos mais propensos a converter. Essa prática contribui para a otimização do orçamento, maximizando o retorno sobre o investimento (ROI) e aumentando a eficácia global da estratégia de marketing digital.
                  </p>
                </div>
                <p>
                  <strong className="text-primary">Em resumo:</strong> O uso estratégico de palavras-chave negativas no Google Ads é benéfico porque permite um direcionamento mais preciso, reduzindo o desperdício de recursos e aumentando a probabilidade de atingir usuários genuinamente interessados nos produtos anunciados.
                </p>
              </div>
            )
          },
          { 
            id: "aula-6", 
            title: "6 • Planejador e Dados", 
            duration: "~", 
            url: "https://drive.google.com/file/d/1Ihb6_pF723X2sjuLtmau9-FsBIRtD6No/preview",
            description: (
              <div className="space-y-4 flex items-center gap-4 text-sm text-white/80">
                <div className="p-4 bg-blue-500/20 text-blue-400 rounded-full shrink-0">
                  <Search size={24} />
                </div>
                <p>
                  Aula rápida sobre a ferramenta do Google ADS de planejador de palavras chaves, <strong className="text-blue-400 block mt-1 text-base">ótima para buscar palavras chaves precisas para seus anúncios!</strong>
                </p>
              </div>
            )
          }
        ]
      }
    ]
  }
];

function CursosPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [inputKey, setInputKey] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // Player State
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState<boolean>(false);
  const [activeCourseId, setActiveCourseId] = useState<string>(COURSES[0].id);
  const [activeModuleIdx, setActiveModuleIdx] = useState<number>(0);
  const [activeVideoIdx, setActiveVideoIdx] = useState<number>(0);

  const activeCourse = COURSES.find(c => c.id === activeCourseId) || COURSES[0];
  const activeVideo = activeCourse.modules[activeModuleIdx]?.videos[activeVideoIdx];

  // Auth Logic
  useEffect(() => {
    const savedKey = localStorage.getItem("rdg_license_key");
    if (savedKey) {
      validateKey(savedKey, true);
    } else {
      setIsVerifying(false);
    }
  }, []);

  const validateKey = async (keyToValidate: string, isAutoCheck = false) => {
    if (!keyToValidate.trim()) {
      setLoginError("Por favor, digite sua chave de licença.");
      return;
    }

    const cleanKey = keyToValidate.trim();
    setIsVerifying(true);
    setLoginError(null);

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

      if (!response.ok) throw new Error("Erro de resposta do servidor.");

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const lic: LicenseData = data[0];
        const isExpired = lic.expires_at && new Date(lic.expires_at) < new Date();

        if ((lic.status && lic.status.toLowerCase() === "inativo") || isExpired) {
          setLoginError("Esta chave de licença está inativa ou expirada. Fale com o suporte.");
          if (isAutoCheck) localStorage.removeItem("rdg_license_key");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          localStorage.setItem("rdg_license_key", cleanKey);
        }
      } else {
        setLoginError(`Chave "${cleanKey}" não foi localizada no banco de dados RDG.`);
        if (isAutoCheck) localStorage.removeItem("rdg_license_key");
        setIsAuthenticated(false);
      }
    } catch (err: any) {
      console.error(err);
      setLoginError("Erro ao conectar com o servidor. Verifique sua conexão com a internet.");
      setIsAuthenticated(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateKey(inputKey);
  };

  if (isVerifying && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-sm font-semibold text-muted-foreground mt-4">Validando seu acesso...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-20 pointer-events-none" />
        
        <a href="/" className="mb-8 hover:scale-105 transition-transform relative z-10">
          <div className="flex items-center gap-2">
            <MonitorPlay size={32} className="text-primary" />
            <span className="text-2xl font-black text-white tracking-tight">
              RDG <span className="text-primary font-normal">Cursos</span>
            </span>
          </div>
        </a>

        <div className="w-full max-w-md bg-[#111218] border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-xl">
          <div className="text-center space-y-2 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <Lock className="text-primary w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white">Acesso Exclusivo</h1>
            <p className="text-sm text-muted-foreground">
              Digite a sua chave de licença ativa do RDG instaPRO para acessar a plataforma de cursos.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Ex: IG-ABCD-1234..."
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
              />
            </div>

            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg flex items-start gap-2">
                <span className="mt-0.5">⚠️</span>
                <p>{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isVerifying || !inputKey.trim()}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Entrar na Plataforma <ChevronLeft className="rotate-180 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <a href={WA_SUPORTE} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-white transition-colors">
              Precisa de ajuda com seu acesso? Fale conosco
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-primary/30">
      {/* Top Navbar */}
      <header className="h-16 bg-[#111218]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden text-white/70 hover:text-white"
          >
            <Menu size={20} />
          </button>
          
          <a href="/membros" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider mr-4 hidden sm:flex">
            <ArrowLeft size={16} />
            Área de Membros
          </a>

          <div className="h-6 w-px bg-white/10 hidden sm:block"></div>

          {/* Course Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsCourseSelectorOpen(!isCourseSelectorOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors sm:ml-4"
            >
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                <MonitorPlay size={12} className="text-primary" />
              </div>
              <span className="font-bold text-sm truncate max-w-[200px]">{activeCourse.title}</span>
              <ChevronDown size={14} className={`text-white/50 transition-transform ${isCourseSelectorOpen ? "rotate-180" : ""}`} />
            </button>

            {isCourseSelectorOpen && (
              <div className="absolute top-full left-0 sm:left-4 mt-2 w-72 bg-[#111218] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 z-50">
                <div className="px-3 py-2 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                  Meus Cursos
                </div>
                {COURSES.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      setActiveCourseId(course.id);
                      setActiveModuleIdx(0);
                      setActiveVideoIdx(0);
                      setIsCourseSelectorOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors ${activeCourse.id === course.id ? "bg-white/5" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeCourse.id === course.id ? "bg-primary text-black" : "bg-white/10 text-white/70"}`}>
                      <Play size={14} fill={activeCourse.id === course.id ? "currentColor" : "none"} />
                    </div>
                    <div className="truncate">
                      <p className={`text-sm font-bold truncate ${activeCourse.id === course.id ? "text-white" : "text-white/70"}`}>{course.title}</p>
                      <p className="text-[10px] text-white/40 truncate">{course.modules.length} Módulos</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side nav */}
        <div className="flex items-center gap-4">
          <a href="/membros" className="text-xs font-bold text-white/50 hover:text-white transition-colors sm:hidden">
            Voltar
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar (Modules) */}
        <aside 
          className={`absolute lg:static top-0 left-0 h-full w-80 bg-[#0E0F17] border-r border-white/5 z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-0 lg:border-none lg:overflow-hidden"
          } ${!isSidebarOpen && "lg:hidden"}`}
        >
          <div className="p-5 border-b border-white/5 flex items-center justify-between shrink-0">
            <h2 className="font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />
              Conteúdo
            </h2>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/50 hover:text-white p-1">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeCourse.modules.map((module, mIdx) => (
              <div key={mIdx} className="border-b border-white/5 last:border-0">
                <div className="px-5 py-4 bg-white/[0.02]">
                  <h3 className="text-xs font-bold text-white/90">{module.title}</h3>
                  <p className="text-[10px] text-white/40 mt-1">{module.videos.length} aulas</p>
                </div>
                <div className="flex flex-col">
                  {module.videos.map((video, vIdx) => {
                    const isActive = activeModuleIdx === mIdx && activeVideoIdx === vIdx;
                    return (
                      <button
                        key={video.id}
                        onClick={() => {
                          setActiveModuleIdx(mIdx);
                          setActiveVideoIdx(vIdx);
                          if (window.innerWidth < 1024) setIsSidebarOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 flex items-start gap-3 transition-colors border-l-2 relative group ${
                          isActive
                            ? "bg-primary/5 border-primary"
                            : "border-transparent hover:bg-white/[0.03]"
                        }`}
                      >
                        <div className={`mt-0.5 shrink-0 transition-colors ${isActive ? "text-primary" : "text-white/30 group-hover:text-white/50"}`}>
                          {isActive ? <Play size={14} fill="currentColor" /> : <Video size={14} />}
                        </div>
                        <div className="space-y-1 pr-2">
                          <p className={`text-xs font-semibold leading-relaxed ${isActive ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                            {video.title}
                          </p>
                          <span className="text-[10px] text-white/30 flex items-center gap-1">
                            <Clock size={10} />
                            {video.duration}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Video Player Area */}
        <main className="flex-1 flex flex-col h-full overflow-y-auto relative custom-scrollbar">
          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
            
            {/* Player Container */}
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
              {activeVideo?.url ? (
                <iframe
                  src={activeVideo.url}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <Play size={48} className="text-white/20" />
                  <p className="text-white/40 text-sm font-bold">Vídeo Indisponível</p>
                </div>
              )}
            </div>

            {/* Video Info & Controls */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 bg-[#111218] p-6 sm:p-8 rounded-2xl border border-white/5">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                  <span>{activeCourse.modules[activeModuleIdx]?.title}</span>
                  <span className="text-white/20">•</span>
                  <span>Aula {activeVideoIdx + 1} de {activeCourse.modules[activeModuleIdx]?.videos.length}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeVideo?.title}
                </h1>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button 
                  disabled={activeModuleIdx === 0 && activeVideoIdx === 0}
                  onClick={() => {
                    if (activeVideoIdx > 0) {
                      setActiveVideoIdx(prev => prev - 1);
                    } else if (activeModuleIdx > 0) {
                      setActiveModuleIdx(prev => prev - 1);
                      setActiveVideoIdx(activeCourse.modules[activeModuleIdx - 1].videos.length - 1);
                    }
                  }}
                  className="px-4 py-2.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 text-xs font-bold rounded-xl border border-white/5 transition-colors flex items-center gap-2"
                >
                  <ChevronLeft size={16} />
                  Anterior
                </button>
                <button 
                  disabled={activeModuleIdx === activeCourse.modules.length - 1 && activeVideoIdx === activeCourse.modules[activeModuleIdx].videos.length - 1}
                  onClick={() => {
                    if (activeVideoIdx < activeCourse.modules[activeModuleIdx].videos.length - 1) {
                      setActiveVideoIdx(prev => prev + 1);
                    } else if (activeModuleIdx < activeCourse.modules.length - 1) {
                      setActiveModuleIdx(prev => prev + 1);
                      setActiveVideoIdx(0);
                    }
                  }}
                  className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-30 text-xs font-extrabold rounded-xl transition-all transform hover:scale-105 disabled:hover:scale-100 shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  Próxima Aula
                  <ChevronLeft size={16} className="rotate-180" />
                </button>
              </div>
            </div>

            {/* Description (Video Specific or Course fallback) */}
            <div className="p-6 sm:p-8 bg-[#0E0F17] rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-4">
                {activeVideo?.description ? 'Sobre a Aula' : 'Sobre o Curso'}
              </h3>
              <div className="text-white/60 leading-relaxed">
                {activeVideo?.description || (
                  <p className="text-sm max-w-3xl">{activeCourse.description}</p>
                )}
              </div>
            </div>
            
            <div className="h-8"></div> {/* Bottom padding */}
          </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
}
