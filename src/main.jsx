import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashBoard from './pages/DashBoard.jsx'
import Headers from './Headers.jsx'
import "./styles/Headers.css"
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <Headers />
    <DashBoard />
  </>
  // </StrictMode>,
)
