import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateBookingInput } from './dto/update-booking.input'
import { CreateBookingInput } from './dto/create-booking.input'
import { PrismaService } from '../../../common/prisma/prisma.service'

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookingInput: CreateBookingInput) {
    return await this.prisma.booking.create({
      data: { ...createBookingInput },
    })
  }

  async findAll() {
    return await this.prisma.booking.findMany()
  }

  async findOne(id: string) {
    const booking = await this.prisma.booking.findUnique({ where: { id } })
    if (!booking) {
      throw new NotFoundException(`Booking with id ${id} not found`)
    }
    return booking
  }

  async update(id: string, updateBookingInput: UpdateBookingInput) {
    await this.findOne(id)
    return await this.prisma.booking.update({
      where: { id },
      data: { ...updateBookingInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.booking.delete({
      where: { id },
    })
  }
}
