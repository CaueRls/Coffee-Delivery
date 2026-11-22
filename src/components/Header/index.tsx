import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext/ThemeContext'
import { useCart } from '../../contexts/CartContext/CartContext'
import './styles.css'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { itemCount } = useCart()

  return (
    <header className="header">
      <p className="header__topline" aria-hidden="true">Est. século XX • Anúncios clássicos</p>
      <Link to="/" className="header__brand" aria-label="Cup O'Clock - página inicial">
        <span className="header__brand-name">Cup O&apos;Clock</span>
      </Link>
      <p className="header__tagline">Café fresco com estilo de anúncio vintage</p>
      <div className="header__bar">
        <nav className="header__nav" aria-label="Navegação principal">
          <Link to="/" className="header__link">Início</Link>
          <Link to="/checkout" className="header__link">
            Carrinho{itemCount > 0 ? ` (${itemCount})` : ''}
          </Link>
        </nav>
        <div className="header__actions">
          <button
            type="button"
            className="header__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          </button>
        </div>
      </div>
    </header>
  )
}
