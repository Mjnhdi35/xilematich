import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'

import { User } from '../../../users/graphql/entities/user.entity'
import { Cinema } from '../../../cinemas/graphql/entities/cinema.entity'
@ObjectType()
export class Manager implements ManagerType {
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  @Field()
  user: User
  @Field(() => User)
  userId: User['id']
  @Field(() => Cinema, { nullable: true })
  cinemaId: Cinema['id']
}
