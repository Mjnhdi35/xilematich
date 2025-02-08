import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CinemaRelationFilter } from 'src/models/cinemas/graphql/dtos/where.args'

@InputType()
export class AddressWhereUniqueInput {
  @Field({ nullable: true })
  id: string
  @Field({ nullable: true })
  cinemaId: string
}

@InputType()
export class AddressWhereInputStrict
  implements
    RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  cinemaId: StringFilter
  address: StringFilter
  lat: FloatFilter
  lng: FloatFilter
  cinema: CinemaRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AddressWhereInput[]
  OR: AddressWhereInput[]
  NOT: AddressWhereInput[]
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) {}

@InputType()
export class AddressListRelationFilter {
  every?: AddressWhereInput
  some?: AddressWhereInput
  none?: AddressWhereInput
}

@InputType()
export class AddressRelationFilter {
  is?: AddressWhereInput
  isNot?: AddressWhereInput
}
