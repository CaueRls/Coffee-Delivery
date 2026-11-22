# TASKS — Coffee Delivery

> Backlog de implementação com ordem sugerida, critérios de aceite e dependências. Atualize o status somente após executar e verificar a tarefa.

## Legenda

- `[ ]` Pendente
- `[-]` Em andamento
- `[x]` Concluída e verificada
- `[!]` Bloqueada por informação ou acesso

## Fase 0 — Alinhamento e inspeção

- [ ] **T-001 — Inspecionar o repositório**
  - Conferir arquivos existentes, `package.json`, lockfile, scripts, TypeScript, Vite e estado do Git.
  - Não sobrescrever implementação existente.
  - Aceite: relatório curto da estrutura atual e plano de adaptação.

- [ ] **T-002 — Conferir instruções do Notion**
  - Ler a página oficial e páginas/subpáginas vinculadas relevantes.
  - Extrair regras de negócio, conteúdo, requisitos complementares e critérios de avaliação.
  - Aceite: PRD e TECH_SPEC atualizados com as informações confirmadas.

- [ ] **T-003 — Inspecionar o Figma**
  - Conferir frames, páginas, variações desktop/mobile, componentes, assets e tokens.
  - Registrar cores, fontes, espaçamentos, imagens e comportamento visual.
  - Aceite: checklist visual disponível para implementação.
  - Bloqueio: requer acesso autorizado ao arquivo.

- [ ] **T-004 — Resolver pendências de produto**
  - Confirmar catálogo, preços, taxa de entrega, campos obrigatórios, formas de pagamento e comportamento do tema.
  - Aceite: nenhuma regra crítica de checkout permanece inventada ou ambígua.

## Fase 1 — Fundação do projeto

- [ ] **T-005 — Preparar ambiente React + Vite + TypeScript**
  - Criar ou ajustar a aplicação preservando a estrutura existente.
  - Configurar TypeScript e scripts.
  - Aceite: `npm run dev` e `npm run build` funcionam (ou comandos equivalentes do package manager do projeto).

- [ ] **T-006 — Configurar dependências**
  - Instalar React Router, React Hook Form, Zod e resolver.
  - Configurar ferramentas de lint e testes conforme necessário.
  - Aceite: dependências instaladas sem duplicidade e scripts documentados.

- [ ] **T-007 — Definir estrutura e tipos**
  - Criar pastas por responsabilidade e tipos de Coffee, CartItem, Address, PaymentMethod e Order.
  - Aceite: modelos sem `any` desnecessário e estrutura documentada.

- [ ] **T-008 — Configurar estilos globais e tokens**
  - Implementar reset/estilos base e tokens extraídos do Figma.
  - Aceite: base visual aplicada sem valores duplicados e sem quebrar responsividade.

## Fase 2 — Identidade visual e layout

- [ ] **T-009 — Criar logo original com IA**
  - Gerar logo própria para Coffee Delivery usando ferramenta de IA.
  - Revisar legibilidade, originalidade, contraste e versões necessárias.
  - Salvar asset final em `public/assets/brand/`.
  - Aceite: logo aprovada e integrada; ferramenta/uso registrados na documentação.

- [ ] **T-010 — Implementar Header e navegação**
  - Aplicar logo, links/ações, contador do carrinho e controle de tema conforme Figma.
  - Aceite: header funcional em desktop e mobile, com acessibilidade básica.

- [ ] **T-011 — Implementar layout responsivo da Home**
  - Construir hero/apresentação e estrutura do catálogo conforme frames.
  - Aceite: composição visual validada em desktop, tablet e celular.

- [ ] **T-012 — Implementar ProductCard e seletor de quantidade**
  - Exibir dados do café e controles de quantidade.
  - Aceite: props tipadas, quantidade válida e visual aderente ao Figma.

- [ ] **T-013 — Popular catálogo oficial**
  - Cadastrar produtos, preços, tags e imagens aprovados.
  - Aceite: catálogo completo e sem dados provisórios.

## Fase 3 — Carrinho e estado global

- [ ] **T-014 — Implementar CartContext e useReducer**
  - Criar estado, actions e reducer puro.
  - Aceite: adicionar, incrementar, decrementar, remover e limpar itens funcionam.

- [ ] **T-015 — Implementar persistência do carrinho**
  - Salvar/restaurar estado no LocalStorage, validando conteúdo.
  - Aceite: carrinho persiste após reload; JSON inválido não quebra a aplicação.

- [ ] **T-016 — Implementar resumo e cálculos**
  - Criar utilitários de subtotal, taxa e total em centavos.
  - Aceite: valores consistentes e formatados em BRL; testes cobrem cálculos.

- [ ] **T-017 — Implementar estados do carrinho**
  - Carrinho vazio, com itens, quantidade mínima, remoção e feedback.
  - Aceite: usuário entende cada estado e não consegue avançar sem itens.

## Fase 4 — Checkout

