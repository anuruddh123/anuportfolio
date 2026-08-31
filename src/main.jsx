import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// --- Console Signature ---
if (typeof window !== 'undefined') {
  console.log(
    '%c ANURUDDH TIWARI %c PORTFOLIO %c',
    'background: #111; color: #fff; padding: 5px 10px; font-weight: bold; border-radius: 3px 0 0 3px;',
    'background: #3b82f6; color: #fff; padding: 5px 10px; font-weight: bold; border-radius: 0 3px 3px 0;',
    'background: transparent'
  );
  console.log(
    '%cFull Stack Developer (MERN Stack) 🚀%c | anuruddhtiwari2022@gmail.com | +91 7307122757',
    'font-weight: bold; color: #3b82f6; font-size: 14px;',
    'color: #666; font-size: 14px;'
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
