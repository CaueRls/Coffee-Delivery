import type { CartItem } from '../types/cart'

export const DELIVERY_FEE_IN_CENTS = 350 // valor provisório; confirmar no material oficial

export function getItemSubtotalInCents(item: CartItem): number {
  return item.coffee.priceInCents * item.quantity
}

export function getCartSubtotalInCents(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + getItemSubtotalInCents(item), 0)
}

export function getCartTotalInCents(items: CartItem[]): number {
  return getCartSubtotalInCents(items) + DELIVERY_FEE_IN_CENTS
}
