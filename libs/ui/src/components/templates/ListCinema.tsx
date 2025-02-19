'use client'
import { QueryCinemasDocument } from '@xilematich/network/src/gql/generated'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { IconPlus } from '@tabler/icons-react'
import { ShowData } from './ShowData'
import { CinemaInfo } from '../organisms/CinemaInfo'

export interface IListCinemaProps {}

export const ListCinemas = ({}: IListCinemaProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)
  const { data, loading } = useQuery(QueryCinemasDocument, {
    variables: {
      skip,
      take,
    },
  })

  return (
    <div>
      <div className="flex justify-end">
        <Link href={'/cinemas/new'} className="flex items-center gap-2 my-2">
          <IconPlus /> Create cinema
        </Link>
      </div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.cinemas.length || 0,
          setSkip,
          setTake,
        }}
      >
        {data?.cinemas.map((cinema) => (
          <CinemaInfo key={cinema.id} cinema={cinema} />
        ))}
      </ShowData>
    </div>
  )
}
