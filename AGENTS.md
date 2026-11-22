# AGENTS.md — Coffee Delivery

## 1. Missão do agente

Você é o agente de engenharia responsável por planejar, implementar, revisar e testar o **Coffee Delivery**, uma aplicação web de e-commerce fictício para uma cafeteria, desenvolvida como projeto final da disciplina de Single Page Application (SPA).

Trabalhe de forma incremental, mantenha o código simples e sustentável e priorize:
1. Cumprimento integral dos requisitos acadêmicos.
2. Fidelidade visual ao protótipo oficial do Figma.
3. Experiência consistente em desktop, tablet e dispositivos móveis.
4. Acessibilidade, validação de dados e prevenção de estados inconsistentes.
5. Código tipado, reutilizável, testável e documentado.

## 2. Fontes de verdade e precedência

Considere estas fontes nesta ordem:

1. **Regulamento e requisitos fornecidos pelo professor** — obrigatórios e não podem ser removidos por decisões técnicas.
2. **Notion do projeto** — instruções complementares, regras de negócio, conteúdo e critérios da atividade.
3. **Figma oficial** — referência visual para composição, dimensões, tipografia, cores, espaçamentos, ícones, imagens e comportamento responsivo quando houver telas correspondentes.
4. `PRD_SPEC.md` — comportamento do produto e requisitos verificáveis.
5. `TECH_SPEC.md` — decisões técnicas e arquitetura.
6. `TASKS_SPEC.md` — ordem e critérios de conclusão das tarefas.
7. `README.md` — instruções públicas de instalação e uso.

Links oficiais:
- Notion: https://deluxe-blue-bc1.notion.site/Projeto-Final-05-Coffee-Delivery-React-TypeScript-IA-41bdfca74d8d8119a849e30ea492a6af?pvs=143
- Figma: https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-•-Projeto-Final-React?node-id=0-1&p=f
- Repositório: https://github.com/CaueRls/Coffee-Delivery

Se duas fontes entrarem em conflito, não escolha silenciosamente: registre o conflito e proponha a alternativa que preserva o regulamento. Não invente regras de negócio que não estejam definidas. Registre dúvidas em `TASKS_SPEC.md` ou em uma seção de pendências do documento apropriado.

**Atenção ao estado inicial:** os links do Notion e do Figma devem ser consultados pelo desenvolvedor/agente com acesso autorizado antes de afirmar que todos os detalhes visuais e complementares foram incorporados. Se não houver acesso, trabalhe apenas com os requisitos disponíveis e deixe explícitas as pendências; nunca simule ter inspecionado o protótipo.

## 3. Stack obrigatória

- React
- Vite
- TypeScript
- React Router
- Context API
- `useReducer`
- Hooks e Props
- LocalStorage para persistência do carrinho
- React Hook Form
- Zod
- Git e GitHub

A biblioteca de estilização deve ser escolhida após a inspeção do projeto e do Figma. Não introduza Tailwind, styled-components ou outra solução sem verificar se já existe uma decisão no repositório/Notion. Na ausência de decisão, prefira CSS organizado por componentes ou CSS Modules, sem adicionar dependências desnecessárias.

## 4. Requisitos inegociáveis

- Implementar catálogo de cafés, carrinho, checkout e confirmação do pedido.
- Permitir adicionar produtos e alterar/remover quantidades.
- Exibir subtotal, taxa de entrega (quando definida) e total de forma consistente.
- Persistir o carrinho no LocalStorage e restaurá-lo ao recarregar a página.
- Implementar formulário com React Hook Form e validação Zod.
- Implementar Light Mode e Dark Mode, com alternância acessível e preferência persistida.
- Garantir layout responsivo para desktop, tablet e celular.
- Criar uma logo original com ferramenta de Inteligência Artificial e integrá-la à identidade visual. Não usar uma logo aleatória ou temporária como entrega final.
- Usar assistente de IA nas fases de planejamento, desenvolvimento, revisão e testes; manter registro transparente de como foi utilizado.
- Utilizar React Router para navegação entre as telas.
- Manter componentes reutilizáveis, tipagem adequada e versionamento Git.

## 5. Fluxo funcional esperado

1. A pessoa acessa a página inicial e visualiza a apresentação da cafeteria e o catálogo.
2. Pode escolher a quantidade de cada café e adicionar ao carrinho.
3. O carrinho apresenta os itens, quantidades, valores e controles de edição/remoção.
4. Ao prosseguir, acessa o checkout e preenche os dados de entrega e a forma de pagamento.
5. O formulário valida os dados antes de permitir a finalização.
6. Ao confirmar, o pedido fictício é registrado no estado da aplicação e a pessoa é encaminhada à tela de confirmação.
7. A tela de confirmação apresenta os dados relevantes do pedido e entrega.
8. A aplicação não processa pagamento real nem envia pedidos a uma cafeteria real.

Não implemente autenticação, backend, gateway de pagamento, rastreamento real ou integração externa como se fossem requisitos. Só adicione se houver solicitação explícita.

## 6. Arquitetura e qualidade

