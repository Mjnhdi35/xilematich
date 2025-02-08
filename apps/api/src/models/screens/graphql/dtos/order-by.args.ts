import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CinemaOrderByWithRelationInput } from 'src/models/cinemas/graphql/dtos/order-by.args'
import { SeatOrderByRelationAggregateInput } from 'src/models/seats/graphql/dtos/order-by.args'
import { ShowtimeOrderByRelationAggregateInput } from 'src/models/showtimes/graphql/dtos/order-by.args'

@InputType()
export class ScreenOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ScreenOrderByWithRelationInputStrict,
      Prisma.ScreenOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  numberRoom: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  price: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  cinemaId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  projectionType: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  soundSystemType: Prisma.SortOrder

  cinema: CinemaOrderByWithRelationInput
  seats: SeatOrderByRelationAggregateInput
  showtimes: ShowtimeOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ScreenOrderByWithRelationInput extends PartialType(
  ScreenOrderByWithRelationInputStrict,
) {}

@InputType()
export class ScreenOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
