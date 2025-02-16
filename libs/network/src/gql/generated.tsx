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
  lat: Scalars['Float']['output']
  lng: Scalars['Float']['output']
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
  seat?: Maybe<Seat>
  showtime: Showtime
  showtimeId: Scalars['String']['output']
  ticket?: Maybe<Ticket>
  ticketId?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  user: User
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
  address?: Maybe<Address>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  managers: Array<Manager>
  name: Scalars['String']['output']
  screens: Array<Screen>
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
  lat: Scalars['Float']['input']
  lng: Scalars['Float']['input']
}

export type CreateAddressInputWithoutCinemaId = {
  address: Scalars['String']['input']
  lat: Scalars['Float']['input']
  lng: Scalars['Float']['input']
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
  image?: InputMaybe<Scalars['String']['input']>
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

export type LocationFilterInput = {
  ne_lat: Scalars['Float']['input']
  ne_lng: Scalars['Float']['input']
  sw_lat: Scalars['Float']['input']
  sw_lng: Scalars['Float']['input']
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
  showtimes: Array<Showtime>
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
  cinemaByManager: Cinema
  cinemas: Array<Cinema>
  cinemasCount: AggregateCountOutput
  getAuthsProvider?: Maybe<AuthsProvider>
  manager: Manager
  managerMe: Manager
  managers: Array<Manager>
  movie: Movie
  movies: Array<Movie>
  moviesCount: AggregateCountOutput
  moviesPerCinema: Array<Movie>
  myTickets: Array<Ticket>
  screen: Screen
  screens: Array<Screen>
  searchCinemas: Array<Cinema>
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

export type QueryCinemaByManagerArgs = {
  id: Scalars['String']['input']
}

export type QueryCinemasArgs = {
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CinemaOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CinemaWhereInput>
}

export type QueryCinemasCountArgs = {
  where?: InputMaybe<CinemaWhereUniqueInput>
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

export type QuerySearchCinemasArgs = {
  cursor: CinemaWhereUniqueInput
  distinct: Array<CinemaScalarFieldEnum>
  locationFilter: LocationFilterInput
  orderBy: Array<CinemaOrderByWithRelationInput>
  skip: Scalars['Int']['input']
  take: Scalars['Int']['input']
  where: CinemaWhereInput
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
  cinemaId: Scalars['String']['input']
  movieId: Scalars['String']['input']
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
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type RegisterWithProviderInput = {
  id: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
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
  lat?: InputMaybe<Scalars['Float']['input']>
  lng?: InputMaybe<Scalars['Float']['input']>
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
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  admin?: Maybe<Admin>
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  image?: Maybe<Scalars['String']['output']>
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
  Image = 'image',
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

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    token: string
    user: {
      __typename?: 'User'
      id: string
      name?: string | null
      image?: string | null
    }
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

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User'; id: string }>
}

export type AdminQueryVariables = Exact<{
  where: AdminWhereUniqueInput
}>

export type AdminQuery = {
  __typename?: 'Query'
  admin: {
    __typename?: 'Admin'
    id: string
    user?: { __typename?: 'User'; id: string; name?: string | null } | null
  }
}

export type CinemaQueryVariables = Exact<{
  where: CinemaWhereUniqueInput
}>

export type CinemaQuery = {
  __typename?: 'Query'
  cinema: { __typename?: 'Cinema'; id: string; name: string }
}

export type MutationCreateCinemaMutationVariables = Exact<{
  createCinemaInput: CreateCinemaInput
}>

export type MutationCreateCinemaMutation = {
  __typename?: 'Mutation'
  createCinema: { __typename?: 'Cinema'; id: string }
}

export type MutationCreateMovieMutationVariables = Exact<{
  createMovieInput: CreateMovieInput
}>

export type MutationCreateMovieMutation = {
  __typename?: 'Mutation'
  createMovie: {
    __typename?: 'Movie'
    id: string
    title: string
    director: string
    duration: number
    genre: Genre
    posterUrl?: string | null
    releaseDate: any
  }
}

export type MutationCreateManagerMutationVariables = Exact<{
  createManagerInput: CreateManagerInput
}>

export type MutationCreateManagerMutation = {
  __typename?: 'Mutation'
  createManager: { __typename?: 'Manager'; id: string }
}

export type QueryFindCinemaQueryVariables = Exact<{
  where: CinemaWhereUniqueInput
}>

export type QueryFindCinemaQuery = {
  __typename?: 'Query'
  cinema: {
    __typename?: 'Cinema'
    id: string
    name: string
    screens: Array<{
      __typename?: 'Screen'
      id: string
      numberRoom: number
      seatsCount: string
      showtimes: Array<{ __typename?: 'Showtime'; id: string; startTime: any }>
    }>
  }
}

export type MutationCreateScreenMutationVariables = Exact<{
  createScreenInput: CreateScreenInput
}>

export type MutationCreateScreenMutation = {
  __typename?: 'Mutation'
  createScreen: { __typename?: 'Screen'; id: string }
}

export type SearchCinemasQueryVariables = Exact<{
  locationFilter: LocationFilterInput
  distinct: Array<CinemaScalarFieldEnum> | CinemaScalarFieldEnum
  where: CinemaWhereInput
  orderBy:
    | Array<CinemaOrderByWithRelationInput>
    | CinemaOrderByWithRelationInput
  cursor: CinemaWhereUniqueInput
  take: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}>

export type SearchCinemasQuery = {
  __typename?: 'Query'
  searchCinemas: Array<{
    __typename?: 'Cinema'
    id: string
    name: string
    address?: { __typename?: 'Address'; lng: number; lat: number } | null
  }>
}

export type MoviesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<MovieWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<MovieOrderByWithRelationInput> | MovieOrderByWithRelationInput
  >
  where?: InputMaybe<MovieWhereInput>
  distinct?: InputMaybe<Array<MovieScalarFieldEnum> | MovieScalarFieldEnum>
}>

export type MoviesQuery = {
  __typename?: 'Query'
  movies: Array<{
    __typename?: 'Movie'
    id: string
    genre: Genre
    duration: number
    director: string
    createdAt: any
    posterUrl?: string | null
    releaseDate: any
    title: string
  }>
  moviesCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type QueryCinemasQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<CinemaOrderByWithRelationInput> | CinemaOrderByWithRelationInput
  >
  where?: InputMaybe<CinemaWhereInput>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum> | CinemaScalarFieldEnum>
}>

export type QueryCinemasQuery = {
  __typename?: 'Query'
  cinemas: Array<{
    __typename?: 'Cinema'
    id: string
    name: string
    screens: Array<{
      __typename?: 'Screen'
      id: string
      numberRoom: number
      seatsCount: string
      showtimes: Array<{
        __typename?: 'Showtime'
        id: string
        startTime: any
        status?: ShowtimeStatus | null
        movie: {
          __typename?: 'Movie'
          title: string
          posterUrl?: string | null
        }
      }>
    }>
  }>
  cinemasCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type MutationCreateShowtimeMutationVariables = Exact<{
  createShowtimeInput: CreateShowtimeInput
}>

export type MutationCreateShowtimeMutation = {
  __typename?: 'Mutation'
  createShowtime: { __typename?: 'BatchPayload'; count: number }
}

export type QueryMoviesPerCinemaQueryVariables = Exact<{
  cinemaId: Scalars['String']['input']
}>

export type QueryMoviesPerCinemaQuery = {
  __typename?: 'Query'
  moviesPerCinema: Array<{
    __typename?: 'Movie'
    id: string
    title: string
    director: string
    posterUrl?: string | null
  }>
}

export type BookedSeatsInShowtimeQueryVariables = Exact<{
  showtimeId: Scalars['String']['input']
}>

export type BookedSeatsInShowtimeQuery = {
  __typename?: 'Query'
  bookedSeatsInShowtime: {
    __typename?: 'RemainingSeats'
    total: number
    booked: number
  }
}

export type ShowtimesInCinemaQueryVariables = Exact<{
  cinemaId: Scalars['String']['input']
  movieId: Scalars['String']['input']
}>

export type ShowtimesInCinemaQuery = {
  __typename?: 'Query'
  showtimesInCinema: Array<{
    __typename?: 'GroupedShowtime'
    showtimes: Array<{
      __typename?: 'ShowtimeSimple'
      id: string
      startTime: string
      screen: {
        __typename?: 'Screen'
        id: string
        price: number
        numberRoom: number
        projectionType: ProjectionType
        soundSystemType: SoundSystemType
      }
    }>
  }>
}

export type ShowtimeQueryVariables = Exact<{
  where: ShowtimeWhereUniqueInput
  showtimeId: Scalars['String']['input']
}>

export type ShowtimeQuery = {
  __typename?: 'Query'
  showtime: {
    __typename?: 'Showtime'
    screen: {
      __typename?: 'Screen'
      price: number
      seats: Array<{
        __typename?: 'Seat'
        row: number
        column: number
        booked?: boolean | null
      }>
    }
  }
}

export type MutationCreateBookingMutationVariables = Exact<{
  createBookingInput: CreateBookingInput
}>

export type MutationCreateBookingMutation = {
  __typename?: 'Mutation'
  createBooking: { __typename?: 'Booking'; id: string }
}

export type TicketsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<TicketWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<TicketOrderByWithRelationInput> | TicketOrderByWithRelationInput
  >
  where?: InputMaybe<TicketWhereInput>
  distinct?: InputMaybe<Array<TicketScalarFieldEnum> | TicketScalarFieldEnum>
}>

export type TicketsQuery = {
  __typename?: 'Query'
  tickets: Array<{
    __typename?: 'Ticket'
    userId: string
    qrCode?: string | null
    id: string
    bookings: Array<{
      __typename?: 'Booking'
      row: number
      column: number
      showtime: {
        __typename?: 'Showtime'
        startTime: any
        screen: {
          __typename?: 'Screen'
          numberRoom: number
          seats: Array<{ __typename?: 'Seat'; row: number; column: number }>
          cinema: { __typename?: 'Cinema'; name: string }
        }
        movie: {
          __typename?: 'Movie'
          title: string
          posterUrl?: string | null
        }
      }
    }>
  }>
}

export type MutationUpdateShowtimeMutationVariables = Exact<{
  updateShowtimeInput: UpdateShowtimeInput
}>

export type MutationUpdateShowtimeMutation = {
  __typename?: 'Mutation'
  updateShowtime: { __typename?: 'Showtime'; id: string }
}

export type QueryAdminMeQueryVariables = Exact<{ [key: string]: never }>

export type QueryAdminMeQuery = {
  __typename?: 'Query'
  adminMe: { __typename?: 'Admin'; id: string }
}

export type QueryMangerMeQueryVariables = Exact<{ [key: string]: never }>

export type QueryMangerMeQuery = {
  __typename?: 'Query'
  managerMe: { __typename?: 'Manager'; id: string }
}

export type WhoamiQueryVariables = Exact<{ [key: string]: never }>

export type WhoamiQuery = {
  __typename?: 'Query'
  whoami: {
    __typename?: 'User'
    id: string
    name?: string | null
    admin?: { __typename?: 'Admin'; id: string } | null
  }
}

export const namedOperations = {
  Query: {
    GetAuthsProvider: 'GetAuthsProvider',
    Users: 'Users',
    Admin: 'Admin',
    Cinema: 'Cinema',
    QueryFindCinema: 'QueryFindCinema',
    SearchCinemas: 'SearchCinemas',
    Movies: 'Movies',
    QueryCinemas: 'QueryCinemas',
    QueryMoviesPerCinema: 'QueryMoviesPerCinema',
    BookedSeatsInShowtime: 'BookedSeatsInShowtime',
    ShowtimesInCinema: 'ShowtimesInCinema',
    Showtime: 'Showtime',
    Tickets: 'Tickets',
    QueryAdminMe: 'QueryAdminMe',
    QueryMangerMe: 'QueryMangerMe',
    Whoami: 'Whoami',
  },
  Mutation: {
    Login: 'Login',
    RegisterWithProvider: 'RegisterWithProvider',
    RegisterWithCredentials: 'RegisterWithCredentials',
    MutationCreateCinema: 'MutationCreateCinema',
    MutationCreateMovie: 'MutationCreateMovie',
    MutationCreateManager: 'MutationCreateManager',
    MutationCreateScreen: 'MutationCreateScreen',
    MutationCreateShowtime: 'MutationCreateShowtime',
    MutationCreateBooking: 'MutationCreateBooking',
    MutationUpdateShowtime: 'MutationUpdateShowtime',
  },
}

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
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
export const AdminDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Admin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AdminWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'admin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>
export const CinemaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Cinema' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CinemaWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cinema' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
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
} as unknown as DocumentNode<CinemaQuery, CinemaQueryVariables>
export const MutationCreateCinemaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationCreateCinema' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createCinemaInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateCinemaInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCinema' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createCinemaInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createCinemaInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateCinemaMutation,
  MutationCreateCinemaMutationVariables
>
export const MutationCreateMovieDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationCreateMovie' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createMovieInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateMovieInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMovie' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createMovieInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createMovieInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'director' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
                { kind: 'Field', name: { kind: 'Name', value: 'genre' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateMovieMutation,
  MutationCreateMovieMutationVariables
>
export const MutationCreateManagerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationCreateManager' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createManagerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateManagerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createManager' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createManagerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createManagerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateManagerMutation,
  MutationCreateManagerMutationVariables
>
export const QueryFindCinemaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryFindCinema' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CinemaWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cinema' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'screens' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'numberRoom' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'seatsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'showtimes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'startTime' },
                            },
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
      },
    },
  ],
} as unknown as DocumentNode<
  QueryFindCinemaQuery,
  QueryFindCinemaQueryVariables
