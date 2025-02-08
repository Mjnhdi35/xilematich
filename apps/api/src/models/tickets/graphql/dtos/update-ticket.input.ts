import { CreateTicketInput } from './create-ticket.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Ticket } from '@prisma/client'

@InputType()
export class UpdateTicketInput extends PartialType(CreateTicketInput) {
  id: Ticket['id']
}
