import { Module } from '@nestjs/common'
import { SeatsService } from './seats.service'
import { SeatsResolver } from './seats.resolver'
import { SeatsController } from './seats.controller'

@Module({
  providers: [SeatsResolver, SeatsService],
  controllers: [SeatsController],
})
export class SeatsModule {}
