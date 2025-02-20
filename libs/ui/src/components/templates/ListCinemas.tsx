'use client'

import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QueryCinemasDocument } from '@xilematich/network/src/gql/generated'
import Link from 'next/link'
import { IconPlus } from '@tabler/icons-react'
import { ShowData } from './ShowData'
import { CinemaInfo } from '../organisms/CinemaInfo'

export const ListCinemas = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)

  const { data, loading } = useQuery(QueryCinemasDocument, {
    variables: { skip, take },
  })
  console.log(data, 'data cinemas query')

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
          setSkip,
          setTake,
          resultCount: data?.cinemas.length || 0,
        }}
        className="grid grid-cols-1 gap-4"
      >
        {data?.cinemas.map((cinema) => (
          <CinemaInfo key={cinema.id} cinema={cinema} />
        ))}
      </ShowData>
    </div>
  )
}
