import { ObjectType } from '@nestjs/graphql'
import { $Enums, Movie as MovieType } from '@prisma/client'
@ObjectType()
export class Movie implements MovieType {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  director: string
  genre: $Enums.Genre
  duration: number
  releaseDate: Date
  posterUrl: string
}
