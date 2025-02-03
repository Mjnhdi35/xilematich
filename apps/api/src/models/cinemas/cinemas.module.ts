import { Module } from '@nestjs/common'
import { CinemasService } from './graphql/cinemas.service'
import { CinemasResolver } from './graphql/cinemas.resolver'

@Module({
  providers: [CinemasResolver, CinemasService],
})
export class CinemasModule {}
