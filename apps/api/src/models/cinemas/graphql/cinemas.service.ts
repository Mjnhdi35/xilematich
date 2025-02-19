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
    managers: [manager],
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
      where: { id: manager.id },
    })

    return this.prisma.cinema.create({
      data: {
        ...createCinemaInput,
        ...(existingManager?.id
          ? { managers: { connect: { id: manager.id } } }
          : { managers: { create: manager } }),
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

  async update(updateCinemaInput: UpdateCinemaInput) {
    const { id, screens, address, managers, ...data } = updateCinemaInput

    return this.prisma.cinema.update({
      where: { id },
      data: {
        ...data,

        managers: managers
          ? {
              set: Array.isArray(managers)
                ? managers.map((m) => ({ id: m.id }))
                : [{ id: managers }],
            }
          : undefined,

        address: address
          ? {
              update: {
                address: address.address,
                lat: address.lat,
                lng: address.lng,
              },
            }
          : undefined,

        screens: screens
          ? {
              update: screens.map((screen) => ({
                where: { id },
                data: {
                  numberRoom: screen.numberRoom,
                  price: screen.price,
                },
              })),
            }
          : undefined,
      },
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
