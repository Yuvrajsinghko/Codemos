import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='selection:bg-yellow-400 selection:text-black'>
    <App />
  </div>,
)
