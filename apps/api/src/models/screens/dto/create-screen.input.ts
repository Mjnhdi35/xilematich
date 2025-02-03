import { InputType, Int, Field } from '@nestjs/graphql'
import { ProjectionType, SoundSystemType } from '@prisma/client'

@InputType()
export class CreateScreenInput {
  @Field()
  numberRoom: number
  @Field()
  cinemaId: string
  @Field(() => ProjectionType, { nullable: true })
  projectionType?: ProjectionType
  @Field(() => SoundSystemType, { nullable: true })
  soundSystemType?: SoundSystemType
  @Field({ nullable: true })
  price?: number
}
