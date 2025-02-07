import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Showtime {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
