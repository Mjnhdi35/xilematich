import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { BookingsService } from './bookings.service'
import { Booking } from './entity/booking.entity'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dtos/find.args'
import { CreateBookingInput } from './dtos/create-booking.input'
import { UpdateBookingInput } from './dtos/update-booking.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Seat } from 'src/models/seats/graphql/entity/seat.entity'
import { Ticket } from 'src/models/tickets/graphql/entity/ticket.entity'
import { Showtime } from 'src/models/showtimes/graphql/entity/showtime.entity'
import { User } from 'src/models/users/graphql/entity/user.entity'

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Booking)
  createBooking(
    @Args('createBookingInput') args: CreateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id)
    return this.bookingsService.create(args)
  }

  @Query(() => [Booking], { name: 'bookings' })
  findAll(@Args() args: FindManyBookingArgs) {
    return this.bookingsService.findAll(args)
  }

  @Query(() => Booking, { name: 'booking' })
  findOne(@Args() args: FindUniqueBookingArgs) {
    return this.bookingsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async updateBooking(
    @Args('updateBookingInput') args: UpdateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, booking.id)
    return this.bookingsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async removeBooking(
    @Args() args: FindUniqueBookingArgs,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique(args)
    checkRowLevelPermission(user, booking.id)
    return this.bookingsService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() booking: Booking) {
    return this.prisma.user.findUnique({ where: { id: booking.userId } })
  }

  @ResolveField(() => Showtime)
  showtime(@Parent() booking: Booking) {
    return this.prisma.showtime.findUnique({
      where: { id: booking.showtimeId },
    })
  }

  @ResolveField(() => Ticket, { nullable: true })
  ticket(@Parent() booking: Booking) {
    return this.prisma.ticket.findUnique({
      where: { id: booking.ticketId },
    })
  }
  @ResolveField(() => Seat, { nullable: true })
  seat(@Parent() { column, row, screenId }: Booking) {
    return this.prisma.seat.findUnique({
      where: {
        screenId_row_column: { column, row, screenId },
      },
    })
  }
}
