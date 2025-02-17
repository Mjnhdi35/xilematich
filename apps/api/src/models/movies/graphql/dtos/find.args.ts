import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MovieOrderByWithRelationInput } from './order-by.args'
import { MovieWhereInput, MovieWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.MovieScalarFieldEnum, {
  name: 'MovieScalarFieldEnum',
})

@ArgsType()
export class FindManyMovieArgsStrict
  implements
    RestrictProperties<
      FindManyMovieArgsStrict,
      Omit<Prisma.MovieFindManyArgs, 'include' | 'select'>
    >
{
  @Field({ nullable: true })
  where: MovieWhereInput
  @Field({ nullable: true })
  orderBy: MovieOrderByWithRelationInput[]
  @Field({ nullable: true })
  cursor: MovieWhereUniqueInput
  @Field({ nullable: true })
  take: number
  @Field({ nullable: true })
  skip: number
  @Field(() => [Prisma.MovieScalarFieldEnum], { nullable: true })
  distinct: Prisma.MovieScalarFieldEnum[]
}

@ArgsType()
export class FindManyMovieArgs extends PartialType(FindManyMovieArgsStrict) {}

@ArgsType()
export class FindUniqueMovieArgs {
  @Field({ nullable: true })
  where: MovieWhereUniqueInput
}
