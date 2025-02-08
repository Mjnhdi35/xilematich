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
  where: ScreenWhereInput
  orderBy: ScreenOrderByWithRelationInput[]
  cursor: ScreenWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ScreenScalarFieldEnum])
  distinct: Prisma.ScreenScalarFieldEnum[]
}

@ArgsType()
export class FindManyScreenArgs extends PartialType(FindManyScreenArgsStrict) {}

@ArgsType()
export class FindUniqueScreenArgs {
  where: ScreenWhereUniqueInput
}
