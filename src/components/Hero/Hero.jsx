import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.scss'

const slides = [
  {
    img: '/img/item1.webp',
    tag: 'Dashboard en tiempo real',
    caption: 'Recaudación, asistencia y matrículas en una sola pantalla. Sin abrir un Excel más.',
  },
  {
    img: '/img/item2.webp',
    tag: 'Plataforma digital',
    caption: 'Tu alumno en su plataforma digital. Tu docente, libre del papeleo. Así se aprende más.',
  },
  {
    img: '/img/item3.webp',
    tag: 'Elimina el papel',
    caption: 'Este cuaderno termina hoy. Digitaliza registros, notas y cobros desde el primer día.',
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
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4200)
    return () => clearInterval(id)
  }, [paused])

  const prev = () => { setPaused(true); setCurrent(c => (c - 1 + slides.length) % slides.length) }
  const next = () => { setPaused(true); setCurrent(c => (c + 1) % slides.length) }
  const go   = (i) => { setPaused(true); setCurrent(i) }

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>

        <div className={`${styles.textSide}`} ref={textRef}>
          <span className={styles.badge}>Software educativo · Hecho en Perú</span>
          <h1 className={styles.headline}>
            Tu colegio no necesita<br />más Excel. Necesita un
            <em> sistema que trabaje por ti.</em>
          </h1>
          <p className={styles.sub}>
            Desarrollamos software a medida para colegios, academias e instituciones
            educativas en Perú. Inversión pequeña, resultados desde el primer mes.
          </p>
          <div className={styles.actions}>
            <a href="#productos" className="btn btn--primary">Ver el sistema académico</a>
            <a href="#generador-ia" className="btn btn--secondary">Soy docente, quiero el generador IA</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><strong>8 semanas</strong><span>de entrega promedio</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><strong>100%</strong><span>a medida</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><strong>Soporte</strong><span>directo por WhatsApp</span></div>
          </div>
        </div>

        <div className={styles.carouselWrap}>
          <div
            className={styles.carouselTrack}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
                aria-hidden={i !== current}
              >
                <img src={s.img} alt={s.tag} className={styles.slideImg} loading="lazy" />
                <div className={styles.slideCaption}>
                  <span className={styles.slideTag}>{s.tag}</span>
                  <p>{s.caption}</p>
                </div>
              </div>
            ))}

            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

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
        </div>

      </div>
    </section>
  )
}
