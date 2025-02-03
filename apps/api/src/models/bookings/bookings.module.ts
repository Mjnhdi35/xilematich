import { Module } from '@nestjs/common'
import { BookingsResolver } from './graphql/bookings.resolver'
import { BookingsService } from './graphql/bookings.service'

@Module({
  providers: [BookingsResolver, BookingsService],
})
export class BookingsModule {}
