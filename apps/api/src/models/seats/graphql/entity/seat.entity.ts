import { ObjectType } from '@nestjs/graphql'
import { Seat as SeatType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Seat implements RestrictProperties<Seat, SeatType> {
  row: number
  column: number
  screenId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
