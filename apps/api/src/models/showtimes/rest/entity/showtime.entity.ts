import { $Enums, Showtime } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ShowtimeEntity
  implements RestrictProperties<ShowtimeEntity, Showtime>
{
  id: string
  createdAt: Date
  updatedAt: Date
  screenId: string
  startTime: Date
  @IsOptional()
  status: $Enums.ShowtimeStatus
  movieId: string
}
