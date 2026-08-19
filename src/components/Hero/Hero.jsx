import { useState, useEffect, useRef } from 'react'
import { scrollTo } from '../../utils/scroll'
import styles from './Hero.module.scss'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1280&q=80&auto=format&fit=crop',
    tag: 'Alumnos conectados',
    caption: 'Aprendizaje con tecnología desde el primer día de clases.',
  },
  {
    img: 'https://images.unsplash.com/photo-1758685848174-e061c6486651?w=1280&q=80&auto=format&fit=crop',
    tag: 'Gestión desde el aula',
    caption: 'El docente registra notas, asistencia y tareas desde su laptop — sin papeles.',
  },
  {
    img: 'https://images.unsplash.com/photo-1677078611286-4d023c913878?w=1280&q=80&auto=format&fit=crop',
    tag: 'Gestión sin papeleo',
    caption: 'Notas, asistencia y cobros digitalizados. El director decide con datos.',
  },
]

export default function Hero() {
  const textRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => textRef.current?.classList.add(styles.visible), 120)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4800)
    return () => clearInterval(id)
  }, [paused])

  const prev = () => { setPaused(true); setCurrent(c => (c - 1 + slides.length) % slides.length) }
  const next = () => { setPaused(true); setCurrent(c => (c + 1) % slides.length) }
  const go   = (i) => { setPaused(true); setCurrent(i) }

  return (
    <section className={styles.hero} id="inicio">

      {/* Carrusel como fondo completo */}
      <div
        className={styles.carouselBg}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
            aria-hidden={i !== current}
          >
            <img src={s.img} alt={s.tag} className={styles.slideImg} />
          </div>
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Contenido de texto */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textSide} ref={textRef}>
          <span className={styles.badge}>Software educativo · Hecho en Perú</span>
          <h1 className={styles.headline}>
            Deja de administrar<br />tu institución en Excel.<br />
            <em>Empieza a dirigir con datos.</em>
          </h1>
          <p className={styles.sub}>
            Una plataforma completa para directores que quieren control real.
            Matrículas, cobros, asistencia y notas — en un solo sistema, hecho a medida.
          </p>
          <div className={styles.actions}>
            <a
              href="#productos"
              className="btn btn--primary"
              onClick={e => { e.preventDefault(); scrollTo('productos') }}
            >
              Ver la plataforma
            </a>
            <a
              href="#generador-ia"
              className="btn btn--secondary"
              onClick={e => { e.preventDefault(); scrollTo('generador-ia') }}
            >
              Generador IA para docentes
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>8 semanas</strong>
              <span>de implementación</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <strong>100%</strong>
              <span>personalizado</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <strong>Soporte</strong>
              <span>directo por WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info del slide activo — esquina inferior derecha */}
      <div className={styles.slideInfo}>
        <span className={styles.slideTag}>{slides[current].tag}</span>
        <p className={styles.slideCaption}>{slides[current].caption}</p>
      </div>

      {/* Flechas */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Indicadores de barra */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}