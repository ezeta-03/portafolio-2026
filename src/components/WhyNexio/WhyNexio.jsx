import useScrollReveal from '../../hooks/useScrollReveal'
import { IconTarget, IconMessage, IconZap, IconTrending } from '../Icon/Icon'
import styles from './WhyNexio.module.scss'

const reasons = [
  {
    Icon: IconTarget,
    title: 'A medida — sin funciones de relleno',
    desc: 'Pagas solo lo que usas. El sistema se construye sobre los procesos reales de tu colegio.',
  },
  {
    Icon: IconMessage,
    title: 'Soporte directo, mismo día',
    desc: 'WhatsApp con el desarrollador. Sin tickets, sin bots, sin esperas. Promedio de respuesta: 2 horas.',
  },
  {
    Icon: IconZap,
    title: 'Sistema funcionando en 6–8 semanas',
    desc: 'Ves avances desde la primera semana. No es una promesa — es el proceso que seguimos.',
  },
  {
    Icon: IconTrending,
    title: 'Se paga solo desde el primer mes',
    desc: 'Si recuperas 2 moras que antes se perdían, el sistema ya se amortizó. El ahorro de horas es extra.',
  },
]

export default function WhyNexio() {
  const photoRef  = useScrollReveal()
  const blocksRef = useScrollReveal()

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left — photo + quote */}
          <div className={`fade-in-left ${styles.photoCol}`} ref={photoRef}>
            <div className={styles.photoWrap}>
              <img
                src="/img/sesiones_de_clase.webp"
                alt="Docente trabajando con el sistema Nexio"
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles.photoAccent} />
              <div className={styles.quoteCard}>
                <svg className={styles.quoteIcon} width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.25">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
                <blockquote>
                  "Recuperé dos moras del primer mes. El sistema se pagó solo antes de terminar la implementación."
                </blockquote>
                <cite>— Director de colegio privado, Lima</cite>
              </div>
            </div>
          </div>

          {/* Right — benefit blocks */}
          <div className={`fade-in-right ${styles.blocksCol}`} ref={blocksRef}>
            <h2 className={styles.title}>Por qué los directores eligen Nexio</h2>
            <p className={styles.sub}>
              No somos una empresa genérica de software. Somos un desarrollador especializado
              en el problema específico de colegios como el tuyo.
            </p>
            <div className={styles.blocks}>
              {reasons.map((r, i) => (
                <ReasonBlock key={r.title} {...r} delay={i * 90} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ReasonBlock({ Icon, title, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <div className={`fade-in ${styles.block}`} ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <span className={styles.icon}><Icon size={20} /></span>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
