import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ManagersService } from './managers.service'
import { Manager } from './entities/manager.entity'
import { CreateManagerInput } from './dto/create-manager.input'
import { UpdateManagerInput } from './dto/update-manager.input'

@Resolver(() => Manager)
export class ManagersResolver {
  constructor(private readonly managersService: ManagersService) {}

  @Mutation(() => Manager)
  createManager(
    @Args('createManagerInput') createManagerInput: CreateManagerInput,
  ) {
    return this.managersService.create(createManagerInput)
  }

  @Query(() => [Manager], { name: 'managers' })
  findAll() {
    return this.managersService.findAll()
  }

  @Query(() => Manager, { name: 'manager' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.managersService.findOne(id)
  }

  @Mutation(() => Manager)
  updateManager(
    @Args('updateManagerInput') updateManagerInput: UpdateManagerInput,
  ) {
    return this.managersService.update(
      updateManagerInput.id,
      updateManagerInput,
    )
  }

  @Mutation(() => Manager)
  removeManager(@Args('id', { type: () => Int }) id: number) {
    return this.managersService.remove(id)
  }
}
