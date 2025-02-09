import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  CreateUserInput,
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import * as bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import { JwtService } from '@nestjs/jwt'
import { Prisma } from '@prisma/client'
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createIfNotFound(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.findUnique({
      where: { id: createUserInput.id },
    })
    if (user?.id) {
      return user
    }
    return this.prisma.user.create({
      data: createUserInput,
    })
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args as Prisma.UserFindManyArgs)
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args)
  }

  update(updateUserInput: UpdateUserInput) {
    const { id, ...data } = updateUserInput
    return this.prisma.user.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args)
  }

  registerWithProvider({ name, id, type }: RegisterWithProviderInput) {
    return this.prisma.user.create({
      data: {
        id,
        name,
        authsProvider: {
          create: {
            type,
          },
        },
      },
    })
  }

  async registerWithCredentials({
    email,
    name,
    password,
  }: RegisterWithCredentialsInput) {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new BadRequestException('User already exists with this email.')
    }

    // Hash the password
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    const id = uuid()

    return this.prisma.user.create({
      data: {
        id,
        name,
        credentials: {
          create: {
            email,
            passwordHash,
          },
        },
        authsProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
      include: {
        credentials: true,
      },
    })
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    const user = await this.prisma.user.findFirst({
      where: {
        credentials: { email },
      },
      include: {
        credentials: true,
      },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid email or password.')
    }

    const isPasswordValid = bcrypt.compareSync(
      password,
      user.credentials.passwordHash,
    )

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password.')
    }

    const jwtToken = this.jwtService.sign(
      { id: user.id },
      {
        algorithm: 'HS256',
      },
    )

    return { token: jwtToken, user }
  }
}
