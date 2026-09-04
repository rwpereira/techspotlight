# Tech Spotlight #08 — Roteiro de condução

Período: **17/08/2026–02/09/2026**  
Apresentação: **04/09/2026**  
Time: Ronaldo, Bruno e Thielson

## Tese

**Contexto que vira decisão.** O ciclo levou dados de diagnóstico, solo, talhão,
autenticação e atendimento para painéis, contratos e relatórios que explicam o
próximo passo.

## Timebox — 30 minutos

| Tempo | Slide | Dono |
|---|---|---|
| 0:00–3:00 | README + runtime + cards-balance | Ronaldo |
| 3:00–6:00 | Painel de Abates & Fornecedores | Ronaldo |
| 6:00–10:00 | Solo & Nutrição | Ronaldo |
| 10:00–12:00 | Painel de Diagnósticos JBS | Ronaldo |
| 12:00–16:00 | Pergunta Talhão | Bruno |
| 16:00–19:00 | Auditoria de autenticação | Bruno |
| 19:00–20:00 | Lightning: escopos reutilizáveis | Bruno |
| 20:00–22:00 | Lightning: readme-first e funcionalidades core | Time Web |
| 22:00–24:00 | Características dinâmicas do PEC | Thielson |
| 24:00–26:00 | Internacionalização Agrotrace | Thielson |
| 26:00–28:00 | Overview: relatórios, integrações e contexto para IA | Thielson |
| 28:00–30:00 | Engineering Wins + próximos passos + perguntas | Ronaldo/time |

## Abertura

Fala: “Acompanhamos **34 entregas** no período: 30 vieram do quadro do time Web no
Azure e 4 foram citadas nos standups. **30 já estão concluídas ou em teste de
qualidade** e **4 seguem em andamento**. Por tipo, são **25 melhorias, 4 bugs e 5
incidentes**.” Se perguntarem o critério: concluído é `Done` ou `Test QA`; os quatro
incluídos manualmente são #12735, #13223, #13240 e #13263.

No slide `cards-balance.md`, mostrar os filtros por estado, tipo e responsável.
O responsável é a atribuição atual do Azure; colaborações dos standups entram na
narrativa, não na contagem.

### Reconciliação importante

- #13223 foi mantido por evidência de standup; a alteração do Azure ocorreu em
  03/09, depois do fim do período, e está em `Test QA`.
- #13240 e #13263 foram mantidos por evidência de standup; estão na área
  `AGROTRACE`, não em `AGROTRACE\\Web`.
- #12735 foi citado no standup como em andamento, embora a alteração seja anterior
  ao intervalo consultado; continua `New`.
- #13154 (painel JBS), #13198 (importação de abates ATER/Friboi) e #13231
  (Dashboard de Abates ATER) receberam baixa no Azure em 03/09, depois do período
  consultado; já entram como concluídos no balanço.
- #13311 (BlobNotFound - 3S) foi reatribuído de Ronaldo para Thielson em 03/09;
  continua `New`.
- #13216 aparece como `Done` no Azure, mas o standup diz que os campos de PEC-lote
  foram desfeitos após revisão de negócio. Apresentar como rework, não como entrega
  final.

## Regra dos spotlights do Ronaldo

Por produto: um problema, um caminho de até três telas, um número que fica na cabeça
e o estado honesto. Não percorrer menus. Telas nos slides; demo ao vivo só se
pedirem no fecho.

## Spotlight — Painel de Abates & Fornecedores (Ronaldo, 3 min)

**Problema:** a planilha mensal do frigorífico dizia quem entregou e quanto. Não
respondia quem precisa de visita, de quem o volume depende e quem ainda não está no
programa.

**O que mostrar (3 telas):**

1. Cabeçalho de KPIs para situar: notas, cabeças, arrobas, produtores.
2. Meta de atendimentos por contrato: 915 contratos vigentes, 34% no ritmo da meta JBS
   de 4 visitas/ano, Top 15 fora da meta com barra de visitas, critério ano civil ou
   ciclo contratual. É onde mora a decisão de campo.
