'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  QueryMovieSkipTakeDocument,
  QueryMovieSkipTakeQuery,
} from '@xilematich/network/src/gql/generated'
import { ShowData } from './ShowData'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'

export interface IListMoviesProps {}

export const ListMovies = ({}: IListMoviesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)
  const { data, loading } = useQuery(QueryMovieSkipTakeDocument, {
    variables: {
      skip,
      take,
    },
  })
  return (
    <div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.movies.length || 0,
          setSkip,
          setTake,
        }}
      >
        {data?.movies.map((movie, index) => (
          <MovieInfo movie={movie} key={index} />
        ))}
      </ShowData>
    </div>
  )
}

export const MovieInfo = ({
  movie,
}: {
  movie: QueryMovieSkipTakeQuery['movies'][number]
}) => {
  return (
    <div key={movie.id} className="flex gap-2 flex-col shadow-md mx-auto">
      <Image
        src={movie.posterUrl || '/moviess.jpg'}
        className="object-cover rounded shadow-lg"
        alt={movie.title}
        width={485}
        height={845}
        priority={movie.id === movie.id}
      />

      <div className="items-start justify-center flex flex-col mx-4 my-2">
        <div className="text-lg font-semibold">{movie.title}</div>
        <div className="text-sm text-gray-600">{movie.director}</div>
        <div className="text-sm text-gray-600">{movie.duration} mins</div>
        <div className="text-sm text-gray-600">
          {format(new Date(movie.releaseDate), 'PP', { locale: vi })}
        </div>
      </div>
    </div>
  )
}
