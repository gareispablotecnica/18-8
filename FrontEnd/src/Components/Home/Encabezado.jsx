import React from 'react'
import Logo from '../../static/Logo.gif'

function Encabezado() {
  return (
    <>
    {/* header.encabezado>img+nav.menu>a +Enter */}
        <header className='encabezado'>
            <img src={Logo} alt="" />
            <nav className='menu'>
                <a href="">Registrar</a>
                <a href="">Ver Planetas</a>
                <a href="">Contactos</a>
            </nav>
        </header>
    </>
  )
}

export default Encabezado