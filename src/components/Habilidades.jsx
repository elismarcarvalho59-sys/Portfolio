const skills = [
  { icon: 'fa-comments', titulo: 'Comunicação', texto: 'Habilidade para se expressar com clareza e eficiência em diferentes contextos.', filled: 4 },
  { icon: 'fa-users', titulo: 'Trabalho em Equipe', texto: 'Capacidade de colaborar e contribuir de forma positiva em ambientes coletivos.', filled: 5 },
  { icon: 'fa-brain', titulo: 'Resolução de Problemas', texto: 'Pensamento analítico para identificar soluções eficazes diante de desafios.', filled: 4 },
  { icon: 'fa-laptop', titulo: 'Informática', texto: 'Conhecimento em ferramentas digitais e aplicativos de escritório.', filled: 3 },
  { icon: 'fa-clock', titulo: 'Organização', texto: 'Gestão eficiente do tempo e das tarefas para alcançar resultados.', filled: 4 },
  { icon: 'fa-handshake', titulo: 'Liderança', texto: 'Capacidade de inspirar e guiar pessoas em direção a objetivos comuns.', filled: 4 },
]

export default function Habilidades() {
  return (
    <section className="section habilidades" id="habilidades">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-lightbulb"></i> Competências</span>
          <h2 className="section-title">Habilidades</h2>
          <div className="title-line"></div>
        </div>
        <div className="skills-grid">
          {skills.map(s => (
            <div key={s.titulo} className="skill-card glass-card" data-animate>
              <div className="skill-icon-ring"><i className={`fas ${s.icon}`}></i></div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <div className="skill-dots">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`dot${i < s.filled ? ' filled' : ''}`}></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
