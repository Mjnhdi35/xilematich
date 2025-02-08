import { InputType, PickType } from '@nestjs/graphql'
import { Address } from '../entity/address.entity'

@InputType()
export class CreateAddressInput extends PickType(
  Address,
  ['cinemaId', 'address', 'lat', 'lng'],
  InputType,
) {}
@InputType()
export class CreateAddressInputWithoutCinemaId extends PickType(
  CreateAddressInput,
  ['address', 'lat', 'lng'],
  InputType,
) {}
