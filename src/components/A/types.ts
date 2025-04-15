export type AProps = {
  type?: 'link' | 'email' | 'phone'
  href?: string
  target?: '_blank' | '_self'
  disabled?: boolean
  icon?: string | boolean
}
export interface AInstance {
  ref: HTMLAnchorElement
}
