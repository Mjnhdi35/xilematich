import { CreateCinemaInput } from './create-cinema.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateCinemaInput extends PartialType(CreateCinemaInput) {
  @Field(() => Int)
  id: number
}
