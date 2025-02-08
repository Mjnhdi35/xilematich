import { Injectable } from '@nestjs/common'
import { FindManyCinemaArgs, FindUniqueCinemaArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCinemaInput } from './dtos/create-cinema.input'
import { UpdateCinemaInput } from './dtos/update-cinema.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class CinemasService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    managers,
    address,
    screens,
    ...createCinemaInput
  }: CreateCinemaInput) {
    const screensWithSeats = screens.map((screen, index) => {
      const { rows, columns, ...screenData } = screen
      const seats = []

      for (let row = 1; row <= rows; row++) {
        for (let column = 1; column <= columns; column++) {
          seats.push({ row, column })
        }
      }

      return {
        ...screenData,
        seats: { create: seats },
        numberRoom: index + 1,
      }
    })

    const existingManager = await this.prisma.manager.findUnique({
      where: { id: managers.id },
    })

    return this.prisma.cinema.create({
      data: {
        ...createCinemaInput,
        ...(existingManager?.id
          ? { managers: { connect: { id: managers.id } } }
          : { managers: { create: managers } }),
        address: { create: address },
        screens: { create: screensWithSeats },
      },
    })
  }

  findAll(args: FindManyCinemaArgs) {
    return this.prisma.cinema.findMany(args as Prisma.CinemaFindManyArgs)
  }

  findOne(args: FindUniqueCinemaArgs) {
    return this.prisma.cinema.findUnique(args)
  }

  update(updateCinemaInput: UpdateCinemaInput) {
    const { id, screens, address, managers, ...data } = updateCinemaInput
    return this.prisma.cinema.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueCinemaArgs) {
    return this.prisma.cinema.delete(args)
  }

  findByManager(id: string) {
    return this.prisma.cinema.findFirst({
      where: { managers: { some: { id } } },
    })
  }
}
