import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ShowtimeOrderByRelationAggregateInput } from 'src/models/showtimes/graphql/dtos/order-by.args'

@InputType()
export class MovieOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      MovieOrderByWithRelationInputStrict,
      Prisma.MovieOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  director: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  genre: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  duration: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  releaseDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  posterUrl: Prisma.SortOrder

  showtimes: ShowtimeOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class MovieOrderByWithRelationInput extends PartialType(
  MovieOrderByWithRelationInputStrict,
) {}

@InputType()
export class MovieOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
