import { PartialType } from '@nestjs/swagger'
import { CreateSeat } from './create.dto'

export class UpdateSeat extends PartialType(CreateSeat) {}
