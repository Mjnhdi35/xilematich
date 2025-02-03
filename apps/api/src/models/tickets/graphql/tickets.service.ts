import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateTicketInput } from './dto/create-ticket.input'
import { UpdateTicketInput } from './dto/update-ticket.input'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTicketInput: CreateTicketInput) {
    return await this.prisma.ticket.create({
      data: { ...createTicketInput },
    })
  }

  async findAll() {
    return await this.prisma.ticket.findMany()
  }

  async findOne(id: string) {
    const ticket = await this.prisma.ticket.findUnique({ where: { id } })
    if (!ticket) {
      throw new NotFoundException(`Ticket with id ${id} not found`)
    }
    return ticket
  }

  async update(id: string, updateTicketInput: UpdateTicketInput) {
    await this.findOne(id)
    return await this.prisma.ticket.update({
      where: { id },
      data: { ...updateTicketInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.ticket.delete({
      where: { id },
    })
  }
}
