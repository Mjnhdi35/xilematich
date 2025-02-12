import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  id: string
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  name: string
  @Field({ nullable: true })
  image: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
@ObjectType()
export class AuthsProvider {
  id: string
  @Field(() => $Enums.AuthsProviderType)
  type: $Enums.AuthsProviderType
}
