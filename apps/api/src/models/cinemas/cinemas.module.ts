import { Module } from '@nestjs/common'
import { CinemasService } from './graphql/cinemas.service'
import { CinemasResolver } from './graphql/cinemas.resolver'
import { CinemasController } from './rest/cinemas.controller'

@Module({
  providers: [CinemasResolver, CinemasService],
  exports: [CinemasService],
  controllers: [CinemasController],
})
export class CinemasModule {}
