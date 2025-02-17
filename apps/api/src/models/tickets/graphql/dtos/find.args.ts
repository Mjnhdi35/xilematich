import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { TicketOrderByWithRelationInput } from './order-by.args'
import { TicketWhereInput, TicketWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.TicketScalarFieldEnum, {
  name: 'TicketScalarFieldEnum',
})

@ArgsType()
class FindManyTicketArgsStrict
  implements
    RestrictProperties<
      FindManyTicketArgsStrict,
      Omit<Prisma.TicketFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: TicketWhereInput
  @Field({ nullable: true })
  orderBy: TicketOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: TicketWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.TicketScalarFieldEnum], { nullable: true })
  distinct: Prisma.TicketScalarFieldEnum[]
}

@ArgsType()
export class FindManyTicketArgs extends PartialType(FindManyTicketArgsStrict) {}

@ArgsType()
export class FindUniqueTicketArgs {
  where: TicketWhereUniqueInput
}
