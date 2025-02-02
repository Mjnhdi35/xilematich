import { ObjectType } from '@nestjs/graphql'
import { Ticket as TicketType } from '@prisma/client'
@ObjectType()
export class Ticket implements TicketType {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  qrCode: string
}
