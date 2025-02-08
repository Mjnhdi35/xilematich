import { OmitType } from '@nestjs/swagger'
import { MovieEntity } from '../entity/movie.entity'

export class CreateMovie extends OmitType(MovieEntity, [
  'createdAt',
  'updatedAt',
]) {}
