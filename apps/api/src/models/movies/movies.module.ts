import { Module } from '@nestjs/common'
import { MoviesService } from './graphql/movies.service'
import { MoviesResolver } from './graphql/movies.resolver'

@Module({
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
