import { OmitType } from '@nestjs/swagger'
import { ShowtimeEntity } from '../entity/showtime.entity'

export class CreateShowtime extends OmitType(ShowtimeEntity, [
  'createdAt',
  'updatedAt',
]) {}
