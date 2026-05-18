const S = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.75', strokeLinecap: 'round', strokeLinejoin: 'round' }

export const IconBarChart    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>

export const IconClipboard   = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>

export const IconBookOpen    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>

export const IconBell        = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>

export const IconUsers       = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

export const IconClock       = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>

export const IconFileText    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>

export const IconCheckCircle = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>

export const IconCreditCard  = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>

export const IconDashboard   = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>

export const IconGraduate    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>

export const IconTarget      = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>

export const IconMessage     = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>

export const IconZap         = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>

export const IconTrending    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>

export const IconMail        = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>

export const IconBuilding    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>

export const IconMapPin      = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>

export const IconStethoscope = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4"/><path d="M4.8 2H4a2 2 0 0 0-2 2v4a6 6 0 0 0 6 6"/><path d="M8 13v3a6 6 0 0 0 6 6"/><path d="M20 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M14 16a2 2 0 0 0 2 2"/><path d="M6 2h4a1 1 0 0 1 0 2H6"/></svg>

export const IconUtensils    = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>

export const IconGlobe       = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>

export const IconBriefcase   = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>

export const IconShoppingBag = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>

export const IconSparkle     = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...S}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
