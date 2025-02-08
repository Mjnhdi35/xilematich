import { ObjectType } from '@nestjs/graphql'
import { Cinema as CinemaType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Cinema implements RestrictProperties<Cinema, CinemaType> {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
