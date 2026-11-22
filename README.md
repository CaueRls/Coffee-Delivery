# ☕ Coffee Delivery

Aplicação web de e-commerce fictício para uma cafeteria, desenvolvida como projeto final da disciplina de **Single Page Application (SPA)**. O usuário poderá visualizar um catálogo de cafés, adicionar produtos ao carrinho, ajustar quantidades, preencher endereço de entrega, selecionar a forma de pagamento e finalizar um pedido simulado.

> O projeto é acadêmico/demonstrativo. Não realiza pagamentos nem entregas reais.

## Objetivos do projeto

- Praticar React, TypeScript e Vite.
- Utilizar Context API, `useReducer`, Hooks, Props e React Router.
- Persistir carrinho com LocalStorage.
- Validar formulários com React Hook Form e Zod.
- Implementar Light Mode e Dark Mode.
- Criar interface responsiva para desktop, tablet e celular.
- Desenvolver uma logo original com ferramenta de Inteligência Artificial.
- Documentar o uso de IA no planejamento, desenvolvimento, revisão e testes.

## Tecnologias

- React
- Vite
- TypeScript
- React Router
- Context API e `useReducer`
- React Hook Form
- Zod
- LocalStorage
- Git e GitHub

Bibliotecas adicionais de interface, ícones e testes serão listadas aqui conforme forem efetivamente adotadas no `package.json`.

## Funcionalidades previstas

- Catálogo de cafés.
- Seleção de quantidade e adição ao carrinho.
- Edição e remoção de itens.
- Cálculo de subtotal, entrega e total.
- Persistência do carrinho.
- Checkout com endereço e forma de pagamento.
- Validação de formulário.
- Confirmação de pedido fictício.
- Alternância e persistência de tema claro/escuro.
- Layout responsivo.

## Design e identidade visual

- **Protótipo Figma:** [Coffee Delivery — Projeto Final React](https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-•-Projeto-Final-React?node-id=0-1&p=f)
- **Logo:** será criada originalmente com ferramenta de IA e armazenada nos assets locais do projeto.

A implementação visual deve seguir o protótipo oficial. Consulte o arquivo `TECH_SPEC.md` para decisões de arquitetura e `PRD_SPEC.md` para requisitos e regras de negócio.

## Documentação do projeto

| Arquivo | Conteúdo |
|---|---|
| `AGENTS.md` | Instruções para o agente OpenCode. |
| `PRD_SPEC.md` | Visão do produto, escopo, requisitos e regras de negócio. |
| `TECH_SPEC.md` | Arquitetura, stack, estrutura e decisões técnicas. |
| `TASKS_SPEC.md` | Backlog, fases, critérios de aceite e registro do uso de IA. |
| `README.md` | Apresentação e instruções de execução. |

## Pré-requisitos

- Node.js em versão LTS compatível com a versão do Vite utilizada.
- npm (ou o package manager indicado pelo lockfile do repositório).
- Git.
- Navegador moderno.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/CaueRls/Coffee-Delivery.git
```

Entre na pasta:

```bash
cd Coffee-Delivery
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador (normalmente `http://localhost:5173`).

## Scripts

Os scripts definitivos dependem do `package.json`. A configuração esperada é:

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera a versão de produção
npm run preview  # pré-visualiza a build
npm run lint     # executa análise estática
npm run test     # executa testes automatizados
```

Se algum script ainda não existir, configure-o antes de documentá-lo como disponível.

## Estrutura de pastas

A estrutura final deve respeitar o repositório existente. Uma organização sugerida está descrita em `TECH_SPEC.md`, separando páginas, componentes, contextos, reducers, schemas, dados, tipos, utilitários e estilos.

## Fluxo da aplicação

1. Acessar a Home e consultar o catálogo.
2. Escolher cafés e quantidades.
3. Adicionar os produtos ao carrinho.
4. Revisar e ajustar o carrinho.
5. Preencher endereço e forma de pagamento no checkout.
6. Validar e confirmar o pedido fictício.
7. Consultar a tela de confirmação.

## Uso de Inteligência Artificial

O projeto exige o uso de assistente de IA durante:
- Planejamento.
- Desenvolvimento.
- Revisão.
- Testes.

As contribuições devem ser registradas em `TASKS_SPEC.md`, indicando a etapa, ferramenta, tipo de auxílio e como o resultado foi revisado. Código sugerido por IA deve ser compreendido, testado e validado antes de ser aceito.

A logo original também deverá ser criada com ferramenta de IA e integrada ao projeto.

## Escopo e limitações

- Não há pagamento real.
- Não há backend ou banco de dados obrigatório no escopo inicial.
- O pedido é simulado no frontend.
- Integrações externas, como consulta de CEP, só devem ser incluídas se estiverem previstas no material oficial ou forem aprovadas.

## Repositório

[github.com/CaueRls/Coffee-Delivery](https://github.com/CaueRls/Coffee-Delivery)

## Referências

- [Instruções do projeto no Notion](https://deluxe-blue-bc1.notion.site/Projeto-Final-05-Coffee-Delivery-React-TypeScript-IA-41bdfca74d8d8119a849e30ea492a6af?pvs=143)
- [Protótipo no Figma](https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-•-Projeto-Final-React?node-id=0-1&p=f)
- [Repositório GitHub](https://github.com/CaueRls/Coffee-Delivery)

## Status

Documentação inicial preparada com base no regulamento e requisitos informados. Conferir o Notion e o Figma e atualizar as pendências antes de considerar as especificações finais.
