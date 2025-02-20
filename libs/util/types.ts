import { ReactNode } from 'react'

export type Role = 'admin' | 'manager'

export type GetUserType = {
  id: string
  roles: Role[]
}

export type MenuItem = { label: string; href: string; loggedIn?: boolean }
export type NotificationType = {
  id: string
  message: ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
  position?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center'
}

export type SimpleBound = {
  nw_lat: number
  nw_lng: number
  se_lat: number
  se_lng: number
}

export type Viewport = {
  latitude: number
  longitude: number
  zoom?: number
}

export type StripeItemType = {
  screenId: string
  showtimeId: string
  seats: { column: number; row: number; price: number }[]
}
