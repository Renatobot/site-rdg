import { useState, useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Download,
  Play,
  CheckCircle2,
  ShieldCheck,
  Zap,
  HelpCircle,
  MessageCircle,
  FileArchive,
  Terminal,
  Sparkles,
  Lock,
  UserCheck,
  Video,
  Key,
  ExternalLink,
  ChevronRight,
  Info,
  LogOut,
  AlertCircle,
  Loader2,
  Camera,
  FileText,
  Clock,
  Crown,
  Copy,
  Check,
  Calculator,
  Flame,
  BookOpen,
  Send,
  Tv,
  Menu,
  X,
  Search,
  Globe,
  MapPin
} from "lucide-react";

const TITLE = "Área de Membros & Treinamento VIP — RDG instaPRO";
const DESCRIPTION =
  "Área exclusiva para clientes RDG instaPRO: Baixe o software instalador, assista aos tutoriais em vídeo, consulte o status da licença e acesse bônus exclusivos.";
const CANONICAL_URL = `${BASE_URL}/membros`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Sou aluno da Área de Membros e preciso de suporte com a minha licença/treinamento."
);

const WA_UPSELL_PROSPECCAO = waLink(
  "Olá! Gostaria de garantir o acesso ao novo Software de Prospecção B2B Google Maps."
);

// Link de Download do Instalador ZIP (Dropbox Direct 1-Click Download)
const DOWNLOAD_ZIP_URL = "https://www.dropbox.com/scl/fo/dt1wornxoi3o7r8mbvxqa/AHgL-XE1noUweqCiPes0UXc?rlkey=ixkg579ok6lzecx5x1pwndb6w&st=5ebzm8eh&dl=1";

// Link da Pasta da Extensão no Dropbox (Download Direto da Pasta - 1-Click Direct Download)
const DOWNLOAD_EXTENSION_FOLDER_URL = "https://www.dropbox.com/scl/fo/yr1sv7ggqe1b1en7mhtjx/ANCfO7LWYw_hFaLosB6GrJA?rlkey=pasvz7ehttiusa5g6so28r2d9&st=3q7emobf&dl=1";

interface LicenseData {
  cliente: string;
  key: string;
  max_profiles: number;
  is_lifetime?: boolean;
  expires_at?: string;
  status: string;
  produto?: string;
}

export const Route = createFileRoute("/membros")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: MembrosPage,
});

function MembrosPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [inputKey, setInputKey] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [licenseInfo, setLicenseInfo] = useState<LicenseData | null>(null);
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [introVideoUrl, setIntroVideoUrl] = useState<string>("https://www.loom.com/embed/c380d7a292c5427ca529f41a83f59d0d");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // Script & Robot Generator Enhanced State
  const [generatorMode, setGeneratorMode] = useState<"abordagem" | "robo">("abordagem");
  const [selectedSegment, setSelectedSegment] = useState<string>("servicos");
  const [selectedRobotStrategy, setSelectedRobotStrategy] = useState<string>("boas_vindas");
  const [customName, setCustomName] = useState<string>("");
  const [customService, setCustomService] = useState<string>("");
  const [customTarget, setCustomTarget] = useState<string>("");
  const [customCity, setCustomCity] = useState<string>("");
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  // Check saved license key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem("rdg_license_key");
    if (savedKey) {
      validateKey(savedKey, true);
    } else {
      setIsVerifying(false);
    }
  }, []);

  const validateKey = async (keyToValidate: string, isAutoCheck = false) => {
    const cleanKey = keyToValidate.trim().toUpperCase();
    if (!cleanKey) {
      setLoginError("Digite a sua chave de licença para acessar.");
      setIsVerifying(false);
      return;
    }

    setIsVerifying(true);
    setLoginError(null);

    // Chaves Master / Dev
    if (cleanKey.startsWith("MAPS-") || cleanKey.startsWith("PROSPECT-") || cleanKey.startsWith("MASTER-") || cleanKey === "RDG-MASTER-PROSPECT") {
      setLicenseInfo({
        cliente: "Administrador / Membro Master",
        key: cleanKey,
        max_profiles: 999,
        is_lifetime: true,
        status: "ativo",
        produto: "master",
      });
      setIsAuthenticated(true);
      localStorage.setItem("rdg_license_key", cleanKey);
      setIsVerifying(false);
      return;
    }

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

      if (!response.ok) {
        throw new Error("Erro de resposta do servidor de licenças.");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const lic: LicenseData = data[0];
        const isExpired =
          lic.expires_at && new Date(lic.expires_at) < new Date();

        if (
          (lic.status && lic.status.toLowerCase() === "inativo") ||
          isExpired
        ) {
          setLoginError("Esta chave de licença está inativa ou expirada. Fale com o suporte.");
          if (isAutoCheck) localStorage.removeItem("rdg_license_key");
          setIsAuthenticated(false);
        } else {
          setLicenseInfo(lic);
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

  const handleLogout = () => {
    localStorage.removeItem("rdg_license_key");
    setIsAuthenticated(false);
    setLicenseInfo(null);
    setInputKey("");
    setLoginError(null);
  };

  const getValidityDetails = (lic: LicenseData) => {
    if (lic.is_lifetime) {
      return { text: "Vitalício (Sem Expiração)", badge: "✨ Vitalício", isWarning: false };
    }
    if (lic.expires_at) {
      const exp = new Date(lic.expires_at);
      const now = new Date();
      const diffTime = exp.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const dateStr = exp.toLocaleDateString("pt-BR");
      if (diffDays <= 0) {
        return { text: "Expirado", badge: "❌ Expirado", isWarning: true };
      }
      return {
        text: `Vence em ${dateStr} (${diffDays} dias)`,
        badge: `⏳ ${diffDays} dias restantes`,
        isWarning: diffDays <= 5,
      };
    }
    return { text: "Permanente", badge: "✨ Vitalício", isWarning: false };
  };

  // ROI Calculator Bonus State
  const [ticketPrice, setTicketPrice] = useState<number>(200);
  const [monthlyGoal, setMonthlyGoal] = useState<number>(5000);
  const [conversionRate, setConversionRate] = useState<number>(2);

  const handleCopyScriptText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptId(id);
    setTimeout(() => setCopiedScriptId(null), 2500);
  };

  const getPersonalizedAbordagemScripts = () => {
    const name = customName.trim() || "{SEU_NOME}";
    const srv = customService.trim() || "{SEU_SERVIÇO}";
    const tgt = customTarget.trim() || "{NICHO_ALVO}";
    const cty = customCity.trim() || "";

    const data: Record<string, { id: string; title: string; badge: string; text: string; tip: string }[]> = {
      servicos: [
        {
          id: "serv-1",
          title: "🔥 Abordagem de Conexão & Elogio Sincero",
          badge: "Alta Reciprocidade",
          text: `Opa! Tudo bem? Estava navegando no Instagram e encontrei o seu perfil. Achei sensacional o padrão do seu trabalho com ${srv}${cty ? ` em ${cty}` : ""}!\n\nVocês estão conseguindo absorver novos clientes neste mês ou a agenda por aí já está 100% lotada?`,
          tip: "Dica: Perfeita para médicos, dentistas, advogados, esteticistas, personal trainers e consultores.",
        },
        {
          id: "serv-2",
          title: "⚡ Curiosidade + Apresentação Curta (Vídeo de 2 Minutos)",
          badge: "Alta Taxa de Resposta",
          text: `Olá! Vi que você atua no segmento de ${tgt}. ${name !== "{SEU_NOME}" ? `Sou o ${name} e desenvolvemos` : "Desenvolvemos"} um método que ajuda empresas do seu nicho a atrair de 5 a 15 novos clientes qualificados por semana vindo dos concorrentes.\n\nPosso te enviar um vídeo rápido de 2 minutos no WhatsApp mostrando como aplicar isso aí no seu negócio?`,
          tip: "Dica: Não tente vender no 1º Direct! O segredo é oferecer a demonstração curta de 2 minutos.",
        },
        {
          id: "serv-3",
          title: "🎯 Diagnóstico Rápido de 3 Pontos (Gatilho da Autoridade)",
          badge: "Gera Autoridade",
          text: `Fala! Notei que seu perfil tem uma ótima apresentação, mas percebi 2 detalhes simples que poderiam estar gerando pelo menos 3x mais orçamentos diários no seu WhatsApp.\n\nFiz um diagnóstico rápido de 3 pontos para ${tgt}. Se fizer sentido, posso te mandar um áudio de 1 minuto aqui no Direct?`,
          tip: "Dica: Mande um áudio personalizado assim que a pessoa responder aceitando.",
        },
      ],
      saude: [
        {
          id: "saude-1",
          title: "🏥 Atração para Avaliação VIP & Tratamentos",
          badge: "Saúde & Estética",
          text: `Olá, tudo ótimo? Vi que você acompanha procedimentos e cuidados de estética aqui no Instagram! ✨\n\nLiberamos uma condição exclusiva para atendimentos de ${srv}${cty ? ` em ${cty}` : ""} nesta semana. Posso te passar os detalhes dos horários disponíveis no Direct?`,
          tip: "Dica: Excelente para clínicas de estética, dentistas, biomédicos e dermatologistas.",
        },
        {
          id: "saude-2",
          title: "✨ Cortesia / Diagnóstico Personalizado",
          badge: "Agendamentos Locais",
          text: `Opa, tudo bem? ${name !== "{SEU_NOME}" ? `Sou o ${name} e preparamos` : "Preparamos"} uma avaliação cortesia para quem deseja realizar procedimentos de ${srv}${cty ? ` em ${cty}` : ""}.\n\nVocê teria interesse em conhecer nossa estrutura ou já faz acompanhamento em outro lugar?`,
          tip: "Dica: Filtra rapidamente quem tem interesse real de agendamento.",
        },
      ],
      advocacia: [
        {
          id: "adv-1",
          title: "⚖️ Análise Preventiva & Passivos Jurídicos/Tributários",
          badge: "B2B & Corporativo",
          text: `Olá, tudo bem? ${name !== "{SEU_NOME}" ? `Sou o ${name}.` : ""} Mapeamos empresas e executivos do setor de ${tgt}${cty ? ` em ${cty}` : ""} e notamos um ponto cego comum na proteção jurídica e tributária das operações.\n\nVocês já possuem uma assessoria especializada ou gostariam de receber uma análise preventiva sem custo?`,
          tip: "Dica: Posicionamento executivo de alto nível.",
        },
        {
          id: "adv-2",
          title: "📄 Checklist Prático em PDF",
          badge: "Isca B2B",
          text: `Fala! Vejo que você comanda uma operação de destaque no setor de ${tgt}. Preparamos um checklist com os 4 erros mais frequentes que geram passivos operacionais na sua área.\n\nPosso te enviar o resumo em PDF por aqui?`,
          tip: "Dica: Entrega rápida de valor antes de agendar uma reunião.",
        },
      ],
      imobiliario: [
        {
          id: "imob-1",
          title: "🏠 Oportunidade Pré-Lançamento (Investidor/Moradia)",
          badge: "Alto Padrão",
          text: `Olá, tudo bem? Notei seu interesse no mercado imobiliário${cty ? ` em ${cty}` : ""}.\n\nEntrou hoje no nosso sistema uma oportunidade exclusiva de imóvel em pré-lançamento com condição especial para investidores. Quer que eu te envie a ficha técnica no WhatsApp?`,
          tip: "Dica: Gera senso de oportunidade única.",
        },
      ],
      ecommerce: [
        {
          id: "ecom-1",
          title: "🏷️ Cupom VIP de Boas-Vindas + Frete Grátis",
          badge: "Lojas Virtuais",
          text: `Olá! Vi que você acompanha produtos de ${tgt}! 🛍️\n\nLiberamos um Cupom VIP de 15% OFF + Frete Grátis exclusivo para quem nos acompanha aqui no Instagram. Quer que eu te envie o código promocional?`,
          tip: "Dica: Ideal para lojas de roupas, calçados, joias e cosméticos.",
        },
      ],
      infoproduto: [
        {
          id: "info-1",
          title: "📚 Liberação de Material / Guia Gratuito",
          badge: "Isca Digital",
          text: `Opa, tudo bem? Vi que você acompanha conteúdos sobre ${tgt}.\n\nAcabamos de liberar um Guia Prático em PDF mostrando o passo a passo para alcançar resultados com ${srv} sem complicações.\n\nQuer dar uma olhada? É 100% gratuito!`,
          tip: "Dica: Mande o link assim que a pessoa aceitar.",
        },
      ],
      b2b: [
        {
          id: "b2b-1",
          title: "🚀 Prospecção B2B de Alta Performance",
          badge: "B2B & Agências",
          text: `Olá, tudo bem? ${name !== "{SEU_NOME}" ? `Sou o ${name}.` : ""} Ajudamos empresas de ${tgt} a estruturar processos de atração de clientes com ${srv}.\n\nVocês já possuem uma estrutura automatizada de vendas ou dependem apenas de indicações no momento?`,
          tip: "Dica: Excelente filtro para tomadores de decisão.",
        },
      ],
    };

    return data[selectedSegment] || data.servicos;
  };

  const getPersonalizedRobotScripts = () => {
    const srv = customService.trim() || "{SEU_SERVIÇO}";
    const tgt = customTarget.trim() || "{NICHO_ALVO}";
    const cty = customCity.trim() || "";

    const robotData: Record<string, { id: string; title: string; description: string; varA: string; varB: string; varC: string; spintaxText: string }[]> = {
      boas_vindas: [
        {
          id: "rob-bv-1",
          title: "👋 Boas-Vindas para Seguidores do Concorrente",
          description: "Ideal para configurar na função 'Enviar Direct' quando o robô captura novos seguidores dos perfis alvos.",
          varA: `Olá! Vi que você acompanha conteúdos sobre ${tgt}. Seja muito bem-vindo(a)! Se precisar de ajuda com ${srv}, estou à disposição aqui no Direct.`,
          varB: `Opa, tudo bem? Notei que você curte o universo de ${tgt}! Qualquer dúvida sobre ${srv}, pode me mandar uma mensagem por aqui.`,
          varC: `Fala! Prazer ter você por aqui. Trabalho ajudando pessoas no segmento de ${tgt} com ${srv}. Fique à vontade para me chamar no Direct!`,
          spintaxText: `{Olá|Opa|Fala}! {Vi que você acompanha conteúdos sobre|Notei que você curte o universo de|Prazer ter você por aqui no nicho de} ${tgt}. {Se precisar de ajuda com|Qualquer dúvida sobre|Se quiser saber mais sobre} ${srv}, {estou à disposição|pode me mandar uma mensagem|fique à vontade para me chamar} no Direct!`,
        },
      ],
      presente_cupom: [
        {
          id: "rob-cup-1",
          title: "🎁 Presente VIP / Cupom de Boas-Vindas",
          description: "Excelente para converter contatos frios oferecendo um incentivo exclusivo no primeiro Direct.",
          varA: `Olá! Separamos uma condição VIP especial para quem busca ${srv}${cty ? ` em ${cty}` : ""} nesta semana. Quer que eu te envie os detalhes no Direct?`,
          varB: `Opa, tudo bem? Liberamos um presente exclusivo com desconto para ${srv}. Posso te mandar o link promocional por aqui?`,
          varC: `Oi! Selecionamos alguns perfis que acompanham ${tgt} para receber uma condição de presente. Gostaria de receber o código de desconto?`,
          spintaxText: `{Olá|Opa|Oi}! {Separamos uma condição VIP especial para|Liberamos um presente exclusivo com desconto para|Selecionamos alguns perfis que buscam} ${srv}${cty ? ` em ${cty}` : ""}. {Quer que eu te envie os detalhes no Direct?|Posso te mandar o link promocional por aqui?|Gostaria de receber esse presente no Direct?}`,
        },
      ],
      engajamento_curto: [
        {
          id: "rob-curto-1",
          title: "⚡ Pergunta Curta & Humana (Menor Risco de Bloqueio)",
          description: "Mensagens curtas que simulam digitação humana, gerando alta taxa de resposta sem acionar spam.",
          varA: `Opa, tudo bem? Você atua no segmento de ${tgt}? Tenho uma pergunta rápida sobre ${srv}.`,
          varB: `Fala, como vai? Você trabalha com ${tgt}${cty ? ` em ${cty}` : ""}? Queria te fazer uma pergunta bem rápida.`,
          varC: `Olá, tudo ótimo? Vi seu perfil e queria te fazer uma pergunta rápida sobre ${tgt}, pode ser?`,
          spintaxText: `{Opa|Fala|Olá}, {tudo bem?|como vai?|tudo ótimo?} {Você atua no segmento de|Você trabalha com|Vi seu perfil e queria saber se você é do nicho de} ${tgt}. {Tenho uma pergunta rápida sobre|Queria te fazer uma pergunta bem rápida sobre|Posso te fazer uma pergunta rápida sobre} ${srv}?`,
        },
      ],
      whatsapp_grupo: [
        {
          id: "rob-wpp-1",
          title: "📲 Direcionamento Direto para o WhatsApp",
          description: "Encaminha o lead do Instagram diretamente para a sua equipe de vendas ou grupo no WhatsApp.",
          varA: `Olá! Para te enviar a apresentação completa sobre ${srv}, posso te mandar o link direto do nosso WhatsApp?`,
          varB: `Opa, tudo bem? Para facilitar o envio de informações sobre ${srv}, prefere conversar por aqui ou pelo WhatsApp?`,
          varC: `Fala! Quer receber nossa proposta de ${srv} direto no WhatsApp? Posso te passar o número do atendimento!`,
          spintaxText: `{Olá|Opa|Fala}! {Para te enviar a apresentação completa sobre|Para facilitar o envio de informações sobre|Quer receber nossa proposta de} ${srv}, {posso te mandar o link direto do nosso WhatsApp?|prefere conversar por aqui ou pelo WhatsApp?|posso te passar nosso número de atendimento?}`,
        },
      ],
    };

    return robotData[selectedRobotStrategy] || robotData.boas_vindas;
  };

  const calculatedMetrics = useMemo(() => {
    const neededSales = Math.ceil(monthlyGoal / (ticketPrice || 1));
    const neededDirectsMonth = Math.ceil(neededSales / (conversionRate / 100));
    const neededDirectsDay = Math.ceil(neededDirectsMonth / 30);
    const recommendedProfiles = Math.max(1, Math.ceil(neededDirectsDay / 40));

    return {
      neededSales,
      neededDirectsMonth,
      neededDirectsDay,
      recommendedProfiles,
    };
  }, [ticketPrice, monthlyGoal, conversionRate]);

  // INITIAL SPINNER
  if (isVerifying && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
          <p className="text-sm font-semibold text-muted-foreground">
            Verificando credenciais na nuvem RDG Digital...
          </p>
        </div>
      </div>
    );
  }

  // LOGIN GATE MODAL
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] flex flex-col justify-between">
        <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <a href="/extensao" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-primary">RDG</span> instaPRO
            </span>
          </a>
          <a
            href={WA_SUPORTE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 transition-all"
          >
            <MessageCircle size={14} />
            <span>Suporte VIP</span>
          </a>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 py-12">
          <div className="w-full max-w-md bg-[#111218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center mx-auto mb-3">
                <Lock size={22} />
              </div>
              <h1 className="text-2xl font-extrabold text-white">
                Área de Membros VIP
              </h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Digite a sua <strong>Chave de Licença</strong> enviada no seu WhatsApp ou E-mail para liberar o acesso ao download e treinamentos.
              </p>
            </div>

            {loginError && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-3 text-xs text-rose-300">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Sua Chave de Licença (Key)
                </label>
                <div className="relative">
                  <Key
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value.toUpperCase())}
                    placeholder="IG-XXXX-XXXX-XXXX"
                    className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white font-mono placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-all uppercase tracking-wider"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Verificando Chave...</span>
                  </>
                ) : (
                  <>
                    <UserCheck size={18} />
                    <span>Entrar na Área de Membros</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                Ainda não comprou ou perdeu sua chave?
              </p>
              <a
                href={WA_SUPORTE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>Falar com o suporte no WhatsApp</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center text-xs text-muted-foreground border-t border-white/5">
          © 2026 RDG Digital. Todos os direitos reservados.
        </footer>
      </div>
    );
  }

  const valInfo = licenseInfo ? getValidityDetails(licenseInfo) : null;

  // FULL MEMBERS AREA
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground font-sans selection:bg-primary selection:text-[#0A0A0A] scroll-smooth">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/90 border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Toggle Drawer Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all shadow-sm active:scale-95"
              title="Abrir Menu de Conteúdos"
            >
              {isNavOpen ? <X size={16} /> : <Menu size={16} />}
              <span className="hidden sm:inline">Menu de Conteúdos</span>
            </button>

            <a href="/extensao" className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">RDG</span> Digital
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                ACESSO LIBERADO
              </span>
            </a>
          </div>

          {/* User License Status & Logout Button */}
          <div className="flex items-center gap-3">
            {licenseInfo && valInfo && (
              <div className="hidden md:flex flex-col text-right text-xs">
                <div className="flex items-center justify-end gap-2">
                  <span className="font-bold text-white">
                    👤 {licenseInfo.cliente}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                      licenseInfo.is_lifetime
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                        : valInfo.isWarning
                        ? "bg-rose-500/20 text-rose-300 border-rose-500/30"
                        : "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    }`}
                  >
                    {valInfo.badge}
                  </span>
                </div>
                <span className="text-muted-foreground mt-0.5">
                  Licença: <code className="text-primary">{licenseInfo.key}</code>
                </span>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg hover:bg-rose-500/20 transition-all"
              title="Sair / Trocar Chave"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* SIDEBAR NAVIGATION DRAWER */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setIsNavOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="relative z-10 w-80 max-w-[85vw] bg-[#0E0F17] border-r border-white/10 shadow-2xl flex flex-col justify-between p-6 space-y-6 h-full overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">
                    <span className="text-primary">RDG</span> Digital
                  </span>
                  <span className="text-[10px] bg-primary/20 text-primary font-bold px-2 py-0.5 rounded-md border border-primary/30">
                    ÁREA VIP
                  </span>
                </div>
                <button
                  onClick={() => setIsNavOpen(false)}
                  className="p-2 text-muted-foreground hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-1.5 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-3 mb-2 block">
                  Índice da Área de Membros
                </span>

                {[
                  { href: "/prospeccao", label: "Prospecção Google Maps B2B", icon: Search },
                  { href: "#download", label: "Baixar Robô instaPRO", icon: Download },
                  { href: "#instalacao", label: "Passo a Passo de Instalação", icon: Terminal },
                  { href: "#aulas", label: "Treinamento em Vídeo", icon: Video },
                  { href: "#gerador-scripts", label: "Gerador de Scripts", icon: MessageCircle },
                  { href: "#calculadora-roi", label: "Calculadora de ROI", icon: Calculator },
                  { href: "/cursos", label: "Plataforma de Cursos", icon: Tv },
                  { href: "#outros-produtos", label: "Prompts (+700) & E-Book", icon: Camera },
                  { href: "#faq", label: "Perguntas Frequentes", icon: HelpCircle },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsNavOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-3 font-semibold text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10"
                  >
                    <item.icon size={16} className="text-primary" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-muted-foreground space-y-1">
              <p className="font-bold text-white">RDG Digital © 2026</p>
              <p className="text-[10px] opacity-70">Painel VIP de Licenças & Treinamentos</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-10 pb-8 px-4 border-b border-white/5 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full">
            <CheckCircle2 size={14} />
            <span>
              BEM-VINDO(A), {licenseInfo?.cliente ? licenseInfo.cliente.toUpperCase() : "MEMBRO VIP"}!
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Área de Softwares, Prospecção & Treinamentos
          </h1>

          {licenseInfo && valInfo && (
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#111218] border border-white/10 rounded-xl text-xs">
                <Clock size={14} className="text-primary" />
                <span className="text-muted-foreground">
                  Status da Licença: <strong className="text-white">{valInfo.text}</strong>
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NOVO BANNER DE DESTAQUE: FERRAMENTA DE PROSPECÇÃO GOOGLE MAPS B2B */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="bg-gradient-to-r from-[#181928] via-[#111218] to-[#1a1528] border border-primary/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-primary text-black font-extrabold text-[10px] rounded-full uppercase tracking-wider shadow">
                  🔥 NOVO SOFTWARE SAAS
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-[10px] rounded-full border border-emerald-500/30">
                  GERADOR DE SITES AO VIVO
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                <Search size={28} className="text-primary shrink-0" />
                <span>Software de Prospecção B2B Google Maps</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Encontre empresas locais sem website, gere demonstrações completas de sites oficiais com fotos e avaliações reais e envie abordagens de alta conversão no WhatsApp em 1-clique.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Filtro de Empresas Sem Website</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Gerador de Scripts de Abordagem</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Painel Kanban de Vendas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href="/prospeccao"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-black text-sm rounded-2xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
              >
                <Search size={18} />
                <span>Abrir Ferramenta de Prospecção</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* DOWNLOAD SECTION (MÓDULO 0) */}
        <section id="download" className="relative">
          <div className="bg-gradient-to-br from-[#12131A] to-[#0D0E12] border border-primary/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md">
                  <CheckCircle2 size={14} />
                  <span>VERSÃO OFICIAL DISPONÍVEL (V1.0)</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Baixe o Instalador do Robô RDG instaPRO
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clique no botão ao lado para baixar o pacote oficial compactado contendo o <strong>RDG instaPRO</strong>, o <strong>RDG Atualizador</strong>, a Extensão Chrome e o instalador inteligente.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
                <a
                  href={DOWNLOAD_ZIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/25"
                >
                  <Download size={20} />
                  <span>Baixar Instalador Automático (.ZIP)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OUTROS PRODUTOS & BÔNUS EXCLUSIVOS RDG DIGITAL */}
        <section id="outros-produtos" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Crown size={16} />
                <span>OUTRAS SOLUÇÕES & BIBLIOTECA DE RECURSOS</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Outros Softwares & Bônus RDG Digital
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card Software Prospecção B2B */}
            <div className="bg-gradient-to-b from-[#181928] to-[#111218] border border-primary/30 hover:border-primary/60 rounded-2xl p-6 flex flex-col justify-between transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center">
                  <Search size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                  <span>SOFTWARE DE PROSPECÇÃO</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  Prospecção B2B Google Maps
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Localize empresas sem site no Google Maps, gere um modelo de site real em 1-clique e envie abordagens pelo WhatsApp.
                </p>
              </div>

              <a
                href="/prospeccao"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-black font-extrabold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                <span>Acessar Ferramenta de Prospecção</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Plataforma de Cursos RDG */}
            <div className="bg-gradient-to-b from-[#1A1628] to-[#10101C] border border-primary/30 hover:border-primary/60 rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-primary/10 transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center">
                  <Tv size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                  <span>DISPONÍVEL NO SEU PLANO</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  Plataforma de Cursos RDG
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cursos de tráfego pago, criação de criativos, CapCut, copy e VSL.
                </p>
              </div>

              <a
                href="/cursos"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl border border-white/10 transition-all"
              >
                <span>Acessar Cursos</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Produto 3: Pack de Prompts */}
            <div className="bg-gradient-to-b from-[#14151F] to-[#111218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Camera size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                  <span>BIBLIOTECA DE PROMPTS</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Prompts de IA (+700)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Prompts prontos para gerar fotos profissionais com IA no Google Gemini.
                </p>
              </div>

              <a
                href="https://sites.rdgdigital.com.br/prompts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-bold text-xs rounded-xl transition-all"
              >
                <span>Acessar Prompts</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* SUPPORT FOOTER CTA */}
        <section className="text-center py-8 border-t border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">
            Ainda tem alguma dúvida ou precisa de suporte técnico?
          </h3>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Nossa equipe de suporte técnico VIP está disponível no WhatsApp para te ajudar.
          </p>

          <a
            href={WA_SUPORTE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all transform hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            <span>Falar com o Suporte VIP no WhatsApp</span>
          </a>
        </section>
      </main>

      {/* Mini Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>© 2026 RDG Digital. Todos os direitos reservados. Plataforma de Softwares & Prospecção.</p>
      </footer>
    </div>
  );
}
