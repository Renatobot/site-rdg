const fs = require('fs');

const nichesData = {
  "Saude": {
    baseIcon: "HeartPulse",
    theme: {
      bgColor: "#0F172A", surfaceColor: "#1E293B", cardBg: "#1E293B",
      borderColor: "rgba(16, 185, 129, 0.25)", accentColor: "#10B981"
    },
    items: ["Clínica médica", "Clínica popular", "Odontologia", "Ortodontia", "Implantodontia", "Psicologia", "Psiquiatria", "Fisioterapia", "Fonoaudiologia", "Nutrição", "Dermatologia", "Cardiologia", "Oftalmologia", "Pediatria", "Ginecologia", "Urologia", "Ortopedia", "Clínica veterinária", "Pet shop", "Farmácia", "Laboratório", "Home Care"]
  },
  "Beleza": {
    baseIcon: "Sparkle",
    theme: {
      bgColor: "#161217", surfaceColor: "#201A22", cardBg: "#29212C",
      borderColor: "rgba(244, 114, 182, 0.25)", accentColor: "#F472B6"
    },
    items: ["Salão de beleza", "Barbearia", "Clínica de estética", "Estética avançada", "Harmonização facial", "Depilação", "Manicure", "Nail Designer", "Lash Designer", "Sobrancelhas", "Maquiadora", "Cabeleireiro", "Massoterapia", "Podologia", "Spa"]
  },
  "Alimentacao": {
    baseIcon: "Utensils",
    theme: {
      bgColor: "#0F0F12", surfaceColor: "#17171C", cardBg: "#1F1F26",
      borderColor: "rgba(245, 158, 11, 0.25)", accentColor: "#F59E0B"
    },
    items: ["Restaurante", "Pizzaria", "Hamburgueria", "Pastelaria", "Lanchonete", "Açaíteria", "Sorveteria", "Cafeteria", "Padaria", "Confeitaria", "Doceria", "Marmitaria", "Delivery", "Churrascaria", "Sushi", "Comida japonesa", "Comida árabe", "Food Truck", "Buffet", "Empresa de eventos"]
  },
  "Esportes": {
    baseIcon: "Activity",
    theme: {
      bgColor: "#09090B", surfaceColor: "#18181B", cardBg: "#27272A",
      borderColor: "rgba(59, 130, 246, 0.25)", accentColor: "#3B82F6"
    },
    items: ["Academia", "Personal Trainer", "Studio Pilates", "CrossFit", "Escola de dança", "Escola de futebol", "Natação", "Artes marciais", "Yoga"]
  },
  "Juridico": {
    baseIcon: "Scale",
    theme: {
      bgColor: "#090D16", surfaceColor: "#111827", cardBg: "#172033",
      borderColor: "rgba(212, 175, 55, 0.25)", accentColor: "#D4AF37"
    },
    items: ["Advogado", "Escritório de advocacia", "Correspondente jurídico"]
  },
  "Financeiro": {
    baseIcon: "Landmark",
    theme: {
      bgColor: "#022C22", surfaceColor: "#064E3B", cardBg: "#065F46",
      borderColor: "rgba(52, 211, 153, 0.25)", accentColor: "#34D399"
    },
    items: ["Contabilidade", "Consultoria financeira", "Corretora de seguros", "Consórcio", "Imobiliária financeira", "Crédito consignado"]
  },
  "Construcao": {
    baseIcon: "HardHat",
    theme: {
      bgColor: "#1E1B4B", surfaceColor: "#312E81", cardBg: "#3730A3",
      borderColor: "rgba(99, 102, 241, 0.25)", accentColor: "#6366F1"
    },
    items: ["Construtora", "Engenharia", "Arquitetura", "Designer de interiores", "Marcenaria", "Vidraçaria", "Marmoraria", "Serralheria", "Pintor", "Eletricista", "Encanador", "Gesseiro", "Telhados", "Energia solar", "Esquadrias", "Piscinas"]
  },
  "Automotivo": {
    baseIcon: "Car",
    theme: {
      bgColor: "#171717", surfaceColor: "#262626", cardBg: "#404040",
      borderColor: "rgba(239, 68, 68, 0.25)", accentColor: "#EF4444"
    },
    items: ["Oficina mecânica", "Auto elétrica", "Borracharia", "Lava Jato", "Estética automotiva", "Martelinho de ouro", "Auto peças", "Guincho", "Funilaria", "Locadora"]
  },
  "Comercio": {
    baseIcon: "ShoppingBag",
    theme: {
      bgColor: "#1F2937", surfaceColor: "#374151", cardBg: "#4B5563",
      borderColor: "rgba(244, 63, 94, 0.25)", accentColor: "#F43F5E"
    },
    items: ["Loja de roupas", "Moda feminina", "Moda masculina", "Moda infantil", "Calçados", "Bolsas", "Acessórios", "Joalheria", "Bijuterias", "Cosméticos", "Perfumaria", "Papelaria", "Presentes", "Livraria", "Informática", "Eletrônicos", "Móveis", "Colchões", "Material de construção", "Utilidades domésticas"]
  },
  "Servicos": {
    baseIcon: "Briefcase",
    theme: {
      bgColor: "#0F172A", surfaceColor: "#1E293B", cardBg: "#334155",
      borderColor: "rgba(14, 165, 233, 0.25)", accentColor: "#0EA5E9"
    },
    items: ["Agência de marketing", "Agência de publicidade", "Social Media", "Web Design", "Desenvolvimento de sites", "Software House", "Assistência técnica", "Gráfica", "Comunicação visual", "Fotógrafo", "Videomaker", "Produtora", "Consultoria empresarial", "Recursos Humanos", "Coworking"]
  },
  "Educacao": {
    baseIcon: "GraduationCap",
    theme: {
      bgColor: "#1E1E1E", surfaceColor: "#2D2D2D", cardBg: "#3D3D3D",
      borderColor: "rgba(168, 85, 247, 0.25)", accentColor: "#A855F7"
    },
    items: ["Escola particular", "Curso de idiomas", "Curso profissionalizante", "Reforço escolar", "Escola infantil", "Creche", "Professor particular", "Autoescola"]
  },
  "Turismo": {
    baseIcon: "Plane",
    theme: {
      bgColor: "#083344", surfaceColor: "#164E63", cardBg: "#155E75",
      borderColor: "rgba(6, 182, 212, 0.25)", accentColor: "#06B6D4"
    },
    items: ["Hotel", "Pousada", "Hostel", "Agência de viagens", "Guia turístico"]
  },
  "Imoveis": {
    baseIcon: "Building",
    theme: {
      bgColor: "#171717", surfaceColor: "#262626", cardBg: "#404040",
      borderColor: "rgba(234, 179, 8, 0.25)", accentColor: "#EAB308"
    },
    items: ["Imobiliária", "Corretor de imóveis", "Administração de condomínios"]
  },
  "Religiao": {
    baseIcon: "Star",
    theme: {
      bgColor: "#18181B", surfaceColor: "#27272A", cardBg: "#3F3F46",
      borderColor: "rgba(250, 204, 21, 0.25)", accentColor: "#FACC15"
    },
    items: ["Igreja", "Centro religioso", "Loja de artigos religiosos"]
  },
  "Agro": {
    baseIcon: "Leaf",
    theme: {
      bgColor: "#14532D", surfaceColor: "#166534", cardBg: "#15803D",
      borderColor: "rgba(132, 204, 22, 0.25)", accentColor: "#84CC16"
    },
    items: ["Fazenda", "Agropecuária", "Floricultura", "Garden Center", "Loja agropecuária"]
  },
  "Industria": {
    baseIcon: "Factory",
    theme: {
      bgColor: "#171717", surfaceColor: "#262626", cardBg: "#404040",
      borderColor: "rgba(163, 163, 163, 0.25)", accentColor: "#A3A3A3"
    },
    items: ["Metalúrgica", "Indústria alimentícia", "Confecção", "Plásticos", "Embalagens", "Química"]
  }
};

