import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ScreensService } from './screens.service'
import { Screen } from './entity/screen.entity'
import { FindManyScreenArgs, FindUniqueScreenArgs } from './dtos/find.args'
import { CreateScreenInput } from './dtos/create-screen.input'
import { UpdateScreenInput } from './dtos/update-screen.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Cinema } from 'src/models/cinemas/graphql/entity/cinema.entity'
import { Seat } from 'src/models/seats/graphql/entity/seat.entity'
import { Showtime } from 'src/models/showtimes/graphql/entity/showtime.entity'

@Resolver(() => Screen)
export class ScreensResolver {
  constructor(
    private readonly screensService: ScreensService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Screen)
  async createScreen(
    @Args('createScreenInput') args: CreateScreenInput,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id: args.cinemaId },
      include: { managers: true },
    })
    checkRowLevelPermission(
      user,
      cinema.managers.map((m) => m.id),
    )
    return this.screensService.create(args)
  }

  @Query(() => [Screen], { name: 'screens' })
  findAll(@Args() args: FindManyScreenArgs) {
    return this.screensService.findAll(args)
  }

  @Query(() => Screen, { name: 'screen' })
  findOne(@Args() args: FindUniqueScreenArgs) {
    return this.screensService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Screen)
  async updateScreen(
    @Args('updateScreenInput') args: UpdateScreenInput,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id: args.cinemaId },
      include: { managers: true },
    })
    checkRowLevelPermission(
      user,
      cinema.managers.map((m) => m.id),
    )
    return this.screensService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Screen)
  async removeScreen(
    @Args() args: FindUniqueScreenArgs,
    @GetUser() user: GetUserType,
  ) {
    const screen = await this.prisma.screen.findUnique({
      where: args.where,
      include: { cinema: { include: { managers: true } } },
    })
    checkRowLevelPermission(
      user,
      screen.cinema.managers.map((m) => m.id),
    )
    return this.screensService.remove(args)
  }

  @ResolveField(() => Cinema)
  cinema(@Parent() screen: Screen) {
    return this.prisma.cinema.findUnique({ where: { id: screen.cinemaId } })
  }
  @ResolveField(() => [Seat])
  seats(@Parent() screen: Screen) {
    return this.prisma.seat.findMany({ where: { screenId: screen.id } })
  }
  @ResolveField(() => String)
  async seatsCount(@Parent() screen: Screen) {
    const count = await this.prisma.seat.count({
      where: { screenId: screen.id },
    })
    return count
  }
  @ResolveField(() => [Showtime], {
    description: 'This returns all current and future shows.',
  })
  showtimes(@Parent() screen: Screen) {
    return this.prisma.showtime.findMany({
      where: { screenId: screen.id, startTime: { gt: new Date() } },
    })
  }
}
