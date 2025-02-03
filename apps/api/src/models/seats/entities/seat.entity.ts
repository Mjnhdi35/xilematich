import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Booking } from '../../bookings/entities/booking.entity'
import { Screen } from '../../screens/entities/screen.entity'

@ObjectType()
export class Seat {
  @Field(() => Int)
  row: number

  @Field(() => Int)
  column: number

  @Field(() => Screen)
  screenId: Screen['id']

  @Field(() => Screen)
  screen: Screen

  @Field(() => [Booking])
  bookings: Booking
}
