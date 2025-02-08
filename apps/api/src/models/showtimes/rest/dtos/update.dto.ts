import { PartialType } from '@nestjs/swagger'
import { CreateShowtime } from './create.dto'
import { Showtime } from '@prisma/client'

export class UpdateShowtime extends PartialType(CreateShowtime) {
  id: Showtime['id']
}
