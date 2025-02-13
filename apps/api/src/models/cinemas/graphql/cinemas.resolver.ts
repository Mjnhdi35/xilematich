import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CinemasService } from './cinemas.service'
import { Cinema } from './entity/cinema.entity'
import {
  FindManyCinemaArgs,
  FindManyCinemaArgsStrict,
  FindUniqueCinemaArgs,
} from './dtos/find.args'
import { CreateCinemaInput } from './dtos/create-cinema.input'
import { UpdateCinemaInput } from './dtos/update-cinema.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Manager } from 'src/models/managers/graphql/entity/manager.entity'
import { Screen } from 'src/models/screens/graphql/entity/screen.entity'
import {
  AggregateCountOutput,
  LocationFilterInput,
} from 'src/common/dtos/common.input'
import { CinemaWhereUniqueInput } from './dtos/where.args'
import { Prisma } from '@prisma/client'

@Resolver(() => Cinema)
export class CinemasResolver {
  constructor(
    private readonly cinemasService: CinemasService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Cinema)
  createCinema(
    @Args('createCinemaInput') args: CreateCinemaInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.manager.id)
    if (!(user.roles || []).includes('manager'))
      return this.cinemasService.create(args)
  }

  @Query(() => [Cinema], { name: 'cinemas' })
  findAll(@Args() args: FindManyCinemaArgs) {
    return this.cinemasService.findAll(args)
  }

  @Query(() => Cinema, { name: 'cinema' })
  findOne(@Args() args: FindUniqueCinemaArgs) {
    return this.cinemasService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Cinema)
  async updateCinema(
    @Args('updateCinemaInput') args: UpdateCinemaInput,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, cinema.id)
    return this.cinemasService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Cinema)
  async removeCinema(
    @Args() args: FindUniqueCinemaArgs,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique(args)
    checkRowLevelPermission(user, cinema.id)
    return this.cinemasService.remove(args)
  }

  @Query(() => Cinema, { name: 'cinemaByManager' })
  cinemaByManager(@Args('id') id: string) {
    return this.cinemasService.findByManager(id)
  }

  @ResolveField(() => [Manager])
  managers(@Parent() cinema: Cinema) {
    return this.prisma.manager.findMany({
      where: { cinema: { some: { id: cinema.id } } },
    })
  }

  @ResolveField(() => [Screen])
  screens(@Parent() cinema: Cinema) {
    return this.prisma.screen.findMany({ where: { cinemaId: cinema.id } })
  }

  @Query(() => AggregateCountOutput, {
    name: 'cinemasCount',
  })
  async cinemasCount(
    @Args('where', { nullable: true })
    where: CinemaWhereUniqueInput,
  ) {
    const cinemas = await this.prisma.cinema.aggregate({
      _count: { _all: true },
      where,
    })
    return { count: cinemas._count._all }
  }

  @Query(() => [Cinema], { name: 'searchCinemas' })
  async searchCinemas(
    @Args('locationFilter') locationFilter: LocationFilterInput,
    @Args({ nullable: true })
    { cursor, distinct, orderBy, skip, take, where }: FindManyCinemaArgsStrict,
  ) {
    const { ne_lat, ne_lng, sw_lat, sw_lng } = locationFilter

    return this.prisma.cinema.findMany({
      cursor,
      distinct,
      orderBy,
      skip,
      take,
      where: {
        ...(where as Prisma.CinemaWhereInput),
        address: {
          lat: { lte: ne_lat, gte: sw_lat },
          lng: { lte: ne_lng, gte: sw_lng },
        },
      },
    })
  }
}
