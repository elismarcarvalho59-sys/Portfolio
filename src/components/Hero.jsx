export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <div className="hero-photo-wrapper">
          <div className="photo-glow"></div>
          <div className="photo-frame">
            <img src="/perfil.jpg" alt="Elismar Francelina de Carvalho" />
          </div>
          <div className="photo-decoration"></div>
        </div>
        <div className="hero-text">
          <p className="hero-greeting">Olá, eu sou</p>
          <h1 className="hero-name">Elismar Francelina<br /><span>de Carvalho</span></h1>
          <p className="hero-tagline">Profissional dedicada em constante evolução</p>
          <div className="hero-actions">
            <a href="#sobre" className="btn btn-primary">
              <i className="fas fa-arrow-down"></i> Conhecer mais
            </a>
            <a href="#contato" className="btn btn-outline">
              <i className="fas fa-envelope"></i> Contato
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}
