import {
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

  "clinicamedica": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Clínica médica",
    titleSpan: "Clínica médica",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Clínica médica para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Clínica médica",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cl%C3%ADnica%20m%C3%A9dica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=597",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20m%C3%A9dica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20m%C3%A9dica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20m%C3%A9dica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20m%C3%A9dica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "clinicapopular": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Clínica popular",
    titleSpan: "Clínica popular",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Clínica popular para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Clínica popular",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cl%C3%ADnica%20popular%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=658",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20popular%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20popular%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20popular%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20popular%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "odontologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Odontologia",
    titleSpan: "Odontologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Odontologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Odontologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20odontologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=264",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Odontologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Odontologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Odontologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Odontologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "ortodontia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Ortodontia",
    titleSpan: "Ortodontia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Ortodontia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Ortodontia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ortodontia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=767",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ortodontia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ortodontia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ortodontia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ortodontia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "implantodontia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Implantodontia",
    titleSpan: "Implantodontia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Implantodontia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Implantodontia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20implantodontia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=27",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Implantodontia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Implantodontia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Implantodontia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Implantodontia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "psicologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Psicologia",
    titleSpan: "Psicologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Psicologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Psicologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20psicologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=603",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Psicologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Psicologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Psicologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Psicologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "psiquiatria": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Psiquiatria",
    titleSpan: "Psiquiatria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Psiquiatria para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Psiquiatria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20psiquiatria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=999",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Psiquiatria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Psiquiatria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Psiquiatria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Psiquiatria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "fisioterapia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Fisioterapia",
    titleSpan: "Fisioterapia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Fisioterapia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Fisioterapia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20fisioterapia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=850",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Fisioterapia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Fisioterapia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Fisioterapia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Fisioterapia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "fonoaudiologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Fonoaudiologia",
    titleSpan: "Fonoaudiologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Fonoaudiologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Fonoaudiologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20fonoaudiologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=463",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Fonoaudiologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Fonoaudiologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Fonoaudiologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Fonoaudiologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "nutricao": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Nutrição",
    titleSpan: "Nutrição",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Nutrição para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Nutrição",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20nutri%C3%A7%C3%A3o%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=608",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Nutri%C3%A7%C3%A3o%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Nutri%C3%A7%C3%A3o%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Nutri%C3%A7%C3%A3o%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Nutri%C3%A7%C3%A3o%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "dermatologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Dermatologia",
    titleSpan: "Dermatologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Dermatologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Dermatologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20dermatologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=506",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Dermatologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Dermatologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Dermatologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Dermatologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "cardiologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Cardiologia",
    titleSpan: "Cardiologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Cardiologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Cardiologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cardiologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=207",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cardiologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cardiologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cardiologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cardiologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "oftalmologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Oftalmologia",
    titleSpan: "Oftalmologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Oftalmologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Oftalmologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20oftalmologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=268",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Oftalmologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Oftalmologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Oftalmologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Oftalmologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "pediatria": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Pediatria",
    titleSpan: "Pediatria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Pediatria para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Pediatria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20pediatria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=404",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Pediatria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Pediatria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Pediatria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Pediatria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "ginecologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Ginecologia",
    titleSpan: "Ginecologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Ginecologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Ginecologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ginecologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=596",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ginecologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ginecologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ginecologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ginecologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "urologia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Urologia",
    titleSpan: "Urologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Urologia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Urologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20urologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=453",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Urologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Urologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Urologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Urologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "ortopedia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Ortopedia",
    titleSpan: "Ortopedia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Ortopedia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Ortopedia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ortopedia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=293",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ortopedia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ortopedia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ortopedia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ortopedia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "clinicaveterinaria": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Clínica veterinária",
    titleSpan: "Clínica veterinária",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Clínica veterinária para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Clínica veterinária",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cl%C3%ADnica%20veterin%C3%A1ria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=112",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20veterin%C3%A1ria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20veterin%C3%A1ria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20veterin%C3%A1ria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20veterin%C3%A1ria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "petshop": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Pet shop",
    titleSpan: "Pet shop",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Pet shop para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Pet shop",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20pet%20shop%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=691",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Pet%20shop%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Pet%20shop%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Pet%20shop%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Pet%20shop%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "farmacia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Farmácia",
    titleSpan: "Farmácia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Farmácia para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Farmácia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20farm%C3%A1cia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=862",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Farm%C3%A1cia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Farm%C3%A1cia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Farm%C3%A1cia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Farm%C3%A1cia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "laboratorio": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Laboratório",
    titleSpan: "Laboratório",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Laboratório para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Laboratório",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20laborat%C3%B3rio%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=764",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Laborat%C3%B3rio%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Laborat%C3%B3rio%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Laborat%C3%B3rio%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Laborat%C3%B3rio%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "homecare": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10B981",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Home Care",
    titleSpan: "Home Care",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Home Care para superar suas expectativas com máxima qualidade.",
    icon: HeartPulse,
    prettyCategoryName: "Home Care",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20home%20care%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=553",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Home%20Care%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Home%20Care%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Home%20Care%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Home%20Care%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "salaodebeleza": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Salão de beleza",
    titleSpan: "Salão de beleza",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Salão de beleza para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Salão de beleza",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20sal%C3%A3o%20de%20beleza%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=211",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Sal%C3%A3o%20de%20beleza%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Sal%C3%A3o%20de%20beleza%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Sal%C3%A3o%20de%20beleza%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Sal%C3%A3o%20de%20beleza%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "barbearia": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Barbearia",
    titleSpan: "Barbearia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Barbearia para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Barbearia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20barbearia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=620",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Barbearia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Barbearia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Barbearia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Barbearia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "clinicadeestetica": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Clínica de estética",
    titleSpan: "Clínica de estética",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Clínica de estética para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Clínica de estética",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cl%C3%ADnica%20de%20est%C3%A9tica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=82",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20de%20est%C3%A9tica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20de%20est%C3%A9tica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20de%20est%C3%A9tica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cl%C3%ADnica%20de%20est%C3%A9tica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "esteticaavancada": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Estética avançada",
    titleSpan: "Estética avançada",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Estética avançada para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Estética avançada",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20est%C3%A9tica%20avan%C3%A7ada%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=774",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20avan%C3%A7ada%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20avan%C3%A7ada%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20avan%C3%A7ada%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20avan%C3%A7ada%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "harmonizacaofacial": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Harmonização facial",
    titleSpan: "Harmonização facial",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Harmonização facial para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Harmonização facial",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20harmoniza%C3%A7%C3%A3o%20facial%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=89",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Harmoniza%C3%A7%C3%A3o%20facial%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Harmoniza%C3%A7%C3%A3o%20facial%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Harmoniza%C3%A7%C3%A3o%20facial%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Harmoniza%C3%A7%C3%A3o%20facial%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "depilacao": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Depilação",
    titleSpan: "Depilação",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Depilação para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Depilação",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20depila%C3%A7%C3%A3o%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=46",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Depila%C3%A7%C3%A3o%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Depila%C3%A7%C3%A3o%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Depila%C3%A7%C3%A3o%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Depila%C3%A7%C3%A3o%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "manicure": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Manicure",
    titleSpan: "Manicure",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Manicure para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Manicure",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20manicure%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=26",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Manicure%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Manicure%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Manicure%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Manicure%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "naildesigner": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Nail Designer",
    titleSpan: "Nail Designer",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Nail Designer para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Nail Designer",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20nail%20designer%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=316",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Nail%20Designer%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Nail%20Designer%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Nail%20Designer%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Nail%20Designer%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "lashdesigner": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Lash Designer",
    titleSpan: "Lash Designer",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Lash Designer para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Lash Designer",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20lash%20designer%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=178",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Lash%20Designer%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Lash%20Designer%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Lash%20Designer%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Lash%20Designer%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "sobrancelhas": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Sobrancelhas",
    titleSpan: "Sobrancelhas",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Sobrancelhas para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Sobrancelhas",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20sobrancelhas%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=400",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Sobrancelhas%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Sobrancelhas%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Sobrancelhas%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Sobrancelhas%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "maquiadora": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Maquiadora",
    titleSpan: "Maquiadora",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Maquiadora para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Maquiadora",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20maquiadora%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=961",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Maquiadora%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Maquiadora%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Maquiadora%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Maquiadora%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "cabeleireiro": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Cabeleireiro",
    titleSpan: "Cabeleireiro",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Cabeleireiro para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Cabeleireiro",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cabeleireiro%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=527",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cabeleireiro%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cabeleireiro%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cabeleireiro%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cabeleireiro%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "massoterapia": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Massoterapia",
    titleSpan: "Massoterapia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Massoterapia para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Massoterapia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20massoterapia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=480",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Massoterapia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Massoterapia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Massoterapia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Massoterapia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "podologia": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Podologia",
    titleSpan: "Podologia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Podologia para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Podologia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20podologia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=638",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Podologia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Podologia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Podologia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Podologia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "spa": {
    isDark: true,
    bgColor: "#161217",
    surfaceColor: "#201A22",
    cardBg: "#29212C",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 114, 182, 0.25)",
    accentColor: "#F472B6",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Spa",
    titleSpan: "Spa",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Spa para superar suas expectativas com máxima qualidade.",
    icon: Sparkle,
    prettyCategoryName: "Spa",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20spa%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=446",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Spa%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Spa%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Spa%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Spa%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "restaurante": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Restaurante",
    titleSpan: "Restaurante",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Restaurante para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Restaurante",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20restaurante%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=441",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Restaurante%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Restaurante%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Restaurante%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Restaurante%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "pizzaria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Pizzaria",
    titleSpan: "Pizzaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Pizzaria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Pizzaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20pizzaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=458",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Pizzaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Pizzaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Pizzaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Pizzaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "hamburgueria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Hamburgueria",
    titleSpan: "Hamburgueria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Hamburgueria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Hamburgueria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20hamburgueria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=810",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Hamburgueria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Hamburgueria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Hamburgueria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Hamburgueria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "pastelaria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Pastelaria",
    titleSpan: "Pastelaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Pastelaria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Pastelaria",
    heroFallback: "/assets/niche/pastel_hero.png",
    galleryFallback: [["/assets/niche/pastel_gallery_1.png", "/assets/niche/pastel_gallery_2.png", "/assets/niche/pastel_gallery_3.png", "/assets/niche/pastel_gallery_4.png"],
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
  },
  "lanchonete": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Lanchonete",
    titleSpan: "Lanchonete",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Lanchonete para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Lanchonete",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20lanchonete%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=566",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Lanchonete%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Lanchonete%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Lanchonete%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Lanchonete%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "acaiteria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Açaíteria",
    titleSpan: "Açaíteria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Açaíteria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Açaíteria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20a%C3%A7a%C3%ADteria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=80",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/A%C3%A7a%C3%ADteria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/A%C3%A7a%C3%ADteria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/A%C3%A7a%C3%ADteria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/A%C3%A7a%C3%ADteria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "sorveteria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Sorveteria",
    titleSpan: "Sorveteria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Sorveteria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Sorveteria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20sorveteria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=83",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Sorveteria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Sorveteria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Sorveteria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Sorveteria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "cafeteria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Cafeteria",
    titleSpan: "Cafeteria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Cafeteria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Cafeteria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cafeteria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=667",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cafeteria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cafeteria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cafeteria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cafeteria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "padaria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Padaria",
    titleSpan: "Padaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Padaria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Padaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20padaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=792",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Padaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Padaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Padaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Padaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "confeitaria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Confeitaria",
    titleSpan: "Confeitaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Confeitaria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Confeitaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20confeitaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=192",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Confeitaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Confeitaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Confeitaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Confeitaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "doceria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Doceria",
    titleSpan: "Doceria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Doceria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Doceria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20doceria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=78",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Doceria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Doceria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Doceria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Doceria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "marmitaria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Marmitaria",
    titleSpan: "Marmitaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Marmitaria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Marmitaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20marmitaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=32",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Marmitaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Marmitaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Marmitaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Marmitaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "delivery": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Delivery",
    titleSpan: "Delivery",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Delivery para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Delivery",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20delivery%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=980",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Delivery%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Delivery%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Delivery%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Delivery%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "churrascaria": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Churrascaria",
    titleSpan: "Churrascaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Churrascaria para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Churrascaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20churrascaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=561",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Churrascaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Churrascaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Churrascaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Churrascaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "sushi": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Sushi",
    titleSpan: "Sushi",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Sushi para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Sushi",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20sushi%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=185",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Sushi%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Sushi%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Sushi%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Sushi%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "comidajaponesa": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Comida japonesa",
    titleSpan: "Comida japonesa",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Comida japonesa para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Comida japonesa",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20comida%20japonesa%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=28",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Comida%20japonesa%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Comida%20japonesa%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Comida%20japonesa%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Comida%20japonesa%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "comidaarabe": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Comida árabe",
    titleSpan: "Comida árabe",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Comida árabe para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Comida árabe",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20comida%20%C3%A1rabe%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=708",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Comida%20%C3%A1rabe%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Comida%20%C3%A1rabe%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Comida%20%C3%A1rabe%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Comida%20%C3%A1rabe%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "foodtruck": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Food Truck",
    titleSpan: "Food Truck",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Food Truck para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Food Truck",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20food%20truck%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=973",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Food%20Truck%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Food%20Truck%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Food%20Truck%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Food%20Truck%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "buffet": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Buffet",
    titleSpan: "Buffet",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Buffet para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Buffet",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20buffet%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=657",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Buffet%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Buffet%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Buffet%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Buffet%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "empresadeeventos": {
    isDark: true,
    bgColor: "#0F0F12",
    surfaceColor: "#17171C",
    cardBg: "#1F1F26",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(245, 158, 11, 0.25)",
    accentColor: "#F59E0B",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Empresa de eventos",
    titleSpan: "Empresa de eventos",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Empresa de eventos para superar suas expectativas com máxima qualidade.",
    icon: Utensils,
    prettyCategoryName: "Empresa de eventos",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20empresa%20de%20eventos%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=527",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Empresa%20de%20eventos%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Empresa%20de%20eventos%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Empresa%20de%20eventos%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Empresa%20de%20eventos%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "academia": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Academia",
    titleSpan: "Academia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Academia para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Academia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20academia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=768",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Academia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Academia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Academia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Academia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "personaltrainer": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Personal Trainer",
    titleSpan: "Personal Trainer",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Personal Trainer para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Personal Trainer",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20personal%20trainer%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=451",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Personal%20Trainer%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Personal%20Trainer%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Personal%20Trainer%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Personal%20Trainer%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "studiopilates": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Studio Pilates",
    titleSpan: "Studio Pilates",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Studio Pilates para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Studio Pilates",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20studio%20pilates%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=289",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Studio%20Pilates%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Studio%20Pilates%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Studio%20Pilates%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Studio%20Pilates%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "crossfit": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em CrossFit",
    titleSpan: "CrossFit",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em CrossFit para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "CrossFit",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20crossfit%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=754",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/CrossFit%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/CrossFit%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/CrossFit%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/CrossFit%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "escoladedanca": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Escola de dança",
    titleSpan: "Escola de dança",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Escola de dança para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Escola de dança",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20escola%20de%20dan%C3%A7a%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=360",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Escola%20de%20dan%C3%A7a%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Escola%20de%20dan%C3%A7a%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Escola%20de%20dan%C3%A7a%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Escola%20de%20dan%C3%A7a%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "escoladefutebol": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Escola de futebol",
    titleSpan: "Escola de futebol",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Escola de futebol para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Escola de futebol",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20escola%20de%20futebol%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=71",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Escola%20de%20futebol%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Escola%20de%20futebol%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Escola%20de%20futebol%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Escola%20de%20futebol%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "natacao": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Natação",
    titleSpan: "Natação",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Natação para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Natação",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20nata%C3%A7%C3%A3o%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=846",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Nata%C3%A7%C3%A3o%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Nata%C3%A7%C3%A3o%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Nata%C3%A7%C3%A3o%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Nata%C3%A7%C3%A3o%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "artesmarciais": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Artes marciais",
    titleSpan: "Artes marciais",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Artes marciais para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Artes marciais",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20artes%20marciais%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=3",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Artes%20marciais%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Artes%20marciais%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Artes%20marciais%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Artes%20marciais%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "yoga": {
    isDark: true,
    bgColor: "#09090B",
    surfaceColor: "#18181B",
    cardBg: "#27272A",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(59, 130, 246, 0.25)",
    accentColor: "#3B82F6",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Yoga",
    titleSpan: "Yoga",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Yoga para superar suas expectativas com máxima qualidade.",
    icon: Activity,
    prettyCategoryName: "Yoga",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20yoga%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=23",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Yoga%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Yoga%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Yoga%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Yoga%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "advogado": {
    isDark: true,
    bgColor: "#090D16",
    surfaceColor: "#111827",
    cardBg: "#172033",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(212, 175, 55, 0.25)",
    accentColor: "#D4AF37",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Advogado",
    titleSpan: "Advogado",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Advogado para superar suas expectativas com máxima qualidade.",
    icon: Scale,
    prettyCategoryName: "Advogado",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20advogado%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=469",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Advogado%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Advogado%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Advogado%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Advogado%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "escritoriodeadvocacia": {
    isDark: true,
    bgColor: "#090D16",
    surfaceColor: "#111827",
    cardBg: "#172033",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(212, 175, 55, 0.25)",
    accentColor: "#D4AF37",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Escritório de advocacia",
    titleSpan: "Escritório de advocacia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Escritório de advocacia para superar suas expectativas com máxima qualidade.",
    icon: Scale,
    prettyCategoryName: "Escritório de advocacia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20escrit%C3%B3rio%20de%20advocacia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=410",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Escrit%C3%B3rio%20de%20advocacia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Escrit%C3%B3rio%20de%20advocacia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Escrit%C3%B3rio%20de%20advocacia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Escrit%C3%B3rio%20de%20advocacia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "correspondentejuridico": {
    isDark: true,
    bgColor: "#090D16",
    surfaceColor: "#111827",
    cardBg: "#172033",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(212, 175, 55, 0.25)",
    accentColor: "#D4AF37",
    accentText: "#FFFFFF",
    fontSerif: true,
    heroTagline: "Excelência e Qualidade em Correspondente jurídico",
    titleSpan: "Correspondente jurídico",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Correspondente jurídico para superar suas expectativas com máxima qualidade.",
    icon: Scale,
    prettyCategoryName: "Correspondente jurídico",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20correspondente%20jur%C3%ADdico%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=416",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Correspondente%20jur%C3%ADdico%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Correspondente%20jur%C3%ADdico%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Correspondente%20jur%C3%ADdico%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Correspondente%20jur%C3%ADdico%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "contabilidade": {
    isDark: true,
    bgColor: "#022C22",
    surfaceColor: "#064E3B",
    cardBg: "#065F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(52, 211, 153, 0.25)",
    accentColor: "#34D399",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Contabilidade",
    titleSpan: "Contabilidade",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Contabilidade para superar suas expectativas com máxima qualidade.",
    icon: Landmark,
    prettyCategoryName: "Contabilidade",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20contabilidade%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=494",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Contabilidade%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Contabilidade%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Contabilidade%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Contabilidade%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "consultoriafinanceira": {
    isDark: true,
    bgColor: "#022C22",
    surfaceColor: "#064E3B",
    cardBg: "#065F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(52, 211, 153, 0.25)",
    accentColor: "#34D399",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Consultoria financeira",
    titleSpan: "Consultoria financeira",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Consultoria financeira para superar suas expectativas com máxima qualidade.",
    icon: Landmark,
    prettyCategoryName: "Consultoria financeira",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20consultoria%20financeira%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=441",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Consultoria%20financeira%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Consultoria%20financeira%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Consultoria%20financeira%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Consultoria%20financeira%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "corretoradeseguros": {
    isDark: true,
    bgColor: "#022C22",
    surfaceColor: "#064E3B",
    cardBg: "#065F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(52, 211, 153, 0.25)",
    accentColor: "#34D399",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Corretora de seguros",
    titleSpan: "Corretora de seguros",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Corretora de seguros para superar suas expectativas com máxima qualidade.",
    icon: Landmark,
    prettyCategoryName: "Corretora de seguros",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20corretora%20de%20seguros%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=610",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Corretora%20de%20seguros%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Corretora%20de%20seguros%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Corretora%20de%20seguros%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Corretora%20de%20seguros%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "consorcio": {
    isDark: true,
    bgColor: "#022C22",
    surfaceColor: "#064E3B",
    cardBg: "#065F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(52, 211, 153, 0.25)",
    accentColor: "#34D399",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Consórcio",
    titleSpan: "Consórcio",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Consórcio para superar suas expectativas com máxima qualidade.",
    icon: Landmark,
    prettyCategoryName: "Consórcio",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cons%C3%B3rcio%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=166",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cons%C3%B3rcio%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cons%C3%B3rcio%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cons%C3%B3rcio%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cons%C3%B3rcio%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "imobiliariafinanceira": {
    isDark: true,
    bgColor: "#022C22",
    surfaceColor: "#064E3B",
    cardBg: "#065F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(52, 211, 153, 0.25)",
    accentColor: "#34D399",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Imobiliária financeira",
    titleSpan: "Imobiliária financeira",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Imobiliária financeira para superar suas expectativas com máxima qualidade.",
    icon: Landmark,
    prettyCategoryName: "Imobiliária financeira",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20imobili%C3%A1ria%20financeira%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=612",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20financeira%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20financeira%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20financeira%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20financeira%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "creditoconsignado": {
    isDark: true,
    bgColor: "#022C22",
    surfaceColor: "#064E3B",
    cardBg: "#065F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(52, 211, 153, 0.25)",
    accentColor: "#34D399",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Crédito consignado",
    titleSpan: "Crédito consignado",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Crédito consignado para superar suas expectativas com máxima qualidade.",
    icon: Landmark,
    prettyCategoryName: "Crédito consignado",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cr%C3%A9dito%20consignado%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=569",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cr%C3%A9dito%20consignado%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cr%C3%A9dito%20consignado%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cr%C3%A9dito%20consignado%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cr%C3%A9dito%20consignado%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "construtora": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Construtora",
    titleSpan: "Construtora",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Construtora para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Construtora",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20construtora%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=460",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Construtora%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Construtora%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Construtora%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Construtora%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "engenharia": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Engenharia",
    titleSpan: "Engenharia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Engenharia para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Engenharia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20engenharia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=907",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Engenharia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Engenharia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Engenharia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Engenharia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "arquitetura": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Arquitetura",
    titleSpan: "Arquitetura",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Arquitetura para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Arquitetura",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20arquitetura%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=381",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Arquitetura%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Arquitetura%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Arquitetura%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Arquitetura%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "designerdeinteriores": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Designer de interiores",
    titleSpan: "Designer de interiores",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Designer de interiores para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Designer de interiores",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20designer%20de%20interiores%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=368",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Designer%20de%20interiores%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Designer%20de%20interiores%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Designer%20de%20interiores%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Designer%20de%20interiores%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "marcenaria": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Marcenaria",
    titleSpan: "Marcenaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Marcenaria para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Marcenaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20marcenaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=405",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Marcenaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Marcenaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Marcenaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Marcenaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "vidracaria": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Vidraçaria",
    titleSpan: "Vidraçaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Vidraçaria para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Vidraçaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20vidra%C3%A7aria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=38",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Vidra%C3%A7aria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Vidra%C3%A7aria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Vidra%C3%A7aria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Vidra%C3%A7aria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "marmoraria": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Marmoraria",
    titleSpan: "Marmoraria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Marmoraria para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Marmoraria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20marmoraria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=239",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Marmoraria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Marmoraria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Marmoraria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Marmoraria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "serralheria": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Serralheria",
    titleSpan: "Serralheria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Serralheria para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Serralheria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20serralheria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=775",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Serralheria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Serralheria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Serralheria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Serralheria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "pintor": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Pintor",
    titleSpan: "Pintor",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Pintor para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Pintor",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20pintor%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=758",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Pintor%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Pintor%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Pintor%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Pintor%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "eletricista": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Eletricista",
    titleSpan: "Eletricista",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Eletricista para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Eletricista",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20eletricista%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=768",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Eletricista%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Eletricista%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Eletricista%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Eletricista%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "encanador": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Encanador",
    titleSpan: "Encanador",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Encanador para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Encanador",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20encanador%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=532",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Encanador%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Encanador%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Encanador%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Encanador%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "gesseiro": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Gesseiro",
    titleSpan: "Gesseiro",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Gesseiro para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Gesseiro",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20gesseiro%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=546",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Gesseiro%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Gesseiro%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Gesseiro%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Gesseiro%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "telhados": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Telhados",
    titleSpan: "Telhados",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Telhados para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Telhados",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20telhados%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=244",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Telhados%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Telhados%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Telhados%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Telhados%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "energiasolar": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Energia solar",
    titleSpan: "Energia solar",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Energia solar para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Energia solar",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20energia%20solar%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=934",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Energia%20solar%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Energia%20solar%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Energia%20solar%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Energia%20solar%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "esquadrias": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Esquadrias",
    titleSpan: "Esquadrias",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Esquadrias para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Esquadrias",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20esquadrias%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=600",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Esquadrias%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Esquadrias%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Esquadrias%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Esquadrias%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "piscinas": {
    isDark: true,
    bgColor: "#1E1B4B",
    surfaceColor: "#312E81",
    cardBg: "#3730A3",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(99, 102, 241, 0.25)",
    accentColor: "#6366F1",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Piscinas",
    titleSpan: "Piscinas",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Piscinas para superar suas expectativas com máxima qualidade.",
    icon: HardHat,
    prettyCategoryName: "Piscinas",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20piscinas%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=12",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Piscinas%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Piscinas%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Piscinas%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Piscinas%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "oficinamecanica": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Oficina mecânica",
    titleSpan: "Oficina mecânica",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Oficina mecânica para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Oficina mecânica",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20oficina%20mec%C3%A2nica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=885",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Oficina%20mec%C3%A2nica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Oficina%20mec%C3%A2nica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Oficina%20mec%C3%A2nica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Oficina%20mec%C3%A2nica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "autoeletrica": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Auto elétrica",
    titleSpan: "Auto elétrica",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Auto elétrica para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Auto elétrica",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20auto%20el%C3%A9trica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=495",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Auto%20el%C3%A9trica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Auto%20el%C3%A9trica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Auto%20el%C3%A9trica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Auto%20el%C3%A9trica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "borracharia": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Borracharia",
    titleSpan: "Borracharia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Borracharia para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Borracharia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20borracharia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=226",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Borracharia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Borracharia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Borracharia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Borracharia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "lavajato": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Lava Jato",
    titleSpan: "Lava Jato",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Lava Jato para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Lava Jato",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20lava%20jato%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=531",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Lava%20Jato%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Lava%20Jato%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Lava%20Jato%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Lava%20Jato%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "esteticaautomotiva": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Estética automotiva",
    titleSpan: "Estética automotiva",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Estética automotiva para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Estética automotiva",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20est%C3%A9tica%20automotiva%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=684",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20automotiva%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20automotiva%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20automotiva%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Est%C3%A9tica%20automotiva%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "martelinhodeouro": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Martelinho de ouro",
    titleSpan: "Martelinho de ouro",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Martelinho de ouro para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Martelinho de ouro",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20martelinho%20de%20ouro%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=112",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Martelinho%20de%20ouro%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Martelinho%20de%20ouro%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Martelinho%20de%20ouro%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Martelinho%20de%20ouro%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "autopecas": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Auto peças",
    titleSpan: "Auto peças",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Auto peças para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Auto peças",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20auto%20pe%C3%A7as%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=749",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Auto%20pe%C3%A7as%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Auto%20pe%C3%A7as%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Auto%20pe%C3%A7as%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Auto%20pe%C3%A7as%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "guincho": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Guincho",
    titleSpan: "Guincho",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Guincho para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Guincho",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20guincho%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=66",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Guincho%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Guincho%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Guincho%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Guincho%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "funilaria": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Funilaria",
    titleSpan: "Funilaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Funilaria para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Funilaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20funilaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=693",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Funilaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Funilaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Funilaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Funilaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "locadora": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(239, 68, 68, 0.25)",
    accentColor: "#EF4444",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Locadora",
    titleSpan: "Locadora",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Locadora para superar suas expectativas com máxima qualidade.",
    icon: Car,
    prettyCategoryName: "Locadora",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20locadora%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=668",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Locadora%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Locadora%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Locadora%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Locadora%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "lojaderoupas": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Loja de roupas",
    titleSpan: "Loja de roupas",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Loja de roupas para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Loja de roupas",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20loja%20de%20roupas%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=423",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Loja%20de%20roupas%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Loja%20de%20roupas%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Loja%20de%20roupas%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Loja%20de%20roupas%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "modafeminina": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Moda feminina",
    titleSpan: "Moda feminina",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Moda feminina para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Moda feminina",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20moda%20feminina%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=356",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Moda%20feminina%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Moda%20feminina%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Moda%20feminina%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Moda%20feminina%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "modamasculina": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Moda masculina",
    titleSpan: "Moda masculina",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Moda masculina para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Moda masculina",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20moda%20masculina%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=623",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Moda%20masculina%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Moda%20masculina%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Moda%20masculina%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Moda%20masculina%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "modainfantil": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Moda infantil",
    titleSpan: "Moda infantil",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Moda infantil para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Moda infantil",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20moda%20infantil%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=980",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Moda%20infantil%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Moda%20infantil%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Moda%20infantil%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Moda%20infantil%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "calcados": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Calçados",
    titleSpan: "Calçados",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Calçados para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Calçados",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cal%C3%A7ados%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=397",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cal%C3%A7ados%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cal%C3%A7ados%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cal%C3%A7ados%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cal%C3%A7ados%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "bolsas": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Bolsas",
    titleSpan: "Bolsas",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Bolsas para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Bolsas",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20bolsas%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=200",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Bolsas%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Bolsas%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Bolsas%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Bolsas%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "acessorios": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Acessórios",
    titleSpan: "Acessórios",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Acessórios para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Acessórios",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20acess%C3%B3rios%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=198",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Acess%C3%B3rios%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Acess%C3%B3rios%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Acess%C3%B3rios%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Acess%C3%B3rios%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "joalheria": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Joalheria",
    titleSpan: "Joalheria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Joalheria para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Joalheria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20joalheria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=390",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Joalheria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Joalheria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Joalheria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Joalheria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "bijuterias": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Bijuterias",
    titleSpan: "Bijuterias",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Bijuterias para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Bijuterias",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20bijuterias%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=527",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Bijuterias%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Bijuterias%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Bijuterias%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Bijuterias%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "cosmeticos": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Cosméticos",
    titleSpan: "Cosméticos",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Cosméticos para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Cosméticos",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20cosm%C3%A9ticos%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=355",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Cosm%C3%A9ticos%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Cosm%C3%A9ticos%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Cosm%C3%A9ticos%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Cosm%C3%A9ticos%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "perfumaria": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Perfumaria",
    titleSpan: "Perfumaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Perfumaria para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Perfumaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20perfumaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=89",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Perfumaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Perfumaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Perfumaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Perfumaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "papelaria": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Papelaria",
    titleSpan: "Papelaria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Papelaria para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Papelaria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20papelaria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=920",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Papelaria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Papelaria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Papelaria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Papelaria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "presentes": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Presentes",
    titleSpan: "Presentes",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Presentes para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Presentes",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20presentes%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=936",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Presentes%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Presentes%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Presentes%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Presentes%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "livraria": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Livraria",
    titleSpan: "Livraria",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Livraria para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Livraria",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20livraria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=430",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Livraria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Livraria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Livraria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Livraria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "informatica": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Informática",
    titleSpan: "Informática",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Informática para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Informática",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20inform%C3%A1tica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=265",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Inform%C3%A1tica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Inform%C3%A1tica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Inform%C3%A1tica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Inform%C3%A1tica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "eletronicos": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Eletrônicos",
    titleSpan: "Eletrônicos",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Eletrônicos para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Eletrônicos",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20eletr%C3%B4nicos%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=905",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Eletr%C3%B4nicos%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Eletr%C3%B4nicos%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Eletr%C3%B4nicos%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Eletr%C3%B4nicos%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "moveis": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Móveis",
    titleSpan: "Móveis",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Móveis para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Móveis",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20m%C3%B3veis%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=462",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/M%C3%B3veis%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/M%C3%B3veis%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/M%C3%B3veis%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/M%C3%B3veis%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "colchoes": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Colchões",
    titleSpan: "Colchões",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Colchões para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Colchões",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20colch%C3%B5es%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=536",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Colch%C3%B5es%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Colch%C3%B5es%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Colch%C3%B5es%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Colch%C3%B5es%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "materialdeconstrucao": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Material de construção",
    titleSpan: "Material de construção",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Material de construção para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Material de construção",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20material%20de%20constru%C3%A7%C3%A3o%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=251",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Material%20de%20constru%C3%A7%C3%A3o%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Material%20de%20constru%C3%A7%C3%A3o%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Material%20de%20constru%C3%A7%C3%A3o%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Material%20de%20constru%C3%A7%C3%A3o%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "utilidadesdomesticas": {
    isDark: true,
    bgColor: "#1F2937",
    surfaceColor: "#374151",
    cardBg: "#4B5563",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#F43F5E",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Utilidades domésticas",
    titleSpan: "Utilidades domésticas",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Utilidades domésticas para superar suas expectativas com máxima qualidade.",
    icon: ShoppingBag,
    prettyCategoryName: "Utilidades domésticas",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20utilidades%20dom%C3%A9sticas%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=876",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Utilidades%20dom%C3%A9sticas%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Utilidades%20dom%C3%A9sticas%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Utilidades%20dom%C3%A9sticas%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Utilidades%20dom%C3%A9sticas%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "agenciademarketing": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Agência de marketing",
    titleSpan: "Agência de marketing",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Agência de marketing para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Agência de marketing",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ag%C3%AAncia%20de%20marketing%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=698",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20marketing%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20marketing%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20marketing%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20marketing%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "agenciadepublicidade": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Agência de publicidade",
    titleSpan: "Agência de publicidade",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Agência de publicidade para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Agência de publicidade",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ag%C3%AAncia%20de%20publicidade%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=941",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20publicidade%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20publicidade%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20publicidade%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20publicidade%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "socialmedia": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Social Media",
    titleSpan: "Social Media",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Social Media para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Social Media",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20social%20media%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=883",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Social%20Media%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Social%20Media%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Social%20Media%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Social%20Media%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "webdesign": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Web Design",
    titleSpan: "Web Design",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Web Design para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Web Design",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20web%20design%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=152",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Web%20Design%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Web%20Design%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Web%20Design%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Web%20Design%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "desenvolvimentodesites": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Desenvolvimento de sites",
    titleSpan: "Desenvolvimento de sites",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Desenvolvimento de sites para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Desenvolvimento de sites",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20desenvolvimento%20de%20sites%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=500",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Desenvolvimento%20de%20sites%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Desenvolvimento%20de%20sites%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Desenvolvimento%20de%20sites%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Desenvolvimento%20de%20sites%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "softwarehouse": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Software House",
    titleSpan: "Software House",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Software House para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Software House",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20software%20house%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=599",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Software%20House%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Software%20House%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Software%20House%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Software%20House%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "assistenciatecnica": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Assistência técnica",
    titleSpan: "Assistência técnica",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Assistência técnica para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Assistência técnica",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20assist%C3%AAncia%20t%C3%A9cnica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=326",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Assist%C3%AAncia%20t%C3%A9cnica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Assist%C3%AAncia%20t%C3%A9cnica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Assist%C3%AAncia%20t%C3%A9cnica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Assist%C3%AAncia%20t%C3%A9cnica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "grafica": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Gráfica",
    titleSpan: "Gráfica",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Gráfica para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Gráfica",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20gr%C3%A1fica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=908",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Gr%C3%A1fica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Gr%C3%A1fica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Gr%C3%A1fica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Gr%C3%A1fica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "comunicacaovisual": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Comunicação visual",
    titleSpan: "Comunicação visual",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Comunicação visual para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Comunicação visual",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20comunica%C3%A7%C3%A3o%20visual%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=603",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Comunica%C3%A7%C3%A3o%20visual%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Comunica%C3%A7%C3%A3o%20visual%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Comunica%C3%A7%C3%A3o%20visual%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Comunica%C3%A7%C3%A3o%20visual%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "fotografo": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Fotógrafo",
    titleSpan: "Fotógrafo",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Fotógrafo para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Fotógrafo",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20fot%C3%B3grafo%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=341",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Fot%C3%B3grafo%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Fot%C3%B3grafo%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Fot%C3%B3grafo%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Fot%C3%B3grafo%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "videomaker": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Videomaker",
    titleSpan: "Videomaker",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Videomaker para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Videomaker",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20videomaker%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=759",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Videomaker%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Videomaker%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Videomaker%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Videomaker%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "produtora": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Produtora",
    titleSpan: "Produtora",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Produtora para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Produtora",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20produtora%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=625",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Produtora%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Produtora%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Produtora%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Produtora%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "consultoriaempresarial": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Consultoria empresarial",
    titleSpan: "Consultoria empresarial",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Consultoria empresarial para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Consultoria empresarial",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20consultoria%20empresarial%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=782",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Consultoria%20empresarial%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Consultoria%20empresarial%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Consultoria%20empresarial%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Consultoria%20empresarial%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "recursoshumanos": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Recursos Humanos",
    titleSpan: "Recursos Humanos",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Recursos Humanos para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Recursos Humanos",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20recursos%20humanos%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=927",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Recursos%20Humanos%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Recursos%20Humanos%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Recursos%20Humanos%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Recursos%20Humanos%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "coworking": {
    isDark: true,
    bgColor: "#0F172A",
    surfaceColor: "#1E293B",
    cardBg: "#334155",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(14, 165, 233, 0.25)",
    accentColor: "#0EA5E9",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Coworking",
    titleSpan: "Coworking",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Coworking para superar suas expectativas com máxima qualidade.",
    icon: Briefcase,
    prettyCategoryName: "Coworking",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20coworking%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=247",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Coworking%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Coworking%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Coworking%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Coworking%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "escolaparticular": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Escola particular",
    titleSpan: "Escola particular",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Escola particular para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Escola particular",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20escola%20particular%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=263",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Escola%20particular%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Escola%20particular%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Escola%20particular%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Escola%20particular%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "cursodeidiomas": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Curso de idiomas",
    titleSpan: "Curso de idiomas",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Curso de idiomas para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Curso de idiomas",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20curso%20de%20idiomas%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=229",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Curso%20de%20idiomas%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Curso%20de%20idiomas%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Curso%20de%20idiomas%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Curso%20de%20idiomas%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "cursoprofissionalizante": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Curso profissionalizante",
    titleSpan: "Curso profissionalizante",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Curso profissionalizante para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Curso profissionalizante",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20curso%20profissionalizante%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=941",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Curso%20profissionalizante%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Curso%20profissionalizante%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Curso%20profissionalizante%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Curso%20profissionalizante%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "reforcoescolar": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Reforço escolar",
    titleSpan: "Reforço escolar",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Reforço escolar para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Reforço escolar",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20refor%C3%A7o%20escolar%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=628",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Refor%C3%A7o%20escolar%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Refor%C3%A7o%20escolar%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Refor%C3%A7o%20escolar%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Refor%C3%A7o%20escolar%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "escolainfantil": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Escola infantil",
    titleSpan: "Escola infantil",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Escola infantil para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Escola infantil",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20escola%20infantil%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=319",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Escola%20infantil%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Escola%20infantil%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Escola%20infantil%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Escola%20infantil%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "creche": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Creche",
    titleSpan: "Creche",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Creche para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Creche",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20creche%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=377",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Creche%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Creche%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Creche%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Creche%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "professorparticular": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Professor particular",
    titleSpan: "Professor particular",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Professor particular para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Professor particular",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20professor%20particular%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=870",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Professor%20particular%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Professor%20particular%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Professor%20particular%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Professor%20particular%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "autoescola": {
    isDark: true,
    bgColor: "#1E1E1E",
    surfaceColor: "#2D2D2D",
    cardBg: "#3D3D3D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#A855F7",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Autoescola",
    titleSpan: "Autoescola",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Autoescola para superar suas expectativas com máxima qualidade.",
    icon: GraduationCap,
    prettyCategoryName: "Autoescola",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20autoescola%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=934",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Autoescola%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Autoescola%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Autoescola%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Autoescola%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "hotel": {
    isDark: true,
    bgColor: "#083344",
    surfaceColor: "#164E63",
    cardBg: "#155E75",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(6, 182, 212, 0.25)",
    accentColor: "#06B6D4",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Hotel",
    titleSpan: "Hotel",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Hotel para superar suas expectativas com máxima qualidade.",
    icon: Plane,
    prettyCategoryName: "Hotel",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20hotel%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=743",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Hotel%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Hotel%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Hotel%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Hotel%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "pousada": {
    isDark: true,
    bgColor: "#083344",
    surfaceColor: "#164E63",
    cardBg: "#155E75",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(6, 182, 212, 0.25)",
    accentColor: "#06B6D4",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Pousada",
    titleSpan: "Pousada",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Pousada para superar suas expectativas com máxima qualidade.",
    icon: Plane,
    prettyCategoryName: "Pousada",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20pousada%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=586",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Pousada%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Pousada%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Pousada%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Pousada%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "hostel": {
    isDark: true,
    bgColor: "#083344",
    surfaceColor: "#164E63",
    cardBg: "#155E75",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(6, 182, 212, 0.25)",
    accentColor: "#06B6D4",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Hostel",
    titleSpan: "Hostel",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Hostel para superar suas expectativas com máxima qualidade.",
    icon: Plane,
    prettyCategoryName: "Hostel",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20hostel%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=149",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Hostel%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Hostel%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Hostel%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Hostel%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "agenciadeviagens": {
    isDark: true,
    bgColor: "#083344",
    surfaceColor: "#164E63",
    cardBg: "#155E75",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(6, 182, 212, 0.25)",
    accentColor: "#06B6D4",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Agência de viagens",
    titleSpan: "Agência de viagens",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Agência de viagens para superar suas expectativas com máxima qualidade.",
    icon: Plane,
    prettyCategoryName: "Agência de viagens",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ag%C3%AAncia%20de%20viagens%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=406",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20viagens%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20viagens%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20viagens%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ag%C3%AAncia%20de%20viagens%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "guiaturistico": {
    isDark: true,
    bgColor: "#083344",
    surfaceColor: "#164E63",
    cardBg: "#155E75",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(6, 182, 212, 0.25)",
    accentColor: "#06B6D4",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Guia turístico",
    titleSpan: "Guia turístico",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Guia turístico para superar suas expectativas com máxima qualidade.",
    icon: Plane,
    prettyCategoryName: "Guia turístico",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20guia%20tur%C3%ADstico%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=800",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Guia%20tur%C3%ADstico%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Guia%20tur%C3%ADstico%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Guia%20tur%C3%ADstico%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Guia%20tur%C3%ADstico%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "imobiliaria": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(234, 179, 8, 0.25)",
    accentColor: "#EAB308",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Imobiliária",
    titleSpan: "Imobiliária",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Imobiliária para superar suas expectativas com máxima qualidade.",
    icon: Building,
    prettyCategoryName: "Imobiliária",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20imobili%C3%A1ria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=552",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Imobili%C3%A1ria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "corretordeimoveis": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(234, 179, 8, 0.25)",
    accentColor: "#EAB308",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Corretor de imóveis",
    titleSpan: "Corretor de imóveis",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Corretor de imóveis para superar suas expectativas com máxima qualidade.",
    icon: Building,
    prettyCategoryName: "Corretor de imóveis",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20corretor%20de%20im%C3%B3veis%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=808",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Corretor%20de%20im%C3%B3veis%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Corretor%20de%20im%C3%B3veis%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Corretor%20de%20im%C3%B3veis%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Corretor%20de%20im%C3%B3veis%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "administracaodecondominios": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(234, 179, 8, 0.25)",
    accentColor: "#EAB308",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Administração de condomínios",
    titleSpan: "Administração de condomínios",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Administração de condomínios para superar suas expectativas com máxima qualidade.",
    icon: Building,
    prettyCategoryName: "Administração de condomínios",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20administra%C3%A7%C3%A3o%20de%20condom%C3%ADnios%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=297",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Administra%C3%A7%C3%A3o%20de%20condom%C3%ADnios%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Administra%C3%A7%C3%A3o%20de%20condom%C3%ADnios%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Administra%C3%A7%C3%A3o%20de%20condom%C3%ADnios%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Administra%C3%A7%C3%A3o%20de%20condom%C3%ADnios%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "igreja": {
    isDark: true,
    bgColor: "#18181B",
    surfaceColor: "#27272A",
    cardBg: "#3F3F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(250, 204, 21, 0.25)",
    accentColor: "#FACC15",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Igreja",
    titleSpan: "Igreja",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Igreja para superar suas expectativas com máxima qualidade.",
    icon: Star,
    prettyCategoryName: "Igreja",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20igreja%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=736",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Igreja%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Igreja%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Igreja%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Igreja%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "centroreligioso": {
    isDark: true,
    bgColor: "#18181B",
    surfaceColor: "#27272A",
    cardBg: "#3F3F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(250, 204, 21, 0.25)",
    accentColor: "#FACC15",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Centro religioso",
    titleSpan: "Centro religioso",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Centro religioso para superar suas expectativas com máxima qualidade.",
    icon: Star,
    prettyCategoryName: "Centro religioso",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20centro%20religioso%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=63",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Centro%20religioso%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Centro%20religioso%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Centro%20religioso%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Centro%20religioso%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "lojadeartigosreligiosos": {
    isDark: true,
    bgColor: "#18181B",
    surfaceColor: "#27272A",
    cardBg: "#3F3F46",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(250, 204, 21, 0.25)",
    accentColor: "#FACC15",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Loja de artigos religiosos",
    titleSpan: "Loja de artigos religiosos",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Loja de artigos religiosos para superar suas expectativas com máxima qualidade.",
    icon: Star,
    prettyCategoryName: "Loja de artigos religiosos",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20loja%20de%20artigos%20religiosos%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=14",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Loja%20de%20artigos%20religiosos%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Loja%20de%20artigos%20religiosos%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Loja%20de%20artigos%20religiosos%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Loja%20de%20artigos%20religiosos%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "fazenda": {
    isDark: true,
    bgColor: "#14532D",
    surfaceColor: "#166534",
    cardBg: "#15803D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(132, 204, 22, 0.25)",
    accentColor: "#84CC16",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Fazenda",
    titleSpan: "Fazenda",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Fazenda para superar suas expectativas com máxima qualidade.",
    icon: Leaf,
    prettyCategoryName: "Fazenda",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20fazenda%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=481",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Fazenda%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Fazenda%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Fazenda%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Fazenda%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "agropecuaria": {
    isDark: true,
    bgColor: "#14532D",
    surfaceColor: "#166534",
    cardBg: "#15803D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(132, 204, 22, 0.25)",
    accentColor: "#84CC16",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Agropecuária",
    titleSpan: "Agropecuária",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Agropecuária para superar suas expectativas com máxima qualidade.",
    icon: Leaf,
    prettyCategoryName: "Agropecuária",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20agropecu%C3%A1ria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=858",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Agropecu%C3%A1ria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Agropecu%C3%A1ria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Agropecu%C3%A1ria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Agropecu%C3%A1ria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "floricultura": {
    isDark: true,
    bgColor: "#14532D",
    surfaceColor: "#166534",
    cardBg: "#15803D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(132, 204, 22, 0.25)",
    accentColor: "#84CC16",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Floricultura",
    titleSpan: "Floricultura",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Floricultura para superar suas expectativas com máxima qualidade.",
    icon: Leaf,
    prettyCategoryName: "Floricultura",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20floricultura%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=498",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Floricultura%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Floricultura%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Floricultura%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Floricultura%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "gardencenter": {
    isDark: true,
    bgColor: "#14532D",
    surfaceColor: "#166534",
    cardBg: "#15803D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(132, 204, 22, 0.25)",
    accentColor: "#84CC16",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Garden Center",
    titleSpan: "Garden Center",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Garden Center para superar suas expectativas com máxima qualidade.",
    icon: Leaf,
    prettyCategoryName: "Garden Center",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20garden%20center%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=50",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Garden%20Center%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Garden%20Center%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Garden%20Center%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Garden%20Center%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "lojaagropecuaria": {
    isDark: true,
    bgColor: "#14532D",
    surfaceColor: "#166534",
    cardBg: "#15803D",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(132, 204, 22, 0.25)",
    accentColor: "#84CC16",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Loja agropecuária",
    titleSpan: "Loja agropecuária",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Loja agropecuária para superar suas expectativas com máxima qualidade.",
    icon: Leaf,
    prettyCategoryName: "Loja agropecuária",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20loja%20agropecu%C3%A1ria%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=307",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Loja%20agropecu%C3%A1ria%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Loja%20agropecu%C3%A1ria%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Loja%20agropecu%C3%A1ria%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Loja%20agropecu%C3%A1ria%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "metalurgica": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(163, 163, 163, 0.25)",
    accentColor: "#A3A3A3",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Metalúrgica",
    titleSpan: "Metalúrgica",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Metalúrgica para superar suas expectativas com máxima qualidade.",
    icon: Factory,
    prettyCategoryName: "Metalúrgica",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20metal%C3%BArgica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=71",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Metal%C3%BArgica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Metal%C3%BArgica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Metal%C3%BArgica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Metal%C3%BArgica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "industriaalimenticia": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(163, 163, 163, 0.25)",
    accentColor: "#A3A3A3",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Indústria alimentícia",
    titleSpan: "Indústria alimentícia",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Indústria alimentícia para superar suas expectativas com máxima qualidade.",
    icon: Factory,
    prettyCategoryName: "Indústria alimentícia",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20ind%C3%BAstria%20aliment%C3%ADcia%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=364",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Ind%C3%BAstria%20aliment%C3%ADcia%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Ind%C3%BAstria%20aliment%C3%ADcia%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Ind%C3%BAstria%20aliment%C3%ADcia%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Ind%C3%BAstria%20aliment%C3%ADcia%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "confeccao": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(163, 163, 163, 0.25)",
    accentColor: "#A3A3A3",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Confecção",
    titleSpan: "Confecção",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Confecção para superar suas expectativas com máxima qualidade.",
    icon: Factory,
    prettyCategoryName: "Confecção",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20confec%C3%A7%C3%A3o%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=686",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Confec%C3%A7%C3%A3o%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Confec%C3%A7%C3%A3o%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Confec%C3%A7%C3%A3o%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Confec%C3%A7%C3%A3o%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "plasticos": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(163, 163, 163, 0.25)",
    accentColor: "#A3A3A3",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Plásticos",
    titleSpan: "Plásticos",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Plásticos para superar suas expectativas com máxima qualidade.",
    icon: Factory,
    prettyCategoryName: "Plásticos",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20pl%C3%A1sticos%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=688",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Pl%C3%A1sticos%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Pl%C3%A1sticos%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Pl%C3%A1sticos%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Pl%C3%A1sticos%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "embalagens": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(163, 163, 163, 0.25)",
    accentColor: "#A3A3A3",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Embalagens",
    titleSpan: "Embalagens",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Embalagens para superar suas expectativas com máxima qualidade.",
    icon: Factory,
    prettyCategoryName: "Embalagens",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20embalagens%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=667",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Embalagens%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Embalagens%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Embalagens%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Embalagens%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
  "quimica": {
    isDark: true,
    bgColor: "#171717",
    surfaceColor: "#262626",
    cardBg: "#404040",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    borderColor: "rgba(163, 163, 163, 0.25)",
    accentColor: "#A3A3A3",
    accentText: "#FFFFFF",
    fontSerif: false,
    heroTagline: "Excelência e Qualidade em Química",
    titleSpan: "Química",
    titleSuffix: " Especializada.",
    desc: "Oferecemos o melhor atendimento e estrutura completa em Química para superar suas expectativas com máxima qualidade.",
    icon: Factory,
    prettyCategoryName: "Química",
    heroFallback: "https://image.pollinations.ai/prompt/professional%20qu%C3%ADmica%20environment%20modern%20high%20quality%208k?width=1200&height=800&nologo=true&seed=106",
    galleryFallback: [
      "https://image.pollinations.ai/prompt/Qu%C3%ADmica%20professional%20details%208k?width=800&height=600&nologo=true&seed=1",
      "https://image.pollinations.ai/prompt/Qu%C3%ADmica%20modern%20environment%208k?width=800&height=600&nologo=true&seed=2",
      "https://image.pollinations.ai/prompt/Qu%C3%ADmica%20service%20execution%208k?width=800&height=600&nologo=true&seed=3",
      "https://image.pollinations.ai/prompt/Qu%C3%ADmica%20high%20quality%20premium%208k?width=800&height=600&nologo=true&seed=4"
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
  },
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

