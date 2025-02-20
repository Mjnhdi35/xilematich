import {
  Genre,
  ProjectionType,
  SoundSystemType,
} from '@xilematich/network/src/gql/generated'
import { number, z } from 'zod'

export const formSchemaRegister = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
})

export const formSchemaLogin = formSchemaRegister.pick({
  email: true,
  password: true,
})

export const formSchemaCreateMovie = z.object({
  genre: z.nativeEnum(Genre),
  title: z.string().min(1, { message: 'Title Movie name is required' }),
  director: z.string().min(1, { message: 'Director name is required' }),
  duration: z.number({ invalid_type_error: 'Duration is required.' }),
  releaseDate: z.string(),
  posterUrl: z.any(),
})

export const formSchemaCreateAddress = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string(),
})

export const formSchemaCreateScreen = z.object({
  projectionType: z.nativeEnum(ProjectionType),
  soundSystemType: z.nativeEnum(SoundSystemType),
  rows: z.number(),
  columns: z.number(),
  price: z.number(),
  numberRoom: z.number(),
})

export const formSchemaCreateCinema = z.object({
  name: z.string().min(1, { message: 'Cinema name is required' }),
  managerId: z.string().min(1, { message: 'Manager ID is required' }),
  address: formSchemaCreateAddress,
  screens: z.array(formSchemaCreateScreen),
})

export const formSchemaCreateTime = z.object({
  time: z.string(),
})

export const formSchemaCreateShowtime = z.object({
  showtimes: z.array(formSchemaCreateTime),
  screenId: z.string(),
  movieId: z.string(),
})

export const resetPasswordFormSchema = formSchemaRegister.pick({ email: true })
