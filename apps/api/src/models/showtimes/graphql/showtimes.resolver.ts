import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { ShowtimesService } from './showtimes.service'
import { CreateShowtimeInput } from './dto/create-showtime.input'
import { UpdateShowtimeInput } from './dto/update-showtime.input'
import { Showtime } from './entities/showtime.entity'

@Resolver(() => Showtime)
export class ShowtimesResolver {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Mutation(() => Showtime)
  async createShowtime(
    @Args('createShowtimeInput') createShowtimeInput: CreateShowtimeInput,
  ) {
    return await this.showtimesService.create(createShowtimeInput)
  }

  @Query(() => [Showtime], { name: 'showtimes' })
  async findAll() {
    return await this.showtimesService.findAll()
  }

  @Query(() => Showtime, { name: 'showtime' })
  async findOne(@Args('id') id: string) {
    return await this.showtimesService.findOne(id)
  }

  @Mutation(() => Showtime)
  async updateShowtime(
    @Args('id') id: string,
    @Args('updateShowtimeInput') updateShowtimeInput: UpdateShowtimeInput,
  ) {
    return await this.showtimesService.update(id, updateShowtimeInput)
  }

  @Mutation(() => Showtime)
  async deleteShowtime(@Args('id') id: string) {
    return await this.showtimesService.remove(id)
  }
}
