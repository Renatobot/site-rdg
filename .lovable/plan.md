## Objetivo

Criar uma página de SEO com centenas de termos de pesquisa reais que potenciais clientes usam no Google, e adicionar um link discreto no final da home apontando para ela. Isso amplia a superfície de indexação da RDG Digital sem poluir a landing page.

## O que será feito

### 1. Nova rota `/servicos` (hub de SEO)

Arquivo: `src/routes/servicos.tsx`

- Página institucional com layout consistente (Navbar + Footer).
- H1: "Serviços de tecnologia, sites e automação — RDG Digital".
- Introdução curta com posicionamento da empresa.
- Blocos organizados por categoria com listas de termos de busca reais, cada termo sendo um `<Link>` interno ou âncora para a seção relevante da home (`/#sites`, `/#automacao-ia`, etc.) ou para páginas de sistema:

  - **Criação de sites**: "criação de sites profissionais", "empresa de criação de sites no Rio de Janeiro", "site institucional para empresa", "landing page de alta conversão", "site com performance Lighthouse 100", "desenvolvimento web sob medida", "site responsivo mobile first", "site rápido para SEO", etc.
  - **Sistemas para barbearia**: "sistema para barbearia", "agendamento online barbearia", "software de gestão para barbearia", "app de agendamento barber", "sistema com comissão automática barbearia", etc. → linka Fila Zero Barber.
  - **Sistemas para salão de beleza / estética**: "sistema para salão de beleza", "agenda online salão", "software para esteticista", "app de agendamento beleza", etc. → linka Fila Zero Beauty.
  - **Sistemas para personal / academia**: "app para personal trainer", "plataforma de treino online", "sistema para academia", "coach de treino com IA", etc. → linka Smart Treino.
  - **Automação & IA**: "agente de IA para WhatsApp", "chatbot para atendimento", "automação com n8n", "automação Zapier para empresas", "bot de WhatsApp para vendas", "IA para atendimento ao cliente", etc.
  - **Gestão de Instagram**: "gestão de Instagram para empresas", "social media para pequenas empresas", "planejamento de conteúdo Instagram", "prospecção no Instagram", etc.
  - **Localização (opcional, ajuda geo-SEO)**: "agência de tecnologia Rio de Janeiro", "desenvolvedor de sites RJ", "empresa de automação Brasil", etc.

- `head()` com `websiteMeta`, canonical `/servicos`.
- JSON-LD `ItemList` listando os grupos de serviço para ajudar o Google a entender a página.
- CTA final para WhatsApp e link "Voltar para a home".

### 2. Link discreto no final da home

Arquivo: `src/routes/index.tsx` (ou dentro de `Footer.tsx` — decidir pela sobriedade)

- Pequeno link/botão logo antes do `<Footer />`, estilo texto sutil:
  - Texto: "Ver todos os serviços e áreas de atuação →"
  - Classe: `text-xs text-muted-foreground hover:text-primary`, centralizado, com padding vertical modesto.
- Alternativa: adicionar também no Footer uma coluna "Serviços" com o mesmo link, para reforço interno de linkagem sem ficar chamativo na home.

### 3. Sitemap e robots

Arquivo: `src/routes/sitemap[.]xml.ts`

- Adicionar entrada para `/servicos` com `changefreq: monthly`, `priority: 0.8`.
- `public/robots.txt` já permite `/`, então nada a mudar (a nova rota é indexável por padrão).

### 4. `llms.txt`

Arquivo: `public/llms.txt`

- Acrescentar link para `https://rdgdigital.com.br/servicos` na seção "Páginas".

## Observações técnicas

- Cada termo de busca vira um `<Link to="/" hash="sites">` (ou similar) ou link externo para o sistema correspondente — evita página "vazia de intenção" e distribui autoridade interna.
- Nada de keyword stuffing invisível: os termos ficam agrupados em listas visíveis, com títulos de seção reais (H2/H3) — o Google recompensa relevância legível, não listas escondidas.
- Sem mudanças de layout na home além do link discreto; identidade visual e animações permanecem intactas.

## Fora de escopo

- Criação de landing pages dedicadas por keyword (ex: `/criacao-de-sites-rj`) — pode virar próxima etapa se quiser escalar ainda mais SEO.
- Blog posts novos.
