import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { Movie } from './entities/movie.entity'
import { MoviesService } from './movies.service'
import { CreateMovieInput } from './dto/create-movie.input'
import { UpdateMovieInput } from './dto/update-movie.input'

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}
  @Mutation(() => Movie)
  async createMovie(
    @Args('createMovieInput') createMovieInput: CreateMovieInput,
  ) {
    return await this.moviesService.create(createMovieInput)
  }

  @Query(() => [Movie], { name: 'movies' })
  async findAll() {
    return await this.moviesService.findAll()
  }

  @Query(() => Movie, { name: 'movie' })
  async findOne(@Args('id') id: string) {
    return await this.moviesService.findOne(id)
  }

  @Mutation(() => Movie)
  async updateMovie(
    @Args('id') id: string,
    @Args('updateMovieInput') updateMovieInput: UpdateMovieInput,
  ) {
    return await this.moviesService.update(id, updateMovieInput)
  }

  @Mutation(() => Movie)
  async deleteMovie(@Args('id') id: string) {
    return await this.moviesService.remove(id)
  }
}
