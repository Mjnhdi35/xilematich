import { PartialType } from '@nestjs/swagger'
import { CreateMovie } from './create.dto'
import { Movie } from '@prisma/client'

export class UpdateMovie extends PartialType(CreateMovie) {
  id: Movie['id']
}
