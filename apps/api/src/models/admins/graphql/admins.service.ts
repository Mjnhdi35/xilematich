import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'
import { PrismaService } from '../../../common/prisma/prisma.service'

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdminInput: CreateAdminInput) {
    return await this.prisma.admin.create({
      data: { ...createAdminInput },
    })
  }

  async findAll() {
    return await this.prisma.admin.findMany()
  }

  async findOne(id: string) {
    const admin = await this.prisma.admin.findUnique({ where: { id } })
    if (!admin) {
      throw new NotFoundException(`Admin với id ${id} không tồn tại`)
    }
    return admin
  }

  async update(id: string, updateAdminInput: UpdateAdminInput) {
    await this.findOne(id)
    return await this.prisma.admin.update({
      where: { id },
      data: { ...updateAdminInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.admin.delete({
      where: { id },
    })
  }
}
