import { OmitType } from '@nestjs/swagger'
import { ScreenEntity } from '../entity/screen.entity'

export class CreateScreen extends OmitType(ScreenEntity, [
  'createdAt',
  'updatedAt',
]) {}
