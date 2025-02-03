import { InputType, Int, Field } from '@nestjs/graphql'
import { ShowtimeStatus } from '@prisma/client'

@InputType()
export class CreateShowtimeInput {
  @Field()
  startTime: Date
  @Field(() => ShowtimeStatus, { nullable: true })
  status?: ShowtimeStatus
  @Field()
  movieId: string
  @Field()
  screenId: string
}
