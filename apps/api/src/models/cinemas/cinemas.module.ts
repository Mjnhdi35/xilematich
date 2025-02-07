import { Module } from '@nestjs/common'
import { CinemasService } from './cinemas.service'
import { CinemasResolver } from './cinemas.resolver'
import { CinemasController } from './cinemas.controller'

@Module({
  providers: [CinemasResolver, CinemasService],
  controllers: [CinemasController],
})
export class CinemasModule {}
