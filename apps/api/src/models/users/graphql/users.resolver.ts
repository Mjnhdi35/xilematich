import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UsersService } from './users.service'
import {
  AuthsProvider,
  LoginOutputMutationResponse,
  User,
  UserMutationResponse,
} from './entity/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import {
  CreateUserInput,
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Admin } from 'src/models/admins/graphql/entity/admin.entity'
import { Manager } from 'src/models/managers/graphql/entity/manager.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => UserMutationResponse)
  async createUser(
    @Args('createUserInput') args: CreateUserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id)
    return this.usersService.createIfNotFound(args)
  }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() user: GetUserType,
  ) {
    try {
      const userInfo = await this.prisma.user.findUnique({
        where: { id: args.id },
      })
      checkRowLevelPermission(user, userInfo.id)
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

  @AllowAuthenticated()
  @Mutation(() => User)
  async removeUser(
    @Args() args: FindUniqueUserArgs,
    @GetUser() user: GetUserType,
  ): Promise<UserMutationResponse> {
    const userInfo = await this.prisma.user.findUnique(args)
    checkRowLevelPermission(user, userInfo.id)

    try {
      const userInfo = await this.prisma.user.findUnique({
        where: { id: user.id },
      })
      if (!userInfo) {
        return {
          code: 404,
          success: false,
          message: 'User not found',
          errors: [{ field: 'id', message: 'Invalid user ID' }],
        }
      }

      await this.usersService.remove(args)
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
      const newUser = await this.usersService.registerWithProvider(args)
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

  @AllowAuthenticated()
  @Query(() => User)
  whoami(@GetUser() user: GetUserType) {
    return this.usersService.findOne({ where: { id: user.id } })
  }

  @Query(() => AuthsProvider, { name: 'getAuthProvider', nullable: true })
  getAuthProvider(@Args('uid') id: string) {
    return this.prisma.authsProvider.findUnique({ where: { id } })
  }

  @ResolveField(() => Admin, { nullable: true })
  admin(@Parent() user: User) {
    return this.prisma.admin.findUnique({ where: { id: user.id } })
  }

  @ResolveField(() => Manager, { nullable: true })
  manager(@Parent() user: User) {
    return this.prisma.manager.findUnique({ where: { id: user.id } })
  }
}
