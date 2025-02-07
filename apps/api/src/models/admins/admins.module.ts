import { Module } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { AdminsResolver } from './admins.resolver'
import { AdminsController } from './admins.controller'

@Module({
  providers: [AdminsResolver, AdminsService],
  controllers: [AdminsController],
})
export class AdminsModule {}
