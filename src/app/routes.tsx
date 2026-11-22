import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { OrderConfirmation } from '../pages/OrderConfirmation'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
