import { ObjectType } from '@nestjs/graphql'
import { $Enums, Showtime as ShowtimeType } from '@prisma/client'
@ObjectType()
export class Showtime implements ShowtimeType {
  id: string
  createdAt: Date
  updatedAt: Date
  startTime: Date
  status: $Enums.ShowtimeStatus
  movieId: string
  screenId: string
}
