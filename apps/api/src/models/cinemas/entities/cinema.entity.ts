import { ObjectType } from '@nestjs/graphql'
import { Cinema as CinemaType } from '@prisma/client'
@ObjectType()
export class Cinema implements CinemaType {
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
}
