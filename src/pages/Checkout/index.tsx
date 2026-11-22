import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { checkoutSchema, type CheckoutFormData } from '../../schemas/checkoutSchema'
import { useCart } from '../../contexts/CartContext/CartContext'
import { formatBRLFromCents } from '../../utils/currency'
import { QuantitySelector } from '../../components/QuantitySelector'
import type { Order } from '../../types/order'
import './styles.css'

export function Checkout() {
  const navigate = useNavigate()
  const {
    items,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    subtotalInCents,
    deliveryFeeInCents,
    totalInCents,
  } = useCart()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  if (items.length === 0) {
    return (
      <div className="checkout">
        <h1 className="checkout__title">Checkout</h1>
        <div className="checkout__section checkout__empty">
          <p>Seu carrinho está vazio.</p>
          <Link to="/">Voltar ao catálogo</Link>
        </div>
      </div>
    )
  }

  function onSubmit(data: CheckoutFormData) {
    const order: Order = {
      id: `ord_${Date.now()}`,
      items: items.map((i) => ({ ...i })),
      address: {
        postalCode: data.postalCode,
        street: data.street,
        number: data.number,
        complement: data.complement || undefined,
        district: data.district,
        city: data.city,
        state: data.state,
      },
      paymentMethod: data.paymentMethod,
      subtotalInCents,
      deliveryFeeInCents,
      totalInCents,
      createdAt: new Date().toISOString(),
    }
    clearCart()
    navigate('/order-confirmation', { state: { order } })
  }

  return (
    <div className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <div className="checkout__grid">
        <section className="checkout__section" aria-labelledby="cart-review-title">
          <h2 id="cart-review-title">Revise seu pedido</h2>
          {items.map((item) => (
            <div key={item.coffeeId} className="checkout__item">
              <div className="checkout__item-info">
                <p className="checkout__item-name">{item.coffee.name}</p>
                <p className="checkout__item-price">
                  {formatBRLFromCents(item.coffee.priceInCents)} cada
                </p>
              </div>
              <div className="checkout__item-actions">
                <QuantitySelector
                  quantity={item.quantity}
                  onIncrease={() => increaseItem(item.coffeeId)}
                  onDecrease={() => decreaseItem(item.coffeeId)}
                />
                <button
                  type="button"
                  className="checkout__remove"
                  onClick={() => removeItem(item.coffeeId)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '1rem' }}>
            <div className="checkout__summary-row">
              <span>Itens</span>
              <span>{formatBRLFromCents(subtotalInCents)}</span>
            </div>
            <div className="checkout__summary-row">
              <span>Entrega</span>
              <span>{formatBRLFromCents(deliveryFeeInCents)}</span>
            </div>
            <div className="checkout__summary-row checkout__summary-total">
              <span>Total</span>
              <span>{formatBRLFromCents(totalInCents)}</span>
            </div>
          </div>
        </section>

        <section className="checkout__section" aria-labelledby="address-title">
          <h2 id="address-title">Endereço e pagamento</h2>
          <form className="checkout__form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="checkout__field">
              <label htmlFor="postalCode">CEP *</label>
              <input id="postalCode" {...register('postalCode')} placeholder="00000-000" />
              {errors.postalCode && <p className="checkout__error">{errors.postalCode.message}</p>}
            </div>
            <div className="checkout__field">
              <label htmlFor="street">Rua *</label>
              <input id="street" {...register('street')} />
              {errors.street && <p className="checkout__error">{errors.street.message}</p>}
            </div>
            <div className="checkout__field">
              <label htmlFor="number">Número *</label>
              <input id="number" {...register('number')} />
              {errors.number && <p className="checkout__error">{errors.number.message}</p>}
            </div>
            <div className="checkout__field">
              <label htmlFor="complement">Complemento</label>
              <input id="complement" {...register('complement')} />
            </div>
            <div className="checkout__field">
              <label htmlFor="district">Bairro *</label>
              <input id="district" {...register('district')} />
              {errors.district && <p className="checkout__error">{errors.district.message}</p>}
            </div>
            <div className="checkout__field">
              <label htmlFor="city">Cidade *</label>
              <input id="city" {...register('city')} />
              {errors.city && <p className="checkout__error">{errors.city.message}</p>}
            </div>
            <div className="checkout__field">
              <label htmlFor="state">UF *</label>
              <input id="state" {...register('state')} maxLength={2} placeholder="SP" />
              {errors.state && <p className="checkout__error">{errors.state.message}</p>}
            </div>
            <div className="checkout__field">
              <label htmlFor="paymentMethod">Pagamento *</label>
              <select id="paymentMethod" {...register('paymentMethod')} defaultValue="">
                <option value="" disabled>Selecione...</option>
                <option value="credit-card">Cartão de crédito</option>
                <option value="debit-card">Cartão de débito</option>
                <option value="cash">Dinheiro</option>
              </select>
              {errors.paymentMethod && <p className="checkout__error">{errors.paymentMethod.message}</p>}
            </div>
            <button className="checkout__submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Confirmando...' : 'Confirmar pedido'}
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
