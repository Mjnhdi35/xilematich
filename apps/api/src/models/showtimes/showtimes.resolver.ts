import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ShowtimesService } from './showtimes.service'
import { Showtime } from './entities/showtime.entity'
import { CreateShowtimeInput } from './dto/create-showtime.input'
import { UpdateShowtimeInput } from './dto/update-showtime.input'

@Resolver(() => Showtime)
export class ShowtimesResolver {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Mutation(() => Showtime)
  createShowtime(
    @Args('createShowtimeInput') createShowtimeInput: CreateShowtimeInput,
  ) {
    return this.showtimesService.create(createShowtimeInput)
  }

  @Query(() => [Showtime], { name: 'showtimes' })
  findAll() {
    return this.showtimesService.findAll()
  }

  @Query(() => Showtime, { name: 'showtime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.showtimesService.findOne(id)
  }

  @Mutation(() => Showtime)
  updateShowtime(
    @Args('updateShowtimeInput') updateShowtimeInput: UpdateShowtimeInput,
  ) {
    return this.showtimesService.update(
      updateShowtimeInput.id,
      updateShowtimeInput,
    )
  }

  @Mutation(() => Showtime)
  removeShowtime(@Args('id', { type: () => Int }) id: number) {
    return this.showtimesService.remove(id)
  }
}
