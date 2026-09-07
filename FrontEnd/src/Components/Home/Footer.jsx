import React from 'react'
import Logo from '../../static/Logo.gif'

function Footer() {
  return (
    <footer className="pie-pagina">
      <div className="footer-contenido">
        <div className="footer-brand">
          <img src={Logo} alt="Logo Sistema Solar" className="footer-logo" />
          <p>Explorando los confines del sistema solar.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#registrar">Registrar</a></li>
            <li><a href="#planetas">Ver Planetas</a></li>
            <li><a href="#contactos">Contactos</a></li>
          </ul>
        </div>

        <div className="footer-redes">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#twitter" aria-label="Twitter">🌌</a>
            <a href="#github" aria-label="GitHub">🚀</a>
            <a href="#discord" aria-label="Discord">🪐</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sistema Solar. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer