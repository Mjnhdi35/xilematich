import { Field, InputType, PickType } from '@nestjs/graphql'
import { Showtime } from '../entity/showtime.entity'

@InputType()
export class CreateShowtimeInput extends PickType(
  Showtime,
  ['screenId', 'movieId'],
  InputType,
) {
  @Field(() => [String])
  showtimes: string[]
}
