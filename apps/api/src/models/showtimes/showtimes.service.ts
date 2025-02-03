import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateShowtimeInput } from './dto/update-showtime.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateShowtimeInput } from './dto/create-showtime.input'

@Injectable()
export class ShowtimesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShowtimeInput: CreateShowtimeInput) {
    return await this.prisma.showtime.create({
      data: { ...createShowtimeInput },
    })
  }

  async findAll() {
    return await this.prisma.showtime.findMany()
  }

  async findOne(id: string) {
    const showtime = await this.prisma.showtime.findUnique({ where: { id } })
    if (!showtime) {
      throw new NotFoundException(`Showtime with id ${id} not found`)
    }
    return showtime
  }

  async update(id: string, updateShowtimeInput: UpdateShowtimeInput) {
    await this.findOne(id)
    return await this.prisma.showtime.update({
      where: { id },
      data: { ...updateShowtimeInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.showtime.delete({
      where: { id },
    })
  }
}
