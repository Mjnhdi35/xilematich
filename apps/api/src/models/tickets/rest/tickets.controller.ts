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
import { CreateTicket } from './dtos/create.dto'
import { TicketQueryDto } from './dtos/query.dto'
import { UpdateTicket } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { TicketEntity } from './entity/ticket.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TicketEntity })
  @Post()
  create(@Body() createTicketDto: CreateTicket, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createTicketDto.id)
    return this.prisma.ticket.create({ data: createTicketDto })
  }

  @ApiOkResponse({ type: [TicketEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: TicketQueryDto) {
    return this.prisma.ticket.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: TicketEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.ticket.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: TicketEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicket,
    @GetUser() user: GetUserType,
  ) {
    const ticket = await this.prisma.ticket.findUnique({ where: { id } })
    checkRowLevelPermission(user, ticket.id)
    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const ticket = await this.prisma.ticket.findUnique({ where: { id } })
    checkRowLevelPermission(user, ticket.id)
    return this.prisma.ticket.delete({ where: { id } })
  }
}
