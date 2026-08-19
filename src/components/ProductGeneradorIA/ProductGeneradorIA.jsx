import { useState, useEffect } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import { waLink } from '../../utils/whatsapp'
import styles from './ProductGeneradorIA.module.scss'



const includes = [
  'Competencias y capacidades del área',
  'Desempeños esperados por grado',
  'Evidencias de aprendizaje',
  'Estrategias metodológicas',
  'Temporalización de actividades',
  'Formato listo para firmar',
]

const plans = [
  {
    name: 'Básico',
    price: 'S/19', period: '/mes', desc: '5 sesiones al mes',
    waMsg: 'Hola, me interesa el plan Básico del generador IA de Nexio (S/19/mes · 5 sesiones). ¿Cómo empiezo?',
  },
  {
    name: 'Profesional',
    price: 'S/29', period: '/mes', desc: 'Sesiones ilimitadas', highlight: true,
    waMsg: 'Hola, me interesa el plan Profesional del generador IA de Nexio (S/29/mes · sesiones ilimitadas). ¿Cómo empiezo?',
  },
  {
    name: 'Institución',
    price: 'S/120', period: '/mes', desc: 'Hasta 10 docentes',
    waMsg: 'Hola, me interesa el plan Institución del generador IA de Nexio (S/120/mes · hasta 10 docentes). ¿Podemos conversar?',
  },
]

export default function ProductGeneradorIA() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const waHref = waLink('Hola, me interesa el generador de sesiones con IA. ¿Cómo funciona?')

  return (
    <section className={styles.section} id="generador-ia">
      <div className="container">
        <div className={styles.grid}>
          <div className={`scale-in ${styles.visual}`} ref={leftRef}>
            <GeneradorMockup />
          </div>

          <div className={`fade-in-right ${styles.text}`} ref={rightRef}>
            <span className={styles.label}>Producto 02</span>
            <h2>¿Cuántas horas a la semana pierdes documentando sesiones?</h2>
            <p className={styles.sub}>
              Generamos tu sesión de clase completa en 10 minutos, basada en el
              Currículo Nacional del MINEDU.
            </p>

            <div className={styles.steps}>
              {[
                { n: '1', text: 'Ingresas grado, área y tema' },
                { n: '2', text: 'La IA genera la sesión completa' },
                { n: '3', text: 'Descargas en PDF o Word listo para firmar' },
              ].map(s => (
                <div key={s.n} className={styles.step}>
                  <span className={styles.stepNum}>{s.n}</span>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>

            <ul className={styles.includesList}>
              {includes.map(item => (
                <li key={item}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.plans}>
              {plans.map(p => (
                <a
                  key={p.name}
                  href={waLink(p.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.plan} ${p.highlight ? styles.planHighlight : ''}`}
                >
                  <span className={styles.planName}>{p.name}</span>
                  <div className={styles.planPrice}>
                    <strong>{p.price}</strong>
                    <span>{p.period}</span>
                  </div>
                  <span className={styles.planDesc}>{p.desc}</span>
                  <span className={styles.planCta}>Contratar →</span>
                </a>
              ))}
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WaIcon />
              Quiero el generador IA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Phases: 0=reset/wait  1=typing field1  2=typing field2  3=typing field3
//         4=generating  5=result shown   (then back to 0)
const T1 = '4.° Primaria'
const T2 = 'Matemática'
const T3 = 'Fracciones equivalentes'

function GeneradorMockup() {
  const [phase, setPhase]   = useState(0)
  const [f1, setF1]         = useState('')
  const [f2, setF2]         = useState('')
  const [f3, setF3]         = useState('')

  useEffect(() => {
    let t
    if (phase === 0) {
      setF1(''); setF2(''); setF3('')
      t = setTimeout(() => setPhase(1), 900)
    } else if (phase === 1) {
      if (f1.length < T1.length) {
        t = setTimeout(() => setF1(T1.slice(0, f1.length + 1)), 75)
      } else {
        t = setTimeout(() => setPhase(2), 450)
      }
    } else if (phase === 2) {
      if (f2.length < T2.length) {
        t = setTimeout(() => setF2(T2.slice(0, f2.length + 1)), 80)
      } else {
        t = setTimeout(() => setPhase(3), 450)
      }
    } else if (phase === 3) {
      if (f3.length < T3.length) {
        t = setTimeout(() => setF3(T3.slice(0, f3.length + 1)), 65)
      } else {
        t = setTimeout(() => setPhase(4), 700)
      }
    } else if (phase === 4) {
      t = setTimeout(() => setPhase(5), 2200)
    } else if (phase === 5) {
      t = setTimeout(() => setPhase(0), 4800)
    }
    return () => clearTimeout(t)
  }, [phase, f1, f2, f3])

  const isGenerating = phase === 4
  const showResult   = phase === 5

  return (
    <div className={styles.mockup}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupLogo}>Nexio IA</div>
        <div className={styles.mockupTag}>Generador de Sesiones</div>
      </div>
      <div className={styles.mockupBody}>

        <div className={styles.mockupField}>
          <label>Grado</label>
          <div className={`${styles.mockupInput} ${phase === 1 ? styles.mockupInputActive : ''}`}>
            {f1 || <span className={styles.placeholder}>Ej: 4.° Primaria</span>}
            {phase === 1 && <span className={styles.cursor} />}
          </div>
        </div>

        <div className={styles.mockupField}>
          <label>Área curricular</label>
          <div className={`${styles.mockupInput} ${phase === 2 ? styles.mockupInputActive : ''}`}>
            {f2 || <span className={styles.placeholder}>Ej: Matemática</span>}
            {phase === 2 && <span className={styles.cursor} />}
          </div>
        </div>

        <div className={styles.mockupField}>
          <label>Tema</label>
          <div className={`${styles.mockupInput} ${phase === 3 ? styles.mockupInputActive : ''}`}>
            {f3 || <span className={styles.placeholder}>Describe el tema de la clase</span>}
            {phase === 3 && <span className={styles.cursor} />}
          </div>
        </div>

        <button className={`${styles.mockupBtn} ${isGenerating ? styles.mockupBtnLoading : ''}`}>
          {isGenerating ? (
            <><Dots />Generando sesión...</>
          ) : 'Generar sesión'}
        </button>

        {showResult && (
          <div className={styles.mockupResult}>
            <div className={styles.mockupResultHeader}>
              <CheckIcon /> Sesión de aprendizaje generada
            </div>
            {['Competencias', 'Capacidades', 'Desempeños', 'Estrategias', 'Evaluación'].map((r, i) => (
              <div key={r} className={styles.mockupResultRow} style={{ animationDelay: `${i * 80}ms` }}>
                <span className={styles.mockupCheck}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span>{r}</span>
                <div className={styles.mockupLine} />
              </div>
            ))}
            <div className={styles.mockupActions}>
              <div className={styles.mockupActionBtn}>PDF</div>
              <div className={styles.mockupActionBtn}>Word</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Dots() {
  return (
    <span className={styles.loadingDots}>
      <span /><span /><span />
    </span>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.118 1.528 5.845L.057 23.943l6.25-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.031-1.38l-.36-.214-3.732.978.997-3.645-.236-.374A9.808 9.808 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}
