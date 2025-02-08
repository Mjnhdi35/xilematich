import {
  Field,
  Float,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
import {
  ProjectionType,
  Screen as ScreenType,
  SoundSystemType,
} from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(ProjectionType, {
  name: 'ProjectionType',
  description: 'Enum for screen projection types',
})
registerEnumType(SoundSystemType, {
  name: 'SoundSystemType',
  description: 'Enum for sound system types',
})

@ObjectType()
export class Screen implements RestrictProperties<Screen, ScreenType> {
  id: string
  createdAt: Date
  updatedAt: Date
  cinemaId: string
  @Field(() => Int)
  numberRoom: number
  @Field(() => Float)
  price: number
  @Field(() => ProjectionType)
  projectionType: ProjectionType
  @Field(() => SoundSystemType)
  soundSystemType: SoundSystemType
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
