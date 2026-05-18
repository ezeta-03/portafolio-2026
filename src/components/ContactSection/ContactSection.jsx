import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useScrollReveal from '../../hooks/useScrollReveal'
import { waLink } from '../../utils/whatsapp'
import styles from './ContactSection.module.scss'

// Configura estas tres credenciales en tu cuenta de EmailJS (emailjs.com)
const EMAILJS_SERVICE_ID  = 'service_hcr7btm'
const EMAILJS_TEMPLATE_ID = 'template_ceb58lq'
const EMAILJS_PUBLIC_KEY  = 't9E4p115fVrFww_TR'

export default function ContactSection() {
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal()
  const formRef  = useRef(null)
  const [status, setStatus] = useState('idle')
  const waHref = waLink('Hola, me gustaría conversar sobre una solución para mi institución.')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contacto">
      <div className="container">
        <div className={styles.grid}>

          <div className={`fade-in-left ${styles.formSide}`} ref={leftRef}>
            <h2>¿Listo para dejar<br />el Excel atrás?</h2>
            <p className={styles.sub}>
              Cuéntanos en qué andas y te respondemos hoy.
            </p>

            {status === 'sent' ? (
              <div className={styles.success}>
                <span className={styles.successCheck}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <div>
                  <strong>Mensaje enviado</strong>
                  <p>Te respondemos en menos de 24 horas. También puedes escribirnos por WhatsApp.</p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <label>
                    Nombre
                    <input type="text" name="from_name" required placeholder="Tu nombre completo" />
                  </label>
                  <label>
                    Institución
                    <input type="text" name="institution" required placeholder="Nombre del colegio o empresa" />
                  </label>
                </div>
                <label>
                  WhatsApp
                  <input type="tel" name="whatsapp" required placeholder="Ej: 999 888 777" />
                </label>
                <label>
                  Mensaje
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntame brevemente qué necesitas..."
                  />
                </label>
                {/* Campo oculto para que EmailJS sepa a qué correo enviar */}
                <input type="hidden" name="to_email" value="ing.sergio.zenteno@gmail.com" />
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                {status === 'error' && (
                  <p className={styles.error}>
                    Hubo un error al enviar. Escríbenos directamente por WhatsApp.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className={`fade-in-right ${styles.contactSide}`} ref={rightRef}>
            <div className={styles.contactQuote}>
              <svg className={styles.contactQuoteIcon} width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <blockquote>"Respondemos el mismo día — siempre."</blockquote>
              <cite>Nexio · Soporte directo por WhatsApp</cite>
            </div>

            <div className={styles.contactInfo}>
              <h3>Contáctanos directamente</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><WaIcon /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>+51 979 541 272</span>
                </div>
              </div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--whatsapp ${styles.waBtn}`}
            >
              <WaIcon />
              Escríbenos ahora por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.118 1.528 5.845L.057 23.943l6.25-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.031-1.38l-.36-.214-3.732.978.997-3.645-.236-.374A9.808 9.808 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}