3. Concentração de fornecedores: Pareto e o card "45,1% do volume nos 10% maiores"
   (74 produtores de 736). Número para o gestor repetir.

Em uma linha: 55 contratos sem vínculo com propriedade e 15 produtores sem cadastro
viram listas de ação (PDF e revinculação). Técnico vinculado e mapa acompanham a meta.

**Pular:** ritmo semanal, distribuição de peso, carteira por safra, recorrência.

**Resultado honesto:** #13198 e #13231 `Done` em 03/09. Retorno prévio do Hilário
(via Sartori): aprovou o painel e vai colocar 3 coordenadores da ATER para acompanhar
o projeto por ele. Encerrar dizendo que este painel é a base do painel de ROI.

## Spotlight — Solo & Nutrição (Ronaldo, 4 min)

**Problema:** o laudo do laboratório precisava virar recomendação explicável, com
rastreabilidade e uma saída que o produtor pudesse abrir sem o técnico ao lado.

**Contar como um caminho, não como quatro menus:**

1. O PDF do laudo entra, a IA preenche os campos e o técnico só confere.
2. Interpretação em semáforo por nutriente; SB, CTC, V% e m% recalculados.
3. Recomendação de calagem (calcítico ou dolomítico), gesso complementar e adubação
   com memória de cálculo visível.
4. Registrar aplicação no campo; histórico entre coletas.
5. Sai PDF com QR e link público mobile-first para o produtor.

**Telas:** Interpretação, Recomendação com a memória de cálculo, link público no
celular.

Uma linha cada: Formulação NPK é uma calculadora de adubos simples para fechar a
fórmula. Orçamentos de análises importa a nota do laboratório por IA, o usuário
confirma, e essas notas alimentam o painel de ROI que o Sartori anunciou.

**Pular:** CRUD de laboratórios, abas do formulário, Histórico (uma coleta só).

**Resultado honesto:** #13242 e #13293 em `Test QA`. Não há métrica de acurácia da
extração nem publicação final registrada.

## Spotlight — Painel de Diagnósticos JBS (Ronaldo, 2 min)

**Problema:** dados de atendimento, questionário, tema, pergunta, anexos e pontuação
estavam dispersos; o negócio precisava de uma leitura comparável e priorizada.

**Uma tela:** Cobertura (369 atendimentos, 73,8% de desempenho médio), Maturidade por
eixo (Reprodução é o mais baixo, 46,7%) e Fila de priorização com score explicável de
0 a 100 e pesos declarados; "Não se aplica" fora da criticidade.

**Fala:** o card fechou, o Hilário vai pedir ajustes, e a arquitetura foi feita para
isso: procedure única, cache, relatório assíncrono e score com pesos declarados.

**Pular:** evolução entre safras, panorama territorial, carteiras técnicas, busca
qualitativa, qualidade da coleta. Voltam na Edition #09 com o retorno do Hilário.

**Evidência:** #13154, `Done` no Azure em 03/09 (após o período consultado).

## Spotlight — Pergunta Talhão (Bruno, 4 min)

**Problema:** o formulário dinâmico precisava vincular ou cadastrar talhões sem
consultas repetidas, perda de `propriedadeId` ou croqui fora de contexto.

**Decisão/implementação:** procedure de carregamento, criação rápida, persistência do
croqui, componente read-only de validação, formatação de área com `DecimalPipe`,
layout de abas sem overflow e limpeza do acesso ao formulário.

**Resultado:** #13223 está em `Test QA`. O card foi buscado diretamente porque mudou
depois da janela de `ChangedDate`; a fonte está marcada no ledger.

## Spotlight — Auditoria de autenticação (Bruno, 3 min)

**Problema:** login, MFA e contexto de sessão foram reforçados, mas ainda faltava uma
trilha consultável de quem fez o quê e como o request chegou ao sistema.

