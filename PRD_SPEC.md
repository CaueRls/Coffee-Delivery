# PRD — Coffee Delivery

> Documento de requisitos de produto. Este arquivo define o que a aplicação deve fazer, para quem e quais condições determinam que o produto atende à atividade.

## 1. Visão geral

**Coffee Delivery** é uma aplicação web de e-commerce fictícia para uma cafeteria. O usuário pode explorar um catálogo de cafés, selecionar produtos e quantidades, revisar o carrinho, informar endereço de entrega, escolher uma forma de pagamento e finalizar um pedido simulado.

O projeto é o trabalho final da disciplina de **Single Page Application (SPA)** e deve demonstrar o domínio dos conceitos de React e TypeScript estudados durante o semestre.

## 2. Objetivos

- Oferecer uma experiência simples e intuitiva de compra fictícia de cafés.
- Reproduzir o protótipo oficial do Figma em telas desktop e mobile.
- Demonstrar componentização, Props, Hooks, Context API e `useReducer`.
- Demonstrar navegação SPA com React Router.
- Persistir o carrinho com LocalStorage.
- Validar dados de checkout com React Hook Form e Zod.
- Disponibilizar Light Mode e Dark Mode.
- Apresentar identidade visual própria, incluindo logo original criada com IA.
- Documentar o uso de assistente de IA durante planejamento, desenvolvimento, revisão e testes.

## 3. Público-alvo e contexto de uso

Pessoas que desejam simular a compra e entrega de cafés em uma loja virtual. Não há necessidade de conta, autenticação ou pagamento real no escopo obrigatório.

## 4. Escopo

### 4.1 Dentro do escopo

- Página inicial com identidade visual, apresentação e catálogo.
- Listagem de cafés com imagem, nome, descrição, categorias/tags e preço.
- Seleção de quantidade por produto.
- Adição de produtos ao carrinho.
- Visualização e edição do carrinho.
- Aumento, redução e remoção de itens.
- Cálculo de subtotal, entrega (conforme regra definida) e total.
- Checkout com dados de endereço.
- Seleção de forma de pagamento.
- Validação dos campos com React Hook Form e Zod.
- Confirmação de pedido fictício.
- Navegação por React Router.
- Persistência do carrinho em LocalStorage.
- Alternância entre Light Mode e Dark Mode, com preferência persistida.
- Layout responsivo para desktop, tablet e celular.
- Logo original criada com ferramenta de IA.
- Registro de uso da IA e documentação do projeto.

### 4.2 Fora do escopo, salvo orientação posterior do professor

- Cadastro, login e autenticação.
- Backend, banco de dados e API própria.
- Pagamento real, cartão real ou integração com gateway.
- Envio real do pedido para uma cafeteria.
- Rastreamento de entregador em tempo real.
- Painel administrativo, estoque ou gestão de produtos.
- Histórico de pedidos persistente entre dispositivos.
- Integração de geolocalização ou consulta de CEP, a menos que o Notion determine.
- Cupons, avaliações, favoritos e programa de fidelidade.

## 5. Personas e necessidades

**Comprador:** deseja encontrar cafés, escolher quantidades, conferir valores e concluir o pedido com poucos passos.

Necessidades:
- Entender rapidamente os produtos e seus preços.
- Saber o que está no carrinho e quanto custará.
- Corrigir quantidades ou remover produtos facilmente.
- Preencher os dados de entrega sem dúvidas.
- Receber confirmação clara após finalizar.
- Usar a aplicação confortavelmente em telas pequenas e nos dois temas.

## 6. Jornada principal

1. Acessar a página inicial.
2. Visualizar a apresentação e o catálogo.
3. Escolher a quantidade de um ou mais cafés.
4. Adicionar itens ao carrinho.
5. Abrir o carrinho/checkout e revisar os produtos.
6. Ajustar quantidades ou remover itens.
7. Informar endereço de entrega.
8. Escolher a forma de pagamento.
9. Corrigir eventuais erros de validação.
10. Confirmar o pedido fictício.
11. Visualizar a página de confirmação com resumo e dados de entrega.

## 7. Requisitos funcionais

