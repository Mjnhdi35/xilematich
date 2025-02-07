import { CreateShowtimeInput } from './create-showtime.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateShowtimeInput extends PartialType(CreateShowtimeInput) {
  @Field(() => Int)
  id: number
}
