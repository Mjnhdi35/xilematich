import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MovieOrderByWithRelationInput } from './order-by.args'
import { MovieWhereInput, MovieWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.MovieScalarFieldEnum, {
  name: 'MovieScalarFieldEnum',
})

@ArgsType()
class FindManyMovieArgsStrict
  implements
    RestrictProperties<
      FindManyMovieArgsStrict,
      Omit<Prisma.MovieFindManyArgs, 'include' | 'select'>
    >
{
  where: MovieWhereInput
  orderBy: MovieOrderByWithRelationInput[]
  cursor: MovieWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.MovieScalarFieldEnum])
  distinct: Prisma.MovieScalarFieldEnum[]
}

@ArgsType()
export class FindManyMovieArgs extends PartialType(FindManyMovieArgsStrict) {}

@ArgsType()
export class FindUniqueMovieArgs {
  where: MovieWhereUniqueInput
}