| ID | Requisito | Critério de aceite |
|---|---|---|
| RF-01 | Exibir catálogo | A página inicial lista os cafés cadastrados com os dados necessários e imagens correspondentes. |
| RF-02 | Selecionar quantidade | O usuário consegue aumentar/diminuir a quantidade antes de adicionar ao carrinho; não há quantidade inválida. |
| RF-03 | Adicionar ao carrinho | O produto selecionado é adicionado; se já existir, a regra de acumular quantidades é aplicada sem duplicação indevida. |
| RF-04 | Exibir carrinho | O carrinho apresenta produtos, preço unitário, quantidade, subtotal por item e total. |
| RF-05 | Alterar quantidade | É possível incrementar e decrementar itens respeitando o mínimo de 1 unidade. |
| RF-06 | Remover item | O usuário consegue remover um produto do carrinho. |
| RF-07 | Persistir carrinho | Após atualizar a página, o carrinho válido é restaurado do LocalStorage. |
| RF-08 | Tratar carrinho vazio | A interface apresenta estado vazio e impede avançar/finalizar pedido sem itens. |
| RF-09 | Informar endereço | O checkout apresenta campos de endereço conforme schema aprovado. |
| RF-10 | Validar formulário | React Hook Form e Zod impedem envio inválido e exibem mensagens claras. |
| RF-11 | Selecionar pagamento | O usuário escolhe uma das formas de pagamento previstas no projeto; a escolha é obrigatória. |
| RF-12 | Finalizar pedido | Com carrinho e formulário válidos, o pedido fictício é criado no estado da aplicação. |
| RF-13 | Confirmar pedido | A tela de confirmação apresenta o resumo do pedido e dados relevantes de entrega/pagamento. |
| RF-14 | Navegar entre telas | React Router gerencia as rotas sem recarregamento completo da página. |
| RF-15 | Alternar tema | O usuário alterna entre Light Mode e Dark Mode. |
| RF-16 | Persistir tema | A preferência de tema continua após atualizar a página e navegar entre rotas. |
| RF-17 | Responsividade | Conteúdo e controles permanecem utilizáveis em desktop, tablet e celular. |
| RF-18 | Exibir identidade | A logo original criada com IA é aplicada de forma consistente à interface. |

## 8. Regras de negócio

As regras abaixo representam o comportamento mínimo necessário. Pontos marcados como **a definir** devem ser conferidos no Notion/professor antes de fixar a implementação.

- RN-01: O pedido é uma simulação; nenhum pagamento ou entrega real ocorre.
- RN-02: O carrinho pode conter vários produtos.
- RN-03: A quantidade de cada item deve ser um inteiro maior ou igual a 1.
- RN-04: Ao adicionar um produto que já está no carrinho, deve-se atualizar a quantidade do item existente, evitando linhas duplicadas do mesmo produto.
- RN-05: O subtotal de um item é preço unitário multiplicado pela quantidade.
- RN-06: O subtotal do pedido é a soma dos subtotais dos itens.
- RN-07: A taxa de entrega deve ser configurável e apresentada separadamente. **Valor/regra: a definir conforme material oficial.** Não inventar preço.
- RN-08: O total é subtotal do pedido + taxa de entrega aplicável.
- RN-09: Não é permitido finalizar pedido com carrinho vazio.
- RN-10: Os dados obrigatórios de endereço e forma de pagamento devem ser validados antes da confirmação.
- RN-11: Após a confirmação, os dados necessários devem ser preservados para renderizar a página de sucesso, mesmo que o carrinho seja limpo para uma nova compra.
- RN-12: O carrinho deve ser persistido no navegador; dados inválidos ou JSON corrompido devem ser tratados sem quebrar a aplicação.
- RN-13: O tema selecionado deve ser persistido no navegador.
- RN-14: Valores monetários devem ser apresentados em Real brasileiro (BRL), salvo orientação diferente no Notion.

### 8.1 Pendências de regra de negócio

- Valor da taxa de entrega e se é fixa, variável ou gratuita acima de determinado valor.
- Lista oficial de produtos, preços, descrições, categorias e imagens.
- Campos obrigatórios exatos do endereço.
- Formas de pagamento exatas e seus rótulos.
- Comportamento esperado após confirmar (limpar carrinho imediatamente ou em outro momento).
- Comportamento inicial do tema quando não houver preferência salva.
- Se existe consulta de CEP ou outro serviço externo obrigatório.

