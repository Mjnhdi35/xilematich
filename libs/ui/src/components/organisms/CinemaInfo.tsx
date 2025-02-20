import React from 'react'
import { QueryCinemasQuery } from '@xilematich/network/src/gql/generated'
import { AlertBox } from '../molecules/AlertBox'
export const CinemaInfo = ({
  cinema,
}: {
  cinema: QueryCinemasQuery['cinemas'][number]
}) => {
  console.log('cinema', cinema)

  return (
    <div>
      <div className="text-lg font-semibold mb-2">{cinema.name}</div>
      <div className="text-sm text-gray-600">
        Screens: {cinema.screens.length}
      </div>
      <div>
        {cinema.screens.every((screen) => !screen.showtimes.length) ? (
          <AlertBox>No showtime found!</AlertBox>
        ) : null}
      </div>
    </div>
  )
}
