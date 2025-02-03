import { Module } from '@nestjs/common'
import { TicketsService } from './graphql/tickets.service'
import { TicketsResolver } from './graphql/tickets.resolver'

@Module({
  providers: [TicketsResolver, TicketsService],
})
export class TicketsModule {}
