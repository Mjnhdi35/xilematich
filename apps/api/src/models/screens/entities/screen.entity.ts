import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Screen {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