**Decisão/implementação:** repositório de auditoria Better Auth, sanitização, limpeza
por cron, enriquecimento com identidade legada, IP, User Agent, Request ID e contexto
de plataforma, além de painel CMS e templates Angular atualizados.

**Resultado honesto:** #12735 continua `New` e em andamento. O foco é a decisão de
observabilidade, não uma entrega encerrada.

## Lightning — Escopos reutilizáveis (Bruno, 1 min)

Uma regra de certificadora não deve ser copiada em cada métrica e exportação. O
trabalho criou catálogo e pivot por migration, predicados normalizados, endpoints/DTOs,
contratos no `web-common`, formulário master-detail no CMS e fixtures para validação.

Duas correções extras também foram feitas:

1. Procedure `getProjectMetrics`: passou a contar produtores e propriedades únicos,
   ativos e válidos; somar áreas uma vez; usar certificadoras válidas; relacionar
   estados a atendimentos e vínculos válidos; contabilizar atendimentos ativos; e tratar
   áreas vazias ou erros.
2. Relatório **TOTAIS DO SISTEMA - ATENDIMENTOS**: mantém o detalhe por certificadora,
   mas calcula um total geral independente, sem somar vínculos repetidos ou duplicar
   produtores, propriedades, áreas e estados; os critérios ficam alinhados à métrica
   global.

Fala: “Se é regra de negócio, ganha nome, contrato e teste. O mesmo escopo pode servir
à métrica, à exportação e à tela de configuração.” O tema vem do standup e não possui
um ID explícito no recorte; não somar um card novo.

## Lightning — Contexto antes do código (Time Web, 2 min)

O `agrotrace-v3` passou a ter a skill `readme-first`, READMEs locais nas pastas da API,
guias em `apps/api/docs/funcionalidades-core` e `AGENTS.md` atualizados. A regra de
leitura é simples: começar pelo README mais próximo, subir até três níveis se preciso,
respeitar o AGENTS e abrir apenas a superfície de código necessária.

O diretório de funcionalidades core não é um catálogo de CRUD. Seus **26 guias**
descrevem o caminho **end-to-end** — entrada HTTP ou evento, serviços, persistência,
procedures, efeitos assíncronos e consumidores — com diagramas de fluxo, sequência e
estado, além de referências textuais para agentes que não renderizam Mermaid.

**Propósito:** melhorar o entendimento de agentes de IA e devs, reduzir exploração cega
e retrabalho e preservar invariantes e fronteiras do domínio antes de uma alteração.

Fala: “A documentação virou contexto operacional: primeiro o agente entende como a
funcionalidade atravessa o sistema; depois escolhe o menor conjunto de arquivos para
trabalhar. Isso torna a colaboração mais previsível para a IA e para quem mantém o
código.”

## Spotlight — Características dinâmicas do PEC (Thielson, 2 min)

**Problema:** características aplicáveis a animais e lotes variam por atividade, tipo
de criação, categoria e certificadora. Sem esse contexto, o cadastro oferece opções
que não representam o cenário produtivo.

**Decisão/implementação:** as regras passaram a considerar cada recorte antes da
seleção, preservando Animal e Lote como entidades distintas. Sem atividade vinculada,
a característica permanece global.

**Resultado:** #13254 está em `Test QA`; a configuração passa a conduzir uma seleção
coerente com o contexto de cada cadastro.

## Spotlight — Internacionalização Agrotrace (Thielson, 2 min)

**Problema:** textos estavam distribuídos por componentes, páginas, formulários e
seletores, deixando a experiência entre idiomas inconsistente e difícil de evoluir.

**Decisão/implementação:** foram atualizados os textos de componentes, páginas,
formulários e seletores de 31 entidades; conflitos e traduções adicionais também foram
tratados nos dynamic filters.

**Resultado:** a cobertura principal de internacionalização foi concluída. Apresentar
eventuais lacunas como ajustes pontuais, não como uma cobertura inexistente.

## Overview — Outros destaques (Thielson, 2 min)