## 9. Dados e conteúdo

Cada produto deve ter, no mínimo:
- `id` estável.
- `name`.
- `description`.
- `price` numérico em centavos ou outra representação monetária segura.
- `image`.
- `tags`/categorias, caso constem no conteúdo oficial.

Não inventar catálogo definitivo. Usar dados provisórios claramente identificados durante o desenvolvimento e substituir pelos dados aprovados antes da entrega.

Dados de checkout previstos (confirmar com o protótipo):
- CEP.
- Rua/logradouro.
- Número.
- Complemento (opcional, se aprovado).
- Bairro.
- Cidade.
- UF.
- Forma de pagamento.

## 10. Requisitos não funcionais

| ID | Requisito | Critério de aceite |
|---|---|---|
| RNF-01 | Responsividade | Layout utilizável em larguras pequenas, médias e grandes, sem rolagem horizontal indevida. |
| RNF-02 | Fidelidade visual | Telas implementadas seguem o Figma; divergências justificadas são registradas. |
| RNF-03 | Acessibilidade | Campos rotulados, foco visível, navegação por teclado e semântica adequada. |
| RNF-04 | Desempenho | Evitar renderizações e dependências desnecessárias; imagens otimizadas e dimensões adequadas. |
| RNF-05 | Confiabilidade | Estado do carrinho e cálculos não ficam inconsistentes após ações do usuário. |
| RNF-06 | Manutenibilidade | Componentes e lógica organizados por responsabilidade, com tipos explícitos. |
| RNF-07 | Compatibilidade | Funcionar nas versões atuais dos principais navegadores modernos. |
| RNF-08 | Segurança | Não coletar nem transmitir dados reais de pagamento; não armazenar segredos no cliente. |
| RNF-09 | Tema | Contraste e legibilidade mantidos nos dois temas. |
| RNF-10 | Documentação | Instruções de instalação, uso, scripts e tecnologias registradas no README. |

## 11. Telas e rotas

| Rota sugerida | Tela | Responsabilidade |
|---|---|---|
| `/` | Home | Apresentação, catálogo e acesso ao carrinho. |
| `/checkout` | Checkout | Revisão do carrinho, formulário de entrega e pagamento. |
| `/order-confirmation` | Confirmação | Resultado do pedido fictício e resumo da entrega. |

As rotas são uma proposta funcional inicial. Ajustar nomes e composição caso o Figma/Notion determine outra organização.

## 12. Estados de interface

- Carregamento inicial, se houver carregamento assíncrono.
- Catálogo com produtos.
- Carrinho vazio.
- Carrinho com um ou mais itens.
- Erros de validação em campos.
- Checkout sem itens.
- Pedido confirmado.
- Acesso direto à confirmação sem pedido disponível.
- Preferência Light/Dark carregada e alternada.

## 13. Métricas de conclusão do projeto

O projeto estará funcionalmente concluído quando:
- Todos os requisitos funcionais obrigatórios estiverem implementados e testados.
- Os fluxos Home → Checkout → Confirmação funcionarem.
- Carrinho e tema persistirem corretamente.
- O formulário validar dados com RHF + Zod.
- O layout for responsivo e aderente ao Figma.
- A logo original estiver integrada.
- A utilização de IA estiver documentada.
- Os documentos e instruções de execução estiverem atualizados.

## 14. Referências

- Notion: https://deluxe-blue-bc1.notion.site/Projeto-Final-05-Coffee-Delivery-React-TypeScript-IA-41bdfca74d8d8119a849e30ea492a6af?pvs=143
- Figma: https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-•-Projeto-Final-React?node-id=0-1&p=f
- GitHub: https://github.com/CaueRls/Coffee-Delivery
- Regulamento da atividade: descrição e requisitos fornecidos pelo professor/aluno.

## 15. Histórico de decisões e pendências

| Data | Item | Situação |
|---|---|---|
| 2026-11-20 | Stack React + Vite + TypeScript e bibliotecas obrigatórias | Confirmado pelo regulamento fornecido. |
| 2026-11-20 | Notion e Figma | Links registrados; conteúdo detalhado ainda precisa ser conferido com acesso autorizado. |
| 2026-11-20 | Taxa de entrega, catálogo e campos exatos | Pendente de confirmação no material oficial. |
