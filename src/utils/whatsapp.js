const PHONE = '51979541272'

export function waLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}
