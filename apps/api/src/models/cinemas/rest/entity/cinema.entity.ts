import { Cinema } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CinemaEntity implements RestrictProperties<CinemaEntity, Cinema> {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
}
