import { $Enums, Screen } from '@prisma/client'
import { IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ScreenEntity implements RestrictProperties<ScreenEntity, Screen> {
  createdAt: Date
  updatedAt: Date
  id: string
  cinemaId: string
  @IsInt()
  numberRoom: number
  price: number
  projectionType: $Enums.ProjectionType
  soundSystemType: $Enums.SoundSystemType
}
