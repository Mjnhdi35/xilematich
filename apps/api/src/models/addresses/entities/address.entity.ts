import { Field, Float, ID, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'
import { Cinema } from 'src/models/cinemas/entities/cinema.entity'

@ObjectType()
export class Address implements AddressType {
  @Field()
  address: string
  @Field(() => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  @Field(() => Cinema)
  cinemaId: string
  @Field(() => Cinema)
  cinema: Cinema
  @Field(() => Float, { nullable: true })
  lat: number
  @Field(() => Float, { nullable: true })
  lng: number
}
