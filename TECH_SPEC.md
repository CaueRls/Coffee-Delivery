# TECH SPEC — Coffee Delivery

> Especificação técnica inicial. Decisões ainda não confirmadas pelo Notion/Figma estão identificadas como propostas ou pendências.

## 1. Stack e ferramentas

### Obrigatórias
- React
- Vite
- TypeScript
- React Router
- Context API
- `useReducer`
- Hooks e Props
- LocalStorage
- React Hook Form
- Zod
- Git/GitHub

### Bibliotecas propostas
- `react-router-dom`: roteamento SPA.
- `react-hook-form`: gerenciamento de formulários.
- `zod`: schemas e validação.
- `@hookform/resolvers`: integração RHF + Zod.
- `lucide-react` ou biblioteca de ícones compatível com o Figma: confirmar após inspeção visual.
- `vitest`, `@testing-library/react`, `@testing-library/user-event` e `@testing-library/jest-dom`: testes automatizados recomendados.

Não instalar bibliotecas até inspecionar `package.json` e o estado atual do repositório. Não duplicar dependências já disponíveis.

## 2. Arquitetura proposta

Aplicação frontend SPA, sem backend obrigatório. Dados do catálogo podem ser mantidos em arquivo local tipado. O estado do carrinho será compartilhado via Context API e atualizado por reducer.

Responsabilidades:
- **Pages:** composição de cada rota.
- **Components:** elementos visuais reutilizáveis.
- **Contexts:** estado global e provedores.
- **Reducers:** transições puras do estado.
- **Schemas:** validação de formulários.
- **Data:** catálogo local inicial.
- **Utils:** formatação monetária, cálculos e persistência.
- **Types:** contratos TypeScript compartilhados.
- **Styles/Theme:** tokens e estilos globais dos temas.

## 3. Estrutura de pastas sugerida

Adaptar à estrutura existente, sem recriar o projeto caso já exista:

```text
Coffee-Delivery/
├── public/
│   ├── assets/
│   │   ├── brand/
│   │   │   └── coffee-delivery-logo.(svg|png)
│   │   └── products/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ThemeToggle/
│   │   ├── ProductCard/
│   │   ├── QuantitySelector/
│   │   ├── CartItem/
│   │   └── ...
│   ├── contexts/
│   │   ├── CartContext/
│   │   │   ├── CartContext.tsx
│   │   │   ├── cartReducer.ts
│   │   │   └── cartStorage.ts
│   │   └── ThemeContext/
│   ├── data/
│   │   └── coffees.ts
│   ├── pages/
│   │   ├── Home/
│   │   ├── Checkout/
│   │   └── OrderConfirmation/
│   ├── schemas/
│   │   └── checkoutSchema.ts
│   ├── types/
│   │   ├── coffee.ts
│   │   ├── cart.ts
│   │   └── order.ts
│   ├── utils/
│   │   ├── currency.ts
│   │   ├── cart.ts
│   │   └── storage.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── themes.css
│   └── main.tsx
├── AGENTS.md
├── PRD_SPEC.md
├── TECH_SPEC.md
├── TASKS_SPEC.md
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

A estrutura é uma referência, não uma ordem para mover arquivos que já estejam organizados de outra forma.

## 4. Rotas

Configurar React Router com rotas:
- `/` → Home.
- `/checkout` → Checkout.
- `/order-confirmation` → confirmação do pedido.

Comportamentos:
- Navegação sem reload.
- Se o checkout for acessado com carrinho vazio, orientar o usuário e oferecer retorno ao catálogo.
- Se a confirmação for acessada sem dados de pedido na sessão atual, apresentar estado seguro com ação para voltar à Home.
- Após finalizar, preservar snapshot do pedido para a confirmação antes de limpar o carrinho.
- Tratar rota desconhecida com página 404 ou redirecionamento coerente.

## 5. Modelo de domínio TypeScript

Modelo conceitual (ajustar aos dados finais):

```ts
export interface Coffee {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  image: string;
  tags: string[];
}

