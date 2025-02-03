import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateSeatInput {
  @Field()
  screenId: string
  @Field(() => Int)
  row: number
  @Field(() => Int)
  column: number
}