- [ ] **T-018 — Configurar React Router e páginas**
  - Configurar Home, Checkout, Confirmação e rota não encontrada.
  - Aceite: navegação SPA sem reload e guardas de estado coerentes.

- [ ] **T-019 — Criar schema Zod**
  - Definir campos e regras aprovados para endereço e pagamento.
  - Aceite: campos obrigatórios/opcionais refletem a regra oficial.

- [ ] **T-020 — Implementar formulário com React Hook Form**
  - Integrar `zodResolver`, mensagens e acessibilidade.
  - Aceite: erros aparecem corretamente e formulário válido pode prosseguir.

- [ ] **T-021 — Implementar revisão do pedido no checkout**
  - Mostrar itens, quantidades, subtotal, taxa e total.
  - Aceite: valores iguais aos cálculos do carrinho e edição/removal possível conforme design.

- [ ] **T-022 — Implementar finalização fictícia**
  - Validar carrinho e formulário, criar snapshot do pedido e evitar envio duplicado.
  - Aceite: pedido é criado localmente, sem gateway de pagamento ou backend.

- [ ] **T-023 — Implementar página de confirmação**
  - Mostrar sucesso, endereço, pagamento e resumo.
  - Aceite: dados refletem exatamente o pedido enviado; acesso sem pedido tem fallback seguro.

## Fase 5 — Temas e responsividade

- [ ] **T-024 — Implementar ThemeContext**
  - Alternar Light/Dark e aplicar tokens globais.
  - Aceite: todos os componentes seguem o tema atual.

- [ ] **T-025 — Persistir preferência de tema**
  - Salvar e restaurar preferência no LocalStorage.
  - Aceite: tema permanece após reload e navegação.

- [ ] **T-026 — Revisar responsividade**
  - Validar Home, catálogo, carrinho, checkout e confirmação em viewports mobile/tablet/desktop.
  - Aceite: sem overflow horizontal, conteúdo legível e controles utilizáveis.

## Fase 6 — Qualidade e entrega

- [ ] **T-027 — Testar reducer e utilitários**
  - Cobrir transições do carrinho e cálculos.
  - Aceite: testes automatizados passam.

- [ ] **T-028 — Testar formulário e fluxo de compra**
  - Cobrir erros, sucesso, carrinho vazio e confirmação.
  - Aceite: cenários principais passam.

- [ ] **T-029 — Revisar acessibilidade**
  - Teclado, labels, foco, semântica, contraste e leitores de tela básicos.
  - Aceite: problemas críticos corrigidos.

- [ ] **T-030 — Revisão visual comparativa com Figma**
  - Comparar telas implementadas com os frames oficiais.
  - Aceite: divergências relevantes corrigidas ou justificadas.

- [ ] **T-031 — Executar lint, testes e build**
  - Rodar todos os comandos configurados.
  - Aceite: sem erros introduzidos; resultados registrados.

- [ ] **T-032 — Atualizar README e documentação de IA**
  - Documentar instalação, scripts, funcionalidades, tecnologias e uso de IA.
  - Aceite: outra pessoa consegue instalar e executar seguindo o README.

- [ ] **T-033 — Revisar Git e preparar entrega**
  - Conferir `.gitignore`, commits, arquivos e ausência de segredos.
  - Aceite: repositório organizado e pronto para entrega; push somente com autorização.

## Critérios globais de conclusão

- [ ] Todos os requisitos obrigatórios do PRD atendidos.
- [ ] Fluxo Home → Checkout → Confirmação validado.
- [ ] Carrinho e tema persistem no LocalStorage.
- [ ] React Router, Context API, useReducer, Hooks, Props, RHF e Zod estão efetivamente utilizados.
- [ ] Logo original gerada com IA integrada.
- [ ] Desktop, tablet e mobile revisados.
- [ ] Dark Mode e Light Mode revisados.
- [ ] Testes, lint e build executados.
- [ ] Uso de IA documentado.
- [ ] README e especificações atualizados.

## Registro de uso do assistente de IA

Preencher durante o desenvolvimento. Não registrar como concluída uma etapa que não aconteceu.

| Data | Etapa | Ferramenta/assistente | Como foi utilizado | Verificação humana / resultado |
|---|---|---|---|---|
| | Planejamento | | | |
| | Desenvolvimento | | | |
| | Revisão | | | |
| | Testes | | | |

## Pendências que bloqueiam decisões

| Pendência | Impacto | Como resolver | Status |
|---|---|---|---|
| Conteúdo detalhado do Notion | Regras e critérios complementares podem estar ausentes | Consultar página e subpáginas oficiais | Aberta |
| Acesso ao Figma | Tokens, assets e layouts não podem ser confirmados | Conceder acesso de visualização ao arquivo | Aberta |
| Catálogo e preços oficiais | Conteúdo final dos cards | Confirmar material oficial | Aberta |
| Taxa de entrega | Total do pedido | Confirmar regra com professor/Notion | Aberta |
| Campos e pagamentos | Schema do checkout | Conferir Notion/Figma | Aberta |
