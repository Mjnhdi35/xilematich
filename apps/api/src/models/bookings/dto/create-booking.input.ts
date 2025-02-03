import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateBookingInput {
  @Field()
  userId: string

  @Field()
  showtimeId: string

  @Field(() => Int)
  row: number

  @Field(() => Int)
  column: number

  @Field()
  screenId: string

  @Field()
  ticketId: string
}
