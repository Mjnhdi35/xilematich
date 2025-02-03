import { Module } from '@nestjs/common'
import { ScreensService } from './graphql/screens.service'
import { ScreensResolver } from './graphql/screens.resolver'

@Module({
  providers: [ScreensResolver, ScreensService],
})
export class ScreensModule {}
