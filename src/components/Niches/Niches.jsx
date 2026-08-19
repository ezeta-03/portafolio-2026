import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import { waLink } from '../../utils/whatsapp'
import { IconStethoscope, IconUtensils, IconGlobe, IconBriefcase, IconShoppingBag, IconGraduate } from '../Icon/Icon'
import styles from './Niches.module.scss'

const niches = [
  { Icon: IconGraduate,    name: 'Sistema Académico',         slug: '/sistema-academico' },
  { Icon: IconStethoscope, name: 'Clínicas y consultorios',   slug: '/clinicas' },
  { Icon: IconUtensils,    name: 'Restaurantes y delivery',    slug: '/restaurantes' },
  { Icon: IconGlobe,       name: 'Academias de idiomas',       slug: '/academias' },
  { Icon: IconBriefcase,   name: 'Servicios profesionales',    slug: '/servicios-profesionales' },
  { Icon: IconShoppingBag, name: 'Retail y tiendas',           slug: '/retail' },
]

export default function Niches() {
  const titleRef = useScrollReveal()
  const waHref = waLink('Hola, tengo un negocio y me interesa una solución a medida.')

  return (
    <section className={styles.section} id="nichos">
      <div className="container">
        <div className={`fade-in ${styles.header}`} ref={titleRef}>
          <h2 className="section-title section-title--light">
            Sectores que atendemos
          </h2>
        </div>

        <div className={styles.grid}>
          {niches.map((n, i) => (
            <NicheCard key={n.name} Icon={n.Icon} name={n.name} slug={n.slug} delay={i * 80} />
          ))}
        </div>

        <div className={`fade-in ${styles.closing}`} ref={useScrollReveal()}>
          <p>Si tienes un negocio con un problema concreto, podemos construir la solución.</p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <WaIcon />
            Cuéntame sobre tu negocio
          </a>
        </div>
      </div>
    </section>
  )
}

function NicheCard({ Icon, name, slug, delay }) {
  const ref = useScrollReveal()
  return (
    <Link
      to={slug}
      className={`fade-in ${styles.card}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardBody}>
        <span className={styles.icon}><Icon size={24} /></span>
        <span className={styles.name}>{name}</span>
        <span className={styles.cardArrow}>→</span>
      </div>
    </Link>
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