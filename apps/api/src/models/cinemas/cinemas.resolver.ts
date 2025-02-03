import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CinemasService } from './cinemas.service'
import { Cinema } from './entities/cinema.entity'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'

@Resolver(() => Cinema)
export class CinemasResolver {
  constructor(private readonly cinemasService: CinemasService) {}

  @Mutation(() => Cinema)
  async createCinema(
    @Args('createCinemaInput') createCinemaInput: CreateCinemaInput,
  ) {
    return await this.cinemasService.create(createCinemaInput)
  }

  @Query(() => [Cinema], { name: 'cinemas' })
  async findAll() {
    return await this.cinemasService.findAll()
  }

  @Query(() => Cinema, { name: 'cinema' })
  async findOne(@Args('id') id: string) {
    return await this.cinemasService.findOne(id)
  }

  @Mutation(() => Cinema)
  async updateCinema(
    @Args('id') id: string,
    @Args('updateCinemaInput') updateCinemaInput: UpdateCinemaInput,
  ) {
    return await this.cinemasService.update(id, updateCinemaInput)
  }

  @Mutation(() => Cinema)
  async deleteCinema(@Args('id') id: string) {
    return await this.cinemasService.remove(id)
  }
}
