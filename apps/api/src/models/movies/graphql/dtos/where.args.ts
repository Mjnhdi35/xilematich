import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Genre, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ShowtimeListRelationFilter } from 'src/models/showtimes/graphql/dtos/where.args'

@InputType()
export class MovieWhereUniqueInput {
  id: string
}

@InputType()
export class EnumGenreFilter {
  @Field(() => Genre, { nullable: true })
  equals?: Genre;
  @Field(() => [Genre], { nullable: true })
  in?: Genre[]
  @Field(() => [Genre], { nullable: true })
  notIn?: Genre[]
  @Field(() => Genre, { nullable: true })
  not?: Genre
}

@InputType()
export class MovieWhereInputStrict
  implements RestrictProperties<MovieWhereInputStrict, Prisma.MovieWhereInput>
{
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  title: StringFilter
  director: StringFilter
  @Field(() => EnumGenreFilter)
  genre: EnumGenreFilter
  duration: IntFilter
  releaseDate: DateTimeFilter
  posterUrl: StringFilter
  showtimes: ShowtimeListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: MovieWhereInput[]
  OR: MovieWhereInput[]
  NOT: MovieWhereInput[]
}

@InputType()
export class MovieWhereInput extends PartialType(MovieWhereInputStrict) {}

@InputType()
export class MovieListRelationFilter {
  every?: MovieWhereInput
  some?: MovieWhereInput
  none?: MovieWhereInput
}

@InputType()
export class MovieRelationFilter {
  is?: MovieWhereInput
  isNot?: MovieWhereInput
}
