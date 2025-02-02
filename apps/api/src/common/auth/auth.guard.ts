import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Role } from '../types'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req
    await this.authenticateUser(req)
    return this.authorizeUser(req, context)
  }

  private async authenticateUser(req: any): Promise<void> {
    const bearerHeader = req.headers.authorization
    const token = bearerHeader?.split(' ')[1]
    if (!token) {
      throw new UnauthorizedException('token khong dung ')
    }

    try {
      const payload = await this.jwtService.verify(token)
      const id = payload.id

      if (!id) {
        throw new UnauthorizedException('token sai, khong co id trong token')
      }
      const user = await this.prisma.user.findUnique({ where: { id } })

      if (!user) {
        throw new UnauthorizedException('token sai, khong co user nao voi id')
      }
      console.log('jwt payload', payload)
      req.user = payload
    } catch (error: any) {
      console.log('Token valid error: ', error)
      throw error
    }
    if (!req.user) {
      throw new UnauthorizedException('token sai')
    }
  }

  private async authorizeUser(
    req: any,
    context: ExecutionContext,
  ): Promise<boolean> {
    const requiredRoles = this.getMetadata<Role[]>('roles', context)
    const userRoles = await this.getUserRoles(req.user.id)

    req.user.roles = userRoles
    if (!requiredRoles || requiredRoles.length === 0) {
      return true
    }
    return requiredRoles.some((role) => userRoles.includes(role))
  }

  private getMetadata<T>(key: string, context: ExecutionContext): T {
    return this.reflector.getAllAndOverride<T>(key, [
      context.getHandler(),
      context.getClass(),
    ])
  }

  private async getUserRoles(id: string): Promise<Role[]> {
    const roles: Role[] = []

    const [admin, manager] = await Promise.all([
      this.prisma.admin.findUnique({ where: { id } }),
      this.prisma.manager.findUnique({ where: { id } }),
    ])

    if (admin) {
      roles.push('admin')
    }
    if (manager) {
      roles.push('manager')
    }

    return roles
  }
}
