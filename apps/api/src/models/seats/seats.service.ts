import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../common/prisma/prisma.service'
import { CreateSeatInput } from './dto/create-seat.input'

@Injectable()
export class SeatsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSeatInput: CreateSeatInput) {
    return this.prisma.seat.create({
      data: {
        screenId: createSeatInput.screenId,
        row: createSeatInput.row,
        column: createSeatInput.column,
      },
    })
  }

  findAllForScreen(screenId: string) {
    return this.prisma.seat.findMany({
      where: { screenId },
    })
  }
}
