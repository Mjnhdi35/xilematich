import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma, ProjectionType, SoundSystemType } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CinemaRelationFilter } from 'src/models/cinemas/graphql/dtos/where.args'
import { SeatListRelationFilter } from 'src/models/seats/graphql/dtos/where.args'
import { ShowtimeListRelationFilter } from 'src/models/showtimes/graphql/dtos/where.args'

@InputType()
export class ScreenWhereUniqueInput {
  id: string
}

@InputType()
export class EnumSoundSystemTypeFilter {
  @Field(() => SoundSystemType, { nullable: true })
  equals?: SoundSystemType;
  @Field(() => [SoundSystemType], { nullable: true })
  in?: SoundSystemType[]
  @Field(() => [SoundSystemType], { nullable: true })
  notIn?: SoundSystemType[]
  @Field(() => SoundSystemType, { nullable: true })
  not?: SoundSystemType
}

@InputType()
export class EnumProjectionTypeFilter {
  @Field(() => ProjectionType, { nullable: true })
  equals?: ProjectionType;
  @Field(() => [ProjectionType], { nullable: true })
  in?: ProjectionType[]
  @Field(() => [ProjectionType], { nullable: true })
  notIn?: ProjectionType[]
  @Field(() => ProjectionType, { nullable: true })
  not?: ProjectionType
}
@InputType()
export class ScreenWhereInputStrict
  implements RestrictProperties<ScreenWhereInputStrict, Prisma.ScreenWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  showtimes: ShowtimeListRelationFilter
  numberRoom: IntFilter
  price: FloatFilter
  cinemaId: StringFilter
  projectionType: EnumProjectionTypeFilter
  soundSystemType: EnumSoundSystemTypeFilter
  cinema: CinemaRelationFilter
  seats: SeatListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ScreenWhereInput[]
  OR: ScreenWhereInput[]
  NOT: ScreenWhereInput[]
}

@InputType()
export class ScreenWhereInput extends PartialType(ScreenWhereInputStrict) {}

@InputType()
export class ScreenListRelationFilter {
  every?: ScreenWhereInput
  some?: ScreenWhereInput
  none?: ScreenWhereInput
}

@InputType()
export class ScreenRelationFilter {
  is?: ScreenWhereInput
  isNot?: ScreenWhereInput
}
