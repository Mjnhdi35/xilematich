import { Resolver } from '@nestjs/graphql'
import { Screen } from './entities/screen.entity'

@Resolver(() => Screen)
export class ScreensResolver {}
