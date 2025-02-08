import { Injectable } from '@nestjs/common'
import { FindManyShowtimeArgs, FindUniqueShowtimeArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateShowtimeInput } from './dtos/create-showtime.input'
import { UpdateShowtimeInput } from './dtos/update-showtime.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ShowtimesService {
  constructor(private readonly prisma: PrismaService) {}
  create({ movieId, screenId, showtimes }: CreateShowtimeInput) {
    return this.prisma.showtime.create({
      data: { movieId, screenId, startTime: showtimes[0] },
    })
  }

  findAll(args: FindManyShowtimeArgs) {
    return this.prisma.showtime.findMany(args as Prisma.ShowtimeFindManyArgs)
  }

  findOne(args: FindUniqueShowtimeArgs) {
    return this.prisma.showtime.findUnique(args)
  }

  update(updateShowtimeInput: UpdateShowtimeInput) {
    const { id, ...data } = updateShowtimeInput
    return this.prisma.showtime.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueShowtimeArgs) {
    return this.prisma.showtime.delete(args)
  }
}
