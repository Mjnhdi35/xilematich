import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Seat } from './entities/seat.entity'
import { SeatsService } from './seats.service'
import { CreateSeatInput } from './dto/create-seat.input'
import { UpdateSeatInput } from './dto/update-seat.input'

@Resolver(() => Seat)
export class SeatsResolver {
  constructor(private readonly seatsService: SeatsService) {}
  @Mutation(() => Seat)
  async createSeat(@Args('createSeatInput') createSeatInput: CreateSeatInput) {
    return await this.seatsService.create(createSeatInput)
  }

  @Query(() => [Seat], { name: 'seats' })
  async findAll() {
    return await this.seatsService.findAll()
  }

  @Query(() => Seat, { name: 'seat' })
  async findOne(
    @Args('screenId') screenId: string,
    @Args('row') row: number,
    @Args('column') column: number,
  ) {
    return await this.seatsService.findOne(screenId, row, column)
  }

  @Mutation(() => Seat)
  async updateSeat(
    @Args('screenId') screenId: string,
    @Args('row') row: number,
    @Args('column') column: number,
    @Args('updateSeatInput') updateSeatInput: UpdateSeatInput,
  ) {
    return await this.seatsService.update(
      screenId,
      row,
      column,
      updateSeatInput,
    )
  }

  @Mutation(() => Seat)
  async deleteSeat(
    @Args('screenId') screenId: string,
    @Args('row') row: number,
    @Args('column') column: number,
  ) {
    return await this.seatsService.remove(screenId, row, column)
  }
}
