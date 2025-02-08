import { OmitType } from '@nestjs/swagger'
import { CinemaEntity } from '../entity/cinema.entity'

export class CreateCinema extends OmitType(CinemaEntity, [
  'createdAt',
  'updatedAt',
]) {}
