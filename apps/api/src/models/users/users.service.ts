import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import {
  CreateUserInput,
  Login,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from '../../common/prisma/prisma.service'
import * as bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async create(createUserInput: CreateUserInput) {
    return await this.prisma.user.create({
      data: createUserInput,
    })
  }
  findAll() {
    return this.prisma.user.findMany()
  }
  findOne(id: string) {
    return this.prisma.user.findFirst({ where: { id } })
  }

  async registerWithProvider({ name, type }: RegisterWithProviderInput) {
    return this.prisma.user.create({
      data: {
        name,
        authsProvier: {
          create: { type },
        },
      },
    })
  }

  async registerWithCredentials({
    email,
    password,
    name,
  }: RegisterWithCredentialsInput) {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new BadRequestException('user da ton tai')
    }
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    const id = uuidv4()

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
        authsProvier: {
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

  async login({ email, password }: Login): Promise<LoginOutput> {
    const user = await this.prisma.user.findFirst({
      where: { credentials: { email } },
      include: { credentials: true },
    })

    if (!user || !user.credentials) {
      throw new UnauthorizedException('Email hoac Password khong dung')
    }

    const isTruePassword = bcrypt.compareSync(
      password,
      user.credentials.passwordHash,
    )
    if (!isTruePassword) {
      throw new UnauthorizedException('Email hoac Password khong dung')
    }
    const jwtToken = this.jwtService.sign(
      { id: user.id },
      {
        secret: process.env.JWT_SECRET_KEY,
        algorithm: 'HS256',
      },
    )

    return {
      token: jwtToken,
      user,
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserInput,
    })
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
