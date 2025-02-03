import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ManagersService } from './managers.service'
import { Manager } from './entities/manager.entity'
import { CreateManagerInput } from './dto/create-manager.input'
import { UpdateManagerInput } from './dto/update-manager.input'

@Resolver(() => Manager)
export class ManagersResolver {
  constructor(private readonly managersService: ManagersService) {}

  @Mutation(() => Manager)
  async createManager(
    @Args('createManagerInput') createManagerInput: CreateManagerInput,
  ) {
    return await this.managersService.create(createManagerInput)
  }

  @Query(() => [Manager], { name: 'managers' })
  async findAll() {
    return await this.managersService.findAll()
  }

  @Query(() => Manager, { name: 'manager' })
  async findOne(@Args('id') id: string) {
    return await this.managersService.findOne(id)
  }

  @Mutation(() => Manager)
  async updateManager(
    @Args('id') id: string,
    @Args('updateManagerInput') updateManagerInput: UpdateManagerInput,
  ) {
    return await this.managersService.update(id, updateManagerInput)
  }

  @Mutation(() => Manager)
  async deleteManager(@Args('id') id: string) {
    return await this.managersService.remove(id)
  }
}
