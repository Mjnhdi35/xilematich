import { BaseComponent } from '../../lib/types'

export const Container = ({ children, className }: BaseComponent) => (
  <div className={`container px-1 mx-auto ${className}`}>{children}</div>
)
