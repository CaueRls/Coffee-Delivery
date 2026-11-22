import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react'
import type { Coffee } from '../../types/coffee'
import type { CartItem } from '../../types/cart'
import { cartReducer, initialCartState } from './cartReducer'
import { loadCartFromStorage, saveCartToStorage } from './cartStorage'
import { getCartSubtotalInCents, getCartTotalInCents, DELIVERY_FEE_IN_CENTS, getItemSubtotalInCents } from '../../utils/cart'

type CartContextValue = {
  items: CartItem[]
  addItem: (coffee: Coffee, quantity: number) => void
  increaseItem: (coffeeId: string) => void
  decreaseItem: (coffeeId: string) => void
  removeItem: (coffeeId: string) => void
  clearCart: () => void
  subtotalInCents: number
  deliveryFeeInCents: number
  totalInCents: number
  itemCount: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState, () => ({
    items: loadCartFromStorage(),
  }))

  useEffect(() => {
    saveCartToStorage(state.items)
  }, [state.items])

  const subtotalInCents = getCartSubtotalInCents(state.items)
  const totalInCents = getCartTotalInCents(state.items)
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  const value: CartContextValue = {
    items: state.items,
    addItem: (coffee, quantity) => dispatch({ type: 'ADD_ITEM', payload: { coffee, quantity } }),
    increaseItem: (coffeeId) => dispatch({ type: 'INCREASE_ITEM', payload: { coffeeId } }),
    decreaseItem: (coffeeId) => dispatch({ type: 'DECREASE_ITEM', payload: { coffeeId } }),
    removeItem: (coffeeId) => dispatch({ type: 'REMOVE_ITEM', payload: { coffeeId } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    subtotalInCents,
    deliveryFeeInCents: DELIVERY_FEE_IN_CENTS,
    totalInCents,
    itemCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export { getItemSubtotalInCents }
