import { $Enums, Movie } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class MovieEntity implements RestrictProperties<MovieEntity, Movie> {
  createdAt: Date
  updatedAt: Date
  id: string
  title: string
  director: string
  @IsOptional()
  genre: $Enums.Genre
  duration: number
  releaseDate: Date
  @IsOptional()
  posterUrl: string
}
