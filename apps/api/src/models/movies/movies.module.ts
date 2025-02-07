import { Module } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MoviesResolver } from './movies.resolver'
import { MoviesController } from './movies.controller'

@Module({
  providers: [MoviesResolver, MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
