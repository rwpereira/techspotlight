# Destaques Técnicos — Edition #05

> Período: 23/05 – 26/06/2026 · Mobile Team
> Modelagem dos spotlights (1 por dev), no formato Problema → Solução → Resultado.
> Base: `standup_periodo.txt` + `tasks.xlsx`.

---

## 🟪 Matheus — OpenSpec no Projeto Agrotrace

- **Card:** `#12566` — Configuração do OpenSpec no Agrotrace
- **Tipo:** feat · **Projeto:** Agrotrace
- **Tags:** OpenSpec · Spec-Driven Development · DX

**Problema**
O Agrotrace cresceu e passou a ser base de vários projetos terceiros (PEC, Agroplus, 3S…).
Mudanças de feature começavam direto no código, sem uma especificação compartilhada e
versionada — gerando ambiguidade entre o que foi pedido e o que foi entregue, retrabalho
e dificuldade de alinhar as mudanças entre API/Web e Mobile.

**Solução**
- Configuração do framework **OpenSpec** no Agrotrace para adotar um fluxo **Spec-Driven**.
- Especificações passam a viver versionadas no repositório, num ciclo
  *proposta → spec → implementação*.
- Padroniza como mudanças são descritas e revisadas antes de virar código.

**Resultado**
- Base estabelecida para guiar features pela especificação **antes** da implementação.
- Melhor alinhamento entre time e stakeholders e menos divergência de escopo.
- Fundação para escalar o desenvolvimento conforme o Agrotrace ganha mais derivados.

---

## 🟦 Carlos — Modelo LLM local para dar suporte ao OCR

- **Card:** `#12561` — Usar outra LLM para resolver NFs
  (contexto: `#12545` — nova API Key para o CheckWork extrair infos das NFs)
- **Tipo:** feat · **Projeto:** CheckWork
- **Tags:** LLM · Ollama · OCR · `gemma3:4b` · self-hosted / on-premise

**Problema**
A extração de dados de Notas Fiscais no CheckWork dependia de OCR via contas/serviços
externos de IA — sujeito a custo, *rate-limits* e dependência de terceiros, exigindo até
contas de fallback. Buscou-se uma solução de **OCR baseada em IA rodando on-premise**.

**Solução**
- POC inicial com **GLM-OCR** (~4s para resolver imagens).
- Benchmark entre modelos → escolha do **`gemma3:4b`**.
- Serviço **self-hosted via Ollama**, com API própria abstraindo a chamada e fazendo
  o *parse* da resposta no formato do input.
- **Rate-limit + fila** para suportar volumes maiores de requisições.
- Integração no app, validação no ambiente DEV e notificações via **OneSignal**.

**Resultado**
- LLM self-hosted resolvendo NFs em ~4s/imagem, **reduzindo a dependência de contas
  externas** de IA.
- Serviço exposto e validado, com benchmark, em uso no CheckWork.

---

## 🟩 Elias — Feature Respostas Repetíveis (blocos repetíveis no Form Dinâmico)

- **Card:** `#12624` — Suporte a blocos repetíveis no formulário dinâmico
- **Tipo:** feat · **Projeto:** Agrotrace
- **Tags:** Formulário Dinâmico · Blocos Repetíveis · Sincronização

**Problema**
O formulário dinâmico não permitia **repetir blocos de perguntas** — quando o mesmo
conjunto de perguntas precisava ser respondido N vezes (vários itens/registros), não
havia suporte nativo, forçando duplicação manual ou estruturas rígidas.

**Solução**
- Levantamento de requisitos e regras de negócio do recurso.
- Novas **entidades + migrações** para as tabelas dos blocos.
- Novas **rotas no módulo de sincronização** de dados.
- Componente para exibir as perguntas do bloco e **CRUD completo** (salvar, editar,
  excluir) das respostas, com todas as regras de negócio.
- **Sincronização bidirecional** (baixar e enviar) dos dados dos blocos.

**Resultado**
- Suporte completo a blocos/respostas repetíveis no formulário dinâmico.
- CRUD e sync finalizados e **testados** (baixar e enviar).

---

### Pendências
- [ ] Screenshots em `edition-05/assets/` (padrão `{CARD-ID}.png`, `{CARD-ID}-2.png`…)
      — sugeridos: `12566`, `12561`, `12624`.
