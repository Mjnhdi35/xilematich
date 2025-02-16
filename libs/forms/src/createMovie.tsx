import { memo, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaCreateMovie } from './schemas'
import { Genre } from '@xilematich/network/src/gql/generated'

export type FormTypeCreateMovie = z.infer<typeof formSchemaCreateMovie>

export const useFormCreateMovie = () =>
  useForm<FormTypeCreateMovie>({
    resolver: zodResolver(formSchemaCreateMovie),
    defaultValues: {
      director: '',
      duration: 0,
      genre: Genre.Action,
      posterUrl: '',
      releaseDate: '',
      title: '',
    },
  })

export const FormProviderCreateMovie = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateMovie()

  return <FormProvider {...methods}>{children}</FormProvider>
}
