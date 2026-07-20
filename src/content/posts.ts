export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  body: string; // Markdown
}

export const posts: BlogPost[] = [
  {
    slug: "sistema-para-barbearia-comparativo-2026",
    title: "Sistema para barbearia: comparativo entre Fila Zero Barber, AppBarber e Trinks (2026)",
    excerpt:
      "Qual sistema para barbearia escolher em 2026? Comparamos Fila Zero Barber, AppBarber e Trinks em preço, IA de retenção, comissão automática e agenda online.",
    date: "2026-07-05",
    readingMinutes: 7,
    category: "Sistemas",
    body: `## Por que escolher bem o sistema para barbearia importa

Um sistema para barbearia não é só uma agenda digital — é o motor que decide se o cliente volta ou se some para o concorrente da esquina. Em 2026, três nomes aparecem em quase toda pesquisa: **Fila Zero Barber**, **AppBarber** e **Trinks**. Cada um resolve o problema de um jeito diferente, e a escolha errada custa comissão errada, cliente perdido e barbeiro desmotivado.

## Comparativo rápido

| Recurso | Fila Zero Barber | AppBarber | Trinks |
| --- | --- | --- | --- |
| Agenda online 24h | Sim | Sim | Sim |
| Lembrete automático 1h antes | Sim | Sim | Parcial |
| Comissão calculada automática | Sim, na finalização | Sim | Manual |
| **IA de retenção de clientes** | **Sim, nativa** | Não | Não |
| Link público de agendamento | Sim | Sim | Sim |
| Multi-profissional | Sim | Sim | Sim |
| Foco no setor | Barbearia | Barbearia | Beleza geral |
| Preço inicial | Sob medida | R$ 89/mês+ | R$ 119/mês+ |

## Fila Zero Barber — o que diferencia

O **[Fila Zero Barber](https://filazerobarbery.lovable.app)** foi desenhado para barbearia, não adaptado. O diferencial real está na **IA de retenção**: o sistema identifica automaticamente qual cliente fiel está sumindo e sugere uma ação (mensagem no WhatsApp, cupom, lembrete) antes que ele vá para o concorrente. Comissão fecha sozinha no fim do serviço, dashboard mostra caixa em tempo real.

Ideal para: barbearias que querem crescer sem contratar gerente.

## AppBarber — o veterano do setor

Sistema consolidado, com base grande de barbearias no Brasil. Cobre bem o básico (agenda, comissão, cadastro de cliente) e tem integração com pagamento. Fica devendo em automação inteligente — não avisa quando um cliente está sumindo, e o dono precisa olhar relatório manualmente para descobrir.

Ideal para: barbearias que já usam há anos e querem manter o padrão.

## Trinks — o generalista

O Trinks atende beleza em geral (salão, estética, barbearia). É robusto, tem app próprio e boa presença de marca. O trade-off é que **não é otimizado para o dia a dia de barbearia** — comissão manual, sem lógica específica para corte + barba + serviços rápidos em sequência.

Ideal para: espaços híbridos que fazem barbearia + estética no mesmo lugar.

## Como decidir em 3 perguntas

1. **Você já perde cliente fiel sem perceber?** Se sim, IA de retenção deixa de ser luxo — Fila Zero Barber é a escolha óbvia.
2. **Sua barbearia é 100% barbearia ou mista?** Mista com estética pesa para Trinks. Só barbearia pesa para Fila Zero Barber ou AppBarber.
3. **Quanto o dono quer olhar planilha por mês?** Quanto menos, mais valor em automação nativa (comissão + retenção).

## O custo real de ficar sem sistema

A cada cliente que não volta, vai o ticket médio de um mês inteiro. Um sistema que custa menos que dois cortes por semana paga ele mesmo na primeira retenção evitada. **Sem sistema, você está subsidiando o concorrente que já tem.**

## Como testar o Fila Zero Barber

O **[Fila Zero Barber](https://filazerobarbery.lovable.app)** roda 100% no navegador — sem instalar nada, sem cartão para começar. Cadastra serviços, importa agenda e em uma tarde a barbearia está online com IA de retenção rodando.

Quer um diagnóstico antes de decidir? **[Fala com a gente aqui](/contato)** — respondemos no mesmo dia útil.`,
  },
  {
    slug: "por-que-sua-barbearia-precisa-de-sistema-proprio",
    title: "Por que sua barbearia precisa de um sistema próprio em 2026",
    excerpt:
      "Agenda no caderno e cliente sumindo sem aviso? Veja o que muda quando a barbearia roda em um sistema feito para o setor.",
    date: "2026-06-25",
    readingMinutes: 5,
    category: "Sistemas",
    body: `## O caderno não escala

A maioria das barbearias ainda anota horário no papel, confirma cliente por WhatsApp e fecha comissão na ponta do lápis. Funciona — até o dia em que o barbeiro fura, dois clientes marcam no mesmo horário e o caixa do mês não bate.

## O que um sistema próprio resolve

- **Agenda online** para o cliente marcar sozinho, 24 horas por dia.
- **Lembrete automático** uma hora antes do horário — reduz no-show em até 70%.
- **Comissão calculada na hora** que o serviço é finalizado.
- **IA de retenção** que avisa quando um cliente fiel está sumindo.

## O custo de não ter

A cada cliente que não volta, vai junto o ticket médio do mês inteiro. Um sistema que custa menos que um corte por dia paga ele mesmo na primeira semana.

> "Comecei a usar o Fila Zero Barber e em 30 dias recuperei 12 clientes que tinham sumido. Pagou o ano inteiro."

## Como começar

O **[Fila Zero Barber](https://filazerobarbery.lovable.app)** roda 100% no navegador, sem instalar nada. Cadastra os serviços, importa a agenda e em uma tarde sua barbearia está online.`,
  },
  {
    slug: "smart-treino-personal-trainer-escala-alunos",
    title: "Como um personal trainer escala de 20 para 100 alunos sem perder qualidade",
    excerpt:
      "Planilha trava em 30 alunos. Veja a estrutura que personais de alta performance usam para entregar treino individual em escala.",
    date: "2026-06-27",
    readingMinutes: 6,
    category: "Smart Treino",
    body: `## O teto invisível dos 30 alunos

Quase todo personal bate na mesma parede: até 30 alunos dá pra controlar treino, evolução e cobrança no WhatsApp + planilha. Depois disso, ou a qualidade cai ou o personal vira refém do próprio negócio — trabalhando 14 horas por dia só pra dar conta da operação.

## O que muda com uma plataforma de treino

- **Treino entregue no app** do aluno, com vídeo de execução e timer de descanso.
- **Progressão automática** de carga baseada no feedback da última sessão.
- **Avaliação física** com gráficos de evolução — o aluno *vê* o progresso e renova.
- **Cobrança recorrente** integrada — fim do "esqueci de pagar esse mês".

## O segredo é padronizar sem engessar

Personais que escalam não inventam treino do zero pra cada aluno. Eles criam **blocos reutilizáveis** (força inferior A, hipertrofia superior B, condicionamento metabólico) e combinam de acordo com o objetivo.

> Padronizar o que é técnico libera tempo pra personalizar o que importa: acompanhamento humano.

## Resultado real

Com o **[Smart Treino](https://smart-treino.lovable.app)** dá pra montar protocolo em minutos, entregar no celular do aluno e acompanhar adesão em tempo real. Personais que adotaram a ferramenta relatam **3x mais alunos ativos** mantendo a mesma carga de trabalho semanal.`,
  },
  {
    slug: "automacao-ia-pequenas-empresas-2026",
    title: "Automação e IA para pequenas empresas: por onde começar em 2026",
    excerpt:
      "IA deixou de ser hype e virou vantagem competitiva. Veja 4 automações de baixo custo que qualquer negócio pode rodar hoje.",
    date: "2026-06-29",
    readingMinutes: 7,
    category: "Automação & IA",
    body: `## A IA não vai te substituir — mas vai substituir quem não usa

Em 2026, automação deixou de ser projeto de TI e virou tarefa de domingo à noite. Ferramentas como n8n, Make e a Lovable AI Gateway tornam possível montar fluxos que antes exigiam um desenvolvedor sênior.

## 4 automações de alto impacto e baixo custo

### 1. Atendimento inicial com IA
Um agente que responde dúvidas frequentes no WhatsApp 24h, qualifica o lead e só passa pro humano quando faz sentido. Reduz tempo de resposta de **horas para segundos**.

### 2. Resumo automático de reuniões
Reunião é gravada, transcrita e a IA devolve ata + tarefas atribuídas direto no e-mail dos participantes. Economiza ~3h/semana por gestor.

### 3. Geração de conteúdo recorrente
Briefing curto entra, posts da semana saem com legenda, hashtag e sugestão de capa. Não substitui estratégia — acelera execução.

### 4. Alerta de cliente em risco
A IA cruza dados de uso, frequência de compra e suporte. Quando algum sinal de churn aparece, o vendedor recebe alerta antes do cliente cancelar.

## Por onde começar

Não tente automatizar tudo. Escolha **um processo que dói toda semana** e ataca primeiro. Mede o ganho de tempo, mostra pro time, e só depois expande.

A RDG Digital monta esses fluxos sob medida — do diagnóstico ao deploy. [Fale com a gente](/contato) e a gente identifica em 15 minutos qual processo do seu negócio paga a automação no primeiro mês.`,
  },
  {
    slug: "site-profissional-vale-a-pena-2026",
    title: "Site profissional ainda vale a pena em 2026? (spoiler: mais do que nunca)",
    excerpt:
      "Com Instagram, WhatsApp e linktree, muita gente acha que site virou luxo. Veja por que um site próprio segue sendo o ativo digital mais lucrativo.",
    date: "2026-06-28",
    readingMinutes: 6,
    category: "Criação de Sites",
    body: `## Rede social você aluga. Site você é dono.

Instagram pode banir sua conta amanhã. WhatsApp pode mudar a política de API. O algoritmo do TikTok pode esconder seus vídeos por uma semana inteira. Site próprio é o **único canal digital que ninguém pode tirar de você**.

## O que um site bem feito entrega em 2026

- **Autoridade na primeira impressão** — 75% dos consumidores julgam a credibilidade de uma empresa pelo site.
- **Google orgânico** — leads que chegam buscando "[seu serviço] + sua cidade" custam zero.
- **Conversão controlada** — você define onde o botão fica, qual prova social aparece, qual formulário captura o lead.
- **Integração com tudo** — WhatsApp, agenda, CRM, pagamento, automação de IA — tudo conectado ao seu domínio.

## "Mas eu já tenho linktree"

Linktree é cartão de visita digital. Não é site. Não rankeia no Google, não permite captura de lead, não conta sua história, não vende. Para um negócio sério em 2026, linktree é **piso, não teto**.

## Os 4 erros que matam um site

1. **Lento** — cada segundo a mais de carregamento derruba 10% das conversões.
2. **Genérico** — template comprado, fonte padrão, foto de banco de imagem. Cliente percebe.
3. **Sem SEO técnico** — site bonito que o Google não acha é folder digital, não ferramenta de venda.
4. **Sem manutenção** — site lançado e abandonado morre em 6 meses.

## Como a RDG faz diferente

Sites desenvolvidos em **stack moderna** (React + edge functions), com Lighthouse 95+ em mobile, SEO técnico configurado desde o primeiro deploy, conteúdo otimizado pra Google e integração nativa com WhatsApp e IA.

Não vendemos "site institucional". Entregamos **máquina de aquisição** que paga o investimento em até 90 dias.

[Quero meu site](/contato) — orçamento sem compromisso, retorno em até 1 dia útil.`,
  },
  {
    slug: "checklist-seo-site-novo-rankear-google",
    title: "Checklist: 10 itens de SEO que todo site novo precisa para aparecer no Google",
    excerpt:
      "Lançou o site e o Google ignorou? Esses 10 fundamentos técnicos definem se você aparece na primeira página ou desaparece.",
    date: "2026-06-30",
    readingMinutes: 7,
    category: "Criação de Sites",
    body: `## Por que sites novos não aparecem no Google

Domínio novo passa por um período de "sandbox" — o Google leva de 2 semanas a 3 meses pra confiar no site. Mas a maioria dos sites **nunca** sai dessa fase porque falham nos fundamentos técnicos. Esse checklist resolve.

## O checklist de 10 itens

### 1. Title e meta description únicos em cada página
Não basta ter ", | Empresa X" colado em tudo. Cada página precisa de title <60 caracteres e description <160 caracteres falando do conteúdo daquela página específica.

### 2. Um único H1 por página
H1 é o título-rei. Use uma vez, com a palavra-chave principal. H2, H3 e abaixo organizam o resto.

### 3. URLs limpas e semânticas
\`/blog/como-escolher-barbeiro\` rankeia. \`/post?id=8472\` não.

### 4. Sitemap.xml acessível
O Google precisa de um mapa do seu site. Servir em \`/sitemap.xml\` e submeter no Search Console acelera a indexação.

### 5. Robots.txt configurado
Bloquear áreas internas (admin, /sistemas internos) e liberar o resto. Sem robots.txt o Google pode rastrear coisas que você não quer indexar.

### 6. Schema.org (JSON-LD)
Marca dados estruturados (Organization, Article, Product) que dão **rich snippets** — estrelinhas, FAQ, breadcrumb na busca.

### 7. Open Graph + Twitter Card
Quando alguém compartilha seu link no WhatsApp ou LinkedIn, o preview rico aumenta cliques em até 3x.

### 8. Performance mobile (Core Web Vitals)
LCP < 2.5s, CLS < 0.1, INP < 200ms. Site lento perde ranking — o Google prioriza experiência mobile desde 2021.

### 9. Conteúdo real, não placeholder
"Lorem ipsum" e "página em construção" matam SEO. Lance só páginas com texto verdadeiro.

### 10. Backlinks de qualidade
Indexação é a porta. Backlinks são o que fazem você **subir**. Comece com perfis verificados (Google Business, redes sociais, parcerias locais).

## O que a RDG entrega no padrão

Todo site que a gente publica sai com **os 10 itens acima configurados desde o dia 1**. Você não precisa entender de SEO técnico — só precisa de conteúdo bom.

> Site sem SEO técnico é loja em rua deserta. Pode ser linda, mas ninguém entra.

[Solicite um diagnóstico SEO gratuito do seu site atual](/contato) — devolvemos um relatório com o que está bloqueando seu ranking.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
