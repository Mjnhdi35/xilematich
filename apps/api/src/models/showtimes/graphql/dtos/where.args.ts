import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma, ShowtimeStatus } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { MovieRelationFilter } from 'src/models/movies/graphql/dtos/where.args'
import { ScreenRelationFilter } from 'src/models/screens/graphql/dtos/where.args'

@InputType()
export class ShowtimeWhereUniqueInput {
  id: string
}
@InputType()
export class EnumShowtimeStatusFilter {
  @Field(() => ShowtimeStatus, { nullable: true })
  equals: ShowtimeStatus;
  @Field(() => [ShowtimeStatus], { nullable: true })
  in: ShowtimeStatus[]
  @Field(() => [ShowtimeStatus], { nullable: true })
  notIn: ShowtimeStatus[]
  @Field(() => ShowtimeStatus, { nullable: true })
  not: ShowtimeStatus
}

@InputType()
export class ShowtimeWhereInputStrict
  implements
    RestrictProperties<ShowtimeWhereInputStrict, Prisma.ShowtimeWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  bookings: BookingListRelationFilter
  screenId: StringFilter
  startTime: DateTimeFilter
  @Field(() => EnumShowtimeStatusFilter)
  status: ShowtimeStatus
  movieId: StringFilter
  movie: MovieRelationFilter
  screen: ScreenRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ShowtimeWhereInput[]
  OR: ShowtimeWhereInput[]
  NOT: ShowtimeWhereInput[]
}

@InputType()
export class ShowtimeWhereInput extends PartialType(ShowtimeWhereInputStrict) {}

@InputType()
export class ShowtimeListRelationFilter {
  every?: ShowtimeWhereInput
  some?: ShowtimeWhereInput
  none?: ShowtimeWhereInput
}

@InputType()
export class ShowtimeRelationFilter {
  is?: ShowtimeWhereInput
  isNot?: ShowtimeWhereInput
}
