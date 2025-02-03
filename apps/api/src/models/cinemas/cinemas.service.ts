import { Injectable } from '@nestjs/common'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'
import { PrismaService } from '../../common/prisma/prisma.service'

@Injectable()
export class CinemasService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCinemaInput: CreateCinemaInput) {
    return this.prisma.cinema.create({
      data: createCinemaInput,
    })
  }

  findAll() {
    return this.prisma.cinema.findMany()
  }

  findOne(id: string) {
    return this.prisma.cinema.findUnique({
      where: { id },
      include: { managers: true, screens: true, address: true },
    })
  }

  update(id: string, updateCinemaInput: UpdateCinemaInput) {
    return this.prisma.cinema.update({
      where: { id },
      data: updateCinemaInput,
    })
  }

  remove(id: string) {
    return this.prisma.cinema.delete({
      where: { id },
    })
  }
}