export interface CartItem {
  coffeeId: string;
  coffee: Coffee;
  quantity: number;
}

export type PaymentMethod =
  | "credit-card"
  | "debit-card"
  | "cash";

export interface DeliveryAddress {
  postalCode: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  address: DeliveryAddress;
  paymentMethod: PaymentMethod;
  subtotalInCents: number;
  deliveryFeeInCents: number;
  totalInCents: number;
  createdAt: string;
}
```

Os tipos de pagamento e endereço acima são uma proposta baseada no fluxo descrito. Confirmar nomes e campos no material oficial antes da implementação final.

## 6. Gerenciamento de estado do carrinho

Criar `CartContext` com `useReducer`.

Ações conceituais:
- `ADD_ITEM`: adiciona produto ou incrementa a quantidade já existente.
- `INCREASE_ITEM`: incrementa uma unidade.
- `DECREASE_ITEM`: decrementa sem permitir quantidade menor que 1; decidir se quantidade 1 permanece ou é removida conforme UX aprovada.
- `REMOVE_ITEM`: remove o produto.
- `CLEAR_CART`: limpa os itens após salvar os dados do pedido.
- `HYDRATE_CART`: carrega estado validado do LocalStorage.

Regras:
- Reducer puro, sem acesso a LocalStorage, relógio ou efeitos colaterais.
- Atualizações imutáveis.
- Usar `coffeeId` como identificador estável.
- Cálculos de subtotal/total devem ficar em selectors/utilitários puros.
- Evitar armazenar subtotal/total no estado quando puderem ser derivados dos itens.

### Persistência
- Chave sugerida: `coffee-delivery:cart:v1`.
- Serializar somente os dados necessários.
- Validar estrutura, ids e quantidades na leitura.
- Tratar JSON inválido com fallback para carrinho vazio.
- Sincronizar alterações com `useEffect` ou camada de persistência do Provider.
- Não persistir dados sensíveis de pagamento.

## 7. Gerenciamento de tema

Criar `ThemeContext` ou solução equivalente centralizada.

- Temas: `light` e `dark`.
- Persistência sugerida: `coffee-delivery:theme`.
- Aplicar tema via atributo `data-theme` no elemento raiz ou classe no `documentElement`.
- Inicializar a preferência antes da renderização sempre que possível para evitar flash de tema.
- Se não houver valor salvo, seguir preferência do sistema ou Light Mode — decisão final pendente de confirmação no Figma/Notion.
- Controle deve ter `aria-label`, estado acessível e foco visível.
- Todos os componentes devem consumir tokens CSS, evitando cores duplicadas e hardcoded.

## 8. Formulário e validação

- Utilizar `useForm` do React Hook Form.
- Criar schema com Zod em `src/schemas/checkoutSchema.ts`.
- Integrar com `zodResolver`.
- Tipar os valores inferidos a partir do schema.
- Mensagens em português.
- Marcar campos obrigatórios e opcionais.
- Validar CEP, UF e demais campos conforme regras confirmadas.
- Não aceitar pagamento sem seleção.
- Desabilitar ou proteger envio duplicado enquanto a finalização está em andamento.

Exemplo conceitual:

```ts
const checkoutSchema = z.object({
  postalCode: z.string().min(1, "Informe o CEP"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  district: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().length(2, "Informe uma UF válida"),
  paymentMethod: z.enum(["credit-card", "debit-card", "cash"]),
});
```

Este exemplo não substitui a definição final de campos e regras do professor.

## 9. Dinheiro e cálculos

- Armazenar preços em centavos inteiros para evitar erros de ponto flutuante.
- Criar utilitário de formatação com `Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })`.
- `itemSubtotal = priceInCents * quantity`.
- `subtotal = soma(itemSubtotal)`.
- `total = subtotal + deliveryFeeInCents`.
- Taxa de entrega deve vir de configuração única e aprovada, nunca duplicada em componentes.
- Criar testes unitários para cálculos e limites de quantidade.

## 10. Catálogo e assets

- Catálogo inicial em arquivo TypeScript tipado, salvo se o Notion determinar fonte diferente.
- Cada produto deve ter id estável, nome, descrição, preço e imagem.
- Usar imagens locais com nomes previsíveis e dimensões otimizadas.
- Evitar hotlinks para imagens temporárias.
- Usar a logo original gerada com IA, em formato apropriado (preferencialmente SVG ou PNG transparente conforme o asset gerado).
- Registrar fonte/licença de assets externos quando aplicável.
- Não criar produtos, preços ou descrições definitivos sem validar a referência oficial.

## 11. Identidade visual e Figma

Antes de implementar:
1. Conferir todas as páginas e frames relevantes do arquivo.
2. Identificar versões desktop, tablet e mobile, se existentes.
3. Registrar cores, tipografia, grid, espaçamentos, raios, sombras e estados.
4. Identificar imagens de produtos, logo, ícones e ilustrações.
5. Conferir se o protótipo apresenta os dois temas; caso não, propor extensão coerente sem alterar a identidade.
6. Implementar os assets locais e validar a composição contra o Figma.

Não inferir dimensões ou tokens exatos sem inspecionar o arquivo.

## 12. Responsividade

- Mobile-first é uma estratégia recomendada, mas os breakpoints finais devem refletir o protótipo.
- Garantir que catálogo, carrinho, formulário, resumo e header se reorganizem em telas estreitas.
- Evitar larguras fixas que provoquem overflow.
- Alvos de toque confortáveis.
- Imagens responsivas sem distorção.
- Validar ao menos um viewport móvel, um tablet e um desktop.
- Não inventar breakpoints finais antes de conferir os frames do Figma.

## 13. Acessibilidade

- HTML semântico (`header`, `main`, `nav`, `section`, `form`, `footer`).
- Labels associados a inputs.
- Erros vinculados aos campos (`aria-describedby`).
- Foco visível e ordem de tabulação lógica.
- Botões com nomes acessíveis.
- Contraste adequado nos dois temas.
- Não usar apenas cor para indicar erro/seleção.
- Respeitar movimento reduzido.

## 14. Testes e qualidade

Testes recomendados:
- Unitários: reducer, cálculo de subtotal/total, formatação monetária, validação.
- Componentes: seletor de quantidade, ProductCard, CartItem, ThemeToggle.
- Integração: adicionar ao carrinho, persistência após reload, checkout inválido/válido, confirmação.
- Responsividade: revisão manual nos viewports definidos.
- Qualidade estática: TypeScript, ESLint e build.

Scripts esperados (ajustar ao package manager e configuração existentes):
- `dev`
- `build`
- `preview`
- `lint`
- `test`

## 15. Segurança e privacidade

- Não solicitar ou armazenar número real de cartão, CVV, senha ou credenciais.
- A forma de pagamento é apenas uma escolha fictícia.
- Não registrar endereço real em logs.
- Não adicionar chaves de API no código.
- Se houver integração externa aprovada, documentar dados enviados, tratamento de falha e política de fallback.

## 16. Decisões técnicas pendentes

| Tema | Estado |
|---|---|
| Biblioteca de estilização | Conferir Notion, Figma e repositório. |
| Ícones | Escolher conforme protótipo. |
| Catálogo oficial | Aguardando conteúdo oficial. |
| Taxa de entrega | Aguardando regra de negócio. |
| Campos finais do checkout | Conferir Notion/Figma. |
| Serviço de CEP | Não obrigatório até confirmação. |
| Breakpoints/tokens exatos | Extrair do Figma. |
| Testes automatizados | Recomendados; confirmar exigência do professor. |
| Package manager | Respeitar lockfile existente; se não houver, usar npm. |
