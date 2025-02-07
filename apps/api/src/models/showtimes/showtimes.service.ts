import { Injectable } from '@nestjs/common'
import { CreateShowtimeInput } from './dto/create-showtime.input'
import { UpdateShowtimeInput } from './dto/update-showtime.input'

@Injectable()
export class ShowtimesService {
  create(createShowtimeInput: CreateShowtimeInput) {
    return 'This action adds a new showtime'
  }

  findAll() {
    return `This action returns all showtimes`
  }

  findOne(id: number) {
    return `This action returns a #${id} showtime`
  }

  update(id: number, updateShowtimeInput: UpdateShowtimeInput) {
    return `This action updates a #${id} showtime`
  }

  remove(id: number) {
    return `This action removes a #${id} showtime`
  }
}
