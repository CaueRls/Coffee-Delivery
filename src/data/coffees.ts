import type { Coffee } from '../types/coffee'

export const coffees: Coffee[] = [
  {
    id: 'espresso',
    name: 'Expresso Tradicional',
    description: 'O clássico café feito com água quente e grãos moídos',
    priceInCents: 990,
    image: '/assets/products/coffee-1.jpg',
    tags: ['Tradicional'],
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Café expresso com leite vaporizado e espuma suave',
    priceInCents: 1290,
    image: '/assets/products/coffee-2.jpg',
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 1490,
    image: '/assets/products/coffee-3.jpg',
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 'mocha',
    name: 'Mocaccino',
    description: 'Café expresso com chocolate, leite e espuma',
    priceInCents: 1590,
    image: '/assets/products/coffee-4.jpg',
    tags: ['Doce', 'Com leite'],
  },
]
