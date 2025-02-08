import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ScreenQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ScreenScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ScreenScalarFieldEnum))
  searchBy?: string
}
