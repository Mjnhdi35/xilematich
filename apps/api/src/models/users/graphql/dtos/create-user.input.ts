import {
  Field,
  InputType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { User } from '../entity/user.entity'
import { AuthsProviderType } from '@prisma/client'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

registerEnumType(AuthsProviderType, {
  name: 'AuthsProviderType',
})

@InputType()
export class CreateUserInput extends PickType(
  User,
  ['id', 'name', 'image'],
  InputType,
) {}

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['id', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthsProviderType)
  type: AuthsProviderType
}

@InputType()
export class RegisterWithCredentialsInput extends PickType(
  User,
  ['name', 'image'],
  InputType,
) {
  @IsEmail()
  email: string
  @IsNotEmpty()
  @MinLength(8)
  password: string
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialsInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  token: string
  user: User
}
