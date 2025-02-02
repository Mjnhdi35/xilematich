import { Module } from '@nestjs/common'
import { ScreensService } from './screens.service'
import { ScreensResolver } from './screens.resolver'

@Module({
  providers: [ScreensResolver, ScreensService],
})
export class ScreensModule {}
