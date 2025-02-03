import { InputType, PartialType } from '@nestjs/graphql'
import { CreateShowtimeInput } from './create-showtime.input'

@InputType()
export class UpdateShowtimeInput extends PartialType(CreateShowtimeInput) {}
