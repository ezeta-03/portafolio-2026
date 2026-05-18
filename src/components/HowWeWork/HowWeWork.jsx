import useScrollReveal from '../../hooks/useScrollReveal'
import styles from './HowWeWork.module.scss'

const steps = [
  {
    n: '01',
    title: 'Conversamos',
    desc: 'Entendemos tu realidad — sin tecnicismos ni formularios eternos.',
  },
  {
    n: '02',
    title: 'Prototipo real',
    desc: 'Te mostramos un prototipo con los datos de tu colegio.',
  },
  {
    n: '03',
    title: 'Construimos',
    desc: 'Desarrollamos el sistema a tu medida, módulo a módulo.',
  },
  {
    n: '04',
    title: 'Capacitamos',
    desc: 'Formamos a tu equipo y quedamos disponibles por WhatsApp.',
  },
]

export default function HowWeWork() {
  const titleRef = useScrollReveal()

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`fade-in ${styles.header}`} ref={titleRef}>
          <h2 className="section-title">
            De la conversación al sistema<br />funcionando en 8 semanas.
          </h2>
          <p className="section-subtitle">
            Un proceso claro y sin sorpresas. Tú siempre sabes en qué etapa estamos.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <Step key={s.n} {...s} delay={i * 100} />
          ))}
        </div>

        <div className={`fade-in ${styles.closing}`} ref={useScrollReveal()}>
          <p>No compras software genérico. Compras una solución diseñada para ti.</p>
        </div>
      </div>
    </section>
  )
}

function Step({ n, title, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      className={`fade-in ${styles.step}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.stepNum}>{n}</div>
      <div className={styles.connector} />
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
