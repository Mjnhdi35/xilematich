import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateAdminInput {
  @Field()
  userId: string
}
