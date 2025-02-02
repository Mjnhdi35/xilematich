import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ScreensService } from './screens.service'
import { Screen } from './entities/screen.entity'
import { CreateScreenInput } from './dto/create-screen.input'
import { UpdateScreenInput } from './dto/update-screen.input'

@Resolver(() => Screen)
export class ScreensResolver {
  constructor(private readonly screensService: ScreensService) {}

  @Mutation(() => Screen)
  createScreen(
    @Args('createScreenInput') createScreenInput: CreateScreenInput,
  ) {
    return this.screensService.create(createScreenInput)
  }

  @Query(() => [Screen], { name: 'screens' })
  findAll() {
    return this.screensService.findAll()
  }

  @Query(() => Screen, { name: 'screen' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.screensService.findOne(id)
  }

  @Mutation(() => Screen)
  updateScreen(
    @Args('updateScreenInput') updateScreenInput: UpdateScreenInput,
  ) {
    return this.screensService.update(updateScreenInput.id, updateScreenInput)
  }

  @Mutation(() => Screen)
  removeScreen(@Args('id', { type: () => Int }) id: number) {
    return this.screensService.remove(id)
  }
}
