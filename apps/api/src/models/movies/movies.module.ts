import { Module } from '@nestjs/common'
import { MoviesService } from './graphql/movies.service'
import { MoviesResolver } from './graphql/movies.resolver'
import { MoviesController } from './rest/movies.controller'

@Module({
  providers: [MoviesResolver, MoviesService],
  exports: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
