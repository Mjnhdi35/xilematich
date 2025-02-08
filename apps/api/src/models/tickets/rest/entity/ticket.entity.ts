import { Ticket } from '@prisma/client'
import { IsOptional } from 'class-validator'

import { RestrictProperties } from 'src/common/dtos/common.input'

export class TicketEntity implements RestrictProperties<TicketEntity, Ticket> {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  @IsOptional()
  qrCode: string
}