>
export const MutationCreateScreenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationCreateScreen' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createScreenInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateScreenInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createScreen' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createScreenInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createScreenInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateScreenMutation,
  MutationCreateScreenMutationVariables
>
export const SearchCinemasDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchCinemas' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locationFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'CinemaScalarFieldEnum' },
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CinemaWhereInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CinemaOrderByWithRelationInput',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CinemaWhereUniqueInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchCinemas' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
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
} as unknown as DocumentNode<SearchCinemasQuery, SearchCinemasQueryVariables>
export const MoviesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Movies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'MovieWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'MovieOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'MovieWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'MovieScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'genre' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
                { kind: 'Field', name: { kind: 'Name', value: 'director' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'moviesCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MoviesQuery, MoviesQueryVariables>
export const QueryCinemasDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryCinemas' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CinemaWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CinemaOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CinemaWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CinemaScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cinemas' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'screens' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'numberRoom' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'seatsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'showtimes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'startTime' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'movie' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'posterUrl' },
                                  },
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
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cinemasCount' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryCinemasQuery, QueryCinemasQueryVariables>
export const MutationCreateShowtimeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationCreateShowtime' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createShowtimeInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateShowtimeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createShowtime' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createShowtimeInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createShowtimeInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateShowtimeMutation,
  MutationCreateShowtimeMutationVariables
