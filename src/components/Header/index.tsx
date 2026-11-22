import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext/ThemeContext'
import './styles.css'

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <Link to="/" className="header__brand" aria-label="Coffee Delivery - página inicial">
        <span className="header__brand-mark" aria-hidden="true">CD</span>
        <span>Coffee Delivery</span>
      </Link>
      <nav className="header__nav" aria-label="Navegação principal">
        <Link to="/" className="header__link">Início</Link>
        <Link to="/checkout" className="header__link">Carrinho / Checkout</Link>
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
    </header>
  )
}
