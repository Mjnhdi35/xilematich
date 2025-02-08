import { InputType, PickType } from '@nestjs/graphql'
import { Ticket } from '../entity/ticket.entity'

@InputType()
export class CreateTicketInput extends PickType(
  Ticket,
  ['id', 'userId'],
  InputType,
) {}
