import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AddressOrderByWithRelationInput } from 'src/models/addresses/graphql/dtos/order-by.args'
import { ManagerOrderByRelationAggregateInput } from 'src/models/managers/graphql/dtos/order-by.args'
import { ScreenOrderByRelationAggregateInput } from 'src/models/screens/graphql/dtos/order-by.args'

@InputType()
export class CinemaOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CinemaOrderByWithRelationInputStrict,
      Prisma.CinemaOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder

  managers: ManagerOrderByRelationAggregateInput

  screens: ScreenOrderByRelationAggregateInput

  address: AddressOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CinemaOrderByWithRelationInput extends PartialType(
  CinemaOrderByWithRelationInputStrict,
) {}

@InputType()
export class CinemaOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
