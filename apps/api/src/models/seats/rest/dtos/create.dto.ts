import { PickType } from '@nestjs/swagger'
import { SeatEntity } from '../entity/seat.entity'

export class CreateSeat extends PickType(SeatEntity, [
  'column',
  'row',
  'screenId',
]) {}
