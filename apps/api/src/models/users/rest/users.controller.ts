import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { UsersService } from '../graphql/users.service'
import {
  CreateUserInput,
  Login,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from '../graphql/dto/create-user.input'
import { User } from '../graphql/entities/user.entity'
import { UpdateUserInput } from '../graphql/dto/update-user.input'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
  })
  async create(@Body() createUserInput: CreateUserInput): Promise<User> {
    return await this.usersService.create(createUserInput)
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users', type: [User] })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({ status: 200, description: 'Return a user by id', type: User })
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(id)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: User,
  })
  async update(
    @Param('id') id: string,
    @Body() updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return await this.usersService.update(id, updateUserInput)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
    type: User,
  })
  async remove(@Param('id') id: string): Promise<User> {
    return await this.usersService.remove(id)
  }

  @Post('register/provider')
  @ApiOperation({ summary: 'Register user with provider' })
  @ApiResponse({
    status: 201,
    description: 'User registered with provider',
    type: User,
  })
  async registerWithProvider(
    @Body() registerWithProviderInput: RegisterWithProviderInput,
  ): Promise<User> {
    return await this.usersService.registerWithProvider(
      registerWithProviderInput,
    )
  }

  @Post('register/credentials')
  @ApiOperation({ summary: 'Register user with credentials' })
  @ApiResponse({
    status: 201,
    description: 'User registered with credentials',
    type: User,
  })
  async registerWithCredentials(
    @Body() registerWithCredentialsInput: RegisterWithCredentialsInput,
  ): Promise<User> {
    return await this.usersService.registerWithCredentials(
      registerWithCredentialsInput,
    )
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'User logged in successfully',
    type: LoginOutput,
  })
  async login(@Body() loginDto: Login): Promise<LoginOutput> {
    return await this.usersService.login(loginDto)
  }
}
