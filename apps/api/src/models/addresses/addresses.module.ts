import { Module } from '@nestjs/common'
import { AddressesService } from './addresses.service'
import { AddressesResolver } from './addresses.resolver'
import { AddressesController } from './addresses.controller'

@Module({
  providers: [AddressesResolver, AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
