import type { Coffee } from './coffee'

export interface CartItem {
  coffeeId: string
  coffee: Coffee
  quantity: number
}
