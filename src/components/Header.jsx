import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#formacao', label: 'Formação' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const onDocClick = (e) => {
      if (
        toggleRef.current && !toggleRef.current.contains(e.target) &&
        linksRef.current && !linksRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onDocClick)
    }
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-brand">
        <span className="brand-icon"><i className="fas fa-graduation-cap"></i></span>
        <span className="brand-text">Elismar Carvalho</span>
      </div>
      <button
        ref={toggleRef}
        className={`nav-toggle${open ? ' active' : ''}`}
        id="navToggle"
        aria-label="Menu"
        onClick={() => setOpen(o => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        ref={linksRef}
        className={`nav-links${open ? ' active' : ''}`}
        id="navLinks"
      >
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
