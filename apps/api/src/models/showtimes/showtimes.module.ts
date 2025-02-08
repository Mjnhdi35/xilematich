import { Module } from '@nestjs/common'
import { ShowtimesService } from './graphql/showtimes.service'
import { ShowtimesResolver } from './graphql/showtimes.resolver'
import { ShowtimesController } from './rest/showtimes.controller'

@Module({
  providers: [ShowtimesResolver, ShowtimesService],
  exports: [ShowtimesService],
  controllers: [ShowtimesController],
})
export class ShowtimesModule {}
