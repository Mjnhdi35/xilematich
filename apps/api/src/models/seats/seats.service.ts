import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../common/prisma/prisma.service'
import { CreateSeatInput } from './dto/create-seat.input'
import { UpdateSeatInput } from './dto/update-seat.input'

@Injectable()
export class SeatsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSeatInput: CreateSeatInput) {
    return await this.prisma.seat.create({
      data: { ...createSeatInput },
    })
  }

  async findAll() {
    return await this.prisma.seat.findMany()
  }

  async findOne(screenId: string, row: number, column: number) {
    const seat = await this.prisma.seat.findUnique({
      where: { screenId_row_column: { screenId, row, column } },
    })
    if (!seat) {
      throw new NotFoundException(
        `Seat with screenId ${screenId}, row ${row}, column ${column} not found`,
      )
    }
    return seat
  }

  async update(
    screenId: string,
    row: number,
    column: number,
    updateSeatInput: UpdateSeatInput,
  ) {
    await this.findOne(screenId, row, column)
    return await this.prisma.seat.update({
      where: { screenId_row_column: { screenId, row, column } },
      data: { ...updateSeatInput },
    })
  }

  async remove(screenId: string, row: number, column: number) {
    await this.findOne(screenId, row, column)
    return await this.prisma.seat.delete({
      where: { screenId_row_column: { screenId, row, column } },
    })
  }
}
