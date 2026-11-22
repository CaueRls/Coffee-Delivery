import './styles.css'

type QuantitySelectorProps = {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  min?: number
}

export function QuantitySelector({ quantity, onIncrease, onDecrease, min = 1 }: QuantitySelectorProps) {
  return (
    <div className="quantity" role="group" aria-label="Selecionar quantidade">
      <button
        type="button"
        className="quantity__btn"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Diminuir quantidade"
      >
        −
      </button>
      <span className="quantity__value" aria-live="polite">{quantity}</span>
      <button
        type="button"
        className="quantity__btn"
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  )
}
