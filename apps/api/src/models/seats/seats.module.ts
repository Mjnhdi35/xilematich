import { Module } from '@nestjs/common'
import { SeatsService } from './graphql/seats.service'
import { SeatsResolver } from './graphql/seats.resolver'
import { SeatsController } from './rest/seats.controller'

@Module({
  providers: [SeatsResolver, SeatsService],
  exports: [SeatsService],
  controllers: [SeatsController],
})
export class SeatsModule {}
