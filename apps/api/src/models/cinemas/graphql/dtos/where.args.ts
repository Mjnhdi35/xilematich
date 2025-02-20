import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/graphql/dtos/where.args'
import { ManagerListRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ScreenListRelationFilter } from 'src/models/screens/graphql/dtos/where.args'

@InputType()
export class CinemaWhereUniqueInput {
  id: string
}

@InputType()
export class CinemaWhereInputStrict
  implements RestrictProperties<CinemaWhereInputStrict, Prisma.CinemaWhereInput>
{
  @Field({ nullable: true })
  createdAt: DateTimeFilter
  @Field({ nullable: true })
  updatedAt: DateTimeFilter
  @Field({ nullable: true })
  id: StringFilter
  @Field({ nullable: true })
  name: StringFilter
  @Field({ nullable: true })
  managers: ManagerListRelationFilter
  @Field({ nullable: true })
  screens: ScreenListRelationFilter
  @Field({ nullable: true })
  address: AddressRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CinemaWhereInput[]
  OR: CinemaWhereInput[]
  NOT: CinemaWhereInput[]
}

@InputType()
export class CinemaWhereInput extends PartialType(CinemaWhereInputStrict) {}

@InputType()
export class CinemaListRelationFilter {
  every?: CinemaWhereInput
  some?: CinemaWhereInput
  none?: CinemaWhereInput
}

@InputType()
export class CinemaRelationFilter {
  is?: CinemaWhereInput
  isNot?: CinemaWhereInput
}
