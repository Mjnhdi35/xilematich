import { Module } from '@nestjs/common'
import { ManagersService } from './graphql/managers.service'
import { ManagersResolver } from './graphql/managers.resolver'

@Module({
  providers: [ManagersResolver, ManagersService],
})
export class ManagersModule {}
