import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Admin as AdminType } from '@prisma/client'
import { User } from 'src/models/users/entities/user.entity'

@ObjectType()
export class Admin implements AdminType {
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  @Field(() => User)
  userId: User['id']
  @Field(() => User)
  user: User
}
