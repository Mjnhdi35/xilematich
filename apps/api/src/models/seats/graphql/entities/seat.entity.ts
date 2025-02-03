import { ObjectType, Field, Int } from '@nestjs/graphql'

import { Screen } from '../../../screens/graphql/entities/screen.entity'
import { Booking } from '../../../bookings/graphql/entities/booking.entity'

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
