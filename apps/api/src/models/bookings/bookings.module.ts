import { Module } from '@nestjs/common'
import { BookingsService } from './bookings.service'
import { BookingsResolver } from './bookings.resolver'
import { BookingsController } from './bookings.controller'

@Module({
  providers: [BookingsResolver, BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
