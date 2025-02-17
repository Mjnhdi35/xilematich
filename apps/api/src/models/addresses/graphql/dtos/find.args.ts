import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AddressOrderByWithRelationInput } from './order-by.args'
import { AddressWhereInput, AddressWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AddressScalarFieldEnum, {
  name: 'AddressScalarFieldEnum',
})

@ArgsType()
class FindManyAddressArgsStrict
  implements
    RestrictProperties<
      FindManyAddressArgsStrict,
      Omit<Prisma.AddressFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: AddressWhereInput
  @Field({ nullable: true })
  orderBy: AddressOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: AddressWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.AddressScalarFieldEnum], { nullable: true })
  distinct: Prisma.AddressScalarFieldEnum[]
}

@ArgsType()
export class FindManyAddressArgs extends PartialType(
  FindManyAddressArgsStrict,
) {}

@ArgsType()
export class FindUniqueAddressArgs {
  where: AddressWhereUniqueInput
}
