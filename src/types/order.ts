import type { CartItem } from './cart'

export type PaymentMethod = 'credit-card' | 'debit-card' | 'cash'

export interface DeliveryAddress {
  postalCode: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
}

export interface Order {
  id: string
  items: CartItem[]
  address: DeliveryAddress
  paymentMethod: PaymentMethod
  subtotalInCents: number
  deliveryFeeInCents: number
  totalInCents: number
  createdAt: string
}
