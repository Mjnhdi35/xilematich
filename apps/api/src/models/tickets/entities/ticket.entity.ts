import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Ticket as TicketType } from '@prisma/client'
import { Booking } from '../../bookings/entities/booking.entity'
import { User } from '../../users/entities/user.entity'
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
