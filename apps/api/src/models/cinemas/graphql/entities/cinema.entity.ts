import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Cinema as CinemaType } from '@prisma/client'
import { Address } from '../../../addresses/graphql/entities/address.entity'
import { Manager } from '../../../managers/graphql/entities/manager.entity'
import { Screen } from '../../../screens/graphql/entities/screen.entity'

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

  @Field(() => [Screen], { nullable: true })
  screens: Screen[]
}