>
export const QueryMoviesPerCinemaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryMoviesPerCinema' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cinemaId' },
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
            name: { kind: 'Name', value: 'moviesPerCinema' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cinemaId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cinemaId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'director' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMoviesPerCinemaQuery,
  QueryMoviesPerCinemaQueryVariables
>
export const BookedSeatsInShowtimeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BookedSeatsInShowtime' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showtimeId' },
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
            name: { kind: 'Name', value: 'bookedSeatsInShowtime' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'showtimeId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'showtimeId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                { kind: 'Field', name: { kind: 'Name', value: 'booked' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BookedSeatsInShowtimeQuery,
  BookedSeatsInShowtimeQueryVariables
>
export const ShowtimesInCinemaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ShowtimesInCinema' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cinemaId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'movieId' },
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
            name: { kind: 'Name', value: 'showtimesInCinema' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cinemaId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cinemaId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'movieId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'showtimes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startTime' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'screen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'numberRoom' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projectionType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'soundSystemType' },
                            },
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
      },
    },
  ],
} as unknown as DocumentNode<
  ShowtimesInCinemaQuery,
  ShowtimesInCinemaQueryVariables
>
export const ShowtimeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Showtime' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ShowtimeWhereUniqueInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showtimeId' },
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
            name: { kind: 'Name', value: 'showtime' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'screen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'seats' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'row' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'column' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'booked' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'showtimeId' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'showtimeId' },
                                  },
                                },
                              ],
                            },
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
      },
    },
  ],
} as unknown as DocumentNode<ShowtimeQuery, ShowtimeQueryVariables>
export const MutationCreateBookingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationCreateBooking' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createBookingInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateBookingInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBooking' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createBookingInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createBookingInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateBookingMutation,
  MutationCreateBookingMutationVariables
>
export const TicketsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Tickets' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TicketWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'TicketOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TicketWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'TicketScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tickets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'qrCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bookings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'row' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'column' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'showtime' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'startTime' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'screen' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'seats' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'row' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'column',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'numberRoom' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'cinema' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'movie' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'posterUrl' },
                                  },
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
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TicketsQuery, TicketsQueryVariables>
export const MutationUpdateShowtimeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationUpdateShowtime' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateShowtimeInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateShowtimeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateShowtime' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateShowtimeInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateShowtimeInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateShowtimeMutation,
  MutationUpdateShowtimeMutationVariables
>
export const QueryAdminMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryAdminMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAdminMeQuery, QueryAdminMeQueryVariables>
export const QueryMangerMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryMangerMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'managerMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryMangerMeQuery, QueryMangerMeQueryVariables>
export const WhoamiDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Whoami' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'whoami' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'admin' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
} as unknown as DocumentNode<WhoamiQuery, WhoamiQueryVariables>
