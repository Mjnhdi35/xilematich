import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CinemasService } from './cinemas.service'
import { Cinema } from './entities/cinema.entity'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'

@Resolver(() => Cinema)
export class CinemasResolver {
  constructor(private readonly cinemasService: CinemasService) {}

  @Mutation(() => Cinema)
  createCinema(
    @Args('createCinemaInput') createCinemaInput: CreateCinemaInput,
  ) {
    return this.cinemasService.create(createCinemaInput)
  }

  @Query(() => [Cinema], { name: 'cinemas' })
  findAll() {
    return this.cinemasService.findAll()
  }

  @Query(() => Cinema, { name: 'cinema' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cinemasService.findOne(id)
  }

  @Mutation(() => Cinema)
  updateCinema(
    @Args('updateCinemaInput') updateCinemaInput: UpdateCinemaInput,
  ) {
    return this.cinemasService.update(updateCinemaInput.id, updateCinemaInput)
  }

  @Mutation(() => Cinema)
  removeCinema(@Args('id', { type: () => Int }) id: number) {
    return this.cinemasService.remove(id)
  }
}
