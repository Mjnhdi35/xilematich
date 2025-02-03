import {
  Field,
  Float,
  ID,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
import {
  $Enums,
  ProjectionType,
  Screen as ScreenType,
  SoundSystemType,
} from '@prisma/client'
import { Cinema } from '../../cinemas/entities/cinema.entity'
import { Seat } from '../../seats/entities/seat.entity'
import { Showtime } from '../../showtimes/entities/showtime.entity'

registerEnumType(ProjectionType, {
  name: 'ProjectionType',
  description: 'Enum for roles',
})
registerEnumType(SoundSystemType, {
  name: 'SoundSystemType',
  description: 'Enum for roles',
})

@ObjectType()
export class Screen implements ScreenType {
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  @Field(() => Int)
  numberRoom: number

  @Field(() => Float)
  price: number

  @Field(() => ProjectionType)
  projectionType: $Enums.ProjectionType

  @Field(() => SoundSystemType)
  soundSystemType: $Enums.SoundSystemType

  @Field(() => Cinema, { nullable: true })
  cinemaId: Cinema['id']
  @Field(() => [Seat], { nullable: true })
  saets: Seat[]
  @Field(() => Cinema, { nullable: true })
  cinema: string
  @Field(() => [Showtime], { nullable: true })
  showtime: Showtime[]
}
