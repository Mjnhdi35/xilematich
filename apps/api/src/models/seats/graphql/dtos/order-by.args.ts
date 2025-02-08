import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { ScreenOrderByWithRelationInput } from 'src/models/screens/graphql/dtos/order-by.args'

@InputType()
export class SeatOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      SeatOrderByWithRelationInputStrict,
      Prisma.SeatOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  column: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  row: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  screenId: Prisma.SortOrder

  bookings: BookingOrderByRelationAggregateInput

  screen: ScreenOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class SeatOrderByWithRelationInput extends PartialType(
  SeatOrderByWithRelationInputStrict,
) {}

@InputType()
export class SeatOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
