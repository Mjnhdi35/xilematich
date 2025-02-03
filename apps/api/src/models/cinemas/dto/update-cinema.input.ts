import { InputType, Field, PartialType } from '@nestjs/graphql'
import { CreateCinemaInput } from './create-cinema.input'

@InputType()
export class UpdateCinemaInput extends PartialType(CreateCinemaInput) {}
