export const niches = {
  'sistema-academico': {
    slug: 'sistema-academico',
    name: 'Sistema Académico',
    accent: '#3B82F6',
    accentDark: '#1E3A8A',
    hero: {
      badge: 'Software educativo · Hecho en Perú',
      headline: 'Deja de administrar tu\ncolegio en Excel.',
      sub: 'Sistema completo para directores: matrículas, cobros, notas, asistencia y reportes — en una sola plataforma, diseñada para tu institución.',
    },
    problems: [
      {
        title: 'Datos dispersos en hojas de cálculo',
        desc: 'Alumnos en un Excel, cobros en otro, asistencia en papel. Nadie tiene el mismo dato y el director decide sin información real.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        ),
      },
      {
        title: 'Cobros sin seguimiento ni control',
        desc: 'No sabes quién pagó, quién debe ni cuánto se recaudó el mes. El dinero llega sin registro y los meses cierran con diferencias.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        ),
      },
      {
        title: 'Sin visibilidad para tomar decisiones',
        desc: 'No tienes reportes claros de asistencia, rendimiento ni recaudación. Diriges de memoria, no con datos.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        ),
      },
    ],
    features: [
      'Gestión de alumnos y apoderados', 'Matrícula digital con contratos',
      'Notas y libretas en PDF', 'Asistencia con alertas por WhatsApp',
      'Cobranza y control de deudas', 'Dashboard del director en tiempo real',
      'Módulo docentes y horarios', 'Generador IA de sesiones de clase',
    ],
    mockupMenu: ['Dashboard', 'Alumnos', 'Matrícula', 'Notas', 'Cobranza'],
    mockupStats: [
      { val: '248', label: 'Alumnos activos', color: null },
      { val: '12',  label: 'Pagos pendientes', color: '#e05252' },
      { val: '94%', label: 'Asistencia hoy',   color: null },
    ],
    cta: {
      headline: '¿Cuántas hojas de cálculo tiene tu colegio?',
      sub: 'Cuéntanos cómo funciona tu institución hoy. Construimos el sistema en 8 semanas.',
      waMsg: 'Hola, soy director de un colegio y me interesa el sistema académico de Nexio. ¿Podemos conversar?',
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1724986481833-41b98b90833c?w=1280&q=80&auto=format&fit=crop',
        tag: 'Dashboard del director',
        caption: 'Recaudación, asistencia y matrículas en una sola pantalla. En tiempo real.',
      },
      {
        img: 'https://images.unsplash.com/photo-1603394336952-3628e17d3920?w=1280&q=80&auto=format&fit=crop',
        tag: 'Aulas conectadas',
        caption: 'El docente toma asistencia en segundos. El director lo ve al instante.',
      },
      {
        img: 'https://images.unsplash.com/photo-1675752520688-80c12b444fa2?w=1280&q=80&auto=format&fit=crop',
        tag: 'Cero papeleo',
        caption: 'Matrículas, notas y cobros digitalizados desde el primer día.',
      },
    ],
  },

  clinicas: {
    slug: 'clinicas',
    name: 'Clínicas y Consultorios',
    accent: '#0EA5E9',
    accentDark: '#075985',
    hero: {
      badge: 'Software médico · Hecho en Perú',
      headline: 'Tu clínica merece más\nque historiales en papel.',
      sub: 'Un sistema a medida para gestionar pacientes, citas, cobros y reportes — en un solo lugar, desde el primer día.',
    },
    problems: [
      {
        title: 'Historiales en papel o Excel',
        desc: 'Pierdes tiempo buscando la ficha de cada paciente. Datos que se pierden, se borran o se confunden entre consultorios.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
        ),
      },
      {
        title: 'Agenda sin control de horarios',
        desc: 'Citas en WhatsApp, en papel, en el teléfono. Sin recordatorios automáticos ni visibilidad por médico o especialidad.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        ),
      },
      {
        title: 'Cobros sin trazabilidad',
        desc: 'No sabes cuánto cobró cada médico, cuánto se debe ni cómo va la recaudación del mes. El dinero se escapa sin registro.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        ),
      },
    ],
    features: [
      'Agenda de citas por médico', 'Historial clínico del paciente',
      'Recordatorios automáticos por WhatsApp', 'Control de pagos y deudas',
      'Plantillas por especialidad', 'Reportes de atención y recaudación',
      'Odontograma digital', 'Acceso por rol (médico / recepción / admin)',
    ],
    mockupMenu: ['Agenda', 'Pacientes', 'Historial', 'Cobros', 'Reportes'],
    mockupStats: [
      { val: '34', label: 'Citas hoy', color: null },
      { val: '8', label: 'Pendientes de pago', color: '#e05252' },
      { val: '96%', label: 'Satisfacción', color: null },
    ],
    cta: {
      headline: '¿Tu clínica aún trabaja con papel?',
      sub: 'Cuéntanos cómo funciona hoy y te mostramos cómo puede ser en 8 semanas.',
      waMsg: 'Hola, tengo una clínica / consultorio y me interesa un sistema de gestión a medida. ¿Podemos conversar?',
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1631248055158-edec7a3c072b?w=1280&q=80&auto=format&fit=crop',
        tag: 'Atención sin papeles',
        caption: 'Cada consulta registrada en segundos. El historial del paciente siempre a la mano.',
      },
      {
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1280&q=80&auto=format&fit=crop',
        tag: 'Agenda inteligente',
        caption: 'Citas por médico, especialidad y horario. Con recordatorios automáticos por WhatsApp.',
      },
      {
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1280&q=80&auto=format&fit=crop',
        tag: 'Control de cobranza',
        caption: 'Pagos, deudas y recaudación mensual en tiempo real. Sin cuentas en Excel.',
      },
    ],
  },

  restaurantes: {
    slug: 'restaurantes',
    name: 'Restaurantes y Delivery',
    accent: '#F59E0B',
    accentDark: '#92400E',
    hero: {
      badge: 'Software gastronómico · Hecho en Perú',
      headline: 'Más mesas atendidas.\nMenos errores en cocina.',
      sub: 'Sistema de pedidos, caja y delivery diseñado para tu operación real — no para un restaurante genérico.',
    },
    problems: [
      {
        title: 'Pedidos por WhatsApp sin control',
        desc: 'Pedidos que se pierden, errores de cocina, sin historial. Tu delivery depende de la memoria del repartidor y del equipo.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        ),
      },
      {
        title: 'Inventario a ojo',
        desc: 'No sabes qué se acaba, qué se desperdicia ni cuánto cuesta cada plato. El margen se escapa sin que lo veas.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        ),
      },
      {
        title: 'Sin reportes de ventas reales',
        desc: 'No puedes decidir sin saber qué platos son más rentables, a qué hora vendes más o cuál es tu costo real por pedido.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        ),
      },
    ],
    features: [
      'Gestión de pedidos en tiempo real', 'Carta digital con código QR',
      'Control de inventario y mermas', 'Caja diaria y cortes de turno',
      'Módulo de delivery propio', 'Reportes de ventas por plato y turno',
      'Display de cocina (KDS)', 'Integración con repartidores',
    ],
    mockupMenu: ['Pedidos', 'Carta', 'Cocina', 'Caja', 'Inventario'],
    mockupStats: [
      { val: '18', label: 'Pedidos activos', color: null },
      { val: 'S/2,840', label: 'Venta del día', color: null },
      { val: '3', label: 'En preparación', color: '#d97706' },
    ],
    cta: {
      headline: '¿Tu restaurante depende de WhatsApp para los pedidos?',
      sub: 'Podemos construir el sistema que necesita tu negocio, no uno genérico.',
      waMsg: 'Hola, tengo un restaurante / negocio de delivery y me interesa un sistema de gestión a medida. ¿Podemos conversar?',
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1280&q=80&auto=format&fit=crop',
        tag: 'Salón bajo control',
        caption: 'Pedidos desde la mesa al sistema. Sin comandas en papel ni errores de cocina.',
      },
      {
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1280&q=80&auto=format&fit=crop',
        tag: 'Experiencia del comensal',
        caption: 'Carta digital, tiempos de espera y servicio coordinado desde una sola pantalla.',
      },
      {
        img: 'https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?w=1280&q=80&auto=format&fit=crop',
        tag: 'Caja y reportes',
        caption: 'Cierre de caja, ventas por turno y platos más rentables. Datos reales cada día.',
      },
    ],
  },

  academias: {
    slug: 'academias',
    name: 'Academias de Idiomas',
    accent: '#8B5CF6',
    accentDark: '#4C1D95',
    hero: {
      badge: 'Software educativo · Hecho en Perú',
      headline: 'Enfócate en enseñar.\nNosotros gestionamos el resto.',
      sub: 'Matrículas, horarios, pagos y progreso de cada alumno en un solo sistema. Sin hojas de cálculo, sin caos administrativo.',
    },
    problems: [
      {
        title: 'Matrículas en papel o WhatsApp',
        desc: 'Sin control de niveles, sin historial del alumno, sin saber cuántas vacantes hay en cada grupo ni qué idioma estudia cada uno.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        ),
      },
      {
        title: 'Horarios en Excel que nadie entiende',
        desc: 'Cambios comunicados por WhatsApp, alumnos en grupos equivocados, docentes sin agenda clara. El caos cuesta matrículas.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
        ),
      },
      {
        title: 'Cobros sin trazabilidad',
        desc: 'No sabes quién pagó, quién debe, ni cuánto entró el mes. Los pagos en efectivo se registran (o no) en cuadernos distintos.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        ),
      },
    ],
    features: [
      'Matrícula y niveles por idioma', 'Horarios y grupos de estudio',
      'Control de asistencia', 'Pagos y deudas por alumno',
      'Progreso y evaluaciones', 'Comunicados a padres o alumnos',
      'Certificados automáticos', 'Dashboard del director académico',
    ],
    mockupMenu: ['Alumnos', 'Horarios', 'Asistencia', 'Pagos', 'Evaluaciones'],
    mockupStats: [
      { val: '142', label: 'Alumnos activos', color: null },
      { val: '11', label: 'Pagos pendientes', color: '#e05252' },
      { val: '89%', label: 'Asistencia hoy', color: null },
    ],
    cta: {
      headline: '¿Tu academia sigue con las matrículas en papel?',
      sub: 'Te mostramos cómo digitalizarla en menos de 8 semanas.',
      waMsg: 'Hola, tengo una academia de idiomas y me interesa un sistema de gestión a medida. ¿Podemos conversar?',
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1280&q=80&auto=format&fit=crop',
        tag: 'Clases que inspiran',
        caption: 'Menos administración, más tiempo para enseñar. Tu academia enfocada en lo que importa.',
      },
      {
        img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1280&q=80&auto=format&fit=crop',
        tag: 'Alumnos organizados',
        caption: 'Niveles, grupos, asistencia y progreso de cada alumno en un solo lugar.',
      },
      {
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&q=80&auto=format&fit=crop',
        tag: 'Aprendizaje sin barreras',
        caption: 'Matrículas digitales, pagos automáticos y comunicados al instante.',
      },
    ],
  },

  'servicios-profesionales': {
    slug: 'servicios-profesionales',
    name: 'Servicios Profesionales',
    accent: '#3B82F6',
    accentDark: '#1E3A8A',
    hero: {
      badge: 'Software empresarial · Hecho en Perú',
      headline: 'Deja de perseguir clientes\ny pendientes en WhatsApp.',
      sub: 'CRM, proyectos y facturación en un solo sistema. Diseñado para consultoras, agencias y estudios que quieren crecer con orden.',
    },
    problems: [
      {
        title: 'Clientes dispersos en notas y WhatsApp',
        desc: 'Sin historial de comunicaciones, sin seguimiento. No sabes en qué estado está cada cliente, propuesta o negociación.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        ),
      },
      {
        title: 'Proyectos sin seguimiento real',
        desc: 'Dependes de tu memoria o de hojas de cálculo para saber qué avanza, qué se entregó y qué está pendiente por cliente.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        ),
      },
      {
        title: 'Facturación manual y tardía',
        desc: 'Cotizaciones en Word, facturas en papel o en distintos archivos. Sin control de lo que se cobró ni de lo que falta cobrar.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
        ),
      },
    ],
    features: [
      'CRM de clientes y contactos', 'Gestión de proyectos y tareas',
      'Cotizaciones y contratos digitales', 'Facturación y control de cobros',
      'Agenda de reuniones y seguimiento', 'Pipeline de ventas visual',
      'Reportes de rentabilidad por cliente', 'Acceso por rol y permisos',
    ],
    mockupMenu: ['Dashboard', 'Clientes', 'Proyectos', 'Facturación', 'Reportes'],
    mockupStats: [
      { val: '24', label: 'Proyectos activos', color: null },
      { val: 'S/18,500', label: 'Por facturar', color: null },
      { val: '6', label: 'Propuestas enviadas', color: null },
    ],
    cta: {
      headline: '¿Tu empresa de servicios trabaja sin un sistema?',
      sub: 'Construimos la herramienta que te da visibilidad real sobre tu negocio.',
      waMsg: 'Hola, tengo una empresa de servicios profesionales y me interesa un sistema de gestión a medida. ¿Podemos conversar?',
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1280&q=80&auto=format&fit=crop',
        tag: 'Equipo alineado',
        caption: 'Cada cliente, proyecto y tarea en un sistema que tu equipo realmente usa.',
      },
      {
        img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1280&q=80&auto=format&fit=crop',
        tag: 'Visibilidad total',
        caption: 'Sabes qué avanza, qué se entregó y qué está pendiente. Sin reuniones de status.',
      },
      {
        img: 'https://images.unsplash.com/photo-1657978837950-03646a7c7b9e?w=1280&q=80&auto=format&fit=crop',
        tag: 'Facturación sin fricción',
        caption: 'Propuestas, contratos y cobros enviados en minutos. Todo registrado y rastreable.',
      },
    ],
  },

  retail: {
    slug: 'retail',
    name: 'Retail y Tiendas',
    accent: '#10B981',
    accentDark: '#064E3B',
    hero: {
      badge: 'Software comercial · Hecho en Perú',
      headline: 'Tu tienda bajo control.\nStock, ventas y caja en una pantalla.',
      sub: 'POS, inventario y reportes en tiempo real para tiendas, ferreterías y negocios de venta al público. Sin Excel, sin suposiciones.',
    },
    problems: [
      {
        title: 'Inventario en cuadernos o de memoria',
        desc: 'No sabes qué se acaba, qué te roban ni cuánto stock tienes. Las pérdidas invisibles se acumulan mes a mes sin que las veas.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        ),
      },
      {
        title: 'Caja sin cuadre ni historial',
        desc: 'Sin saber cuánto se vendió, qué productos rotan más ni cuáles tienen mejor margen. Sin datos, sin decisiones correctas.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        ),
      },
      {
        title: 'Sin fidelización de clientes',
        desc: 'No tienes registro de quiénes son tus mejores compradores, cuánto compran ni cómo contactarlos con promociones relevantes.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        ),
      },
    ],
    features: [
      'Punto de venta (POS) táctil', 'Inventario en tiempo real',
      'Gestión de clientes y fidelización', 'Reportes de caja y rentabilidad',
      'Control de descuentos y promociones', 'Acceso desde múltiples locales',
      'Alertas de stock mínimo', 'Historial de compras por cliente',
    ],
    mockupMenu: ['Ventas', 'Inventario', 'Clientes', 'Reportes', 'Caja'],
    mockupStats: [
      { val: 'S/3,210', label: 'Venta del día', color: null },
      { val: '7', label: 'Stock crítico', color: '#e05252' },
      { val: '48', label: 'Transacciones', color: null },
    ],
    cta: {
      headline: '¿Tu tienda sigue llevando el inventario en Excel?',
      sub: 'Podemos construir el sistema que tu negocio necesita, a medida y en 8 semanas.',
      waMsg: 'Hola, tengo una tienda / negocio retail y me interesa un sistema de gestión a medida. ¿Podemos conversar?',
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=1280&q=80&auto=format&fit=crop',
        tag: 'Venta sin errores',
        caption: 'Cobra rápido, actualiza el stock al instante y cierra el día con los números exactos.',
      },
      {
        img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1280&q=80&auto=format&fit=crop',
        tag: 'Inventario en tiempo real',
        caption: 'Sabe qué tienes, qué se acaba y qué reponer — antes de perder una venta.',
      },
      {
        img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1280&q=80&auto=format&fit=crop',
        tag: 'Tu tienda, digitalizada',
        caption: 'Reportes de venta, clientes frecuentes y márgenes reales. Sin Excel, sin estimaciones.',
      },
    ],
  },
}