import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import {
  AuthsProvider,
  LoginOutputMutationResponse,
  User,
  UserMutationResponse,
} from './entities/user.entity'
import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dto/create-user.input'
import { AllowAuthenticated, GetUser } from '../../common/auth/auth.decorator'
import { GetUserType } from '../../common/types/user.type'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from '../../common/prisma/prisma.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => UserMutationResponse)
  async registerWithCredentials(
    @Args('registerWithCredentialsInput')
    args: RegisterWithCredentialsInput,
  ): Promise<UserMutationResponse> {
    try {
      const newUser = await this.usersService.registerWithCredentials(args)
      return {
        code: 200,
        success: true,
        message: 'user register with provider successfully',
        user: newUser,
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: 'Error registering user',
        errors: [{ field: 'general', message: error.message }],
      }
    }
  }

  @Mutation(() => UserMutationResponse)
  async registerWithProvider(
    @Args('registerWithProviderInput') args: RegisterWithProviderInput,
  ): Promise<UserMutationResponse> {
    try {
      const newUser = await this.usersService.registerWithProviders(args)
      return {
        code: 200,
        success: true,
        message: 'user register with provider successfully',
        user: newUser,
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: 'Error registering user',
        errors: [{ field: 'general', message: error.message }],
      }
    }
  }

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll()
  }

  @Query(() => User, { name: 'user', nullable: true })
  async findOne(@Args('id') id: string): Promise<User | null> {
    return await this.usersService.findOne(id)
  }

  @AllowAuthenticated()
  @Query(() => User, { name: 'whoami', nullable: true })
  async whoami(@GetUser() user: GetUserType): Promise<User | null> {
    if (!user?.id) {
      throw new Error('User ID is missing')
    }
    try {
      const foundUser = await this.usersService.findOne(user.id)

      if (!foundUser) {
        throw new Error('User not found')
      }
      return foundUser
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`)
    }
  }

  @Mutation(() => UserMutationResponse)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() user: GetUserType,
  ): Promise<UserMutationResponse> {
    try {
      const userInfo = await this.prisma.user.findUnique({
        where: { id: args.id },
      })
      if (!userInfo) {
        return {
          code: 404,
          success: false,
          message: 'User not found',
          errors: [{ field: 'id', message: 'Invalid user ID' }],
        }
      }
      const updatedUser = await this.usersService.update(args)
      return {
        code: 200,
        success: true,
        message: 'User updated successfully',
        user: updatedUser,
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: 'Error updating user',
        errors: [{ field: 'general', message: error.message }],
      }
    }
  }

  @Mutation(() => LoginOutputMutationResponse)
  async login(
    @Args('loginInput') args: LoginInput,
  ): Promise<LoginOutputMutationResponse> {
    try {
      const loggedInUser = await this.usersService.login(args)

      return {
        code: 200,
        success: true,
        message: 'Login successful',
        user: loggedInUser.user,
        token: loggedInUser.token,
      }
    } catch (error) {
      return {
        code: 401,
        success: false,
        message: 'Login failed',
        errors: [{ field: 'general', message: error.message }],
        token: '',
      }
    }
  }

  @Mutation(() => UserMutationResponse)
  async removeUser(
    @Args('id') id: string,
    @GetUser() user: GetUserType,
  ): Promise<UserMutationResponse> {
    try {
      const userInfo = await this.prisma.user.findUnique({ where: { id } })
      if (!userInfo) {
        return {
          code: 404,
          success: false,
          message: 'User not found',
          errors: [{ field: 'id', message: 'Invalid user ID' }],
        }
      }

      await this.usersService.remove(id)
      return {
        code: 200,
        success: true,
        message: 'User deleted successfully',
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: 'Error deleting user',
        errors: [{ field: 'general', message: error.message }],
      }
    }
  }

  @Query(() => AuthsProvider, { name: 'getAuthProvider', nullable: true })
  getAuthProvider(@Args('id') id: string) {
    return this.prisma.authsProvider.findUnique({ where: { id } })
  }
}
