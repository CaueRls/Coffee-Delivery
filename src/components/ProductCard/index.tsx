import { useState } from 'react'
import type { Coffee } from '../../types/coffee'
import { QuantitySelector } from '../QuantitySelector'
import './styles.css'

type ProductCardProps = {
  coffee: Coffee
  onAdd?: (coffee: Coffee, quantity: number) => void
}

function formatBRL(cents: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100)
}

export function ProductCard({ coffee, onAdd }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <article className="product-card">
      <img className="product-card__image" src={coffee.image} alt="" />
      {coffee.tags.length > 0 && (
        <div className="product-card__tags">
          {coffee.tags.map((tag) => (
            <span key={tag} className="product-card__tag">{tag}</span>
          ))}
        </div>
      )}
      <h3 className="product-card__name">{coffee.name}</h3>
      <p className="product-card__description">{coffee.description}</p>
      <div className="product-card__footer">
        <span className="product-card__price">{formatBRL(coffee.priceInCents)}</span>
        <div className="product-card__actions">
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          />
          <button
            type="button"
            className="product-card__add"
            onClick={() => onAdd?.(coffee, quantity)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}
