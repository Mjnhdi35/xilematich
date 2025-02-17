import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ScreenOrderByWithRelationInput } from './order-by.args'
import { ScreenWhereInput, ScreenWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ScreenScalarFieldEnum, {
  name: 'ScreenScalarFieldEnum',
})

@ArgsType()
class FindManyScreenArgsStrict
  implements
    RestrictProperties<
      FindManyScreenArgsStrict,
      Omit<Prisma.ScreenFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: ScreenWhereInput
  @Field({ nullable: true })
  orderBy: ScreenOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: ScreenWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.ScreenScalarFieldEnum], { nullable: true })
  distinct: Prisma.ScreenScalarFieldEnum[]
}

@ArgsType()
export class FindManyScreenArgs extends PartialType(FindManyScreenArgsStrict) {}

@ArgsType()
export class FindUniqueScreenArgs {
  where: ScreenWhereUniqueInput
}
