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
import { CreateShowtime } from './dtos/create.dto'
import { ShowtimeQueryDto } from './dtos/query.dto'
import { UpdateShowtime } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ShowtimeEntity } from './entity/showtime.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('showtimes')
@Controller('showtimes')
export class ShowtimesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ShowtimeEntity })
  @Post()
  create(
    @Body() createShowtimeDto: CreateShowtime,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createShowtimeDto.id)
    return this.prisma.showtime.create({ data: createShowtimeDto })
  }

  @ApiOkResponse({ type: [ShowtimeEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ShowtimeQueryDto) {
    return this.prisma.showtime.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ShowtimeEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.showtime.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ShowtimeEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateShowtimeDto: UpdateShowtime,
    @GetUser() user: GetUserType,
  ) {
    const showtime = await this.prisma.showtime.findUnique({ where: { id } })
    checkRowLevelPermission(user, showtime.id)
    return this.prisma.showtime.update({
      where: { id },
      data: updateShowtimeDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const showtime = await this.prisma.showtime.findUnique({ where: { id } })
    checkRowLevelPermission(user, showtime.id)
    return this.prisma.showtime.delete({ where: { id } })
  }
}
