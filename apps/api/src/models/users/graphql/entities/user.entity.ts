import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, AuthsProviderType, User as UserType } from '@prisma/client'
import { Admin } from '../../../admins/graphql/entities/admin.entity'
import { Manager } from '../../../managers/graphql/entities/manager.entity'
import { Ticket } from '../../../tickets/graphql/entities/ticket.entity'
import { Booking } from '../../../bookings/graphql/entities/booking.entity'

registerEnumType(AuthsProviderType, {
  name: 'AuthsProviderType',
  description: 'Enum for roles',
})

@ObjectType()
export class User implements UserType {
  @Field(() => ID)
  id: string
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  @Field({ nullable: true })
  name: string

  @Field(() => Admin, { nullable: true })
  admin?: Admin
  @Field(() => Manager, { nullable: true })
  manager?: Manager
  @Field(() => [Booking], { nullable: true })
  bookings?: Booking[]
  @Field(() => [Ticket], { nullable: true })
  tickets?: Ticket[]
}

@ObjectType()
export class AuthsProvider {
  uid: string
  @Field(() => $Enums.AuthsProviderType)
  type: $Enums.AuthsProviderType
}
