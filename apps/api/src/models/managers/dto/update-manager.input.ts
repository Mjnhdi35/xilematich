import { CreateManagerInput } from './create-manager.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateManagerInput extends PartialType(CreateManagerInput) {}
