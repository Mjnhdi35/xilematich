import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class MovieQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.MovieScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.MovieScalarFieldEnum))
  searchBy?: string
}
