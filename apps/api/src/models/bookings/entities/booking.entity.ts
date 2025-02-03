import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'
import { Screen } from '../../screens/entities/screen.entity'
import { Seat } from '../../seats/entities/seat.entity'
import { Showtime } from '../../showtimes/entities/showtime.entity'
import { Ticket } from '../../tickets/entities/ticket.entity'
import { User } from '../../users/entities/user.entity'
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
