import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CinemasService } from './cinemas.service'
import { Cinema } from './entities/cinema.entity'

@Resolver(() => Cinema)
export class CinemasResolver {
  constructor(private readonly cinemasService: CinemasService) {}

  @Query(() => [Cinema], { name: 'cinemas' })
  findAll() {
    return this.cinemasService.findAll()
  }

  @Query(() => Cinema, { name: 'cinema' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.cinemasService.findOne(id)
  }

  // @ResolveField(() => Address, { nullable: true })
  // address(@Parent() cinema: Cinema) {
  //   return this.prisma.address.findUnique({ where: { cinemaId: cinema.id } })
  // }
}
