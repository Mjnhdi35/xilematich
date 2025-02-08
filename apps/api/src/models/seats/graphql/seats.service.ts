import { Injectable } from '@nestjs/common'
import { FindManySeatArgs, FindUniqueSeatArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSeatInput } from './dtos/create-seat.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class SeatsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSeatInput: CreateSeatInput) {
    return this.prisma.seat.create({
      data: createSeatInput,
    })
  }

  findAll(args: FindManySeatArgs) {
    return this.prisma.seat.findMany(args as Prisma.SeatFindManyArgs)
  }

  findOne(args: FindUniqueSeatArgs) {
    return this.prisma.seat.findUnique(args)
  }

  remove(args: FindUniqueSeatArgs) {
    return this.prisma.seat.delete(args)
  }
}
