import { Field, InputType, PickType } from '@nestjs/graphql'
import { Cinema } from '../entity/cinema.entity'
import { CreateAddressInputWithoutCinemaId } from 'src/models/addresses/graphql/dtos/create-address.input'
import { CreateManagerInputWithoutCinemaId } from 'src/models/managers/graphql/dtos/create-manager.input'
import { CreateScreenInputWithoutCinemaId } from 'src/models/screens/graphql/dtos/create-screen.input'

@InputType()
export class CreateCinemaInput extends PickType(Cinema, ['name'], InputType) {
  @Field(() => [CreateManagerInputWithoutCinemaId])
  managers: CreateManagerInputWithoutCinemaId[]
  @Field(() => CreateAddressInputWithoutCinemaId)
  address: CreateAddressInputWithoutCinemaId
  @Field(() => [CreateScreenInputWithoutCinemaId])
  screens: CreateScreenInputWithoutCinemaId[]
}
