import React from 'react'
import Tarjetas from './Home/Tarjetas'
import Encabezado from './Home/Encabezado'
import './Layouts.css'
import Footer from './Home/Footer'
import SistemaSolarBanner from './Home/SistemaSolarBanner'

function Layouts() {
  return (
    <>
      <Encabezado />
      <SistemaSolarBanner />
      <Tarjetas />
      <Footer />
    </>
  )
}

export default Layouts