import { Resolver } from '@nestjs/graphql'
import { Seat } from './entities/seat.entity'

@Resolver(() => Seat)
export class SeatsResolver {}
