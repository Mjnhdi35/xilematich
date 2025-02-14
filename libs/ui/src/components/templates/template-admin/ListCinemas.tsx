import { useState } from 'react'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import { ShowData } from '../ShowData'
import {
  QueryCinemasDocument,
  QueryCinemasQuery,
} from '@xilematich/network/src/gql/generated'
import { useQuery } from '@apollo/client'

export interface IListMoviesProps {}

export const ListCinemas = ({}: IListMoviesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)
  const { data, loading, error } = useQuery(QueryCinemasDocument, {
    variables: { skip, take },
  })

  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="flex justify-end">
        <Link href={'/createCinema'} className="flex items-center gap-2 my-2">
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

export const CinemaInfo = ({
  cinema,
}: {
  cinema: QueryCinemasQuery['cinemas'][number]
}) => {
  return (
    <div>
      <div className="text-lg font-semibold">{cinema.name}</div>
      <div className="text-sm text-gray-600">
        Screens: {cinema.screens.length}
      </div>
    </div>
  )
}
