import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Ticket as TicketType } from '@prisma/client'

import { User } from '../../../users/graphql/entities/user.entity'
import { Booking } from '../../../bookings/graphql/entities/booking.entity'
@ObjectType()
export class Ticket implements TicketType {
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  @Field(() => User)
  userId: User['id']
  @Field(() => User)
  user: User
  @Field({ nullable: true })
  qrCode: string

  @Field(() => [Booking])
  bookings: Booking[]
}
