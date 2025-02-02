import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { JwtModule, JwtService } from '@nestjs/jwt'

@Module({
  imports: [JwtModule],
  providers: [UsersResolver, UsersService, JwtService],
})
export class UsersModule {}
