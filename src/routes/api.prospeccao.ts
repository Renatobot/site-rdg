import { createServerFn } from "@tanstack/react-start";

export type LeadStatus = "novo" | "em_contato" | "followup" | "proposta" | "fechado" | "inativo";

export interface LeadItem {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  raw_phone: string;
  rating: number;
  user_ratings_total: number;
  has_website: boolean;
  website_url?: string;
  google_maps_url: string;
  whatsapp_link: string;
  instagram_url?: string;
  instagram_handle?: string;
  google_photos_count?: number;
  photos?: string[];
  reviews_list?: {
    author_name: string;
    rating: number;
    text: string;
    relative_time_description?: string;
  }[];
  opening_hours?: string[];
  editorial_summary?: string;
  status?: LeadStatus;
  sale_value?: number;
}

export interface ProspeccaoSearchInput {
  nicho: string;
  cidade: string;
  apiKey?: string;
  pageToken?: string;
  onlyNoWebsite?: boolean;
  deepSearch?: boolean;
}

export interface ProspeccaoSearchResponse {
  success: boolean;
  leads: LeadItem[];
  nextPageToken?: string;
  source: "google_api" | "demo_mock" | "google_error";
  message?: string;
  googleStatus?: string;
}

export const getProspeccaoLeadsServerFn = createServerFn({ method: "POST" })
  .validator((d: ProspeccaoSearchInput) => d)
  .handler(async ({ data }): Promise<ProspeccaoSearchResponse> => {
    const nicho = data.nicho || "Advocacia";
    const cidade = data.cidade || "São Paulo - SP";
    const apiKey = data.apiKey?.trim();

    if (!apiKey) {
      return {
        success: true,
        leads: generateMockLeads(nicho, cidade, data.onlyNoWebsite, Boolean(data.pageToken)),
        nextPageToken: "demo_next_page",
        source: "demo_mock",
        message: "Demonstração com dados simulados. Insira sua chave da Google Places API nas configurações para buscar ao vivo.",
      };
    }

    try {
      let rawPlaces: any[] = [];
      let nextPageToken: string | undefined = undefined;

      // 1. Busca Principal na Google Places API
      const query = `${nicho} em ${cidade}`;
      const searchUrl = data.pageToken 
        ? `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${encodeURIComponent(data.pageToken)}&key=${apiKey}&language=pt-BR`
        : `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}&language=pt-BR`;

      const res = await fetch(searchUrl);
      const json = await res.json();

      if (json.status !== "OK" && json.status !== "ZERO_RESULTS") {
        console.error("Google Places API error status:", json.status, json.error_message);
        return {
          success: false,
          leads: generateMockLeads(nicho, cidade, data.onlyNoWebsite),
          source: "google_error",
          googleStatus: json.status || "ERROR",
          message: json.error_message || `Falha na Google API (Status: ${json.status}). Verifique se a Places API está ativada e se há Billing ativo no Google Cloud Console.`,
        };
      }

      rawPlaces = json.results || [];
      nextPageToken = json.next_page_token || undefined;

      // 2. Se for a busca inicial (sem pageToken) e deepSearch estiver ativado (padrão true), busca automaticamente Página 2 para multiplicar leads
      if (!data.pageToken && nextPageToken && data.deepSearch !== false) {
        try {
          // Aguarda 2 segundos para o token do Google ser ativado
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const page2Url = `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${encodeURIComponent(nextPageToken)}&key=${apiKey}&language=pt-BR`;
          const page2Res = await fetch(page2Url);
          const page2Json = await page2Res.json();
          if (page2Json.status === "OK" && Array.isArray(page2Json.results)) {
            rawPlaces = [...rawPlaces, ...page2Json.results];
            nextPageToken = page2Json.next_page_token || undefined;
          }
        } catch (e) {
          console.warn("Erro ao buscar página 2 do Google:", e);
        }
      }

      // 3. Se for uma grande cidade/metrópole e for a busca inicial, realiza busca secundária em bairros estratégicos para trazer 60 a 100+ leads
      const cityLower = cidade.toLowerCase();
      const isMetropolis = cityLower.includes("rio de janeiro") || cityLower.includes("são paulo") || cityLower.includes("sao paulo") || cityLower.includes("belo horizonte") || cityLower.includes("salvador") || cityLower.includes("curitiba") || cityLower.includes("brasília") || cityLower.includes("fortaleza") || cityLower.includes("porto alegre") || cityLower.includes("recife") || cityLower.includes("campinas") || cityLower.includes("goiânia") || cityLower.includes("manaus");

      if (!data.pageToken && isMetropolis && data.deepSearch !== false) {
        let subQueries: string[] = [];
        if (cityLower.includes("rio de janeiro")) {
          subQueries = [`${nicho} em Barra da Tijuca, Rio de Janeiro`, `${nicho} em Copacabana, Rio de Janeiro`, `${nicho} em Campo Grande, Rio de Janeiro`];
        } else if (cityLower.includes("são paulo") || cityLower.includes("sao paulo")) {
          subQueries = [`${nicho} em Moema, São Paulo`, `${nicho} em Tatuapé, São Paulo`, `${nicho} em Pinheiros, São Paulo`];
        }

        for (const subQ of subQueries) {
          try {
            const subUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(subQ)}&key=${apiKey}&language=pt-BR`;
            const subRes = await fetch(subUrl);
            const subJson = await subRes.json();
            if (subJson.status === "OK" && Array.isArray(subJson.results)) {
              for (const item of subJson.results) {
                if (!rawPlaces.some((p) => p.place_id === item.place_id)) {
                  rawPlaces.push(item);
                }
              }
            }
          } catch (e) {
            // Ignora falhas em sub-queries
          }
        }
      }

      if (rawPlaces.length === 0) {
        return {
          success: true,
          leads: [],
          source: "google_api",
          message: `Nenhuma empresa encontrada no Google Maps para "${query}".`,
        };
      }

      // Processar TODAS as empresas encontradas sem limitação artificial de 15 leads
      const detailedLeadsProm = rawPlaces.map(async (place: any): Promise<LeadItem> => {
        const placeId = place.place_id;
        let phone = place.formatted_phone_number || "(21) 98888-7777";
        let rawPhone = phone.replace(/\D/g, "");
        let website = place.website;

        try {
          // Busca detalhes gratuitos (Essentials: name, formatted_phone_number, website, url)
          const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_phone_number,website,url&key=${apiKey}&language=pt-BR`;
          const detailRes = await fetch(detailUrl);
          if (detailRes.ok) {
            const detailJson = await detailRes.json();
            if (detailJson.status === "OK" && detailJson.result) {
              const r = detailJson.result;
              if (r.website) website = r.website;
              if (r.formatted_phone_number || r.international_phone_number) {
                phone = r.formatted_phone_number || r.international_phone_number;
                rawPhone = phone.replace(/\D/g, "");
              }
              if (r.url) place.url = r.url;
            }
          }
        } catch (e) {
          // Ignora falhas de detalhes individuais
        }

        const cleanName = place.name.split('-')[0].split('|')[0].trim();
        const instaSearchUrl = `https://www.google.com/search?q=site:instagram.com+${encodeURIComponent(cleanName)}`;
        const waNumber = rawPhone.length > 5 ? (rawPhone.startsWith("55") ? rawPhone : `55${rawPhone}`) : "5521988887777";
        const waMsg = encodeURIComponent(
          `Olá! Encontrei o perfil de *${place.name}* no Google Maps e gostaria de enviar a demonstração do novo site oficial de vocês.`
        );

        return {
          id: placeId,
          name: place.name,
          category: place.types?.[0]?.replace(/_/g, " ") || nicho,
          address: place.formatted_address || place.vicinity || cidade,
          phone,
          raw_phone: rawPhone,
          rating: place.rating || 4.8,
          user_ratings_total: place.user_ratings_total || 45,
          has_website: Boolean(website),
          website_url: website || undefined,
          google_maps_url: place.url || `https://www.google.com/maps/search/?api=1&query=google_place_id:${placeId}`,
          whatsapp_link: `https://wa.me/${waNumber}?text=${waMsg}`,
          instagram_url: instaSearchUrl,
          instagram_handle: `@${place.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 14)}`,
          google_photos_count: 0,
          photos: [],
          reviews_list: [],
          opening_hours: [],
          editorial_summary: "",
          status: "novo",
        };
      });

      let leads = await Promise.all(detailedLeadsProm);

      // Remover duplicados por ID
      const uniqueMap = new Map<string, LeadItem>();
      leads.forEach((item) => {
        if (!uniqueMap.has(item.id)) {
          uniqueMap.set(item.id, item);
        }
      });
      leads = Array.from(uniqueMap.values());

      // Aplicar ordenação: Sem Website primeiro
      if (data.onlyNoWebsite) {
        leads.sort((a, b) => (a.has_website === b.has_website ? 0 : a.has_website ? 1 : -1));
      }

      return {
        success: true,
        leads,
        nextPageToken,
        source: "google_api",
        message: `Busca ao vivo realizada! Retornadas ${leads.length} empresas reais do Google Maps para ${cidade}.`,
      };
    } catch (err: any) {
      console.error("Erro no processamento da busca:", err);
      return {
        success: false,
        leads: generateMockLeads(nicho, cidade, data.onlyNoWebsite),
        source: "google_error",
        message: err?.message || "Erro desconhecido ao conectar com os servidores do Google.",
      };
    }
  });

