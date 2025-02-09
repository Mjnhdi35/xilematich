import { z } from 'zod'

export const formSchemaRegister = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
})

export const formSchemaLogin = formSchemaRegister.pick({
  email: true,
  password: true,
})