let output = `import {
  HeartPulse, Sparkle, Utensils, Activity, Scale, Landmark,
  HardHat, Car, ShoppingBag, Briefcase, GraduationCap, Plane,
  Building, Star, Leaf, Factory
} from "lucide-react";

export interface NicheConfig {
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

export const NICHE_CONFIGS: Record<string, NicheConfig> = {
`;

function generateNicheKey(name) {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

for (const [macro, data] of Object.entries(nichesData)) {
  for (const niche of data.items) {
    const key = generateNicheKey(niche);
    const icon = data.baseIcon;
    const heroPrompt = "professional " + niche.toLowerCase() + " environment modern high quality 8k";
    
    output += `
  "${key}": {
    isDark: true,
    bgColor: "${data.theme.bgColor}",
    surfaceColor: "${data.theme.surfaceColor}",
    cardBg: "${data.theme.cardBg}",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "${data.theme.borderColor}",
    accentColor: "${data.theme.accentColor}",
    accentText: "#FFFFFF",
    fontSerif: ${macro === 'Juridico' || macro === 'Beleza' || macro === 'Alimentacao' ? 'true' : 'false'},
    heroTagline: "Excelência e Qualidade em ${niche}",
    titleSpan: "${niche}",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em ${niche} para superar suas expectativas com máxima qualidade.",
    icon: ${icon},
    prettyCategoryName: "${niche}",
    heroFallback: "https://image.pollinations.ai/prompt/${encodeURIComponent(heroPrompt)}?width=1200&height=800&nologo=true&seed=${Math.floor(Math.random()*1000)}",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/${encodeURIComponent(niche + ' professional details 8k')}?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/${encodeURIComponent(niche + ' modern environment 8k')}?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/${encodeURIComponent(niche + ' service execution 8k')}?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/${encodeURIComponent(niche + ' high quality premium 8k')}?width=800&height=600&nologo=true&seed=4"
    ],
    services: [
      { title: "Atendimento Personalizado", desc: "Soluções exclusivas e sob medida projetadas especificamente para sua necessidade.", price: "Consulte" },
      { title: "Consultoria Especializada", desc: "Acompanhamento profissional de ponta a ponta com especialistas do mercado.", price: "Consulte" },
      { title: "Serviço Premium", desc: "Execução impecável utilizando as melhores práticas e materiais do segmento.", price: "Consulte" },
      { title: "Suporte Dedicado", desc: "Equipe pronta para atender você com agilidade, transparência e eficiência.", price: "Consulte" }
    ],
    stats: [
      { label: "Clientes Satisfeitos", value: "5k+" },
      { label: "Anos de Experiência", value: "10+" },
      { label: "Avaliação", value: "5.0" },
      { label: "Especialistas", value: "Top" }
    ]
  },`;
  }
}

output += `
  "default": {
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
    titleSuffix: " Referência.",
    desc: "Compromisso com a satisfação do cliente, agilidade no atendimento e infraestrutura completa.",
    icon: Briefcase,
    prettyCategoryName: "Empresa de Destaque",
    heroFallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryFallback: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80"
    ],
    services: [
      { title: "Atendimento Sob Medida", desc: "Soluções completas desenhadas exatamente para atender sua necessidade com excelência.", price: "Solicitar Informações" },
      { title: "Agendamento Prático", desc: "Reserve seu horário de forma rápida com agilidade e flexibilidade.", price: "Solicitar Informações" }
    ],
    stats: [
      { label: "Clientes Atendidos", value: "5k+" },
      { label: "Satisfação", value: "5.0" },
      { label: "Pontualidade", value: "100%" },
      { label: "Equipe", value: "5" }
    ]
  }
};
`;

fs.writeFileSync('./src/config/niches.ts', output);
console.log('niches.ts generated successfully with ' + Object.keys(nichesData).reduce((acc, curr) => acc + nichesData[curr].items.length, 0) + ' niches!');
