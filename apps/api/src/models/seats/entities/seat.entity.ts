import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Seat {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
