import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  $Enums,
  ShowtimeStatus,
  Showtime as ShowtimeType,
} from '@prisma/client'
import { Booking } from '../../../bookings/graphql/entities/booking.entity'
import { Movie } from '../../../movies/graphql/entities/movie.entity'
import { Screen } from '../../../screens/graphql/entities/screen.entity'

registerEnumType(ShowtimeStatus, {
  name: 'ShowtimeStatus',
  description: 'Enum for roles',
})
@ObjectType()
export class Showtime implements ShowtimeType {
  @Field(() => ID)
  id: string

  createdAt: Date
  updatedAt: Date

  @Field()
  startTime: Date
  @Field(() => ShowtimeStatus, { nullable: true })
  status: $Enums.ShowtimeStatus

  @Field(() => Movie)
  movieId: Movie['id']
  @Field(() => Movie)
  movie: Movie
  @Field(() => Screen)
  screenId: Screen['id']
  @Field(() => Screen)
  screen: Screen
  @Field(() => [Booking])
  bookings: Booking[]
}
