import { Module } from '@nestjs/common'
import { AddressesService } from './graphql/addresses.service'
import { AddressesResolver } from './graphql/addresses.resolver'

@Module({
  providers: [AddressesResolver, AddressesService],
})
export class AddressesModule {}
