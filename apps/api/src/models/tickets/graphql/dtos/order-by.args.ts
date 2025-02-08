import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class TicketOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      TicketOrderByWithRelationInputStrict,
      Prisma.TicketOrderByWithRelationInput
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
  @Field(() => Prisma.SortOrder, { nullable: true })
  qrCode: Prisma.SortOrder
  @Field(() => UserOrderByWithRelationInput)
  user: UserOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput)
  bookings: BookingOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class TicketOrderByWithRelationInput extends PartialType(
  TicketOrderByWithRelationInputStrict,
) {}

@InputType()
export class TicketOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
