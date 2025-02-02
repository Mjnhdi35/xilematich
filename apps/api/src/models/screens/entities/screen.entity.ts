import { ObjectType } from '@nestjs/graphql'
import { $Enums, Screen as ScreenType } from '@prisma/client'
@ObjectType()
export class Screen implements ScreenType {
  id: string
  createdAt: Date
  updatedAt: Date
  numberRoom: number
  price: number
  cinemaId: string
  projectionType: $Enums.ProjectionType
  soundSystemType: $Enums.SoundSystemType
}
