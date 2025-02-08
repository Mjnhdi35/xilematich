import { Injectable } from '@nestjs/common'
import { FindManyScreenArgs, FindUniqueScreenArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateScreenInput } from './dtos/create-screen.input'
import { UpdateScreenInput } from './dtos/update-screen.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ScreensService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    cinemaId,
    projectionType,
    soundSystemType,
    columns,
    rows,
  }: CreateScreenInput) {
    const screenNumber = await this.prisma.screen.count({ where: { cinemaId } })

    const screen = await this.prisma.screen.create({
      data: {
        numberRoom: screenNumber,
        cinemaId,
        projectionType,
        soundSystemType,
      },
    })

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const seat = await this.prisma.seat.create({
          data: { column: j, row: i, screenId: screen.id },
        })
      }
    }
  }

  findAll(args: FindManyScreenArgs) {
    return this.prisma.screen.findMany(args as Prisma.ScreenFindManyArgs)
  }

  findOne(args: FindUniqueScreenArgs) {
    return this.prisma.screen.findUnique(args)
  }

  update(updateScreenInput: UpdateScreenInput) {
    const { id, ...data } = updateScreenInput
    return this.prisma.screen.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueScreenArgs) {
    return this.prisma.screen.delete(args)
  }
}
