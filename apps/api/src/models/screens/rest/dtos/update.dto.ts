import { PartialType } from '@nestjs/swagger'
import { CreateScreen } from './create.dto'
import { Screen } from '@prisma/client'

export class UpdateScreen extends PartialType(CreateScreen) {
  id: Screen['id']
}
