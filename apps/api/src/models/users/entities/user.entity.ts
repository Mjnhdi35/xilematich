import { ObjectType, Field, ID } from '@nestjs/graphql'
import { $Enums } from '@prisma/client'
import { FieldError } from '../../../common/types/field-error.type'
import { IMutationResponse } from '../../../common/types/mutation-response.type'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string
  @Field({ nullable: true })
  name?: string
  @Field({ nullable: true })
  createdAt: Date
  @Field({ nullable: true })
  updatedAt: Date
}

@ObjectType()
export class AuthsProvider {
  @Field(() => ID)
  id: string
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
