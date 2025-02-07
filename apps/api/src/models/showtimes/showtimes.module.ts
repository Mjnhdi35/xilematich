import { Module } from '@nestjs/common'
import { ShowtimesService } from './showtimes.service'
import { ShowtimesResolver } from './showtimes.resolver'
import { ShowtimesController } from './showtimes.controller'

@Module({
  providers: [ShowtimesResolver, ShowtimesService],
  controllers: [ShowtimesController],
})
export class ShowtimesModule {}
