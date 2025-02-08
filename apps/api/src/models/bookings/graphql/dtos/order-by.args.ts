import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { SeatOrderByWithRelationInput } from 'src/models/seats/graphql/dtos/order-by.args'
import { ShowtimeOrderByWithRelationInput } from 'src/models/showtimes/graphql/dtos/order-by.args'
import { TicketOrderByWithRelationInput } from 'src/models/tickets/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class BookingOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingOrderByWithRelationInputStrict,
      Prisma.BookingOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  userId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  showtimeId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  row: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  column: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  screenId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  ticketId: Prisma.SortOrder

  user: UserOrderByWithRelationInput

  showtime: ShowtimeOrderByWithRelationInput

  seat: SeatOrderByWithRelationInput

  ticket: TicketOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class BookingOrderByWithRelationInput extends PartialType(
  BookingOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
