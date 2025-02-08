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
import { CreateMovie } from './dtos/create.dto'
import { MovieQueryDto } from './dtos/query.dto'
import { UpdateMovie } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { MovieEntity } from './entity/movie.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MovieEntity })
  @Post()
  create(@Body() createMovieDto: CreateMovie, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createMovieDto.id)
    return this.prisma.movie.create({ data: createMovieDto })
  }

  @ApiOkResponse({ type: [MovieEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: MovieQueryDto) {
    return this.prisma.movie.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: MovieEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.movie.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: MovieEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovie,
    @GetUser() user: GetUserType,
  ) {
    const movie = await this.prisma.movie.findUnique({ where: { id } })
    checkRowLevelPermission(user, movie.id)
    return this.prisma.movie.update({
      where: { id },
      data: updateMovieDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const movie = await this.prisma.movie.findUnique({ where: { id } })
    checkRowLevelPermission(user, movie.id)
    return this.prisma.movie.delete({ where: { id } })
  }
}
