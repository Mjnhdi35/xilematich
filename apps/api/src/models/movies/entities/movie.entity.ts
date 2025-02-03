import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Genre, Movie as MovieType } from '@prisma/client'
import { Showtime } from '../../showtimes/entities/showtime.entity'

registerEnumType(Genre, { name: 'Genre', description: 'Enum for roles' })

@ObjectType()
export class Movie implements MovieType {
  @Field(() => ID)
  id: string

  createdAt: Date
  updatedAt: Date
  @Field()
  title: string
  @Field()
  director: string
  @Field(() => Genre, { nullable: true })
  genre: $Enums.Genre
  @Field(() => Int)
  duration: number
  @Field()
  releaseDate: Date
  @Field({ nullable: true })
  posterUrl: string

  @Field(() => [Showtime], { nullable: true })
  showtimes?: Showtime[]
}
