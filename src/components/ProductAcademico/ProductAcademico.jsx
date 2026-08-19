import { useState, useEffect } from 'react'
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

// ── Vistas del mockup ──────────────────────────────

function ViewDashboard() {
  return (
    <>
      <div className={styles.mockupCards}>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum}>248</span>
          <span>Alumnos activos</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum} style={{ color: '#e05252' }}>12</span>
          <span>Pagos pendientes</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum}>94%</span>
          <span>Asistencia hoy</span>
        </div>
      </div>
      <div className={styles.mockupChartLabel}>Recaudación mensual</div>
      <div className={styles.mockupChart}>
        {[60, 78, 55, 90, 72, 95, 68].map((h, i) => (
          <div key={i} className={styles.mockupBarAnim} style={{ height: `${h}%` }} />
        ))}
      </div>
    </>
  )
}

function ViewAlumnos() {
  const rows = [
    { name: 'García, Ana M.', grade: '3°A', status: 'activo' },
    { name: 'López, Pedro R.', grade: '1°B', status: 'activo' },
    { name: 'Torres, María L.', grade: '5°A', status: 'deuda' },
    { name: 'Ramos, Juan C.', grade: '2°C', status: 'activo' },
    { name: 'Flores, Lucía P.', grade: '4°B', status: 'inactivo' },
  ]
  return (
    <>
      <div className={styles.viewSearch}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Buscar alumno...
      </div>
      <div className={styles.viewTable}>
        <div className={styles.viewHeader}>
          <span>Nombre</span><span>Grado</span><span>Estado</span>
        </div>
        {rows.map(r => (
          <div key={r.name} className={styles.viewRow}>
            <span>{r.name}</span>
            <span>{r.grade}</span>
            <span className={`${styles.viewBadge} ${styles[r.status]}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function ViewMatricula() {
  const grades = [
    { name: '1er grado', done: 42, total: 45 },
    { name: '2do grado', done: 38, total: 40 },
    { name: '3er grado', done: 31, total: 42 },
    { name: '4to grado', done: 36, total: 38 },
    { name: '5to grado', done: 43, total: 45 },
  ]
  return (
    <>
      <div className={styles.mockupCards}>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum}>190</span>
          <span>Matriculados</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum} style={{ color: '#e05252' }}>20</span>
          <span>Pendientes</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum}>210</span>
          <span>Total cupos</span>
        </div>
      </div>
      <div className={styles.viewGrades}>
        {grades.map(g => (
          <div key={g.name} className={styles.viewGradeRow}>
            <span className={styles.viewGradeName}>{g.name}</span>
            <div className={styles.viewPbarBg}>
              <div
                className={styles.viewPbarFill}
                style={{ width: `${Math.round((g.done / g.total) * 100)}%` }}
              />
            </div>
            <span className={styles.viewGradeCount}>{g.done}/{g.total}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function ViewNotas() {
  const subjects = [
    { name: 'Matemática',    t: [14, 16, 15], avg: 15 },
    { name: 'Comunicación',  t: [18, 17, 19], avg: 18 },
    { name: 'Ciencias',      t: [12, 14, 13], avg: 13 },
    { name: 'Historia',      t: [16, 15, 17], avg: 16 },
    { name: 'Arte',          t: [19, 18, 20], avg: 19 },
  ]
  const color = n => n >= 14 ? '#1E3A8A' : '#e05252'
  return (
    <div className={styles.viewTable}>
      <div className={`${styles.viewHeader} ${styles.viewHeaderNotas}`}>
        <span>Curso</span><span>T1</span><span>T2</span><span>T3</span><span>Prom</span>
      </div>
      {subjects.map(s => (
        <div key={s.name} className={`${styles.viewRow} ${styles.viewRowNotas}`}>
          <span>{s.name}</span>
          {s.t.map((sc, i) => <span key={i} style={{ color: color(sc) }}>{sc}</span>)}
          <span style={{ fontWeight: 700, color: color(s.avg) }}>{s.avg}</span>
        </div>
      ))}
    </div>
  )
}

function ViewAsistencia() {
  const days = [
    { day: 'Lun', pct: 97 }, { day: 'Mar', pct: 92 },
    { day: 'Mié', pct: 88 }, { day: 'Jue', pct: 95 }, { day: 'Vie', pct: 91 },
  ]
  return (
    <>
      <div className={styles.mockupCards}>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum}>93%</span>
          <span>Promedio semana</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum} style={{ color: '#e05252' }}>8</span>
          <span>Ausencias hoy</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum} style={{ color: '#d97706' }}>3</span>
          <span>Tardanzas hoy</span>
        </div>
      </div>
      <div className={styles.mockupChartLabel}>Asistencia por día</div>
      <div className={styles.viewDayBars}>
        {days.map((d, i) => (
          <div key={i} className={styles.viewDayCol}>
            <div
              className={styles.mockupBarAnim}
              style={{ height: `${d.pct - 45}%`, width: '100%', animationDelay: `${i * 0.07}s` }}
            />
            <span className={styles.viewDayLabel}>{d.day}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function ViewCobranza() {
  const rows = [
    { name: 'García, Ana',   amount: 'S/350', date: '15/05', status: 'pagado' },
    { name: 'Torres, M.',    amount: 'S/350', date: '—',     status: 'deuda' },
    { name: 'López, P.',     amount: 'S/350', date: '14/05', status: 'pagado' },
    { name: 'Ramos, J.',     amount: 'S/175', date: '—',     status: 'parcial' },
    { name: 'Flores, L.',    amount: 'S/350', date: '12/05', status: 'pagado' },
  ]
  return (
    <>
      <div className={styles.mockupCards}>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum} style={{ fontSize: '0.85rem' }}>S/62,300</span>
          <span>Recaudado este mes</span>
        </div>
        <div className={styles.mockupCard}>
          <span className={styles.mockupNum} style={{ color: '#e05252', fontSize: '0.85rem' }}>S/4,200</span>
          <span>Pendiente de cobro</span>
        </div>
      </div>
      <div className={styles.viewTable}>
        <div className={styles.viewHeader}>
          <span>Alumno</span><span>Monto</span><span>Fecha</span><span>Estado</span>
        </div>
        {rows.map(r => (
          <div key={r.name} className={styles.viewRow}>
            <span>{r.name}</span>
            <span>{r.amount}</span>
            <span>{r.date}</span>
            <span className={`${styles.viewBadge} ${styles[r.status]}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </>
  )
}

// ── Mockup principal interactivo ───────────────────

const VIEWS = {
  Dashboard:  { label: 'Dashboard del director',   View: ViewDashboard  },
  Alumnos:    { label: 'Gestión de alumnos',        View: ViewAlumnos    },
  Matrícula:  { label: 'Matrícula digital',         View: ViewMatricula  },
  Notas:      { label: 'Registro de notas',         View: ViewNotas      },
  Asistencia: { label: 'Control de asistencia',     View: ViewAsistencia },
  Cobranza:   { label: 'Cobranza y pagos',          View: ViewCobranza   },
}

function DashboardMockup() {
  const [active, setActive] = useState('Dashboard')
  const [paused, setPaused] = useState(false)
  const keys = Object.keys(VIEWS)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActive(cur => {
        const idx = keys.indexOf(cur)
        return keys[(idx + 1) % keys.length]
      })
    }, 2800)
    return () => clearInterval(id)
  }, [paused])

  const { label, View } = VIEWS[active]

  return (
    <div
      className={styles.mockup}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.mockupBar}>
        <span /><span /><span />
        <div className={styles.mockupUrl}>sistema.nexio.pe</div>
      </div>
      <div className={styles.mockupBody}>
        <div className={styles.mockupSidebar}>
          {Object.keys(VIEWS).map(key => (
            <div
              key={key}
              className={`${styles.mockupSideItem} ${key === active ? styles.mockupSideItemActive : ''}`}
              onClick={() => { setActive(key); setPaused(true) }}
            >
              {key}
              {key === active && !paused && (
                <span className={styles.sideProgress} />
              )}
            </div>
          ))}
        </div>
        <div className={styles.mockupMain}>
          <div className={styles.mockupTitle}>{label}</div>
          <div className={styles.viewWrap} key={active}>
            <View />
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