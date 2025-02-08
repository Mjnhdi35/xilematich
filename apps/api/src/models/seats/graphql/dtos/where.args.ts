import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ScreenRelationFilter } from 'src/models/screens/graphql/dtos/where.args'

@InputType()
export class SeatScreenIdRowColumnCompoundUniqueInput {
  screenId: string
  row: number
  column: number
}
@InputType()
export class SeatWhereUniqueInput {
  @Field(() => SeatScreenIdRowColumnCompoundUniqueInput)
  screenId_row_column: SeatScreenIdRowColumnCompoundUniqueInput
}

@InputType()
export class SeatWhereInputStrict
  implements RestrictProperties<SeatWhereInputStrict, Prisma.SeatWhereInput>
{
  row: IntFilter
  column: IntFilter
  screenId: StringFilter
  screen: ScreenRelationFilter
  bookings: BookingListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SeatWhereInput[]
  OR: SeatWhereInput[]
  NOT: SeatWhereInput[]
}

@InputType()
export class SeatWhereInput extends PartialType(SeatWhereInputStrict) {}

@InputType()
export class SeatListRelationFilter {
  every?: SeatWhereInput
  some?: SeatWhereInput
  none?: SeatWhereInput
}

@InputType()
export class SeatRelationFilter {
  is?: SeatWhereInput
  isNot?: SeatWhereInput
}
