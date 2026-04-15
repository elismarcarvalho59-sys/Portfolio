import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Formacao from './components/Formacao.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    // Partículas
    const container = document.getElementById('particles')
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div')
        p.classList.add('particle')
        p.style.left = Math.random() * 100 + '%'
        p.style.animationDelay = Math.random() * 8 + 's'
        p.style.animationDuration = (6 + Math.random() * 6) + 's'
        const size = (2 + Math.random() * 3) + 'px'
        p.style.width = size
        p.style.height = size
        container.appendChild(p)
      }
    }

    // IntersectionObserver para [data-animate]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('[data-animate]').forEach((el, index) => {
      el.style.transitionDelay = (index * 0.15) + 's'
      observer.observe(el)
    })

    // Active nav link on scroll
    const sections = document.querySelectorAll('.section, .hero')
    const navLinksAll = document.querySelectorAll('.nav-links a')
    const onScroll = () => {
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id')
        }
      })
      navLinksAll.forEach(link => {
        link.style.color = ''
        if (link.getAttribute('href') === '#' + current) {
          link.style.color = '#e8a0bf'
        }
      })
    }
    window.addEventListener('scroll', onScroll)

    // Smooth scroll para âncoras
    const anchorHandler = function (e) {
      const href = this.getAttribute('href')
      if (href && href.length > 1) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(a => a.addEventListener('click', anchorHandler))

    return () => {
      window.removeEventListener('scroll', onScroll)
      anchors.forEach(a => a.removeEventListener('click', anchorHandler))
    }
  }, [])

  return (
    <>
      <div className="light-particles" id="particles"></div>
      <Header />
      <Hero />
      <Sobre />
      <Formacao />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}
