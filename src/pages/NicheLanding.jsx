import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { waLink } from '../utils/whatsapp'
import { niches as allNiches } from '../data/niches.jsx'
import styles from './NicheLanding.module.scss'

// ── Navbar simplificado para páginas de nicho ──────────
function NicheNavbar({ niche }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const waHref = waLink(niche.cta.waMsg)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        <Link to="/" className={styles.navBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Volver
        </Link>
        <Link to="/" className={styles.navLogo}>
          <img src="/img/logo.png" alt="Nexio" />
        </Link>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className={`btn btn--whatsapp ${styles.navCta}`}>
          <WaIcon />
          Habla con nosotros
        </a>
      </div>
    </header>
  )
}

// ── Hero a pantalla completa con carrusel ──────────────
function NicheHero({ niche }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const slides = niche.slides

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add(styles.visible), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4800)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const prev = () => { setPaused(true); setCurrent(c => (c - 1 + slides.length) % slides.length) }
  const next = () => { setPaused(true); setCurrent(c => (c + 1) % slides.length) }
  const go   = (i) => { setPaused(true); setCurrent(i) }

  const waHref = waLink(niche.cta.waMsg)

  return (
    <section className={styles.hero}>

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
        <div className={styles.overlay} style={{ '--niche-accent': niche.accent }} />
      </div>

      {/* Texto sobre el fondo */}
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText} ref={ref}>
          <span className={styles.heroBadge}>{niche.hero.badge}</span>
          <h1 className={styles.heroHeadline}>
            {niche.hero.headline.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className={styles.heroSub}>{niche.hero.sub}</p>
          <div className={styles.heroActions}>
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="btn btn--primary" style={{ background: niche.accent, borderColor: niche.accent }}>
              <WaIcon />
              Quiero este sistema
            </a>
            <a href="#problemas" className="btn btn--secondary"
              onClick={e => { e.preventDefault(); document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Ver cómo funciona
            </a>
          </div>
        </div>
      </div>

      {/* Info del slide — esquina inferior derecha */}
      <div className={styles.slideInfo}>
        <span className={styles.slideTag} style={{ background: niche.accent }}>{slides[current].tag}</span>
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

      {/* Indicadores */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => go(i)}
            style={i === current ? { background: niche.accent, width: '52px' } : {}}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className={styles.heroScroll}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  )
}

// ── Sección de problemas ───────────────────────────────
function NicheProblems({ niche }) {
  return (
    <section className={styles.problems} id="problemas">
      <div className="container">
        <div className={styles.sectionLabel}>El problema</div>
        <h2 className={styles.sectionTitle}>
          Lo que cuesta dinero (y tiempo) hoy en tu negocio
        </h2>
        <div className={styles.problemsGrid}>
          {niche.problems.map((p, i) => (
            <ProblemCard key={i} problem={p} accent={niche.accent} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({ problem, accent }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { ref.current?.classList.add(styles.visible); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`${styles.problemCard} fade-in`} ref={ref}>
      <span className={styles.problemIcon} style={{ '--niche-accent': accent }}>
        {problem.icon}
      </span>
      <h3>{problem.title}</h3>
      <p>{problem.desc}</p>
    </div>
  )
}

// ── Sección de solución + mockup ───────────────────────
function NicheSolution({ niche }) {
  return (
    <section className={styles.solution} id="solucion">
      <div className="container">
        <div className={styles.solutionGrid}>
          <div className={styles.solutionText}>
            <div className={styles.sectionLabel} style={{ color: niche.accent }}>La solución</div>
            <h2 className={styles.sectionTitleLight}>
              Un sistema hecho exactamente para cómo funciona tu negocio
            </h2>
            <p className={styles.solutionSub}>
              No adaptamos software genérico. Construimos desde cero lo que tu
              operación necesita — con el flujo real de tu equipo, no con funciones
              que nadie va a usar.
            </p>
            <div className={styles.featuresGrid}>
              {niche.features.map(f => (
                <div key={f} className={styles.featureItem} style={{ '--niche-accent': niche.accent }}>
                  <span className={styles.featureCheck}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.solutionMockup}>
            <NicheMockup niche={niche} />
          </div>
        </div>
      </div>
    </section>
  )
}

function NicheMockup({ niche }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = niche.mockupMenu.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActiveIdx(i => (i + 1) % total), 2800)
    return () => clearInterval(id)
  }, [paused, total])

  return (
    <div
      className={styles.mockup}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.mockupBar}>
        <span /><span /><span />
        <div className={styles.mockupUrl}>sistema.nexio.pe/{niche.slug}</div>
      </div>
      <div className={styles.mockupBody}>
        <div className={styles.mockupSidebar} style={{ '--niche-accent': niche.accent }}>
          <div className={styles.mockupBrand}>Nexio</div>
          {niche.mockupMenu.map((item, i) => (
            <div
              key={item}
              className={`${styles.mockupSideItem} ${i === activeIdx ? styles.mockupSideActive : ''}`}
              onClick={() => { setActiveIdx(i); setPaused(true) }}
              style={i === activeIdx ? { '--niche-accent': niche.accent } : {}}
            >
              {item}
              {i === activeIdx && !paused && (
                <span className={styles.sideProgress} style={{ '--niche-accent': niche.accent }} />
              )}
            </div>
          ))}
        </div>
        <div className={styles.mockupMain}>
          <div className={styles.mockupViewTitle}>{niche.mockupMenu[activeIdx]}</div>
          <NicheMockupView key={activeIdx} niche={niche} viewIdx={activeIdx} />
        </div>
      </div>
    </div>
  )
}

function NicheMockupView({ niche, viewIdx }) {
  const layout = viewIdx % 3
  return (
    <div className={styles.mockupViewWrap}>
      <div className={styles.mockupStats}>
        {niche.mockupStats.map((s, i) => (
          <div key={i} className={styles.mockupStat}>
            <span className={styles.mockupStatVal} style={s.color ? { color: s.color } : { color: niche.accent }}>{s.val}</span>
            <span className={styles.mockupStatLabel}>{s.label}</span>
          </div>
        ))}
      </div>
      {layout === 0 && <NicheMockupBars niche={niche} />}
      {layout === 1 && <NicheMockupHBars niche={niche} />}
      {layout === 2 && <NicheMockupRowsView niche={niche} />}
    </div>
  )
}

function NicheMockupBars({ niche }) {
  const heights = [55, 78, 42, 88, 65, 35, 72]
  return (
    <div className={styles.mockupMiniChart}>
      {heights.map((h, i) => (
        <div key={i} className={styles.mockupMiniBarWrap}>
          <div
            className={styles.mockupMiniBar}
            style={{ '--bar-h': `${h}%`, '--niche-accent': niche.accent, animationDelay: `${i * 55}ms` }}
          />
        </div>
      ))}
    </div>
  )
}

function NicheMockupHBars({ niche }) {
  const bars = [
    { label: 'Lun', w: 72 }, { label: 'Mar', w: 85 },
    { label: 'Mié', w: 58 }, { label: 'Jue', w: 91 },
    { label: 'Vie', w: 67 },
  ]
  return (
    <div className={styles.mockupHBars}>
      {bars.map((b, i) => (
        <div key={i} className={styles.mockupHBarRow}>
          <span className={styles.mockupHBarLabel}>{b.label}</span>
          <div className={styles.mockupHBarBg}>
            <div
              className={styles.mockupHBarFill}
              style={{ '--bar-w': `${b.w}%`, '--niche-accent': niche.accent, animationDelay: `${i * 80}ms` }}
            />
          </div>
          <span className={styles.mockupHBarVal}>{b.w}%</span>
        </div>
      ))}
    </div>
  )
}

function NicheMockupRowsView({ niche }) {
  return (
    <div className={styles.mockupRows}>
      {[85, 60, 75, 45, 90].map((w, i) => (
        <div key={i} className={styles.mockupRow}>
          <div className={styles.mockupRowLine} style={{ width: `${w}%`, '--niche-accent': niche.accent }} />
          <div className={styles.mockupRowBadge} style={{ '--niche-accent': niche.accent }} />
        </div>
      ))}
    </div>
  )
}

// ── Proceso en 3 pasos ─────────────────────────────────
function NicheProcess({ niche }) {
  const steps = [
    { n: '01', title: 'Conversamos', desc: 'Nos cuentas cómo funciona tu negocio hoy — qué haces en papel, en Excel o en WhatsApp. Sin tecnicismos.' },
    { n: '02', title: 'Diseñamos tu sistema', desc: 'Mapeamos tu flujo real y construimos el sistema exacto que necesitas. Sin módulos que no usarás.' },
    { n: '03', title: 'Lo usas desde el día uno', desc: 'Entrega en 8 semanas, capacitación incluida, soporte directo por WhatsApp. Sin licencias de terceros.' },
  ]
  return (
    <section className={styles.process} id="proceso">
      <div className="container">
        <div className={styles.sectionLabel}>Cómo trabajamos</div>
        <h2 className={styles.sectionTitle}>De la conversación al sistema operativo en 8 semanas</h2>
        <div className={styles.stepsGrid}>
          {steps.map((s, i) => (
            <StepCard key={i} step={s} accent={niche.accent} last={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, accent, last }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { ref.current?.classList.add(styles.visible); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`${styles.stepCard} fade-in`} ref={ref}>
      <div className={styles.stepNum} style={{ color: accent }}>{step.n}</div>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.desc}</p>
      {!last && <div className={styles.stepArrow}>→</div>}
    </div>
  )
}

// ── CTA final ──────────────────────────────────────────
function NicheCTA({ niche }) {
  const waHref = waLink(niche.cta.waMsg)
  return (
    <section className={styles.cta} id="contacto" style={{ '--niche-accent': niche.accent, '--niche-dark': niche.accentDark }}>
      <div className="container">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>{niche.cta.headline}</h2>
          <p className={styles.ctaSub}>{niche.cta.sub}</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer"
            className={`btn ${styles.ctaBtn}`}
            style={{ background: niche.accent }}>
            <WaIcon />
            Cuéntanos sobre tu negocio
          </a>
          <div className={styles.ctaNote}>
            Respondemos el mismo día · Sin compromiso · 100% a medida
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Otros sectores ─────────────────────────────────────
function NicheOthers({ niche }) {
  const others = Object.values(allNiches).filter(n => n.slug !== niche.slug)
  return (
    <section className={styles.others}>
      <div className="container">
        <span className={styles.othersLabel}>También trabajamos con</span>
        <div className={styles.othersRow}>
          {others.map(n => (
            <Link
              key={n.slug}
              to={`/${n.slug}`}
              className={styles.otherPill}
              style={{ '--pill-accent': n.accent }}
            >
              {n.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer contextual de la página de servicio ─────────
function NicheFooter({ niche }) {
  const navLinks = [
    { label: 'Problemas',     href: '#problemas' },
    { label: 'Solución',      href: '#solucion' },
    { label: 'Cómo funciona', href: '#proceso' },
    { label: 'Contacto',      href: '#contacto' },
  ]
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <Link to="/" className={styles.footerLogo}>
          <img src="/img/logo.png" alt="Nexio" className={styles.footerLogoImg} />
        </Link>
        <nav className={styles.footerNav}>
          <Link to="/" className={styles.footerLink}>Inicio</Link>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.footerLink}>{l.label}</a>
          ))}
        </nav>
        <div className={styles.footerRight}>Desarrollado en Perú</div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <span>© 2025 Nexio — Desarrollo de software a medida.</span>
        <span className={styles.footerService} style={{ color: niche.accent }}>{niche.name}</span>
      </div>
    </footer>
  )
}

// ── Página completa ────────────────────────────────────
export default function NicheLanding({ niche }) {
  useEffect(() => { window.scrollTo(0, 0) }, [niche.slug])

  return (
    <div className={styles.page}>
      <NicheNavbar niche={niche} />
      <main>
        <NicheHero niche={niche} />
        <NicheProblems niche={niche} />
        <NicheSolution niche={niche} />
        <NicheProcess niche={niche} />
        <NicheOthers niche={niche} />
        <NicheCTA niche={niche} />
      </main>
      <NicheFooter niche={niche} />
    </div>
  )
}

function WaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.118 1.528 5.845L.057 23.943l6.25-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.031-1.38l-.36-.214-3.732.978.997-3.645-.236-.374A9.808 9.808 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}