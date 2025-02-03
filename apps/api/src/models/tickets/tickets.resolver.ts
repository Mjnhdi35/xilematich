import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { TicketsService } from './tickets.service'
import { Ticket } from './entities/ticket.entity'
import { CreateTicketInput } from './dto/create-ticket.input'
import { UpdateTicketInput } from './dto/update-ticket.input'

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

  @Mutation(() => Ticket)
  async createTicket(
    @Args('createTicketInput') createTicketInput: CreateTicketInput,
  ) {
    return await this.ticketsService.create(createTicketInput)
  }

  @Query(() => [Ticket], { name: 'tickets' })
  async findAll() {
    return await this.ticketsService.findAll()
  }

  @Query(() => Ticket, { name: 'ticket' })
  async findOne(@Args('id') id: string) {
    return await this.ticketsService.findOne(id)
  }

  @Mutation(() => Ticket)
  async updateTicket(
    @Args('id') id: string,
    @Args('updateTicketInput') updateTicketInput: UpdateTicketInput,
  ) {
    return await this.ticketsService.update(id, updateTicketInput)
  }

  @Mutation(() => Ticket)
  async deleteTicket(@Args('id') id: string) {
    return await this.ticketsService.remove(id)
  }
}
