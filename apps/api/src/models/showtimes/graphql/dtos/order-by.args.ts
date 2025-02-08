import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { MovieOrderByWithRelationInput } from 'src/models/movies/graphql/dtos/order-by.args'
import { ScreenOrderByWithRelationInput } from 'src/models/screens/graphql/dtos/order-by.args'

@InputType()
export class ShowtimeOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ShowtimeOrderByWithRelationInputStrict,
      Prisma.ShowtimeOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  startTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  movieId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  screenId: Prisma.SortOrder

  movie: MovieOrderByWithRelationInput

  screen: ScreenOrderByWithRelationInput

  bookings: BookingOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ShowtimeOrderByWithRelationInput extends PartialType(
  ShowtimeOrderByWithRelationInputStrict,
) {}

@InputType()
export class ShowtimeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
