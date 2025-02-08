import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CinemaOrderByWithRelationInput } from './order-by.args'
import { CinemaWhereInput, CinemaWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CinemaScalarFieldEnum, {
  name: 'CinemaScalarFieldEnum',
})

@ArgsType()
class FindManyCinemaArgsStrict
  implements
    RestrictProperties<
      FindManyCinemaArgsStrict,
      Omit<Prisma.CinemaFindManyArgs, 'include' | 'select'>
    >
{
  where: CinemaWhereInput
  orderBy: CinemaOrderByWithRelationInput[]
  cursor: CinemaWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CinemaScalarFieldEnum])
  distinct: Prisma.CinemaScalarFieldEnum[]
}

@ArgsType()
export class FindManyCinemaArgs extends PartialType(FindManyCinemaArgsStrict) {}

@ArgsType()
export class FindUniqueCinemaArgs {
  where: CinemaWhereUniqueInput
}
