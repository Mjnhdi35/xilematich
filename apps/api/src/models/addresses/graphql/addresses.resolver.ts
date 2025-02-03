import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AddressesService } from './addresses.service'
import { Address } from './entities/address.entity'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(private readonly addressesService: AddressesService) {}

  @Mutation(() => Address)
  async createAddress(
    @Args('createAddressInput') createAddressInput: CreateAddressInput,
  ) {
    return await this.addressesService.create(createAddressInput)
  }

  @Query(() => [Address], { name: 'addresses' })
  async findAll() {
    return await this.addressesService.findAll()
  }

  @Query(() => Address, { name: 'address' })
  async findOne(@Args('id') id: string) {
    return await this.addressesService.findOne(id)
  }

  @Mutation(() => Address)
  async updateAddress(
    @Args('id') id: string,
    @Args('updateAddressInput') updateAddressInput: UpdateAddressInput,
  ) {
    return await this.addressesService.update(id, updateAddressInput)
  }

  @Mutation(() => Address)
  async deleteAddress(@Args('id') id: string) {
    return await this.addressesService.remove(id)
  }
}
