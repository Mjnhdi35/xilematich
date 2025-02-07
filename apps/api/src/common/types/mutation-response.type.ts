import { Field, Int, InterfaceType } from '@nestjs/graphql'

@InterfaceType()
export abstract class IMutationResponse {
  @Field(() => Int)
  code: number

  @Field()
  success: boolean

  @Field({ nullable: true })
  message?: string
}
