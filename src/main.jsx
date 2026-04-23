import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='selection:bg-yellow-400 selection:text-black'>
      <App />
    </div>,
  </BrowserRouter>
)
