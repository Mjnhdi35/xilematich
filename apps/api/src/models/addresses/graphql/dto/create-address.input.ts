import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateAddressInput {
  @Field()
  cinemaId: string

  @Field()
  address: string

  @Field(() => Int)
  lat: number

  @Field(() => Int)
  lng: number
}
