import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ShowtimeStatus, Showtime as ShowtimeType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { Screen } from 'src/models/screens/graphql/entity/screen.entity'

registerEnumType(ShowtimeStatus, {
  name: 'ShowtimeStatus',
  description: 'Enum for showtime statuses',
})
@ObjectType()
export class Showtime implements RestrictProperties<Showtime, ShowtimeType> {
  id: string
  createdAt: Date
  updatedAt: Date
  startTime: Date
  @Field(() => ShowtimeStatus, { nullable: true })
  status: ShowtimeStatus
  movieId: string
  screenId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
@ObjectType()
export class RemainingSeats {
  total: number
  booked: number
}

@ObjectType()
export class ShowtimeSimple {
  id: string
  startTime: string
  movieId: string
  @Field(() => Screen)
  screen: Screen

  @Field(() => RemainingSeats)
  remainingSeats: RemainingSeats
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}

@ObjectType()
export class GroupedShowtime {
  date: string
  @Field(() => [ShowtimeSimple])
  showtimes: ShowtimeSimple[]
}
