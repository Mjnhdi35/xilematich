import { Injectable } from '@nestjs/common'
import { FindManyTicketArgs, FindUniqueTicketArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateTicketInput } from './dtos/create-ticket.input'
import { UpdateTicketInput } from './dtos/update-ticket.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTicketInput: CreateTicketInput) {
    return this.prisma.ticket.create({
      data: createTicketInput,
    })
  }

  findAll(args: FindManyTicketArgs) {
    return this.prisma.ticket.findMany(args as Prisma.TicketFindManyArgs)
  }

  findOne(args: FindUniqueTicketArgs) {
    return this.prisma.ticket.findUnique(args)
  }

  update(updateTicketInput: UpdateTicketInput) {
    const { id, ...data } = updateTicketInput
    return this.prisma.ticket.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueTicketArgs) {
    return this.prisma.ticket.delete(args)
  }
}
