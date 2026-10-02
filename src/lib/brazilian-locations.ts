export interface BrazilianLocationContext {
  originalInput: string;
  isState: boolean;
  cleanCity: string;
  stateUf: string;
  stateName: string;
  ddd: string;
  neighborhoods: string[];
  streets: string[];
  subQueries: string[];
}

interface StateInfo {
  uf: string;
  name: string;
  defaultDdd: string;
  capital: string;
  topCities: string[];
  neighborhoods: string[];
  streets: string[];
}

const BRAZILIAN_STATES: Record<string, StateInfo> = {
  mg: {
    uf: "MG",
    name: "Minas Gerais",
    defaultDdd: "31",
    capital: "Belo Horizonte",
    topCities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Uberaba"],
    neighborhoods: ["Savassi", "Lourdes", "Funcionários", "Belvedere", "Buritis", "Centro", "Barro Preto", "Gutierrez", "Sion", "Anchieta"],
    streets: ["Av. Afonso Pena", "Av. do Contorno", "Av. Amazonas", "Rua da Bahia", "Av. Cristóvão Colombo", "Av. Getúlio Vargas", "Rua Guajajaras"],
  },
  sp: {
    uf: "SP",
    name: "São Paulo",
    defaultDdd: "11",
    capital: "São Paulo",
    topCities: ["São Paulo", "Campinas", "Santos", "São Bernardo do Campo", "Santo André", "Osasco", "Ribeirão Preto", "Sorocaba", "São José dos Campos"],
    neighborhoods: ["Moema", "Pinheiros", "Jardins", "Tatuapé", "Itaim Bibi", "Santana", "Bela Vista", "Perdizes", "Vila Mariana", "Morumbi"],
    streets: ["Av. Paulista", "Av. Faria Lima", "Rua Augusta", "Av. Rebouças", "Rua Oscar Freire", "Av. Eng. Luís Carlos Berrini", "Av. Cruzeiro do Sul", "Rua Teodoro Sampaio"],
  },
  rj: {
    uf: "RJ",
    name: "Rio de Janeiro",
    defaultDdd: "21",
    capital: "Rio de Janeiro",
    topCities: ["Rio de Janeiro", "Niterói", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Campos dos Goytacazes", "Petrópolis", "Volta Redonda", "Cabo Frio"],
    neighborhoods: ["Copacabana", "Ipanema", "Barra da Tijuca", "Botafogo", "Tijuca", "Centro", "Campo Grande", "Leblon", "Flamengo", "Recreio dos Bandeirantes"],
    streets: ["Av. Atlântica", "Rua Visconde de Pirajá", "Av. das Américas", "Rua Voluntários da Pátria", "Rua Conde de Bonfim", "Av. Rio Branco", "Av. Presidente Vargas", "Rua Santa Clara"],
  },
  pr: {
    uf: "PR",
    name: "Paraná",
    defaultDdd: "41",
    capital: "Curitiba",
    topCities: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu"],
    neighborhoods: ["Batel", "Água Verde", "Bigorrilho", "Centro", "Cabral", "Juvevê", "Santa Felicidade", "Ecoville", "Mercês"],
    streets: ["Av. Batel", "Av. Sete de Setembro", "Rua XV de Novembro", "Av. Cândido de Abreu", "Av. Manoel Ribas", "Rua Brigadeiro Franco"],
  },
  sc: {
    uf: "SC",
    name: "Santa Catarina",
    defaultDdd: "48",
    capital: "Florianópolis",
    topCities: ["Florianópolis", "Joinville", "Blumenau", "São José", "Itajaí", "Chapecó", "Criciúma", "Balneário Camboriú"],
    neighborhoods: ["Centro", "Trindade", "Jurerê", "Agronômica", "Campeche", "Coqueiros", "Itacorubi", "Lagoa da Conceição"],
    streets: ["Av. Beira-Mar Norte", "Rua Bocaiúva", "Rod. SC-401", "Av. Mauro Ramos", "Rua Felipe Schmidt", "Av. Rio Branco"],
  },
  rs: {
    uf: "RS",
    name: "Rio Grande do Sul",
    defaultDdd: "51",
    capital: "Porto Alegre",
    topCities: ["Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas", "Santa Maria", "Gravataí", "Novo Hamburgo", "Passo Fundo"],
    neighborhoods: ["Moinhos de Vento", "Bela Vista", "Petrópolis", "Centro Histórico", "Menino Deus", "Mont'Serrat", "Rio Branco", "Cidade Baixa"],
    streets: ["Av. Carlos Gomes", "Rua dos Andradas", "Av. Goethe", "Av. Ipiranga", "Av. Independência", "Rua Padre Chagas", "Av. Assis Brasil"],
  },
  ba: {
    uf: "BA",
    name: "Bahia",
    defaultDdd: "71",
    capital: "Salvador",
    topCities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Ilhéus", "Lauro de Freitas"],
    neighborhoods: ["Pituba", "Barra", "Caminho das Árvores", "Itaigara", "Rio Vermelho", "Graça", "Ondina", "Stella Maris", "Brotas"],
    streets: ["Av. Tancredo Neves", "Av. Sete de Setembro", "Av. Manoel Dias da Silva", "Av. ACM", "Av. Oceânica", "Av. Paralela"],
  },
  go: {
    uf: "GO",
    name: "Goiás",
    defaultDdd: "62",
    capital: "Goiânia",
    topCities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Águas Lindas de Goiás", "Luziânia", "Itumbiara"],
    neighborhoods: ["Setor Bueno", "Setor Marista", "Setor Oeste", "Centro", "Jardim Goiás", "Setor Sul", "Setor Nova Suíça"],
    streets: ["Av. 85", "Av. T-9", "Av. Goiás", "Av. 136", "Av. T-63", "Av. Mutirão", "Av. Jamel Cecílio"],
  },
  df: {
    uf: "DF",
    name: "Distrito Federal",
    defaultDdd: "61",
    capital: "Brasília",
    topCities: ["Brasília", "Taguatinga", "Ceilândia", "Águas Claras", "Guará", "Samambaia", "Sobradinho"],
    neighborhoods: ["Asa Sul", "Asa Norte", "Sudoeste", "Noroeste", "Lago Sul", "Lago Norte", "Águas Claras", "Setor Hoteleiro"],
    streets: ["Setor Comercial Sul", "W3 Sul", "W3 Norte", "CLS 102", "Eixo Monumental", "Setor Bancário Sul", "Av. das Castanheiras"],
  },
  ce: {
    uf: "CE",
    name: "Ceará",
    defaultDdd: "85",
    capital: "Fortaleza",
    topCities: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca"],
    neighborhoods: ["Aldeota", "Meireles", "Cocó", "Centro", "Varjota", "Papicu", "Dionísio Torres", "Mucuripe"],
    streets: ["Av. Beira Mar", "Av. Santos Dumont", "Av. Dom Luís", "Av. Washington Soares", "Av. Barão de Studart", "Av. Monsenhor Tabosa"],
  },
  pe: {
    uf: "PE",
    name: "Pernambuco",
    defaultDdd: "81",
    capital: "Recife",
    topCities: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho"],
    neighborhoods: ["Boa Viagem", "Pina", "Graças", "Espinheiro", "Derby", "Casa Forte", "Madalena", "Torre"],
    streets: ["Av. Boa Viagem", "Av. Agamenon Magalhães", "Av. Conselheiro Aguiar", "Rua da Aurora", "Av. Domingos Ferreira", "Av. Rui Barbosa"],
  },
  es: {
    uf: "ES",
    name: "Espírito Santo",
    defaultDdd: "27",
    capital: "Vitória",
    topCities: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim", "Linhares", "Colatina"],
    neighborhoods: ["Praia do Canto", "Jardim da Penha", "Praia da Costa", "Centro", "Enseada do Suá", "Mata da Praia", "Itapuã"],
    streets: ["Av. Desembargador Santos Neves", "Av. Dante Michelini", "Av. Nossa Senhora da Penha", "Av. Champagnat", "Rua Aleixo Netto"],
  },
  mt: {
    uf: "MT",
    name: "Mato Grosso",
    defaultDdd: "65",
    capital: "Cuiabá",
    topCities: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
    neighborhoods: ["Goiabeiras", "Santa Rosa", "Jardim Cuiabá", "Centro", "Bosque da Saúde"],
    streets: ["Av. do CPA", "Av. Fernando Corrêa", "Av. Miguel Sutil", "Av. Getúlio Vargas"],
  },
  ms: {
    uf: "MS",
    name: "Mato Grosso do Sul",
    defaultDdd: "67",
    capital: "Campo Grande",
    topCities: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
    neighborhoods: ["Jardim dos Estados", "Chácara Cachoeira", "Centro", "Santa Fé", "Vilas Boas"],
    streets: ["Av. Afonso Pena", "Av. Mato Grosso", "Av. Ceará", "Rua 14 de Julho"],
  },
  am: {
    uf: "AM",
    name: "Amazonas",
    defaultDdd: "92",
    capital: "Manaus",
    topCities: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
    neighborhoods: ["Adrianópolis", "Ponta Negra", "Vieiralves", "Centro", "Parque Dez de Novembro"],
    streets: ["Av. Djalma Batista", "Av. Constantino Nery", "Av. Coronel Teixeira", "Av. Eduardo Ribeiro"],
  },
  pa: {
    uf: "PA",
    name: "Pará",
    defaultDdd: "91",
    capital: "Belém",
    topCities: ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas"],
    neighborhoods: ["Nazaré", "Umarizal", "Batista Campos", "Marco", "Reduto"],
    streets: ["Av. Nazaré", "Av. Visconde de Souza Franco (Doca)", "Av. Governador Magalhães Barata", "Av. Almirante Barroso"],
  },
  rn: {
    uf: "RN",
    name: "Rio Grande do Norte",
    defaultDdd: "84",
    capital: "Natal",
    topCities: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
    neighborhoods: ["Tirol", "Petrópolis", "Ponta Negra", "Capim Macio", "Candelária"],
    streets: ["Av. Hermes da Fonseca", "Av. Engenheiro Roberto Freire", "Av. Prudente de Morais", "Av. Bernardo Vieira"],
  },
  pb: {
    uf: "PB",
    name: "Paraíba",
    defaultDdd: "83",
    capital: "João Pessoa",
    topCities: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
    neighborhoods: ["Manaíra", "Tambaú", "Cabo Branco", "Bessa", "Altiplano"],
    streets: ["Av. Epitácio Pessoa", "Av. Cabo Branco", "Av. Governador Flávio Ribeiro Coutinho", "Av. João Maurício"],
  },
  al: {
    uf: "AL",
    name: "Alagoas",
    defaultDdd: "82",
    capital: "Maceió",
    topCities: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios"],
    neighborhoods: ["Ponta Verde", "Pajuçara", "Jatiúca", "Mangabeiras", "Farol"],
    streets: ["Av. Fernandes Lima", "Av. Silvio Carlos Viana", "Av. Álvaro Otacílio", "Av. Doutor Antônio Gomes de Barros"],
  },
  se: {
    uf: "SE",
    name: "Sergipe",
    defaultDdd: "79",
    capital: "Aracaju",
    topCities: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
    neighborhoods: ["13 de Julho", "Jardins", "Atalaia", "Grageru", "Centro"],
    streets: ["Av. Beira Mar", "Av. Santos Dumont", "Av. Barão de Maruim", "Av. Ministro Geraldo Barreto Sobral"],
  },
  pi: {
    uf: "PI",
    name: "Piauí",
    defaultDdd: "86",
    capital: "Teresina",
    topCities: ["Teresina", "Parnaíba", "Picos", "Floriano"],
    neighborhoods: ["Jóquei", "Fátima", "Ilhotas", "Centro", "Ininga"],
    streets: ["Av. Frei Serafim", "Av. Dom Severino", "Av. Homero Castelo Branco", "Av. Raul Lopes"],
  },
  ma: {
    uf: "MA",
    name: "Maranhão",
    defaultDdd: "98",
    capital: "São Luís",
    topCities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias"],
    neighborhoods: ["Renascença", "Ponta d'Areia", "Calhau", "Olho d'Água", "Cohama"],
    streets: ["Av. Colares Moreira", "Av. dos Holandeses", "Av. Marechal Castelo Branco", "Av. Litorânea"],
  },
  to: {
    uf: "TO",
    name: "Tocantins",
    defaultDdd: "63",
    capital: "Palmas",
    topCities: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"],
    neighborhoods: ["Plano Diretor Sul", "Plano Diretor Norte", "Graciosa", "Taquaralto"],
    streets: ["Av. Teotônio Segurado", "Av. JK", "Av. LO-01", "Av. NS-02"],
  },
  ro: {
    uf: "RO",
    name: "Rondônia",
    defaultDdd: "69",
    capital: "Porto Velho",
    topCities: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
    neighborhoods: ["Olaria", "São Cristóvão", "Centro", "Nossa Senhora das Graças"],
    streets: ["Av. Sete de Setembro", "Av. Jorge Teixeira", "Av. Carlos Gomes", "Av. Pinheiro Machado"],
  },
  ac: {
    uf: "AC",
    name: "Acre",
    defaultDdd: "68",
    capital: "Rio Branco",
    topCities: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    neighborhoods: ["Bosque", "Cerâmica", "Centro", "Estação Experimental"],
    streets: ["Av. Ceará", "Av. Getúlio Vargas", "Av. Brasil", "Av. Nações Unidas"],
  },
  rr: {
    uf: "RR",
    name: "Roraima",
    defaultDdd: "95",
    capital: "Boa Vista",
    topCities: ["Boa Vista", "Rorainópolis", "Caracaraí"],
    neighborhoods: ["São Francisco", "Paraviana", "Centro", "Caçari"],
    streets: ["Av. Ville Roy", "Av. Major Williams", "Av. Jaime Brasil", "Av. Capitão Ene Garcez"],
  },
  ap: {
    uf: "AP",
    name: "Amapá",
    defaultDdd: "96",
    capital: "Macapá",
    topCities: ["Macapá", "Santana", "Laranjal do Jari"],
    neighborhoods: ["Central", "Santa Rita", "Trem", "Jesus de Nazaré"],
    streets: ["Av. FAB", "Rua Cândido Mendes", "Av. Padre Júlio Maria Lombaerd", "Av. Coaracy Nunes"],
  },
};

// Cidades com DDDs específicos e bairros de alta relevância
interface CityOverride {
  city: string;
  uf: string;
  ddd: string;
  neighborhoods: string[];
  streets: string[];
}

const SPECIFIC_CITIES: Record<string, CityOverride> = {
  santos: {
    city: "Santos",
    uf: "SP",
    ddd: "13",
    neighborhoods: ["Gonzaga", "Boqueirão", "Ponta da Praia", "Embaré", "Pompeia", "Centro", "Aparecida", "Campo Grande", "José Menino", "Encruzilhada"],
    streets: ["Av. Ana Costa", "Av. Vicente de Carvalho", "Av. Presidente Wilson", "Rua Tolentino Filgueiras", "Av. Bartolomeu de Gusmão", "Av. Conselheiro Nébias", "Av. Washington Luís", "Av. Senador Feijó"],
  },
  campinas: {
    city: "Campinas",
    uf: "SP",
    ddd: "19",
    neighborhoods: ["Cambuí", "Taquaral", "Barão Geraldo", "Centro", "Guanabara", "Nova Campinas", "Castelo", "Jardim Chapadão"],
    streets: ["Av. Francisco Glicério", "Av. José de Souza Campos", "Av. Barão de Itapura", "Rua Coronel Quirino", "Av. Andrade Neves"],
  },
  "ribeirao preto": {
    city: "Ribeirão Preto",
    uf: "SP",
    ddd: "16",
    neighborhoods: ["Jardim Botânico", "Centro", "Boulevard", "Jardim Irajá", "Nova Aliança", "Alto da Boa Vista"],
    streets: ["Av. Nove de Julho", "Av. Presidente Vargas", "Av. Independência", "Av. Professor João Fiúsa"],
  },
  "sao jose dos campos": {
    city: "São José dos Campos",
    uf: "SP",
    ddd: "12",
    neighborhoods: ["Jardim Aquárius", "Vila Ema", "Centro", "Jardim Esplanada", "Urbanova"],
    streets: ["Av. São João", "Av. Cassiano Ricardo", "Av. Nove de Julho", "Av. Anchieta"],
  },
  sorocaba: {
    city: "Sorocaba",
    uf: "SP",
    ddd: "15",
    neighborhoods: ["Campolim", "Centro", "Mangal", "Jardim Paulistano", "Além Ponte"],
    streets: ["Av. Antônio Carlos Comitre", "Av. Dom Aguirre", "Av. Barão de Tatuí", "Av. General Carneiro"],
  },
  uberlandia: {
    city: "Uberlândia",
    uf: "MG",
    ddd: "34",
    neighborhoods: ["Santa Mônica", "Fundinho", "Centro", "Tibery", "Martins", "Granja Marileusa"],
    streets: ["Av. Rondon Pacheco", "Av. Afonso Pena", "Av. João Naves de Ávila", "Av. Floriano Peixoto"],
  },
  "juiz de fora": {
    city: "Juiz de Fora",
    uf: "MG",
    ddd: "32",
    neighborhoods: ["Centro", "São Mateus", "Granbery", "Cascatinha", "Bom Pastor"],
    streets: ["Av. Barão do Rio Branco", "Rua Halfeld", "Av. Presidente Itamar Franco", "Rua São Mateus"],
  },
  niteroi: {
    city: "Niterói",
    uf: "RJ",
    ddd: "21",
    neighborhoods: ["Icaraí", "Ingá", "Santa Rosa", "Centro", "Piratininga", "Charitas", "São Francisco"],
    streets: ["Rua Coronel Moreira César", "Praia de Icaraí", "Av. Roberto Silveira", "Rua Gavião Peixoto"],
  },
  "cabo frio": {
    city: "Cabo Frio",
    uf: "RJ",
    ddd: "22",
    neighborhoods: ["Praia do Forte", "Passagem", "Centro", "Braga", "São Bento"],
    streets: ["Av. Assunção", "Av. Hilton Massa", "Av. Teixeira e Souza", "Rua Silva Jardim"],
  },
  petropolis: {
    city: "Petrópolis",
    uf: "RJ",
    ddd: "24",
    neighborhoods: ["Centro Histórico", "Itaipava", "Valparaíso", "Bingen", "Quitandinha"],
    streets: ["Rua do Imperador", "Rua 16 de Março", "Estrada União e Indústria", "Av. Koeler"],
  },
  londrina: {
    city: "Londrina",
    uf: "PR",
    ddd: "43",
    neighborhoods: ["Gleba Palhano", "Centro", "Jardim Higienópolis", "Bela Suíça"],
    streets: ["Av. Higienópolis", "Av. Ayrton Senna da Silva", "Rua Sergipe", "Av. Paraná"],
  },
  maringa: {
    city: "Maringá",
    uf: "PR",
    ddd: "44",
    neighborhoods: ["Zona 01 (Centro)", "Zona 03", "Zona 07", "Jardim Alvorada"],
    streets: ["Av. Brasil", "Av. Getúlio Vargas", "Av. Tiradentes", "Av. São Paulo"],
  },
  joinville: {
    city: "Joinville",
    uf: "SC",
    ddd: "47",
    neighborhoods: ["América", "Atiradores", "Centro", "Glória", "Saguaçu"],
    streets: ["Rua XV de Novembro", "Rua Visconde de Taunay", "Rua Ministro Calógeras", "Av. Rolf Colin"],
  },
  blumenau: {
    city: "Blumenau",
    uf: "SC",
    ddd: "47",
    neighborhoods: ["Vila Nova", "Victor Konder", "Centro", "Jardim Blumenau", "Vila Germânica"],
    streets: ["Rua XV de Novembro", "Rua 7 de Setembro", "Av. Martin Luther", "Rua Antônio da Veiga"],
  },
  "caxias do sul": {
    city: "Caxias do Sul",
    uf: "RS",
    ddd: "54",
    neighborhoods: ["Exposição", "Madureira", "Centro", "Panazzolo", "Lourdes"],
    streets: ["Av. Júlio de Castilhos", "Rua Sinimbu", "Rua Moreira César", "Rua Alfredo Chaves"],
  },
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Inteligência Geográfica Completa para Prospecção B2B em Qualquer Estado ou Cidade do Brasil.
 * Nunca mais força Rio de Janeiro ou DDD 21 em outras regiões!
 */
export function getBrazilianLocationContext(rawInput: string, nicho = "Empresa"): BrazilianLocationContext {
  const input = (rawInput || "").trim();
  const norm = normalizeText(input);

  // 1. Verificar se o input é diretamente uma cidade com override específico (ex: Santos, Campinas, etc.)
  for (const [key, spec] of Object.entries(SPECIFIC_CITIES)) {
    if (norm === key || norm.startsWith(`${key} `) || norm.includes(key)) {
      const subQueries = spec.neighborhoods.slice(0, 8).map((nbd) => `${nicho} em ${nbd}, ${spec.city}`);
      return {
        originalInput: input,
        isState: false,
        cleanCity: spec.city,
        stateUf: spec.uf,
        stateName: BRAZILIAN_STATES[spec.uf.toLowerCase()]?.name || spec.uf,
        ddd: spec.ddd,
        neighborhoods: spec.neighborhoods,
        streets: spec.streets,
        subQueries,
      };
    }
  }

  // 2. Verificar se o input é um ESTADO Brasileiro (ex: "Minas Gerais", "MG", "Bahia", "BA", etc.)
  for (const [key, st] of Object.entries(BRAZILIAN_STATES)) {
    const normStateName = normalizeText(st.name);
    const isStateMatch =
      norm === key ||
      norm === normStateName ||
      norm === `estado de ${normStateName}` ||
      norm === `estado do ${normStateName}` ||
      norm === `estado da ${normStateName}` ||
      norm.startsWith(`${normStateName} `) ||
      norm.endsWith(` ${normStateName}`);

    if (isStateMatch) {
      // Se buscou pelo estado, expande nas principais cidades econômicas daquele estado
      const subQueries = st.topCities.map((city) => `${nicho} em ${city}, ${st.uf}`);
      return {
        originalInput: input,
        isState: true,
        cleanCity: st.capital, // Usa a capital como cidade referência de exibição
        stateUf: st.uf,
        stateName: st.name,
        ddd: st.defaultDdd,
        neighborhoods: st.neighborhoods,
        streets: st.streets,
        subQueries,
      };
    }
  }

  // 3. Tentar extrair "Cidade - UF" (ex: "Belo Horizonte - MG", "Santos - SP", "Curitiba - PR")
  let cleanCity = input;
  let detectedUf = "";

  if (input.includes("-")) {
    const parts = input.split("-");
    cleanCity = parts[0].trim();
    detectedUf = parts[1].trim().toUpperCase();
  } else if (input.includes(",")) {
    const parts = input.split(",");
    cleanCity = parts[0].trim();
    detectedUf = parts[1].trim().toUpperCase();
  }

  const cleanNorm = normalizeText(cleanCity);

  // Re-checar override da cidade limpa
  for (const [key, spec] of Object.entries(SPECIFIC_CITIES)) {
    if (cleanNorm === key || cleanNorm.includes(key)) {
      const subQueries = spec.neighborhoods.slice(0, 8).map((nbd) => `${nicho} em ${nbd}, ${spec.city}`);
      return {
        originalInput: input,
        isState: false,
        cleanCity: spec.city,
        stateUf: spec.uf,
        stateName: BRAZILIAN_STATES[spec.uf.toLowerCase()]?.name || spec.uf,
        ddd: spec.ddd,
        neighborhoods: spec.neighborhoods,
        streets: spec.streets,
        subQueries,
      };
    }
  }

  // Se detectou UF válida
  const ufKey = detectedUf.toLowerCase();
  if (ufKey && BRAZILIAN_STATES[ufKey]) {
    const st = BRAZILIAN_STATES[ufKey];
    const subQueries = [
      `${nicho} em Centro, ${cleanCity}`,
      `${nicho} em Bairro Principal, ${cleanCity}`,
      `${nicho} comercial ${cleanCity}`,
      `${nicho} atendimento ${cleanCity}`,
      `${nicho} em ${cleanCity}, ${st.uf}`,
    ];

    return {
      originalInput: input,
      isState: false,
      cleanCity: cleanCity,
      stateUf: st.uf,
      stateName: st.name,
      ddd: st.defaultDdd,
      neighborhoods: ["Centro", "Bela Vista", "Jardim América", "Vila Nova", "Alto da Colina", "São José", "Planalto"],
      streets: ["Av. Brasil", "Av. Getúlio Vargas", "Rua XV de Novembro", "Av. Independência", "Rua Marechal Deodoro", "Av. Central"],
      subQueries,
    };
  }

  // 4. Fallback Dinâmico Inteligente para qualquer outra cidade do Brasil
  // Procura se tem algum nome de estado ou capital no texto
  let matchedState = BRAZILIAN_STATES.sp; // Default neutro caso não encontre nada
  for (const [k, st] of Object.entries(BRAZILIAN_STATES)) {
    if (cleanNorm.includes(normalizeText(st.name)) || cleanNorm.includes(normalizeText(st.capital))) {
      matchedState = st;
      break;
    }
  }

  const subQueries = [
    `${nicho} em Centro, ${cleanCity}`,
    `${nicho} em Zona Sul, ${cleanCity}`,
    `${nicho} em Bairro Nobre, ${cleanCity}`,
    `${nicho} comercial ${cleanCity}`,
    `${nicho} em ${cleanCity}`,
  ];

  return {
    originalInput: input,
    isState: false,
    cleanCity: cleanCity || "Sua Região",
    stateUf: matchedState.uf,
    stateName: matchedState.name,
    ddd: matchedState.defaultDdd,
    neighborhoods: ["Centro", "Jardim América", "Bela Vista", "Vila Nova", "São José", "Alto da Colina"],
    streets: ["Av. Brasil", "Av. Central", "Rua XV de Novembro", "Av. Presidente Vargas", "Rua Principal", "Av. Getúlio Vargas"],
    subQueries,
  };
}
