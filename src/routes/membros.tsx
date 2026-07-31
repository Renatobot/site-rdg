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
} from "lucide-react";

const TITLE = "Área de Membros & Treinamento VIP — RDG instaPRO";
const DESCRIPTION =
  "Área exclusiva para clientes RDG instaPRO: Baixe o software instalador, assista aos tutoriais em vídeo, consulte o status da licença e acesse bônus exclusivos.";
const CANONICAL_URL = `${BASE_URL}/membros`;

const SUPABASE_URL = "https://yyoffdpzzoxrgigqupif.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10";

const WA_SUPORTE = waLink(
  "Olá, equipe RDG Digital! Sou aluno da Área de Membros do RDG instaPRO e preciso de suporte com a minha licença/treinamento."
);

// Link de Download do Instalador ZIP (Dropbox Direct 1-Click Download)
const DOWNLOAD_ZIP_URL = "https://www.dropbox.com/scl/fo/dt1wornxoi3o7r8mbvxqa/AHgL-XE1noUweqCiPes0UXc?rlkey=ixkg579ok6lzecx5x1pwndb6w&st=5ebzm8eh&dl=1";

// Link da Pasta da Extensão no Dropbox (Download Direto da Pasta - 1-Click Direct Download)
const DOWNLOAD_EXTENSION_FOLDER_URL = "https://www.dropbox.com/scl/fo/yr1sv7ggqe1b1en7mhtjx/ANCfO7LWYw_hFaLosB6GrJA?rlkey=pasvz7ehttiusa5g6so28r2d9&st=3q7emobf&dl=1";

