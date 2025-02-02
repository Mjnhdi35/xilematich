import {
  Field,
  InputType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { AuthsProviderType } from '@prisma/client'
import { User } from '../entities/user.entity'

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  name: string
}

registerEnumType(AuthsProviderType, {
  name: 'AuthsProviderType',
})

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['name'],
  InputType,
) {
  @Field(() => AuthsProviderType)
  type: AuthsProviderType
}

@InputType()
export class RegisterWithCredentialsInput extends PickType(
  User,
  ['name'],
  InputType,
) {
  email: string
  password: string
}

@InputType()
export class Login extends PickType(RegisterWithCredentialsInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  @Field()
  token: string

  @Field(() => User)
  user: User
}
