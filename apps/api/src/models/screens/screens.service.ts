import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateScreenInput } from './dto/update-screen.input'
import { PrismaService } from '../../common/prisma/prisma.service'
import { CreateScreenInput } from './dto/create-screen.input'

@Injectable()
export class ScreensService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createScreenInput: CreateScreenInput) {
    return await this.prisma.screen.create({
      data: { ...createScreenInput },
    })
  }

  async findAll() {
    return await this.prisma.screen.findMany()
  }

  async findOne(id: string) {
    const screen = await this.prisma.screen.findUnique({ where: { id } })
    if (!screen) {
      throw new NotFoundException(`Screen with id ${id} not found`)
    }
    return screen
  }

  async update(id: string, updateScreenInput: UpdateScreenInput) {
    await this.findOne(id)
    return await this.prisma.screen.update({
      where: { id },
      data: { ...updateScreenInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.screen.delete({
      where: { id },
    })
  }
}
