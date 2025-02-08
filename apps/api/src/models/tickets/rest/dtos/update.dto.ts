import { PartialType } from '@nestjs/swagger'
import { CreateTicket } from './create.dto'
import { Ticket } from '@prisma/client'

export class UpdateTicket extends PartialType(CreateTicket) {
  id: Ticket['id']
}
