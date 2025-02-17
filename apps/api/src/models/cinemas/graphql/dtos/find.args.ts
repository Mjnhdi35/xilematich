import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CinemaOrderByWithRelationInput } from './order-by.args'
import { CinemaWhereInput, CinemaWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CinemaScalarFieldEnum, {
  name: 'CinemaScalarFieldEnum',
})

@ArgsType()
export class FindManyCinemaArgsStrict
  implements
    RestrictProperties<
      FindManyCinemaArgsStrict,
      Omit<Prisma.CinemaFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: CinemaWhereInput
  @Field({ nullable: true })
  orderBy: CinemaOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: CinemaWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.CinemaScalarFieldEnum], { nullable: true })
  distinct: Prisma.CinemaScalarFieldEnum[]
}

@ArgsType()
export class FindManyCinemaArgs extends PartialType(FindManyCinemaArgsStrict) {}

@ArgsType()
export class FindUniqueCinemaArgs {
  where: CinemaWhereUniqueInput
}
