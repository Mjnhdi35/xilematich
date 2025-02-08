import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class SeatQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.SeatScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.SeatScalarFieldEnum))
  searchBy?: string
}
