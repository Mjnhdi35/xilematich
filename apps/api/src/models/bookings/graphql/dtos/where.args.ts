import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { SeatRelationFilter } from 'src/models/seats/graphql/dtos/where.args'
import { ShowtimeRelationFilter } from 'src/models/showtimes/graphql/dtos/where.args'
import { TicketRelationFilter } from 'src/models/tickets/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class BookingUniqueSeatShowtimeCompoundUniqueInput {
  screenId: string
  row: number
  column: number
  showtimeId: string
}

@InputType()
export class BookingWhereUniqueInput {
  id: string
}

@InputType()
export class BookingWhereInputStrict
  implements
    RestrictProperties<BookingWhereInputStrict, Prisma.BookingWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  userId: StringFilter
  showtimeId: StringFilter
  row: IntFilter
  column: IntFilter
  screenId: StringFilter
  ticketId: StringFilter
  user: UserRelationFilter
  showtime: ShowtimeRelationFilter
  seat: SeatRelationFilter
  ticket: TicketRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingWhereInput[]
  OR: BookingWhereInput[]
  NOT: BookingWhereInput[]
}

@InputType()
export class BookingWhereInput extends PartialType(BookingWhereInputStrict) {}

@InputType()
export class BookingListRelationFilter {
  every?: BookingWhereInput
  some?: BookingWhereInput
  none?: BookingWhereInput
}

@InputType()
export class BookingRelationFilter {
  is?: BookingWhereInput
  isNot?: BookingWhereInput
}
