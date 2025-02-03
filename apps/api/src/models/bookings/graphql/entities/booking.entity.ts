import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'
import { Screen } from '../../../screens/graphql/entities/screen.entity'
import { Seat } from '../../../seats/graphql/entities/seat.entity'
import { Showtime } from '../../../showtimes/graphql/entities/showtime.entity'
import { Ticket } from '../../../tickets/graphql/entities/ticket.entity'
import { User } from '../../../users/graphql/entities/user.entity'

@ObjectType()
export class Booking implements BookingType {
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  @Field(() => User)
  userId: User['id']
  @Field(() => User)
  user: User
  @Field(() => Showtime)
  showtimeId: Showtime['id']
  @Field(() => Showtime)
  showtime: Showtime
  @Field(() => Int)
  row: number
  @Field(() => Int)
  column: number
  @Field(() => Screen)
  screenId: Screen['id']
  @Field(() => Ticket)
  ticketId: Ticket['id']
  @Field(() => Ticket)
  ticket: Ticket

  @Field(() => Seat)
  seat: Seat
}
