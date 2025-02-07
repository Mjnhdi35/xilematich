import { Module } from '@nestjs/common'
import { TicketsService } from './tickets.service'
import { TicketsResolver } from './tickets.resolver'
import { TicketsController } from './tickets.controller'

@Module({
  providers: [TicketsResolver, TicketsService],
  controllers: [TicketsController],
})
export class TicketsModule {}
