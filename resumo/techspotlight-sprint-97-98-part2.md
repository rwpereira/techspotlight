# TechSpotlight — Resumo da Sprint (Sprint 97/98) — Parte 2

> Apresentação para outros times de devs e gestão — Agrotrace Web & Mobile

---

## 🔗 Integrações Externas

- **#11765 — Endpoint de integração Aprosoja**: nova rota de API pública para parceiros externos cadastrarem produtor e/ou propriedade diretamente no sistema, sem passar pela interface web.

---

## 📄 Relatórios e Exportações

Ciclo completo de melhorias e correções nos relatórios do sistema:

- **#11742 — Relatório Expocacer em modo horizontal**: exportação Word do relatório Expocacer agora aplica orientação paisagem (horizontal) em todo o documento.
- **#11807 — Fix: remover URL e QRCode de anexos nos relatórios Jasper**: tokens fixos de acesso estavam sendo expostos no PDF. Corrigido removendo a URL e o QRCode de anexos dos relatórios Jasper.
- **#11647 — Área APP e RL no relatório 3S**: dados de APP (Área de Preservação Permanente) e RL (Reserva Legal) do CAR-Sicar agora aparecem no relatório do plano de ação do programa 3S.
- **#11947 — Fix Title Case em relatório Jasper**: expressão `.split(" ")` gerava erro em nomes com múltiplos espaços seguidos. Corrigido com `.split("\\s+")`.
- **#11950 — Template HTML estático para Relatório de Atendimento Técnico**: novo arquivo `rat-report.template.html` com suporte a dark/light mode, 100% offline e marcadores dinâmicos (`{{DATA_INICIO}}`, `{{DATA_FIM}}`, `{{FOLDER}}`, `{{FILES}}`).
- **#11967 — Fix Relatório de Diagnóstico — Grupos MT e MT(COFCO)**: corrigida falha na geração do relatório + atualização dos textos de Apresentação e Conclusão.

---

## 📊 CMS — Dashboard de Métricas

Grande entrega de visibilidade operacional para o CMS:

- **#11825 — Dashboard de Métricas na Home do CMS**: 8 abas na tela inicial — Acessos, Formulários, Diagnóstico, Relatórios, Anexos, Logs de Sucesso e Logs de Erro — com lazy loading, skeleton loaders e mais de 50 gráficos e tabelas.
- **#11864 — Modal de detalhes de requisição nos Logs**: syntax highlight para payloads JSON, badges de método HTTP / status / plataforma e formatação "chave = valor" para query params.
- **#11910 — Gráfico de erros por hora como linha do tempo rolante de 24h**: bucket mais à direita sempre representa a hora atual, criando uma timeline contínua e auto-atualizada.

---

## 🐛 Bugs e Correções

- **#11885 — Fix: CAR duplicando em novo cadastro de propriedade**: issue de produção onde o CAR era duplicado ao registrar uma nova propriedade. Corrigido.
- **#11840 — Fix: Consolidação em Lote bloqueando indevidamente**: consolidação em lote bloqueava propriedades com atendimentos não-diagnóstico na safra de destino de forma incorreta. Lógica de validação corrigida.
- **#11707 — Fix: Home exibindo importância de ranking repetida**: tela inicial do perfil do produtor exibia o detalhe de importância do ranking múltiplas vezes. Corrigido.
- **#11872 — Fix: Tooltip do gráfico da Home**: tooltip agora exibe o número total de respostas ao invés de percentual ao passar o mouse sobre o gráfico.

---

**Totalizando:** 14 itens entregues (Done/Test QA) | Sprints 97 & 98 | Time Web + Backend Agrotrace
