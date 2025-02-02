import { ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'
@ObjectType()
export class Booking implements BookingType {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  showtimeId: string
  row: number
  column: number
  screenId: string
  ticketId: string
}
