import { PartialType } from '@nestjs/swagger'
import { CreateCinema } from './create.dto'
import { Cinema } from '@prisma/client'

export class UpdateCinema extends PartialType(CreateCinema) {
  id: Cinema['id']
}
