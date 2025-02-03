import { Module } from '@nestjs/common'
import { SeatsResolver } from './graphql/seats.resolver'
import { SeatsService } from './graphql/seats.service'

@Module({
  providers: [SeatsResolver, SeatsService],
})
export class SeatsModule {}
