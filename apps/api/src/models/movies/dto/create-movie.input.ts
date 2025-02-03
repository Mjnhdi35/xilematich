import { InputType, Int, Field } from '@nestjs/graphql'
import { Genre } from '@prisma/client'

@InputType()
export class CreateMovieInput {
  @Field()
  title: string
  @Field()
  director: string
  @Field(() => Genre, { nullable: true })
  genre?: Genre
  @Field(() => Int)
  duration: number
  @Field()
  releaseDate: Date
  @Field({ nullable: true })
  posterUrl?: string
}
