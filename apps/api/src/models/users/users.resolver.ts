import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './entities/user.entity'
import { UsersService } from './users.service'
import {
  CreateUserInput,
  Login,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll()
  }
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id)
  }
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.name, updateUserInput)
  }
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id)
  }

  @Mutation(() => User)
  async registerWithCredentials(
    @Args('registerWithCredentials') args: RegisterWithCredentialsInput,
  ) {
    return this.usersService.registerWithCredentials(args)
  }

  @Mutation(() => User)
  async registerWithProvider(
    @Args('registerWithProvider') args: RegisterWithProviderInput,
  ) {
    return this.usersService.registerWithProvider(args)
  }

  @Mutation(() => LoginOutput)
  async login(@Args('login') args: Login) {
    return this.usersService.login(args)
  }
}
