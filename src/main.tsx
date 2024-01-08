import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/index.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)
