import { Address } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address>
{
  createdAt: Date
  updatedAt: Date
  id: string
  address: string
  cinemaId: string
  lat: number
  lng: number
}
