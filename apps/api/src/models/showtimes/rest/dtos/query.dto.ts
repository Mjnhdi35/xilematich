import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ShowtimeQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ShowtimeScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ShowtimeScalarFieldEnum))
  searchBy?: string
}
