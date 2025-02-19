import React from 'react'
import { useQuery } from '@apollo/client'
import { MoviesPerCinemaDocument } from '@xilematich/network/src/gql/generated'
const MoviePerCinema = () => {
  const { data, loading } = useQuery(MoviesPerCinemaDocument, {
    variables: {
      cinemaId: 'q',
    },
  })
  console.log(data, 'data movie percinema')

  return <div>MoviePerCinema</div>
}

export default MoviePerCinema
