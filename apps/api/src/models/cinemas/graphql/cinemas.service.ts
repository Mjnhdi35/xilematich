import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'
import { PrismaService } from '../../../common/prisma/prisma.service'

@Injectable()
export class CinemasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCinemaInput: CreateCinemaInput) {
    return await this.prisma.cinema.create({
      data: { ...createCinemaInput },
    })
  }

  async findAll() {
    return await this.prisma.cinema.findMany()
  }

  async findOne(id: string) {
    const cinema = await this.prisma.cinema.findUnique({ where: { id } })
    if (!cinema) {
      throw new NotFoundException(`Cinema with id ${id} not found`)
    }
    return cinema
  }

  async update(id: string, updateCinemaInput: UpdateCinemaInput) {
    await this.findOne(id)
    return await this.prisma.cinema.update({
      where: { id },
      data: { ...updateCinemaInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.cinema.delete({
      where: { id },
    })
  }
}
