import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routes/Rutas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/Banner'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Rutas />
      <Footer />
    </BrowserRouter>
  )
}

export default App