import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './components/DesignContent/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomePage /> */}
    <App />
  </StrictMode>,
)
