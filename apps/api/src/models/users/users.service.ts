import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import { PrismaService } from '../../common/prisma/prisma.service'
import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dto/create-user.input'
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  registerWithProviders = async ({ name, type }: RegisterWithProviderInput) => {
    const id = uuid()
    return await this.prisma.user.create({
      data: {
        id,
        name,
        authsProvider: {
          create: { type },
        },
      },
    })
  }

  registerWithCredentials = async ({
    email,
    password,
    name,
  }: RegisterWithCredentialsInput) => {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    })
    if (existingUser) {
      throw new BadRequestException('User already exists with this email.')
    }
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    const id = uuid()

    return await this.prisma.user.create({
      data: {
        id,
        name,
        credentials: { create: { email, passwordHash } },
        authsProvider: { create: { type: 'CREDENTIALS' } },
      },
      include: { credentials: true },
    })
  }

  findAll = async (): Promise<User[]> => {
    const users = await this.prisma.user.findMany({
      include: { authsProvider: true },
    })
    return users.map((user) => user)
  }

  findOne = async (id: string): Promise<User | null> => {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { authsProvider: true },
    })
    if (!user) {
      throw new BadRequestException('User not found')
    }
    return user
  }

  login = async ({ email, password }: LoginInput): Promise<LoginOutput> => {
    const user = await this.prisma.user.findFirst({
      where: { credentials: { email } },
      include: { credentials: true },
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

  update = async (updateUserInput: UpdateUserInput) => {
    const { id, ...data } = updateUserInput
    return await this.prisma.user.update({
      where: { id },
      data: data,
    })
  }

  remove = async (id: string): Promise<User | null> => {
    return await this.prisma.user.delete({
      where: { id },
    })
  }
}
