import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class TicketWhereUniqueInput {
  id: string
}

@InputType()
export class TicketWhereInputStrict
  implements RestrictProperties<TicketWhereInputStrict, Prisma.TicketWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  userId: StringFilter
  qrCode: StringFilter
  user: UserRelationFilter
  bookings: BookingListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: TicketWhereInput[]
  OR: TicketWhereInput[]
  NOT: TicketWhereInput[]
}

@InputType()
export class TicketWhereInput extends PartialType(TicketWhereInputStrict) {}

@InputType()
export class TicketListRelationFilter {
  every?: TicketWhereInput
  some?: TicketWhereInput
  none?: TicketWhereInput
}

@InputType()
export class TicketRelationFilter {
  is?: TicketWhereInput
  isNot?: TicketWhereInput
}
