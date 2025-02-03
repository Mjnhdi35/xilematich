import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string
}
