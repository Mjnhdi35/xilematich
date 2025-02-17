import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AdminOrderByWithRelationInput } from './order-by.args'
import { AdminWhereInput, AdminWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AdminScalarFieldEnum, {
  name: 'AdminScalarFieldEnum',
})

@ArgsType()
class FindManyAdminArgsStrict
  implements
    RestrictProperties<
      FindManyAdminArgsStrict,
      Omit<Prisma.AdminFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: AdminWhereInput
  @Field({ nullable: true })
  orderBy: AdminOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: AdminWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.AdminScalarFieldEnum], { nullable: true })
  distinct: Prisma.AdminScalarFieldEnum[]
}

@ArgsType()
export class FindManyAdminArgs extends PartialType(FindManyAdminArgsStrict) {}

@ArgsType()
export class FindUniqueAdminArgs {
  where: AdminWhereUniqueInput
}
