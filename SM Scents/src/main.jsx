import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Route.jsx'
import './index.css'
import AppRouter from './Route.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>

  <AppRouter/>,
  </AuthContextProvider>
)
