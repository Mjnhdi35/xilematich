import { Field, ObjectType } from '@nestjs/graphql'
import { Ticket as TicketType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Ticket implements RestrictProperties<Ticket, TicketType> {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  @Field({ nullable: true })
  qrCode: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
