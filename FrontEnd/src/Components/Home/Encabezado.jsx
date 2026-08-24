import React from 'react'
import Logo from '../../static/Logo.gif'

function Encabezado() {
  return (
    <>
    {/* header.encabezado>img+nav.menu>a +Enter */}
        <header className='encabezado'>
            <img src={Logo} alt="" />
            <nav className='menu'>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </nav>
        </header>
    </>
  )
}

export default Encabezado