import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ModoOscuroProvider } from "./contexts/DarkMode"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <ModoOscuroProvider>
    <App />
    </ModoOscuroProvider>
  </React.StrictMode>
  </BrowserRouter>,
)
