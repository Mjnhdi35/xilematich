import { Booking } from '@prisma/client'

import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  createdAt: Date
  updatedAt: Date
  id: string
  userId: string
  showtimeId: string
  row: number
  column: number
  screenId: string
  ticketId: string
}
