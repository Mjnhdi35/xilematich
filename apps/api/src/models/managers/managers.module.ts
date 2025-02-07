import { Module } from '@nestjs/common'
import { ManagersService } from './managers.service'
import { ManagersResolver } from './managers.resolver'
import { ManagersController } from './managers.controller'

@Module({
  providers: [ManagersResolver, ManagersService],
  controllers: [ManagersController],
})
export class ManagersModule {}
