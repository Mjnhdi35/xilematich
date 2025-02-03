import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Screen } from './entities/screen.entity'
import { ScreensService } from './screens.service'
import { CreateScreenInput } from './dto/create-screen.input'
import { UpdateScreenInput } from './dto/update-screen.input'

@Resolver(() => Screen)
export class ScreensResolver {
  constructor(private readonly screensService: ScreensService) {}
  @Mutation(() => Screen)
  async createScreen(
    @Args('createScreenInput') createScreenInput: CreateScreenInput,
  ) {
    return await this.screensService.create(createScreenInput)
  }

  @Query(() => [Screen], { name: 'screens' })
  async findAll() {
    return await this.screensService.findAll()
  }

  @Query(() => Screen, { name: 'screen' })
  async findOne(@Args('id') id: string) {
    return await this.screensService.findOne(id)
  }

  @Mutation(() => Screen)
  async updateScreen(
    @Args('id') id: string,
    @Args('updateScreenInput') updateScreenInput: UpdateScreenInput,
  ) {
    return await this.screensService.update(id, updateScreenInput)
  }

  @Mutation(() => Screen)
  async deleteScreen(@Args('id') id: string) {
    return await this.screensService.remove(id)
  }
}
