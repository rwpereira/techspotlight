# TechSpotlight — Resumo da Sprint (Sprint 97/98)

> Apresentação para outros times de devs e gestão — Agrotrace Web & Mobile

---

## 📊 Painel de Gestão (Dashboard do Gestor)

Evoluímos os endpoints do Painel de Gestão para suportar o app Mobile:

- **#11748 — Novo endpoint de dados gerais para o Mobile**: rota dedicada retornando produtores atendidos, atendimentos executados, diagnósticos concluídos e estados atendidos — com filtros por etapa, período, tipo de atendimento e técnico.
- **#11786 — Melhorias na rota do Dashboard do Gestor**: filtro para retornar apenas etapas vigentes (com base na data atual) e retorno do período (data inicial/final) de cada etapa.
- **#11809 — Nome da certificadora no resumo do gestor**: endpoint de resumo agora retorna o nome da certificadora, utilizando o `certificadoraId` como parâmetro.

---

## 🔐 Autenticação e Sessão

Três melhorias que resolvem problemas reais de UX e segurança:

- **#11781 — Reload automático após deploy**: elimina erros de assets JavaScript após novo deploy — sistema força reload automático da página.
- **#11794 — Redirecionamento para URL original após login**: usuário que acessa `/pagina-x` sem autenticação, após fazer login, é redirecionado de volta para `/pagina-x` (e não para a home). Implementado via `returnUrl` no `AuthGuard` do Angular.
- **#11887 — Isolamento de sessão entre Agrotrace e CMS**: Agrotrace e CMS compartilhavam o mesmo cookie de autenticação. Refactor completo para cookies independentes (`agrotrace` e `cms`) — logout em um sistema não derruba a sessão do outro. Mobile continua funcionando via `Authorization: Bearer`.

---

## 📋 Formulários Dinâmicos

Nova funcionalidade e correções importantes:

- **#11796 — Novo tipo de pergunta: Anexo**: produtores podem fazer upload de documentos (PDF, DOCX, XLS, etc.) como resposta. CMS permite configurar quantidade mínima/máxima e tamanho máximo por arquivo (default: 10 MB). Botão trava ao atingir o limite.
- **#11904 — Fix: exclusão de imagem única**: lógica bloqueava remoção quando havia apenas 1 imagem. Corrigido.
- **#11906 — Fix: botão de fechar no lightbox de imagem**: modal de visualização não tinha botão de fechar — usuários precisavam pressionar `Esc`. Adicionado botão `×` acessível inclusive no mobile.
- **#11746 — Laudos Biodiesel — opção "Imprimir"**: campos podem ser marcados para controlar o que aparece na impressão do laudo.
- **#11734 — Laudos Biodiesel — opção "Possui Validação"**: campos recebem expressão de validação e mensagem de erro customizada.

---

## 🗺️ Perfil do Produtor / Agrotrace

- **#11763 — Suporte ao modo Dark na Home**: quadros da Home que não estavam adaptados ao tema escuro. Corrigido.
- **#11909 — Gráficos de conformidade → Carrossel navegável**: gráficos extrapolavam a largura da tela e o último ficava cortado. Migrado para `p-carousel` do PrimeNG responsivo (4 itens desktop, 2 tablet, 1 mobile).
- **#11932 — Responsividade do Perfil do Produtor**: ajustes de responsividade nos gráficos dos temas no perfil público.

---

## 📤 CMS — Exportações

- **#11927 — Melhorias no fluxo de Exportações**: quatro ajustes no cadastro:
  1. Campo "Título do Relatório" deixou de ser obrigatório
  2. Sincronização de parâmetros não preenche "Label Alternativa" automaticamente
  3. Cor default de campos sincronizados agora é branca (Excel gerado não fica com texto preto)
  4. Ao criar nova exportação, sincronização de parâmetros e campos é executada automaticamente

---

## ⚙️ Infraestrutura e Confiabilidade

- **#11882 — Correção do link SAS de anexos**: UUIDs com hífens geravam tokens SAS inválidos no Azure Blob Storage. Corrigido com sanitização do UUID antes da montagem do path.
- **#11933 — Migração de upload: memoryStorage → diskStorage**: após crash causado por upload de 150 MB (arquivo inteiro na RAM), endpoints migrados para `diskStorage` com `tmpdir()`. Arquivos temporários deletados via `try/finally`. Resolve risco de OOM no servidor NestJS.

---

## 🌐 Em Andamento

- **#11494 — Landing Pages Dinâmicas por Projeto + Blog**: permite criar páginas públicas configuráveis para cada programa/projeto, com identidade visual própria, seções editáveis, SEO dinâmico e blog integrado.

---