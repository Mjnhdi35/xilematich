import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../../common/prisma/prisma.service'
import { CreateMovieInput } from './dto/create-movie.input'
import { UpdateMovieInput } from './dto/update-movie.input'

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMovieInput: CreateMovieInput) {
    return await this.prisma.movie.create({
      data: { ...createMovieInput },
    })
  }

  async findAll() {
    return await this.prisma.movie.findMany()
  }

  async findOne(id: string) {
    const movie = await this.prisma.movie.findUnique({ where: { id } })
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`)
    }
    return movie
  }

  async update(id: string, updateMovieInput: UpdateMovieInput) {
    await this.findOne(id)
    return await this.prisma.movie.update({
      where: { id },
      data: { ...updateMovieInput },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return await this.prisma.movie.delete({
      where: { id },
    })
  }
}
