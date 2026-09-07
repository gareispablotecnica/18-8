import React from 'react'
// import Tarjetas from './Home/Tarjetas'
import Encabezado from './Home/Encabezado'
import './Layouts.css'
import Footer from './Home/Footer'
import SistemaSolarBanner from './Home/SistemaSolarBanner'
import Registrar from './Pages/Registrar'

function Layouts() {
  return (
    <>
      <Encabezado />
      <SistemaSolarBanner />
      {/* <Tarjetas /> */}
      <Registrar />
      <Footer />
    </>
  )
}

export default Layouts