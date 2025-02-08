import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { TicketsService } from './tickets.service'
import { Ticket } from './entity/ticket.entity'
import { FindManyTicketArgs, FindUniqueTicketArgs } from './dtos/find.args'
import { CreateTicketInput } from './dtos/create-ticket.input'
import { UpdateTicketInput } from './dtos/update-ticket.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity'
import { AggregateCountOutput } from 'src/common/dtos/common.input'
import { TicketWhereInput } from './dtos/where.args'
import { Prisma } from '@prisma/client'

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(
    private readonly ticketsService: TicketsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Ticket)
  createTicket(
    @Args('createTicketInput') args: CreateTicketInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id)
    return this.ticketsService.create(args)
  }

  @Query(() => [Ticket], { name: 'tickets' })
  findAll(@Args() args: FindManyTicketArgs) {
    return this.ticketsService.findAll(args)
  }

  @Query(() => Ticket, { name: 'ticket' })
  findOne(@Args() args: FindUniqueTicketArgs) {
    return this.ticketsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Ticket)
  async updateTicket(
    @Args('updateTicketInput') args: UpdateTicketInput,
    @GetUser() user: GetUserType,
  ) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, ticket.id)
    return this.ticketsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Ticket)
  async removeTicket(
    @Args() args: FindUniqueTicketArgs,
    @GetUser() user: GetUserType,
  ) {
    const ticket = await this.prisma.ticket.findUnique(args)
    checkRowLevelPermission(user, ticket.id)
    return this.ticketsService.remove(args)
  }

  @AllowAuthenticated()
  @Query(() => [Ticket], { name: 'myTickets' })
  myTickets(@Args() args: FindManyTicketArgs, @GetUser() user: GetUserType) {
    return this.ticketsService.findAll({
      ...args,
      where: { ...args.where, id: { equals: user.id } },
    })
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() parent: Ticket) {
    return this.prisma.booking.findMany({ where: { ticketId: parent.id } })
  }

  @Query(() => AggregateCountOutput, {
    name: 'ticketsCount',
  })
  async ticketsCount(
    @Args('where', { nullable: true })
    where: TicketWhereInput,
  ) {
    const tickets = await this.prisma.ticket.aggregate({
      _count: { _all: true } as Prisma.TicketCountAggregateInputType,
      where: where as Prisma.TicketWhereInput,
    })
    return { count: tickets._count._all }
  }
}
