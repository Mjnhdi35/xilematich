import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AdminsService } from './admins.service'
import { Admin } from './entities/admin.entity'
import { CreateAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Mutation(() => Admin)
  async createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ) {
    return await this.adminsService.create(createAdminInput)
  }

  @Query(() => [Admin], { name: 'admins' })
  async findAll() {
    return await this.adminsService.findAll()
  }

  @Query(() => Admin, { name: 'admin' })
  async findOne(@Args('id') id: string) {
    return await this.adminsService.findOne(id)
  }

  @Mutation(() => Admin)
  async updateAdmin(
    @Args('id') id: string,
    @Args('updateAdminInput') updateAdminInput: UpdateAdminInput,
  ) {
    return await this.adminsService.update(id, updateAdminInput)
  }

  @Mutation(() => Admin)
  async deleteAdmin(@Args('id') id: string) {
    return await this.adminsService.remove(id)
  }
}
