import { Module } from '@nestjs/common'
import { ScreensService } from './graphql/screens.service'
import { ScreensResolver } from './graphql/screens.resolver'
import { ScreensController } from './rest/screens.controller'

@Module({
  providers: [ScreensResolver, ScreensService],
  exports: [ScreensService],
  controllers: [ScreensController],
})
export class ScreensModule {}
