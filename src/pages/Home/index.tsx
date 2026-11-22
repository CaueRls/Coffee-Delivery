import { coffees } from '../../data/coffees'
import { ProductCard } from '../../components/ProductCard'
import { useCart } from '../../contexts/CartContext/CartContext'
import './styles.css'

export function Home() {
  const { addItem } = useCart()

  return (
    <div className="home">
      <section className="home__hero" aria-labelledby="hero-title">
        <div>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', color: 'var(--color-accent)' }}>
            Qualidade desde sempre • Anúncio clássico
          </p>
          <h1 id="hero-title">O melhor café, entregue a você</h1>
          <p>
            Escolha seu favorito, receba em casa. Sabores selecionados com o charme dos anúncios do século passado.
          </p>
        </div>
      </section>

      <section aria-labelledby="catalog-title">
        <h2 id="catalog-title" className="home__section-title">Nossos cafés</h2>
        <div className="home__grid">
          {coffees.map((coffee) => (
            <ProductCard
              key={coffee.id}
              coffee={coffee}
              onAdd={(c, q) => addItem(c, q)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
