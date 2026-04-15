const itens = [
  {
    icon: 'fa-graduation-cap',
    data: 'Concluído',
    titulo: 'Formação Superior',
    texto: 'Graduação concluída com dedicação e excelência acadêmica, desenvolvendo competências essenciais para a atuação profissional.',
  },
  {
    icon: 'fa-book-open',
    data: 'Em andamento',
    titulo: 'Educação Continuada',
    texto: 'Participação em cursos, workshops e capacitações para aprimoramento contínuo das habilidades profissionais.',
  },
  {
    icon: 'fa-certificate',
    data: 'Certificações',
    titulo: 'Qualificações Complementares',
    texto: 'Certificações e qualificações adicionais que complementam a formação acadêmica e fortalecem o currículo.',
  },
]

export default function Formacao() {
  return (
    <section className="section formacao" id="formacao">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-graduation-cap"></i> Trajetória</span>
          <h2 className="section-title">Formação Acadêmica</h2>
          <div className="title-line"></div>
        </div>
        <div className="timeline">
          {itens.map(it => (
            <div key={it.titulo} className="timeline-item" data-animate>
              <div className="timeline-marker">
                <i className={`fas ${it.icon}`}></i>
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">{it.data}</span>
                <h3>{it.titulo}</h3>
                <p>{it.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
