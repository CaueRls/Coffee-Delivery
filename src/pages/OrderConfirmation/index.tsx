import { Link, useLocation } from 'react-router-dom'
import type { Order } from '../../types/order'
import { formatBRLFromCents } from '../../utils/currency'

type LocationState = { order?: Order }

const paymentLabels: Record<string, string> = {
  'credit-card': 'Cartão de crédito',
  'debit-card': 'Cartão de débito',
  'cash': 'Dinheiro',
}

export function OrderConfirmation() {
  const location = useLocation()
  const state = (location.state as LocationState | null) ?? {}
  const order = state.order

  if (!order) {
    return (
      <main style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h1>Pedido não encontrado</h1>
        <p>Não encontramos dados de um pedido recente.</p>
        <Link to="/">Voltar ao catálogo</Link>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ color: 'var(--color-primary)' }}>Pedido confirmado!</h1>
      <p>Seu pedido fictício foi registrado com sucesso.</p>
      <section style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem' }}>Entrega</h2>
        <p>
          {order.address.street}, {order.address.number}
          {order.address.complement ? ` - ${order.address.complement}` : ''}<br />
          {order.address.district} - {order.address.city}/{order.address.state}<br />
          CEP: {order.address.postalCode}
        </p>
      </section>
      <section style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem' }}>Pagamento</h2>
        <p>{paymentLabels[order.paymentMethod] ?? order.paymentMethod}</p>
      </section>
      <section style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem' }}>Resumo</h2>
        <ul>
          {order.items.map((item) => (
            <li key={item.coffeeId}>
              {item.quantity}x {item.coffee.name} — {formatBRLFromCents(item.coffee.priceInCents * item.quantity)}
            </li>
          ))}
        </ul>
        <p>Itens: {formatBRLFromCents(order.subtotalInCents)}</p>
        <p>Entrega: {formatBRLFromCents(order.deliveryFeeInCents)}</p>
        <p><strong>Total: {formatBRLFromCents(order.totalInCents)}</strong></p>
      </section>
      <p style={{ marginTop: '2rem' }}>
        <Link to="/">Fazer novo pedido</Link>
      </p>
    </main>
  )
}
