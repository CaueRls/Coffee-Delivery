import type { CartItem } from '../../types/cart'

const CART_STORAGE_KEY = 'coffee-delivery:cart:v1'

function isValidCartItem(item: unknown): item is CartItem {
  if (!item || typeof item !== 'object') return false
  const maybe = item as Record<string, unknown>
  if (typeof maybe.coffeeId !== 'string') return false
  if (typeof maybe.quantity !== 'number' || !Number.isInteger(maybe.quantity) || maybe.quantity < 1) return false
  const coffee = maybe.coffee as Record<string, unknown> | undefined
  if (!coffee || typeof coffee !== 'object') return false
  if (typeof coffee.id !== 'string' || typeof coffee.name !== 'string') return false
  if (typeof coffee.priceInCents !== 'number') return false
  return true
}

export function loadCartFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    const valid = parsed.filter(isValidCartItem)
    return valid
  } catch {
    return []
  }
}

export function saveCartToStorage(items: CartItem[]): void {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore write errors
  }
}
