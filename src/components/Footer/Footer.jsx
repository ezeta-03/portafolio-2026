import styles from './Footer.module.scss'

const links = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nichos', href: '#nichos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <img src="/img/logo.png" alt="Nexio" className={styles.logoImg} />
        </a>

        <nav className={styles.nav}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        <div className={styles.right}>
          Desarrollado en Perú
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© 2025 Nexio — Desarrollo de software a medida.</span>
      </div>
    </footer>
  )
}
