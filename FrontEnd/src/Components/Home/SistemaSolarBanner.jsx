const planets = [
  { name: 'Mercurio', className: 'planet-mercury' },
  { name: 'Venus', className: 'planet-venus' },
  { name: 'Tierra', className: 'planet-earth' },
  { name: 'Marte', className: 'planet-mars' },
  { name: 'Júpiter', className: 'planet-jupiter' },
  { name: 'Saturno', className: 'planet-saturn' },
]

export default function SistemaSolarBanner() {
  return (
    <section className="solar-hero" aria-labelledby="solar-title">
      <div className="star-field" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Atlas astronómico · 01</p>
        <h1 id="solar-title">Explora el<br /><em>sistema solar</em></h1>
        <p className="hero-description">Descubre los planetas, sus características y los misterios que orbitan nuestro vecindario cósmico.</p>
        <a className="hero-link" href="#planetas">Explorar planetas <span aria-hidden="true">↗</span></a>
      </div>
      <div className="solar-stage" aria-label="Representación animada del sistema solar">
        <div className="orbit orbit-one"><span className="planet planet-mercury" /></div>
        <div className="orbit orbit-two"><span className="planet planet-venus" /></div>
        <div className="orbit orbit-three"><span className="planet planet-earth" /></div>
        <div className="orbit orbit-four"><span className="planet planet-mars" /></div>
        <div className="orbit orbit-five"><span className="planet planet-jupiter" /></div>
        <div className="orbit orbit-six"><span className="planet planet-saturn"><span className="saturn-ring" /></span></div>
        <div className="sun"><span /></div>
        <div className="stage-label stage-label-top">Sistema solar <strong>/ 8 planetas</strong></div>
        <div className="stage-label stage-label-bottom">Distancia media <strong>4.6B km</strong></div>
      </div>
      <p className="scroll-hint"><span /> Desplaza para descubrir</p>
    </section>
  )
}

export { planets }
