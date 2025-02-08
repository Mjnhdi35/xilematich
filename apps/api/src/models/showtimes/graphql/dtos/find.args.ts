import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ShowtimeOrderByWithRelationInput } from './order-by.args'
import { ShowtimeWhereInput, ShowtimeWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ShowtimeScalarFieldEnum, {
  name: 'ShowtimeScalarFieldEnum',
})

@ArgsType()
class FindManyShowtimeArgsStrict
  implements
    RestrictProperties<
      FindManyShowtimeArgsStrict,
      Omit<Prisma.ShowtimeFindManyArgs, 'include' | 'select'>
    >
{
  where: ShowtimeWhereInput
  orderBy: ShowtimeOrderByWithRelationInput[]
  cursor: ShowtimeWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ShowtimeScalarFieldEnum])
  distinct: Prisma.ShowtimeScalarFieldEnum[]
}

@ArgsType()
export class FindManyShowtimeArgs extends PartialType(
  FindManyShowtimeArgsStrict,
) {}

@ArgsType()
export class FindUniqueShowtimeArgs {
  where: ShowtimeWhereUniqueInput
}