Usar a grade, no estilo da edition-04, para citar sem aprofundar: relatórios que
preservam blocos repetíveis e imagens (#13260, #13280, `Done`), correção do filtro de
contas (#13281, `Test QA`), identificadores GEDAVE na exportação Citros (#13230,
`Done`) e protocolo nas telas de Atendimento (#13234, `Done`).

Fechar com o contexto para análise IA: documentação funcional, dossiê explicável e
execução observável seguem em andamento; não apresentar como entrega concluída.

## Engineering Wins (Ronaldo, ~1 min)

O que este slide é: o "e daí?" da apresentação. Depois de nove histórias, a plateia
precisa sair com três frases. Cada card é uma frase, o parágrafo é a prova e os
números são onde conferir. Não reler os spotlights; só nomear o padrão que ficou.

Fala sugerida: "Se vocês lembrarem de três coisas desta edição, que sejam estas."

1. **O dado passou a apontar ação — Ronaldo.** "Planilha de abates, laudo de solo e
   diagnóstico JBS deixaram de ser tabela e viraram painel que diz quem visitar, o que
   aplicar e onde agir primeiro." (#13198, #13231, #13242, #13293, #13154)
2. **Cadastra uma vez, usa em todo lugar — Bruno + Thielson.** "Talhão, escopo de
   certificadora, protocolo e identificador GEDAVE viraram uma definição só, que tela,
   exportação e relatório consomem igual. Menos cópia de regra, menos divergência."
   (#13223, #13230, #13234, #13254)
3. **Menos erro silencioso — time Web.** "Login voltou a ser registrado, anexo voltou
   a abrir, relatório parou de apagar bloco vazio e o filtro do CMS parou de esconder
   conta. Nenhum desses erros avisava; agora não acontecem." (#13142, #13209, #13260,
   #13280, #13281)

Card **Colaboração**: reconhecer Brenda, Carlos, Gustavo, Iohan, Matheus, Ricardo,
Sartori e Thayse em testes, regras de negócio, PRs, validações e deploys. Uma frase.

Card **Leitura honesta**: só apontar. "30 concluídos, 4 em aberto, e os 4 estão
listados." Não justificar cada um; isso já foi feito no balanço.

## Próximos passos

Apresentar como direção, não promessa:

1. novos painéis ATER — @ronaldo, direção sem card ainda: painel de ROI (reunião com
   o Hilário para levantar dados e alinhar expectativas) e, após o módulo de Solo &
   Pastagens, painel com indicadores comparativos já pedidos por ele; também alinhar
   o painel de abates com os 3 coordenadores da ATER que vão passar a usá-lo;
2. concluir filtro de Viveiros no dashboard Citros — @ronaldo / #13146;
3. fechar auditoria de autenticação e pendências do Talhão — @bruno / #12735,
   #13223;
4. transformar contexto em produto: análise IA, documentação e escopos reutilizáveis
   — @thielson + @bruno;
5. melhorar a skill `readme-first`, detalhando os READMEs da pasta
   `funcionalidades-core` e adicionando arquivos `README.md` aos apps frontend do
   Agrotrace — @bruno;
6. melhorar a funcionalidade de escopos reutilizáveis, permitindo alternar se a
   operação do escopo será de inclusão ou exclusão de certificadoras — @bruno;
7. refatorar a UI do formulário de cadastro da propriedade, trocando a aba
   **Atividades** por **Solo** e reorganizando as tabs internas — @bruno.

Contexto do item 1: retorno prévio do Hilário, repassado pelo Sartori no Discord em
03/09. Ele aprovou o painel de abates e vai colocar 3 coordenadores da ATER para
acompanhar o projeto por ele. Vale citar na fala como validação do #13231 e #13198.

Os quatro cards abertos no fechamento são #12735, #12983, #13146 e #13311 (este
último agora com Thielson).

Se o tempo apertar, cortar detalhes de implementação. Preservar sempre problema,
decisão, resultado e estado honesto de cada história.
