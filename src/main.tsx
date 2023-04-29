import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './pages/Router'
import './css/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)