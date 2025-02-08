import { Seat } from '@prisma/client'
import { IsInt, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class SeatEntity implements RestrictProperties<SeatEntity, Seat> {
  @IsInt()
  column: number
  @IsInt()
  row: number
  @IsString()
  screenId: string
}
