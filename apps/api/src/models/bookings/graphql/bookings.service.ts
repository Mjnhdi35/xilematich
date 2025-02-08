import { Injectable } from '@nestjs/common'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingInput } from './dtos/create-booking.input'
import { UpdateBookingInput } from './dtos/update-booking.input'
import { Prisma } from '@prisma/client'
import * as bwipjs from 'bwip-js'
import { UsersService } from 'src/models/users/graphql/users.service'
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service'
@Injectable()
export class BookingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly cloudinary: CloudinaryService,
  ) {}
  async create(args: CreateBookingInput) {
    const bookingUser = await this.usersService.createIfNotFound({
      name: '',
      id: args.userId,
    })

    const showtime = await this.prisma.showtime.findUnique({
      where: { id: args.showtimeId },
    })
    if (!showtime) {
      throw new Error('Showtime not found')
    }
    const bookingsData: Prisma.BookingCreateManyInput[] = args.seats.map(
      (seat) => ({
        row: seat.row,
        column: seat.column,
        screenId: showtime.screenId,
        showtimeId: args.showtimeId,
        userId: args.userId,
      }),
    )

    const ticket = await this.prisma.ticket.create({
      data: {
        id: args.userId,
        bookings: { create: bookingsData },
        user: { connect: { id: args.userId } },
      },
    })

    const png = await bwipjs.toBuffer({
      bcid: 'qrcode', // Barcode type
      text: JSON.stringify(ticket), // Text to encode
      textxalign: 'center', // Align the text to the center
    })

    const qrCodeUrl = await this.cloudinary.uploadBuffer(png, ticket.id)

    const updatedTicket = await this.prisma.ticket.update({
      where: { id: ticket.id },
      data: { qrCode: qrCodeUrl },
    })

    return updatedTicket
  }

  findAll(args: FindManyBookingArgs) {
    return this.prisma.booking.findMany(args as Prisma.BookingFindManyArgs)
  }

  findOne(args: FindUniqueBookingArgs) {
    return this.prisma.booking.findUnique(args)
  }

  update(updateBookingInput: UpdateBookingInput) {
    const { id, ...data } = updateBookingInput
    return this.prisma.booking.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueBookingArgs) {
    return this.prisma.booking.delete(args)
  }
}
