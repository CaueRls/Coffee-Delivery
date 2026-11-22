import type { Coffee } from '../types/coffee'

// Dados provisórios (substituir pelos oficiais quando confirmados no Figma/Notion)
export const coffees: Coffee[] = [
  {
    id: 'espresso',
    name: 'Expresso Tradicional',
    description: 'O clássico café feito com água quente e grãos moídos',
    priceInCents: 990,
    image: '/vite.svg',
    tags: ['Tradicional'],
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Café expresso com leite vaporizado e espuma suave',
    priceInCents: 1290,
    image: '/vite.svg',
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 1490,
    image: '/vite.svg',
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 'mocha',
    name: 'Mocaccino',
    description: 'Café expresso com chocolate, leite e espuma',
    priceInCents: 1590,
    image: '/vite.svg',
    tags: ['Doce', 'Com leite'],
  },
]
