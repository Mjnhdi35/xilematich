import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Genre, Movie as MovieType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Genre, { name: 'Genre', description: 'Enum for roles' })

@ObjectType()
export class Movie implements RestrictProperties<Movie, MovieType> {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  director: string
  @Field(() => Genre)
  genre: Genre
  duration: number
  releaseDate: Date
  @Field({ nullable: true })
  posterUrl: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
