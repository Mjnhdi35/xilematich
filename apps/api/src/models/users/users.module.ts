import { Module } from '@nestjs/common'
import { UsersService } from './graphql/users.service'
import { UsersResolver } from './graphql/users.resolver'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { UsersController } from './rest/users.controller'

@Module({
  imports: [JwtModule],
  providers: [UsersResolver, UsersService, JwtService],
  controllers: [UsersController],
})
export class UsersModule {}
