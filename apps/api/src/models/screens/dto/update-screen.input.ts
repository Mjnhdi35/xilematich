import { CreateScreenInput } from './create-screen.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateScreenInput extends PartialType(CreateScreenInput) {
  @Field(() => Int)
  id: number
}
