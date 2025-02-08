import { InputType, PickType } from '@nestjs/graphql'
import { Manager } from '../entity/manager.entity'

@InputType()
export class CreateManagerInput extends PickType(Manager, ['id'], InputType) {}
@InputType()
export class CreateManagerInputWithoutCinemaId extends PickType(
  CreateManagerInput,
  ['id'],
  InputType,
) {}
