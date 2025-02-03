import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'
import { PrismaService } from '../../common/prisma/prisma.service'

@Injectable()
export class AddressesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressInput: CreateAddressInput) {
    return await this.prisma.address.create({
      data: { ...createAddressInput },
    })
  }

  async findAll() {
    return await this.prisma.address.findMany()
  }

  async findOne(id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } })
    if (!address) {
      throw new NotFoundException(`Address with id ${id} not found`)
    }
    return address
  }

  async update(id: string, updateAddressInput: UpdateAddressInput) {
    await this.findOne(id)
    return await this.prisma.address.update({
      where: { id },
      data: { ...updateAddressInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.address.delete({
      where: { id },
    })
  }
}
