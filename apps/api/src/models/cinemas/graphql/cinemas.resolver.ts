import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CinemasService } from './cinemas.service'
import { Cinema } from './entity/cinema.entity'
import { FindManyCinemaArgs, FindUniqueCinemaArgs } from './dtos/find.args'
import { CreateCinemaInput } from './dtos/create-cinema.input'
import { UpdateCinemaInput } from './dtos/update-cinema.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

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
    console.log('user', user, args)
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
}
