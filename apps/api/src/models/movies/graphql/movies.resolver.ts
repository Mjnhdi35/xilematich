import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { MoviesService } from './movies.service'
import { Movie } from './entity/movie.entity'
import { FindManyMovieArgs, FindUniqueMovieArgs } from './dtos/find.args'
import { CreateMovieInput } from './dtos/create-movie.input'
import { UpdateMovieInput } from './dtos/update-movie.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AggregateCountOutput } from 'src/common/dtos/common.input'
import { MovieWhereInput } from './dtos/where.args'
import { Prisma } from '@prisma/client'
import { Showtime } from 'src/models/showtimes/graphql/entity/showtime.entity'

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin')
  @Mutation(() => Movie)
  createMovie(
    @Args('createMovieInput') args: CreateMovieInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id)
    return this.moviesService.create(args)
  }

  @Query(() => [Movie], { name: 'movies' })
  findAll(@Args() args: FindManyMovieArgs) {
    return this.moviesService.findAll(args)
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args() args: FindUniqueMovieArgs) {
    return this.moviesService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Movie)
  async updateMovie(
    @Args('updateMovieInput') args: UpdateMovieInput,
    @GetUser() user: GetUserType,
  ) {
    const movie = await this.prisma.movie.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, movie.id)
    return this.moviesService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Movie)
  async removeMovie(
    @Args() args: FindUniqueMovieArgs,
    @GetUser() user: GetUserType,
  ) {
    const movie = await this.prisma.movie.findUnique(args)
    checkRowLevelPermission(user, movie.id)
    return this.moviesService.remove(args)
  }

  @Query(() => AggregateCountOutput, {
    name: 'moviesCount',
  })
  async moviesCount(
    @Args('where', { nullable: true })
    where: MovieWhereInput,
  ) {
    const movies = await this.prisma.movie.aggregate({
      _count: { _all: true } as Prisma.MovieCountAggregateInputType,
      where: where as Prisma.MovieWhereInput,
    })
    return { count: movies._count._all }
  }

  @Query(() => [Movie], { name: 'moviesPerCinema' })
  async moviesPerCinema(
    @Args() { cursor, distinct, orderBy, skip, take, where }: FindManyMovieArgs,
    @Args('cinemaId') cinemaId: string,
  ) {
    const movies = await this.prisma.movie.findMany({
      cursor,
      distinct,
      orderBy,
      skip,
      take,
      where: where as Prisma.MovieWhereInput,
      include: {
        showtimes: {
          where: {
            startTime: { gt: new Date() },
            screen: {
              cinemaId,
            },
          },
        },
      },
    })
    return movies.filter((movie) => movie.showtimes.length > 0)
  }
  @ResolveField(() => [Showtime])
  showtimes(@Parent() movie: Movie) {
    return this.prisma.showtime.findMany({ where: { movieId: movie.id } })
  }
}
