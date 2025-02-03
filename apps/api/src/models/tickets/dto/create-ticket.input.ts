import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateTicketInput {
  @Field()
  userId: string

  @Field({ nullable: true })
  qrCode?: string
}
