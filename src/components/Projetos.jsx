import { projetos } from '../data/projetos.js'

export default function Projetos() {
  return (
    <section className="section projetos" id="projetos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-briefcase"></i> Experiências</span>
          <h2 className="section-title">Projetos</h2>
          <div className="title-line"></div>
        </div>
        <div className="projetos-grid">
          {projetos.map(p => (
            <div key={p.id} className="projeto-card glass-card" data-animate>
              <div className="sobre-icon"><i className={`fas ${p.icon}`}></i></div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className="projeto-tags">
                {p.categorias.map(c => (
                  <span key={c} className="projeto-tag">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
