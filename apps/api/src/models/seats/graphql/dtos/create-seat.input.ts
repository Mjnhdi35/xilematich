import { InputType, PickType } from '@nestjs/graphql'
import { Seat } from '../entity/seat.entity'

@InputType()
export class CreateSeatInput extends PickType(
  Seat,
  ['column', 'row', 'screenId'],
  InputType,
) {}
