import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateCinemaInput {
  @Field({ nullable: true })
  name?: string
}
