import { Injectable } from '@nestjs/common'
import { addTwoNumber } from '@xilematich/samplemost'
@Injectable()
export class AppService {
  getHello(): string {
    return `hello , ${addTwoNumber(1, 7)}`
  }
}
