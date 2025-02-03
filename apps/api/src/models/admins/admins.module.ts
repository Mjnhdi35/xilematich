import { Module } from '@nestjs/common'
import { AdminsService } from './graphql/admins.service'
import { AdminsResolver } from './graphql/admins.resolver'

@Module({
  providers: [AdminsResolver, AdminsService],
})
export class AdminsModule {}
