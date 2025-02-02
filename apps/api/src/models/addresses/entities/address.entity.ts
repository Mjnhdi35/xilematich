import { ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'

@ObjectType()
export class Address implements AddressType {
  address: string
  id: string
  createdAt: Date
  updatedAt: Date
  cinemaId: string
  lat: number
  lng: number
}
