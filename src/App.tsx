import { AppRoutes } from './app/routes'
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext'
import { CartProvider } from './contexts/CartContext/CartContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
