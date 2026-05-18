import { useState, useEffect } from 'react'
import styles from './ScrollProgress.module.scss'

const SECTIONS = [
  { id: 'inicio',       label: 'Inicio' },
  { id: 'soluciones',   label: 'Problemas' },
  { id: 'productos',    label: 'Sistema académico' },
  { id: 'generador-ia', label: 'Generador IA' },
  { id: 'nichos',       label: 'Nichos' },
  { id: 'contacto',     label: 'Contacto' },
]

export default function ScrollProgress() {
  const [active, setActive]     = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      // Top progress bar
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)

      // Active section via IntersectionObserver-style check
      const mid = window.scrollY + window.innerHeight * 0.45
      let best = 0
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id)
        if (el && el.offsetTop <= mid) best = i
      })
      setActive(best)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className={styles.bar} style={{ width: `${progress}%` }} aria-hidden />

      <nav className={styles.dots} aria-label="Navegación por secciones">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => scrollTo(s.id)}
            title={s.label}
            aria-label={s.label}
          >
            <span className={styles.tooltip}>{s.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
