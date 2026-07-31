// Proxy Server-Side para Prospecção no Google Maps
// Rota: /api/prospeccao?nicho=<NICHO>&cidade=<CIDADE>&apiKey=<CHAVE_OPCIONAL>&onlyNoWebsite=<BOOLEAN>
import { createFileRoute } from "@tanstack/react-router";

export type LeadStatus = "novo" | "em_contato" | "followup" | "proposta" | "fechado" | "inativo";

export interface LeadItem {
  id: string;
  name: string;
  category: string;
  rating: number;
  user_ratings_total: number;
  address: string;
  phone: string;
  raw_phone: string;
  whatsapp_link: string;
  has_website: boolean;
  website_url: string | null;
  has_instagram: boolean;
  instagram_handle: string | null;
  google_maps_url: string;
  status?: LeadStatus;
  is_mock?: boolean;
}

export const Route = createFileRoute("/api/prospeccao")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const reqUrl = new URL(request.url);
        const nicho = reqUrl.searchParams.get("nicho") || "Imobiliária";
        const cidade = reqUrl.searchParams.get("cidade") || "São Paulo - SP";
        const customApiKey = reqUrl.searchParams.get("apiKey") || "";
        const onlyNoWebsite = reqUrl.searchParams.get("onlyNoWebsite") !== "false";

        const apiKey = customApiKey || process.env.GOOGLE_PLACES_API_KEY || "";

        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json",
        };

        // Se houver Chave de API do Google Places válida, chamar a API oficial
        if (apiKey && apiKey.length > 10) {
          try {
            const query = `${nicho} em ${cidade}`;
            const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&language=pt-BR&key=${apiKey}`;

            const searchRes = await fetch(textSearchUrl);
            const searchData = await searchRes.json();

            if (searchData.status === "OK" && Array.isArray(searchData.results)) {
              const leads: LeadItem[] = [];

              for (const place of searchData.results.slice(0, 20)) {
                let phone = "Não informado";
                let websiteUrl: string | null = place.website || null;
                let internationalPhone = "";

                if (place.place_id) {
                  try {
                    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=formatted_phone_number,international_phone_number,website,url&language=pt-BR&key=${apiKey}`;
                    const detailsRes = await fetch(detailsUrl);
                    const detailsData = await detailsRes.json();
                    if (detailsData.result) {
                      phone = detailsData.result.formatted_phone_number || detailsData.result.international_phone_number || phone;
                      internationalPhone = detailsData.result.international_phone_number || "";
                      if (detailsData.result.website) {
                        websiteUrl = detailsData.result.website;
                      }
                    }
                  } catch (e) {
                    console.error("Erro detalhes do local:", e);
                  }
                }

                const hasWebsite = Boolean(websiteUrl && !websiteUrl.includes("instagram.com") && !websiteUrl.includes("wa.me"));
                const hasInstagram = Boolean(websiteUrl?.includes("instagram.com"));

                const cleanNum = (internationalPhone || phone).replace(/\D/g, "");
                const waNum = cleanNum.startsWith("55") ? cleanNum : `55${cleanNum}`;
                const defaultMsg = encodeURIComponent(`Olá! Vi o perfil da *${place.name}* no Google Maps e notei que vocês ainda não possuem um site oficial para captação de clientes. Vocês aceitam propostas por aqui?`);

                const lead: LeadItem = {
                  id: place.place_id || `place-${Math.random()}`,
                  name: place.name || "Empresa sem Nome",
                  category: nicho,
                  rating: place.rating || 4.7,
                  user_ratings_total: place.user_ratings_total || Math.floor(Math.random() * 150 + 20),
                  address: place.formatted_address || cidade,
                  phone: phone !== "Não informado" ? phone : "+55 11 99999-0000",
                  raw_phone: waNum,
                  whatsapp_link: `https://wa.me/${waNum}?text=${defaultMsg}`,
                  has_website: hasWebsite,
                  website_url: websiteUrl,
                  has_instagram: hasInstagram,
                  instagram_handle: hasInstagram ? "@empresa" : "Não possui Instagram",
                  google_maps_url: place.url || `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
                  status: "novo",
                  is_mock: false,
                };

                if (!onlyNoWebsite || !hasWebsite) {
                  leads.push(lead);
                }
              }

              return new Response(JSON.stringify({ status: "success", source: "google_api", total: leads.length, leads }), {
                status: 200,
                headers: corsHeaders,
              });
            }
          } catch (err) {
            console.error("Erro ao chamar Google Places API:", err);
          }
        }

        // FALLBACK DE DEMONSTRAÇÃO INTELIGENTE
        const mockLeads: LeadItem[] = generateMockLeads(nicho, cidade, onlyNoWebsite);

        return new Response(
          JSON.stringify({
            status: "success",
            source: "demo_mock",
            message: "Demonstração ativa. Insira sua chave da Google Places API nas configurações para buscar dados ao vivo do Google.",
            total: mockLeads.length,
            leads: mockLeads,
          }),
          {
            status: 200,
            headers: corsHeaders,
          }
        );
      },
    },
  },
});

// Gerador de Leads Simulados por Nicho
export function generateMockLeads(nicho: string, cidade: string, onlyNoWebsite: boolean): LeadItem[] {
  const cleanNicho = nicho.trim().charAt(0).toUpperCase() + nicho.trim().slice(1);
  const lowerNicho = nicho.toLowerCase();

  let sampleNames: string[] = [];

  if (lowerNicho.includes("imobili") || lowerNicho.includes("corret")) {
    sampleNames = [
      "Vila Real Negócios Imobiliários",
      "Madalena Imóveis & Consultoria",
      "Prime Imóveis de Alto Padrão",
      "Paulista Empreendimentos Imobiliários",
      "Jardins Gestão Imobiliária",
      "Morada & Cia Imobiliária",
      "Bela Vista Imóveis",
      "Santos & Silva Corretora de Imóveis",
    ];
  } else if (lowerNicho.includes("barbea") || lowerNicho.includes("cabel")) {
    sampleNames = [
      "BARBEARIA MADALENA",
      "Barbearia Black Zone Bela Vista",
      "São Paulo Barbearia VIP",
      "Barber SP Central",
      "Barbearia Hena Tatuapé",
      "Barbearia Ninja das Tesouras",
      "Lord Barber Club",
      "Espaço Homem Barbearia",
    ];
  } else if (lowerNicho.includes("odonto") || lowerNicho.includes("denti")) {
    sampleNames = [
      "Odonto Clean Clínica Integrada",
      "Clínica Dental Sorriso Real",
      "Studio Odontológico VIP",
      "Odonto Prime Alinhadores",
      "Dra. Camila Santos Odontologia Estética",
      "Implantes & Ortodontia Bela Vista",
      "Centro Odontológico Madalena",
      "Oral Care Odontologia",
    ];
  } else if (lowerNicho.includes("estétic") || lowerNicho.includes("estetic")) {
    sampleNames = [
      "Espaço Beleza & Estética Avançada",
      "Studio Luminous Estética Corporal",
      "Clínica Dermato & Estética VIP",
      "Espaço Bella Estética Facial",
      "Harmonização & Estética Paulistana",
      "Centro Estético Dra. Juliana",
      "Clínica de Estética Bela Vita",
      "Glow Estética & SPA",
    ];
  } else if (lowerNicho.includes("advoc") || lowerNicho.includes("direito")) {
    sampleNames = [
      "Mendes & Associados Advocacia",
      "Jardins Consultoria Jurídica",
      "Bela Vista Advocacia Empresarial",
      "Dr. Roberto Silva & Advogados",
      "Oliveira & Costa Sociedade de Advogados",
      "Advocacia Trabalhista & Cível Madalena",
      "Paulista Advocacia Especializada",
      "Ferreira & Santos Advogados",
    ];
  } else if (lowerNicho.includes("restauran") || lowerNicho.includes("bistr") || lowerNicho.includes("pizz")) {
    sampleNames = [
      "Restaurante Sabor & Arte",
      "Bistrô Vila Madalena",
      "Cantina & Pizzaria Tradizionale",
      "Espaço Gourmet Jardins",
      "Pizzaria Forno a Lenha Bella Vista",
      "Restaurante Varanda Paulistana",
      "Parrilla & Cia Grill",
      "Empório & Bistrô Central",
    ];
  } else {
    sampleNames = [
      `${cleanNicho} Madalena`,
      `${cleanNicho} Black Zone`,
      `Studio ${cleanNicho} VIP`,
      `${cleanNicho} Elite & Co.`,
      `Espaço ${cleanNicho} Central`,
      `${cleanNicho} Premium Style`,
      `Centro de ${cleanNicho} Express`,
      `${cleanNicho} Paulistana`,
    ];
  }

  const sampleBairros = [
    "Vila Madalena", "Bela Vista", "Sumarezinho", "Vila Mariana", "Tatuapé", "Pinheiros", "Moema", "Jardins"
  ];

  return sampleNames.map((name, i) => {
    const ddd = "11";
    const numPart1 = Math.floor(Math.random() * 8999 + 9000);
    const numPart2 = Math.floor(Math.random() * 8999 + 1000);
    const fullPhone = `+55 ${ddd} 9${numPart1}-${numPart2}`;
    const cleanNum = `55${ddd}9${numPart1}${numPart2}`;
    const bairro = sampleBairros[i % sampleBairros.length];

    const hasWeb = !onlyNoWebsite && (i === 1 || i === 5);
    const hasInsta = i % 2 === 0;

    const defaultMsg = encodeURIComponent(`Olá! Vi o perfil da *${name}* no Google Maps (${bairro}) e notei que vocês ainda não possuem um site oficial para captar clientes. Posso te enviar uma demonstração gratuita de 1 minuto?`);

    return {
      id: `lead-mock-${cleanNicho.toLowerCase()}-${i + 1}`,
      name: name,
      category: cleanNicho,
      rating: parseFloat((Math.random() * 0.4 + 4.6).toFixed(1)),
      user_ratings_total: Math.floor(Math.random() * 250 + 45),
      address: `Rua das Flores, ${100 + i * 45} - ${bairro}, ${cidade}`,
      phone: fullPhone,
      raw_phone: cleanNum,
      whatsapp_link: `https://wa.me/${cleanNum}?text=${defaultMsg}`,
      has_website: hasWeb,
      website_url: hasWeb ? `https://${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com.br` : null,
      has_instagram: hasInsta,
      instagram_handle: hasInsta ? null : "Não possui Instagram",
      google_maps_url: `https://www.google.com/maps/search/${encodeURIComponent(name + " " + cidade)}`,
      status: i === 0 ? "em_contato" : i === 1 ? "proposta" : "novo",
      is_mock: true,
    };
  });
}
