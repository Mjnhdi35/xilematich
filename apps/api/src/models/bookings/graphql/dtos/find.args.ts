import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingOrderByWithRelationInput } from './order-by.args'
import { BookingWhereInput, BookingWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.BookingScalarFieldEnum, {
  name: 'BookingScalarFieldEnum',
})

@ArgsType()
class FindManyBookingArgsStrict
  implements
    RestrictProperties<
      FindManyBookingArgsStrict,
      Omit<Prisma.BookingFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: BookingWhereInput
  @Field({ nullable: true })
  orderBy: BookingOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: BookingWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.BookingScalarFieldEnum], { nullable: true })
  distinct: Prisma.BookingScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingArgs extends PartialType(
  FindManyBookingArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingArgs {
  where: BookingWhereUniqueInput
}
