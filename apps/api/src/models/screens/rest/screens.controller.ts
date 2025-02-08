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
import { CreateScreen } from './dtos/create.dto'
import { ScreenQueryDto } from './dtos/query.dto'
import { UpdateScreen } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ScreenEntity } from './entity/screen.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('screens')
@Controller('screens')
export class ScreensController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ScreenEntity })
  @Post()
  create(@Body() createScreenDto: CreateScreen, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createScreenDto.id)
    return this.prisma.screen.create({ data: createScreenDto })
  }

  @ApiOkResponse({ type: [ScreenEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ScreenQueryDto) {
    return this.prisma.screen.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ScreenEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.screen.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ScreenEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateScreenDto: UpdateScreen,
    @GetUser() user: GetUserType,
  ) {
    const screen = await this.prisma.screen.findUnique({ where: { id } })
    checkRowLevelPermission(user, screen.id)
    return this.prisma.screen.update({
      where: { id },
      data: updateScreenDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const screen = await this.prisma.screen.findUnique({ where: { id } })
    checkRowLevelPermission(user, screen.id)
    return this.prisma.screen.delete({ where: { id } })
  }
}
