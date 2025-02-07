import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCinemaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
