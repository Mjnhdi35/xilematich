import { Injectable } from '@nestjs/common'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'

@Injectable()
export class CinemasService {
  create(createCinemaInput: CreateCinemaInput) {
    return 'This action adds a new cinema'
  }

  findAll() {
    return `This action returns all cinemas`
  }

  findOne(id: number) {
    return `This action returns a #${id} cinema`
  }

  update(id: number, updateCinemaInput: UpdateCinemaInput) {
    return `This action updates a #${id} cinema`
  }

  remove(id: number) {
    return `This action removes a #${id} cinema`
  }
}
