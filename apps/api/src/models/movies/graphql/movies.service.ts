import { Injectable } from '@nestjs/common'
import { FindManyMovieArgs, FindUniqueMovieArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMovieInput } from './dtos/create-movie.input'
import { UpdateMovieInput } from './dtos/update-movie.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMovieInput: CreateMovieInput) {
    return this.prisma.movie.create({
      data: createMovieInput,
    })
  }

  findAll(args: FindManyMovieArgs) {
    return this.prisma.movie.findMany(args as Prisma.MovieFindManyArgs)
  }

  findOne(args: FindUniqueMovieArgs) {
    return this.prisma.movie.findUnique(args)
  }

  update(updateMovieInput: UpdateMovieInput) {
    const { id, ...data } = updateMovieInput
    return this.prisma.movie.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueMovieArgs) {
    return this.prisma.movie.delete(args)
  }
}
