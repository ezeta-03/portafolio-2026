import useScrollReveal from '../../hooks/useScrollReveal'
import { waLink } from '../../utils/whatsapp'
import {
  IconUsers, IconClipboard, IconFileText, IconCheckCircle,
  IconCreditCard, IconDashboard, IconGraduate, IconSparkle,
} from '../Icon/Icon'
import styles from './ProductAcademico.module.scss'

const modules = [
  { Icon: IconUsers,       name: 'Gestión de alumnos' },
  { Icon: IconClipboard,   name: 'Matrícula digital' },
  { Icon: IconFileText,    name: 'Notas y libretas PDF' },
  { Icon: IconCheckCircle, name: 'Asistencia · alertas WhatsApp' },
  { Icon: IconCreditCard,  name: 'Cobranza y pagos' },
  { Icon: IconDashboard,   name: 'Dashboard del director' },
  { Icon: IconGraduate,    name: 'Módulo docentes' },
]

export default function ProductAcademico() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const waHref = waLink('Hola, vi el sistema académico de Nexio y me interesa para mi colegio. ¿Podemos conversar?')

  return (
    <section className={styles.section} id="productos">
      <div className="container">
        <div className={styles.grid}>
          <div className={`fade-in-left ${styles.text}`} ref={leftRef}>
            <span className={styles.label}>Producto 01</span>
            <h2>Sistema académico completo, a medida para tu colegio.</h2>
            <p className={styles.desc}>
              Un solo sistema para manejar todo lo que hoy haces en hojas de cálculo,
              papeles y mensajes. Diseñado con el flujo real de tu institución, no con
              funciones genéricas que nadie usa.
            </p>

            <div className={styles.modules}>
              {modules.map(m => (
                <div key={m.name} className={styles.moduleChip}>
                  <span className={styles.chipIcon}><m.Icon size={15} /></span>
                  <span>{m.name}</span>
                </div>
              ))}
            </div>

            <div className={styles.badge}>
              <IconSparkle size={16} />
              Incluye generador IA de sesiones de clase
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WaIcon />
              Me interesa este sistema
            </a>
          </div>

          <div className={`scale-in ${styles.visual}`} ref={rightRef}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.mockupBar}>
        <span /><span /><span />
        <div className={styles.mockupUrl}>sistema.nexio.pe</div>
      </div>
      <div className={styles.mockupBody}>
        <div className={styles.mockupSidebar}>
          {['Dashboard', 'Alumnos', 'Matrícula', 'Notas', 'Asistencia', 'Cobranza'].map(s => (
            <div key={s} className={styles.mockupSideItem}>{s}</div>
          ))}
        </div>
        <div className={styles.mockupMain}>
          <div className={styles.mockupTitle}>Dashboard del director</div>
          <div className={styles.mockupCards}>
            <div className={styles.mockupCard}>
              <span className={styles.mockupNum}>248</span>
              <span>Alumnos activos</span>
            </div>
            <div className={styles.mockupCard}>
              <span className={styles.mockupNum} style={{color: '#e55'}}>12</span>
              <span>Pagos pendientes</span>
            </div>
            <div className={styles.mockupCard}>
              <span className={styles.mockupNum}>94%</span>
              <span>Asistencia hoy</span>
            </div>
          </div>
          <div className={styles.mockupChartLabel}>Recaudación mensual</div>
          <div className={styles.mockupChart}>
            {[60, 80, 55, 90, 75, 95, 70].map((h, i) => (
              <div key={i} className={styles.mockupBar2} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
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
