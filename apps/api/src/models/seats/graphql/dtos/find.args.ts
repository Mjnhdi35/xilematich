import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SeatOrderByWithRelationInput } from './order-by.args'
import { SeatWhereInput, SeatWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.SeatScalarFieldEnum, {
  name: 'SeatScalarFieldEnum',
})

@ArgsType()
class FindManySeatArgsStrict
  implements
    RestrictProperties<
      FindManySeatArgsStrict,
      Omit<Prisma.SeatFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: SeatWhereInput
  @Field({ nullable: true })
  orderBy: SeatOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: SeatWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.SeatScalarFieldEnum], { nullable: true })
  distinct: Prisma.SeatScalarFieldEnum[]
}

@ArgsType()
export class FindManySeatArgs extends PartialType(FindManySeatArgsStrict) {}

@ArgsType()
export class FindUniqueSeatArgs {
  where: SeatWhereUniqueInput
}
