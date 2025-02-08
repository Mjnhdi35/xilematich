import { Field, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  address: string
  id: string
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  cinemaId: string
  lat: number
  lng: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
