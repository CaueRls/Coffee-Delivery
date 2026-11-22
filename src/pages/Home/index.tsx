import { coffees } from '../../data/coffees'
import { ProductCard } from '../../components/ProductCard'
import './styles.css'

export function Home() {
  return (
    <div className="home">
      <section className="home__hero" aria-labelledby="hero-title">
        <div>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', color: 'var(--color-accent)' }}>
            Noite de jazz • Café especial
          </p>
          <h1 id="hero-title">Coffee Delivery</h1>
          <p>
            Encontre o café perfeito para qualquer hora do dia. Com entrega rápida e os melhores grãos,
            em clima inspirados nos anos 80.
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
              onAdd={(c, q) => {
                // Será conectado ao carrinho na Fase 7
                console.log('Adicionar ao carrinho (placeholder):', c.name, q)
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
