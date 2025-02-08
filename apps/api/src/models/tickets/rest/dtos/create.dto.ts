import { OmitType } from '@nestjs/swagger'
import { TicketEntity } from '../entity/ticket.entity'

export class CreateTicket extends OmitType(TicketEntity, [
  'createdAt',
  'updatedAt',
]) {}
