import { AppRoutes } from './app/routes'
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
