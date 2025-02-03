import { Resolver } from '@nestjs/graphql'
import { Showtime } from './entities/showtime.entity'

@Resolver(() => Showtime)
export class ShowtimesResolver {}
