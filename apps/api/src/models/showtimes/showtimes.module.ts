import { Module } from '@nestjs/common'
import { ShowtimesService } from './graphql/showtimes.service'
import { ShowtimesResolver } from './graphql/showtimes.resolver'

@Module({
  providers: [ShowtimesResolver, ShowtimesService],
})
export class ShowtimesModule {}
