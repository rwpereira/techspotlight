# Destaques Técnicos — Edition #06

> Período: 29/06 – 17/07/2026 · Mobile Team
> Modelagem dos spotlights (1 por dev), no formato Problema → Solução → Resultado.
> Base: `standup_periodo.txt` + `Tasks.xlsx`.
> **Nota:** Elias não estará presente na apresentação — seu spotlight será apresentado pelo Carlos.

---

## 🟦 Carlos — Tela de Análise de Custos dos Projetos

- **Card:** `#12792` — Adicionar tela para análise de custos dos projetos
- **Tipo:** feat · **Projeto:** CheckWork
- **Tags:** Analytics · KPIs · RBAC · Data Viz

**Problema**
A gestão não tinha uma visão consolidada dos custos dos projetos no CheckWork — a
análise era manual e a antiga ManagementPage não cobria as necessidades de comparação
entre consultores, projetos e períodos.

**Solução**
- Especificação e design da feature junto com o produto: **13 requisitos**, edge cases
  e metodologia de **score consultor×projeto×mês com pesos configuráveis**.
- Backend: novo **módulo analytics com 12 endpoints** (KPIs, regiões, categorias,
  ranking, cartas de performance "Super Trunfo"), **RBAC por perfil**, semi-anonimato
  e **35 testes novos** (102 verdes no total).
- Front: nova tela **Análise de Custos com 5 abas**, filtro global e perfil do
  consultor, absorvendo e aposentando a ManagementPage (redirect).

**Resultado**
- Visão analítica completa de custos por projeto/consultor com controle de acesso
  por perfil.
- ManagementPage aposentada; pendente apenas UAT e remoção dos endpoints legados.

---

## 🟪 Matheus — Relatórios do CheckMilk recriados no Jasper

- **Card:** `#12645` — Trabalhar nos relatórios vindos do CheckMilk
- **Tipo:** feat · **Projeto:** Agrotrace
- **Tags:** Jasper Reports · Migração CheckMilk · Qualidade do Leite

**Problema**
Os relatórios do CheckMilk existiam **somente no código** — difíceis de manter e
evoluir, e incompatíveis com a migração para o Agrotrace. Era preciso recriá-los em
uma ferramenta de relatórios adequada.

**Solução**
Recriação dos relatórios **do zero no Jasper**, ao longo de todo o período:
- Extrato de Diagnósticos PEC e Acompanhamento de Diagnósticos PEC
- `#12706` — Relatório de Qualidade
- `#12708` — R. Cronograma de Atividades
- `#12720` — R. PQFL
- `#12824` — R. Inconformidades de Qualidade, com busca via componente compartilhado
  **ExpandableSearchInput** (expande sob demanda, insensível a acentos) + i18n nos 5 idiomas
- `#12760` — Sync de dados do Qualidade do Leite para alimentar os relatórios

**Resultado**
- Suíte de relatórios do CheckMilk disponível no Agrotrace via Jasper — card `#12645`
  concluído em 16/07.
- Relatórios agora manuteníveis fora do código, com busca e i18n.

---

## 🟩 Elias — Módulo PEC na visão do Produtor *(apresentado por Matheus)*

- **Card:** `#12610` — Adicionar módulo PEC na visão do produtor
- **Tipo:** feat · **Projeto:** Agrotrace
- **Tags:** PEC · Visão do Produtor · API + APP

**Problema**
O módulo PEC (pecuária) era acessível apenas na visão do técnico — o produtor não
conseguia visualizar seus animais nem registrar eventos como parto e pesagem.

**Solução**
Feature completa API + APP:
- `#12721` — Nova rota para listar animais para a visão do produtor (API)
- `#12781` — Nova rota para criação de partos (API)
- `#12616` — Tela de listagem de animais (APP)
- `#12611` — Tela de parto (APP)
- `#12612` — Funcionalidade de pesagem (em andamento)

**Resultado**
- Produtor passa a ter acesso ao módulo PEC: visualiza seus animais e registra partos.
- Pesagem em desenvolvimento como próximo incremento.

---

## Lightning / Wrap-up — outros wins do período

- **OpenSpec em uso real:** `#12768` (Filtro de perguntas — proposal, design e specs,
  implementado em 3 telas) e `#12812` (campo gênero na entidade Pessoa) especificados
  via OpenSpec; specs promovidas para a base do projeto.
- `#12822` — Impressão de Termo: refinamento concluído — cadastro dinâmico de
  documentos por programa, variáveis via SQL local; cards Web criados (`#12845`, `#12846`).
- `#12710` — INPI: levantamento de licenças, autores, módulos CORE e hash do Agrotrace.
- `#12709` — Fix: app fechando sozinho em devices 32 bits (downgrade OneSignal).
- `#12749` — Fix: RA automático não gerado (handle de exceptions + notificação).
- `#12736` — Esqueci minha senha no APP CheckWork.

---

## Agenda (30min — enxuta)

| Horário | Quem | Bloco |
|---|---|---|
| 00:00 – 05:00 · 5min | Carlos | Abertura & Métricas do período |
| 05:00 – 12:00 · 7min | Matheus | Spotlight 1 — Relatórios do CheckMilk no Jasper |
| 12:00 – 19:00 · 7min | Carlos | Spotlight 2 — Análise de Custos dos Projetos |
| 19:00 – 26:00 · 7min | Matheus (pelo Elias) | Spotlight 3 — Módulo PEC na visão do Produtor |
| 26:00 – 30:00 · 4min | Carlos | Wrap-up — Wins & Roadmap |

## Tecnologias do período

React Native · Jasper Reports · OpenSpec · SQL & Migrações · i18n (5 idiomas) · OneSignal

### Pendências
- [ ] Screenshots em `assets/` (padrão `{CARD-ID}.png`, `{CARD-ID}-2.png`…)
      — sugeridos: `12792`, `12645`, `12610`.
