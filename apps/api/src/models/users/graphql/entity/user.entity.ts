import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { FieldError } from 'src/common/response/field-error.mutation'
import { IMutationResponse } from 'src/common/response/mutation-response'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  id: string
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  name: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
@ObjectType()
export class AuthsProvider {
  uid: string
  @Field(() => $Enums.AuthsProviderType)
  type: $Enums.AuthsProviderType
}

@ObjectType({ implements: IMutationResponse })
export class UserMutationResponse implements IMutationResponse {
  code: number
  success: boolean
  message?: string

  @Field({ nullable: true })
  user?: User

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]
}

@ObjectType({ implements: IMutationResponse })
export class LoginOutputMutationResponse implements IMutationResponse {
  @Field()
  token: string

  code: number
  success: boolean
  message?: string

  @Field({ nullable: true })
  user?: User

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]
}
