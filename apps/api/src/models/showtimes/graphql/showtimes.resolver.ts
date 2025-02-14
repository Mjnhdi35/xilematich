import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ShowtimesService } from './showtimes.service'
import {
  GroupedShowtime,
  RemainingSeats,
  Showtime,
} from './entity/showtime.entity'
import { FindManyShowtimeArgs, FindUniqueShowtimeArgs } from './dtos/find.args'
import { CreateShowtimeInput } from './dtos/create-showtime.input'
import { UpdateShowtimeInput } from './dtos/update-showtime.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { BatchPayload } from 'src/common/dtos/common.input'
import { Prisma } from '@prisma/client'
import { Movie } from 'src/models/movies/graphql/entity/movie.entity'
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity'
import { Screen } from 'src/models/screens/graphql/entity/screen.entity'

@Resolver(() => Showtime)
export class ShowtimesResolver {
  constructor(
    private readonly showtimesService: ShowtimesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => BatchPayload)
  async createShowtime(
    @Args('createShowtimeInput') args: CreateShowtimeInput,
    @GetUser() user: GetUserType,
  ) {
    const screen = await this.prisma.screen.findUnique({
      where: { id: args.screenId },
      include: { cinema: { include: { managers: true } } },
    })

    checkRowLevelPermission(
      user,
      screen?.cinema.managers.map((m) => m.id),
    )

    const showtimes: Prisma.ShowtimeCreateManyInput[] = args.showtimes.map(
      (showtime) => ({
        screenId: args.screenId,
        movieId: args.movieId,
        startTime: new Date(showtime),
      }),
    )
    const newShowtimes = await this.prisma.showtime.createMany({
      data: showtimes,
    })
    return newShowtimes
  }

  @Query(() => [Showtime], { name: 'showtimes' })
  findAll(@Args() args: FindManyShowtimeArgs) {
    return this.showtimesService.findAll(args)
  }

  @Query(() => Showtime, { name: 'showtime' })
  findOne(@Args() args: FindUniqueShowtimeArgs) {
    return this.showtimesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Showtime)
  async updateShowtime(
    @Args('updateShowtimeInput') args: UpdateShowtimeInput,
    @GetUser() user: GetUserType,
  ) {
    const showtime = await this.prisma.showtime.findUnique({
      where: { id: args.id },
      include: {
        screen: { include: { cinema: { include: { managers: true } } } },
      },
    })
    checkRowLevelPermission(
      user,
      showtime.screen.cinema.managers.map((m) => m.id),
    )
    return this.showtimesService.update(args)
  }

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Showtime)
  async removeShowtime(
    @Args() args: FindUniqueShowtimeArgs,
    @GetUser() user: GetUserType,
  ) {
    const showtime = await this.prisma.showtime.findUnique({
      where: { id: args.where.id },
      include: {
        screen: { include: { cinema: { include: { managers: true } } } },
      },
    })
    checkRowLevelPermission(
      user,
      showtime.screen.cinema.managers.map((m) => m.id),
    )
    return this.showtimesService.remove(args)
  }

  @Query(() => [GroupedShowtime], { name: 'showtimesInCinema' })
  async showtimesInCinema(
    @Args('cinemaId') cinemaId: string,
    @Args('movieId') movieId: string,
  ) {
    const shows: any[] = await this.prisma.$queryRaw`
        SELECT
        DATE("startTime") AS date,
        ARRAY_AGG(
            json_build_object(
            'id', "Showtime"."id",
            'startTime', EXTRACT(EPOCH FROM "startTime") * 1000,
            'screen', "Screen"
            )
        ) AS showtimes
        FROM "Showtime"
        JOIN "Screen" ON "Showtime"."screenId" = "Screen"."id"
        WHERE "Showtime"."movieId" = ${movieId} AND "Screen"."cinemaId" = ${cinemaId} AND "Showtime"."startTime" > NOW()
        GROUP BY DATE("startTime")
        ORDER BY DATE("startTime");
`

    return shows
  }

  @ResolveField(() => Screen)
  screen(@Parent() showtime: Showtime) {
    return this.prisma.screen.findUnique({ where: { id: showtime.screenId } })
  }

  @Query(() => RemainingSeats)
  async bookedSeatsInShowtime(@Args('showtimeId') showtimeId: string) {
    const showtime = await this.prisma.showtime.findUnique({
      where: { id: showtimeId },
    })
    const total = await this.prisma.seat.count({
      where: { screenId: showtime.screenId },
    })
    const booked = await this.prisma.booking.count({
      where: { showtimeId: showtimeId },
    })
    console.log(total, booked)
    return { total, booked }
  }

  @ResolveField(() => Movie)
  movie(@Parent() showtime: Showtime) {
    return this.prisma.movie.findUnique({ where: { id: showtime.movieId } })
  }

  @ResolveField(() => [Booking])
  Booking(@Parent() showtime: Showtime) {
    return this.prisma.booking.findMany({ where: { showtimeId: showtime.id } })
  }
}
