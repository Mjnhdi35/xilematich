export type Role = 'admin' | 'manager'

export type GetUserType = {
  id: string
  roles: Role[]
}
