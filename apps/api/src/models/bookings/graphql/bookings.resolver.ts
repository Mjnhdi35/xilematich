import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { BookingsService } from './bookings.service'
import { Booking } from './entities/booking.entity'
import { CreateBookingInput } from './dto/create-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(private readonly bookingsService: BookingsService) {}

  @Mutation(() => Booking)
  async createBooking(
    @Args('createBookingInput') createBookingInput: CreateBookingInput,
  ) {
    return await this.bookingsService.create(createBookingInput)
  }

  @Query(() => [Booking], { name: 'bookings' })
  async findAll() {
    return await this.bookingsService.findAll()
  }

  @Query(() => Booking, { name: 'booking' })
  async findOne(@Args('id') id: string) {
    return await this.bookingsService.findOne(id)
  }

  @Mutation(() => Booking)
  async updateBooking(
    @Args('id') id: string,
    @Args('updateBookingInput') updateBookingInput: UpdateBookingInput,
  ) {
    return await this.bookingsService.update(id, updateBookingInput)
  }

  @Mutation(() => Booking)
  async deleteBooking(@Args('id') id: string) {
    return await this.bookingsService.remove(id)
  }
}