export function generateMockLeads(nicho: string, cidade: string, onlyNoWebsite = true, isPage2 = false): LeadItem[] {
  const prefix = isPage2 ? "Nova " : "";
  const sampleNames = [
    `${prefix}${nicho} Imperial`,
    `Grupo ${prefix}${nicho} & Associados`,
    `Estúdio ${prefix}${nicho} Prime`,
    `Centro de ${prefix}${nicho} ${cidade.split("-")[0].trim()}`,
    `${prefix}${nicho} Excellence`,
    `Clínica ${prefix}${nicho} Vida`,
    `${prefix}${nicho} Conceito VIP`,
    `Oficina ${prefix}${nicho} São José`,
  ];

  const mockLeads: LeadItem[] = sampleNames.map((name, index) => {
    const hasWebsite = index % 3 === 0;
    const cleanName = name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const phone = `(11) 9${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    const rawPhone = `55119${Math.floor(10000000 + Math.random() * 90000000)}`;

    return {
      id: `mock_lead_${index}_${isPage2 ? "p2_" : ""}${Date.now()}`,
      name,
      category: nicho,
      address: `Av. Paulista, ${100 + index * 150} - Bairro Central, ${cidade}`,
      phone,
      raw_phone: rawPhone,
      rating: Number((4.5 + Math.random() * 0.5).toFixed(1)),
      user_ratings_total: 25 + index * 34,
      has_website: hasWebsite,
      website_url: hasWebsite ? `https://www.${cleanName}.com.br` : undefined,
      google_maps_url: `https://www.google.com/maps/search/${encodeURIComponent(name + " " + cidade)}`,
      whatsapp_link: `https://wa.me/${rawPhone}?text=${encodeURIComponent(`Olá! Gostaria de enviar a demonstração do novo site oficial de ${name}.`)}`,
      instagram_url: `https://www.instagram.com/${cleanName}/`,
      instagram_handle: `@${cleanName}`,
      google_photos_count: 0,
      photos: [],
      reviews_list: [],
      opening_hours: [],
      editorial_summary: "",
      status: "novo",
    };
  });

  if (onlyNoWebsite) {
    mockLeads.sort((a, b) => (a.has_website === b.has_website ? 0 : a.has_website ? 1 : -1));
  }

  return mockLeads;
}
