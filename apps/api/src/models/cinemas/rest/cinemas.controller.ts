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
import { CreateCinema } from './dtos/create.dto'
import { CinemaQueryDto } from './dtos/query.dto'
import { UpdateCinema } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CinemaEntity } from './entity/cinema.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('cinemas')
@Controller('cinemas')
export class CinemasController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CinemaEntity })
  @Post()
  create(@Body() createCinemaDto: CreateCinema, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createCinemaDto.id)
    return this.prisma.cinema.create({ data: createCinemaDto })
  }

  @ApiOkResponse({ type: [CinemaEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CinemaQueryDto) {
    return this.prisma.cinema.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: CinemaEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.cinema.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: CinemaEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCinemaDto: UpdateCinema,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({ where: { id } })
    checkRowLevelPermission(user, cinema.id)
    return this.prisma.cinema.update({
      where: { id },
      data: updateCinemaDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const cinema = await this.prisma.cinema.findUnique({ where: { id } })
    checkRowLevelPermission(user, cinema.id)
    return this.prisma.cinema.delete({ where: { id } })
  }
}
