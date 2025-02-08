import { Module } from '@nestjs/common'
import { BookingsService } from './graphql/bookings.service'
import { BookingsResolver } from './graphql/bookings.resolver'
import { BookingsController } from './rest/bookings.controller'
import { UsersModule } from '../users/users.module'
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service'

@Module({
  imports: [UsersModule],
  providers: [BookingsResolver, BookingsService, CloudinaryService],
  exports: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
