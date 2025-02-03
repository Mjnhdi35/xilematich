import { InputType, PartialType } from '@nestjs/graphql'
import { CreateScreenInput } from './create-screen.input'

@InputType()
export class UpdateScreenInput extends PartialType(CreateScreenInput) {}
