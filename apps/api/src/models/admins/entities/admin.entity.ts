import { ObjectType } from '@nestjs/graphql'
import { Admin as AdminType } from '@prisma/client'

@ObjectType()
export class Admin implements AdminType {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
}
