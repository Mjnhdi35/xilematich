import { Field, ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Booking implements RestrictProperties<Booking, BookingType> {
  createdAt: Date
  updatedAt: Date
  id: string
  userId: string
  showtimeId: string
  row: number
  column: number
  @Field({ nullable: true })
  screenId: string
  @Field({ nullable: true })
  ticketId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
