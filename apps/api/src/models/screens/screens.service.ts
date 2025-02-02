import { Injectable } from '@nestjs/common'
import { CreateScreenInput } from './dto/create-screen.input'
import { UpdateScreenInput } from './dto/update-screen.input'

@Injectable()
export class ScreensService {
  create(createScreenInput: CreateScreenInput) {
    return 'This action adds a new screen'
  }

  findAll() {
    return `This action returns all screens`
  }

  findOne(id: number) {
    return `This action returns a #${id} screen`
  }

  update(id: number, updateScreenInput: UpdateScreenInput) {
    return `This action updates a #${id} screen`
  }

  remove(id: number) {
    return `This action removes a #${id} screen`
  }
}
