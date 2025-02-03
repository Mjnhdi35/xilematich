import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'
import { Cinema } from '../../cinemas/entities/cinema.entity'
import { User } from '../../users/entities/user.entity'
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
