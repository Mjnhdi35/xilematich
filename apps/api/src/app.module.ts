import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './common/prisma/prisma.module'
import { UsersModule } from './models/users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { AdminsModule } from './models/admins/admins.module'
import { ManagersModule } from './models/managers/managers.module'
import { AddressesModule } from './models/addresses/addresses.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { CinemasModule } from './models/cinemas/cinemas.module'
import { MoviesModule } from './models/movies/movies.module'
import { ScreensModule } from './models/screens/screens.module'
import { SeatsModule } from './models/seats/seats.module'
import { ShowtimesModule } from './models/showtimes/showtimes.module'
import { TicketsModule } from './models/tickets/tickets.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '20h' },
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

    UsersModule,
    AdminsModule,
    ManagersModule,
    AddressesModule,
    BookingsModule,
    CinemasModule,
    MoviesModule,
    ScreensModule,
    SeatsModule,
    ShowtimesModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
