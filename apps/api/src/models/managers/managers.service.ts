import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateManagerInput } from './dto/create-manager.input'
import { UpdateManagerInput } from './dto/update-manager.input'
import { PrismaService } from '../../common/prisma/prisma.service'

@Injectable()
export class ManagersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createManagerInput: CreateManagerInput) {
    const { userId, cinemaId } = createManagerInput
    return await this.prisma.manager.create({
      data: {
        user: { connect: { id: userId } },
        cinema: { connect: { id: cinemaId } },
      },
    })
  }

  async findAll() {
    return await this.prisma.manager.findMany()
  }

  async findOne(id: string) {
    const manager = await this.prisma.manager.findUnique({ where: { id } })
    if (!manager) {
      throw new NotFoundException(`Manager với id ${id} không tồn tại`)
    }
    return manager
  }

  async update(id: string, updateManagerInput: UpdateManagerInput) {
    await this.findOne(id)
    return await this.prisma.manager.update({
      where: { id },
      data: { ...updateManagerInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.manager.delete({
      where: { id },
    })
  }
}
