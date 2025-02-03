import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateManagerInput {
  @Field()
  userId: string

  @Field({ nullable: true })
  cinemaId?: string
}
