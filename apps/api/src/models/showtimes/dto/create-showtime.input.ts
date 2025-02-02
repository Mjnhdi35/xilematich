import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateShowtimeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