// Link do Player IPTV Streaming (Hospedado no próprio domínio)
const STREAMING_PLAYER_URL = "https://rdgdigital.com.br/streaming/";

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

  // PLR Course State
  const [activeCourseModule, setActiveCourseModule] = useState<number>(0);
  const [activeCourseVideoIdx, setActiveCourseVideoIdx] = useState<number>(0);

  const COURSE_MODULES = [
    {
      title: "Módulo 1: Introdução",
      videos: [
        { id: "aula-1", title: "Aula 1: O que é o Google Ads", duration: "~", url: "https://drive.google.com/file/d/1SFGTH8sTjm6aN5Dx-1_JblX43d8tLYA8/preview" },
        { id: "aula-2", title: "Aula 2: Criando uma conta na Plataforma", duration: "~", url: "https://drive.google.com/file/d/1KTIT_cPMIvASwKW1ivC076kzQQGkjKUI/preview" },
        { id: "aula-2-1", title: "Aula 2.1: Cupom no Google Ads", duration: "~", url: "https://drive.google.com/file/d/1J5rRu36iorjcUzv4lPt492qErwBPl16i/preview" },
        { id: "aula-3", title: "Aula 3: Visão geral", duration: "~", url: "https://drive.google.com/file/d/1bsEDrV8QhFQXG1t2xPxb3FFP_fzI0oSr/preview" }
      ]
    },
    {
      title: "Módulo 2: Configurações Iniciais",
      videos: [
        { id: "aula-4", title: "Aula 4: Configuração de pagamento", duration: "~", url: "https://drive.google.com/file/d/1Ef-qjN3knF-g_lSBFHO6BzOQv-eUV8hM/preview" },
        { id: "aula-4-1", title: "Aula 4.1: Complemento", duration: "~", url: "https://drive.google.com/file/d/158vMpTjtz23HWMltvkqJuAaGO2sskFX8/preview" },
        { id: "aula-5", title: "Aula 5: Planejador de palavras chaves", duration: "~", url: "https://drive.google.com/file/d/17HOdrmMk6PoYJ5g65AIbjjg3zQHi9Gwc/preview" }
      ]
    },
    {
      title: "Módulo 3: Criando Campanhas",
      videos: [
        { id: "aula-6", title: "Aula 6: Configurando Campanha", duration: "~", url: "https://drive.google.com/file/d/12TY9zfci54pgHDZBGJsF4esjZGNmetI1/preview" },
        { id: "aula-6-1", title: "Aula 6.1: Grupo de anúncios", duration: "~", url: "https://drive.google.com/file/d/1b0IshRu8ffFDtAxxYy-tNSTs3rAiekS5/preview" },
        { id: "aula-6-2", title: "Aula 6.2: Anúncios", duration: "~", url: "https://drive.google.com/file/d/1Hfqst1tyYtV7BZRow4sowjIwzUEX4rXy/preview" },
        { id: "aula-7", title: "Aula 7: Anúncios Duplicados e responsivos", duration: "~", url: "https://drive.google.com/file/d/1NYlJKfXrBKuMW7HvkvX_HlZ2Yl4U15nm/preview" }
      ]
    },
    {
      title: "Módulo 4: Otimização",
      videos: [
        { id: "aula-8", title: "Aula 8: Palavras chaves", duration: "~", url: "https://drive.google.com/file/d/1U8kpX93rgHf8sCHiyS-iDLyPAZ69JZj1/preview" },
        { id: "aula-8-1", title: "Aula 8.1: Palavras negativas", duration: "~", url: "https://drive.google.com/file/d/1zR8PrwW7V_nz-VZ-BwNIJ8fsTqQ9--fY/preview" },
        { id: "aula-8-2", title: "Aula 8.2: Termos de pesquisa", duration: "~", url: "https://drive.google.com/file/d/1EtsMVpZ6i7FMtjfkHzJs1lHGf21ELF8U/preview" },
        { id: "aula-9", title: "Aula 9: Extensões de anúncios", duration: "~", url: "https://drive.google.com/file/d/1CThOxbrLJNXlZPRDK2gKKYKKBySD-c7L/preview" }
      ]
    },
    {
      title: "Módulo 5: Finalização e Suporte",
      videos: [
        { id: "aula-10", title: "Aula 10: Dados demográficos", duration: "~", url: "https://drive.google.com/file/d/1q6hitLzRjmVtANolTOsPznfzCkF486fL/preview" },
        { id: "aula-11", title: "Aula 11: Conversão", duration: "~", url: "https://drive.google.com/file/d/1lnvQlHpGXTF6RQ6jbjW8oqbEhenTwbBB/preview" },
        { id: "aula-12", title: "Aula 12: Suporte", duration: "~", url: "https://drive.google.com/file/d/1uqnGNoCl74aT3w3snJxs8GXsTPNtpBQ-/preview" }
      ]
    }
  ];

  const currentCourseVideo = COURSE_MODULES[activeCourseModule]?.videos[activeCourseVideoIdx];


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
  const [conversionRate, setConversionRate] = useState<number>(2); // 2% conversion

  // Function to copy text with feedback
  const handleCopyScriptText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptId(id);
    setTimeout(() => setCopiedScriptId(null), 2500);
  };

  // Dynamic Abordagem Scripts (Manual Direct)
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

  // Dynamic Robot Scripts (Spintax & Anti-Bloqueio)
  const getPersonalizedRobotScripts = () => {
    const name = customName.trim() || "{SEU_NOME}";
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

  // ROI Calculator Calculations
  const calculatedMetrics = useMemo(() => {
    const neededSales = Math.ceil(monthlyGoal / (ticketPrice || 1));
    const neededDirectsMonth = Math.ceil(neededSales / (conversionRate / 100));
    const neededDirectsDay = Math.ceil(neededDirectsMonth / 30);
    const recommendedProfiles = Math.max(1, Math.ceil(neededDirectsDay / 40)); // 40 directs per profile per day safe limit

    return {
      neededSales,
      neededDirectsMonth,
      neededDirectsDay,
      recommendedProfiles,
    };
  }, [ticketPrice, monthlyGoal, conversionRate]);

  const videoLessons = [
    {
      id: 0,
      title: "01. Conhecendo a Ferramenta (Visão Geral)",
      duration: "04:15 min",
      description:
        "Visão geral completa de todas as abas e recursos do RDG instaPRO. Conheça a ferramenta por dentro e entenda o funcionamento de cada módulo.",
      thumbnailText: "Visão Geral & Tour das Abas",
      videoUrl: "https://www.loom.com/embed/7cf42e6c624e42548361daf77af317fc",
    },
    {
      id: 1,
      title: "02. Piloto Automático, Alvos & Ações Inteligentes",
      duration: "08:30 min",
      description:
        "Aprenda a configurar o Piloto Automático e a aba Alvos e Ações: escolha seu público-alvo, aplique filtros de gênero, curtidas e visualização de stories.",
      thumbnailText: "Piloto Automático & Alvos",
      videoUrl: "https://www.loom.com/embed/245f4329e59e411fab185ca8771a96ec",
    },
    {
      id: 2,
      title: "03. Como Cadastrar e Gerenciar Perfis no Robô",
      duration: "07:15 min",
      description:
        "Aprenda a criar perfis independentes do Chromium para gerenciar de 1 até dezenas de contas de Instagram simultaneamente.",
      thumbnailText: "Gerenciamento de Perfis",
    },
    {
      id: 3,
      title: "04. Como Extrair Seguidores dos Concorrentes com Filtros",
      duration: "09:40 min",
      description:
        "Como configurar os filtros de prospecção inteligente para capturar o público-alvo exato dos seus concorrentes no Instagram.",
      thumbnailText: "Filtros & Prospecção",
    },
    {
      id: 4,
      title: "05. Disparo Automático de Directs & Boas Práticas",
      duration: "11:10 min",
      description:
        "Estratégias seguras de abordagem no Direct para converter potenciais clientes sem risco de bloqueios ou restrições.",
      thumbnailText: "Automação de Directs",
    },
    {
      id: 5,
      title: "06. Como Atualizar em 1-Clique com o RDG Atualizador",
      duration: "04:30 min",
      description:
        "Veja como usar o RDG Atualizador para manter o seu robô sincronizado com as últimas regras e atualizações do Instagram.",
      thumbnailText: "Atualizador em 1-Clique",
    },
    {
      id: 6,
      title: "07. Método Alternativo: Instalação Direta no Chrome",
      duration: "03:15 min",
      description:
        "Tutorial prático mostrando como instalar a extensão diretamente no Google Chrome pelo Modo do Desenvolvedor (chrome://extensions), caso o instalador automático do Windows apresente bloqueios.",
      thumbnailText: "Instalação Direta no Chrome",
      videoUrl: "https://www.loom.com/embed/2235b1c6f775474ba9740f6ac8a6bca4",
    },
    {
      id: 7,
      title: "08. Como Desinstalar e Reinstalar o Robô no Windows",
      duration: "04:10 min",
      description:
        "Tutorial completo mostrando como remover instalações antigas e realizar a reinstalação do RDG instaPRO do zero no Windows sem conflitos.",
      thumbnailText: "Desinstalação & Reinstalação Limpa",
      videoUrl: "https://www.loom.com/embed/2887a552a72c47bdb7b79608db5fc196",
    },
  ];

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
                <span className="text-primary">RDG</span> instaPRO
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
                  Licença: <code className="text-primary">{licenseInfo.key}</code> •{" "}
                  {licenseInfo.max_profiles >= 999
                    ? "Plano Ilimitado"
                    : `${licenseInfo.max_profiles} Perfil(is)`}
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

      {/* SIDEBAR NAVIGATION DRAWER (GAVETA LATERAL RETRÁTIL) */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fundo Escuro / Overlay */}
          <div
            onClick={() => setIsNavOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Painel Deslizante da Gaveta */}
          <div className="relative z-10 w-80 max-w-[85vw] bg-[#0E0F17] border-r border-white/10 shadow-2xl flex flex-col justify-between p-6 space-y-6 h-full overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">
                    <span className="text-primary">RDG</span> instaPRO
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
                  { href: "#boas-vindas", label: "Visão Geral / Tour", icon: Sparkles },
                  { href: "#download", label: "Baixar Instalador & Extensão", icon: Download },
                  { href: "#instalacao", label: "Passo a Passo de Instalação", icon: Terminal },
                  { href: "#aulas", label: "Treinamento em Vídeo (8 Aulas)", icon: Video },
                  { href: "#gerador-scripts", label: "Gerador de Scripts & Spintax", icon: MessageCircle },
                  { href: "#calculadora-roi", label: "Calculadora de Metas & ROI", icon: Calculator },
                  { href: "#outros-produtos", label: "Prompts (+700) & E-Book VIP", icon: Camera },
                  { href: "#curso-plr", label: "Curso Google Ads (Bônus)", icon: Video },
                  { href: "#faq", label: "Perguntas Frequentes & Suporte", icon: HelpCircle },
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
            Área de Downloads & Treinamentos em Vídeo
          </h1>

          {licenseInfo && valInfo && (
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#111218] border border-white/10 rounded-xl text-xs">
                <Clock size={14} className="text-primary" />
                <span className="text-muted-foreground">
                  Status da Licença: <strong className="text-white">{valInfo.text}</strong>
                </span>
                <span className="text-white/20">|</span>
                <span className="text-muted-foreground">
                  Limite contratado: <strong className="text-primary">{licenseInfo.max_profiles >= 999 ? "Ilimitado" : `${licenseInfo.max_profiles} Perfil(is)`}</strong>
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* INTRODUCTORY WELCOME VIDEO SECTION */}
        <section id="boas-vindas" className="bg-[#111218] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
                <Sparkles size={16} />
                <span>ASSISTA PRIMEIRO — VISÃO GERAL DA ÁREA VIP</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Tour Completo pela Área de Membros & Ferramentas
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Assista a este vídeo introdutório para entender como realizar o download do robô, acessar os Prompts de IA, o E-book PDF e todas as ferramentas.
              </p>
            </div>
            <span className="text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 font-bold shrink-0">
              👋 Comece por Aqui
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="relative aspect-video bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
                {introVideoUrl ? (
                  <iframe
                    src={
                      introVideoUrl.includes("youtube.com/watch?v=")
                        ? introVideoUrl.replace("watch?v=", "embed/")
                        : introVideoUrl.includes("youtu.be/")
                        ? `https://www.youtube.com/embed/${introVideoUrl.split("youtu.be/")[1]}`
                        : introVideoUrl
                    }
                    title="Tour Completo pela Área de Membros"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                    <div className="relative z-10 space-y-3 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                        <Play size={28} fill="currentColor" className="ml-1" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          VÍDEO INTRODUTÓRIO & TOUR COMPLETO
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1">
                          Visão Geral: Como Aproveitar 100% da sua Área de Membros
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duração: ~04:00 min
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                O que você vai aprender neste vídeo:
              </h4>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Como baixar & instalar:</strong> Onde encontrar o instalador em 1-clique.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Biblioteca de Prompts:</strong> Como acessar e fazer login na área de prompts de IA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>E-Book VIP PDF:</strong> Como consultar o manual antibloqueio e aquecimento de contas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Ferramentas Bônus:</strong> Gerador de scripts e calculadora de prospecção.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DOWNLOAD SECTION (MÓDULO 0) */}
        <section id="download" className="relative">
          <div className="bg-gradient-to-br from-[#12131A] to-[#0D0E12] border border-primary/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md">
                  <CheckCircle2 size={14} />
                  <span>VERSÃO OFICIAL DISPONÍVEL (V1.0)</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Baixe o Instalador Completo
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clique no botão ao lado para baixar o pacote oficial compactado contendo o <strong>RDG instaPRO</strong>, o <strong>RDG Atualizador</strong>, a Extensão Chrome e o instalador inteligente.
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-primary" />
                    <span>Compatível com Windows 7, 8, 10 e 11</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap size={16} className="text-primary" />
                    <span>Instalação Automática em 1-Clique</span>
                  </div>
                </div>
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

                <a
                  href={DOWNLOAD_EXTENSION_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500/15 text-amber-300 font-bold text-xs rounded-xl border border-amber-500/30 hover:bg-amber-500/25 transition-all transform hover:scale-[1.02] shadow-lg shadow-amber-500/10"
                >
                  <Download size={16} />
                  <span>Baixar Apenas Extensão (Download Direto 1-Clique)</span>
                </a>

                <span className="text-xs text-muted-foreground text-center lg:text-right">
                  Instalador completo (~220 MB) ou Pasta da extensão solta para o Chrome.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INSTALATION STEPS INFOGRAPHIC */}
        <section id="instalacao" className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Terminal className="text-primary" size={24} />
              <span>Passo a Passo de Instalação (Escolha o seu Método)</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Escolha abaixo entre o Instalador Automático do Windows ou a Instalação Direta no Google Chrome:
            </p>
          </div>

          {/* MÉTODO 1: INSTALADOR AUTOMÁTICO WINDOWS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-lg w-fit">
              <Zap size={16} />
              <span>MÉTODO 1: INSTALADOR AUTOMÁTICO DO WINDOWS (.ZIP COMPLETO)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  icon: FileArchive,
                  title: "Descompactar o ZIP",
                  desc: "Após o download, extraia o arquivo ZIP para uma pasta no seu computador (ex: Área de Trabalho).",
                },
                {
                  step: "02",
                  icon: Terminal,
                  title: "Executar Instalador",
                  desc: "Clique com o botão direito no arquivo INSTALAR.bat e selecione 'Executar como Administrador'.",
                },
                {
                  step: "03",
                  icon: CheckCircle2,
                  title: "Atalhos Criados",
                  desc: "O instalador cria automaticamente os atalhos 'RDG instaPRO' e 'RDG Atualizador' no seu Desktop.",
                },
                {
                  step: "04",
                  icon: Key,
                  title: "Ativar Licença",
                  desc: `Insira sua chave (${licenseInfo?.key || "IG-XXXX"}) na aba 'Licença & Contas' para validar o robô.`,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#111218] border border-white/10 rounded-xl p-5 relative flex flex-col justify-between hover:border-primary/40 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary/40">
                        {item.step}
                      </span>
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <h4 className="font-bold text-white text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MÉTODO 2: INSTALAÇÃO DIRETA NO GOOGLE CHROME */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-lg w-fit">
              <ExternalLink size={16} />
              <span>MÉTODO 2: INSTALAÇÃO DIRETA NO GOOGLE CHROME (PASTA DA EXTENSÃO)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  icon: Download,
                  title: "Baixar a Extensão",
                  desc: "Clique no botão 'Baixar Apenas Extensão' no topo e descompacte a pasta da extensão no seu computador.",
                },
                {
                  step: "02",
                  icon: ExternalLink,
                  title: "Abrir chrome://extensions",
                  desc: "Abra o Google Chrome e digite chrome://extensions na barra de endereços para acessar as extensões.",
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Modo do Desenvolvedor",
                  desc: "Ative a chave 'Modo do desenvolvedor' no canto superior direito da página do Chrome.",
                },
                {
                  step: "04",
                  icon: CheckCircle2,
                  title: "Carregar sem compactar",
                  desc: "Clique em 'Carregar sem compactar' no canto superior esquerdo e selecione a pasta da extensão descompactada.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#111218] border border-amber-500/20 rounded-xl p-5 relative flex flex-col justify-between hover:border-amber-500/50 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-amber-400/40">
                        {item.step}
                      </span>
                      <item.icon className="text-amber-400" size={20} />
                    </div>
                    <h4 className="font-bold text-white text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALTERNATIVE INSTALLATION METHOD VIDEO TUTORIAL */}
        <section className="bg-[#111218] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md">
                <Video size={14} />
                <span>MÉTODO ALTERNATIVO DE INSTALAÇÃO</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 flex items-center gap-2">
                <span>Vídeo Tutorial: Instalação Direta no Google Chrome</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Assista a este vídeo se o instalador automático do Windows apresentar bloqueios no seu computador:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="relative aspect-video bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.loom.com/embed/2235b1c6f775474ba9740f6ac8a6bca4"
                  title="Tutorial Método Alternativo de Instalação no Chrome"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-3 bg-white/5 border border-white/10 p-5 rounded-xl text-xs text-muted-foreground">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-400" />
                <span>Resumo do Método Direto:</span>
              </h4>
              <ol className="space-y-2.5 list-decimal list-inside leading-relaxed">
                <li>Abra o Chrome no endereço <code className="text-amber-300 font-mono bg-black/40 px-1.5 py-0.5 rounded border border-white/10">chrome://extensions</code></li>
                <li>Ative o <strong>Modo do desenvolvedor</strong> (canto superior direito).</li>
                <li>Clique em <strong>Carregar sem compactar</strong> (canto superior esquerdo).</li>
                <li>Selecione a pasta da extensão descompactada.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* REINSTALLATION VIDEO TUTORIAL */}
        <section className="bg-[#111218] border border-primary/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-md">
                <Video size={14} />
                <span>SUPORTE DE REINSTALAÇÃO</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 flex items-center gap-2">
                <span>Vídeo Tutorial: Como Desinstalar e Reinstalar no Windows</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Assista a este vídeo se quiser remover versões anteriores e fazer uma reinstalação limpa do zero:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="relative aspect-video bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.loom.com/embed/2887a552a72c47bdb7b79608db5fc196"
                  title="Tutorial Como Desinstalar e Reinstalar no Windows"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-3 bg-white/5 border border-white/10 p-5 rounded-xl text-xs text-muted-foreground">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Passos para Reinstalação Limpa:</span>
              </h4>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li>Excluir atalhos e pastas temporárias antigas.</li>
                <li>Baixar o novo pacote `.ZIP` atualizado.</li>
                <li>Extrair para a Área de Trabalho antes de abrir.</li>
                <li>Executar o <code className="text-primary font-mono bg-black/40 px-1.5 py-0.5 rounded border border-white/10">INSTALAR.bat</code> como Administrador.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VIDEO TRAINING MODULE (MODULE 1) */}
        <section id="aulas" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                <Video size={16} />
                <span>TREINAMENTO PRÁTICO EM VÍDEO</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Módulo 1: Dominando o RDG instaPRO
              </h2>
            </div>
            <span className="text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              8 Aulas Práticas (Assista na ordem)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Video Player Box */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video bg-[#111218] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
                {videoLessons[activeVideo].videoUrl ? (
                  <iframe
                    src={
                      videoLessons[activeVideo].videoUrl.includes("youtube.com/watch?v=")
                        ? videoLessons[activeVideo].videoUrl.replace("watch?v=", "embed/")
                        : videoLessons[activeVideo].videoUrl.includes("youtu.be/")
                        ? `https://www.youtube.com/embed/${videoLessons[activeVideo].videoUrl.split("youtu.be/")[1]}`
                        : videoLessons[activeVideo].videoUrl
                    }
                    title={videoLessons[activeVideo].title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                    <div className="relative z-10 space-y-4 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center mx-auto shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        <Play size={28} fill="currentColor" className="ml-1" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {videoLessons[activeVideo].thumbnailText}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1">
                          {videoLessons[activeVideo].title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duração: {videoLessons[activeVideo].duration}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {!videoLessons[activeVideo].videoUrl && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between text-xs text-amber-300 font-medium">
                  <span>ℹ️ Conteúdo em atualização contínua. Assista às Aulas 01, 02 e 07 liberadas!</span>
                </div>
              )}

              <div className="bg-[#111218] border border-white/10 rounded-xl p-5 space-y-2">
                <h4 className="font-bold text-white text-base">
                  Sobre esta aula:
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {videoLessons[activeVideo].description}
                </p>
              </div>
            </div>

            {/* Video Playlist Sidebar */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
                Lista de Aulas do Treinamento
              </h4>

              <div className="space-y-2">
                {videoLessons.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveVideo(lesson.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      activeVideo === lesson.id
                        ? "bg-primary/10 border-primary text-white"
                        : "bg-[#111218] border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          activeVideo === lesson.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/5 text-muted-foreground"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                          {lesson.title}
                        </h5>
                        <span className="text-[11px] text-muted-foreground">
                          {lesson.duration}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className={
                        activeVideo === lesson.id ? "text-primary" : "text-muted-foreground"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FERRAMENTA INTERATIVA BÔNUS 1: GERADOR AVANÇADO DE SCRIPTS & MENSAGENS PARA O ROBÔ */}
        <section id="gerador-scripts" className="bg-[#111218] border border-primary/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary">
                <Sparkles size={16} />
                <span>GERADOR DE INTELIGÊNCIA DE VENDAS RDG</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Gerador de Scripts de Abordagem & Mensagens para o Robô
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Gere abordagens personalizadas de alta conversão para o Direct ou copie formatos anti-bloqueio (Spintax) para cadastrar na automação do RDG instaPRO.
              </p>
            </div>

            {/* Alternador de Modo: Abordagem Manual vs Robô instaPRO */}
            <div className="flex bg-[#0A0A0A] p-1.5 rounded-xl border border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => setGeneratorMode("abordagem")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  generatorMode === "abordagem"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <MessageCircle size={14} />
                <span>1. Abordagem Ativa (Manual)</span>
              </button>
              <button
                type="button"
                onClick={() => setGeneratorMode("robo")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  generatorMode === "robo"
                    ? "bg-emerald-500 text-black shadow-md font-extrabold"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <Zap size={14} />
                <span>2. Mensagens para o Robô (Spintax)</span>
              </button>
            </div>
          </div>

          {/* CAMPOS DE PERSONALIZAÇÃO AO VIVO */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <UserCheck size={14} />
                <span>Personalize os Campos Abaixo para Atualizar os Scripts em Tempo Real:</span>
              </span>
              <span className="text-[10px] text-muted-foreground hidden sm:inline">
                *Substituição automática no texto
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase">
                  Seu Nome / Empresa
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Ex: Renato / RDG Digital"
                  className="w-full bg-[#111218] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-muted-foreground/40 focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase">
                  Seu Serviço / Produto Principal
                </label>
                <input
                  type="text"
                  value={customService}
                  onChange={(e) => setCustomService(e.target.value)}
                  placeholder="Ex: Gestão de Tráfego / Tratamentos Estéticos"
                  className="w-full bg-[#111218] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-muted-foreground/40 focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase">
                  Nicho / Concorrente Alvo
                </label>
                <input
                  type="text"
                  value={customTarget}
                  onChange={(e) => setCustomTarget(e.target.value)}
                  placeholder="Ex: Odontologia / Lojas de Roupas"
                  className="w-full bg-[#111218] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-muted-foreground/40 focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase">
                  Sua Cidade / Região
                </label>
                <input
                  type="text"
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  placeholder="Ex: Rio de Janeiro / São Paulo"
                  className="w-full bg-[#111218] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-muted-foreground/40 focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>

          {/* MÓDULO 1: ABORDAGEM ATIVA (MANUAL) */}
          {generatorMode === "abordagem" && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                  Selecione o seu segmento de atuação:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "servicos", label: "💼 Serviços & Consultoria" },
                    { id: "saude", label: "🏥 Saúde, Odonto & Estética" },
                    { id: "advocacia", label: "⚖️ Advocacia & B2B" },
                    { id: "imobiliario", label: "🏠 Imobiliário & Corretores" },
                    { id: "ecommerce", label: "🛍️ E-commerce & Lojas" },
                    { id: "infoproduto", label: "📚 Cursos & Infoprodutos" },
                  ].map((seg) => (
                    <button
                      key={seg.id}
                      onClick={() => setSelectedSegment(seg.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedSegment === seg.id
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-white/5 text-muted-foreground border-white/10 hover:text-white"
                      }`}
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {getPersonalizedAbordagemScripts().map((script, idx) => (
                  <div
                    key={script.id}
                    className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm text-primary flex items-center gap-2">
                          <span>{script.title}</span>
                        </h4>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {script.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed font-sans bg-[#111218] p-3.5 rounded-lg border border-white/5 select-all">
                        {script.text}
                      </p>
                      {script.tip && (
                        <p className="text-[11px] font-medium text-amber-400/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 flex items-start gap-2">
                          <Sparkles size={14} className="shrink-0 mt-0.5 text-amber-400" />
                          <span>{script.tip}</span>
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopyScriptText(script.text, script.id)}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-bold text-xs rounded-lg transition-all"
                    >
                      {copiedScriptId === script.id ? (
                        <>
                          <Check size={14} className="text-emerald-400" />
                          <span className="text-emerald-400">Copiado para a Área de Transferência!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copiar Script Personalizado</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MÓDULO 2: MENSAGENS PARA AS 3 CAIXAS DO ROBÔ INSTAPRO (ANTI-BLOQUEIO) */}
          {generatorMode === "robo" && (
            <div className="space-y-5">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Zap size={16} />
                  <span>COMO CONFIGURAR AS MENSAGENS NO RDG INSTAPRO (ROBÔ):</span>
                </div>
                <p className="text-xs text-emerald-300/90 leading-relaxed">
                  O robô possui 3 campos de mensagem de Direct. Basta clicar em <strong>"Copiar p/ Caixa 1"</strong>, <strong>"Copiar p/ Caixa 2"</strong> e <strong>"Copiar p/ Caixa 3"</strong> e colar cada texto na sua respectiva caixa dentro do robô. O robô alternará as 3 mensagens automaticamente para evitar bloqueios!
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                  Selecione o objetivo da automação de Direct:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "boas_vindas", label: "👋 Boas-Vindas & Concorrentes" },
                    { id: "presente_cupom", label: "🎁 Presente & Cupom VIP" },
                    { id: "engajamento_curto", label: "⚡ Pergunta Curta (Baixo Risco)" },
                    { id: "whatsapp_grupo", label: "📲 Encaminhar para o WhatsApp" },
                  ].map((strat) => (
                    <button
                      key={strat.id}
                      onClick={() => setSelectedRobotStrategy(strat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedRobotStrategy === strat.id
                          ? "bg-emerald-500 text-black border-emerald-400 font-extrabold"
                          : "bg-white/5 text-muted-foreground border-white/10 hover:text-white"
                      }`}
                    >
                      {strat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-2">
                {getPersonalizedRobotScripts().map((robotScript) => (
                  <div
                    key={robotScript.id}
                    className="bg-[#0A0A0A] border border-emerald-500/30 rounded-xl p-5 sm:p-6 space-y-5 hover:border-emerald-500/50 transition-all shadow-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <h4 className="font-extrabold text-white text-base text-emerald-400">
                          {robotScript.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {robotScript.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 shrink-0">
                        🛡️ Sistema Anti-Bloqueio RDG
                      </span>
                    </div>

                    {/* Passo a Passo Visual para o Membro */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                      <div className="bg-[#111218] p-2.5 rounded-lg border border-white/5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-[10px] flex items-center justify-center shrink-0">1</span>
                        <span className="text-white/90">Copie a <strong>Mensagem 1</strong> e cole no campo 1 do Robô.</span>
                      </div>
                      <div className="bg-[#111218] p-2.5 rounded-lg border border-white/5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#6366f1]/20 text-indigo-400 font-extrabold text-[10px] flex items-center justify-center shrink-0">2</span>
                        <span className="text-white/90">Copie a <strong>Mensagem 2</strong> e cole no campo 2 do Robô.</span>
                      </div>
                      <div className="bg-[#111218] p-2.5 rounded-lg border border-white/5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#10b981]/20 text-emerald-400 font-extrabold text-[10px] flex items-center justify-center shrink-0">3</span>
                        <span className="text-white/90">Copie a <strong>Mensagem 3</strong> e cole no campo 3 do Robô.</span>
                      </div>
                    </div>

                    {/* Exibição das Variações Limpas para as 3 caixas do robô */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                      {/* Opção A -> Mensagem 1 do Robô */}
                      <div className="bg-[#111218] p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-primary/40 transition-all">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                              Mensagem 1 do Robô
                            </span>
                            <span className="text-[9px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
                              Opção A
                            </span>
                          </div>
                          <p className="text-xs text-white/95 leading-relaxed font-sans select-all whitespace-pre-wrap bg-[#0A0A0A] p-3 rounded-lg border border-white/5">
                            {robotScript.varA}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCopyScriptText(robotScript.varA, `${robotScript.id}-varA`)}
                          className="w-full py-2.5 px-3 bg-primary text-[#0A0A0A] hover:bg-primary/90 font-extrabold text-[11px] rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          {copiedScriptId === `${robotScript.id}-varA` ? (
                            <>
                              <Check size={14} />
                              <span>COPIADO P/ CAIXA 1!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>COPIAR P/ CAIXA 1 DO ROBÔ</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Opção B -> Mensagem 2 do Robô */}
                      <div className="bg-[#111218] p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider">
                              Mensagem 2 do Robô
                            </span>
                            <span className="text-[9px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
                              Opção B
                            </span>
                          </div>
                          <p className="text-xs text-white/95 leading-relaxed font-sans select-all whitespace-pre-wrap bg-[#0A0A0A] p-3 rounded-lg border border-white/5">
                            {robotScript.varB}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCopyScriptText(robotScript.varB, `${robotScript.id}-varB`)}
                          className="w-full py-2.5 px-3 bg-indigo-500 text-white hover:bg-indigo-600 font-extrabold text-[11px] rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          {copiedScriptId === `${robotScript.id}-varB` ? (
                            <>
                              <Check size={14} />
                              <span>COPIADO P/ CAIXA 2!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>COPIAR P/ CAIXA 2 DO ROBÔ</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Opção C -> Mensagem 3 do Robô */}
                      <div className="bg-[#111218] p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                              Mensagem 3 do Robô
                            </span>
                            <span className="text-[9px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
                              Opção C
                            </span>
                          </div>
                          <p className="text-xs text-white/95 leading-relaxed font-sans select-all whitespace-pre-wrap bg-[#0A0A0A] p-3 rounded-lg border border-white/5">
                            {robotScript.varC}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCopyScriptText(robotScript.varC, `${robotScript.id}-varC`)}
                          className="w-full py-2.5 px-3 bg-emerald-500 text-black hover:bg-emerald-400 font-extrabold text-[11px] rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          {copiedScriptId === `${robotScript.id}-varC` ? (
                            <>
                              <Check size={14} />
                              <span>COPIADO P/ CAIXA 3!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>COPIAR P/ CAIXA 3 DO ROBÔ</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* FERRAMENTA INTERATIVA BÔNUS 2: CALCULADORA DE ROI E PROSPECÇÃO */}
        <section id="calculadora-roi" className="bg-[#111218] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Calculator size={16} />
                <span>FERRAMENTA INTERATIVA BÔNUS #2</span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">
                Calculadora de Prospecção & Metas de Vendas
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">
              Planejamento Estratégico de Directs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase">
                  Valor Médio do seu Produto / Serviço (R$)
                </label>
                <input
                  type="number"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase">
                  Sua Meta de Faturamento Mensal (R$)
                </label>
                <input
                  type="number"
                  value={monthlyGoal}
                  onChange={(e) => setMonthlyGoal(Number(e.target.value))}
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase">
                  Taxa Estimada de Conversão do Direct (%)
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-emerald-500 outline-none"
                />
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Resultado do seu Planejamento:
              </h4>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-[#111218] p-4 rounded-xl border border-white/10">
                  <span className="text-2xl font-extrabold text-white">
                    {calculatedMetrics.neededSales}
                  </span>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Vendas Necessárias/Mês
                  </p>
                </div>

                <div className="bg-[#111218] p-4 rounded-xl border border-white/10">
                  <span className="text-2xl font-extrabold text-emerald-400">
                    {calculatedMetrics.neededDirectsDay}
                  </span>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Directs por Dia
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-xs text-emerald-300">
                <Flame size={20} className="shrink-0 text-emerald-400" />
                <span>
                  Recomendação: Utilize <strong>{calculatedMetrics.recommendedProfiles} perfil(is)</strong> no robô enviando cerca de 40 directs/dia em cada perfil para atingir a meta com segurança.
                </span>
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
                Outros Produtos & Bônus RDG Digital
              </h2>
            </div>
            <span className="text-xs text-muted-foreground bg-amber-500/10 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-500/20">
              Acesso Especial
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Produto 1: Pack de Prompts IA para Ensaios (Link direto para /prompts-instagram) */}
            <div className="bg-gradient-to-b from-[#14151F] to-[#111218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Camera size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                  <span>DISPONÍVEL NO SEU PLANO</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Biblioteca de +700 Prompts de IA para Ensaios Fotográficos
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Acesse nossa biblioteca interativa com +700 prompts prontos para gerar fotos profissionais com IA para seu perfil ou vender ensaios para clientes com o Google Gemini (Grátis).
                </p>

                {/* Prévia Visual da Biblioteca de Prompts */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-amber-500/30 transition-all bg-black/40 shadow-inner">
                  <img
                    src="/preview-prompts.png"
                    alt="Prévia da Biblioteca de Prompts de IA"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <a
                href="https://sites.rdgdigital.com.br/prompts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-bold text-xs rounded-xl transition-all"
              >
                <span>Acessar Biblioteca de Prompts (+700)</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Produto 2: Manual Antibloqueio (Link direto para o PDF gerado no Gamma) */}
            <div className="bg-gradient-to-b from-[#14151F] to-[#111218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                  <BookOpen size={20} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                  <span>E-BOOK VIP</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Manual de Aquecimento & Escala Sem Bloqueios 2026
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Guia completo de boas práticas: saiba a esteira de aquecimento correta para novas contas do Instagram e os limites recomendados por perfil.
                </p>

                {/* Prévia Visual do E-Book VIP */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-indigo-500/30 transition-all bg-black/40 shadow-inner">
                  <img
                    src="/preview-ebook.png"
                    alt="Prévia do Manual de Aquecimento & Escala 2026"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <a
                href="https://gamma.app/docs/Manual-de-Aquecimento-Escala-Sem-Bloqueios-2026-doflji8lkd3w9bb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 font-bold text-xs rounded-xl transition-all"
              >
                <span>Abrir E-Book / PDF Completo</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </section>

        {/* BÔNUS: CURSO GOOGLE ADS EM VÍDEO (GOOGLE DRIVE PLAYER) */}
        <section id="curso-plr" className="bg-[#111218] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400">
                <Video size={16} />
                <span>BÔNUS EXCLUSIVO LIBERADO</span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">
                Treinamento: Google Ads para Negócios
              </h2>
            </div>
            <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 font-bold uppercase tracking-wider">
              {COURSE_MODULES.length} Módulos Disponíveis
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Sidebar Módulos (Estilo Hotmart) */}
            <div className="lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden h-fit sm:max-h-[500px] sm:overflow-y-auto">
              <div className="p-4 bg-[#111218] border-b border-white/10 sticky top-0 z-10">
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <BookOpen size={16} className="text-cyan-400" />
                  <span>Conteúdo do Curso</span>
                </h3>
              </div>
              
              <div className="divide-y divide-white/5">
                {COURSE_MODULES.map((module, mIdx) => (
                  <div key={mIdx} className="bg-[#0A0A0A]">
                    <div className="px-4 py-3 bg-white/[0.02] flex items-center justify-between">
                      <span className="text-xs font-bold text-white/90">{module.title}</span>
                      <span className="text-[10px] text-muted-foreground">{module.videos.length} aulas</span>
                    </div>
                    <div className="flex flex-col">
                      {module.videos.map((video, vIdx) => {
                        const isActive = activeCourseModule === mIdx && activeCourseVideoIdx === vIdx;
                        return (
                          <button
                            key={video.id}
                            onClick={() => {
                              setActiveCourseModule(mIdx);
                              setActiveCourseVideoIdx(vIdx);
                              document.getElementById("plr-player")?.scrollIntoView({ behavior: "smooth", block: "center" });
                            }}
                            className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-l-2 ${
                              isActive
                                ? "bg-cyan-500/10 border-cyan-400 hover:bg-cyan-500/15"
                                : "border-transparent hover:bg-white/5"
                            }`}
                          >
                            <div className={`mt-0.5 shrink-0 ${isActive ? "text-cyan-400" : "text-muted-foreground"}`}>
                              {isActive ? <Play size={14} fill="currentColor" /> : <Video size={14} />}
                            </div>
                            <div className="space-y-1">
                              <p className={`text-xs font-semibold ${isActive ? "text-white" : "text-muted-foreground"}`}>
                                {video.title}
                              </p>
                              <span className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
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
            </div>

            {/* Video Player Principal */}
            <div className="lg:col-span-8 flex flex-col gap-4" id="plr-player">
              <div className="relative aspect-video bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {currentCourseVideo?.url ? (
                  <iframe
                    src={currentCourseVideo.url}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] space-y-4 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground">
                      <Play size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{currentCourseVideo?.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">Aguardando a inclusão do vídeo no Google Drive...</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-extrabold text-white">{currentCourseVideo?.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">Módulo atual: {COURSE_MODULES[activeCourseModule]?.title}</p>
                </div>
                
                {/* Controles Próximo/Anterior (Simplificados) */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    disabled={activeCourseModule === 0 && activeCourseVideoIdx === 0}
                    onClick={() => {
                      if (activeCourseVideoIdx > 0) {
                        setActiveCourseVideoIdx(prev => prev - 1);
                      } else if (activeCourseModule > 0) {
                        setActiveCourseModule(prev => prev - 1);
                        setActiveCourseVideoIdx(COURSE_MODULES[activeCourseModule - 1].videos.length - 1);
                      }
                    }}
                    className="px-3 py-2 bg-white/5 hover:bg-white/10 disabled:opacity-50 text-xs font-bold rounded-lg border border-white/10 transition-colors"
                  >
                    Anterior
                  </button>
                  <button 
                    disabled={activeCourseModule === COURSE_MODULES.length - 1 && activeCourseVideoIdx === COURSE_MODULES[activeCourseModule].videos.length - 1}
                    onClick={() => {
                      if (activeCourseVideoIdx < COURSE_MODULES[activeCourseModule].videos.length - 1) {
                        setActiveCourseVideoIdx(prev => prev + 1);
                      } else if (activeCourseModule < COURSE_MODULES.length - 1) {
                        setActiveCourseModule(prev => prev + 1);
                        setActiveCourseVideoIdx(0);
                      }
                    }}
                    className="px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-black disabled:opacity-50 text-xs font-extrabold rounded-lg transition-colors"
                  >
                    Próxima Aula
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & TROUBLESHOOTING */}
        <section id="faq" className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="text-primary" size={22} />
              <span>Perguntas Frequentes & Solução de Dúvidas</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: "O Windows ou o Antivírus deu aviso ao baixar?",
                a: "Por se tratar de um instalador automatizado em arquivo .bat, o Windows Defender pode solicitar confirmação. Clique em 'Mais Informações' -> 'Executar Assim Mesmo'. O robô é 100% seguro.",
              },
              {
                q: "Preciso baixar o instalador de novo quando houver atualizações?",
                a: "Não! Basta abrir o atalho 'RDG Atualizador' no seu Desktop. Ele baixa a versão mais recente e substitui os arquivos em 2 segundos sem perder seus perfis.",
              },
              {
                q: "Como sei quando minha licença expira?",
                a: `No topo desta página e na aba 'Licença & Contas' do programa é exibido o tempo de validade da sua chave (${valInfo?.text || "Ativa"}).`,
              },
              {
                q: "Como evito bloqueios no Instagram?",
                a: "Siga as recomendações da Aula 04 do treinamento: configure intervalos seguros de envio (de 60s a 120s entre diretos) e alterne os textos da mensagem.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#111218] border border-white/10 rounded-xl p-5 space-y-2"
              >
                <h4 className="font-bold text-white text-sm flex items-start gap-2">
                  <Info size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SUPPORT FOOTER CTA */}
        <section className="text-center py-8 border-t border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">
            Ainda tem alguma dúvida ou precisa de suporte técnico?
          </h3>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Nossa equipe de suporte técnico VIP está disponível no WhatsApp para te ajudar em todas as etapas da instalação e configuração.
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
        <p>© 2026 RDG Digital. Todos os direitos reservados. RDG instaPRO — Automação Inteligente.</p>
      </footer>
    </div>
  );
}
