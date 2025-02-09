import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from './common/prisma/prisma.module'
import { AddressesModule } from './models/addresses/addresses.module'
import { AdminsModule } from './models/admins/admins.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { CinemasModule } from './models/cinemas/cinemas.module'
import { ManagersModule } from './models/managers/managers.module'
import { MoviesModule } from './models/movies/movies.module'
import { ScreensModule } from './models/screens/screens.module'
import { SeatsModule } from './models/seats/seats.module'
import { ShowtimesModule } from './models/showtimes/showtimes.module'
import { TicketsModule } from './models/tickets/tickets.module'
import { UsersModule } from './models/users/users.module'
import { CloudinaryModule } from './common/cloudinary/cloudinary.module'

const MAX_AGE = 24 * 60 * 60

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: MAX_AGE },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    PrismaModule,
    CloudinaryModule,

    AddressesModule,
    AdminsModule,
    BookingsModule,
    CinemasModule,
    ManagersModule,
    MoviesModule,
    ScreensModule,
    SeatsModule,
    ShowtimesModule,
    TicketsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
