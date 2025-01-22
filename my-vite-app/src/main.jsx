import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nameyouwant from 'c:/Users/ShemarHouston/Documents/okay/my-vite-app/src/nameyouwant'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Nameyouwant/> */}
  </StrictMode>,
)
