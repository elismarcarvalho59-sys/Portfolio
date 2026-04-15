export default function Contato() {
  return (
    <section className="section contato" id="contato">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-paper-plane"></i> Fale comigo</span>
          <h2 className="section-title">Contato</h2>
          <div className="title-line"></div>
        </div>
        <div className="contato-wrapper">
          <div className="contato-card glass-card">
            <div className="contato-icon"><i className="fas fa-envelope"></i></div>
            <h3>E-mail</h3>
            <a href="mailto:elismarcarvalho59@gmail.com">elismarcarvalho59@gmail.com</a>
          </div>
          <div className="contato-card glass-card">
            <div className="contato-icon"><i className="fab fa-github"></i></div>
            <h3>GitHub</h3>
            <a href="https://github.com/elismarcarvalho59-sys" target="_blank" rel="noopener noreferrer">github.com/elismarcarvalho59-sys</a>
          </div>
        </div>
      </div>
    </section>
  )
}
