import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Screen } from '../entity/screen.entity'

@InputType()
export class CreateScreenInput extends PickType(
  Screen,
  ['id', 'cinemaId', 'projectionType', 'soundSystemType', 'price'],
  InputType,
) {
  rows: number
  columns: number
}
@InputType()
export class CreateScreenInputWithoutCinemaId extends OmitType(
  CreateScreenInput,
  ['cinemaId'],
  InputType,
) {}
