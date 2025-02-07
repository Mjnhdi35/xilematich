import { Module } from '@nestjs/common'
import { ScreensService } from './screens.service'
import { ScreensResolver } from './screens.resolver'
import { ScreensController } from './screens.controller'

@Module({
  providers: [ScreensResolver, ScreensService],
  controllers: [ScreensController],
})
export class ScreensModule {}
