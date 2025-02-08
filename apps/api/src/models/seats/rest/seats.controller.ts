import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateSeat } from './dtos/create.dto'
import { SeatQueryDto } from './dtos/query.dto'
import { UpdateSeat } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { SeatEntity } from './entity/seat.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('seats')
@Controller('seats')
export class SeatsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SeatEntity })
  @Post()
  create(@Body() createSeatDto: CreateSeat, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createSeatDto.screenId)
    return this.prisma.seat.create({ data: createSeatDto })
  }

  @ApiOkResponse({ type: [SeatEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: SeatQueryDto) {
    return this.prisma.seat.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : {}),
    })
  }

  @ApiOkResponse({ type: SeatEntity })
  @Get(':screenId/:row/:column')
  async findOne(
    @Param('screenId') screenId: string,
    @Param('row') row: string,
    @Param('column') column: string,
  ) {
    const seat = await this.prisma.seat.findUnique({
      where: { screenId_row_column: { screenId, row: +row, column: +column } },
    })
    if (!seat)
      throw new Error(
        `Seat at (${row}, ${column}) on screen ${screenId} not found`,
      )
    return seat
  }

  @ApiOkResponse({ type: SeatEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':screenId/:row/:column')
  async update(
    @Param('screenId') screenId: string,
    @Param('row') row: string,
    @Param('column') column: string,
    @Body() updateSeatDto: UpdateSeat,
    @GetUser() user: GetUserType,
  ) {
    const seat = await this.prisma.seat.findUnique({
      where: { screenId_row_column: { screenId, row: +row, column: +column } },
    })
    if (!seat)
      throw new Error(
        `Seat at (${row}, ${column}) on screen ${screenId} not found`,
      )
    checkRowLevelPermission(user, seat.screenId)
    return this.prisma.seat.update({
      where: { screenId_row_column: { screenId, row: +row, column: +column } },
      data: updateSeatDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':screenId/:row/:column')
  async remove(
    @Param('screenId') screenId: string,
    @Param('row') row: string,
    @Param('column') column: string,
    @GetUser() user: GetUserType,
  ) {
    const seat = await this.prisma.seat.findUnique({
      where: { screenId_row_column: { screenId, row: +row, column: +column } },
    })
    if (!seat)
      throw new Error(
        `Seat at (${row}, ${column}) on screen ${screenId} not found`,
      )
    checkRowLevelPermission(user, seat.screenId)
    return this.prisma.seat.delete({
      where: { screenId_row_column: { screenId, row: +row, column: +column } },
    })
  }
}
