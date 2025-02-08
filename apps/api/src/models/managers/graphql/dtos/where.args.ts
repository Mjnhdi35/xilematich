import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CinemaRelationFilter } from 'src/models/cinemas/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ManagerWhereUniqueInput {
  id: string
}

@InputType()
export class ManagerWhereInputStrict
  implements
    RestrictProperties<ManagerWhereInputStrict, Prisma.ManagerWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter

  user: UserRelationFilter

  cinema: CinemaRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ManagerWhereInput[]
  OR: ManagerWhereInput[]
  NOT: ManagerWhereInput[]
}

@InputType()
export class ManagerWhereInput extends PartialType(ManagerWhereInputStrict) {}

@InputType()
export class ManagerListRelationFilter {
  every?: ManagerWhereInput
  some?: ManagerWhereInput
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter {
  is?: ManagerWhereInput
  isNot?: ManagerWhereInput
}