- Use TypeScript estrito; evite `any`. Quando inevitável, justifique e limite o escopo.
- Separe páginas, componentes, contexto/estado, dados, tipos, schemas e utilitários.
- Prefira componentes pequenos com responsabilidade única.
- Use `Props` explícitas e tipos compartilhados.
- Use `key` estável em listas; não use índice como chave quando houver identificador disponível.
- Mantenha reducers puros e atualizações imutáveis.
- Centralize cálculos de preço/total em funções testáveis; não duplique fórmulas na interface.
- Não armazene valores derivados se puderem ser calculados com segurança a partir do estado.
- Trate LocalStorage como fonte persistida não confiável: valide os dados carregados e trate JSON inválido.
- Não coloque segredos, tokens ou dados pessoais reais no repositório.
- Não adicione dependências sem necessidade; explique o motivo quando adicionar.
- Preserve os arquivos e convenções já existentes no repositório. Inspecione antes de alterar.

## 7. Design e acessibilidade

- Inspecione o Figma antes de definir cores, tipografia, dimensões, espaçamentos, sombras, bordas, ícones e assets finais.
- Reproduza os layouts previstos, sem substituir o design por uma interface genérica.
- Não use emojis como substitutos de ícones do projeto.
- Use assets locais versionados; não deixe URLs temporárias de ferramentas de design no código.
- Não distorça imagens de produtos ou a logo.
- Use landmarks semânticos, hierarquia correta de títulos, labels associados aos campos e foco visível.
- Botões e controles devem ser operáveis por teclado e ter nomes acessíveis.
- Não dependa apenas de cor para comunicar erro, seleção ou estado.
- Respeite `prefers-reduced-motion` quando houver animações.
- O tema deve aplicar-se à aplicação inteira, sem flash ou mistura indevida de cores.

## 8. Formulários e checkout

- Defina schema Zod em módulo próprio e integre-o ao React Hook Form.
- Mensagens de validação devem ser claras, em português e próximas ao campo.
- Campos obrigatórios e opcionais devem estar explícitos.
- Não permita finalizar com carrinho vazio.
- Não permita quantidades iguais ou inferiores a zero.
- A seleção de pagamento deve ser obrigatória.
- Normalize e valide CEP/UF conforme as regras definidas no PRD.
- Não invente máscara ou consulta de CEP como requisito; implemente integração externa somente se estiver no Notion ou for aprovada.
- Evite apagar dados do carrinho antes de preservar os dados necessários à confirmação do pedido.

## 9. Dark Mode e persistência

- Disponibilize controle de tema visível e acessível.
- Persista a escolha em LocalStorage.
- Defina um comportamento inicial coerente caso ainda não exista preferência salva (preferência do sistema ou Light Mode, conforme decisão registrada).
- Garanta que a escolha continue após atualização e navegação.
- Evite duplicar lógica de tema em páginas diferentes.

## 10. Uso de IA e documentação

A IA é apoio, não substitui revisão humana. Registre em documentação:
- Etapa em que a IA foi utilizada (planejamento, implementação, revisão ou testes).
- Tipo de contribuição (ideias, explicação, geração de código, revisão, casos de teste).
- O que foi aceito, alterado ou rejeitado.
- Como o resultado foi verificado.

Nunca declare que testes foram executados sem executá-los. Nunca declare que uma funcionalidade está pronta sem verificar o comportamento.

## 11. Git e fluxo de trabalho

- Antes de editar, examine a estrutura, `package.json`, scripts, dependências e estado do Git.
- Não sobrescreva trabalho existente sem entender seu propósito.
- Faça alterações pequenas e coerentes.
- Use mensagens de commit claras, preferencialmente no padrão `feat:`, `fix:`, `docs:`, `refactor:`, `test:` e `chore:`.
- Não faça push, merge, rebase destrutivo ou publicação sem autorização explícita.
- Não remova arquivos ou dependências sem justificar.
- Mantenha `.gitignore` adequado e nunca versione `node_modules`, `dist`, arquivos `.env` ou credenciais.

## 12. Verificação obrigatória antes de concluir uma tarefa

1. Confirme que os critérios de aceite da tarefa foram atendidos.
2. Execute lint, testes e build disponíveis no projeto.
3. Corrija erros introduzidos pela alteração.
4. Verifique o fluxo afetado em desktop e viewport móvel.
5. Verifique estados vazios, erros de validação e persistência quando aplicável.
6. Atualize `TASKS_SPEC.md` e `README.md` se o comportamento ou instruções mudarem.
7. Informe arquivos alterados, comandos executados, resultados e pendências.

## 13. Definição de pronto

Uma tarefa só pode ser marcada como concluída quando:
- O comportamento solicitado funciona.
- A implementação respeita a arquitetura e os requisitos.
- Não há erros TypeScript, lint ou build introduzidos.
- Os cenários relevantes foram testados.
- O layout continua coerente em desktop e mobile.
- A documentação relacionada foi atualizada.
- Não existem placeholders, mocks ou dados temporários apresentados como funcionalidades finais.

Se faltar informação essencial, faça uma pergunta objetiva ou registre a pendência. Não tome decisões de negócio irreversíveis por conta própria.
