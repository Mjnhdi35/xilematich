import { QueryCinemasQuery } from '@xilematich/network/src/gql/generated'
import { AlertBox } from '../molecules/AlertBox'
import MoviePerCinema from './MoviePerCinema'
export const CinemaInfo = ({
  cinema,
}: {
  cinema: QueryCinemasQuery['cinemas'][number]
}) => {
  return (
    <div className="mx-5 shadow-md">
      <div className="text-2xl font-semibold px-5">{cinema.name}</div>
      <div className="text-sm text-gray-600 mt-2 px-3">
        Screens : {cinema.screens.length}
      </div>
      <div className="flex flex-col gap-4 mt-8">
        {cinema.screens.map((screen) => (
          <div key={screen.id} className=" flex flex-col gap-3 p-4">
            <div className="text-2xl justify-center items-center my-2 font-light">
              number room : {screen.numberRoom}
            </div>
            <div className="text-xl justify-center items-center my-2">
              price : {screen.price}/VNĐ
            </div>
            <div className="text-md py-4">
              <h3>projection : {screen.projectionType}</h3>
              <h3>sound system : {screen.soundSystemType}</h3>
            </div>
            {screen.showtimes.length === 0 ? (
              <AlertBox>
                <div>No shows found</div>
              </AlertBox>
            ) : (
              <MoviePerCinema />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
