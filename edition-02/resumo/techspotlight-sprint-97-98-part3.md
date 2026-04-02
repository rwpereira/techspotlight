# TechSpotlight — Resumo da Sprint (Sprint 97/98) — Parte 3

> Apresentação para outros times de devs e gestão — Agrotrace Web

---

## 🐄 Programa Minerva — Dashboard de Volume

Ciclo completo de melhorias no módulo de gestão de volume:

- **#11741 — Desativar Volume por Origem (Volume Global)**: botão para desativar registros de volume por país já cadastrado — antes só havia edição/cadastro.
- **#11645 — Unidade no volume por produtor**: relacionamento de unidade (grupo) com o lançamento de volume por produtor.
- **#11542 — Gráfico de % mapeado por unidade**: novo dashboard que exibe o percentual mapeado por unidade, no mesmo formato do gráfico de % por país.
- **#11792 — Correção dos gráficos Minerva**: gráfico de % de volume por origem passava de 100% ao associar múltiplos ciclos. Corrigido com suporte a metas em numeral ou percentual por origem/unidade.

---

## 🔐 Segurança de Tokens e Anexos

Iniciativa para eliminar tokens fixos expostos em URLs públicas:

- **#11773 — Anexo público**: nova coluna `is_public` (boolean) na tabela de anexos. Arquivos marcados como públicos são armazenados no container `utils` do Azure, sem necessidade de token.
- **#11772 — Refatoração da procedure `getUrlAnexo`**: token fixo removido da procedure. Criada tabela dedicada para armazenar o token, com CRON na API para renovação automática a cada 48h.
- **#11769 — Relatório de Atendimento Técnico — segurança de URL**: URLs de download de anexos no relatório agora usam tokens de curta duração (30 minutos), gerados dinamicamente pela API — token longo da procedure não é mais exposto.

---

## 📋 CMS — Exportações e Relatórios

Série de melhorias no módulo de exportações do CMS:

- **#11780 — Lista de exceções nas Exportações**: relatório pode ser configurado para todas as certificadoras, com lista de exceções para indicar quem não deve ver — facilita onboarding de novos projetos.
- **#11795 — Filtro em tempo real na listagem de relatórios**: campo de busca no painel de Relatórios filtra em tempo real, case-insensitive e sem considerar acentuação. Accordeons sem resultado são ocultados automaticamente.
- **#11798 — Fix: layout do modal Dados da Exportação**: scroll estava ocorrendo no container inteiro do modal. Corrigido para scroll apenas no conteúdo da aba ativa, mantendo título, abas e botão Salvar sempre visíveis.
- **#11857 — Aba Certificadoras com indicação de modo de exibição**: aba agora exibe badge visual diferenciado — "Modo: Exclusão" (vermelho) quando o relatório é para todas exceto as listadas, ou "Modo: Liberação" (verde) quando apenas as listadas têm acesso. Muda em tempo real ao alternar o checkbox.
- **#11928 — Botão limpar busca + refresh de dados em Relatórios**: botão X para limpar o campo de busca com um clique; botão de refresh exclusivo para usuários Master, permitindo recarregar a lista sem navegar para outra página. (Test QA)

---

## 📊 Formulários Dinâmicos

Cluster de melhorias e correções no módulo de formulários e dashboards:

- **#11839 — Fix: botão Salvar desabilitado em perguntas do tipo Tabela**: campos ocultos do `FormGroup` permaneciam com `Validators.required`, bloqueando `form.valid`. Corrigido com desativação dinâmica dos controles não aplicáveis ao tipo Tabela.
- **#11838 — Fix: modal aninhada no fluxo de Editar Gráfico**: modal "Editar Gráfico" estava sendo renderizada dentro de outra modal, criando overlay duplo. Movida para o nível correto com `appendTo="body"`.
- **#11837 — Fix: layout do Dashboard não persistia no projeto Carbono IDH 2026**: UPDATE sem registro correspondente executava sem erro mas sem persistência. Corrigido com upsert adequado para projetos novos.
- **#11836 — Labels configuráveis nos botões da aba Comparativos**: textos dos 4 botões da aba Comparativos na Home (Geral Boas Práticas, Objetivos, Critérios, Pilares) agora vêm de Registros do CMS — cada cliente pode personalizar via interface. (Test QA)
- **#11879 — Ocultar pergunta pai no dashboard de formulário**: possível ocultar a pergunta pai do dashboard-formulário e ainda exibir as perguntas filhas e seus gráficos. (Test QA)
- **#11870 — Título configurável no dashboard de formulário**: suporte a título/agrupador nos cards do dashboard de formulários dinâmicos (Carbono IDH). (Test QA)

---

## 📥 Importação de Protocolos via Planilha

Ciclo completo de evoluções no fluxo de importação de protocolos:

- **#11835 — Nova aba CADASTRO na planilha de exportação de Protocolos**: planilha agora inclui aba `CADASTRO` tanto no modelo em branco quanto na exportação com dados.
- **#11856 — Normalização e deduplicação na importação**: função `normalizeString` para busca por questionário/tema/subtema/pergunta sem erros de case ou acentuação. Perguntas ausentes na planilha são desativadas automaticamente (soft delete) no protocolo existente.
- **#11900 — Importar apelidos de itens de lista**: seção "Apelidos" da planilha agora é lida durante a importação e persistida como "Label Alternativa" em cada item de lista da pergunta correspondente.
- **#11841 — Exportação direto na tela de Importar Protocolo**: botões "Baixar Modelo" e "Baixar Dados" disponíveis na tela de Configurações → Importações, eliminando a necessidade de navegar até Cadastros → Protocolos para exportar. (Test QA)

---

## 🔧 Melhorias Diversas

- **#11753 — Token de Programas com prazo de expiração (Aprosoja)**: campo de dias para expiração adicionado na geração de tokens de programas no CMS.
- **#11764 — Gestão Reprodutiva — Scroll nas abas**: scroll confinado dentro de cada aba da tela "Reprodução Bovina", evitando que o nome das abas suma ao rolar.
- **#11793 — Reprodução Animal — Interface mais limpa**: colunas produtor e propriedade removidas da lista de Animais, já que todos os registros são do mesmo produtor selecionado.
- **#11791 — Fix: Permissões ACL em grupos (Agro Plus)**: ACL corrigido — usuários com acesso limitado agora visualizam apenas os grupos aos quais têm permissão, não todos os grupos do sistema.
- **#11951 — Incluir index.html navegador no ZIP do Relatório de Atendimento Técnico**: checkbox opt-in na exportação gera um `index.html` completo (dark/light mode, galeria de fotos, lista de arquivos) dentro do ZIP — relatório pode ser navegado 100% offline. (Test QA)

---

**Totalizando:** 21 itens entregues (Done) + 6 em Test QA = 27 itens | Sprints 97 & 98 | Time Web Agrotrace
