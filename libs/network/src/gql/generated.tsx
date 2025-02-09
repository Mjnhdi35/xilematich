import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Address = {
  __typename?: 'Address'
  address: Scalars['String']['output']
  cinema?: Maybe<Cinema>
  cinemaId?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  lat: Scalars['Int']['output']
  lng: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  cinema?: InputMaybe<CinemaOrderByWithRelationInput>
  cinemaId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>
  isNot?: InputMaybe<AddressWhereInput>
}

export enum AddressScalarFieldEnum {
  Address = 'address',
  CinemaId = 'cinemaId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  UpdatedAt = 'updatedAt',
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>
  NOT?: InputMaybe<Array<AddressWhereInput>>
  OR?: InputMaybe<Array<AddressWhereInput>>
  address?: InputMaybe<StringFilter>
  cinema?: InputMaybe<CinemaRelationFilter>
  cinemaId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AddressWhereUniqueInput = {
  cinemaId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
}

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type AdminWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput'
  count: Scalars['Int']['output']
}

export type AuthsProvider = {
  __typename?: 'AuthsProvider'
  id: Scalars['String']['output']
  type: AuthsProviderType
}

export enum AuthsProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  count: Scalars['Int']['output']
}

export type Booking = {
  __typename?: 'Booking'
  column: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  row: Scalars['Int']['output']
  screenId?: Maybe<Scalars['String']['output']>
  showtimeId: Scalars['String']['output']
  ticketId?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['String']['output']
}

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>
  none?: InputMaybe<BookingWhereInput>
  some?: InputMaybe<BookingWhereInput>
}

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingOrderByWithRelationInput = {
  column?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  row?: InputMaybe<SortOrder>
  screenId?: InputMaybe<SortOrder>
  seat?: InputMaybe<SeatOrderByWithRelationInput>
  showtime?: InputMaybe<ShowtimeOrderByWithRelationInput>
  showtimeId?: InputMaybe<SortOrder>
  ticket?: InputMaybe<TicketOrderByWithRelationInput>
  ticketId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export enum BookingScalarFieldEnum {
  Column = 'column',
  CreatedAt = 'createdAt',
  Id = 'id',
  Row = 'row',
  ScreenId = 'screenId',
  ShowtimeId = 'showtimeId',
  TicketId = 'ticketId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  column?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  row?: InputMaybe<IntFilter>
  screenId?: InputMaybe<StringFilter>
  seat?: InputMaybe<SeatRelationFilter>
  showtime?: InputMaybe<ShowtimeRelationFilter>
  showtimeId?: InputMaybe<StringFilter>
  ticket?: InputMaybe<TicketRelationFilter>
  ticketId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type BookingWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type Cinema = {
  __typename?: 'Cinema'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type CinemaOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  managers?: InputMaybe<ManagerOrderByRelationAggregateInput>
  name?: InputMaybe<SortOrder>
  screens?: InputMaybe<ScreenOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type CinemaRelationFilter = {
  is?: InputMaybe<CinemaWhereInput>
  isNot?: InputMaybe<CinemaWhereInput>
}

export enum CinemaScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type CinemaWhereInput = {
  AND?: InputMaybe<Array<CinemaWhereInput>>
  NOT?: InputMaybe<Array<CinemaWhereInput>>
  OR?: InputMaybe<Array<CinemaWhereInput>>
  address?: InputMaybe<AddressRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  managers?: InputMaybe<ManagerListRelationFilter>
  name?: InputMaybe<StringFilter>
  screens?: InputMaybe<ScreenListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CinemaWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type CreateAddressInput = {
  address: Scalars['String']['input']
  cinemaId?: InputMaybe<Scalars['String']['input']>
  lat: Scalars['Int']['input']
  lng: Scalars['Int']['input']
}

export type CreateAddressInputWithoutCinemaId = {
  address: Scalars['String']['input']
  lat: Scalars['Int']['input']
  lng: Scalars['Int']['input']
}

export type CreateAdminInput = {
  id: Scalars['String']['input']
}

export type CreateBookingInput = {
  id: Scalars['String']['input']
  seats: Array<RowColumn>
  showtimeId: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type CreateCinemaInput = {
  address: CreateAddressInputWithoutCinemaId
  manager: CreateManagerInputWithoutCinemaId
  name: Scalars['String']['input']
  screens: Array<CreateScreenInputWithoutCinemaId>
}

export type CreateManagerInput = {
  id: Scalars['String']['input']
}

export type CreateManagerInputWithoutCinemaId = {
  id: Scalars['String']['input']
}

export type CreateMovieInput = {
  director: Scalars['String']['input']
  duration: Scalars['Int']['input']
  genre: Genre
  id: Scalars['String']['input']
  posterUrl?: InputMaybe<Scalars['String']['input']>
  releaseDate: Scalars['DateTime']['input']
  title: Scalars['String']['input']
}

export type CreateScreenInput = {
  cinemaId: Scalars['String']['input']
  columns: Scalars['Int']['input']
  id: Scalars['String']['input']
  numberRoom: Scalars['Int']['input']
  price: Scalars['Float']['input']
  projectionType: ProjectionType
  rows: Scalars['Int']['input']
  soundSystemType: SoundSystemType
}

export type CreateScreenInputWithoutCinemaId = {
  columns: Scalars['Int']['input']
  id: Scalars['String']['input']
  numberRoom: Scalars['Int']['input']
  price: Scalars['Float']['input']
  projectionType: ProjectionType
  rows: Scalars['Int']['input']
  soundSystemType: SoundSystemType
}

export type CreateSeatInput = {
  column: Scalars['Int']['input']
  row: Scalars['Int']['input']
  screenId: Scalars['String']['input']
}

export type CreateShowtimeInput = {
  movieId: Scalars['String']['input']
  screenId: Scalars['String']['input']
  showtimes: Array<Scalars['String']['input']>
}

export type CreateTicketInput = {
  id: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type CreateUserInput = {
  id: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type EnumGenreFilter = {
  equals?: InputMaybe<Genre>
  in?: InputMaybe<Array<Genre>>
  not?: InputMaybe<Genre>
  notIn?: InputMaybe<Array<Genre>>
}

export type EnumProjectionTypeFilter = {
  equals?: InputMaybe<ProjectionType>
  in?: InputMaybe<Array<ProjectionType>>
  not?: InputMaybe<ProjectionType>
  notIn?: InputMaybe<Array<ProjectionType>>
}

export type EnumShowtimeStatusFilter = {
  equals?: InputMaybe<ShowtimeStatus>
  in?: InputMaybe<Array<ShowtimeStatus>>
  not?: InputMaybe<ShowtimeStatus>
  notIn?: InputMaybe<Array<ShowtimeStatus>>
}

export type EnumSoundSystemTypeFilter = {
  equals?: InputMaybe<SoundSystemType>
  in?: InputMaybe<Array<SoundSystemType>>
  not?: InputMaybe<SoundSystemType>
  notIn?: InputMaybe<Array<SoundSystemType>>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
}

/** Enum for roles */
export enum Genre {
  Action = 'ACTION',
  Adventure = 'ADVENTURE',
  Animation = 'ANIMATION',
  Comedy = 'COMEDY',
  Crime = 'CRIME',
  Documentary = 'DOCUMENTARY',
  Drama = 'DRAMA',
  Family = 'FAMILY',
  Fantasy = 'FANTASY',
  FilmNoir = 'FILM_NOIR',
  History = 'HISTORY',
  Horror = 'HORROR',
  Music = 'MUSIC',
  Mystery = 'MYSTERY',
  Romance = 'ROMANCE',
  SciFi = 'SCI_FI',
  Short = 'SHORT',
  Sport = 'SPORT',
  Thriller = 'THRILLER',
  War = 'WAR',
  Western = 'WESTERN',
}

export type GroupedShowtime = {
  __typename?: 'GroupedShowtime'
  date: Scalars['String']['output']
  showtimes: Array<ShowtimeSimple>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  token: Scalars['String']['output']
  user: User
}

export type Manager = {
  __typename?: 'Manager'
  cinema?: Maybe<Cinema>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ManagerListRelationFilter = {
  every?: InputMaybe<ManagerWhereInput>
  none?: InputMaybe<ManagerWhereInput>
  some?: InputMaybe<ManagerWhereInput>
}

export type ManagerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ManagerOrderByWithRelationInput = {
  cinema?: InputMaybe<CinemaOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum ManagerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>
  NOT?: InputMaybe<Array<ManagerWhereInput>>
  OR?: InputMaybe<Array<ManagerWhereInput>>
  cinema?: InputMaybe<CinemaRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ManagerWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type Movie = {
  __typename?: 'Movie'
  createdAt: Scalars['DateTime']['output']
  director: Scalars['String']['output']
  duration: Scalars['Int']['output']
  genre: Genre
  id: Scalars['String']['output']
  posterUrl?: Maybe<Scalars['String']['output']>
  releaseDate: Scalars['DateTime']['output']
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type MovieOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  director?: InputMaybe<SortOrder>
  duration?: InputMaybe<SortOrder>
  genre?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  posterUrl?: InputMaybe<SortOrder>
  releaseDate?: InputMaybe<SortOrder>
  showtimes?: InputMaybe<ShowtimeOrderByRelationAggregateInput>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>
  isNot?: InputMaybe<MovieWhereInput>
}

export enum MovieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Director = 'director',
  Duration = 'duration',
  Genre = 'genre',
  Id = 'id',
  PosterUrl = 'posterUrl',
  ReleaseDate = 'releaseDate',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>
  NOT?: InputMaybe<Array<MovieWhereInput>>
  OR?: InputMaybe<Array<MovieWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  director?: InputMaybe<StringFilter>
  duration?: InputMaybe<IntFilter>
  genre?: InputMaybe<EnumGenreFilter>
  id?: InputMaybe<StringFilter>
  posterUrl?: InputMaybe<StringFilter>
  releaseDate?: InputMaybe<DateTimeFilter>
  showtimes?: InputMaybe<ShowtimeListRelationFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MovieWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAddress: Address
  createAdmin: Admin
  createBooking: Booking
  createCinema: Cinema
  createManager: Manager
  createMovie: Movie
  createScreen: Screen
  createSeat: Seat
  createShowtime: BatchPayload
  createTicket: Ticket
  createUser: User
  login: LoginOutput
  registerWithCredentials: User
  registerWithProvider: User
  removeAddress: Address
  removeAdmin: Admin
  removeBooking: Booking
  removeCinema: Cinema
  removeManager: Manager
  removeMovie: Movie
  removeScreen: Screen
  removeSeat: Seat
  removeShowtime: Showtime
  removeTicket: Ticket
  removeUser: User
  updateAddress: Address
  updateAdmin: Admin
  updateBooking: Booking
  updateCinema: Cinema
  updateManager: Manager
  updateMovie: Movie
  updateScreen: Screen
  updateShowtime: Showtime
  updateTicket: Ticket
  updateUser: User
}

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateCinemaArgs = {
  createCinemaInput: CreateCinemaInput
}

export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput
}

export type MutationCreateMovieArgs = {
  createMovieInput: CreateMovieInput
}

export type MutationCreateScreenArgs = {
  createScreenInput: CreateScreenInput
}

export type MutationCreateSeatArgs = {
  createSeatInput: CreateSeatInput
}

export type MutationCreateShowtimeArgs = {
  createShowtimeInput: CreateShowtimeInput
}

export type MutationCreateTicketArgs = {
  createTicketInput: CreateTicketInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationRegisterWithCredentialsArgs = {
  registerWithCredentialsInput: RegisterWithCredentialsInput
}

export type MutationRegisterWithProviderArgs = {
  registerWithProviderInput: RegisterWithProviderInput
}

export type MutationRemoveAddressArgs = {
  where: AddressWhereUniqueInput
}

export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput
}

export type MutationRemoveBookingArgs = {
  where: BookingWhereUniqueInput
}

export type MutationRemoveCinemaArgs = {
  where: CinemaWhereUniqueInput
}

export type MutationRemoveManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type MutationRemoveMovieArgs = {
  where: MovieWhereUniqueInput
}

export type MutationRemoveScreenArgs = {
  where: ScreenWhereUniqueInput
}

export type MutationRemoveSeatArgs = {
  where: SeatWhereUniqueInput
}

export type MutationRemoveShowtimeArgs = {
  where: ShowtimeWhereUniqueInput
}

export type MutationRemoveTicketArgs = {
  where: TicketWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateCinemaArgs = {
  updateCinemaInput: UpdateCinemaInput
}

export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput
}

export type MutationUpdateMovieArgs = {
  updateMovieInput: UpdateMovieInput
}

export type MutationUpdateScreenArgs = {
  updateScreenInput: UpdateScreenInput
}

export type MutationUpdateShowtimeArgs = {
  updateShowtimeInput: UpdateShowtimeInput
}

export type MutationUpdateTicketArgs = {
  updateTicketInput: UpdateTicketInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

/** Enum for screen projection types */
export enum ProjectionType {
  DolbyCinema = 'DOLBY_CINEMA',
  Imax = 'IMAX',
  Plf = 'PLF',
  Rpx = 'RPX',
  Screenx = 'SCREENX',
  Standard = 'STANDARD',
}

export type Query = {
  __typename?: 'Query'
  address: Address
  addresses: Array<Address>
  admin: Admin
  adminMe: Admin
  admins: Array<Admin>
  bookedSeatsInShowtime: RemainingSeats
  booking: Booking
  bookings: Array<Booking>
  cinema: Cinema
  cinemas: Array<Cinema>
  getAuthsProvider?: Maybe<AuthsProvider>
  manager: Manager
  managers: Array<Manager>
  movie: Movie
  movies: Array<Movie>
  moviesCount: AggregateCountOutput
  moviesPerCinema: Array<Movie>
  myTickets: Array<Ticket>
  screen: Screen
  screens: Array<Screen>
  seat: Seat
  seats: Array<Seat>
  showtime: Showtime
  showtimes: Array<Showtime>
  showtimesInCinema: Array<GroupedShowtime>
  ticket: Ticket
  tickets: Array<Ticket>
  ticketsCount: AggregateCountOutput
  user: User
  users: Array<User>
  whoami: User
}

export type QueryAddressArgs = {
  where: AddressWhereUniqueInput
}

export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AddressWhereInput>
}

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryBookedSeatsInShowtimeArgs = {
  showtimeId: Scalars['String']['input']
}

export type QueryBookingArgs = {
  where: BookingWhereUniqueInput
}

export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryCinemaArgs = {
  where: CinemaWhereUniqueInput
}

export type QueryCinemasArgs = {
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CinemaOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CinemaWhereInput>
}

export type QueryGetAuthsProviderArgs = {
  id: Scalars['String']['input']
}

export type QueryManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type QueryManagersArgs = {
  cursor?: InputMaybe<ManagerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManagerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManagerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ManagerWhereInput>
}

export type QueryMovieArgs = {
  where: MovieWhereUniqueInput
}

export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MovieWhereInput>
}

export type QueryMoviesCountArgs = {
  where?: InputMaybe<MovieWhereInput>
}

export type QueryMoviesPerCinemaArgs = {
  cinemaId: Scalars['String']['input']
  cursor?: InputMaybe<MovieWhereUniqueInput>
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MovieWhereInput>
}

export type QueryMyTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>
  distinct?: InputMaybe<Array<TicketScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TicketOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TicketWhereInput>
}

export type QueryScreenArgs = {
  where: ScreenWhereUniqueInput
}

export type QueryScreensArgs = {
  cursor?: InputMaybe<ScreenWhereUniqueInput>
  distinct?: InputMaybe<Array<ScreenScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ScreenOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScreenWhereInput>
}

export type QuerySeatArgs = {
  where: SeatWhereUniqueInput
}

export type QuerySeatsArgs = {
  cursor?: InputMaybe<SeatWhereUniqueInput>
  distinct?: InputMaybe<Array<SeatScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SeatOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SeatWhereInput>
}

export type QueryShowtimeArgs = {
  where: ShowtimeWhereUniqueInput
}

export type QueryShowtimesArgs = {
  cursor?: InputMaybe<ShowtimeWhereUniqueInput>
  distinct?: InputMaybe<Array<ShowtimeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ShowtimeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ShowtimeWhereInput>
}

export type QueryShowtimesInCinemaArgs = {
  cinemaId: Scalars['Int']['input']
  movieId: Scalars['Int']['input']
}

export type QueryTicketArgs = {
  where: TicketWhereUniqueInput
}

export type QueryTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>
  distinct?: InputMaybe<Array<TicketScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TicketOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TicketWhereInput>
}

export type QueryTicketsCountArgs = {
  where?: InputMaybe<TicketWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type RegisterWithProviderInput = {
  id: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  type: AuthsProviderType
}

export type RemainingSeats = {
  __typename?: 'RemainingSeats'
  booked: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type RowColumn = {
  column: Scalars['Int']['input']
  row: Scalars['Int']['input']
}

export type Screen = {
  __typename?: 'Screen'
  cinema: Cinema
  cinemaId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  numberRoom: Scalars['Int']['output']
  price: Scalars['Float']['output']
  projectionType: ProjectionType
  seats: Array<Seat>
  seatsCount: Scalars['String']['output']
  /** This returns all current and future shows. */
  showtimes: Array<Showtime>
  soundSystemType: SoundSystemType
  updatedAt: Scalars['DateTime']['output']
}

export type ScreenListRelationFilter = {
  every?: InputMaybe<ScreenWhereInput>
  none?: InputMaybe<ScreenWhereInput>
  some?: InputMaybe<ScreenWhereInput>
}

export type ScreenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ScreenOrderByWithRelationInput = {
  cinema?: InputMaybe<CinemaOrderByWithRelationInput>
  cinemaId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  numberRoom?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  projectionType?: InputMaybe<SortOrder>
  seats?: InputMaybe<SeatOrderByRelationAggregateInput>
  showtimes?: InputMaybe<ShowtimeOrderByRelationAggregateInput>
  soundSystemType?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ScreenRelationFilter = {
  is?: InputMaybe<ScreenWhereInput>
  isNot?: InputMaybe<ScreenWhereInput>
}

export enum ScreenScalarFieldEnum {
  CinemaId = 'cinemaId',
  CreatedAt = 'createdAt',
  Id = 'id',
  NumberRoom = 'numberRoom',
  Price = 'price',
  ProjectionType = 'projectionType',
  SoundSystemType = 'soundSystemType',
  UpdatedAt = 'updatedAt',
}

export type ScreenWhereInput = {
  AND?: InputMaybe<Array<ScreenWhereInput>>
  NOT?: InputMaybe<Array<ScreenWhereInput>>
  OR?: InputMaybe<Array<ScreenWhereInput>>
  cinema?: InputMaybe<CinemaRelationFilter>
  cinemaId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  numberRoom?: InputMaybe<IntFilter>
  price?: InputMaybe<FloatFilter>
  projectionType?: InputMaybe<EnumProjectionTypeFilter>
  seats?: InputMaybe<SeatListRelationFilter>
  showtimes?: InputMaybe<ShowtimeListRelationFilter>
  soundSystemType?: InputMaybe<EnumSoundSystemTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ScreenWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type Seat = {
  __typename?: 'Seat'
  booked?: Maybe<Scalars['Boolean']['output']>
  bookings: Array<Booking>
  column: Scalars['Int']['output']
  row: Scalars['Int']['output']
  screen: Screen
  screenId: Scalars['String']['output']
}

export type SeatBookedArgs = {
  showtimeId: Scalars['String']['input']
}

export type SeatListRelationFilter = {
  every?: InputMaybe<SeatWhereInput>
  none?: InputMaybe<SeatWhereInput>
  some?: InputMaybe<SeatWhereInput>
}

export type SeatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SeatOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  column?: InputMaybe<SortOrder>
  row?: InputMaybe<SortOrder>
  screen?: InputMaybe<ScreenOrderByWithRelationInput>
  screenId?: InputMaybe<SortOrder>
}

export type SeatRelationFilter = {
  is?: InputMaybe<SeatWhereInput>
  isNot?: InputMaybe<SeatWhereInput>
}

export enum SeatScalarFieldEnum {
  Column = 'column',
  Row = 'row',
  ScreenId = 'screenId',
}

export type SeatScreenIdRowColumnCompoundUniqueInput = {
  column: Scalars['Int']['input']
  row: Scalars['Int']['input']
  screenId: Scalars['String']['input']
}

export type SeatWhereInput = {
  AND?: InputMaybe<Array<SeatWhereInput>>
  NOT?: InputMaybe<Array<SeatWhereInput>>
  OR?: InputMaybe<Array<SeatWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  column?: InputMaybe<IntFilter>
  row?: InputMaybe<IntFilter>
  screen?: InputMaybe<ScreenRelationFilter>
  screenId?: InputMaybe<StringFilter>
}

export type SeatWhereUniqueInput = {
  screenId_row_column: SeatScreenIdRowColumnCompoundUniqueInput
}

export type Showtime = {
  __typename?: 'Showtime'
  Booking: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  movie: Movie
  movieId: Scalars['String']['output']
  screen: Screen
  screenId: Scalars['String']['output']
  startTime: Scalars['DateTime']['output']
  status?: Maybe<ShowtimeStatus>
  updatedAt: Scalars['DateTime']['output']
}

export type ShowtimeListRelationFilter = {
  every?: InputMaybe<ShowtimeWhereInput>
  none?: InputMaybe<ShowtimeWhereInput>
  some?: InputMaybe<ShowtimeWhereInput>
}

export type ShowtimeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ShowtimeOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  movie?: InputMaybe<MovieOrderByWithRelationInput>
  movieId?: InputMaybe<SortOrder>
  screen?: InputMaybe<ScreenOrderByWithRelationInput>
  screenId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ShowtimeRelationFilter = {
  is?: InputMaybe<ShowtimeWhereInput>
  isNot?: InputMaybe<ShowtimeWhereInput>
}

export enum ShowtimeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MovieId = 'movieId',
  ScreenId = 'screenId',
  StartTime = 'startTime',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ShowtimeSimple = {
  __typename?: 'ShowtimeSimple'
  id: Scalars['String']['output']
  movieId: Scalars['String']['output']
  remainingSeats: RemainingSeats
  screen: Screen
  startTime: Scalars['String']['output']
}

/** Enum for showtime statuses */
export enum ShowtimeStatus {
  Cancelled = 'CANCELLED',
  Postponed = 'POSTPONED',
}

export type ShowtimeWhereInput = {
  AND?: InputMaybe<Array<ShowtimeWhereInput>>
  NOT?: InputMaybe<Array<ShowtimeWhereInput>>
  OR?: InputMaybe<Array<ShowtimeWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  movie?: InputMaybe<MovieRelationFilter>
  movieId?: InputMaybe<StringFilter>
  screen?: InputMaybe<ScreenRelationFilter>
  screenId?: InputMaybe<StringFilter>
  startTime?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<EnumShowtimeStatusFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ShowtimeWhereUniqueInput = {
  id: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

/** Enum for sound system types */
export enum SoundSystemType {
  Auro_3D = 'AURO_3D',
  DolbyAtmos = 'DOLBY_ATMOS',
  DolbyDigital = 'DOLBY_DIGITAL',
  Dts = 'DTS',
  DtsX = 'DTS_X',
  ImaxEnhanced = 'IMAX_ENHANCED',
  Mono = 'MONO',
  SonySdds = 'SONY_SDDS',
  Stereo = 'STEREO',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type Ticket = {
  __typename?: 'Ticket'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  qrCode?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['String']['output']
}

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>
  none?: InputMaybe<TicketWhereInput>
  some?: InputMaybe<TicketWhereInput>
}

export type TicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TicketOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  qrCode?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export type TicketRelationFilter = {
  is?: InputMaybe<TicketWhereInput>
  isNot?: InputMaybe<TicketWhereInput>
}

export enum TicketScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  QrCode = 'qrCode',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>
  NOT?: InputMaybe<Array<TicketWhereInput>>
  OR?: InputMaybe<Array<TicketWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  qrCode?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type TicketWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>
  cinemaId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  lat?: InputMaybe<Scalars['Int']['input']>
  lng?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateAdminInput = {
  id: Scalars['String']['input']
}

export type UpdateBookingInput = {
  id: Scalars['String']['input']
  seats?: InputMaybe<Array<RowColumn>>
  showtimeId?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCinemaInput = {
  address?: InputMaybe<CreateAddressInputWithoutCinemaId>
  id: Scalars['String']['input']
  manager?: InputMaybe<CreateManagerInputWithoutCinemaId>
  name?: InputMaybe<Scalars['String']['input']>
  screens?: InputMaybe<Array<CreateScreenInputWithoutCinemaId>>
}

export type UpdateManagerInput = {
  id: Scalars['String']['input']
}

export type UpdateMovieInput = {
  director?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  genre?: InputMaybe<Genre>
  id: Scalars['String']['input']
  posterUrl?: InputMaybe<Scalars['String']['input']>
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateScreenInput = {
  cinemaId?: InputMaybe<Scalars['String']['input']>
  columns?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  numberRoom?: InputMaybe<Scalars['Int']['input']>
  price?: InputMaybe<Scalars['Float']['input']>
  projectionType?: InputMaybe<ProjectionType>
  rows?: InputMaybe<Scalars['Int']['input']>
  soundSystemType?: InputMaybe<SoundSystemType>
}

export type UpdateShowtimeInput = {
  id: Scalars['String']['input']
  startTime?: InputMaybe<Scalars['DateTime']['input']>
  status?: InputMaybe<ShowtimeStatus>
}

export type UpdateTicketInput = {
  id: Scalars['String']['input']
  userId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
  id: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  admin?: Maybe<Admin>
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  manager?: Maybe<Manager>
  name?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  manager?: InputMaybe<ManagerOrderByWithRelationInput>
  name?: InputMaybe<SortOrder>
  tickets?: InputMaybe<TicketOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  tickets?: InputMaybe<TicketListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    name?: string | null
    id: string
    createdAt: any
    updatedAt: any
  }>
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    token: string
    user: { __typename?: 'User'; id: string; name?: string | null }
  }
}

export type GetAuthsProviderQueryVariables = Exact<{
  getAuthsProviderId: Scalars['String']['input']
}>

export type GetAuthsProviderQuery = {
  __typename?: 'Query'
  getAuthsProvider?: {
    __typename?: 'AuthsProvider'
    type: AuthsProviderType
    id: string
  } | null
}

export type RegisterWithProviderMutationVariables = Exact<{
  registerWithProviderInput: RegisterWithProviderInput
}>

export type RegisterWithProviderMutation = {
  __typename?: 'Mutation'
  registerWithProvider: {
    __typename?: 'User'
    id: string
    createdAt: any
    name?: string | null
    updatedAt: any
  }
}

export type RegisterWithCredentialsMutationVariables = Exact<{
  registerWithCredentialsInput: RegisterWithCredentialsInput
}>

export type RegisterWithCredentialsMutation = {
  __typename?: 'Mutation'
  registerWithCredentials: {
    __typename?: 'User'
    name?: string | null
    updatedAt: any
    id: string
    createdAt: any
  }
}

export const namedOperations = {
  Query: {
    Users: 'Users',
    GetAuthsProvider: 'GetAuthsProvider',
  },
  Mutation: {
    Login: 'Login',
    RegisterWithProvider: 'RegisterWithProvider',
    RegisterWithCredentials: 'RegisterWithCredentials',
  },
}

export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Users' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'loginInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'loginInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const GetAuthsProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthsProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'getAuthsProviderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthsProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'getAuthsProviderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthsProviderQuery,
  GetAuthsProviderQueryVariables
>
export const RegisterWithProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithProviderMutation,
  RegisterWithProviderMutationVariables
>
export const RegisterWithCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithCredentialsMutation,
  RegisterWithCredentialsMutationVariables
>
