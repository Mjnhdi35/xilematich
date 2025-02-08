import { Module } from '@nestjs/common'
import { TicketsService } from './graphql/tickets.service'
import { TicketsResolver } from './graphql/tickets.resolver'
import { TicketsController } from './rest/tickets.controller'

@Module({
  providers: [TicketsResolver, TicketsService],
  exports: [TicketsService],
  controllers: [TicketsController],
})
export class TicketsModule {}
