import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Cinema as CinemaType } from '@prisma/client'
import { Manager } from '../../managers/entities/manager.entity'
import { Address } from '../../addresses/entities/address.entity'
import { Screen } from '../../screens/entities/screen.entity'
@ObjectType()
export class Cinema implements CinemaType {
  @Field()
  name: string
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date

  @Field(() => Address, { nullable: true })
  address?: Address

  @Field(() => [Manager], { nullable: true })
  managers?: Manager[]

  @Field(() => Screen, { nullable: true })
  screens?: Screen
}
