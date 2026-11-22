import type { CartItem } from '../../types/cart'
import type { Coffee } from '../../types/coffee'

export type CartState = {
  items: CartItem[]
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { coffee: Coffee; quantity: number } }
  | { type: 'INCREASE_ITEM'; payload: { coffeeId: string } }
  | { type: 'DECREASE_ITEM'; payload: { coffeeId: string } }
  | { type: 'REMOVE_ITEM'; payload: { coffeeId: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE_CART'; payload: { items: CartItem[] } }

export const initialCartState: CartState = { items: [] }

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { coffee, quantity } = action.payload
      const qty = Math.max(1, Math.floor(quantity))
      const existing = state.items.find((i) => i.coffeeId === coffee.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.coffeeId === coffee.id ? { ...i, quantity: i.quantity + qty } : i,
          ),
        }
      }
      return { items: [...state.items, { coffeeId: coffee.id, coffee, quantity: qty }] }
    }
    case 'INCREASE_ITEM': {
      return {
        items: state.items.map((i) =>
          i.coffeeId === action.payload.coffeeId ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      }
    }
    case 'DECREASE_ITEM': {
      return {
        items: state.items
          .map((i) =>
            i.coffeeId === action.payload.coffeeId ? { ...i, quantity: i.quantity - 1 } : i,
          )
          .filter((i) => i.quantity >= 1),
      }
    }
    case 'REMOVE_ITEM': {
      return { items: state.items.filter((i) => i.coffeeId !== action.payload.coffeeId) }
    }
    case 'CLEAR_CART': {
      return { items: [] }
    }
    case 'HYDRATE_CART': {
      return { items: action.payload.items }
    }
    default:
      return state
  }
}
