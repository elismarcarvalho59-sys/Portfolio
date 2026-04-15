const cards = [
  {
    icon: 'fa-heart',
    titulo: 'Quem sou eu',
    texto: 'Sou Elismar Francelina de Carvalho, uma profissional apaixonada pelo conhecimento e pelo crescimento pessoal. Acredito que a educação é a chave para transformar vidas e abrir novas oportunidades.',
  },
  {
    icon: 'fa-bullseye',
    titulo: 'Meu Objetivo',
    texto: 'Busco constantemente me desenvolver profissionalmente, aplicando meus conhecimentos para fazer a diferença no ambiente de trabalho e contribuir positivamente com a sociedade.',
  },
  {
    icon: 'fa-star',
    titulo: 'Meus Valores',
    texto: 'Comprometimento, ética, dedicação e respeito são os pilares que guiam minha trajetória profissional e pessoal. Valorizo o trabalho em equipe e a colaboração.',
  },
]

export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-user"></i> Conheça-me</span>
          <h2 className="section-title">Sobre Mim</h2>
          <div className="title-line"></div>
        </div>
        <div className="sobre-content">
          {cards.map(c => (
            <div key={c.titulo} className="sobre-card glass-card">
              <div className="sobre-icon"><i className={`fas ${c.icon}`}></i></div>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
