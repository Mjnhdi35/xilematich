import { ReactNode } from 'react'
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
      duration: 1,
      genre: Genre.Action,
      posterUrl: '',
      releaseDate: '',
      title: '',
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
  })

export const FormProviderCreateMovie = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateMovie()

  return <FormProvider {...methods}>{children}</FormProvider>
}
