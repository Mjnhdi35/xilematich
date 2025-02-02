import { ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'
@ObjectType()
export class Manager implements ManagerType {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  cinemaId: string
}
