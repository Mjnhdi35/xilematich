import {
  InputType,
  Field,
  registerEnumType,
  PickType,
  ObjectType,
} from '@nestjs/graphql'
import { AuthsProviderType } from '@prisma/client'
import { User } from '../entities/user.entity'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

registerEnumType(AuthsProviderType, {
  name: 'AuthsProviderType',
})

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['id', 'name'],
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
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string
  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
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
